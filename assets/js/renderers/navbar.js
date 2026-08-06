// renderers/navbar.js

const NAV_PAGES = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

export function renderNavbar() {
  document.getElementById('navbar-list').innerHTML = NAV_PAGES.map((page, i) => `
    <li class="navbar-item">
      <button class="navbar-link${i === 0 ? ' active' : ''}" data-nav-link>
        ${page}
      </button>
    </li>
  `).join('');
}
