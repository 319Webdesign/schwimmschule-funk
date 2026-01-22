# Schwimmschule Funk - Website

Professionelle Fullstack Next.js App für die Schwimmschule Funk mit Standorten in Darmstadt, Dieburg, Dresden und Mainz.

## Technologie-Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Icons)

## Features

### Öffentliche Seiten
- **Home**: Hero-Sektion mit Call-to-Action
- **Standorte**: Übersicht aller Standorte mit SEO-optimierten Texten
- **Kurse**: Interaktive Kursübersicht mit Filter-Funktion nach Standort

### Admin-Dashboard
- Teilnehmerübersicht mit Filter nach Standort
- Statistiken (Umsatz, aktive Teilnehmer, Auslastung)
- CSV-Export der Kursliste
- Sammelrechnungen-Generierung (vorbereitet für Datenbankanbindung)

## Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build
npm start
```

Die App läuft dann auf [http://localhost:3000](http://localhost:3000)

## Design

- **Farben**: 
  - Tiefes Meeresblau: `#003d5b`
  - Türkis: `#0077b6`
- **Stil**: Modern, vertrauenserweckend, mobile-first optimiert

## Nächste Schritte

Die App ist vorbereitet für:
- Stripe Payment Integration
- Datenbankanbindung (Prisma/PostgreSQL)
- Authentifizierung für Admin-Bereich
- E-Mail-Benachrichtigungen

## Projektstruktur

```
/
├── app/
│   ├── admin/          # Admin-Dashboard
│   ├── kurse/          # Kursübersicht
│   ├── standorte/      # Standort-Übersicht
│   ├── layout.tsx      # Root Layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Globale Styles
├── components/
│   └── Navigation.tsx  # Navigation-Komponente
└── package.json
```
# schwimmschule-funk
