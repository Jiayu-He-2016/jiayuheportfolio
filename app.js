const resumePath = "assets/resume.pdf";
const cvPath = "assets/cv.pdf";
const portfolioUiPath = "assets/portfolio-ui";
const contact = {
  github: "https://github.com/Jiayu-He-2016",
  linkedin: "https://www.linkedin.com/in/jiayu-he-a424972b9",
  email: "jiayuhe2016@gmail.com",
};

function boardImage(number, label = "") {
  const accessibility = label
    ? `role="img" aria-label="${label}"`
    : 'aria-hidden="true"';
  const fileName = number === "pin" ? "pin.png" : `board-${number}.png`;
  return `<span class="png-crop png-${number}" ${accessibility}><img src="${portfolioUiPath}/board/${fileName}" alt="" draggable="false"></span>`;
}

function boardImageAsset(fileName) {
  return `<span class="png-crop png-paper" aria-hidden="true"><img src="${portfolioUiPath}/board/${fileName}" alt="" draggable="false"></span>`;
}

const navigation = [
  ["home", "Home"],
  ["projects", "Projects"],
  ["research", "Research"],
  ["contact", "Contact"],
];

function renderNavigation(page) {
  const basePath = document.body.dataset.basePath || "";
  const sectionHref = (id) => page === "home" ? `#${id}` : `${basePath}index.html#${id}`;
  const links = navigation.map(([id, label]) => `
    <a class="nav-link${id === "home" && page === "home" ? " is-active" : ""}" href="${sectionHref(id)}"${id === "home" && page === "home" ? ' aria-current="location"' : ""}>${label}</a>
  `).join("");

  document.querySelector("#site-header").innerHTML = `
    ${page === "home" ? '<div class="scroll-progress" role="progressbar" aria-label="Portfolio scroll progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="scroll-progress__fill"></span></div>' : ""}
    <header class="site-nav">
      <nav class="nav-links" aria-label="Main navigation">${links}</nav>
      <a class="brand" href="${sectionHref("home")}" aria-label="Jiayu He, home"><span>Jiayu He</span></a>
      <div class="nav-actions">
        <a class="resume-link" href="${basePath}${resumePath}" download="Jiayu_He_Resume.pdf" aria-label="Download Resume PDF"><svg class="download-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5v10m0 0 4-4m-4 4-4-4M4 16.5h12"/></svg> Resume</a>
        <a class="cv-link" href="${basePath}${cvPath}" download="Jiayu_He_CV.pdf" aria-label="Download CV PDF"><svg class="download-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5v10m0 0 4-4m-4 4-4-4M4 16.5h12"/></svg> CV</a>
      </div>
    </header>`;
}

function renderHome() {
  return `
    <section class="home-section" id="home" aria-label="Home">
    <div class="board-stage" aria-label="Jiayu's interactive investigation board">
      <div class="board-grid" aria-hidden="true"></div>
      <svg class="connections connections-front" viewBox="0 0 2200 1284" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1007 204 L347 496"/>
        <path d="M1007 204 L312 916"/>
        <path d="M1007 204 L1158 720"/>
      </svg>
      <svg class="connections connections-back" viewBox="0 0 2200 1284" preserveAspectRatio="none" aria-hidden="true">
        <path d="M180 1080 L646 1106"/>
        <path d="M1325 1080 L1485 1160"/>
        <path d="M1388 885 L1975 1116"/>
      </svg>

      <div class="board-item social-evidence tactile">
        ${boardImage(9, "Evidence card showing GitHub, LinkedIn, and Gmail symbols")}
        <div class="social-hotspots">
          <a href="${contact.github}" target="_blank" rel="noopener noreferrer" aria-label="Open Jiayu's GitHub profile in a new tab"></a>
          <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Open Jiayu's LinkedIn profile in a new tab"></a>
          <a href="mailto:${contact.email}" aria-label="Email Jiayu"></a>
        </div>
      </div>

      <a class="board-item cv-paper board-download-note tactile" href="${cvPath}" download="Jiayu_He_CV.pdf" aria-label="Download CV PDF">
        ${boardImageAsset("board-5-cv.png")}
      </a>
      <a class="board-item resume-paper board-download-note tactile" href="${resumePath}" download="Jiayu_He_Resume.pdf" aria-label="Download Resume PDF">
        ${boardImageAsset("board-5-resume.png")}
      </a>
      <div class="board-item portrait-paper tactile">
        ${boardImage(7)}
      </div>
      <div class="board-item description-paper tactile" role="img" aria-label="Paper headed Description and Skills">
        ${boardImage(10)}
      </div>

      <a class="board-item research-folder tactile" href="#research" data-folder-shortcut="research" aria-label="Open research files">
        ${boardImage(2)}
      </a>
      <a class="board-item projects-folder tactile" href="#projects" data-folder-shortcut="projects" aria-label="Open project files">
        ${boardImage(1)}
      </a>

      <div class="board-item map-paper tactile">
        ${boardImage(6, "Map marking Seattle, Washington")}
        <p class="map-note handwritten">Current coordinates:<br>Seattle, WA</p>
      </div>
      <a class="board-item clue clue-left tactile" href="secret.html" aria-label="Open the hidden artwork and fun-facts page">
        ${boardImage(3, "Small evidence photograph")}
      </a>
      <a class="board-item clue clue-right tactile" href="secret.html" aria-label="Open the hidden artwork and fun-facts page">
        ${boardImage(8, "Small evidence photograph")}
      </a>

      <span class="pushpin pin-center">${boardImage("pin")}</span>
      <span class="pushpin pin-resume">${boardImage("pin")}</span>
      <span class="pushpin pin-left">${boardImage("pin")}</span>
      <span class="pushpin pin-bottom-left">${boardImage("pin")}</span>
      <span class="pushpin pin-right">${boardImage("pin")}</span>
      <span class="pushpin pin-bottom">${boardImage("pin")}</span>
    </div>
    </section>
    ${renderFolderSection("projects")}
    ${renderFolderSection("research")}
    ${renderContactSection()}`;
}

const pageContent = {
  secret: {
    kicker: "Off the record · hidden archive",
    title: "My Art Gallery",
    sections: [
      {
        title: "Designs",
        items: [
          { number: "01", title: "Glass Realm", src: "assets/secret-gallery/design-01.png", layout: "left-5" },
          {
            number: "02",
            src: "assets/secret-gallery/design-02.png",
            layout: "right-7",
            captionLines: [
              "3rd place in NetEase Onmyoji Skin Design Competition",
              "2023-China",
              "Officially implemented in game:",
            ],
            link: "https://www.youtube.com/watch?v=AH7lYuCuoa8",
          },
          {
            number: "03",
            title: "Kinara (缘觉梵音）",
            src: "assets/secret-gallery/design-03.png",
            layout: "left-6",
            caption: "Artwork published in Chinese Art, No.132, Issue 1, p. 105, February 2023.",
          },
          { number: "04", src: "assets/secret-gallery/design-04.png", layout: "right-5" },
          { number: "05", src: "assets/secret-gallery/design-05.png", layout: "left-5" },
          { number: "06", src: "assets/secret-gallery/design-06.png", layout: "right-7" },
        ],
      },
      {
        title: "Illustrations",
        items: [
          { number: "01", src: "assets/secret-gallery/illustration-01.png", layout: "left-5" },
          { number: "02", src: "assets/secret-gallery/illustration-02.png", layout: "right-7" },
          { number: "03", src: "assets/secret-gallery/illustration-03.png", layout: "left-7" },
          { number: "04", src: "assets/secret-gallery/illustration-04.png", layout: "right-5" },
          { number: "05", src: "assets/secret-gallery/illustration-05.png", layout: "left-5" },
          { number: "06", src: "assets/secret-gallery/illustration-06.png", layout: "right-7" },
        ],
      },
    ],
  },
};

const folderPages = {
  projects: {
    closedBackground: "projects-closed.jpg",
    openBackground: "projects-open.jpg",
    folderAsset: "board-1.png",
    files: [
      { src: "project-file-1-new.png", className: "project-file--one", label: "Project 1", href: "projects/project-1/" },
      { src: "project-file-2-new.png", className: "project-file--two", label: "Project 2", href: "projects/project-2/" },
    ],
  },
  research: {
    closedBackground: "research-closed.jpg",
    openBackground: "research-open.jpg",
    folderAsset: "board-2.png",
    files: [
      { src: "research-file-1.png", className: "research-file--one", label: "Research 1", href: "research/research-1/" },
      { src: "research-file-2.png", className: "research-file--two", label: "Research 2", href: "research/research-2/" },
      { src: "research-file-3.png", className: "research-file--three", label: "Research 3", href: "research/research-3/" },
    ],
  },
};

function renderFolderSection(page) {
  const content = folderPages[page];
  const fileMarkup = content.files.map((file) => {
    return `
      <div class="composition-file ${file.className}">
        <img src="${portfolioUiPath}/navigation/${file.src}" alt="" draggable="false">
        <a class="file-hitbox" href="${file.href}" aria-label="Open ${file.label} detail page"></a>
      </div>`;
  }).join("");

  return `
    <section class="visual-page folder-page ${page}-page" id="${page}" data-state="closed" aria-label="${page === "projects" ? "Projects" : "Research"}">
      <div class="folder-view folder-view--closed" data-view="closed">
        <img class="scene-background" src="${portfolioUiPath}/navigation/${content.closedBackground}" alt="" draggable="false">
        <button class="folder-trigger folder-trigger--${page}" type="button" data-open-folder="${page}" aria-label="Open ${page} folder">
          <img src="${portfolioUiPath}/board/${content.folderAsset}" alt="" draggable="false">
        </button>
      </div>
      <div class="folder-view folder-view--open" data-view="open" aria-hidden="true" inert>
        <img class="scene-background" src="${portfolioUiPath}/navigation/${content.openBackground}" alt="" draggable="false">
        ${fileMarkup}
      </div>
    </section>`;
}

function renderContactSection() {
  return `
    <section class="visual-page contact-page" id="contact" aria-label="Contact">
      <div class="contact-composition">
        <img class="contact-social" src="${portfolioUiPath}/board/board-9.png" alt="GitHub, LinkedIn, and email links" draggable="false">
        <img class="contact-writing-paper" src="${portfolioUiPath}/navigation/contact-writing-paper.png" alt="" draggable="false">
        <img class="contact-send-art" src="${portfolioUiPath}/navigation/contact-send.png" alt="" draggable="false">
        <form class="contact-form">
          <label class="sr-only" for="contact-message">Message for Jiayu</label>
          <textarea id="contact-message" name="message" maxlength="3000" required aria-describedby="contact-message-hint"></textarea>
          <span class="sr-only" id="contact-message-hint">Your email app will open with your message addressed to Jiayu.</span>
          <button class="contact-send-hitbox" type="submit" aria-label="Send message by email"></button>
        </form>
        <div class="contact-social-hotspots" aria-label="Contact links">
          <a href="${contact.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
          <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
          <a href="mailto:${contact.email}" aria-label="Email Jiayu"></a>
        </div>
      </div>
    </section>
    `;
}

function renderSecretPage() {
  const content = pageContent.secret;
  const basePath = document.body.dataset.basePath || "";
  const sections = content.sections.map((section) => {
    const artworks = section.items.map((item) => {
      const label = `${section.title} ${item.number}${item.title ? `: ${item.title}` : ""}`;
      const caption = item.captionLines
        ? `<p>${item.captionLines.join("<br>")}${item.link ? `<br><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.link}</a>` : ""}</p>`
        : item.caption
          ? `<p>${item.caption}</p>`
          : "";

      return `
        <figure class="gallery-work gallery-work--${item.layout}">
          <a class="gallery-work__image" href="${item.src}" target="_blank" rel="noopener noreferrer" aria-label="View ${label} at full size in a new tab">
            <img src="${item.src}" alt="${label}" loading="lazy" decoding="async">
          </a>
          <figcaption class="gallery-work__caption">
            <div class="gallery-work__identity">
              <span class="gallery-work__number">${item.number}</span>
              ${item.title ? `<h3>${item.title}</h3>` : ""}
            </div>
            ${caption}
          </figcaption>
        </figure>`;
    }).join("");

    return `
      <section class="art-gallery__section" aria-labelledby="gallery-${section.title.toLowerCase()}">
        <div class="art-gallery__section-heading">
          <h2 id="gallery-${section.title.toLowerCase()}">${section.title}</h2>
        </div>
        <div class="art-gallery__grid">${artworks}</div>
      </section>`;
  }).join("");

  return `
    <section class="inner-page secret-page art-gallery">
      <div class="page-topline"><span>${content.kicker}</span><a href="index.html#home">← Back to the board</a></div>
      <div class="page-intro art-gallery__intro">
        <div class="art-gallery__hero">
          <h1>${content.title}</h1>
          <div class="art-gallery__player">
            <button class="art-gallery__record is-reset" type="button" aria-label="Play audio" aria-pressed="false">
              <img src="${basePath}assets/secret-gallery/record.png" alt="" draggable="false">
            </button>
            <p class="art-gallery__player-caption">In her spare time, Jiayu<br>also likes to play piano ☺</p>
          </div>
        </div>
        <audio id="gallery-audio" src="${basePath}assets/secret-gallery/IMG_5489.mp3" loop preload="metadata" hidden></audio>
        <span class="sr-only" id="gallery-audio-status" aria-live="polite"></span>
      </div>
      ${sections}
      <footer class="art-gallery__closing">
        <div>
          <p>Reach out to me</p>
          <nav aria-label="Social links">
            <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:${contact.email}">Email</a>
            <a href="${contact.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>
      </footer>
    </section>`;
}

function setupGalleryAudio() {
  const button = document.querySelector(".art-gallery__record");
  const audio = document.querySelector("#gallery-audio");
  const status = document.querySelector("#gallery-audio-status");
  if (!(button instanceof HTMLButtonElement) || !(audio instanceof HTMLAudioElement) || !(status instanceof HTMLElement)) return;

  const controller = new AbortController();
  const { signal } = controller;
  let playAttempt = 0;
  let playPending = false;

  const syncPlaybackState = () => {
    const playing = !audio.paused && !audio.ended;
    button.classList.toggle("is-playing", playing);
    if (playing) button.classList.remove("is-reset");
    button.setAttribute("aria-pressed", String(playing));
    button.setAttribute("aria-label", playing ? "Pause audio" : "Play audio");
    status.textContent = playing ? "Audio playing." : "Audio paused.";
  };

  const resetPlayback = () => {
    playAttempt += 1;
    playPending = false;
    audio.pause();
    audio.currentTime = 0;
    button.classList.add("is-reset");
    syncPlaybackState();
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!audio.paused || playPending) {
      playAttempt += 1;
      playPending = false;
      audio.pause();
      syncPlaybackState();
      return;
    }

    const attempt = ++playAttempt;
    playPending = true;
    audio.play().then(() => {
      if (attempt !== playAttempt) return;
      playPending = false;
      status.textContent = "Audio playing.";
      syncPlaybackState();
    }).catch((error) => {
      if (attempt !== playAttempt) return;
      playPending = false;
      syncPlaybackState();
      if (error.name === "AbortError") return;
      status.textContent = "Audio could not be played. Please try again.";
      console.error("Could not start the gallery audio.", error);
    });
  }, { signal });

  audio.addEventListener("play", syncPlaybackState, { signal });
  audio.addEventListener("pause", syncPlaybackState, { signal });
  audio.addEventListener("error", () => {
    status.textContent = "Audio could not be loaded.";
    console.error("Could not load the gallery audio.", audio.error);
  }, { signal });

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest("a[href]");
    if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname) resetPlayback();
  }, { signal });

  window.addEventListener("pagehide", () => {
    resetPlayback();
    controller.abort();
  }, { signal, once: true });
}

const detailPages = {
    "project-1": {
      type: "Project",
      label: "Projects · File 01",
      title: "Making Translation-Error Reporting Flow Easier to Follow",
      backSection: "projects",
      backLabel: "Back to Projects",
    },
    "project-2": {
      type: "Project",
      label: "Projects · File 02",
      title: "Healthcare & Pharmaceutical Analytics",
      backSection: "projects",
      backLabel: "Back to Projects",
    },
    "research-1": {
      type: "Research",
      label: "Research · File 01",
      title: "Social Cue Recognition and Decision Making in AI",
      backSection: "research",
      backLabel: "Back to Research",
    },
    "research-2": {
      type: "Research",
      label: "Research · File 02",
      title: "Pupillometry Study: Visuospatial WM and the Use of Mental Timeline",
      backSection: "research",
      backLabel: "Back to Research",
    },
    "research-3": {
      type: "Research",
      label: "Research · File 03",
      title: "Object-Based vs. Feature-Based Visuospatial Working Memory with EEG Investigation",
      backSection: "research",
      backLabel: "Back to Research",
    },
};

function renderDetailPage(content) {
    document.title = `${content.title} — Jiayu He`;
    const backHref = `${document.body.dataset.basePath || ""}index.html#${content.backSection}`;
    return `
      <section class="inner-page detail-page" aria-label="${content.title} detail page">
        <div class="page-topline"><span>${content.label}</span><a href="${backHref}">← ${content.backLabel}</a></div>
        <div class="page-intro">
          <p class="eyebrow">JH · ${content.type} file</p>
          <h1>${content.title}</h1>
        </div>
        <article class="editorial-card detail-placeholder">
          <p class="eyebrow">File notes · awaiting content</p>
          <p>${content.placeholder}</p>
        </article>
        <div class="page-next"><span>Return to the folder overview</span><a href="${backHref}"><span aria-hidden="true">←</span> ${content.backLabel}</a></div>
      </section>`;
}

function renderProjectOne(content) {
  document.title = `${content.title} — Jiayu He`;
  const basePath = document.body.dataset.basePath || "";
  const backHref = `${basePath}index.html#projects`;
  const figure = (number, alt, caption = "", className = "") => `
    <figure class="case-figure ${className}">
      <img src="${basePath}assets/project-images/project_1/img-${String(number).padStart(3, "0")}.png" alt="${alt}" loading="lazy" decoding="async">
      ${caption ? `<figcaption>${caption}</figcaption>` : ""}
    </figure>`;
  const personaCard = ({ id, name, descriptor, goal, frequency, observations, implication }) => `
    <button class="persona-card" type="button" aria-pressed="false" aria-label="${name} persona, activate to view details">
      <span class="persona-card__inner">
        <span class="persona-card__face persona-card__front">
          <span class="persona-card__eyebrow">PERSONA ${id}</span>
          <span class="persona-card__name">${name}</span>
          <span class="persona-card__descriptor">${descriptor}</span>
          <span class="persona-card__attribute"><span>Primary goal</span><strong>${goal}</strong></span>
          <span class="persona-card__attribute"><span>Reporting behavior</span><strong>${frequency}</strong></span>
          <span class="persona-card__hint">Click or press Enter to flip</span>
        </span>
        <span class="persona-card__face persona-card__back" aria-hidden="true">
          <span class="persona-card__eyebrow">${name} · CONTEXT</span>
          <ul>${observations.map((observation) => `<li>${observation}</li>`).join("")}</ul>
          <p class="persona-card__implication"><strong>Design implication</strong>${implication}</p>
          <span class="persona-card__hint">Click or press Enter to return</span>
        </span>
      </span>
    </button>`;
  const personas = [
    {
      id: "01",
      name: "Alice",
      descriptor: "The Everyday Listener",
      goal: "Enjoy music",
      frequency: "Low frequency",
      observations: [
        "Frequently searches for music and explores playlists.",
        "Rarely thinks about translation quality.",
        "May occasionally notice an obvious translation mistake.",
      ],
      implication: "Keep translation reporting from competing with frequent music-navigation actions.",
    },
    {
      id: "02",
      name: "Brandon",
      descriptor: "The Multilingual Learner",
      goal: "Understand the meaning of lyrics",
      frequency: "Medium to high frequency",
      observations: [
        "Relies on translated lyrics to understand songs.",
        "Pays close attention to wording.",
        "Is more likely to notice awkward or incorrect translations.",
      ],
      implication: "Make reporting easy to discover and provide enough context to identify the specific translation issue.",
    },
  ];

  return `
    <article class="inner-page detail-page case-study ux-case project-one-case project-case-editorial" aria-labelledby="project-one-title">
      <div class="page-topline">
        <span>Projects · File 01</span>
        <a href="${backHref}">← Back to Projects</a>
      </div>

      <div class="case-study-layout project-one-layout">
        <nav class="case-progress" aria-label="Project 1 case study sections">
          <ol>
            <li><a href="#project-one-problem" aria-current="location"><span class="case-progress__number">01</span><span class="case-progress__label">Problem</span></a></li>
            <li><a href="#project-one-approach"><span class="case-progress__number">02</span><span class="case-progress__label">Approach</span></a></li>
            <li><a href="#project-one-solution"><span class="case-progress__number">03</span><span class="case-progress__label">Solution</span></a></li>
            <li><a href="#project-one-outcome"><span class="case-progress__number">04</span><span class="case-progress__label">Outcome</span></a></li>
          </ol>
        </nav>

        <div class="case-study-story project-one-story">
          <header class="case-hero">
            <div class="case-hero__copy">
              <p class="eyebrow">UX research · Interaction design · Internship project</p>
              <h1 id="project-one-title">${content.title}</h1>
              <p class="lead">A usability study and redesign of a contextual reporting flow for a multimedia listening platform.</p>
            </div>
            ${figure(1, "Low-fidelity multimedia listening interface with a translation-error reporting panel", "Project interface shown in the source presentation. NDA restrictions mean proprietary product details and high-fidelity designs have been removed or simplified as low-fidelity representations.", "case-figure--hero")}
            <dl class="case-meta" aria-label="Project details">
              <div><dt>Role</dt><dd>UX Researcher, designer</dd></div>
              <div><dt>Duration</dt><dd>4 months (2026)</dd></div>
              <div><dt>Tools</dt><dd>Figma, Figma Ideation, Zoom, AI-assisted prototyping</dd></div>
              <div><dt>Methods</dt><dd>Usability testing, data analysis, prototyping and interaction design, heuristic evaluation, user journey mapping</dd></div>
            </dl>
          </header>

          <section class="project-one-section" id="project-one-problem" aria-labelledby="project-one-problem-title">
            <div class="project-one-section__heading">
              <p class="eyebrow">01 · IDENTIFY THE PROBLEM</p>
              <h2 id="project-one-problem-title">Users struggled to find and complete the reporting flow.</h2>
            </div>
            <div class="project-one-study-copy">
              <p>I conducted usability testing with 6 participants across 5 common tasks to evaluate the overall product feature performance, by measuring task completion rate, time, and overall satisfaction rate.</p>
              <p class="project-one-finding">After the usability testing, we found that <span>Task 1, reporting translation error feature in audio/video</span> showed the lowest success rate and a tied-lowest satisfaction rate.</p>
            </div>
            <figure class="case-figure project-one-task-figure">
              <img src="${basePath}assets/project-images/project_1/img-003.png" alt="Task-level measures recorded during usability testing, showing success rate, difficulty, satisfaction, and average time for five tasks" loading="lazy" decoding="async">
            </figure>
            <p class="project-one-transition">At first, I thought it was just a button-placement issue, but after reviewing participant interview notes and task observations, I identified 6 issues across the reporting experience and its surrounding context.</p>
            <ol class="project-one-issues">
              <li><span class="project-one-issue-number">01</span><div><h3>Hidden reporting controls</h3><p>Users expected Report alongside familiar actions like Like and Share, rather than inside a collapsible toolbar.</p></div></li>
              <li><span class="project-one-issue-number">02</span><div><h3>Unclear reporting options</h3><p>Users confused “Quick Report” with “Suggest an Edit,” potentially leading to incorrect or low-quality submissions.</p></div></li>
              <li><span class="project-one-issue-number">03</span><div><h3>Ambiguous icon</h3><p>The same icon represented general content reporting and translation-error reporting, making the distinction unclear.</p></div></li>
              <li><span class="project-one-issue-number">04</span><div><h3>Unclear content context</h3><p>Users struggled to identify which specific line of content they were reporting.</p></div></li>
              <li><span class="project-one-issue-number">05</span><div><h3>Overwhelming information</h3><p>The full description contained too much information without a clear visual hierarchy.</p></div></li>
              <li><span class="project-one-issue-number">06</span><div><h3>Missing confirmation feedback</h3><p>Users lacked clear feedback about whether their reporting action had been completed.</p></div></li>
            </ol>
            <p class="project-one-takeaway">Users needed a reporting experience that was easier to discover and more clearly connected to the content being reported.</p>
          </section>

          <section class="project-one-section" id="project-one-approach" aria-labelledby="project-one-approach-title">
            <div class="project-one-section__heading">
              <h2 id="project-one-approach-title">02 · REDESIGN APPROACH</h2>
            </div>
            <p class="project-one-section__lead">Before jumping into UI changes, I explored who would use the feature, when reporting would be relevant, and how the interaction should fit into the listening experience.</p>

            <section class="project-one-subsection" aria-labelledby="project-one-who-title">
              <div class="project-one-subsection__heading"><span>01</span><h3 id="project-one-who-title">Define the Who, What &amp; When</h3></div>
              <p>I developed two personas to understand different reporting needs and how frequently users might encounter translation issues.</p>
              <div class="persona-grid">${personas.map(personaCard).join("")}</div>
              <div class="project-one-what-when">
                <p>Next, I evaluated different feature-use scenarios to understand when reporting would be relevant and how frequently each action was needed.</p>
                ${figure(5, "Source activity table comparing search and browsing, playlist management, original-content listening, translated lyrics, and dubbed audio with reporting relevance")}
              </div>
            </section>

            <section class="project-one-subsection project-one-subsection--journey" aria-labelledby="project-one-journey-title">
              <div class="project-one-journey-copy">
                <div class="project-one-subsection__heading"><span>02</span><h3 id="project-one-journey-title">User Journey Map</h3></div>
                <p>I mapped the user's journey to understand how reporting fits into the broader listening experience and where friction occurs.</p>
              </div>
              <figure class="case-figure project-one-journey-figure" aria-label="Original Ideation reporting flow">
                <img src="${basePath}assets/project-images/project_1/ideation.png" alt="Original Ideation flow map showing translated-content use, contextual translation-error reporting, review, and confirmation" loading="lazy" decoding="async">
                <figcaption>Reporting flow from translated-content use to report submission.</figcaption>
              </figure>
            </section>

            <section class="project-one-subsection" aria-labelledby="project-one-comparison-title">
              <div class="project-one-subsection__heading"><span>03</span><h3 id="project-one-comparison-title">Comparative Analysis</h3></div>
              <p>I explored different placements for the reporting control, comparing their advantages and trade-offs before selecting a direction.</p>
              ${figure(8, "Source comparison of three reporting-control placements with their pros and cons")}
              <div class="project-one-insights">
                <article><p class="eyebrow">Design insight 01</p><h4>Prioritize frequent-use actions</h4><p>Keep commonly used navigation and controls visible and easy to access, while making less frequent actions available when relevant.</p></article>
                <article><p class="eyebrow">Design insight 02</p><h4>Make reporting contextual</h4><p>Place the reporting action alongside relevant content, such as lyrics or audio, so users can clearly connect the issue with the action.</p></article>
              </div>
            </section>
          </section>

          <section class="project-one-section" id="project-one-solution" aria-labelledby="project-one-solution-title">
            <div class="project-one-section__heading">
              <h2 id="project-one-solution-title">03 · THE SOLUTION</h2>
            </div>
            <div class="project-one-comparison">
              <div class="project-one-comparison__column">
                <h3>Before</h3>
                ${figure(9, "Before: original report form with reason choices and a required additional-details field")}
              </div>
              <div class="project-one-comparison__column">
                <h3>After</h3>
                ${figure(10, "After: low-fidelity multimedia player mockup with the translation-error report action beside relevant content")}
                ${figure(11, "After: three low-fidelity steps showing translation-error review, reporting, and submission feedback")}
              </div>
            </div>
            <p class="project-one-recommendation-intro">Based on the usability findings, here are my design recommendations:</p>
            <ol class="project-one-recommendations">
              <li><span>01</span><div><h3>Reposition the reporting action</h3><p>Move it closer to relevant content to improve discoverability.</p></div></li>
              <li><span>02</span><div><h3>Add a confirmation step</h3><p>Help users review their selection and avoid accidental submissions.</p></div></li>
              <li><span>03</span><div><h3>Make additional details optional</h3><p>Allow users to submit a quick report without completing unnecessary steps.</p></div></li>
              <li><span>04</span><div><h3>Add submission feedback</h3><p>Let users know when their report has been successfully submitted.</p></div></li>
            </ol>
            <p class="project-one-solution-close">I also applied progressive disclosure to guide users through the necessary steps without presenting every option at once.</p>
          </section>

          <section class="project-one-section" id="project-one-outcome" aria-labelledby="project-one-outcome-title">
            <div class="project-one-section__heading">
              <h2 id="project-one-outcome-title">04 · THE OUTCOME</h2>
            </div>
            <p class="project-one-section__lead">To evaluate whether the changes improved the experience, I defined 4 measures for a follow-up usability study:</p>
            <div class="project-one-outcome-table">
              <table>
                <caption>Four measures and planned follow-up evaluation criteria.</caption>
                <thead><tr><th scope="col">Measure</th><th scope="col">Evaluation question</th><th scope="col">Planned success criteria</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Discoverability</th><td data-label="Evaluation question">Can users find the report button without assistance?</td><td data-label="Planned success criteria">Lower navigation errors (misclick time), higher task completion rate, and lower drop-off rate.</td></tr>
                  <tr><th scope="row">Accuracy</th><td data-label="Evaluation question">Can users report what they want to report?</td><td data-label="Planned success criteria">Higher quality of reports from users.</td></tr>
                  <tr><th scope="row">Efficiency</th><td data-label="Evaluation question">Can users complete the flow smoothly?</td><td data-label="Planned success criteria">Faster task completion time.</td></tr>
                  <tr><th scope="row">Satisfaction</th><td data-label="Evaluation question">What is the user's overall feeling about the feature?</td><td data-label="Planned success criteria">Higher satisfaction rate than previous usability testing.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <footer class="page-next case-return">
            <span>Return to the project folder</span>
            <a href="${backHref}"><span aria-hidden="true">←</span> Back to Projects</a>
          </footer>
        </div>
      </div>
    </article>`;
}

function renderProjectTwo(content) {
  document.title = `${content.title} — Jiayu He`;
  const basePath = document.body.dataset.basePath || "";
  const backHref = `${basePath}index.html#projects`;
  const figure = (number, alt, className = "") => `
    <figure class="case-figure ${className}">
      <img src="${basePath}assets/project-images/project_2/img-${String(number).padStart(3, "0")}.png" alt="${alt}" loading="lazy" decoding="async">
    </figure>`;

  return `
    <article class="inner-page detail-page case-study analytics-case project-two-case project-case-editorial" aria-labelledby="project-two-title">
      <div class="page-topline">
        <span>Projects · File 02</span>
        <a href="${backHref}">← Back to Projects</a>
      </div>

      <div class="case-study-layout project-two-layout">
        <nav class="case-progress" aria-label="Project 2 case study sections">
          <ol>
            <li><a href="#project-two-rq" aria-current="location"><span class="case-progress__number">01</span><span class="case-progress__label">RQ</span></a></li>
            <li><a href="#project-two-analysis-flow"><span class="case-progress__number">02</span><span class="case-progress__label">Analysis Flow</span></a></li>
            <li><a href="#project-two-visualizations"><span class="case-progress__number">03</span><span class="case-progress__label">Visualizations</span></a></li>
            <li><a href="#project-two-limitation"><span class="case-progress__number">04</span><span class="case-progress__label">Limitation</span></a></li>
          </ol>
        </nav>

        <div class="case-study-story project-two-story">
          <header class="case-hero">
            <div class="case-hero__copy">
              <p class="eyebrow">SQL + Tableau project</p>
              <h1 id="project-two-title">${content.title}</h1>
              <p class="lead">Analysis of the 2010–2026 global healthcare and pharmaceutical dataset, exploring clinical development, R&amp;D investment, biotech funding, and therapeutic landscapes with SQL and Tableau.</p>
            </div>
            <dl class="case-meta" aria-label="Project details">
              <div><dt>Role</dt><dd>Data Analysis, Research</dd></div>
              <div><dt>Tools</dt><dd>PostgreSQL, DBeaver, Tableau</dd></div>
              <div><dt>Data period</dt><dd>2010–2026</dd></div>
              <div><dt>Focus</dt><dd>Clinical development, R&amp;D investment, biotech funding, and therapeutic landscapes</dd></div>
            </dl>
          </header>

          <section class="project-two-section" id="project-two-rq" aria-labelledby="project-two-rq-title">
            <div class="project-two-section__heading">
              <p class="eyebrow">01</p>
              <h2 id="project-two-rq-title">Research Questions</h2>
            </div>
            <ol class="project-two-question-list">
              <li>How has clinical trial activity and success changed over time?</li>
              <li>How does pharmaceutical R&amp;D investment relate to company performance?</li>
              <li>How do biotech funding patterns relate to clinical development outcomes?</li>
              <li>How do clinical trials, drug approvals, and disease burden differ across therapeutic areas and geographical regions?</li>
            </ol>
          </section>

          <section class="project-two-section" id="project-two-analysis-flow" aria-labelledby="project-two-analysis-flow-title">
            <div class="project-two-section__heading">
              <p class="eyebrow">02</p>
              <h2 id="project-two-analysis-flow-title">Analysis Flow</h2>
            </div>
            <div class="project-two-workflow-layout">
              ${figure(2, "Original workflow diagram showing five healthcare datasets, PostgreSQL, data validation, SQL analysis, and Tableau dashboard visualization", "project-two-workflow-figure")}
              <p class="project-two-data-validation"><strong>Data validation</strong><span>Data validation was an important part of the workflow. For example, I checked whether clinical-trial sponsors could be matched to pharmaceutical financial records by company name and year, rather than assuming that all of them are aligned (e.g., there are acronyms and joint company names).</span></p>
            </div>
          </section>

          <section class="project-two-section" id="project-two-visualizations" aria-labelledby="project-two-visualizations-title">
            <div class="project-two-section__heading">
              <p class="eyebrow">03</p>
              <h2 id="project-two-visualizations-title">Visualizations</h2>
            </div>
            <div class="project-two-dashboards">
              <article class="project-two-dashboard">
                <h3>Dashboard 1</h3>
                ${figure(3, "Original Tableau dashboard 1 showing clinical trials, drug approvals, R&D spending, company performance, clinical-trial activity, and biotech funding", "project-two-dashboard__figure")}
                <p class="project-two-dashboard__description">This dashboard provides an overview of clinical trial activity, trial success rates, drug approvals, pharmaceutical R&amp;D investment, company performance, and biotech funding trends.</p>
              </article>
              <article class="project-two-dashboard">
                <h3>Dashboard 2</h3>
                ${figure(4, "Original Tableau dashboard 2 showing regional disease burden, common diseases, company drug portfolios, and drug-type sales by therapy area", "project-two-dashboard__figure")}
                <p class="project-two-dashboard__description">This dashboard examines disease burden, therapeutic areas, clinical sponsors, and pharmaceutical drug portfolios to explore how healthcare needs and therapeutic development vary across regions and companies.</p>
                <div class="project-two-dashboard__insights" aria-labelledby="project-two-dashboard-2-insights">
                  <h4 id="project-two-dashboard-2-insights">Insights</h4>
                  <ul>
                    <li>The African Region has the highest disease burden, and cardiovascular disease is the most common disease.</li>
                    <li>Most drug companies approve drugs in the oncology area, and oncology drug sales are the highest.</li>
                  </ul>
                </div>
              </article>
              <article class="project-two-dashboard">
                <h3>Dashboard 3</h3>
                ${figure(5, "Original Tableau dashboard 3 showing biotech funding, R&D spending, clinical-trial activity, and trial success over time", "project-two-dashboard__figure")}
                <p class="project-two-dashboard__description">I used this dashboard to explore relationships between pharmaceutical investment and clinical development, including R&amp;D spending, biotech funding, trial activity, and trial success.</p>
                <div class="project-two-dashboard__insights" aria-labelledby="project-two-dashboard-3-insights">
                  <h4 id="project-two-dashboard-3-insights">Insights</h4>
                  <ul>
                    <li>Both R&amp;D intensity and biotech deal value were not associated with trial success rate in this analysis.</li>
                    <li>Most companies had relatively high deal activity, but R&amp;D spending varied considerably.</li>
                    <li>The year 2026 had fewer observations and could be excluded as an outlier.</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          <section class="project-two-section" id="project-two-limitation" aria-labelledby="project-two-limitation-title">
            <div class="project-two-section__heading">
              <p class="eyebrow">04</p>
              <h2 id="project-two-limitation-title">Limitation</h2>
            </div>
            <p class="project-two-limitation-copy">This project uses a Kaggle healthcare and pharmaceutical dataset for analytical practice. The dataset contains inconsistent historical coverage across tables and may include constructed or simulated records. Results are therefore intended to demonstrate data analysis and visualization workflows rather than represent authoritative estimates of the global pharmaceutical industry.</p>
          </section>

          <footer class="page-next case-return">
            <span>Return to the project folder</span>
            <a href="${backHref}"><span aria-hidden="true">←</span> Back to Projects</a>
          </footer>
        </div>
      </div>
    </article>`;
}

function renderResearchOne(content) {
  document.title = `${content.title} — Jiayu He`;
  const basePath = document.body.dataset.basePath || "";
  const backHref = `${basePath}index.html#research`;
  const imageDimensions = {
    2: [1420, 738],
    3: [1278, 1136],
    4: [1271, 1128],
    5: [1178, 1323],
  };
  const figure = (number, alt, caption, className = "") => {
    const [width, height] = imageDimensions[number];
    return `
      <figure class="case-figure case-figure--wide research-figure ${className}">
        <img src="${basePath}assets/project-images/research_1/img-${String(number).padStart(3, "0")}.png" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async">
        <figcaption>${caption}</figcaption>
      </figure>`;
  };

  return `
    <article class="inner-page detail-page case-study research-case research-one" aria-labelledby="research-one-title">
      <div class="page-topline">
        <span>Research · File 01</span>
        <a href="${backHref}">← Back to Research</a>
      </div>

      <header class="case-hero">
        <div class="case-hero__copy">
          <p class="eyebrow">Social cognition · Human-AI interaction · GPT-4o / SFRT</p>
          <h1 id="research-one-title">${content.title}</h1>
          <p class="lead">A six-month research project (2025) examining GPT-4o’s interpretation of goals and actions in familiar and unfamiliar social scenarios using the Situational Feature Recognition Test (SFRT).</p>
        </div>
        <dl class="case-meta" aria-label="Research details">
          <div><dt>Role</dt><dd>Researcher: model performance testing, data collection, and analysis</dd></div>
          <div><dt>Tools</dt><dd>Python, R, ChatGPT (GPT-4o)</dd></div>
          <div><dt>Duration</dt><dd>6 months · 2025</dd></div>
          <div><dt>Task</dt><dd>9 scenarios; 14 action choices and 14 goal choices per scenario</dd></div>
        </dl>
      </header>

      <div class="research-one-layout">
        <nav class="case-progress research-one-progress" aria-label="Research case study sections">
          <ol>
            <li><a href="#research-one-background" aria-label="01 Background"><span class="research-one-progress__number">01</span></a></li>
            <li><a href="#research-one-question" aria-label="02 Research question"><span class="research-one-progress__number">02</span></a></li>
            <li><a href="#research-one-task" aria-label="03 Measuring task"><span class="research-one-progress__number">03</span></a></li>
            <li><a href="#research-one-method" aria-label="04 Prompting and response collection"><span class="research-one-progress__number">04</span></a></li>
            <li><a href="#research-one-scoring" aria-label="05 Scoring and comparison"><span class="research-one-progress__number">05</span></a></li>
            <li><a href="#research-one-results" aria-label="06 Results"><span class="research-one-progress__number">06</span></a></li>
            <li><a href="#research-one-implications" aria-label="07 Takeaways and next steps"><span class="research-one-progress__number">07</span></a></li>
          </ol>
        </nav>

        <div class="research-one-story">
      <section class="case-section research-one-background" id="research-one-background" aria-labelledby="research-one-background-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-one-background-label">01 · OVERVIEW &amp; BACKGROUND</p>
        </div>
        <div class="case-section__body">
          <p>Modern AI systems perform strongly on object and action recognition, sometimes reaching or surpassing human-level performance on those tasks. They can also match people on simple social-judgment tests, but their performance in complex, ambiguous, or unfamiliar social situations that require deeper reasoning remains uncertain.</p>
          <p>This project tests GPT-4o’s ability to interpret nuanced everyday human interactions and asks whether current AI models show meaningful real-world social understanding and decision-making.</p>
        </div>
      </section>

      <section class="case-section research-questions" id="research-one-question" aria-labelledby="research-one-question-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-one-question-label">02 · RESEARCH QUESTION</p>
        </div>
        <div class="case-section__body">
          <div class="research-question-main">
            <p class="eyebrow">Main question</p>
            <p>To what extent can the GPT-4o model infer human goals (abstract features) and actions (concrete features) across familiar and unfamiliar social scenarios?</p>
          </div>
          <ol class="research-question-list">
            <li>Does abstraction (goal inference) pose a greater challenge to AI than action recognition?</li>
            <li>Does unfamiliar social context impair AI performance?</li>
            <li>How does GPT-4o compare with healthy human controls and individuals with schizophrenia on a standardized social cognition task?</li>
          </ol>
        </div>
      </section>

      <section class="case-section research-one-task" id="research-one-task" aria-labelledby="research-one-task-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-one-task-label">03 · MEASURING TASK</p>
        </div>
        <div class="case-section__body">
          <p>The Situational Feature Recognition Test (SFRT; Corrigan &amp; Green, 1993) presents nine familiar and unfamiliar social situations, including examples such as taking a test or building an igloo. For each situation, the task offers 14 possible actions (concrete features) and 14 possible goals (abstract features); the respondent selects those relevant to the situation.</p>
        </div>
        ${figure(2, "Original SFRT practice example showing separate action and goal lists for the situation Going to a Movie", "Original task example · “Going to a Movie” is marked as a practice situation; the figure separates action choices from goal choices.")}
        <p class="research-source research-one-task-source">The presentation links to the <a href="https://stigmaandempowerment.org/images/stories/sfrt.pdf" target="_blank" rel="noreferrer">SFRT source material</a>.</p>
      </section>

      <section class="case-section research-one-paired research-one-prompt" id="research-one-method" aria-labelledby="research-one-method-label">
        <div class="research-one-paired-copy">
          <p class="eyebrow" id="research-one-method-label">04 · PROMPTING AND RESPONSE COLLECTION</p>
          <p>GPT-4o was prompted with the nine scenarios and their action and goal choices. The prompt responses were saved in JSON format, and the process was run for 10 independent trials.</p>
        </div>
        ${figure(3, "Original prompt screenshot with SFRT instructions and sample action and goal lists for taking a test and building an igloo", "Original prompt examples · Instructions and action/goal choices for “Taking a Test” and “Building an Igloo.”", "research-one-paired-figure")}
      </section>

      <section class="case-section research-one-paired research-one-scoring" id="research-one-scoring" aria-labelledby="research-one-scoring-label">
        ${figure(4, "Original scoring tables showing GPT-4o average hit and false-positive rates for four conditions and aggregate comparisons with healthy-control and schizophrenia-group benchmarks", "Original scoring summary · Condition averages across 10 trials and aggregate comparisons with the cited HC and schizophrenia-group benchmarks.", "research-one-paired-figure")}
        <div class="research-one-paired-copy">
          <p class="eyebrow" id="research-one-scoring-label">05 · SCORING AND COMPARISON</p>
          <p>Responses were scored against the original SFRT target lists and averaged across the 10 trials. Hit rate is the proportion of correct target features; false-positive (FP) rate is the rate of incorrect selections. Both were examined by familiar versus unfamiliar context and by action versus goal.</p>
          <p>The presentation also compares GPT-4o’s aggregate scores with healthy-control (HC) and schizophrenia-group benchmarks cited from Gómez-Gastiasoro et al. (2018).</p>
        </div>
      </section>

      <section class="case-section research-one-results" id="research-one-results" aria-labelledby="research-one-results-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-one-results-label">06 · RESULTS</p>
        </div>
        ${figure(5, "Original two-panel chart showing GPT-4o hit and false-positive rates across concrete/abstract familiar/unfamiliar conditions, plus aggregate performance compared with healthy-control and schizophrenia groups", "Original results visualization · GPT-4o condition-level rates and the presentation’s aggregate comparison with HC and schizophrenia-group benchmarks.", "research-one-results-figure")}
        <div class="research-one-results-copy">
          <div class="case-section__body">
            <p>The presentation reports near-ceiling hit rates (≥ .95) in three of four conditions and FP rates ≤ .08 in all four. Abstract-familiar items had the lowest hit rate (.86667) and the highest condition FP rate (.07692).</p>
            <p>In the aggregate benchmark comparison shown in the presentation, GPT-4o had higher action- and goal-hit rates and lower action- and goal-FP rates than the cited HC and schizophrenia-group values.</p>
          </div>
        </div>
      </section>

      <section class="case-section research-implications" id="research-one-implications" aria-labelledby="research-one-implications-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-one-implications-label">07 · TAKEAWAYS AND NEXT STEPS</p>
        </div>
        <div class="case-section__body">
          <ul class="research-takeaways">
            <li>GPT-4o was strong at identifying actions but weaker at inferring underlying goals in terms of mirroring human cognitive patterns.</li>
            <li>Unfamiliar scenarios did not reduce performance, which the presentation describes as a relative strength in context generalization.</li>
            <li>The SFRT’s fixed “correct” target lists may advantage LLMs, making them appear more socially competent than they might in open-ended settings.</li>
            <li>The task excludes emotional reasoning, which the presentation identifies as an essential component of real-world social understanding.</li>
          </ul>
          <div class="research-next-steps">
            <h3>Next steps proposed in the presentation</h3>
            <ul>
              <li>Incorporate emotion-recognition tasks, including datasets with contextual emotion cues in text and images and multimodal architectures.</li>
              <li>Explore open-ended scenarios for subjective, context-dependent responses.</li>
              <li>Fine-tune GPT-4o on emotional-state labeling datasets to improve affective reasoning.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer class="page-next case-return">
        <span>Return to the research folder</span>
        <a href="${backHref}"><span aria-hidden="true">←</span> Back to Research</a>
      </footer>
        </div>
      </div>
    </article>`;
}

function renderResearchTwo(content) {
  document.title = content.title;
  const basePath = document.body.dataset.basePath || "";
  const backHref = `${basePath}index.html#research`;
  const imageDimensions = {
    "img-002.png": [1280, 746],
    "img-004.png": [532, 420],
    "img-005.png": [844, 402],
    "img-007.png": [1124, 789],
    "img-010-pupil-dilation.png": [435, 260],
    "img-009.png": [1280, 902],
    "img-006.png": [1280, 1226],
    "img-010.png": [1280, 813],
  };
  const figure = (number, alt, caption, className = "", fileName = `img-${String(number).padStart(3, "0")}.png`) => {
    const [width, height] = imageDimensions[fileName];
    return `
      <figure class="case-figure research-two-figure ${className}">
        <img src="${basePath}assets/project-images/research_2/${fileName}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async">
        <figcaption>${caption}</figcaption>
      </figure>`;
  };

  return `
    <article class="inner-page detail-page case-study research-case research-two" aria-labelledby="research-two-title">
      <div class="page-topline">
        <span>Research · File 02</span>
        <a href="${backHref}">← Back to Research</a>
      </div>

      <header class="case-hero">
        <div class="case-hero__copy">
          <p class="eyebrow">Working memory · Mental timeline · Eye-tracking / pupillometry</p>
          <h1 id="research-two-title">${content.title}</h1>
          <p class="lead">A study of whether spatial mental-timeline direction influences memory for the order of visual events and participants’ pupil responses.</p>
        </div>
        <dl class="case-meta" aria-label="Research details">
          <div><dt>Role</dt><dd>Research Assistant</dd></div>
          <div><dt>Period</dt><dd>March 2024 – June 2025</dd></div>
          <div><dt>Tools</dt><dd>R, PsychoPy Builder, EyeLink 1000, Qualtrics</dd></div>
          <div><dt>Analyzed sample</dt><dd>33 adults (N = 33)</dd></div>
        </dl>
      </header>

      <div class="research-two-layout">
        <nav class="case-progress research-two-progress" aria-label="Research case study sections">
          <ol>
            <li><a href="#research-two-overview" aria-label="01 Overview and questions"><span class="research-one-progress__number">01</span></a></li>
            <li><a href="#research-two-literature" aria-label="02 Literature review"><span class="research-one-progress__number">02</span></a></li>
            <li><a href="#research-two-task" aria-label="03 Measuring task"><span class="research-one-progress__number">03</span></a></li>
            <li><a href="#research-two-procedure" aria-label="04 Participants and procedure"><span class="research-one-progress__number">04</span></a></li>
            <li><a href="#research-two-results" aria-label="05 Findings"><span class="research-one-progress__number">05</span></a></li>
            <li><a href="#research-two-strategy" aria-label="06 Strategy use"><span class="research-one-progress__number">06</span></a></li>
            <li><a href="#research-two-contributions" aria-label="07 My contributions"><span class="research-one-progress__number">07</span></a></li>
            <li><a href="#research-two-poster" aria-label="08 Conference poster"><span class="research-one-progress__number">08</span></a></li>
          </ol>
        </nav>

        <div class="research-two-story">
      <section class="case-section" id="research-two-overview" aria-labelledby="research-two-overview-label research-two-overview-title">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-two-overview-label">01 · OVERVIEW AND QUESTIONS</p>
          <h2 id="research-two-overview-title">Does our mind remember 'where' better than 'when'?</h2>
        </div>
        <div class="case-section__body">
          <p>The study examines how people may represent time through spatial layouts, such as a left-to-right mental timeline, and how this relates to memory for the order of visual events. The poster notes that spatial metaphors for time vary across cultures and describes a left-to-right timeline as typical in Western cultures.</p>
          <div class="research-question-main research-two-questions">
            <p class="eyebrow">Research questions</p>
            <ol class="research-question-list">
              <li>Do people have to work harder to encode things that are not shown in the order of the mental timeline?</li>
              <li>Does the mental timeline influence the types of mistakes people make during retrieval?</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="case-section research-two-literature-section" id="research-two-literature" aria-labelledby="research-two-literature-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-two-literature-label">02 · LITERATURE REVIEW</p>
        </div>
        <div class="research-two-literature">
          ${figure(2, "Literature-review spreadsheet showing article summaries, participants, tasks, keywords, and visual-stimulus use", "Literature review · A spreadsheet organizing papers by summary, participant information, tasks, keywords, and stimulus use.", "research-two-literature__figure")}
          <p class="research-two-literature__copy">I reviewed 40+ papers and organized their summaries, measurement tasks, themes, and related information.</p>
        </div>
      </section>

      <section class="case-section research-two-measuring-task" id="research-two-task" aria-labelledby="research-two-task-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-two-task-label">03 · MEASURING TASK</p>
        </div>
        <div class="research-two-task-layout">
          <div class="case-section__body research-two-task-copy">
            <p>A triplet is a set of three images. Each set is presented in one of three sequential orders: left-to-right (LR), matching the direction of the mental timeline; right-to-left (RL), opposite to the mental timeline; or nonlinear (NL).</p>
            <p>Participants were asked to memorize both each object’s location and the order in which the objects appeared on the screen.</p>
          </div>
          ${figure(4, "Three trial-direction conditions illustrated with image triplets: left-to-right, right-to-left, and nonlinear", "For example, in an LR trial, the basketball would be in the “Right” location because it appears on the right side of the gray screen. Its sequential position would be “Third” if it was the third object to appear on the screen.", "research-two-task-figure")}
        </div>
      </section>

      <section class="case-section research-two-procedure" id="research-two-procedure" aria-labelledby="research-two-procedure-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-two-procedure-label">04 · PARTICIPANTS AND PROCEDURE</p>
        </div>
        <div class="research-two-procedure-layout">
          <div class="case-section__body">
            <p>During encoding, participants viewed triplets of images presented left-to-right, right-to-left, or nonlinearly. At retrieval, images appeared individually and participants identified whether each had appeared first, second, or third in its triplet.</p>
            <p>Two participants were excluded from the final analysis, leaving N = 33: one did not follow the glasses procedure, and one could not complete the study because of an EyeLink 1000 equipment breakdown.</p>
            <p>The study diagram shows an encoding phase of 25 trials and a retrieval phase of 20 trials. We used R to analyze behavioral data from PsychoPy and pupil data from the EyeLink 1000 eye tracker.</p>
          </div>
          ${figure(5, "Experimental procedure diagram showing 25 encoding trials, 20 retrieval trials, display timings, and the first/second/third position question for N equals 33", "Experimental design · Encoding and retrieval phases, trial counts, and example display timings.", "research-two-procedure__figure")}
        </div>
      </section>

      <section class="case-section research-two-findings" id="research-two-results" aria-labelledby="research-two-results-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-two-results-label">05 · FINDINGS</p>
        </div>
        <div class="research-two-results">
          <article class="research-two-result">
            <div class="research-two-result__copy">
              <p class="eyebrow">Retrieval accuracy</p>
              <p>The poster reports improved retrieval accuracy when triplets were presented left-to-right.</p>
            </div>
            ${figure(7, "Accuracy distributions by left-to-right, nonlinear, and right-to-left trial direction for the analyzed participants", "Behavioral result · Retrieval accuracy by trial direction.")}
          </article>
          <article class="research-two-result">
            <div class="research-two-result__copy">
              <p class="eyebrow">PUPILLOMETRY</p>
              <p>Right-to-left and nonlinear layouts increased cognitive effort (greater pupil dilation).</p>
            </div>
            ${figure(8, "Time course of relative pupil dilation during triplet trials for left-to-right, nonlinear, and right-to-left directions", "Pupillometry · Full chart of relative pupil dilation over the trial by direction.", "", "img-010-pupil-dilation.png")}
          </article>
          <article class="research-two-result">
            <div class="research-two-result__copy">
              <p class="eyebrow">Sequence errors</p>
              <p>Participants made systematic, timeline-consistent errors, suggesting automatic spatial structuring of temporal information.</p>
            </div>
            ${figure(9, "Original chart of retrieval mistakes by encoding position and order, with mistake categories shown by color", "Retrieval errors · Mistakes by encoding position and order, as categorized in the source figure.")}
          </article>
        </div>
      </section>

      <section class="case-section research-two-strategy-section" id="research-two-strategy" aria-labelledby="research-two-strategy-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-two-strategy-label">06 · STRATEGY USE</p>
        </div>
        <div class="case-section__body">
          <p>After the pilot run, we planned to add an exit-survey question asking what strategies participants used during the memory task, as we were interested in how individual differences might contribute to performance.</p>
        </div>
        ${figure(6, "Qualtrics screenshot showing the strategy-use question and Internal Representations Questionnaire visual imagery items", "Survey material · Strategy-use question and visual imagery questionnaire items shown in the source.", "research-two-survey-figure")}
        <div class="research-two-strategy-details">
          <div class="research-two-strategy-summary">
            <h3>Strategy Use</h3>
            <p>Most participants (26 out of 33) reported using some kind of strategy during the memory task. Many started using a strategy right away or early in the experiment. About half relied only on verbal strategies (e.g., repeating the order of objects in their head). Others used a mix of verbal and spatial strategies (e.g., saying the items while mentally tracing their positions with their eyes). Only a few relied purely on spatial strategies (e.g., always imagining the sequence from left to right regardless of where items actually appeared).</p>
          </div>
          <div class="research-two-strategy-accuracy">
            <h3>Strategy Use vs. Accuracy?</h3>
            <ul>
              <li><strong>Verbal strategies:</strong> Linked to lower accuracy in recalling items presented nonlinearly.</li>
              <li><strong>Visual imagery strategies:</strong> Participants with stronger visual imagery tended to perform slightly worse overall.</li>
              <li><strong>Verbal + Visual:</strong> No effect was shown.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="case-section" id="research-two-contributions" aria-labelledby="research-two-contributions-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-two-contributions-label">07 · My contributions</p>
        </div>
        <div class="case-section__body">
          <p>I assisted with experiment design and piloting; created and modified task protocols in PsychoPy and Qualtrics; helped run participants using the EyeLink 1000; conducted a literature review; organized behavioral and eye-tracking data files; and analyzed data. I presented preliminary findings at the Undergraduate Research Symposium.</p>
        </div>
      </section>

      <section class="case-section research-two-poster" id="research-two-poster" aria-labelledby="research-two-poster-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-two-poster-label">08 · CONFERENCE POSTER</p>
        </div>
        ${figure(10, "Full conference poster titled How We Think About Time Influences Memory, including its original introduction, methods, results, discussion, figures, and references", "<strong>He, J.,</strong> Guo, Z., &amp; Starr, A. (2026, April). <em>How We Think About Time Influences Memory</em>. Poster presented at the Western Psychological Association conference, Tacoma, WA.", "research-two-poster__figure")}
      </section>

      <footer class="page-next case-return">
        <span>Return to the research folder</span>
        <a href="${backHref}"><span aria-hidden="true">←</span> Back to Research</a>
      </footer>
        </div>
      </div>
    </article>`;
}

function renderResearchThree(content) {
  document.title = content.title;
  const basePath = document.body.dataset.basePath || "";
  const backHref = `${basePath}index.html#research`;
  const imageDimensions = {
    0: [924, 636],
    1: [1280, 737],
    2: [1118, 772],
    3: [526, 328],
    7: [1280, 958],
    8: [1280, 957],
    9: [1280, 1024],
    10: [1280, 1482],
    11: [496, 966],
    12: [640, 732],
    13: [802, 806],
    14: [1266, 472],
    15: [1266, 468],
    16: [615, 540],
    17: [1077, 663],
    18: [1077, 673],
  };
  const figure = (number, alt, caption, className = "") => {
    const [width, height] = imageDimensions[number];
    return `
      <figure class="case-figure research-three-figure ${className}">
        <img src="${basePath}assets/project-images/research_3/img-${String(number).padStart(3, "0")}.png" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async">
        <figcaption>${caption}</figcaption>
      </figure>`;
  };

  return `
    <article class="inner-page detail-page case-study research-case research-three" aria-labelledby="research-three-title">
      <div class="page-topline">
        <span>Research · File 03</span>
        <a href="${backHref}">← Back to Research</a>
      </div>

      <header class="case-hero">
        <div class="case-hero__copy">
          <p class="eyebrow">Visuospatial working memory · Retrocue paradigm · EEG</p>
          <h1 id="research-three-title">${content.title}</h1>
          <p class="lead">An investigation of how object-based and feature-based retrocues influence visuospatial working-memory performance, using behavioral and EEG measures.</p>
        </div>
        <dl class="case-meta" aria-label="Research details">
          <div><dt>Role</dt><dd>Researcher; data collection and analysis</dd></div>
          <div><dt>Period</dt><dd>March 2025 – December 2025</dd></div>
          <div><dt>Tools</dt><dd>PsychoPy Builder, Python, EEG SpikerBox, Spike Recorder, R</dd></div>
          <div><dt>Participants</dt><dd>8 human participants</dd></div>
        </dl>
      </header>

      <div class="research-three-layout">
        <nav class="case-progress research-three-progress" aria-label="Research case study sections">
          <ol>
            <li><a href="#research-three-overview" aria-label="01 Overview and questions"><span class="research-one-progress__number">01</span></a></li>
            <li><a href="#research-three-literature" aria-label="02 Literature review"><span class="research-one-progress__number">02</span></a></li>
            <li><a href="#research-three-task" aria-label="03 Experimental task and conditions"><span class="research-one-progress__number">03</span></a></li>
            <li><a href="#research-three-recording" aria-label="04 EEG data collection"><span class="research-one-progress__number">04</span></a></li>
            <li><a href="#research-three-processing" aria-label="05 EEG preprocessing"><span class="research-one-progress__number">05</span></a></li>
            <li><a href="#research-three-eeg-results" aria-label="06 EEG analysis and findings"><span class="research-one-progress__number">06</span></a></li>
            <li><a href="#research-three-behavior" aria-label="07 Behavioral findings"><span class="research-one-progress__number">07</span></a></li>
            <li><a href="#research-three-contributions" aria-label="08 Contributions and limitations"><span class="research-one-progress__number">08</span></a></li>
          </ol>
        </nav>

        <div class="research-three-story">
      <section class="case-section" id="research-three-overview" aria-labelledby="research-three-overview-label research-three-overview-title">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-three-overview-label">01 · Overview and questions</p>
          <h2 id="research-three-overview-title">Do we remember a whole object or one of its features?</h2>
        </div>
        <div class="case-section__body">
          <p>This project investigated how retroactive attentional cues influence human visuospatial working memory (VWM). Using a retrocue paradigm, I examined how different cue types guide attention toward previously encoded visual information and influence memory performance. I worked with both behavioral and EEG data to explore cognitive processes underlying visual memory, combining experimental task design, physiological data processing, and statistical analysis.</p>
          <div class="research-question-main research-three-questions">
            <p class="eyebrow">Research questions</p>
            <ol class="research-question-list">
              <li>Can people accurately recall the spatial location of individual features (color or shape), or are they better at remembering the object itself?</li>
              <li>How do object-based and feature-based retrocues influence visuospatial working-memory performance across different memory loads?</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="case-section research-three-literature" id="research-three-literature" aria-labelledby="research-three-literature-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-three-literature-label">02 · Literature review</p>
        </div>
        ${figure(1, "Literature-review spreadsheet comparing prior studies, samples, methods, results, analyses, and their relation to this project", "Literature review · Studies of feature- and object-based selection in visual working memory.")}
      </section>

      <section class="case-section" id="research-three-task" aria-labelledby="research-three-task-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-three-task-label">03 · Experimental task and conditions</p>
        </div>
        <div class="research-three-task-layout">
          <div class="case-section__body research-three-task-copy">
            ${figure(0, "Example colored shapes used as visual-memory stimuli, including circles, polygons, and a square", "Visual stimuli · Colored shapes used in the task.")}
          </div>
          ${figure(2, "Retrocue task sequence showing the stimulus array, delays, feature and location cues, and the response question", "Task design · Example displays and timings shown in the source diagram.")}
        </div>
        <div class="research-three-editorial research-three-builder-layout">
          <div class="case-section__body">
            <p>The PsychoPy Builder task used colored shapes at different locations and a retrocue memory paradigm. The behavioral figures compare set sizes of 2, 4, and 6 across object, color-feature, and shape-feature cue conditions.</p>
            <p><strong>Behavioral dependent variables:</strong> <strong>Reaction time (RT)</strong> was the time participants took to select the stimulus; <strong>accuracy</strong> was whether they correctly selected the target stimulus. Both measures were used to evaluate working-memory performance.</p>
          </div>
          ${figure(3, "PsychoPy Builder screenshot showing the task routines and experiment flow", "Task implementation · PsychoPy Builder experiment flow.")}
        </div>
      </section>

      <section class="case-section" id="research-three-recording" aria-labelledby="research-three-recording-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-three-recording-label">04 · EEG data collection</p>
        </div>
        <div class="case-section__body">
          <p>The report describes collecting observational and EEG data from 8 participants during task performance. An EEG SpikerBox connected to Spike Recorder on a laptop and to electrode cables was used to pick up brain signals through frontal areas.</p>
        </div>
        <div class="research-three-setup-grid">
          ${figure(7, "EEG SpikerBox connected to a laptop displaying recorded EEG activity", "EEG setup · SpikerBox and laptop running Spike Recorder.")}
          ${figure(8, "Participant wearing frontal EEG electrodes during data collection", "EEG setup · Electrode placement during a recording session.")}
        </div>
      </section>

      <section class="case-section" id="research-three-processing" aria-labelledby="research-three-processing-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-three-processing-label">05 · EEG preprocessing</p>
        </div>
        <div class="research-three-editorial research-three-waveform-layout">
          <div class="case-section__body">
            <p>The original waveforms from the 8 participants show amplitude changes over time. The report notes that participant 3 had relatively high amplitude during the task and interprets this as possibly indicating increased neural synchronization.</p>
            <p>The report also notes that the raw signals contain noise and artifacts that need to be removed before analysis.</p>
          </div>
          ${figure(11, "Raw EEG waveforms from eight participants, with participant 3 outlined in red", "Raw EEG · Waveforms recorded during the task; participant 3 is highlighted in the source.")}
        </div>
        <div class="research-three-editorial research-three-cleaning-layout">
          <div class="case-section__body">
            <p>The red rectangles mark broadband spikes before and after denoising by linear interpolation. The report suggests that this noise may come from electrical interference, such as cell phones or power lines. It then breaks denoised spectrograms into frequency bands for analysis.</p>
          </div>
          ${figure(13, "Three spectrogram stages showing broadband noise before removal, after broadband-noise removal, and after frequency masking and interpolation", "EEG preprocessing · Source comparison of original, denoised, and interpolated spectrograms.")}
        </div>
        <div class="case-section__body">
          <p>The source also presents cleaned spectrograms for participant files p1, p7, p6, p4, p2, p3, p5, and p8.</p>
        </div>
        ${figure(10, "Cleaned spectrograms for participant files p1, p7, p6, p4, p2, p3, p5, and p8", "Cleaned EEG · Participant spectrograms shown in the source report.", "research-three-cleaned-spectrograms")}
      </section>

      <section class="case-section" id="research-three-eeg-results" aria-labelledby="research-three-eeg-results-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-three-eeg-results-label">06 · EEG analysis and findings</p>
        </div>
        <div class="case-section__body">
          <p>The report focuses on high-gamma activity because it describes this band as relevant to working memory and decision-making. It presents high-gamma spectrograms and band-wise comparisons as evidence of different activity during resting and testing periods.</p>
        </div>
        <div class="research-three-editorial research-three-high-gamma-layout">
          <div class="case-section__body">
            <p>The accompanying text suggests that elevated power during a resting period may reflect participant 3's muscle tension while holding back laughter, based on that participant's notes. It also describes a shift from resting to testing as task-related high-gamma activation.</p>
          </div>
          ${figure(12, "Smoothed 70–100 Hz spectrograms labeled Participant 1 and Participant 3, with a red ellipse on the upper plot", "High gamma · Smoothed spectrogram examples and annotation from the source.")}
        </div>
        <div class="research-three-figure-report">
          ${figure(9, "Normalized time series for delta, theta, alpha, beta, low-gamma, and high-gamma bands, with task start and end marked", "EEG bands · Power trajectories and task-phase markers shown in the source.")}
          <div class="case-section__body">
            <p>The six-panel time series displays normalized power for delta, theta, alpha, beta, low gamma, and high gamma around the marked before, test, and after periods.</p>
          </div>
        </div>
        <div class="research-three-figure-report">
          ${figure(14, "PCA and t-SNE dimensionality-reduction plots colored by before, test, and after segments", "Dimensionality reduction · PCA and t-SNE views of the phase segments.")}
          <div class="case-section__body">
            <p>The report describes the PCA plot as separating the test region from the before-and-after regions, indicating a different spectral pattern across phases. It does not provide a separate interpretation of the t-SNE plot.</p>
          </div>
        </div>
        <div class="research-three-figure-report">
          ${figure(15, "Average power comparisons across before, test, and after phases for alpha, beta, low-gamma, and high-gamma bands", "Band power · Average comparisons with the source's Bonferroni-correction annotations.")}
          <div class="case-section__body">
            <p>The report says average band-power comparisons showed beta, low-gamma, and high-gamma power increasing during the task, which it interprets as working-memory engagement.</p>
          </div>
        </div>
        <div class="research-three-editorial research-three-effect-layout">
          <div class="case-section__body">
            <p>The report describes a large positive effect for the end-of-task versus post-task comparison, indicating higher power at task end. It describes a strong negative effect for the pre-task versus mid-task comparison, reflecting an increase from baseline to the active task.</p>
          </div>
          ${figure(16, "Cohen's d heatmap for pairwise comparisons across alpha, beta, low-gamma, and high-gamma bands", "Effect sizes · Cohen's d values for the pairwise comparisons shown in the report.")}
        </div>
      </section>

      <section class="case-section" id="research-three-behavior" aria-labelledby="research-three-behavior-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-three-behavior-label">07 · Behavioral findings</p>
        </div>
        <div class="case-section__body">
          <p>The report says cue type influenced reaction times but had only marginal effects on accuracy. It interprets this pattern as suggesting object-based and feature-based cues mainly influenced retrieval speed rather than the likelihood of a correct response.</p>
        </div>
        <div class="research-three-behavior-grid">
          ${figure(17, "Mean reaction time by set size 2, 4, and 6 across object, feature-color, and feature-shape cue conditions", "Behavioral result · Reaction time by set size and cue condition.")}
          ${figure(18, "Mean accuracy by set size 2, 4, and 6 across object, feature-color, and feature-shape cue conditions", "Behavioral result · Accuracy by set size and cue condition.")}
        </div>
      </section>

      <section class="case-section" id="research-three-contributions" aria-labelledby="research-three-contributions-label">
        <div class="case-section__heading">
          <p class="eyebrow" id="research-three-contributions-label">08 · Contributions and limitations</p>
        </div>
        <div class="research-three-closing-grid">
          <div class="research-three-closing-block">
            <p class="eyebrow">My contributions</p>
            <ul>
              <li>Designed and implemented the retrocue memory task in PsychoPy Builder.</li>
              <li>Collected observational and EEG data from 8 participants.</li>
              <li>Processed and analyzed EEG spectral power, accuracy, and reaction time, and compared patterns across conditions using R.</li>
              <li>Synthesized findings into a research report and presented them during a research discussion session.</li>
            </ul>
          </div>
          <div class="research-three-closing-block">
            <p class="eyebrow">Limitations noted in the report</p>
            <ul>
              <li>The small sample limits generalization.</li>
              <li>EEG spectral power offers insight into neural activity but limited spatial specificity, making precise neural sources difficult to identify.</li>
              <li>Simplified visual stimuli support experimental control but may not generalize to more complex, real-world working-memory tasks.</li>
              <li>Accuracy and reaction time capture observable performance but may not fully reflect underlying cognitive processes; the report notes the value of combining behavioral and EEG measures.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer class="page-next case-return">
        <span>Return to the research folder</span>
        <a href="${backHref}"><span aria-hidden="true">←</span> Back to Research</a>
      </footer>
        </div>
      </div>
    </article>`;
}

function setupSectionNavigation() {
  const sections = [...document.querySelectorAll("body > #app > section[id]")];
  if (!sections.length) return;

  function updateActiveSection() {
    const marker = window.innerHeight * 0.28;
    let active = sections[0];

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= marker) active = section;
    }

    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      active = sections[sections.length - 1];
    }

    for (const link of document.querySelectorAll(".nav-link")) {
      const current = link.getAttribute("href") === `#${active.id}`;
      link.classList.toggle("is-active", current);
      if (current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  }

  window.addEventListener("scroll", updateActiveSection, { passive: true });
  window.addEventListener("resize", updateActiveSection);
  updateActiveSection();
}

function setupScrollProgress() {
  const progress = document.querySelector(".scroll-progress");
  if (!progress) return;

  let frame = 0;
  let lastPercent = -1;

  function update() {
    frame = 0;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollableHeight > 0
      ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
      : 0;
    const percent = Math.round(value * 100);
    document.documentElement.style.setProperty("--portfolio-scroll-progress", value);
    if (percent !== lastPercent) {
      progress.setAttribute("aria-valuenow", String(percent));
      lastPercent = percent;
    }
  }

  function scheduleUpdate() {
    if (frame) return;
    frame = requestAnimationFrame(update);
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("load", scheduleUpdate, { once: true });
  const resizeObserver = new ResizeObserver(scheduleUpdate);
  resizeObserver.observe(document.documentElement);
  resizeObserver.observe(document.body);
  update();
}

function createFileAlphaMask(image) {
  if (!image.complete || !image.naturalWidth || !image.naturalHeight) return null;

  const width = 512;
  const height = Math.round(width * image.naturalHeight / image.naturalWidth);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Unable to create the evidence-file hit-test canvas.");

  context.drawImage(image, 0, 0, width, height);
  const pixels = context.getImageData(0, 0, width, height).data;
  const alpha = new Uint8Array(width * height);
  for (let index = 0; index < alpha.length; index += 1) {
    alpha[index] = pixels[index * 4 + 3];
  }
  return { width, height, alpha };
}

function findFileLinkAtPoint(view, clientX, clientY, masks, allowExaminedSource = false) {
  const layers = [...view.querySelectorAll(".composition-file")];
  const examined = layers.find((layer) => layer.classList.contains("is-examined"));
  const orderedLayers = examined
    ? [examined, ...layers.filter((layer) => layer !== examined).reverse()]
    : layers.reverse();
  const viewBounds = view.getBoundingClientRect();

  for (const layer of orderedLayers) {
    const image = layer.querySelector("img");
    let mask = masks.get(image);
    if (!mask && image.complete && image.naturalWidth && image.naturalHeight) {
      mask = createFileAlphaMask(image);
      if (mask) masks.set(image, mask);
    }
    if (!mask) continue;

    const width = image.offsetWidth;
    const height = image.offsetHeight;
    if (!width || !height) continue;

    const transformValue = getComputedStyle(image).transform;
    const transform = transformValue === "none" ? new DOMMatrix() : new DOMMatrix(transformValue);
    const originX = width / 2;
    const originY = height / 2;
    const point = new DOMPoint(
      clientX - viewBounds.left - originX,
      clientY - viewBounds.top - originY,
    ).matrixTransform(transform.inverse());
    const x = Math.floor((point.x + originX) / width * mask.width);
    const y = Math.floor((point.y + originY) / height * mask.height);
    if (x >= 0 && x < mask.width && y >= 0 && y < mask.height && mask.alpha[y * mask.width + x] >= 96) {
      return layer.querySelector(".file-hitbox");
    }

    if (allowExaminedSource && layer === examined) {
      const sourceX = Math.floor((clientX - viewBounds.left) / width * mask.width);
      const sourceY = Math.floor((clientY - viewBounds.top) / height * mask.height);
      if (sourceX >= 0 && sourceX < mask.width && sourceY >= 0 && sourceY < mask.height &&
          mask.alpha[sourceY * mask.width + sourceX] >= 96) {
        return layer.querySelector(".file-hitbox");
      }
    }
  }
  return null;
}

function findFileLinkAtSourcePoint(view, layer, clientX, clientY, masks) {
  if (!layer) return null;
  const image = layer.querySelector("img");
  let mask = masks.get(image);
  if (!mask && image.complete && image.naturalWidth && image.naturalHeight) {
    mask = createFileAlphaMask(image);
    if (mask) masks.set(image, mask);
  }
  if (!mask) return null;

  const bounds = view.getBoundingClientRect();
  const width = image.offsetWidth;
  const height = image.offsetHeight;
  if (!width || !height) return null;

  const x = Math.floor((clientX - bounds.left) / width * mask.width);
  const y = Math.floor((clientY - bounds.top) / height * mask.height);
  if (x < 0 || x >= mask.width || y < 0 || y >= mask.height) return null;
  return mask.alpha[y * mask.width + x] >= 96 ? layer.querySelector(".file-hitbox") : null;
}

function setupBoardDownloadHitTesting() {
  const notes = [...document.querySelectorAll(".board-download-note")];
  if (!notes.length) return;

  const masks = new WeakMap();
  for (const note of notes) {
    const image = note.querySelector("img");
    if (!image) continue;

    const prepareMask = () => {
      const mask = createFileAlphaMask(image);
      if (mask) masks.set(image, mask);
    };
    if (image.complete) prepareMask();
    else image.addEventListener("load", prepareMask, { once: true });
  }

  document.addEventListener("click", (event) => {
    if (event.detail === 0 || !(event.target instanceof Element)) return;
    const targetNote = event.target.closest(".board-download-note");
    if (!targetNote) return;

    const candidates = notes.filter((note) => {
      const bounds = note.getBoundingClientRect();
      return event.clientX >= bounds.left && event.clientX <= bounds.right &&
        event.clientY >= bounds.top && event.clientY <= bounds.bottom;
    }).sort((a, b) => {
      const zDifference = Number(getComputedStyle(b).zIndex) - Number(getComputedStyle(a).zIndex);
      return zDifference || notes.indexOf(b) - notes.indexOf(a);
    });

    const hitNote = candidates.find((note) => {
      const image = note.querySelector("img");
      let mask = image && masks.get(image);
      if (!mask && image?.complete && image.naturalWidth && image.naturalHeight) {
        mask = createFileAlphaMask(image);
        if (mask) masks.set(image, mask);
      }
      if (!mask || !image) return false;

      const bounds = note.getBoundingClientRect();
      const width = note.offsetWidth;
      const height = note.offsetHeight;
      if (!width || !height) return false;
      const transformValue = getComputedStyle(note).transform;
      const transform = transformValue === "none" ? new DOMMatrix() : new DOMMatrix(transformValue);
      const point = new DOMPoint(
        event.clientX - bounds.left - bounds.width / 2,
        event.clientY - bounds.top - bounds.height / 2,
      ).matrixTransform(transform.inverse());
      const x = Math.floor((point.x + width / 2) / width * mask.width);
      const y = Math.floor((point.y + height / 2) / height * mask.height);
      return x >= 0 && x < mask.width && y >= 0 && y < mask.height && mask.alpha[y * mask.width + x] >= 96;
    });

    if (hitNote === targetNote) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    hitNote?.click();
  }, true);
}

function setupFolderInteractions(fileMasks, hoveredLayerByView) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const transitionDuration = 1400;
  const transitionTimers = new Map();
  let homeShortcutTransition = null;

  function setFolderState(page, state) {
    const section = document.getElementById(page);
    if (!section) return;
    for (const view of section.querySelectorAll(".folder-view--open")) {
      hoveredLayerByView.delete(view);
    }
    if (transitionTimers.has(page)) {
      clearTimeout(transitionTimers.get(page));
      transitionTimers.delete(page);
    }

    section.dataset.state = state;
    const activeView = state === "closed" || state === "open" ? state : null;
    for (const view of section.querySelectorAll(".folder-view")) {
      const active = view.dataset.view === activeView;
      view.setAttribute("aria-hidden", String(!active));
      if (active) view.removeAttribute("inert");
      else view.setAttribute("inert", "");
    }
    if (state === "opening" || state === "closing") section.setAttribute("aria-busy", "true");
    else section.removeAttribute("aria-busy");
    document.dispatchEvent(new Event("portfolio:refresh-magnifier"));
  }

  function finishTransition(page, from, to, onFinish) {
    const timer = window.setTimeout(() => {
      if (document.getElementById(page)?.dataset.state === from) {
        setFolderState(page, to);
        onFinish?.();
      }
    }, transitionDuration);
    transitionTimers.set(page, timer);
  }

  function openFolder(page) {
    const section = document.getElementById(page);
    if (!section || section.dataset.state !== "closed") return;
    if (reducedMotion.matches) {
      setFolderState(page, "open");
      return;
    }
    setFolderState(page, "opening");
    finishTransition(page, "opening", "open");
  }

  function scrollHomeAfterClose() {
    const home = document.getElementById("home");
    if (!home) return;
    if (location.hash !== "#home") history.replaceState(null, "", "#home");
    home.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
  }

  function closeFolder(page, returnHome = false) {
    const section = document.getElementById(page);
    if (!section || section.dataset.state !== "open") return;
    if (reducedMotion.matches) {
      setFolderState(page, "closed");
      if (returnHome) scrollHomeAfterClose();
      return;
    }
    setFolderState(page, "closing");
    finishTransition(page, "closing", "closed", returnHome ? scrollHomeAfterClose : undefined);
  }

  function cancelHomeShortcutTransition() {
    if (!homeShortcutTransition) return;
    const { stage, target } = homeShortcutTransition;
    homeShortcutTransition = null;
    stage.classList.remove("is-zooming");
    target.classList.remove("is-transition-target");
    stage.style.removeProperty("--camera-origin-x");
    stage.style.removeProperty("--camera-origin-y");
  }

  function waitUntilSectionArrives(section, transition) {
    return new Promise((resolve) => {
      const startedAt = performance.now();
      let previousTop = section.getBoundingClientRect().top;
      let stableFrames = 0;

      function checkPosition() {
        if (homeShortcutTransition !== transition) {
          resolve(false);
          return;
        }

        const top = section.getBoundingClientRect().top;
        stableFrames = Math.abs(top) <= 8 && Math.abs(top - previousTop) < 0.75
          ? stableFrames + 1
          : 0;
        previousTop = top;

        if (stableFrames >= 3) {
          resolve(true);
        } else if (performance.now() - startedAt >= 2600) {
          resolve(Math.abs(top) <= 16);
        } else {
          requestAnimationFrame(checkPosition);
        }
      }

      requestAnimationFrame(checkPosition);
    });
  }

  function navigateFromHomeToFolder(page, target) {
    if (homeShortcutTransition) return;
    const section = document.getElementById(page);
    const stage = document.querySelector(".board-stage");
    if (!section || !stage) return;

    if (section.dataset.state !== "closed") setFolderState(page, "closed");
    if (location.hash !== `#${page}`) history.pushState(null, "", `#${page}`);

    if (reducedMotion.matches) {
      section.scrollIntoView({ behavior: "auto", block: "start" });
      openFolder(page);
      return;
    }

    const targetBounds = target.getBoundingClientRect();
    const stageBounds = stage.getBoundingClientRect();
    const transition = { page, stage, target };
    homeShortcutTransition = transition;
    stage.style.setProperty("--camera-origin-x", `${targetBounds.left + targetBounds.width / 2 - stageBounds.left}px`);
    stage.style.setProperty("--camera-origin-y", `${targetBounds.top + targetBounds.height / 2 - stageBounds.top}px`);
    target.classList.add("is-transition-target");

    requestAnimationFrame(() => {
      if (homeShortcutTransition !== transition) return;
      stage.classList.add("is-zooming");
      requestAnimationFrame(async () => {
        if (homeShortcutTransition !== transition) return;
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        const arrived = await waitUntilSectionArrives(section, transition);
        if (homeShortcutTransition !== transition) return;
        cancelHomeShortcutTransition();
        if (arrived) openFolder(page);
      });
    });
  }

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const shortcut = event.target.closest("[data-folder-shortcut]");
    if (shortcut) {
      event.preventDefault();
      navigateFromHomeToFolder(shortcut.getAttribute("data-folder-shortcut"), shortcut);
      return;
    }

    const folderTrigger = event.target.closest("[data-open-folder]");
    if (folderTrigger) {
      openFolder(folderTrigger.getAttribute("data-open-folder"));
      return;
    }

    const navLink = event.target.closest(".nav-link, .brand");
    if (navLink) cancelHomeShortcutTransition();
    const navTarget = navLink?.getAttribute("href")?.slice(1);
    if (navTarget === "home") {
      setFolderState("projects", "closed");
      setFolderState("research", "closed");
      return;
    }
    if (navTarget === "projects" || navTarget === "research") {
      setFolderState(navTarget, "closed");
      return;
    }

    const openView = event.target.closest(".folder-view--open");
    const openPage = openView?.closest(".folder-page");
    if (openPage?.dataset.state !== "open") return;

    const activatedFile = event.target.closest(".file-hitbox");
    if (activatedFile && event.detail === 0) return;

    const sourceLayer = hoveredLayerByView.get(openView) || activatedFile?.closest(".composition-file");
    const fileLink = findFileLinkAtSourcePoint(openView, sourceLayer, event.clientX, event.clientY, fileMasks)
      || findFileLinkAtPoint(openView, event.clientX, event.clientY, fileMasks, true);
    if (fileLink) {
      event.preventDefault();
      event.stopPropagation();
      window.location.assign(fileLink.href);
      return;
    }

    if (activatedFile) event.preventDefault();
    closeFolder(openPage.id, true);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || event.defaultPrevented) return;
    if (event.target instanceof Element && event.target.closest("dialog")) return;
    for (const openPage of document.querySelectorAll('.folder-page[data-state="open"]')) {
      closeFolder(openPage.id);
    }
  });

  window.addEventListener("hashchange", () => {
    const target = location.hash.slice(1);
    if (homeShortcutTransition && target !== homeShortcutTransition.page) cancelHomeShortcutTransition();
    if (target === "home") {
      setFolderState("projects", "closed");
      setFolderState("research", "closed");
    } else if (target === "projects" || target === "research") {
      setFolderState(target, "closed");
    }
  });
}

function setupEvidenceFileInteractions() {
  const fileMasks = new WeakMap();
  const hoveredLayerByView = new WeakMap();
  for (const layer of document.querySelectorAll(".composition-file")) {
    const hitbox = layer.querySelector(".file-hitbox");
    const image = layer.querySelector("img");
    if (!hitbox || !image) continue;

    const prepareMask = () => {
      const mask = createFileAlphaMask(image);
      if (mask) fileMasks.set(image, mask);
    };
    if (image.complete) prepareMask();
    else image.addEventListener("load", prepareMask, { once: true });

    hitbox.addEventListener("focus", () => layer.classList.add("is-examined"));
    hitbox.addEventListener("blur", () => layer.classList.remove("is-examined"));
  }

  for (const view of document.querySelectorAll(".folder-view--open")) {
    let examined = null;
    const updateExamined = (layer) => {
      if (layer === examined) return;
      examined?.classList.remove("is-examined");
      layer?.classList.add("is-examined");
      examined = layer;
    };

    view.addEventListener("pointermove", (event) => {
      if (view.closest(".folder-page")?.dataset.state !== "open") return;
      const fileLink = findFileLinkAtPoint(view, event.clientX, event.clientY, fileMasks, true);
      const layer = fileLink?.closest(".composition-file") || null;
      hoveredLayerByView.set(view, layer);
      updateExamined(layer);
    }, { passive: true });
    view.addEventListener("pointerleave", () => {
      hoveredLayerByView.delete(view);
      updateExamined(null);
    });
  }
  return { fileMasks, hoveredLayerByView };
}

function setupCaseStudyProgress(caseStudy, onProgress) {
  const progressLinks = [...caseStudy.querySelectorAll(".case-progress a")];
  const progressSections = progressLinks
    .map((link) => document.getElementById(link.hash.slice(1)))
    .filter(Boolean);

  function updateProgress() {
    const activationLine = window.innerHeight * 0.35;
    let activeSection = progressSections[0];
    for (const section of progressSections) {
      if (section.getBoundingClientRect().top <= activationLine) activeSection = section;
      else break;
    }
    const activeIndex = Math.max(0, progressSections.indexOf(activeSection));

    progressLinks.forEach((link) => {
      const active = link.hash === `#${activeSection?.id}`;
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    onProgress?.(activeIndex, progressSections.length);
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
  return () => {
    window.removeEventListener("scroll", updateProgress);
    window.removeEventListener("resize", updateProgress);
  };
}

function setupProjectOneInteractions() {
  const caseStudy = document.querySelector("body > #app .project-one-case");
  if (!caseStudy) return;

  const cleanupProgress = setupCaseStudyProgress(caseStudy);
  const cards = [...caseStudy.querySelectorAll(".persona-card")];
  const cardStates = new Map();
  const autoFlipTimers = new Map();
  const manuallyInteracted = new WeakSet();
  let cardObserver = null;
  let unmountObserver = null;
  let cleanedUp = false;

  function setCardFlipped(card, front, back, name, flipped) {
    card.setAttribute("aria-pressed", String(flipped));
    card.setAttribute("aria-label", `${name} persona, activate to view ${flipped ? "summary" : "details"}`);
    card.classList.toggle("is-flipped", flipped);
    front.setAttribute("aria-hidden", String(flipped));
    back.setAttribute("aria-hidden", String(!flipped));
  }

  for (const card of cards) {
    const front = card.querySelector(".persona-card__front");
    const back = card.querySelector(".persona-card__back");
    const name = card.querySelector(".persona-card__name")?.textContent;
    if (!front || !back || !name) continue;

    cardStates.set(card, { front, back, name });
    card.addEventListener("click", () => {
      manuallyInteracted.add(card);
      const timer = autoFlipTimers.get(card);
      if (timer !== undefined) {
        window.clearTimeout(timer);
        autoFlipTimers.delete(card);
      }

      const flipped = card.getAttribute("aria-pressed") !== "true";
      setCardFlipped(card, front, back, name, flipped);
    });
  }

  if ("IntersectionObserver" in window) {
    cardObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const card = entry.target;
        cardObserver.unobserve(card);
        if (manuallyInteracted.has(card)) continue;

        const timer = window.setTimeout(() => {
          autoFlipTimers.delete(card);
          if (manuallyInteracted.has(card)) return;
          const state = cardStates.get(card);
          if (state) setCardFlipped(card, state.front, state.back, state.name, true);
        }, 3000);
        autoFlipTimers.set(card, timer);
      }
    }, { threshold: 0.15 });

    cards.forEach((card) => cardObserver.observe(card));
  }

  function cleanup() {
    if (cleanedUp) return;
    cleanedUp = true;
    cleanupProgress();
    cardObserver?.disconnect();
    unmountObserver?.disconnect();
    autoFlipTimers.forEach((timer) => window.clearTimeout(timer));
    autoFlipTimers.clear();
  }

  if ("MutationObserver" in window && caseStudy.parentElement) {
    unmountObserver = new MutationObserver(() => {
      if (!caseStudy.isConnected) cleanup();
    });
    unmountObserver.observe(caseStudy.parentElement, { childList: true });
  }

  window.addEventListener("pagehide", cleanup, { once: true });
}

function setupProjectTwoInteractions() {
  const caseStudy = document.querySelector("body > #app .project-two-case");
  if (!caseStudy) return;

  const cleanupProgress = setupCaseStudyProgress(caseStudy);
  let unmountObserver = null;
  let cleanedUp = false;

  function cleanup() {
    if (cleanedUp) return;
    cleanedUp = true;
    cleanupProgress();
    unmountObserver?.disconnect();
  }

  if ("MutationObserver" in window && caseStudy.parentElement) {
    unmountObserver = new MutationObserver(() => {
      if (!caseStudy.isConnected) cleanup();
    });
    unmountObserver.observe(caseStudy.parentElement, { childList: true });
  }

  window.addEventListener("pagehide", cleanup, { once: true });
}

function setupResearchOneInteractions() {
  const caseStudy = document.querySelector("body > #app .research-one");
  const progressNav = caseStudy?.querySelector(".research-one-progress");
  if (!caseStudy || !progressNav) return;

  const cleanupProgress = setupCaseStudyProgress(caseStudy, (activeIndex, sectionCount) => {
    const progress = sectionCount > 1 ? activeIndex / (sectionCount - 1) : 0;
    progressNav.style.setProperty("--research-progress", String(progress));
  });
  window.addEventListener("pagehide", cleanupProgress, { once: true });
}

function setupResearchTwoInteractions() {
  const caseStudy = document.querySelector("body > #app .research-two");
  const progressNav = caseStudy?.querySelector(".research-two-progress");
  if (!caseStudy || !progressNav) return;

  const cleanupProgress = setupCaseStudyProgress(caseStudy, (activeIndex, sectionCount) => {
    const progress = sectionCount > 1 ? activeIndex / (sectionCount - 1) : 0;
    progressNav.style.setProperty("--research-progress", String(progress));
  });
  window.addEventListener("pagehide", cleanupProgress, { once: true });
}

function setupResearchThreeInteractions() {
  const caseStudy = document.querySelector("body > #app .research-three");
  const progressNav = caseStudy?.querySelector(".research-three-progress");
  if (!caseStudy || !progressNav) return;

  const cleanupProgress = setupCaseStudyProgress(caseStudy, (activeIndex, sectionCount) => {
    const progress = sectionCount > 1 ? activeIndex / (sectionCount - 1) : 0;
    progressNav.style.setProperty("--research-progress", String(progress));
  });
  window.addEventListener("pagehide", cleanupProgress, { once: true });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");
  const message = form?.querySelector("textarea");
  if (!form || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const body = message.value.trim();
    if (!body) {
      message.setCustomValidity("Please enter a message.");
      message.reportValidity();
      message.setCustomValidity("");
      return;
    }

    const subject = encodeURIComponent("Portfolio message");
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  });
}

function setupMagnifier() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const magnifier = document.querySelector("#magnifier");
  const glass = magnifier?.querySelector(".magnifier-glass");
  const magnifiedPage = magnifier?.querySelector(".magnified-page");
  let magnifiedContent;
  let frame = 0;
  let pointer = null;
  const scale = 1.2;
  const lensRadius = 21;

  if (!finePointer.matches || window.matchMedia("(max-width: 760px)").matches || reduceMotion.matches || !magnifier || !glass || !magnifiedPage) return;

  function prepareClone() {
    magnifiedPage.replaceChildren();
    const header = document.querySelector("#site-header").cloneNode(true);
    const main = document.querySelector("#app").cloneNode(true);
    main.querySelector("#gallery-audio")?.remove();
    magnifiedContent = document.createElement("div");
    magnifiedContent.className = "magnified-content";
    magnifiedContent.inert = true;
    magnifiedContent.append(header, main);
    magnifiedPage.append(magnifiedContent);
  }

  function isEnabled() {
    return finePointer.matches && !window.matchMedia("(max-width: 760px)").matches && !reduceMotion.matches;
  }

  function hide() {
    magnifier.classList.remove("is-visible");
    document.body.classList.remove("has-magnifier-cursor");
    cancelAnimationFrame(frame);
  }

  function checkCapabilities() {
    if (!isEnabled()) hide();
  }

  function position(x, y) {
    pointer = { x, y };
    glass.style.setProperty("--lens-x", `${x - lensRadius}px`);
    glass.style.setProperty("--lens-y", `${y - lensRadius}px`);
    magnifiedPage.style.setProperty("--lens-center-x", `${x}px`);
    magnifiedPage.style.setProperty("--lens-center-y", `${y}px`);
    magnifiedContent.style.setProperty("--magnifier-scroll-y", `${window.scrollY}px`);
    magnifiedContent.style.transform =
      `translate3d(${-x * (scale - 1)}px, ${-(y * (scale - 1) + window.scrollY * scale)}px, 0) scale(${scale})`;
    magnifier.classList.add("is-visible");
    document.body.classList.add("has-magnifier-cursor");
  }

  function move(event) {
    if (!isEnabled()) {
      hide();
      return;
    }
    if (event.target instanceof Element && event.target.closest(".contact-form")) {
      hide();
      return;
    }
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      position(event.clientX, event.clientY);
    });
  }

  prepareClone();
  document.addEventListener("portfolio:refresh-magnifier", prepareClone);
  document.addEventListener("pointermove", move, { passive: true });
  document.addEventListener("focusin", (event) => {
    if (event.target instanceof Element && event.target.closest(".contact-form")) hide();
  });
  document.addEventListener("pointerleave", hide);
  window.addEventListener("scroll", () => {
    if (magnifier.classList.contains("is-visible") && pointer) position(pointer.x, pointer.y);
  }, { passive: true });
  window.addEventListener("resize", checkCapabilities);
  finePointer.addEventListener("change", checkCapabilities);
  reduceMotion.addEventListener("change", checkCapabilities);
}

const page = document.body.dataset.page || "home";
renderNavigation(page);
document.querySelector("#app").innerHTML = page === "secret"
  ? renderSecretPage()
  : detailPages[page]
    ? page === "project-1"
      ? renderProjectOne(detailPages[page])
      : page === "project-2"
        ? renderProjectTwo(detailPages[page])
        : page === "research-1"
          ? renderResearchOne(detailPages[page])
          : page === "research-2"
            ? renderResearchTwo(detailPages[page])
            : page === "research-3"
              ? renderResearchThree(detailPages[page])
              : renderDetailPage(detailPages[page])
    : renderHome();
if (page === "home") {
  setupSectionNavigation();
  setupBoardDownloadHitTesting();
  const { fileMasks, hoveredLayerByView } = setupEvidenceFileInteractions();
  setupFolderInteractions(fileMasks, hoveredLayerByView);
  setupContactForm();
  setupScrollProgress();
}
if (page === "project-1") setupProjectOneInteractions();
if (page === "project-2") setupProjectTwoInteractions();
if (page === "research-1") setupResearchOneInteractions();
if (page === "research-2") setupResearchTwoInteractions();
if (page === "research-3") setupResearchThreeInteractions();
if (page === "secret") {
  setupGalleryAudio();
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) setupGalleryAudio();
  });
}
setupMagnifier();