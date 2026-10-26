const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Zamknij menu' : 'Otwórz menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `[NEXORA Logistics] ${data.get('topic')}`;
    const body = [
      `Imię lub firma: ${data.get('name')}`,
      `E-mail: ${data.get('email')}`,
      `Temat: ${data.get('topic')}`,
      '',
      'Wiadomość:',
      data.get('message')
    ].join('\\n');
    const mailto = `mailto:gdm120609@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = document.getElementById('formStatus');
    if (status) status.textContent = 'Otwieramy aplikację pocztową. Sprawdź treść wiadomości przed wysłaniem.';
    window.location.href = mailto;
  });
}
