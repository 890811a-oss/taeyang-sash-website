# LX Z:IN 스타일 홈페이지

Korean premium interior/window (창호) brand website modeled closely on lxzin.com, with reference analysis of ylchem.co.kr (영림창호).

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

- Frontend-only brand site at `artifacts/zin-home` (previewPath `/`), all UI in Korean
- Pages: 홈 (hero slider), 브랜드스토리, 시공사례 (filterable gallery), 인테리어가이드, 제품보기 (tabs: 창호/도어/주방/바닥재), 상담신청 (local-validated form), 매장찾기, 이벤트
- Brand tokens from lxzin.com: accent red #C31A14, charcoal #212121, Noto Sans KR, 0px radius, near-white backgrounds
- Reference assets in `attached_assets/` (logo, homepage screenshots)

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
