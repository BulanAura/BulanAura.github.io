document.addEventListener("DOMContentLoaded", () => {

  renderEducation();
  renderProjects();
  renderSkills();
  renderExperience();
  renderCertifications();
  renderContact();

  animateSkillBars();

});

/* ==========================================
   EDUCATION
========================================== */

function renderEducation() {

  const container =
    document.getElementById("educationContainer");

  if (!container) return;

  portfolioData.education.forEach(edu => {

    container.innerHTML += `
      <div class="education-card">

        <img
          src="${edu.image}"
          alt="${edu.institution}"
          class="project-img"
        >

        <div style="padding-top:20px">

          <div class="education-period">
            ${edu.period}
          </div>

          <h3>
            ${edu.institution}
          </h3>

          <p style="margin:10px 0;color:#b9b4c9;">
            ${edu.major}
          </p>

          <p style="line-height:1.7;color:#b9b4c9;">
            ${edu.description}
          </p>

        </div>

      </div>
    `;
  });

}

/* ==========================================
   PROJECTS
========================================== */

function renderProjects() {

  const grid =
    document.getElementById("projectsGrid");

  if (!grid) return;

  portfolioData.projects.forEach(project => {

    const tags = project.tags
      .map(tag =>
        `<span class="tag">${tag}</span>`
      )
      .join("");

    grid.innerHTML += `
      <div class="project-card">

        <img
          src="${project.image}"
          alt="${project.title}"
          class="project-img"
        >

        <div class="project-body">

          <h3 class="project-title">
            ${project.title}
          </h3>

          <p class="project-desc">
            ${project.description}
          </p>

          <div class="project-tags">
            ${tags}
          </div>

        </div>

      </div>
    `;
  });

}

/* ==========================================
   SKILLS
========================================== */

function renderSkills() {

  const wrapper =
    document.getElementById("skillsWrapper");

  if (!wrapper) return;

  portfolioData.skills.forEach(skill => {

    const items = skill.items
      .map(item => `
        <div class="skill-item">

          <div class="skill-label">
            <span>${item.name}</span>
            <span>${item.level}%</span>
          </div>

          <div class="skill-bar-track">

            <div
              class="skill-bar-fill"
              data-level="${item.level}"
            ></div>

          </div>

        </div>
      `)
      .join("");

    wrapper.innerHTML += `
      <div class="skill-group">

        <div class="skill-group-title">
          ${skill.category}
        </div>

        ${items}

      </div>
    `;
  });

}

/* ==========================================
   EXPERIENCE
========================================== */

function renderExperience() {

  const timeline =
    document.getElementById("timeline");

  if (!timeline) return;

  portfolioData.experience.forEach(exp => {

    timeline.innerHTML += `
      <div class="timeline-item">

        <p class="timeline-period">
          ${exp.period}
        </p>

        <h3 class="timeline-role">
          ${exp.role}
        </h3>

        <p class="timeline-company">
          ${exp.company}
        </p>

        <p class="timeline-desc">
          ${exp.description}
        </p>

      </div>
    `;
  });

}

/* ==========================================
   CERTIFICATION
========================================== */

function renderCertifications() {

  const container =
    document.getElementById(
      "certificationContainer"
    );

  if (!container) return;

  portfolioData.certifications.forEach(cert => {

    container.innerHTML += `
      <div class="cert-card">

        <img
          src="${cert.image}"
          alt="${cert.theme}"
          class="project-img"
        >

        <div style="padding-top:20px">

          <div class="education-period">
            ${cert.period}
          </div>

          <h3>
            ${cert.theme}
          </h3>

          <p style="margin:10px 0;color:#b9b4c9;">
            ${cert.organizer}
          </p>

          <p style="line-height:1.7;color:#b9b4c9;">
            ${cert.description}
          </p>

        </div>

      </div>
    `;
  });

}

/* ==========================================
   CONTACT
========================================== */

function renderContact() {

  const contact =
    document.getElementById("contactInfo");

  if (!contact) return;

  const c = portfolioData.contact;

  contact.innerHTML = `

    <div class="contact-item">

      <div class="contact-item-label">
        Email
      </div>

      <div class="contact-item-value">
        ${c.email}
      </div>

    </div>

    <div class="contact-item">

      <div class="contact-item-label">
        Telepon
      </div>

      <div class="contact-item-value">
        ${c.phone}
      </div>

    </div>

    <div class="contact-item">

      <div class="contact-item-label">
        Lokasi
      </div>

      <div class="contact-item-value">
        ${c.location}
      </div>

    </div>

    <div class="contact-item">

      <div class="contact-item-label">
        GitHub
      </div>

      <div class="contact-item-value">

        <a
          href="${c.github}"
          target="_blank"
          style="color:#b785ff"
        >
          github.com/BulanAura
        </a>

      </div>

    </div>

  `;
}

/* ==========================================
   SKILL ANIMATION
========================================== */

function animateSkillBars() {

  setTimeout(() => {

    const bars =
      document.querySelectorAll(
        ".skill-bar-fill"
      );

    bars.forEach(bar => {

      const level =
        bar.dataset.level;

      bar.style.width =
        level + "%";

    });

  }, 300);

}
