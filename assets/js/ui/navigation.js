// ui/navigation.js

export function initNavigation() {
  const pages = document.querySelectorAll('[data-page]');

  document.getElementById('navbar-list').addEventListener('click', e => {
    const btn = e.target.closest('[data-nav-link]');
    if (!btn) return;

    const target   = btn.textContent.trim().toLowerCase();
    const navLinks = document.querySelectorAll('[data-nav-link]');

    pages.forEach(page =>
      page.classList.toggle('active', page.dataset.page === target)
    );

    navLinks.forEach(link =>
      link.classList.toggle('active', link.textContent.trim().toLowerCase() === target)
    );

    window.scrollTo(0, 0);
  });
}
