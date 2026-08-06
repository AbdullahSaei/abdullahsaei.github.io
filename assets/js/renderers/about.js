// renderers/about.js

export function renderAbout(about) {
  document.getElementById('about-bio').innerHTML =
    (about.bio || []).map(p => `<p>${p.trim()}</p>`).join('');

  document.getElementById('service-list').innerHTML = (about.services || []).map(s => `
    <li class="service-item">
      <div class="service-icon-box">
        <img src="${s.icon}" alt="${s.icon_alt}" width="40">
      </div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title">${s.title}</h4>
        <p class="service-item-text">${s.text.trim()}</p>
      </div>
    </li>
  `).join('');

  document.getElementById('testimonials-list').innerHTML = (about.testimonials || []).map(t => `
    <li class="testimonials-item">
      <div class="content-card" data-testimonials-item>
        <figure class="testimonials-avatar-box">
          <img src="${t.avatar}" alt="${t.name}" width="60" data-testimonials-avatar>
        </figure>
        <h4 class="h4 testimonials-item-title" data-testimonials-title>${t.name}</h4>
        <div class="testimonials-text" data-testimonials-text>
          <p>${t.text.trim()}</p>
        </div>
      </div>
    </li>
  `).join('');

  document.getElementById('clients-list').innerHTML = (about.clients || []).map(c => `
    <li class="clients-item">
      <a href="${c.url}">
        <img src="${c.logo}" alt="client logo">
      </a>
    </li>
  `).join('');
}
