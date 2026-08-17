# Breathedge 2 Wiki

Official wiki for **Breathedge 2** (Steam — App ID 2412960).

- Live site: https://breathedge2.wiki
- Deploy: Cloudflare Workers Builds (Git integration) — v1.0.0
- Build: `corepack enable && pnpm install --frozen-lockfile && pnpm run build`

## 部署
Cloudflare Worker Static Assets + **CF 原生 Worker Builds Git 集成**（push main → 自动构建+部署）。
