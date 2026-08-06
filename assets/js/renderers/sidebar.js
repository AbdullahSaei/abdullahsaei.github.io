// renderers/sidebar.js

export function renderSidebar(p) {
  const avatar = document.getElementById('profile-avatar');
  avatar.src = p.avatar;
  avatar.alt = p.name;

  document.getElementById('profile-name').textContent = p.name;
  document.querySelector('#profile-name').title = p.name;
  document.getElementById('profile-title').textContent = p.title;

  const contactItems = [
    { icon: 'mail-outline',           label: 'Email',    html: `<a href="mailto:${p.email}" class="contact-link">${p.email}</a>` },
    { icon: 'phone-portrait-outline', label: 'Phone',    html: `<a href="tel:${p.phone.replace(/\s/g, '')}" class="contact-link">${p.phone}</a>` },
    { icon: 'calendar-outline',       label: 'Birthday', html: `<time datetime="${p.birthday}">${p.birthday_display}</time>` },
    { icon: 'location-outline',       label: 'Location', html: `<address>${p.location}</address>` },
  ];

  document.getElementById('contacts-list').innerHTML = contactItems.map(item => `
    <li class="contact-item">
      <div class="icon-box"><ion-icon name="${item.icon}"></ion-icon></div>
      <div class="contact-info">
        <p class="contact-title">${item.label}</p>
        ${item.html}
      </div>
    </li>
  `).join('');

  document.getElementById('social-list').innerHTML = (p.socials || []).map(s => `
    <li class="social-item">
      <a href="${s.url}" class="social-link">
        <ion-icon name="${s.icon}"></ion-icon>
      </a>
    </li>
  `).join('');
}
