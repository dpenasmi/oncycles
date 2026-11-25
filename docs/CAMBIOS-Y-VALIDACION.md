# Cambios y validación · 25/11/2026

## Resultado

Se reorganizan las tres páginas recibidas: Home, reparación de bicicletas y suspensión de bicicleta. No se añade una página E-Bike inexistente en la entrega ni se publican cambios en producción.

## Cambios

- Layout HTML común y layout específico de servicios sin contenedores nuevos que alteren la distribución.
- Hero, credenciales, proceso y FAQ reutilizables con sus textos particulares.
- Imágenes centralizadas en `data/images.js`; datos por responsabilidad dentro de `/data`.
- Marcas renderizadas desde una sola lista, conservando las dos copias visuales necesarias para el bucle.
- Un controlador de reserva sustituye las tres implementaciones anteriores. Se mantienen las consultas por revisión y la preselección del servicio.
- Eliminados `scripts/servicios.js` y `scripts/suspension-bicicleta.js`; no deben copiarse desde la versión antigua.
- Eliminadas 26 reglas del footer antiguo y reglas de una cabecera de servicios que ya no se renderiza.
- CSS de componentes separado en archivos conservando la especificidad y el aislamiento originales.
- Formato uniforme y comandos para mantenerlo en futuras ediciones.
- `BASE_PATH` y `SITE_URL` configurables; valores por defecto originales conservados.
- Servidores de desarrollo y preview limitados a localhost por defecto.

## Correcciones puntuales

Dos rutas antiguas no existían: `servicio-ebike.webp` y `servicio-setup.webp`. El registro las resuelve ahora con las fotografías existentes `ebike.webp` y `servicios-setup.webp`.

La selección de Suspensiones se genera ahora en el HTML de su formulario. La marca `data-menu-enhanced` de las páginas interiores se conserva desde el renderizado para mantener su espaciado móvil. Se unifica una etiqueta accesible de credenciales; los textos visibles se conservan.

## Seguridad

Astro se ha actualizado de la rama 5 a 7.4.13, con versiones exactas y lockfile actualizado. La auditoría npm inicial detectó cinco dependencias afectadas; la final, incluyendo desarrollo, informa de cero vulnerabilidades conocidas. Resultado observado en esta revisión, no garantía frente a vulnerabilidades futuras.

El formulario valida el destinatario, limita y normaliza campos de texto y codifica el asunto y cuerpo del mailto para impedir que un texto introducido añada parámetros o cabeceras. No introduce HTML dinámico ni almacenamiento de datos personales. Se conservan `noopener noreferrer` en el enlace externo de reseñas.

## Pruebas realizadas

- `npm run verify` con `/oncycles/`: tres rutas compiladas, cuatro tests de reserva correctos, 105 referencias de recursos, anclas locales e IDs verificados y 190 JPG presentes.
- `BASE_PATH=/ npm run verify`: compilación y verificaciones correctas también en raíz de dominio.
- `npm audit`: cero avisos en el conjunto final de dependencias.
- Comparación del HTML antes/después: Home con la misma estructura y contenido; páginas interiores con los cambios intencionados indicados arriba. Se ignoran comentarios, espacios de formato y atributos internos de encapsulado.
- Comparación de 3648 propiedades de estilo en elementos representativos a 1440×900, 768×1024 y 390×844: sin diferencias en la simulación de CSS para esas condiciones.
- Análisis sintáctico de `proxima-salida.js`, `asi-trabajo.js`, `cabecera.js` y `manual-carousel.js`: árboles de código idénticos antes y después, descontando formato. No se reescribe el comportamiento de las animaciones ya aceptadas.
- Comprobación binaria: los 279 archivos de `public/` permanecen idénticos, sin conversiones ni recomprimir fotografías o fotogramas.

## Alcance de la validación visual

Se ha comparado el HTML y la cascada CSS en un entorno simulado. No equivale a una revisión de capturas y gestos en dispositivos reales. Antes de sustituir tu copia de trabajo, abre esta versión y comprueba PC, tablet y móvil, especialmente el menú y el scroll de Próxima salida. La presentación estática en pantallas donde no cabe todo el contenido sigue siendo la del código recibido.

## Instalación

El ZIP incluye el proyecto fuente completo y sus recursos. No incluye `node_modules`, `dist`, `.astro` ni herramientas temporales de revisión. Descomprime en otra carpeta y ejecuta `npm ci`, seguido de `npm run dev`.

Necesita Node.js >=22.23.4; se recomienda Node.js 24 LTS. No reutilices el node_modules antiguo. La configuración estática y las rutas actuales permanecen disponibles.
