/* Revelado reversible ligado al scroll nativo; sin interceptar rueda ni gestos. */
function initWorkflows() {
  document.querySelectorAll('.oc-services-page .oc-workflow').forEach((section) => {
    if (section.dataset.workflowReady) return;
    const steps = section.querySelector('.oc-workflow__steps');
    const cards = steps ? Array.from(steps.children) : [];
    if (!cards.length) return;
    section.dataset.workflowReady = 'true';

    const panel = document.createElement('div');
    panel.className = 'oc-workflow__panel';
    panel.append(...Array.from(section.childNodes));
    section.append(panel);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 1025px)');
    const clamp = (value) => Math.min(1, Math.max(0, value));
    let mode = 'static';
    let travel = 1;
    let top = 24;
    let frame = 0;
    let layoutPending = true;
    let disposed = false;

    function paint(card, progress) {
      // Smoothstep suaviza la entrada y conserva la misma trayectoria al subir.
      const value = progress * progress * (3 - 2 * progress);
      card.style.setProperty('--workflow-opacity', value.toFixed(4));
      card.style.setProperty('--workflow-x', `${((1 - value) * -24).toFixed(2)}px`);
    }

    function layout() {
      section.removeAttribute('data-workflow-motion');
      panel.style.removeProperty('--workflow-padding');
      cards.forEach((card) => {
        card.style.removeProperty('--workflow-opacity');
        card.style.removeProperty('--workflow-x');
      });
      mode = 'static';
      if (reduced.matches) return;

      const viewport = window.innerHeight;
      const padding = parseFloat(getComputedStyle(section).paddingTop) || 0;
      panel.style.setProperty('--workflow-padding', `${padding}px`);
      const height = panel.getBoundingClientRect().height + padding * 2;

      // Si no cabe el contenido (zoom, ventana baja), conserva el scroll normal.
      if (desktop.matches && height <= viewport - 48) {
        mode = 'pinned';
        top = Math.max(24, (viewport - height) / 2);
        travel = Math.max(720, Math.round(viewport * 1.25));
        section.style.setProperty('--workflow-top', `${top}px`);
        section.style.setProperty('--workflow-height', `${height + travel}px`);
      } else {
        mode = 'flow';
      }
      section.dataset.workflowMotion = mode;
    }

    function render() {
      frame = 0;
      if (disposed) return;
      if (layoutPending) {
        layoutPending = false;
        layout();
      }
      if (mode === 'pinned') {
        const progress = clamp((top - section.getBoundingClientRect().top) / travel);
        cards.forEach((card, index) => {
          paint(card, clamp((progress * cards.length - index) / 0.65));
        });
      } else if (mode === 'flow') {
        // Tablet/móvil: cada card aparece en su posición, sin fijar la sección.
        const viewport = window.innerHeight;
        cards.forEach((card) => {
          const distance = viewport * 0.95 - card.getBoundingClientRect().top;
          paint(card, clamp(distance / Math.min(160, viewport * 0.23)));
        });
      }
    }

    function schedule() {
      if (!disposed && !frame) frame = requestAnimationFrame(render);
    }
    function resize() {
      layoutPending = true;
      schedule();
    }
    function dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', resize);
      reduced.removeEventListener('change', resize);
      desktop.removeEventListener('change', resize);
      document.removeEventListener('astro:before-swap', dispose);
    }

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', resize, { passive: true });
    reduced.addEventListener('change', resize);
    desktop.addEventListener('change', resize);
    document.addEventListener('astro:before-swap', dispose, { once: true });
    document.fonts?.ready.then(() => {
      if (!disposed) resize();
    });
    schedule();
  });
}

initWorkflows();
document.addEventListener('astro:page-load', initWorkflows);
