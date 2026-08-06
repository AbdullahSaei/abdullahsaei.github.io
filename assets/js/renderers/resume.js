// renderers/resume.js

function renderTimeline(listId, items) {
  document.getElementById(listId).innerHTML = (items || []).map(item => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${item.title}</h4>
      <span>${item.period}</span>
      <p class="timeline-text">${item.text.trim()}</p>
    </li>
  `).join('');
}

export function renderResume(resume) {
  renderTimeline('education-list', resume.education);
  renderTimeline('experience-list', resume.experience);

  document.getElementById('skills-list').innerHTML = (resume.skills || []).map(s => `
    <li class="skills-item">
      <div class="title-wrapper">
        <h5 class="h5">${s.name}</h5>
        <data value="${s.level}">${s.level}%</data>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: ${s.level}%;"></div>
      </div>
    </li>
  `).join('');
}
