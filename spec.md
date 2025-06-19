## 1. Description du projet

Nom : hey

Description : le saas qui dit bonjour

Fonctionnalites principales : Le projet "hey" est un SaaS minimaliste dont l'unique fonction est de saluer l'utilisateur. Lorsqu'un utilisateur accède à l'interface, le SaaS affiche simplement un message de bienvenue, "Bonjour". Cette simplicité est au cœur de l'expérience utilisateur, offrant une interaction immédiate et sans complexité.

## 2. Fonctionnalite principale

Le projet doit se limiter seulement à la fonctionnalité essentielle de saluer l'utilisateur avec un message "Bonjour".

## 3. Design et ergonomie

- Layout minimal
- **Interface professionnelle sans scroll**
- **Il faut que l'interface soit vendeuse et attrayante**
- Adopte une approche produit moderne
- Design minimaliste façon shadcn/ui
- Fait des animations fluides entre les étapes
- Contraste élevé avec du glassmorphism pour moderniser l'interface
- Le background est blanc
- Utilisation maximale de l'écran
- Transitions fluides et subtiles
- **Découpage en étapes claires pour une UX optimale**
- **Progression visuelle entre chaque action**

### Couleurs de l'interface
- Couleur primaire : transparent
- Couleur secondaire : rgba(255,255,255,0.25)
- Couleur d'accent : #fb4268

```html
<div class='glass-container'>
  <div class='glass-filter'></div>
  <div class='glass-overlay'></div>
  <div class='glass-specular'></div>
  <div class='glass-content'>Bonjour</div>
</div>
```

```css
:root {
  --lg-bg-color: rgba(255,255,255,0.25);
  --lg-highlight: rgba(255,255,255,0.75);
  --lg-text: #fff;
  --lg-red: #fb4268;
  --lg-grey: #444739;
}

.glass-container {
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 6px 6px rgba(0,0,0,.2), 0 0 20px rgba(0,0,0,.1);
  color: var(--lg-text);
  transition: all .4s cubic-bezier(.175,.885,.32,2.2);
}

.glass-filter, .glass-overlay, .glass-specular {
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

.glass-filter {
  z-index: 0;
  backdrop-filter: blur(4px);
  filter: saturate(120%) brightness(1.15);
}

.glass-overlay {
  z-index: 1;
  background: var(--lg-bg-color);
}

.glass-specular {
  z-index: 2;
  box-shadow: inset 1px 1px 0 var(--lg-highlight), inset 0 0 5px var(--lg-highlight);
}

.glass-content {
  position: relative;
  z-index: 3;
}
```

## 4. Stack Technique

Technologies obligatoire :
- Frontend : Next.js + Shadcn/ui  
- Backend : API Routes (Next.js)  
- Conteneurisation : Dockerfile  
- Animation : Framer Motion 

## 5. Interface Utilisateur

- Interface simple et intuitive
- Design épuré
- Centrée sur une action principale
- Responsive mobile/desktop

## 6. Conteneurisation

Le projet doit pouvoir être lancé via un Dockerfile simple

## 7. Consignes d'implementation

- Prioriser la simplicité
- Créer .env file avant de créer le fichier .gitignore
- Ne pas surconcevoir
- Construire un socle fonctionnel minimal avant toute extension.