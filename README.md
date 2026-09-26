# Kimo ERP

An ERP for manufacturing, inventory, purchasing, sales, and accounting.

> Early scaffold — the monorepo and tooling are in place; domain modules are still WIP.

## Stack

| Layer    | Tech                                      |
| -------- | ----------------------------------------- |
| Backend  | Rust, Axum, PostgreSQL, SQLx (planned)    |
| Frontend | SolidJS, Vite, TanStack Start (app shell) |
| Tooling  | moon, proto, pnpm, lefthook, Cocogitto    |

## Layout

```
backend/
  bins/api/       # HTTP API binary
  crates/         # shared Rust crates (empty for now)
frontend/
  apps/erp/       # Solid ERP web app
  packages/       # shared frontend packages (empty for now)
.moon/            # moon workspace
scripts/          # version bump helpers for Cocogitto hooks
cog.toml          # Conventional Commits + monorepo packages
lefthook.yml      # git hooks (fmt/lint + commit-msg)
```

Project IDs come from folder names — keep leaf names unique across `backend/bins`, `backend/crates`, `frontend/apps`, and `frontend/packages`.

## Versioning

Each surface versions **independently** via [Cocogitto](https://docs.cocogitto.io/guide/monorepo.html) monorepo packages:

| Package | Path | Manifest | Git tag |
| ------- | ---- | -------- | ------- |
| `backend` | `backend/` | `backend/Cargo.toml` → `workspace.package.version` | `backend-x.y.z` |
| `frontend` | `frontend/` | `frontend/apps/erp/package.json` → `version` | `frontend-x.y.z` |
| `mobile` (later) | `mobile/` | its app manifest | `mobile-x.y.z` |

Bump hooks sync the manifests (`scripts/bump-*-version.sh`). No global product tag — packages can diverge (e.g. mobile behind API/web).

```sh
# After the first commit, seed current versions once:
git tag backend-0.1.0
git tag frontend-0.1.0

# Later releases (from conventional commits since each package tag):
cog bump --auto                         # bump all changed packages
cog bump --package backend --auto       # backend only
cog bump --package frontend --auto      # frontend only
cog bump --package backend --dry-run --auto
```

## Prerequisites

- [proto](https://moonrepo.dev/proto) — pins moon, node, pnpm
- [rustup](https://rustup.rs/) — toolchain from `backend/rust-toolchain.toml` (1.98.0)
- [Cocogitto](https://docs.cocogitto.io/) (`cog`) — commit message checks via lefthook
- PostgreSQL 16+ (when the API is wired to a database)

```sh
proto use
lefthook install
```

## Commands

```sh
moon run api:dev      # Rust API
moon run erp:dev      # Solid web app
moon run backend:check
moon run frontend:check
moon run :fmt         # format checks across projects that define fmt
```

## License

Proprietary. See [LICENSE](./LICENSE).
