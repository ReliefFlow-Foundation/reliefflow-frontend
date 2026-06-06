# ReliefFlow — Web application (Next.js / WhoPays-grade README)

**ReliefFlow Web** — donor transparency, program storytelling, and field-partner onboarding pages for humanitarian cash on Stellar.

---

## 🎯 What is this app?

This frontend hosts **impact narratives**, **program mechanics**, and **integrity messaging** for ReliefFlow. PII-heavy enrollment UIs must still respect jurisdiction—pair with [`../backend/`](../backend/README.md) for sessions, OTP, and mobile-money handoffs. Static pages explain **why** Soroban escrow exists; authenticated flows belong behind API-mediated auth.

---

## ❓ Problems the **whole protocol** tackles

From the [root README](../../README.md):

- Cash aid programs struggle with **duplication**, exclusion errors, and delayed reconciliation.
- Donors demand **traceability** without exposing vulnerable populations.
- Multiple agencies often lack **interoperable** accountability standards.

---

## ✅ Goals this frontend supports

- Maintain **beneficiary records** with privacy-preserving design choices (`beneficiary-registry`).
- Run **campaign treasuries** with tranche logic (`aid-escrow`).
- Enable **integrity** workflows—challenges, appeals, audits (`fraud-challenge`).
- Publish **impact views** that aggregate outcomes without unsafe micro-data exposure.

---

## 💡 Why a dedicated **Next.js** frontend?

- **Donor trust**: Transparency dashboards start as story + roadmap, evolve into live metrics.
- **Field usability**: Partners discover playbooks via `/programs` and `/docs`.
- **Grant alignment**: `/impact` ties milestones to funding rounds.

---

## ✨ Features & surfaces (shipping roadmap)

- **📦 Programs** — campaign design narrative (`/programs`).
- **💸 Disbursement** — tranche/rail explanation (`/disbursement`).
- **🛡️ Integrity** — fraud/challenge story (`/integrity`).
- **📈 Impact** — donor-facing aggregates when wired (`/impact`).
- **🗺️ Site map** — `/` shows route truth.

---

## 🏗️ Architecture

| Layer | Choice |
| ----- | ------ |
| Framework | **Next.js 15** — App Router, React 19 |
| Language | **TypeScript** (strict) |
| Styling | **CSS variables** in `app/globals.css` — protocol-specific palette |
| Components | `components/expected-pages.tsx` — **site map table** synced with [`docs/SITE_MAP.md`](../../docs/SITE_MAP.md) |
| Data | Static/scaffold today → Server Components + [`../backend/`](../backend/README.md) for authenticated flows |
| Blockchain UX | Wallet demos optional — **RPC/signing secrets stay off this bundle** |

---

## 📁 Project structure

```
apps/web/
├── app/
│   ├── layout.tsx       # Shell: metadata + nav links
│   ├── page.tsx         # Landing + <ExpectedPages /> site map
│   ├── globals.css      # Design tokens / theme
│   └── …                # Feature routes (see route tables below)
├── components/
│   └── expected-pages.tsx
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md            # ← you are here
```

---

## 🗺️ Routes

### Header navigation

| Route | Label | Notes |
| ----- | ----- | ----- |
| `/programs` | Programs | Primary navigation |
| `/disbursement` | Disbursement | Primary navigation |
| `/integrity` | Integrity | Primary navigation |
| `/impact` | Impact | Primary navigation |
| `/roadmap` | Roadmap | Primary navigation |
| `/docs` | Docs | Primary navigation |

### Full backlog (canonical)

Authoritative **purpose + status**: [`../../docs/SITE_MAP.md`](../../docs/SITE_MAP.md).

| Route | Purpose | Status |
| ----- | ------- | ------ |
| `/` | Landing + site map | Scaffold * |
| `/programs` | Campaign design and treasury | Planned |
| `/disbursement` | Tranche scheduling and rails | Planned |
| `/integrity` | Fraud challenges and appeals | Planned |
| `/impact` | Donor transparency dashboards | Planned |
| `/roadmap` | Field rollout plan | Scaffold * |
| `/docs` | Humanitarian ops playbook | Scaffold * |

The **Expected pages** section on **`/`** mirrors this table so visitors see delivery honesty without opening GitHub.

---

## 🚀 Quick start

### Prerequisites

- **Node.js** 20.x or **22.x** (LTS)
- npm (pnpm/yarn OK if your org standardizes)

### Install & run (dev)

```bash
cd apps/web
npm install
npm run dev
```

Open **http://localhost:3000**

### Run **with** the API (integration dev)

```bash
# Terminal A — backend
cd ../backend && npm install && cp .env.example .env && npm run dev

# Terminal B — web (this folder)
cd ../web && npm run dev
```

Match [`../backend/README.md`](../backend/README.md) CORS origin ↔ Next origin.

---

## 📜 Available scripts

| Command | Purpose |
| ------- | ------- |
| `npm run dev` | Dev server + hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve production output |
| `npm run lint` | ESLint (`next/core-web-vitals`) |

---

## 🔐 Environment variables

### Baseline

Static scaffold needs **no secrets**. Use `.env.local` (gitignored) for optional public config.

### Planned **browser-safe** vars (`NEXT_PUBLIC_*` only)

Never put private keys or RPC URLs here.

| Variable | Example | Purpose |
| -------- | ------- | ------- |
| `NEXT_PUBLIC_BACKEND_URL` | `http://localhost:8080` | Secure API entry. |
| `NEXT_PUBLIC_IMPACT_MODE` | `demo` | Toggle synthetic charts during pilots. |

---

## 🔗 Integration contract

- **REST**: Call [`apps/backend`](../backend/README.md) under `/api/v1/*` from Route Handlers or authenticated clients—never ship server secrets to `NEXT_PUBLIC_*`.
- **Soroban**: Demonstrate wallet flows with **test keys** only; production signing patterns belong in backend or secure wallets.
- **Contracts**: Rules live in [`../../contracts/`](../../contracts/) — UI reflects state via Horizon/indexers/backend.

---

## 🧪 Testing & quality gates

```bash
npm run lint
npm run build
```

Fix all ESLint + TypeScript errors before merging.

---

## 🚢 Deployment (e.g. Vercel / Netlify / Cloudflare Pages)

1. Set **build command**: `npm run build`
2. Set **output**: Next.js default (`.next`)
3. Configure **`NEXT_PUBLIC_*`** env vars per environment
4. Point **`NEXT_PUBLIC_BACKEND_URL`** at your deployed API
5. Enable **preview deployments** for grant demo links

---

## 🤝 Contributing

See [`../../CONTRIBUTING.md`](../../CONTRIBUTING.md). UI changes should stay aligned with [`../../docs/SITE_MAP.md`](../../docs/SITE_MAP.md).

---

## 📄 License

Match repository license (Apache-2.0 common for OSS grants).

---

## 📞 Support & docs

| Resource | Link |
| -------- | ---- |
| Monorepo overview | [`../../README.md`](../../README.md) |
| Backend API | [`../backend/README.md`](../backend/README.md) |
| Site map | [`../../docs/SITE_MAP.md`](../../docs/SITE_MAP.md) |
| Layout plan | [`../../docs/layout-plan.md`](../../docs/layout-plan.md) |
| Milestones → issues | [`../../docs/milestones-issues.md`](../../docs/milestones-issues.md) |

---

**npm package:** `reliefflow-web` · **Slug:** `reliefflow` · **Stack:** Next.js App Router

**Ship it.** 🚀
