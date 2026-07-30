# Agent notes

## Local preview

Use `$start-resume-preview` from `.agents/skills/start-resume-preview/` whenever the web or PDF preview is needed.

The skill checks port `3000`. If occupied, reuse the current server. If free, open a new VS Code integrated terminal and run `docker compose up --build --watch`.

The preview has two live outputs:

- Web: `http://localhost:3000`, updated from changes under `public/`.
- PDF: `output/Resume_LienChunHao.pdf`, regenerated after changes under `public/`.

## Viewport reports

Use an available browser or screenshot tool for `http://localhost:3000` when possible.

To capture any viewport with the built `resume-pdf` image, run an isolated Playwright container. Change `390,844` and the file name as needed:

```sh
docker run --rm --network host \
  -v /tmp:/reports \
  resume-pdf pnpm exec playwright screenshot \
  --viewport-size=390,844 \
  --full-page \
  http://127.0.0.1:3000 \
  /reports/resume-390x844.png
```

The report will be at `/tmp/resume-390x844.png` on the host. If the image does not exist yet, run `docker compose build pdf` first.

## Communication

Use simple, concise words without dropping important context.
