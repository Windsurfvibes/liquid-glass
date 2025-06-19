# hey - Le SaaS qui dit bonjour

Un SaaS minimaliste qui affiche simplement "Bonjour" avec un design glassmorphism moderne.

## 🚀 Démarrage rapide

### Développement local

```bash
npm install
npm run dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000)

### Avec Docker

```bash
docker build -t hey .
docker run -p 3000:3000 hey
```

## 🛠 Stack technique

- **Frontend**: Next.js 15 + TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Animations**: Framer Motion
- **Conteneurisation**: Docker

## 📁 Structure du projet

```
src/
├── app/
│   ├── api/hello/          # API route
│   ├── globals.css         # Styles globaux + glassmorphism
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Page d'accueil
└── components/
    └── glass-hello.tsx     # Composant glassmorphism
```

## 🎨 Design

- Interface glassmorphism avec transparence
- Animations fluides d'apparition
- Design responsive mobile/desktop
- Fond blanc minimaliste
- Couleur d'accent: #fb4268

## 📝 API

### GET /api/hello

Retourne un message de salutation:

```json
{
  "message": "Bonjour",
  "timestamp": "2025-06-19T14:12:25.000Z",
  "app": "hey"
}
```

## 🔧 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Vérification ESLint
