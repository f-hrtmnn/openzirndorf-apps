# Flohmarkt – Frontend

React-App für den Garagenflohmarkt Zirndorf.
Zeigt eine Karte mit allen angemeldeten Ständen und ein Formular zum Anmelden eines eigenen Standes.

Deployed auf GitHub Pages unter:
`https://f-hrtmnn.github.io/openzirndorf-apps/flohmarkt/`

---

## Inhaltsverzeichnis

1. [Was ist was?](#was-ist-was)
2. [Voraussetzungen](#voraussetzungen)
3. [Lokale Entwicklung](#lokale-entwicklung)
4. [Deployen auf GitHub Pages](#deployen-auf-github-pages)
5. [Umgebungsvariablen](#umgebungsvariablen)
6. [Verbindung zum Backend](#verbindung-zum-backend)

---

## Was ist was?

```
apps/flohmarkt/
├── src/
│   ├── main.tsx                    ← Einstiegspunkt der App
│   ├── api.ts                      ← Alle Anfragen ans Backend
│   ├── types.ts                    ← TypeScript-Typdefinitionen
│   └── components/
│       ├── flohmarkt-app.tsx       ← Hauptkomponente (lädt Daten, koordiniert alles)
│       ├── flohmarkt-map.tsx       ← Interaktive Karte (MapLibre + OpenFreeMap)
│       ├── stand-form.tsx          ← Formular zum Anmelden eines Standes
│       └── stand-liste.tsx         ← Liste aller freigegebenen Stände
├── .env.local                      ← Lokale Einstellungen (NICHT ins Git!)
├── .env.production                 ← Produktionseinstellungen (ins Git)
├── index.html                      ← HTML-Grundgerüst
├── vite.config.ts                  ← Build-Konfiguration
└── package.json                    ← Abhängigkeiten & Skripte
```

**Wichtige Begriffe für Einsteiger:**
- **React** – JavaScript-Framework zum Bauen von Benutzeroberflächen
- **Vite** – Build-Tool, das den React-Code für den Browser vorbereitet
- **MapLibre** – Open-Source Karten-Bibliothek (wie Google Maps, aber kostenlos)
- **GitHub Pages** – kostenloser Hosting-Dienst von GitHub für statische Webseiten
- **GitHub Actions** – automatisiert das Bauen und Deployen bei jedem Git-Push
- **Umgebungsvariablen** – Einstellungen die sich je nach Umgebung (lokal/Produktion) unterscheiden

---

## Voraussetzungen

```bash
# Node.js 22 (falls nicht vorhanden)
curl -fsSL https://fnm.vercel.app/install | bash
fnm install 22
fnm use 22

# pnpm (Paketmanager)
corepack enable
corepack prepare pnpm@10.32.1 --activate
```

---

## Lokale Entwicklung

```bash
# 1. In den Monorepo-Ordner wechseln
cd /home/fabian/openzirndorf-apps

# 2. Abhängigkeiten installieren (einmalig oder nach package.json-Änderungen)
pnpm install

# 3. .env.local anlegen (einmalig)
cat > apps/flohmarkt/.env.local << EOF
VITE_API_URL=http://localhost:8080
VITE_API_USERNAME=flohmarkt
VITE_API_PASSWORD=GLEICHER_WERT_WIE_IN_BACKEND_.env.local
EOF

# 4. Frontend starten
pnpm --filter @openzirndorf/flohmarkt dev
# → http://localhost:5173/flohmarkt/

# Das Backend muss separat laufen (siehe garage-backend/README.md)
```

---

## Deployen auf GitHub Pages

Das Deployen passiert **automatisch** bei jedem Push auf `main` über GitHub Actions.

### Einmalige Einrichtung (nur beim ersten Mal)

**1. GitHub Pages aktivieren:**

`https://github.com/f-hrtmnn/openzirndorf-apps/settings/pages`
→ Source: **GitHub Actions** auswählen → Speichern

**2. GitHub Secrets anlegen:**

`https://github.com/f-hrtmnn/openzirndorf-apps/settings/secrets/actions`
→ **New repository secret** für jedes der folgenden:

| Secret-Name | Wert |
|-------------|------|
| `VITE_API_USERNAME` | `flohmarkt` |
| `VITE_API_PASSWORD` | Gleiches Passwort wie `api_password` in `terraform.tfvars` |

> **Warum Secrets?** Das Passwort soll nicht im Git-Repository sichtbar sein.
> GitHub Actions injiziert es unsichtbar beim Bauen der App.

**3. Fertig!** Ab jetzt deployt jeder Push automatisch.

### Manuell deployen (ohne Code-Änderung)

`https://github.com/f-hrtmnn/openzirndorf-apps/actions/workflows/deploy-apps.yml`
→ **Run workflow** klicken

---

## Umgebungsvariablen

| Variable | Beschreibung | Wo gesetzt |
|----------|-------------|------------|
| `VITE_API_URL` | URL des Backends | `.env.local` / `.env.production` |
| `VITE_API_USERNAME` | Basic-Auth Benutzername | `.env.local` / GitHub Secret |
| `VITE_API_PASSWORD` | Basic-Auth Passwort | `.env.local` / GitHub Secret |

> **Wichtig:** Variablen die mit `VITE_` beginnen werden ins JavaScript-Bundle eingebaut
> und sind damit im Browser sichtbar. Niemals echte Geheimnisse (Datenbankpasswörter,
> Admin-Token) als `VITE_`-Variable setzen.

---

## Verbindung zum Backend

Die Datei [src/api.ts](src/api.ts) enthält alle Aufrufe ans Backend:

| Funktion | Endpunkt | Auth | Wann aufgerufen |
|----------|----------|------|----------------|
| `fetchStands()` | `GET /stands` | – | Beim Laden der Seite |
| `fetchGeoJSON()` | `GET /stands/geojson` | – | Beim Laden der Karte |
| `createStand()` | `POST /stands` | Basic Auth | Beim Absenden des Formulars |

Das Backend läuft lokal auf `http://localhost:8080` und in Produktion auf
`https://openzirndorfcouyb8pc-flohmarkt-api.functions.fnc.fr-par.scw.cloud` (gesteuert durch `VITE_API_URL`).
