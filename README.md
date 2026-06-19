# Git-standarder

## Commit-meldinger
Alle commit-meldinger skal starte med en av følgende prefiks:

- **add:** - Ny funksjonalitet
- **fix:** - Feilrettinger
- **doc:** - Dokumentasjonsendringer

**Eksempler:**

add: shopping cart persistence feature

fix: price calculation in cart total

doc: update readme with new api endpoints

## Branching og PR-prosess
- Nye features og fixes gjøres på egen branch
- Merge til `main` gjennom Pull Request
- Krever minst én code review før merge
- Små dokumentasjonsendringer kan committes direkte til `main` (bruk sunn fornuft)

## Vercel-deploy
- Frontend er konfigurert for deploy fra prosjektroten med `vercel.json` (kun den statiske Vite/React-delen deployes til Vercel).
- Sett `VITE_API_BASE_URL` i Vercel til backendens offentlige API-URL, for eksempel `https://din-backend.example.com/api`.
- Se `app/frontend/.env.example` for forventet format.
- Backend (Django/DRF i `app/backend`) er **ikke** Next.js/Node og kjører ikke som Vercel serverless functions. Den må deployes separat, f.eks. på Render, Railway, Fly.io eller en VPS, og CORS/`DJANGO_ALLOWED_HOSTS` må tillate Vercel-domenet.
- Backend bruker SQLite lokalt som standard. SQLite skriver til disk og fungerer ikke på Vercels serverless-arkitektur (read-only/ephemeral filsystem). Sett `USE_POSTGRES=true` og koble til en ekte Postgres-database (f.eks. Render Postgres, Supabase eller Neon) i produksjon — se `app/backend/.env.example`.
