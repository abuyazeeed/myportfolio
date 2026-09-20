document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const form = document.querySelector('#contactForm');
  if (form) {
    const status = form.querySelector('.form-status');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const valid = [...form.querySelectorAll('[required]')].every((field) => field.value.trim());
      status.textContent = valid
        ? 'Thank you. Contact delivery will be connected after hosting details are finalized.'
        : 'Please complete all fields before sending your message.';
      if (valid) form.reset();
    });
  }
});
