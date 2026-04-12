(function () {
  const menuBtn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  }

  document.querySelectorAll('.accordion-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('open');
    });
  });

  const checklist = document.querySelector('[data-checklist]');
  if (checklist) {
    const boxes = checklist.querySelectorAll('input[type="checkbox"]');
    const progress = document.querySelector('[data-progress]');
    const summary = document.querySelector('[data-progress-text]');

    const update = () => {
      const done = Array.from(boxes).filter((b) => b.checked).length;
      const pct = Math.round((done / boxes.length) * 100);
      if (progress) progress.style.width = `${pct}%`;
      if (summary) summary.textContent = `${done}/${boxes.length} safety steps complete`;
    };

    boxes.forEach((b) => b.addEventListener('change', update));
    update();
  }
})();
