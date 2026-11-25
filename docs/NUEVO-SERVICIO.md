# Añadir otra página de servicio · Patrón v2

La estructura común no obliga a que todas las páginas tengan las mismas secciones. Usa Suspensiones como referencia y adapta solo el contenido particular.

## 1. Registrar recursos

Copia una fotografía en `src/assets/images/`. Registra su import y su clave en `src/data/images.ts`, siguiendo las otras entradas de `photoFiles` y `imageFiles`. Para una imagen estática que no deba procesarse, utiliza `public/images/` y el registro de URLs.

## 2. Crear datos con tipos

Ejemplo de `src/data/ebike.ts`. El texto es de muestra: debe revisarse antes de publicar.

```ts
import { photo } from './images';
import type { PageMetadata, ServiceHeroData, FaqItem, WorkflowStep } from '../types/content';

export const page: PageMetadata = {
  title: 'Servicio E-Bike en Barcelona | On Cycles',
  description: 'Diagnóstico y mantenimiento de tu e-bike.',
};
const photograph = photo('ebike.webp');
export const hero: ServiceHeroData = {
  image: photograph,
  alt: 'Servicio E-Bike On Cycles',
  width: photograph.width,
  height: photograph.height,
  eyebrow: 'Servicio E-Bike en Barcelona',
  line1: 'Tu e-bike.',
  line2: 'Siempre a punto.',
  intro: 'Reviso tu bicicleta y te explico qué necesita.',
  service: 'E-Bike',
  exploreHref: '#ebike-servicios',
  exploreLabel: 'Explora el servicio',
  exploreIcon: '↓',
  signature: 'Diagnóstico · Mantenimiento · Confianza',
};
export const faqs: FaqItem[] = [
  { question: '¿Atiendes mi sistema?', answer: 'Consulta marca, modelo y servicio.' },
];
export const workflowSteps: WorkflowStep[] = [
  { title: 'Diagnóstico', description: 'Identifico el sistema y los síntomas.' },
  { title: 'Propuesta', description: 'Te explico el trabajo y su presupuesto.' },
  { title: 'Intervención', description: 'Realizo el trabajo acordado.' },
  { title: 'Comprobación', description: 'Verifico el funcionamiento final.' },
];
```

## 3. Componer la página

Archivo `src/pages/ebike-barcelona.astro`:

```astro
---
import ServiceLayout from '../layouts/ServiceLayout.astro';
import Workflow from '../components/Workflow.astro';
import { page, hero, faqs, workflowSteps } from '../data/ebike';
import { siteImages } from '../data/images';
---

<ServiceLayout
  page={page}
  hero={hero}
  headingId="ebike-h1"
  bodyClass="oc-services-page oc-ebike-page"
  certificates={[{ name: 'Bosch', src: siteImages.bosch }]}
  faqs={faqs}
  faqHeadingId="ebike-faq-title"
  defaultService="E-Bike"
>
  <section
    id="ebike-servicios"
    class="oc-services-container oc-services-section oc-ebike-intro"
    aria-labelledby="ebike-services-title"
  >
    <h2 id="ebike-services-title">Servicios para tu e-bike</h2>
    <p>Contenido específico pendiente de revisión.</p>
  </section>
  <Workflow headingId="ebike-workflow-title" line1="Un proceso técnico." steps={workflowSteps} />
</ServiceLayout>

<style>
  /* Este selector queda encapsulado en la página. */
  .oc-ebike-intro {
    border-block-start: 1px solid var(--line);
  }
</style>
```

No copies cabecera, pie, formulario, FAQ ni Próxima salida: ya los proporciona el layout. Conserva `oc-services-page` y añade una clase propia para ajustes de página. No añadas otro H1: lo genera `ServiceHero`.

Si un estilo debe controlar un componente hijo, no confíes en que el `<style>` encapsulado del padre alcance su HTML: utiliza sus props o un selector global explícito con alcance controlado. Los certificados se pasan como datos y deben corresponder al servicio real.

## 4. Conectar y validar

- Añade `href: 'ebike-barcelona/'` al elemento E-Bike de `service-catalog.ts`. No dupliques la lista en `home.ts` ni en el formulario.
- `defaultService` y `hero.service` deben coincidir con el título de una opción del catálogo común.
- Revisa menú, enlaces y metadatos.
- `verify-build.mjs` descubre la nueva página automáticamente; ya no hay una lista `routes` que editar.
- Ejecuta `npm run verify` y `npm run format:check`. Revisa PC, tablet y móvil antes del commit.

La versión actual todavía no incluye la página E-Bike del ejemplo.
