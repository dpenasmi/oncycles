# Instalar la actualización sin perder el repositorio

Se entrega un proyecto completo y un paquete de actualización pequeño. Ambos contienen el mismo resultado. Elige una vía; no necesitas aplicar las dos.

## Opción recomendada: paquete de actualización

El ZIP de actualización contiene los archivos nuevos / modificados, un manifiesto de retiradas y `APLICAR-ACTUALIZACION.ps1`.

1. Detén `npm run dev` con Ctrl+C. Cierra otras terminales del proyecto. Si OneDrive interfiere, pausa la sincronización durante la actualización.
2. Extrae el paquete de actualización en una carpeta separada de tu `CODIGO` actual.
3. Abre PowerShell en la carpeta que contiene el script.
4. Ejecuta primero la simulación (sustituye la ruta por la carpeta real):

```powershell
.\APLICAR-ACTUALIZACION.ps1 -Destino 'C:\ruta\a\CODIGO' -Simular
```

5. Si la comprobación es correcta, ejecuta sin `-Simular`:

```powershell
.\APLICAR-ACTUALIZACION.ps1 -Destino 'C:\ruta\a\CODIGO'
```

El script no modifica `.git`, no ejecuta npm y no publica nada. Comprueba que los archivos que va a sustituir coincidan con la copia entregada o ya estén actualizados. Si has editado alguno después de crear el 7z, se detiene antes de copiar para evitar sobrescribirlo. Hace un respaldo de los archivos afectados en una carpeta hermana de `CODIGO` y retira únicamente los archivos antiguos enumerados en su manifiesto.

Los archivos no incluidos en el parche permanecen en su sitio. No se copia `node_modules`; debe reinstalarse para recoger las nuevas herramientas. Si falla una copia, el script intenta restaurar los archivos afectados desde el respaldo y comunica su ubicación.

6. En tu carpeta `CODIGO`, ejecuta:

```powershell
npm ci
npm run verify
npm run format:check
npm run dev
```

7. Revisa el resultado en PC, tablet y móvil. Después confirma los cambios en Git incluyendo nuevos archivos y retiradas (`git add -A`).

El script es una ayuda para Windows PowerShell; se ha revisado su lógica, pero no se ha ejecutado sobre tu equipo Windows. Si la política de ejecución lo bloquea, revisa el script y utiliza tu procedimiento habitual para ejecutar scripts locales; no cambies políticas globales por esta actualización.

## Opción alternativa: proyecto completo

Extrae el proyecto completo en una carpeta nueva, ejecuta `npm ci` y `npm run verify`, y prueba allí. Conserva la carpeta original con su `.git` como respaldo. Para actualizar el repositorio existente, usa preferentemente el paquete anterior: sobrescribir archivos sueltos no elimina los `.js`, CSS y fotografías antiguas que ahora se han trasladado.

## Cambio de ubicaciones

- `src/data/home.js`, `services.js`, `suspension.js`, `brands.js`, `site.js` e `images.js` se sustituyen por sus versiones `.ts`.
- Los tres CSS de Marcas, Reseñas y Sobre On Cycles pasan al `<style>` de cada componente.
- Las 31 fotografías migradas pasan de `public/images/` a `src/assets/images/`.
- Los 190 fotogramas y el resto de recursos estáticos no se trasladan.

README y `docs/NUEVO-SERVICIO.md` describen la estructura nueva. El PDF de arquitectura 1.0 corresponde a la etapa anterior; para esta actualización prevalece la documentación incluida en el proyecto.
