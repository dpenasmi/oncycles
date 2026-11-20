// ON CYCLES · Servicios. No cargar main.js además de este archivo en esta página.
// El contenido y el FAQ permanecen disponibles sin JavaScript.
function initializeServices() {
  const page = document.querySelector('.oc-services-page');
  if (!page || page.dataset.servicesReady) return;
  page.dataset.servicesReady = 'true';

  // Conserva la separación del hero móvil; el menú se gestiona en cabecera.js.
  page.dataset.menuEnhanced = 'true';

  const form = page.querySelector('#booking-form');
  const select = form?.querySelector('select[name="servicio"]');
  if (!form || !select) return;
  let detail = '';
  page.querySelectorAll('[data-booking-service]').forEach((link) => {
    link.addEventListener('click', () => {
      const value = link.dataset.bookingService;
      if ([...select.options].some((option) => option.value === value)) {
        select.value = value;
        detail = link.dataset.bookingDetail || '';
      }
    });
  });
  // Un cambio manual del servicio descarta el nivel de revisión preseleccionado.
  select.addEventListener('change', () => { detail = ''; });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const recipient = form.dataset.email;
    if (!recipient) return;
    const values = new FormData(form);
    const requested = detail || String(values.get('servicio') || '');
    const subject = `Solicitud de cita · ${requested}`;
    const body = `Hola, Alfredo:\n\nMe gustaría solicitar cita para ${requested}.\n\nNombre: ${String(values.get('nombre') || '').trim()}\nEmail: ${String(values.get('email') || '').trim()}\n\nQuedo pendiente de tu confirmación. Gracias.`;
    const href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = form.querySelector('#form-status');
    const fallback = form.querySelector('#mail-fallback');
    if (status) {
      status.hidden = false;
      status.textContent = 'Solicitud preparada. Envíala desde tu aplicación de correo; la cita queda pendiente de confirmación del taller.';
    }
    if (fallback) {
      fallback.href = href;
      fallback.hidden = false;
    }
    window.location.href = href;
  });
}
initializeServices();
