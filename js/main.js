const menu = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.menu-close');

function setMenu(open) {
  menu?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  sideMenu?.classList.toggle('open', open);
  sideMenu?.setAttribute('aria-hidden', String(!open));
  overlay?.classList.toggle('open', open);
  overlay?.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
}

menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
closeBtn?.addEventListener('click', () => setMenu(false));
overlay?.addEventListener('click', () => setMenu(false));
document.querySelectorAll('.side-menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

document.getElementById('year').textContent = new Date().getFullYear();