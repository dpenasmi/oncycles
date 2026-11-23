// Reutiliza el controlador del formulario y las consultas por card.
// No cargar main.js en esta página: duplicaría el envío del formulario.
import './servicios.js';

function initSuspensionPage() {
  const page = document.querySelector('.oc-suspension-page');
  if (!page || page.dataset.suspensionReady) return;
  page.dataset.suspensionReady = 'true';
  const select = page.querySelector('#booking-form select[name="servicio"]');
  if (select && !select.value && Array.from(select.options).some((option) => option.value === 'Suspensiones')) {
    select.value = 'Suspensiones';
  }
}
initSuspensionPage();
document.addEventListener('astro:page-load', initSuspensionPage);
