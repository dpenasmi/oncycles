// Único controlador del menú compartido. main.js y servicios.js no lo inicializan.
function initHeaders() {
  document.querySelectorAll('[data-oc-header]').forEach((header) => {
    if (header.dataset.ready) return;
    const menu = header.querySelector('.menu-toggle');
    const nav = header.querySelector('nav');
    if (!menu || !nav) return;
    header.dataset.ready = 'true';
    menu.hidden = false;
    const setMenu = (open) => {
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      nav.classList.toggle('open', open);
    };
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menu.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (event.target instanceof Node && !header.contains(event.target)) setMenu(false);
    });
    window.matchMedia('(max-width: 700px)').addEventListener('change', () => setMenu(false));
  });
}
initHeaders();
