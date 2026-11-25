# Crear otra página de servicio

Usa Suspensiones como ejemplo real ya compilado. `ServiceLayout` controla el contenido común y no impone las secciones particulares de cada servicio.

1. Crea `src/data/ebike.js` con metadatos, datos de hero, proceso y preguntas propias.
2. Registra las fotografías nuevas en `src/data/images.js` y copia sus archivos en `public/images/`.
3. Crea `src/pages/ebike-barcelona.astro` con esta composición:

```astro
---
import ServiceLayout from '../layouts/ServiceLayout.astro';
import Workflow from '../components/Workflow.astro';
import { page, hero, faqs, workflowSteps } from '../data/ebike.js';
import { siteImages } from '../data/images.js';
import '../styles/ebike.css';
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
  <!-- Breadcrumb, introducción, cards y marcas específicos de E-Bike. -->
  <Workflow headingId="ebike-workflow-title" line1="Un proceso técnico." steps={workflowSteps} />
</ServiceLayout>
```

`page` contiene `title` y `description`. Los campos de `hero` están documentados por la interfaz Props de `ServiceHero.astro` y tienen un ejemplo completo en `data/services.js`. Las preguntas y los pasos son parejas `[título, texto]`.

Los estilos de E-Bike deben limitarse a `.oc-ebike-page` o a clases propias. Conserva las clases compartidas si deseas heredar el diseño del hero y del formulario. El componente de próxima salida, la cabecera y el footer no se copian dentro de la página.

Al terminar, añade `ebike-barcelona/` al campo `href` de la card E-Bike y actualiza la lista `routes` en `scripts/verify-build.mjs` para incluir la página nueva en las comprobaciones.
