// ui/sidebar.js

export function initSidebar() {
  const sidebar    = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');
  sidebarBtn.addEventListener('click', () => sidebar.classList.toggle('active'));
}
