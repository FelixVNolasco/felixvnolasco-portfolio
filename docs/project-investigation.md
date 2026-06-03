# Investigacion inicial del proyecto

Fecha: 2026-06-03

## Resumen

Este repositorio es un portfolio personal construido con Next.js 12, React 17, TypeScript, Tailwind CSS 3 y Sass. La aplicacion usa el router clasico de Next en `pages/`, con una sola pagina principal que compone secciones reutilizables desde `components/`.

El proyecto esta en una etapa ligera, pero ya cuenta con una base inicial de pruebas y calidad. El contenido editable principal vive en `data/portfolio.ts` y la configuracion de TypeScript todavia permite bastante flexibilidad (`strict: false`, `allowJs: true`). El foco siguiente deberia ser fortalecer tipos y mantener pruebas alrededor de cada cambio visual o de contenido.

## Stack detectado

- Framework: Next.js 12.0.9.
- UI: React 17.0.2.
- Lenguaje: TypeScript con soporte para JavaScript.
- Estilos: Tailwind CSS 3, CSS global y Sass habilitado en Next.
- SEO: `next-seo`.
- Progreso de navegacion: `nextjs-progressbar`.
- Iconos: `react-icons`.
- Calidad actual: ESLint con `next/core-web-vitals`, Prettier instalado, Husky, Commitlint, typecheck, Jest/React Testing Library y Playwright configurados.
- CI actual: validacion de mensajes de commit y release automatizado con conventional changelog.

## Estructura relevante

- `pages/index.tsx`: pagina principal del portfolio.
- `pages/_app.tsx`: configuracion global, SEO, favicon y progress bar.
- `pages/404.tsx`: pagina de error personalizada.
- `components/Header`: navegacion y enlaces principales.
- `components/About`: presentacion personal y avatar.
- `components/Skills`: lista de habilidades.
- `components/Projects`: proyectos destacados.
- `components/Contact`: enlaces de contacto.
- `styles/globals.css`: Tailwind, fuentes externas y color base del body.
- `tailwind.config.js`: tema, color `primary`, fuentes y breakpoint `custom`.
- `data/portfolio.ts`: datos editables del portfolio.
- `__tests__/`: pruebas unitarias y de integracion con Jest.
- `tests/e2e/`: pruebas end-to-end y accesibilidad con Playwright.

## Hallazgos iniciales

1. npm quedo como package manager oficial y `package-lock.json` como lockfile unico.
2. `README.md`, `USING.md` y `CONTRIBUTING.md` fueron actualizados para reflejar la estructura real.
3. El contenido editable principal fue centralizado en `data/portfolio.ts`.
4. Se limpiaron imports, estado sin uso y labels accesibles incorrectos.
5. El avatar usa un asset local estable en `public/assests/avatar.jpg`.
6. Se agregaron pruebas con Jest/React Testing Library y Playwright.
7. Git reporta `dubious ownership` en este entorno por diferencia entre el usuario propietario del repo y el usuario del sandbox. Para operaciones Git locales podria requerirse configurar `safe.directory`.
8. npm reporta vulnerabilidades heredadas del stack actual. Antes de publicar cambios mayores conviene evaluar upgrades de Next, React y tooling.

## Reglas de trabajo recomendadas

### Codigo

- Mantener componentes funcionales con TypeScript.
- Evitar `any` en props nuevas; definir tipos explicitos para componentes y datos.
- Mantener la estructura por secciones dentro de `components/Nombre/Nombre.component.tsx`.
- Centralizar datos editables del portfolio en un archivo tipado, por ejemplo `data/profile.ts` o `data/portfolio.ts`, antes de seguir duplicando contenido en JSX.
- No introducir librerias nuevas sin una razon clara; el proyecto ya cubre UI basica con Tailwind y `react-icons`.
- Limpiar imports, estados y codigo sin uso como parte de cada cambio.
- Agregar cleanup a efectos con listeners o timers.
- Mantener accesibilidad minima en enlaces e iconos: `aria-label` descriptivo, texto alternativo real y enlaces externos con `rel="noopener noreferrer"`.

### Estilos y UI

- Usar Tailwind como herramienta principal de estilos.
- Respetar la paleta oscura actual basada en `bg-zinc-900` y `primary: #010101`, salvo que se haga un rediseño intencional.
- Mantener responsividad desde mobile first.
- Evitar que contenido largo rompa tarjetas de proyectos o enlaces en pantallas pequenas.
- Preferir imagenes locales para assets estables del portfolio, especialmente el avatar.

### Git y commits

- Usar Conventional Commits porque Commitlint y release automatizado ya dependen de ese formato.
- Ejemplos validos: `feat: add project data source`, `fix: correct contact aria labels`, `chore: configure tests`.
- Antes de operar con Git en este entorno, resolver `safe.directory` si se necesita `git status`, commits o branches.

### Dependencias

- Elegir entre npm o yarn y eliminar el lockfile que no corresponda.
- Recomendacion inicial: usar npm porque existe `package-lock.json` y el script probado fue `npm run build`.
- Despues de instalar dependencias, validar que `npm run build` y `npm run lint` funcionen.

## Testing recomendado

### 1. Calidad estatica

Aplicar en cada PR:

- `npm run lint` para reglas Next/Core Web Vitals.
- `npm run build` para validar compilacion, tipos compatibles y rutas.
- `npm run typecheck` para validar TypeScript sin emitir archivos.

Siguiente mejora recomendada:

- Considerar activar `strict: true` gradualmente cuando el codigo este tipado.

### 2. Pruebas unitarias

Objetivo: validar componentes pequenos y logica de renderizado.

Herramientas configuradas:

- Jest o Vitest.
- React Testing Library.
- `@testing-library/jest-dom`.

Casos iniciales:

- `Header` renderiza enlaces de navegacion y contacto.
- `About` muestra nombre, rol, texto y enlaces correctos.
- `Skills` renderiza habilidades principales.
- `Projects` renderiza todos los proyectos con enlaces externos.
- `Contact` expone enlaces accesibles por nombre.

### 3. Pruebas de integracion

Objetivo: validar la pagina completa sin abrir navegador real.

Casos iniciales:

- `pages/index` renderiza Header, About, Skills, Projects y Contact.
- Los anchors `#skills`, `#projects` y `#contact` existen y corresponden con la navegacion.
- La pagina 404 permite volver a `/`.

### 4. Pruebas end-to-end

Objetivo: validar experiencia real en navegador.

Herramienta configurada:

- Playwright.

Casos iniciales:

- La home carga sin errores visibles.
- La navegacion por anchors desplaza a las secciones correctas.
- Los enlaces externos tienen `target="_blank"` y `rel="noopener noreferrer"`.
- La pagina 404 se muestra para una ruta inexistente.
- Capturas basicas en mobile y desktop para detectar overflow.

### 5. Pruebas de accesibilidad

Objetivo: evitar regresiones faciles en un portfolio publico.

Herramientas configuradas:

- `@axe-core/playwright` para checks E2E.
- Revision manual con Lighthouse.

Casos iniciales:

- Labels correctos en botones/enlaces solo con iconos.
- Contraste suficiente en texto gris sobre fondo oscuro.
- Orden de headings razonable.
- Alt text descriptivo en imagenes.

### 6. Pruebas visuales

Objetivo: proteger la presentacion publica del portfolio.

Herramientas sugeridas:

- Playwright screenshots como baseline local.
- Opcionalmente Percy, Chromatic o similar si se requiere revision visual en CI.

Casos iniciales:

- Home desktop.
- Home mobile.
- 404 desktop/mobile.

## Siguientes pasos priorizados

1. Resolver el estado Git del entorno si se van a crear commits: configurar `safe.directory`.
2. Ejecutar la bateria de calidad en cada PR: `npm run lint`, `npm run typecheck`, `npm run build`, `npm test` y `npm run test:e2e`.
3. Revisar vulnerabilidades reportadas por npm y planear upgrade gradual del stack.
4. Evaluar activar `strict: true` de forma incremental.
5. Agregar snapshots visuales con baseline si se necesita proteccion visual mas fuerte.
6. Mantener `data/portfolio.ts` como fuente de verdad para datos editables.

## Linea base de verificacion

Comando intentado:

```bash
npm run build
```

Resultado inicial:

```text
"next" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.
```

Interpretacion inicial: faltaban dependencias instaladas en el workspace. Despues se instalaron con npm y se agregaron scripts de validacion y testing.
