const layers = [
  "Applications",
  "Data",
  "Runtime",
  "Middleware",
  "Operating System",
  "Virtualization",
  "Servers",
  "Storage",
  "Networking",
];

const sections = window.studyGuide.sections;
const finalExam = window.studyGuide.finalExam;

const scoreState = {
  total: 0,
  correct: 0,
  answered: new Set(),
};

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderNav() {
  const nav = document.querySelector("#mainNav");
  nav.innerHTML = sections
    .map((section) => `<a href="#${section.id}">${section.nav}</a>`)
    .join("") + `<a href="#final-exam">מבחן מסכם</a>`;
}

function renderBlocks(blocks) {
  return blocks.map(renderBlock).join("");
}

function renderBlock(block) {
  if (block.type === "lead") {
    return `<article class="content-block lead-card"><h3 class="block-title">${block.title}</h3><p>${block.text}</p></article>`;
  }

  if (block.type === "cards") {
    return `
      <article class="content-block">
        <h3 class="block-title">${block.title}</h3>
        <div class="cards-grid">
          ${block.cards
            .map(
              (card) => `
                <section class="info-card" data-accent="${card.accent || "blue"}">
                  <h3>${card.title}</h3>
                  <p>${card.text}</p>
                  ${card.items ? `<ul>${card.items.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
                </section>
              `,
            )
            .join("")}
        </div>
      </article>
    `;
  }

  if (block.type === "list") {
    return `
      <article class="content-block">
        <h3 class="block-title">${block.title}</h3>
        <ul class="simple-list">${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
    `;
  }

  if (block.type === "callout") {
    return `
      <article class="content-block callout" style="--callout-color: var(--${block.color || "green"})">
        <strong>${block.title}</strong>
        <p>${block.text}</p>
      </article>
    `;
  }

  if (block.type === "table") {
    return `
      <article class="content-block">
        <h3 class="block-title">${block.title}</h3>
        <table class="term-table">
          <thead><tr>${block.headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
          <tbody>${block.rows
            .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
            .join("")}</tbody>
        </table>
      </article>
    `;
  }

  if (block.type === "diagram-flow") {
    return `
      <article class="content-block diagram">
        <h3 class="block-title">${block.title}</h3>
        <div class="flow" style="--cols: ${block.cols || block.steps.length}">
          ${block.steps
            .map(
              (step) => `
                <div class="flow-step" style="--step-color: ${step.color}">
                  <strong>${step.title}</strong>
                  <span>${step.text}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>
    `;
  }

  if (block.type === "figure") {
    return `
      <figure class="content-block figure-block">
        <h3 class="block-title">${block.title}</h3>
        <div class="figure-frame">
          <img src="${block.image}" alt="${block.alt || block.title}" loading="lazy" />
        </div>
        ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ""}
        ${block.note ? `<p class="figure-note">${block.note}</p>` : ""}
      </figure>
    `;
  }

  if (block.type === "responsibility") {
    return `
      <article class="content-block diagram">
        <h3 class="block-title">${block.title}</h3>
        <div class="responsibility-legend">
          <span class="legend-item"><span class="legend-swatch" style="background: var(--orange)"></span> מנוהל על ידי הלקוח</span>
          <span class="legend-item"><span class="legend-swatch" style="background: var(--blue)"></span> מנוהל על ידי הספק</span>
        </div>
        <div class="responsibility-grid">
          ${block.columns
            .map(
              (col) => `
                <section class="responsibility-col">
                  <h3>${col.title}</h3>
                  ${layers
                    .map((layer, index) => `<div class="layer ${index >= col.vendorFrom ? "vendor" : "user"}">${layer}</div>`)
                    .join("")}
                  <p class="info-card">${col.note}</p>
                </section>
              `,
            )
            .join("")}
        </div>
      </article>
    `;
  }

  if (block.type === "serviceMatrix") {
    return `
      <article class="content-block">
        <h3 class="block-title">${block.title}</h3>
        <div class="service-matrix">
          ${block.columns
            .map(
              (column) => `
                <section class="service-column">
                  <h3>${column.title}</h3>
                  <ul>${column.items.map((item) => `<li>${item}</li>`).join("")}</ul>
                </section>
              `,
            )
            .join("")}
        </div>
      </article>
    `;
  }

  return "";
}

function renderQuiz(questions, id, title, badge = "ביניים") {
  return `
    <section class="quiz-panel" aria-label="${title}">
      <div class="quiz-heading">
        <h3>${title}</h3>
        <span class="quiz-badge">${badge}</span>
      </div>
      <div class="quiz-list">
        ${questions.map((question, index) => renderQuestion(question, `${id}-${index}`)).join("")}
      </div>
    </section>
  `;
}

function renderQuestion(question, id) {
  return `
    <article class="question-card" data-question-id="${id}" data-correct="${question.correct}">
      <h4>${question.q}</h4>
      <div class="answers">
        ${question.a
          .map(
            (answer, index) => `
              <button class="answer" type="button" data-answer="${index}">
                <span class="answer-key">${String.fromCharCode(1488 + index)}</span>
                <span>${answer}</span>
              </button>
            `,
          )
          .join("")}
      </div>
      <div class="feedback"><strong></strong><span></span></div>
      <template data-correct-answer>${question.a[question.correct]}</template>
      <template data-explanation>${question.explain}</template>
    </article>
  `;
}

function renderSections() {
  const root = document.querySelector("#sectionsRoot");
  root.innerHTML = sections
    .map(
      (section) => `
        <section id="${section.id}" class="section-shell">
          <div class="section-heading">
            <span class="section-icon">${section.icon}</span>
            <div>
              <p class="eyebrow">פרק ${sections.indexOf(section) + 1}</p>
              <h2>${section.title}</h2>
            </div>
          </div>
          <p class="section-intro">${section.intro}</p>
          ${renderBlocks(section.blocks)}
          ${renderQuiz(section.quiz, section.id, `שאלות אחרי ${section.title}`)}
        </section>
      `,
    )
    .join("");
}

function renderFinalExam() {
  const root = document.querySelector("#finalExamRoot");
  root.innerHTML = finalExam.map((question, index) => renderQuestion(question, `final-${index}`)).join("");
}

function updateCounters() {
  const quizTotal = sections.reduce((sum, section) => sum + section.quiz.length, 0);
  document.querySelector("#sectionCount").textContent = String(sections.length);
  document.querySelector("#quizCount").textContent = String(quizTotal);
  document.querySelector("#examCount").textContent = String(finalExam.length);
  const scoreCorrect = document.querySelector("#scoreCorrect");
  const scoreTotal = document.querySelector("#scoreTotal");
  if (scoreCorrect) scoreCorrect.textContent = String(scoreState.correct);
  if (scoreTotal) scoreTotal.textContent = String(scoreState.total);
}

function bindQuiz() {
  document.querySelectorAll(".question-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      const answer = event.target.closest(".answer");
      if (!answer) return;

      const id = card.dataset.questionId;
      const selected = Number(answer.dataset.answer);
      const correct = Number(card.dataset.correct);
      const feedback = card.querySelector(".feedback");
      const feedbackTitle = feedback.querySelector("strong");
      const feedbackText = feedback.querySelector("span");
      const correctAnswer = card.querySelector("template[data-correct-answer]").innerHTML;
      const explanation = card.querySelector("template[data-explanation]").innerHTML;

      card.querySelectorAll(".answer").forEach((button) => {
        button.classList.toggle("correct", Number(button.dataset.answer) === correct);
        button.classList.toggle(
          "incorrect",
          Number(button.dataset.answer) === selected && selected !== correct,
        );
      });

      if (!scoreState.answered.has(id)) {
        scoreState.answered.add(id);
        scoreState.total += 1;
        if (selected === correct) scoreState.correct += 1;
      }

      feedbackTitle.textContent = selected === correct ? "נכון." : "לא נכון.";
      feedbackText.innerHTML = `התשובה הנכונה: ${correctAnswer}<br>${explanation}`;
      feedback.classList.add("visible");
      updateCounters();
    });
  });
}

function bindTheme() {
  const button = document.querySelector("[data-theme-toggle]");
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("cloud-study-theme", next);
  });
  const saved = localStorage.getItem("cloud-study-theme");
  if (saved) document.documentElement.dataset.theme = saved;
}

function bindScrollSpy() {
  const links = [...document.querySelectorAll(".nav-tabs a")];
  const targets = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -60% 0px", threshold: 0.01 },
  );

  targets.forEach((target) => observer.observe(target));
}

function init() {
  renderNav();
  renderSections();
  renderFinalExam();
  updateCounters();
  bindQuiz();
  bindTheme();
  bindScrollSpy();
}

init();
