# Client Template - Web Corporativa

Plantilla base para sitios web corporativos construida con Next.js 16 + Tailwind CSS v4.

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
npm run dev
```

## Personalización

### Colores
Edita `src/app/globals.css` — cambia las variables CSS en `:root` y `@theme inline`.

### Contenido
Todo el contenido de la landing page está en `src/app/page.tsx`. Los textos, servicios, testimonios y datos de contacto se editan directamente ahí.

### Logo
Reemplaza el marcador "F" en el navbar/footer por tu logo en `public/images/`.

### Metadatos SEO
Edita `src/app/layout.tsx` — cambia `title`, `description` y `metadataBase`.

## Compilación para producción

```bash
npm run build
npm start
```

## Despliegue

Recomendado: [Vercel](https://vercel.com) (gratuito).
