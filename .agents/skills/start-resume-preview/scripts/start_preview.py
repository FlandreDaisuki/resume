#!/usr/bin/env python3

import argparse
import ctypes
import shlex
import socket
import subprocess
import time
from pathlib import Path


def port_is_occupied(port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        try:
            sock.bind(("127.0.0.1", port))
        except OSError:
            return True
    return False


def find_vscode_window(workspace_name: str) -> int | None:
    result = subprocess.run(
        ["wmctrl", "-lx"],
        check=True,
        capture_output=True,
        text=True,
    )

    for line in result.stdout.splitlines():
        lowered = line.lower()
        if "code.code" in lowered and workspace_name.lower() in lowered:
            return int(line.split()[0], 16)

    return None


def get_vscode_window(workspace: Path) -> int:
    window = find_vscode_window(workspace.name)
    if window is not None:
        return window

    subprocess.run(["code", "--reuse-window", str(workspace)], check=True)

    for _ in range(20):
        time.sleep(0.5)
        window = find_vscode_window(workspace.name)
        if window is not None:
            return window

    raise RuntimeError(f"Could not find the VS Code window for {workspace.name}")


def open_terminal_and_run(window: int, command: str) -> None:
    libxdo = ctypes.CDLL("libxdo.so.3")
    libxdo.xdo_new.argtypes = [ctypes.c_char_p]
    libxdo.xdo_new.restype = ctypes.c_void_p
    libxdo.xdo_activate_window.argtypes = [ctypes.c_void_p, ctypes.c_ulong]
    libxdo.xdo_send_keysequence_window.argtypes = [
        ctypes.c_void_p,
        ctypes.c_ulong,
        ctypes.c_char_p,
        ctypes.c_uint,
    ]
    libxdo.xdo_enter_text_window.argtypes = [
        ctypes.c_void_p,
        ctypes.c_ulong,
        ctypes.c_char_p,
        ctypes.c_uint,
    ]

    handle = libxdo.xdo_new(None)
    if not handle:
        raise RuntimeError("Could not connect to the X11 display")

    target = ctypes.c_ulong(window)
    libxdo.xdo_activate_window(handle, target)
    time.sleep(0.5)
    libxdo.xdo_send_keysequence_window(
        handle,
        target,
        b"ctrl+shift+grave",
        12_000,
    )
    time.sleep(1)
    libxdo.xdo_enter_text_window(
        handle,
        target,
        command.encode(),
        12_000,
    )
    libxdo.xdo_send_keysequence_window(handle, target, b"Return", 12_000)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=3000)
    parser.add_argument("--workspace", type=Path, default=Path.cwd())
    args = parser.parse_args()
    workspace = args.workspace.resolve()

    if port_is_occupied(args.port):
        print(f"Port {args.port} is already in use; reuse the current preview.")
        return

    if not (workspace / "compose.yaml").is_file():
        raise RuntimeError(f"No compose.yaml found in {workspace}")

    window = get_vscode_window(workspace)
    command = (
        f"cd {shlex.quote(str(workspace))} "
        "&& docker compose up --build --watch"
    )
    open_terminal_and_run(window, command)
    print("Started the preview in a new VS Code integrated terminal.")


if __name__ == "__main__":
    main()
