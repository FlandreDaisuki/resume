---
name: start-resume-preview
description: Start or reuse this resume project's live web and PDF preview. Use when Codex needs localhost:3000, output/Resume_LienChunHao.pdf, or must launch `docker compose up --build --watch` in a VS Code integrated terminal. If port 3000 is occupied, reuse it and do not start another server.
---

# Start Resume Preview

Run this from the repository root:

```sh
python3 .agents/skills/start-resume-preview/scripts/start_preview.py
```

The script checks port `3000` first. When the port is free, it opens a new VS Code integrated terminal and runs:

```sh
docker compose up --build --watch
```

If GUI control is blocked by the sandbox, request approval and run the script again with GUI access.

After launch:

1. Verify `http://localhost:3000` responds.
2. Keep the VS Code terminal running.
3. Treat `output/Resume_LienChunHao.pdf` as the source-aware PDF artifact.
