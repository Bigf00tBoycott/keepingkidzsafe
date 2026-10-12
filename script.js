(() => {
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
if (menu && nav) menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
const boxes = [...document.querySelectorAll('.checklist-panel input')];
const progress = document.querySelector('progress');
const summary = document.querySelector('[data-progress]');
const update = () => { const count = boxes.filter(box => box.checked).length; if (progress) progress.value = count; if (summary) summary.textContent = `${count} of ${boxes.length} steps checked`; };
boxes.forEach(box => box.addEventListener('change', update));
update();
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
})();
