/**
 * ESRC Club — Main Script
 * =======================
 * Implements:
 * - BioX/EPIC-inspired editorial design & accessible controls
 * - Dynamic rendering for About, Purpose, What We Do, and Membership
 * - Example Project Areas with explicit disclaimers
 * - Prominent Achievements showcase with transcribed awards & interactive visual gallery
 * - Honest Empty State for Upcoming Events
 * - Faculty Advisor & Core Leadership team with editable profile slots
 * - Curated Learning Resources Knowledge Hub
 * - Two-Tab Contact & Membership Registration with endpoint configuration notices
 * - FAQ Accordion
 * - Image Lightbox Modal for achievement banners
 * - Interactive AI Assistant & Navigator widget
 */

(function () {
  "use strict";

  const D = SITE_DATA;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);
  const esc = (str) => {
    if (!str) return "";
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  };

  /* ── Helper: build section header row ────────────────────── */
  function sectionHeader(id, tag, title, subtitle) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = `
      <div>
        <div class="section-tag">${esc(tag)}</div>
        <h2 class="section-title">${esc(title)}</h2>
      </div>
      <p class="section-desc">${esc(subtitle)}</p>
    `;
  }

  /* ── Helper: initials from name ──────────────────────────── */
  function initials(name) {
    return (name || "")
      .replace(/\[.*?\]\s*/g, "")
      .split(" ")
      .filter(Boolean)
      .map(w => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "ES";
  }

  /* ── Helper: Smooth scroll to element ────────────────────── */
  function smoothScrollTo(selector) {
    const target = document.querySelector(selector);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  }

  /* ── Scroll Reveal ───────────────────────────────────────── */
  // Sections start hidden in CSS so they can animate into view. Always
  // provide a visible fallback when IntersectionObserver is unavailable.
  const revealElements = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal--visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    revealElements.forEach(element => revealObserver.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("reveal--visible"));
  }

  /* ══════════════════════════════════════════════════════════
     POPULATE SECTIONS
     ══════════════════════════════════════════════════════════ */

  /* ── 00. Hero & Top Banner ───────────────────────────────── */
  const pillEl = document.getElementById("hero-pill");
  if (pillEl) pillEl.innerHTML = `<span class="hero-pill-dot"></span><span>${esc(D.heroPill)}</span>`;

  const heroSubtitleEl = document.getElementById("hero-subtitle");
  if (heroSubtitleEl) heroSubtitleEl.textContent = D.heroSubtitle;

  const rhythmEl = document.getElementById("hero-rhythm");
  if (rhythmEl) rhythmEl.innerHTML = D.heroRhythm.map(r => `<span>${r.icon} ${esc(r.label)}</span>`).join("");

  const statsEl = document.getElementById("hero-stats");
  if (statsEl) {
    statsEl.innerHTML = D.heroStats.map(s => `
      <div class="hero-stat">
        <strong>${esc(s.value)}</strong>
        <span>${esc(s.label)}</span>
      </div>
    `).join("");
  }

  /* ── Quote Band ──────────────────────────────────────────── */
  const quoteTextEl = document.getElementById("quote-text");
  if (quoteTextEl) quoteTextEl.textContent = D.heroQuote;
  const quoteAttrEl = document.getElementById("quote-attr");
  if (quoteAttrEl) quoteAttrEl.textContent = D.heroQuoteAttribution;

  /* ── Navigation Links ────────────────────────────────────── */
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) {
    navMenu.innerHTML = "";
    D.navLinks.forEach(link => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${link.href}">${esc(link.label)}</a>`;
      navMenu.appendChild(li);
    });
    const joinLi = document.createElement("li");
    joinLi.innerHTML = `<a href="#contact" class="join-btn">Join Club</a>`;
    navMenu.appendChild(joinLi);
  }

  /* ── 01. About Section ───────────────────────────────────── */
  sectionHeader("about-header", D.about.sectionTag, D.about.title, D.about.subtitle);

  const aboutBig = document.getElementById("about-card-big");
  if (aboutBig) {
    aboutBig.innerHTML = `
      <span class="about-card-kicker">⚡ ${esc(D.about.kicker)}</span>
      <p class="lead">${esc(D.about.copy)}</p>
      <p class="about-card-text-muted">${esc(D.about.mutedText)}</p>
      <div class="about-path">
        ${D.about.path.map((p, i) => `
          ${i > 0 ? '<span class="path-arrow">→</span>' : ''}
          <span><strong>${esc(p.name)}</strong><small>${esc(p.sub)}</small></span>
        `).join("")}
      </div>
      <div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap;">
        <a href="#purpose" class="primary-btn">Our Purpose & What We Do <i class="fa-solid fa-arrow-right"></i></a>
        <a href="#team" class="secondary-btn">Meet the Team</a>
      </div>
    `;
  }

  const aboutFeatures = document.getElementById("about-features");
  if (aboutFeatures && D.about.highlights) {
    aboutFeatures.innerHTML = D.about.highlights.map(h => `
      <div class="about-feature-box">
        <div class="about-feature-icon">${h.icon}</div>
        <h4>${esc(h.title)}</h4>
        <p>${esc(h.text)}</p>
      </div>
    `).join("");
  }

  /* ── 02. Purpose, What We Do & Membership ─────────────────── */
  sectionHeader("purpose-header", D.purpose.sectionTag, D.purpose.title, D.purpose.subtitle);

  const purposeBanner = document.getElementById("purpose-banner");
  if (purposeBanner) {
    purposeBanner.innerHTML = `
      <span class="purpose-banner-kicker"><i class="fa-solid fa-bullseye"></i> ESRC Mission</span>
      <p class="purpose-statement-text">“${esc(D.purpose.purposeStatement)}”</p>
    `;
  }

  const whatWeDoGrid = document.getElementById("what-we-do-grid");
  if (whatWeDoGrid) {
    whatWeDoGrid.innerHTML = D.purpose.whatWeDo.map(item => `
      <div class="what-we-do-card">
        <div class="what-we-do-header">
          <span class="what-we-do-icon">${item.icon}</span>
          <span class="what-we-do-tag">${esc(item.tag)}</span>
        </div>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
      </div>
    `).join("");
  }

  const membershipBox = document.getElementById("membership-box");
  if (membershipBox) {
    const mem = D.purpose.membership;
    membershipBox.innerHTML = `
      <div class="membership-content">
        <span class="membership-badge"><i class="fa-solid fa-user-group"></i> ${esc(mem.tag)}</span>
        <h3>${esc(mem.title)}</h3>
        <p class="membership-statement">“${esc(mem.statement)}”</p>
        <ul class="membership-list">
          ${mem.highlights.map(h => `<li><i class="fa-solid fa-circle-check"></i> ${esc(h)}</li>`).join("")}
        </ul>
      </div>
      <div class="membership-action">
        <a href="${mem.ctaLink}" class="membership-btn">
          ${esc(mem.ctaText)} <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;
  }

  /* ── 03. Example Project Areas ────────────────────────────── */
  sectionHeader("projects-header", D.projects.sectionTag, D.projects.title, D.projects.subtitle);

  const projectsNotice = document.getElementById("projects-notice");
  if (projectsNotice) {
    projectsNotice.innerHTML = `
      <i class="fa-solid fa-circle-info"></i>
      <div>
        <strong>${esc(D.projects.disclaimerBadge)}:</strong> ${esc(D.projects.disclaimerText)}
      </div>
    `;
  }

  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    projectsGrid.innerHTML = D.projects.items.map(p => `
      <div class="project-card">
        <div>
          <span class="project-badge-tag">${esc(p.areaLabel)}</span>
          <div class="project-card-header">
            <span class="project-card-icon">${p.icon}</span>
            <h3>${esc(p.title)}</h3>
          </div>
          <p class="project-card-summary">${esc(p.summary)}</p>
          <ul class="project-focus-list">
            ${p.focusPoints.map(pt => `<li>${esc(pt)}</li>`).join("")}
          </ul>
        </div>
        <div>
          <div class="project-tech-tags">
            ${p.technologies.map(t => `<span>${esc(t)}</span>`).join("")}
          </div>
          <div class="project-learning-scope">
            <strong>Learning Scope:</strong> ${esc(p.learningScope)}
          </div>
        </div>
      </div>
    `).join("");
  }

  /* ── 04. Achievements Section ─────────────────────────────── */
  sectionHeader("achievements-header", D.achievements.sectionTag, D.achievements.title, D.achievements.subtitle);

  const achievementsNote = document.getElementById("achievements-note");
  if (achievementsNote) {
    achievementsNote.innerHTML = `
      <i class="fa-solid fa-award"></i>
      <span><strong>Official Archives:</strong> ${esc(D.achievements.editorialNote)}</span>
    `;
  }

  const achievementsRecordsGrid = document.getElementById("achievements-records-grid");
  if (achievementsRecordsGrid) {
    achievementsRecordsGrid.innerHTML = D.achievements.records.map(rec => {
      const badgeClass = `achievement-badge achievement-badge--${rec.badgeType || 'gold'}`;
      const isHighlighted = rec.badgeType === "gold";
      return `
        <div class="achievement-record-card ${isHighlighted ? 'highlight' : ''}">
          <div>
            <div class="achievement-badge-bar">
              <span class="${badgeClass}">${esc(rec.badge)}</span>
              <span class="achievement-year"><i class="fa-regular fa-calendar"></i> ${esc(rec.year)}</span>
            </div>
            <h3>${esc(rec.event)}</h3>
            <div class="achievement-result">${esc(rec.result)}</div>
            <p class="achievement-desc">${esc(rec.description)}</p>
          </div>
          <div class="achievement-meta-row">
            <span><i class="fa-solid fa-users"></i> ${esc(rec.honorees)}</span>
            <span><i class="fa-solid fa-landmark"></i> ${esc(rec.organizer)}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  // Visual Milestone Gallery (from user-supplied graphic slides)
  const achievementsVisualGallery = document.getElementById("achievements-visual-gallery");
  if (achievementsVisualGallery && D.achievements.visualGallery) {
    const vg = D.achievements.visualGallery;
    achievementsVisualGallery.innerHTML = `
      <div class="gallery-header-block">
        <span class="section-tag" style="display:inline-block;margin-bottom:6px;">Milestone Archives</span>
        <h3>${esc(vg.heading)}</h3>
        <p>${esc(vg.subheading)}</p>
      </div>

      <div class="gallery-slides-row">
        ${vg.slides.map(slide => `
          <div class="gallery-slide-card" data-lightbox-img="${encodeURI(slide.image)}" data-lightbox-caption="${esc(slide.title)} — ${esc(slide.subtitle)}">
            <div class="gallery-slide-img-wrap">
              <img src="${encodeURI(slide.image)}" alt="${esc(slide.altText)}" loading="lazy">
              <span class="gallery-zoom-badge"><i class="fa-solid fa-magnifying-glass-plus"></i> Click to Zoom</span>
            </div>
            <div class="gallery-slide-caption">
              <h4>${esc(slide.title)}</h4>
              <p>${esc(slide.subtitle)}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="gallery-full-btn-row">
        <button type="button" class="gallery-full-btn" id="viewFullCollageBtn">
          <i class="fa-solid fa-image"></i> View Full Achievements Poster
        </button>
      </div>
    `;

    const fullCollageBtn = document.getElementById("viewFullCollageBtn");
    if (fullCollageBtn) {
      fullCollageBtn.addEventListener("click", () => {
        openImageLightbox(vg.fullCollagePath, "Official ESRC Achievements Reference Poster");
      });
    }

    achievementsVisualGallery.addEventListener("click", e => {
      const card = e.target.closest("[data-lightbox-img]");
      if (card) {
        const src = card.getAttribute("data-lightbox-img");
        const caption = card.getAttribute("data-lightbox-caption");
        openImageLightbox(src, caption);
      }
    });
  }

  /* ── 05. Upcoming Events (Honest Empty State) ─────────────── */
  sectionHeader("events-header", D.events.sectionTag, D.events.title, D.events.subtitle);

  const eventsEmptyState = document.getElementById("events-empty-state");
  if (eventsEmptyState && D.events.isEmptyState) {
    const es = D.events.emptyState;
    eventsEmptyState.innerHTML = `
      <div class="events-empty-icon">
        <i class="fa-regular fa-calendar-check"></i>
      </div>
      <div>
        <span class="events-empty-badge">${esc(es.badge)}</span>
      </div>
      <h3>${esc(es.heading)}</h3>
      <p class="events-empty-desc">${esc(es.message)}</p>
      <p class="events-empty-subdesc">${esc(es.subMessage)}</p>
      <a href="${es.ctaLink}" class="events-empty-cta-btn">
        <i class="fa-solid fa-bell"></i> ${esc(es.ctaLabel)}
      </a>
    `;
  }

  /* ── 06. Mentor / Faculty Advisor ────────────────────────── */
  const mentorTagEl = document.getElementById("mentor-tag");
  if (mentorTagEl) mentorTagEl.textContent = D.mentor.sectionTag;

  const mentorEl = document.getElementById("mentor-box");
  if (mentorEl) {
    mentorEl.innerHTML = `
      <div class="mentor-image-container">
        ${D.mentor.photo ? `<img src="${encodeURI(D.mentor.photo)}" alt="${esc(D.mentor.name)}" loading="lazy">` : `<div class="mentor-placeholder">🎓</div>`}
        <span class="mentor-tag">${esc(D.mentor.tag)}</span>
      </div>
      <div class="mentor-content">
        <small>${esc(D.mentor.kicker)}</small>
        <h3>${esc(D.mentor.name)}</h3>
        <p>${esc(D.mentor.description)}</p>
        <div class="mentor-meta-badges">
          ${D.mentor.badges.map(b => `<span class="mentor-meta-badge">${b.icon} ${esc(b.label)}</span>`).join("")}
        </div>
      </div>
    `;
  }

  /* ── 07. Team Leadership & Members ────────────────────────── */
  sectionHeader("team-header", D.team.sectionTag, D.team.title, D.team.subtitle);

  const teamNotice = document.getElementById("team-notice");
  if (teamNotice) {
    teamNotice.innerHTML = `
      <i class="fa-solid fa-pen-to-square" style="color:var(--clr-accent)"></i>
      <span>${esc(D.team.editableNotice)}</span>
    `;
  }

  // Leadership (Gagan, Mayank, Faisal)
  const leadershipGrid = document.getElementById("leadership-grid");
  if (leadershipGrid && D.team.leadership) {
    leadershipGrid.innerHTML = D.team.leadership.map(m => `
      <div class="team-card team-card--leader">
        <div class="team-photo-wrap">
          ${m.photo ? `<img src="${encodeURI(m.photo)}" alt="${esc(m.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : ''}
          <div class="team-photo-placeholder" ${m.photo ? 'style="display:none"' : ''}>${initials(m.name)}</div>
        </div>
        ${m.badge ? `<div class="team-lead-badge">⭐ ${esc(m.badge)}</div>` : ''}
        <h4>${esc(m.name)}</h4>
        <div class="team-role">${esc(m.role || "Leader")}</div>
        <div class="team-pills">
          ${m.year ? `<span class="team-pill">${esc(m.year)}</span>` : ''}
          ${m.department ? `<span class="team-pill branch-tag">${esc(m.department)}</span>` : ''}
        </div>
        ${m.bio ? `<p style="font-size:0.8rem;color:var(--clr-text-muted);margin:8px 0 0;line-height:1.4;">${esc(m.bio)}</p>` : ''}
        ${m.linkedIn ? `<a href="${m.linkedIn}" target="_blank" rel="noopener noreferrer" class="team-card-linkedin" title="LinkedIn Profile"><i class="fa-brands fa-linkedin-in"></i></a>` : ''}
      </div>
    `).join("");
  }

  // Core members grid
  const teamGrid = document.getElementById("team-grid");
  if (teamGrid) {
    teamGrid.innerHTML = D.team.members.map(m => `
      <div class="team-card">
        <div class="team-photo-wrap">
          ${m.photo ? `<img src="${encodeURI(m.photo)}" alt="${esc(m.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : ''}
          <div class="team-photo-placeholder" ${m.photo ? 'style="display:none"' : ''}>${initials(m.name)}</div>
        </div>
        <h4>${esc(m.name)}</h4>
        <div class="team-role">${esc(m.role || "Core Member")}</div>
        <div class="team-pills">
          ${m.year ? `<span class="team-pill">${esc(m.year)}</span>` : ''}
          ${m.department ? `<span class="team-pill branch-tag">${esc(m.department)}</span>` : ''}
        </div>
        ${m.bio ? `<p style="font-size:0.78rem;color:var(--clr-text-muted);margin:6px 0 0;line-height:1.35;">${esc(m.bio)}</p>` : ''}
        ${m.linkedIn ? `<a href="${m.linkedIn}" target="_blank" rel="noopener noreferrer" class="team-card-linkedin" title="LinkedIn Profile"><i class="fa-brands fa-linkedin-in"></i></a>` : ''}
      </div>
    `).join("");
  }

  // Editable Placeholders for Club Expansion
  const teamPlaceholdersWrap = document.getElementById("team-placeholders-wrap");
  if (teamPlaceholdersWrap && D.team.editablePlaceholders) {
    teamPlaceholdersWrap.innerHTML = `
      <div style="font-size:0.85rem;font-weight:700;color:var(--clr-text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">
        <i class="fa-solid fa-plus-circle" style="color:var(--clr-accent)"></i> Editable Profile Template for New Leads
      </div>
      <div class="team-grid">
        ${D.team.editablePlaceholders.map(p => `
          <div class="team-card team-card--placeholder">
            <div class="team-photo-wrap">
              <div class="team-photo-placeholder" style="border:1px dashed #999;background:none;color:#888;">+</div>
            </div>
            <h4>${esc(p.name)}</h4>
            <div class="team-role" style="color:var(--clr-accent-dark);">${esc(p.role)}</div>
            <div class="team-pills">
              <span class="team-pill">${esc(p.year)}</span>
              <span class="team-pill branch-tag">${esc(p.department)}</span>
            </div>
            <p style="font-size:0.78rem;color:var(--clr-text-muted);margin:8px 0 0;line-height:1.4;">${esc(p.bio)}</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  /* ── 08. Resources / Knowledge Hub ────────────────────────── */
  sectionHeader("resources-header", D.resources.sectionTag, D.resources.title, D.resources.subtitle);

  const resourcesGrid = document.getElementById("resources-grid");
  if (resourcesGrid) {
    resourcesGrid.innerHTML = D.resources.items.map(res => `
      <div class="resource-card">
        <div class="resource-img-wrap">
          <img src="${encodeURI(res.image)}" alt="${esc(res.title)}" loading="lazy">
        </div>
        <div class="resource-body">
          <h3 class="resource-title">${esc(res.title)}</h3>
          <p class="resource-desc">${esc(res.description)}</p>
          <a href="${res.link}" target="_blank" rel="noopener noreferrer" class="resource-btn">
            ${esc(res.linkLabel)} <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    `).join("");
  }

  /* ── 09. Contact / Join ───────────────────────────────────── */
  sectionHeader("contact-header", D.contact.sectionTag, D.contact.title, D.contact.subtitle);

  const contactInfo = document.getElementById("contact-info");
  if (contactInfo) {
    contactInfo.innerHTML = `
      <span class="contact-pill"><i class="fa-solid fa-bolt"></i> Get Involved</span>
      <h3>${esc(D.contact.infoHeading)}</h3>
      <p>${esc(D.contact.infoText)}</p>

      <div class="contact-details-list">
        <div class="contact-detail-item">
          <i class="fa-regular fa-envelope"></i>
          <div>
            <strong>Email Contact</strong>
            <a href="mailto:${D.contact.email}">${esc(D.contact.email)}</a>
            <small style="display:block;color:var(--clr-accent);font-size:0.72rem;margin-top:2px;">${esc(D.contact.emailPlaceholderNote)}</small>
          </div>
        </div>
        <div class="contact-detail-item">
          <i class="fa-brands fa-whatsapp"></i>
          <div>
            <strong>WhatsApp Community</strong>
            <span>${esc(D.contact.whatsappPlaceholder)}</span>
          </div>
        </div>
        <div class="contact-detail-item">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <strong>Club Workshop Lab</strong>
            <span>${esc(D.contact.location)}</span>
          </div>
        </div>
        <div class="contact-detail-item">
          <i class="fa-regular fa-clock"></i>
          <div>
            <strong>Lab Active Hours</strong>
            <span>${esc(D.contact.officeHours)}</span>
          </div>
        </div>
      </div>

      <div class="contact-map-card">
        <div class="map-card-header">
          <i class="fa-solid fa-compass" style="color:var(--clr-accent)"></i>
          <strong>${esc(D.contact.mapEmbed.campusTitle)}</strong>
        </div>
        <p class="map-card-text">${esc(D.contact.mapEmbed.directions)}</p>
        <span class="map-card-coords"><i class="fa-solid fa-crosshairs"></i> ${esc(D.contact.mapEmbed.coordinates)}</span>
      </div>
    `;
  }

  // Endpoint Notice
  const formEndpointNote = document.getElementById("formEndpointNote");
  if (formEndpointNote) {
    formEndpointNote.innerHTML = `
      <i class="fa-solid fa-circle-info"></i>
      <span><strong>Configuration Note:</strong> ${esc(D.contact.formEndpointNote)}</span>
    `;
  }

  // Populate Domain selects & Inquiry chips
  const contactDomainSelect = document.getElementById("contactDomain");
  const regTrackSelect = document.getElementById("regTrackSelect");
  if (contactDomainSelect && D.contact.domainOptions) {
    contactDomainSelect.innerHTML = D.contact.domainOptions.map(d => `<option value="${esc(d)}">${esc(d)}</option>`).join("");
  }
  if (regTrackSelect && D.contact.domainOptions) {
    regTrackSelect.innerHTML = `<option value="" disabled selected>Select primary domain of interest</option>` +
      D.contact.domainOptions.map(d => `<option value="${esc(d)}">${esc(d)}</option>`).join("");
  }

  const inquiryChips = document.getElementById("inquiryChips");
  if (inquiryChips && D.contact.inquiryChips) {
    inquiryChips.innerHTML = D.contact.inquiryChips.map((chip, idx) => `
      <button type="button" class="inquiry-chip ${idx === 0 ? 'active' : ''}" data-chip="${esc(chip)}">${esc(chip)}</button>
    `).join("");

    inquiryChips.addEventListener("click", e => {
      const btn = e.target.closest(".inquiry-chip");
      if (!btn) return;
      $$(".inquiry-chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  }

  // Tabs toggle
  const contactTabBtn = document.getElementById("contactTabBtn");
  const registerTabBtn = document.getElementById("registerTabBtn");
  const contactForm = document.getElementById("contactForm");
  const registerContainer = document.getElementById("registerContainer");

  if (contactTabBtn && registerTabBtn && contactForm && registerContainer) {
    contactTabBtn.addEventListener("click", () => {
      contactTabBtn.classList.add("active");
      registerTabBtn.classList.remove("active");
      contactForm.style.display = "block";
      registerContainer.style.display = "none";
    });
    registerTabBtn.addEventListener("click", () => {
      registerTabBtn.classList.add("active");
      contactTabBtn.classList.remove("active");
      contactForm.style.display = "none";
      registerContainer.style.display = "block";
    });
  }

  // Character Counters
  const contactMessage = document.getElementById("contactMessage");
  const contactCharCounter = document.getElementById("contactCharCounter");
  if (contactMessage && contactCharCounter) {
    contactMessage.addEventListener("input", () => {
      contactCharCounter.textContent = `${contactMessage.value.length} / 500`;
    });
  }

  const regQuestion = document.getElementById("regQuestion");
  const regCharCounter = document.getElementById("regCharCounter");
  if (regQuestion && regCharCounter) {
    regQuestion.addEventListener("input", () => {
      regCharCounter.textContent = `${regQuestion.value.length} / 600`;
    });
  }

  // Form Submissions: open the visitor's email app with a prefilled message.
  function openEmailDraft(subject, body) {
    const mailtoUrl = `mailto:${D.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const msg = document.getElementById("contactMessage").value.trim();
      const domain = document.getElementById("contactDomain").value;
      const inquiry = document.querySelector(".inquiry-chip.active")?.dataset.chip || "General Question";
      const successDiv = document.getElementById("formSuccessMsg");

      if (!contactForm.reportValidity()) {
        return;
      }

      openEmailDraft(
        `ESRC Website Inquiry — ${inquiry}`,
        `Name: ${name}\nEmail: ${email}\nInquiry: ${inquiry}\nArea of interest: ${domain}\n\nMessage:\n${msg}`
      );

      if (successDiv) {
        successDiv.className = "form-success-msg form-success-msg--show";
        successDiv.innerHTML = `
          <strong>Email draft ready for ${esc(name)}.</strong><br>
          Your email app opened with the message addressed to ${esc(D.contact.email)}. Press Send there to deliver it.
        `;
      }
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const dept = document.getElementById("regDepartment").value.trim();
      const year = document.getElementById("regYear").value;
      const track = document.getElementById("regTrackSelect").value;
      const question = document.getElementById("regQuestion").value.trim();
      const successDiv = document.getElementById("registerSuccessMsg");

      if (!registerForm.reportValidity()) {
        return;
      }

      openEmailDraft(
        `ESRC Membership Registration — ${name}`,
        `Full name: ${name}\nEmail: ${email}\nBranch / Department: ${dept}\nAcademic year: ${year}\nPreferred domain: ${track}\n\nWhy I want to join ESRC:\n${question}`
      );

      if (successDiv) {
        successDiv.className = "form-success-msg form-success-msg--show";
        successDiv.innerHTML = `
          <strong>Registration email ready for ${esc(name)}.</strong><br>
          Your email app opened with the registration addressed to ${esc(D.contact.email)}. Press Send there to submit it.
        `;
      }
    });
  }

  /* ── 10. FAQ Accordion ────────────────────────────────────── */
  sectionHeader("faq-header", D.faq.sectionTag, D.faq.title, D.faq.subtitle);

  const faqList = document.getElementById("faq-list");
  if (faqList && D.faq.items) {
    faqList.innerHTML = D.faq.items.map((item, i) => `
      <div class="faq-item" data-faq-index="${i}">
        <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-ans-${i}">
          <span>${esc(item.question)}</span>
          <i class="fa-solid fa-chevron-down faq-arrow" aria-hidden="true"></i>
        </button>
        <div class="faq-answer" id="faq-ans-${i}" hidden>
          <p>${esc(item.answer)}</p>
        </div>
      </div>
    `).join("");

    faqList.addEventListener("click", e => {
      const btn = e.target.closest(".faq-question");
      if (!btn) return;
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isOpen = item.classList.contains("open");

      $$(".faq-item").forEach(fi => {
        fi.classList.remove("open");
        const b = fi.querySelector(".faq-question");
        const a = fi.querySelector(".faq-answer");
        if (b) b.setAttribute("aria-expanded", "false");
        if (a) a.hidden = true;
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        answer.hidden = false;
      }
    });
  }

  /* ── 11. Footer Social Links ──────────────────────────────── */
  const footerTagline = document.getElementById("footer-tagline");
  if (footerTagline) footerTagline.textContent = D.footerTagline;

  const footerCopyright = document.getElementById("footer-copyright");
  if (footerCopyright) footerCopyright.textContent = D.footerCopyright;

  const footerCredits = document.getElementById("footer-credits");
  if (footerCredits) footerCredits.textContent = D.footerCredits;

  const footerSocial = document.getElementById("footer-social");
  if (footerSocial) {
    footerSocial.innerHTML = `
      <a href="${D.socialLinks.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="${D.socialLinks.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a href="${D.socialLinks.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
      <a href="mailto:${D.contact.email}" aria-label="Email"><i class="fa-regular fa-envelope"></i></a>
    `;
  }

  /* ── Image Lightbox Modal ─────────────────────────────────── */
  const imageModal = document.getElementById("imageModal");
  const imageModalBody = document.getElementById("imageModalBody");
  const imageModalClose = document.getElementById("imageModalClose");

  function openImageLightbox(src, caption) {
    if (!imageModal || !imageModalBody) return;
    imageModalBody.innerHTML = `
      <div class="image-lightbox-wrap">
        <img src="${encodeURI(src)}" alt="${esc(caption)}" loading="eager">
        <div class="image-lightbox-caption">${esc(caption)}</div>
      </div>
    `;
    if (typeof imageModal.showModal === "function") {
      imageModal.showModal();
    } else {
      imageModal.setAttribute("open", "");
    }
  }

  if (imageModalClose) {
    imageModalClose.addEventListener("click", () => {
      if (!imageModal) return;
      if (typeof imageModal.close === "function") {
        imageModal.close();
      } else {
        imageModal.removeAttribute("open");
      }
    });
  }

  /* ── Scroll Progress & Sticky Nav ─────────────────────────── */
  const scrollProgressBar = document.getElementById("scrollProgress");
  const siteNav = document.getElementById("site-nav");

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && scrollProgressBar) {
      const progress = (window.scrollY / totalHeight) * 100;
      scrollProgressBar.style.width = `${progress}%`;
    }
    if (siteNav) {
      if (window.scrollY > 40) {
        siteNav.classList.remove("site-nav--transparent");
        siteNav.classList.add("site-nav--solid");
      } else {
        siteNav.classList.add("site-nav--transparent");
        siteNav.classList.remove("site-nav--solid");
      }
    }
  });

  /* ── Mobile Nav Toggle ────────────────────────────────────── */
  const navToggle = document.getElementById("nav-toggle");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("nav-links--open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navMenu.addEventListener("click", e => {
      if (e.target.tagName === "A") {
        navMenu.classList.remove("nav-links--open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ── AI Assistant & Navigator ─────────────────────────────── */
  const aiLauncherBtn = document.getElementById("aiLauncherBtn");
  const aiAssistantPanel = document.getElementById("aiAssistantPanel");
  const aiCloseBtn = document.getElementById("aiCloseBtn");
  const aiClearBtn = document.getElementById("aiClearBtn");
  const aiQuickChips = document.getElementById("aiQuickChips");
  const aiMessagesContainer = document.getElementById("aiMessagesContainer");
  const aiInputForm = document.getElementById("aiInputForm");
  const aiInputText = document.getElementById("aiInputText");

  function toggleAIPanel(forceOpen) {
    if (!aiAssistantPanel || !aiLauncherBtn) return;
    const isOpen = aiAssistantPanel.classList.contains("ai-panel--open");
    const newState = forceOpen !== undefined ? forceOpen : !isOpen;

    aiAssistantPanel.classList.toggle("ai-panel--open", newState);
    aiAssistantPanel.setAttribute("aria-hidden", String(!newState));
    aiLauncherBtn.setAttribute("aria-expanded", String(newState));

    if (newState && aiMessagesContainer && aiMessagesContainer.children.length === 0) {
      appendBotWelcome();
    }
    if (newState && aiInputText) {
      setTimeout(() => aiInputText.focus(), 250);
    }
  }

  if (aiLauncherBtn) {
    aiLauncherBtn.addEventListener("click", () => toggleAIPanel());
  }
  if (aiCloseBtn) {
    aiCloseBtn.addEventListener("click", () => toggleAIPanel(false));
  }

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (aiAssistantPanel && aiAssistantPanel.classList.contains("ai-panel--open")) {
        toggleAIPanel(false);
      }
      if (imageModal && imageModal.open) {
        if (typeof imageModal.close === "function") {
          imageModal.close();
        } else {
          imageModal.removeAttribute("open");
        }
      }
    }
  });

  function appendBotWelcome() {
    const welcomeHtml = `
      <p>Hello! I am the <strong>ESRC Assistant & Navigator</strong>.</p>
      <p>I can help you explore our hands-on robotics activities, view competition achievements, read about example project areas, or navigate anywhere on this site.</p>
      <div class="ai-nav-actions">
        <button type="button" class="ai-nav-btn" data-ai-nav="#about"><i class="fa-solid fa-circle-info"></i> About ESRC</button>
        <button type="button" class="ai-nav-btn" data-ai-nav="#purpose"><i class="fa-solid fa-bullseye"></i> Purpose & What We Do</button>
        <button type="button" class="ai-nav-btn" data-ai-nav="#achievements"><i class="fa-solid fa-trophy"></i> Achievements</button>
        <button type="button" class="ai-nav-btn" data-ai-nav="#contact"><i class="fa-solid fa-user-plus"></i> Join the Club</button>
      </div>
    `;
    addAIMessage("bot", welcomeHtml);
  }

  function addAIMessage(sender, contentHtml) {
    if (!aiMessagesContainer) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = `ai-msg ai-msg--${sender}`;
    const bubble = document.createElement("div");
    bubble.className = "ai-bubble";
    bubble.innerHTML = contentHtml;
    msgDiv.appendChild(bubble);
    aiMessagesContainer.appendChild(msgDiv);
    aiMessagesContainer.scrollTop = aiMessagesContainer.scrollHeight;
  }

  function showAITyping() {
    if (!aiMessagesContainer) return null;
    const typingDiv = document.createElement("div");
    typingDiv.className = "ai-msg ai-msg--bot ai-typing-msg";
    typingDiv.innerHTML = `
      <div class="ai-typing">
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
      </div>
    `;
    aiMessagesContainer.appendChild(typingDiv);
    aiMessagesContainer.scrollTop = aiMessagesContainer.scrollHeight;
    return typingDiv;
  }

  if (aiClearBtn) {
    aiClearBtn.addEventListener("click", () => {
      if (aiMessagesContainer) {
        aiMessagesContainer.innerHTML = "";
        appendBotWelcome();
      }
    });
  }

  if (aiMessagesContainer) {
    aiMessagesContainer.addEventListener("click", e => {
      const navBtn = e.target.closest("[data-ai-nav]");
      if (!navBtn) return;
      const targetSelector = navBtn.getAttribute("data-ai-nav");
      smoothScrollTo(targetSelector);
      if (window.innerWidth <= 768) {
        toggleAIPanel(false);
      }
    });
  }

  if (aiQuickChips) {
    aiQuickChips.addEventListener("click", e => {
      const chip = e.target.closest(".ai-chip");
      if (!chip) return;
      const queryType = chip.getAttribute("data-query");
      handleChipQuery(queryType);
    });
  }

  function handleChipQuery(type) {
    let questionText = "";
    switch (type) {
      case "about":
        questionText = "What is ESRC Club and what is its background?";
        break;
      case "purpose":
        questionText = "What is ESRC's purpose and what do members do?";
        break;
      case "achievements":
        questionText = "What are ESRC's key competition achievements and awards?";
        break;
      case "projects":
        questionText = "What example project areas do members work on?";
        break;
      case "join":
        questionText = "How can a beginner join ESRC Club?";
        break;
      case "mentor":
        questionText = "Who is the faculty advisor and mentor?";
        break;
      default:
        questionText = "Tell me more about ESRC Club.";
    }

    addAIMessage("user", esc(questionText));
    generateAIResponse(questionText);
  }

  if (aiInputForm && aiInputText) {
    aiInputForm.addEventListener("submit", e => {
      e.preventDefault();
      const text = aiInputText.value.trim();
      if (!text) return;
      addAIMessage("user", esc(text));
      aiInputText.value = "";
      generateAIResponse(text);
    });
  }

  function generateAIResponse(userQuery) {
    const q = userQuery.toLowerCase();
    const typingIndicator = showAITyping();

    setTimeout(() => {
      if (typingIndicator && typingIndicator.parentNode) {
        typingIndicator.parentNode.removeChild(typingIndicator);
      }

      let responseHtml = "";

      // 1. About intent
      if (q.includes("about") || q.includes("who are you") || q.includes("what is esrc")) {
        responseHtml = `
          <p><strong>ESRC is a student-led robotics community at MBM University.</strong></p>
          <p>We bring curious minds together to turn ideas into working machines through hands-on learning, teamwork, and experimentation.</p>
          <p>The club is welcoming to beginners while supporting members as they grow into advanced projects and competitions.</p>
          <div class="ai-nav-actions">
            <button type="button" class="ai-nav-btn" data-ai-nav="#about"><i class="fa-solid fa-arrow-right"></i> Read About Section</button>
            <button type="button" class="ai-nav-btn" data-ai-nav="#purpose"><i class="fa-solid fa-bullseye"></i> View Purpose</button>
          </div>
        `;
      }
      // 2. Purpose & What We Do
      else if (q.includes("purpose") || q.includes("what do you do") || q.includes("activity") || q.includes("activities") || q.includes("learn")) {
        responseHtml = `
          <p><strong>Our Purpose:</strong></p>
          <p>Our goal is to make robotics approachable and practical. Members learn by building: exploring mechanics, electronics, sensors, embedded systems, programming, automation, and control through guided activities and team projects.</p>
          <p><strong>What We Do:</strong></p>
          <ul style="margin:4px 0 10px 16px;padding:0;font-size:0.84rem;line-height:1.5;">
            <li>Build and program mobile robots and autonomous systems.</li>
            <li>Learn electronics, sensors, microcontrollers, CAD, and fabrication through workshops.</li>
            <li>Work in teams on projects that grow from a first prototype to a tested system.</li>
            <li>Prepare for robotics competitions, hackathons, and technical showcases.</li>
            <li>Share knowledge through peer sessions, demonstrations, and project reviews.</li>
          </ul>
          <div class="ai-nav-actions">
            <button type="button" class="ai-nav-btn" data-ai-nav="#purpose"><i class="fa-solid fa-arrow-right"></i> Open Purpose & Activities</button>
          </div>
        `;
      }
      // 3. Achievements
      else if (q.includes("achievement") || q.includes("award") || q.includes("eyantra") || q.includes("e-yantra") || q.includes("rank") || q.includes("vikram") || q.includes("prize")) {
        responseHtml = `
          <p>ESRC has a strong track record of competitive excellence:</p>
          <ul style="margin:4px 0 10px 16px;padding:0;font-size:0.84rem;line-height:1.5;">
            <li><strong>E-Yantra 2023, IIT Bombay:</strong> All India Rank 1 in Lunar Scout theme.</li>
            <li><strong>Vikram Award (1st Position):</strong> “Santulan Robot: Autonomous Balancing Rover” by Ajeet Jain.</li>
            <li><strong>Vikram Award (Runner-up):</strong> “CoutureCraft: AI-powered fabric visualisation & boutique automation” by Viveena Khatri & Mukand Jirawala.</li>
            <li><strong>Technorion 2023, SKIT:</strong> Second Prize.</li>
            <li><strong>Encarta 2022, MBM:</strong> First, Second, and Third Positions.</li>
            <li><strong>E-Yantra 2020 & 2022, IIT Bombay:</strong> 6th Position & Internship.</li>
            <li><strong>Techfest 2022, IIT Bombay:</strong> Finals Qualifier.</li>
            <li><strong>Ignus 2019, IIT Jodhpur:</strong> First Prize in Maze Solver.</li>
          </ul>
          <div class="ai-nav-actions">
            <button type="button" class="ai-nav-btn" data-ai-nav="#achievements"><i class="fa-solid fa-trophy"></i> View Achievements & Photo Gallery</button>
          </div>
        `;
      }
      // 4. Example Projects
      else if (q.includes("project") || q.includes("navigation") || q.includes("line follower") || q.includes("arm") || q.includes("obstacle")) {
        responseHtml = `
          <p>Our focus areas include example project pathways designed for student exploration and team learning:</p>
          <ul style="margin:4px 0 10px 16px;padding:0;font-size:0.84rem;line-height:1.5;">
            <li><strong>Autonomous Navigation:</strong> Mapping, SLAM, and LiDAR integration.</li>
            <li><strong>High-Speed Line Following:</strong> Analog reflectance arrays and closed-loop PID.</li>
            <li><strong>Robotic Arms & Manipulators:</strong> Forward/inverse kinematics and servo linkages.</li>
            <li><strong>Obstacle Avoidance:</strong> Ultrasonic/ToF sensors and reactive state machines.</li>
            <li><strong>Sensor-Based Systems:</strong> Multi-sensor bus interfacing (I2C/SPI) and telemetry.</li>
          </ul>
          <small style="color:var(--clr-text-muted);display:block;margin-bottom:8px;">(Note: Marked as example project areas until ESRC supplies its completed active projects).</small>
          <div class="ai-nav-actions">
            <button type="button" class="ai-nav-btn" data-ai-nav="#projects"><i class="fa-solid fa-arrow-right"></i> Explore Project Cards</button>
          </div>
        `;
      }
      // 5. Events
      else if (q.includes("event") || q.includes("upcoming") || q.includes("date") || q.includes("when is")) {
        responseHtml = `
          <p><strong>Upcoming Events Status:</strong></p>
          <p>The official workshop and competition schedule for the upcoming semester is currently in preparation by the ESRC student coordinators and faculty advisor.</p>
          <p>To maintain complete accuracy, unconfirmed dates are not displayed. You can register on the contact section to receive direct notifications when dates are confirmed.</p>
          <div class="ai-nav-actions">
            <button type="button" class="ai-nav-btn" data-ai-nav="#events"><i class="fa-solid fa-calendar"></i> View Events Notice</button>
            <button type="button" class="ai-nav-btn" data-ai-nav="#contact"><i class="fa-solid fa-bell"></i> Notify Me</button>
          </div>
        `;
      }
      // 6. Join & Membership
      else if (q.includes("join") || q.includes("membership") || q.includes("register") || q.includes("fee") || q.includes("eligibility") || q.includes("beginner")) {
        responseHtml = `
          <p><strong>Membership at ESRC Club:</strong></p>
          <p>“Whether you are new to robotics or already building projects, there is room to contribute. Bring your curiosity, learn alongside other students, and find a project that fits your interests.”</p>
          <p>Membership is 100% free and open to all departments across MBM University. No prior coding or soldering experience is needed!</p>
          <div class="ai-nav-actions">
            <button type="button" class="ai-nav-btn" data-ai-nav="#contact"><i class="fa-solid fa-user-plus"></i> Open Registration Form</button>
            <button type="button" class="ai-nav-btn" data-ai-nav="#faq"><i class="fa-solid fa-circle-question"></i> View FAQ</button>
          </div>
        `;
      }
      // 7. Mentor / Advisor / Leadership
      else if (q.includes("mentor") || q.includes("advisor") || q.includes("alok") || q.includes("lead") || q.includes("gagan") || q.includes("team")) {
        responseHtml = `
          <p>ESRC is guided by our distinguished <strong>Faculty Advisor</strong>, <strong>Dr. Alok Khatri</strong> at MBM University.</p>
          <p>Student leadership is led by <strong>Gagan Bairagi</strong> (ESRC Club Lead), alongside core members <strong>Mayank Aggarwal</strong>, <strong>Faisal Khan</strong>, and our active student team.</p>
          <div class="ai-nav-actions">
            <button type="button" class="ai-nav-btn" data-ai-nav="#mentor"><i class="fa-solid fa-graduation-cap"></i> Faculty Advisor</button>
            <button type="button" class="ai-nav-btn" data-ai-nav="#team"><i class="fa-solid fa-users"></i> Meet the Team</button>
          </div>
        `;
      }
      // Default fallback
      else {
        responseHtml = `
          <p>At ESRC, we bring curious minds together to turn ideas into working machines through hands-on learning, teamwork, and experimentation.</p>
          <div class="ai-nav-actions">
            <button type="button" class="ai-nav-btn" data-ai-nav="#about"><i class="fa-solid fa-circle-info"></i> About ESRC</button>
            <button type="button" class="ai-nav-btn" data-ai-nav="#purpose"><i class="fa-solid fa-bullseye"></i> Purpose & Activities</button>
            <button type="button" class="ai-nav-btn" data-ai-nav="#achievements"><i class="fa-solid fa-trophy"></i> Achievements</button>
            <button type="button" class="ai-nav-btn" data-ai-nav="#contact"><i class="fa-solid fa-paper-plane"></i> Contact & Join</button>
          </div>
        `;
      }

      addAIMessage("bot", responseHtml);
    }, 450);
  }

})();
