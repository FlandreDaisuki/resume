FROM node:24-bookworm-slim AS pdf

ARG PNPM_VERSION=11.0.0

ENV CI=true
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN npm install --global "pnpm@${PNPM_VERSION}" \
    && pnpm install --frozen-lockfile \
    && pnpm exec playwright install --with-deps chromium \
    && rm -rf /var/lib/apt/lists/*

COPY scripts ./scripts

USER node

CMD ["pnpm", "run", "pdf"]
