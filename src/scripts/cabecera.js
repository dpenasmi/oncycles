// Controlador único de la cabecera compartida por HOME y Servicios.
function initHeaders() {
  document.querySelectorAll('[data-oc-header]').forEach((header) => {
    if (header.dataset.ready) return;
    const menu = header.querySelector('.menu-toggle');
    const nav = header.querySelector('nav');
    if (!menu || !nav) return;
    const mobile = window.matchMedia('(max-width: 700px)');
    const controller = new AbortController();
    const options = { signal: controller.signal };
    let open = false;
    let scrollPosition = null;
    let savedStyles = [];
    let inertElements = [];
    header.dataset.ready = 'true';
    menu.hidden = false;

    function lockPage() {
      const body = document.body;
      scrollPosition = { top: window.scrollY, left: window.scrollX };
      const properties = ['position', 'top', 'left', 'width', 'overflow', 'padding-right'];
      savedStyles = properties.map((key) => [key, body.style.getPropertyValue(key), body.style.getPropertyPriority(key)]);
      const scrollbar = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
      const padding = parseFloat(getComputedStyle(body).paddingRight) || 0;
      Object.assign(body.style, {
        position: 'fixed', top: `-${scrollPosition.top}px`,
        left: `-${scrollPosition.left}px`, width: '100%', overflow: 'hidden',
        paddingRight: `${padding + scrollbar}px`,
      });
      // Inhabilita únicamente el contenido que queda fuera de la cabecera.
      let branch = header;
      while (branch.parentElement) {
        Array.from(branch.parentElement.children).forEach((sibling) => {
          if (sibling !== branch && !['SCRIPT', 'STYLE', 'LINK'].includes(sibling.tagName)) {
            inertElements.push([sibling, sibling.inert]);
            sibling.inert = true;
          }
        });
        if (branch.parentElement === body) break;
        branch = branch.parentElement;
      }
    }

    function unlockPage() {
      inertElements.forEach(([element, previous]) => { element.inert = previous; });
      inertElements = [];
      savedStyles.forEach(([key, value, priority]) => {
        if (value) document.body.style.setProperty(key, value, priority);
        else document.body.style.removeProperty(key);
      });
      savedStyles = [];
      if (scrollPosition) {
        window.scrollTo({ ...scrollPosition, behavior: 'instant' });
        scrollPosition = null;
      }
    }

    function setMenu(next, restoreFocus = false) {
      next = Boolean(next && mobile.matches);
      if (next === open) return;
      open = next;
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      nav.classList.toggle('open', open);
      header.toggleAttribute('data-menu-open', open);
      if (open) {
        lockPage();
        nav.querySelector('a')?.focus({ preventScroll: true });
      } else {
        unlockPage();
        if (restoreFocus) menu.focus({ preventScroll: true });
      }
    }

    menu.addEventListener('click', () => setMenu(!open, open), options);
    header.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenu(false), options);
    });
    document.addEventListener('keydown', (event) => {
      if (!open) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenu(false, true);
      } else if (event.key === 'Tab') {
        const targets = Array.from(header.querySelectorAll('a[href], button:not([disabled])'))
          .filter((element) => element.getClientRects().length > 0);
        const first = targets[0];
        const last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first?.focus();
        }
      }
    }, options);
    mobile.addEventListener('change', () => setMenu(false), options);
    document.addEventListener('astro:before-swap', () => {
      setMenu(false);
      controller.abort();
    }, { ...options, once: true });
  });
}
initHeaders();
document.addEventListener('astro:page-load', initHeaders);
