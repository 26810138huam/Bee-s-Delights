(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const form = document.querySelector('.order-form');
  const status = document.querySelector('.form-status');
  if (form && location.hostname.endsWith('.chatgpt.site')) {
    const note = document.createElement('div');
    note.className = 'order-site-note';
    const text = document.createElement('p');
    text.textContent = 'To place an order from this site, message Bee’s Delights on TikTok.';
    const link = document.createElement('a');
    link.className = 'button button-dark';
    link.href = 'https://www.tiktok.com/@s.delights8?_r=1&_t=ZS-9A9BbUSXu9x';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Message us on TikTok';
    note.append(text, link);
    form.replaceWith(note);
  }
  if (form && status && new URLSearchParams(location.search).get('enquiry') === 'received') {
    status.textContent = 'Thank you — your enquiry has been sent. Bee’s Delights will be in touch.';
    history.replaceState({}, '', location.pathname + '#custom');
  }
})();
