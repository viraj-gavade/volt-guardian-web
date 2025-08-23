# TS Express Mongo Starter

## Quickstart

```bash
cp .env.example .env
npm install
npm run dev
```

### Docker
```bash
docker compose up --build
```

### REST
- `GET /health` -> `{ status: "ok" }`
- `POST /api/v1/auth/register` -> `{ token, user }`
- `POST /api/v1/auth/login` -> `{ token, user }`
- `GET /api/v1/auth/me` (Bearer token) -> `{ user }`
- `GET /api/v1/users` (admin only) -> `{ users }`

Extend by adding modules in `src/modules/<domain>` and plug router in `src/routes/v1/index.ts`.
