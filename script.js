const scoreState = {
  total: 0,
  correct: 0,
  answered: new Set(),
};

function renderNav() {
  const nav = document.querySelector("#mainNav");
  nav.innerHTML =
    window.studyGuide.sections
      .map((section) => `<a href="#${section.id}">${section.nav}</a>`)
      .join("") + `<a href="#final-exam">מבחן מסכם</a><a href="#coverage-check">כיסוי</a>`;
}

function renderLearningMap() {
  const root = document.querySelector("#learningMap");
  root.innerHTML = window.studyGuide.sections
    .map(
      (section, index) => `
        <a class="map-card" href="#${section.id}">
          <strong>${index + 1}. ${section.title}</strong>
          <span>${section.quiz.length} שאלות ביניים</span>
        </a>
      `,
    )
    .join("");
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
      <template>${question.explain}</template>
    </article>
  `;
}

function renderSections() {
  const root = document.querySelector("#sectionsRoot");
  root.innerHTML = window.studyGuide.sections
    .map(
      (section, index) => `
        <section id="${section.id}" class="section-shell">
          <div class="section-heading">
            <span class="section-icon">${section.icon}</span>
            <div>
              <p class="eyebrow">פרק ${index + 1}</p>
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
  root.innerHTML = window.studyGuide.finalExam
    .map((question, index) => renderQuestion(question, `final-${index}`))
    .join("");
}

function renderCoverage() {
  const root = document.querySelector("#coverageRoot");
  root.innerHTML = `
    <div class="coverage-checklist">
      ${window.studyGuide.coverageItems.map((item) => `<span>✓ ${item}</span>`).join("")}
    </div>
  `;
}

function updateCounters() {
  const quizTotal = window.studyGuide.sections.reduce((sum, section) => sum + section.quiz.length, 0);
  document.querySelector("#sectionCount").textContent = String(window.studyGuide.sections.length);
  document.querySelector("#quizCount").textContent = String(quizTotal);
  document.querySelector("#examCount").textContent = String(window.studyGuide.finalExam.length);
  document.querySelector("#scoreCorrect").textContent = String(scoreState.correct);
  document.querySelector("#scoreTotal").textContent = String(scoreState.total);
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
      const explanation = card.querySelector("template").innerHTML;

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

      feedbackTitle.textContent = selected === correct ? "נכון. " : "לא נכון. ";
      feedbackText.textContent = explanation;
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
    localStorage.setItem("cloud-study-theme-v2", next);
  });

  const saved = localStorage.getItem("cloud-study-theme-v2");
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
    { rootMargin: "-35% 0px -58% 0px", threshold: 0.01 },
  );

  targets.forEach((target) => observer.observe(target));
}

function init() {
  renderNav();
  renderLearningMap();
  renderSections();
  renderFinalExam();
  renderCoverage();
  updateCounters();
  bindQuiz();
  bindTheme();
  bindScrollSpy();
}

init();
