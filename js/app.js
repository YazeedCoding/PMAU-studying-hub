
(() => {
  "use strict";

  const STORAGE = {
    theme: "pmau_theme",
    language: "pmau_language",
    progress: "pmau_progress_v1"
  };

  const translations = {
    en: {
      eyebrow: "STUDY IN A SMART WAY",
      heroTitle: "Practice makes perfect",
      heroText: "A focused space to practice, track your progress, and feel more prepared for your exams.",
      coursesLabel: "Courses", quizzesLabel: "Practice quizzes", attemptsLabel: "Attempts completed",
      workspace: "YOUR WORKSPACE", coursesTitle: "Explore your courses",
      coursesSubtitle: "Choose a course to find its practice quizzes",
      searchPlaceholder: "Search courses...", noCourses: "No courses found",
      trySearch: "Try another search term.", footerNote: "Built for focused learning",
      openCourse: "Open", quizCount: "quizzes", completed: "completed",
      backCourses: "← All courses", backQuizzes: "← Back to quizzes",
      practice: "PRACTICE QUIZZES", courseQuizSubtitle: "Choose a quiz and take it at your own pace.",
      questions: "questions", minutes: "min", untimed: "No timer", start: "Start quiz",
      question: "Question", of: "of", previous: "Previous",
      endQuiz: "End Quiz",
      endQuizConfirm: "Are you sure you want to end the quiz now? Only questions you answered will count toward your score.",
      next: "Next",
      submit: "Finish quiz", unanswered: "Unanswered", answered: "Answered",
      instantCorrect: "Correct!", instantIncorrect: "Not quite.",
      correctAnswer: "Correct answer:", explanation: "Explanation:",
      finishConfirm: "You still have unanswered questions. Do you want to finish this quiz?",
      timeUp: "Time is up! Your quiz will be submitted now.",
      results: "Quiz results", resultsSubtitle: "Here is how you did on this attempt",
      correct: "Correct", incorrect: "Incorrect", accuracy: "Accuracy",
      retryWrong: "Retry incorrect answers", retryAll: "Try again", backToCourse: "Back to course",
      answerReview: "Answer review", yourAnswer: "Your answer:", noAnswer: "Not answered",
      showAnswer: "Correct answer:", passed: "Great work!", keepPracticing: "Keep practicing — progress comes with practice.",
      noWrong: "You got every question correct. Excellent work!",
      emptyQuiz: "This quiz has no questions yet.", cancel: "Cancel",
      savedLocally: "Progress is saved on this device.", themeLight: "Switch to light mode", themeDark: "Switch to dark mode",
      chooseAnswer: "Choose an answer before moving on.",
      retryEmpty: "There are no incorrect answers to retry.",
      review: "Review answers", home: "Home",
      noAnswersToScore: "Answer at least one question before ending the quiz early.",
      answeredQuestions: "answered questions"
    },
    ar: {
      eyebrow: "أدرس بطريقة ذكية",
      heroTitle: "الممارسة أساس النجاح",
      heroText: "مساحة مركّزة للتدرب، ومتابعة تقدمك، والاستعداد لاختباراتك بثقة أكبر",
      coursesLabel: "المقررات", quizzesLabel: "اختبارات تدريبية", attemptsLabel: "محاولات مكتملة",
      workspace: "مساحتك الدراسية", coursesTitle: "استكشف مقرراتك",
      coursesSubtitle: "اختر مقررًا للوصول إلى اختباراته التدريبية",
      searchPlaceholder: "ابحث عن مقرر...", noCourses: "لم يتم العثور على مقررات",
      trySearch: "جرّب كلمة بحث أخرى.", footerNote: "صُمّم لمذاكرة أكثر تركيزًا.",
      openCourse: "افتح", quizCount: "اختبارات", completed: "مكتمل",
      backCourses: "← جميع المقررات", backQuizzes: "← العودة للاختبارات",
      practice: "الاختبارات التدريبية", courseQuizSubtitle: "اختر اختبارًا وتدرّب بالسرعة التي تناسبك.",
      questions: "أسئلة", minutes: "دقيقة", untimed: "دون مؤقت", start: "ابدأ الاختبار",
      question: "السؤال", of: "من", previous: "السابق",
      endQuiz: "إنهاء مبكر",
      endQuizConfirm: "هل تريد إنهاء الاختبار الآن؟ ستُحسب نتيجتك بناءً على الأسئلة التي أجبت عنها فقط.",
      next: "التالي",
      submit: "إنهاء الاختبار", unanswered: "دون إجابة", answered: "تمت الإجابة",
      instantCorrect: "إجابة صحيحة!", instantIncorrect: "ليست الإجابة الصحيحة.",
      correctAnswer: "الإجابة الصحيحة:", explanation: "التوضيح:",
      finishConfirm: "ما زالت هناك أسئلة دون إجابة. هل تريد إنهاء الاختبار؟",
      timeUp: "انتهى الوقت! سيتم تسليم الاختبار الآن.",
      results: "نتيجة الاختبار", resultsSubtitle: "إليك نتيجتك في هذه المحاولة",
      correct: "صحيح", incorrect: "خطأ", accuracy: "الدقة",
      retryWrong: "أعد الأسئلة الخاطئة", retryAll: "أعد الاختبار", backToCourse: "العودة للمقرر",
      answerReview: "مراجعة الإجابات", yourAnswer: "إجابتك:", noAnswer: "لم تتم الإجابة",
      showAnswer: "الإجابة الصحيحة:", passed: "أحسنت!", keepPracticing: "واصل التدريب — التقدم يأتي بالممارسة.",
      noWrong: "جميع إجاباتك صحيحة. عمل رائع!",
      emptyQuiz: "لا توجد أسئلة في هذا الاختبار حتى الآن", cancel: "إلغاء",
      savedLocally: "يُحفظ التقدم على هذا الجهاز.", themeLight: "التبديل إلى الوضع الفاتح", themeDark: "التبديل إلى الوضع الداكن",
      chooseAnswer: "اختر إجابة قبل الانتقال",
      retryEmpty: "لا توجد إجابات خاطئة لإعادتها",
      review: "مراجعة الإجابات", home: "الرئيسية",
      noAnswersToScore: "أجب عن سؤال واحد على الأقل قبل إنهاء الاختبار مبكرًا.",
      answeredQuestions: "أسئلة تمت الإجابة عنها"
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const appMain = $("#appMain");
  const courseGrid = $("#courseGrid");
  const searchInput = $("#courseSearch");

  let language = localStorage.getItem(STORAGE.language) || "en";
  let currentRoute = { page: "home" };
  let quizState = null;
  let timerInterval = null;
  let toastTimeout = null;

  function t(key) {
    return translations[language][key] || key;
  }

  function text(value) {
    if (value && typeof value === "object") {
      return value[language] ?? value.en ?? "";
    }
    return value ?? "";
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function courseById(id) {
    return window.PMAU_COURSES.find(course => course.id === id);
  }

  function quizById(course, id) {
    return course?.quizzes.find(quiz => quiz.id === id);
  }

  function allQuizzes() {
    return window.PMAU_COURSES.reduce(
      (total, course) => total + course.quizzes.length, 0
    );
  }

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE.progress) || "{}");
    } catch {
      return {};
    }
  }

  function saveAttempt(courseId, quizId, result) {
    const progress = getProgress();
    const key = `${courseId}::${quizId}`;

    if (!progress[key]) {
      progress[key] = {
        attempts: 0,
        bestPercent: 0,
        lastPercent: 0,
        lastScore: 0,
        lastTotal: 0
      };
    }

    progress[key].attempts += 1;
    progress[key].lastPercent = result.percent;
    progress[key].lastScore = result.correct;
    progress[key].lastTotal = result.total;
    progress[key].bestPercent = Math.max(
      progress[key].bestPercent || 0,
      result.percent
    );
    progress[key].lastAttemptAt = new Date().toISOString();

    localStorage.setItem(STORAGE.progress, JSON.stringify(progress));
  }

  function getQuizProgress(courseId, quizId) {
    return getProgress()[`${courseId}::${quizId}`] || null;
  }

  function totalAttempts() {
    return Object.values(getProgress()).reduce(
      (sum, item) => sum + (item.attempts || 0), 0
    );
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.dataset.i18n;
      if (translations[language][key]) node.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
      node.placeholder = t(node.dataset.i18nPlaceholder);
    });

    $("#languageToggle").textContent =
      language === "en" ? "العربية" : "English";

    $("#themeToggle").setAttribute(
      "aria-label",
      document.documentElement.dataset.theme === "dark"
        ? t("themeLight")
        : t("themeDark")
    );

    if (searchInput) {
      searchInput.dir = language === "ar" ? "rtl" : "ltr";
    }
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2700);
  }

  function renderHome() {
    stopTimer();
    quizState = null;
    currentRoute = { page: "home" };

    appMain.innerHTML = `
      <section class="hero" dir="${language === "ar" ? "rtl" : "ltr"}">
        <div class="hero-copy">
          <span class="eyebrow">${escapeHtml(t("eyebrow"))}</span>
          <h1>${escapeHtml(t("heroTitle"))}</h1>
          <p>${escapeHtml(t("heroText"))}</p>
          <div class="hero-stats">
            <div><strong>${window.PMAU_COURSES.length}</strong><span>${escapeHtml(t("coursesLabel"))}</span></div>
            <div><strong>${allQuizzes()}</strong><span>${escapeHtml(t("quizzesLabel"))}</span></div>
            <div><strong>${totalAttempts()}</strong><span>${escapeHtml(t("attemptsLabel"))}</span></div>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="art-card art-card-main"><span class="art-icon">✦</span><span class="art-line wide"></span><span class="art-line"></span><div class="art-progress"><i></i></div></div>
          <div class="art-chip chip-top">✓ &nbsp; ${language === "ar" ? "استمر بالتقدم" : "Keep going"}</div>
          <div class="art-chip chip-bottom">✎ &nbsp; ${language === "ar" ? "تعلّم بالممارسة" : "Learn by doing"}</div>
        </div>
      </section>
      <section class="section-heading">
        <div><span class="eyebrow">${escapeHtml(t("workspace"))}</span><h2>${escapeHtml(t("coursesTitle"))}</h2><p>${escapeHtml(t("coursesSubtitle"))}</p></div>
        <label class="search-wrap"><span aria-hidden="true">⌕</span><input id="courseSearch" type="search" placeholder="${escapeHtml(t("searchPlaceholder"))}" autocomplete="off"></label>
      </section>
      <section id="courseGrid" class="course-grid" aria-live="polite"></section>
      <div id="emptyCourses" class="empty-state hidden"><span>⌕</span><h3>${escapeHtml(t("noCourses"))}</h3><p>${escapeHtml(t("trySearch"))}</p></div>
      <footer class="footer"><span>© ${new Date().getFullYear()} PMAU Studying Hub</span><span>${escapeHtml(t("footerNote"))}</span></footer>`;

    const localSearch = $("#courseSearch");
    localSearch.addEventListener("input", () => renderCourseCards(localSearch.value));

    renderCourseCards("");
    appMain.focus({ preventScroll: true });
  }

  function renderCourseCards(query = "") {
    const grid = $("#courseGrid");
    const empty = $("#emptyCourses");
    if (!grid) return;

    const q = query.trim().toLowerCase();

    const courses = window.PMAU_COURSES
  .filter(course => course.hidden !== true)
  .filter(course =>
    `${course.id} ${text(course.title)} ${text(course.description)}`
      .toLowerCase().includes(q) ||
    `${course.title.en || ""} ${course.title.ar || ""} ${course.description.en || ""} ${course.description.ar || ""}`
      .toLowerCase().includes(q)
  );

    grid.innerHTML = courses.map((course, index) => {
      const done = course.quizzes.filter(
        quiz => getQuizProgress(course.id, quiz.id)?.attempts
      ).length;

      return `<article class="course-card" style="--card-accent:${escapeHtml(course.accent || "#2867e8")};--card-tint:${escapeHtml(course.tint || "#eaf1ff")};animation-delay:${index * 55}ms">
        <div class="course-card-top"><span class="course-icon">${escapeHtml(course.icon || "▦")}</span><span class="course-tag">${escapeHtml(course.id)}</span></div>
        <h3>${escapeHtml(text(course.title))}</h3><p>${escapeHtml(text(course.description))}</p>
        <div class="course-card-bottom"><span class="course-meta">${course.quizzes.length} ${escapeHtml(t("quizCount"))} · ${done} ${escapeHtml(t("completed"))}</span><button class="course-open" data-open-course="${escapeHtml(course.id)}">${escapeHtml(t("openCourse"))} ↗</button></div>
      </article>`;
    }).join("");

    empty.classList.toggle("hidden", courses.length > 0);

    grid.querySelectorAll("[data-open-course]").forEach(button => {
      button.addEventListener("click", () => renderCourse(button.dataset.openCourse));
    });
  }

  function renderCourse(courseId) {
    stopTimer();
    quizState = null;

    const course = courseById(courseId);

if (!course || course.hidden === true) {
  renderHome();
  return;
}

    currentRoute = { page: "course", courseId };

    appMain.innerHTML = `
      <section class="subpage-head">
        <button class="back-link" id="backHome">${escapeHtml(t("backCourses"))}</button>
        <div class="subpage-title-row" dir="${language === "ar" ? "rtl" : "ltr"}">
          <div class="course-summary"><span class="course-icon" style="--card-accent:${escapeHtml(course.accent || "#2867e8")};--card-tint:${escapeHtml(course.tint || "#eaf1ff")}">${escapeHtml(course.icon || "▦")}</span><div><span class="eyebrow">${escapeHtml(course.id)}</span><h1>${escapeHtml(text(course.title))}</h1><p>${escapeHtml(text(course.description))}</p></div></div>
        </div>
      </section>
      <section class="section-heading" style="margin-top:18px"><div><span class="eyebrow">${escapeHtml(t("practice"))}</span><h2>${escapeHtml(t("coursesTitle"))}</h2><p>${escapeHtml(t("courseQuizSubtitle"))}</p></div></section>
      <section class="quiz-list">${course.quizzes.map(quiz => {
        const progress = getQuizProgress(course.id, quiz.id);
        const scoreText = progress
          ? `${escapeHtml(t("completed"))} · ${progress.bestPercent}% best`
          : `${quiz.questions.length} ${escapeHtml(t("questions"))}`;

        return `<button class="quiz-card" data-open-quiz="${escapeHtml(quiz.id)}" data-course-id="${escapeHtml(course.id)}" dir="${language === "ar" ? "rtl" : "ltr"}">
          <span class="quiz-card-icon">▤</span><span class="quiz-card-info"><h3>${escapeHtml(text(quiz.title))}</h3><p>${escapeHtml(text(quiz.description))}</p><p>${quiz.questions.length} ${escapeHtml(t("questions"))} · ${quiz.timerMinutes ? `${quiz.timerMinutes} ${escapeHtml(t("minutes"))}` : escapeHtml(t("untimed"))} · ${scoreText}</p></span><span class="chevron">›</span>
        </button>`;
      }).join("")}</section>
      <footer class="footer"><span>© ${new Date().getFullYear()} PMAU Studying Hub</span><span>${escapeHtml(t("savedLocally"))}</span></footer>`;

    $("#backHome").addEventListener("click", renderHome);

    appMain.querySelectorAll("[data-open-quiz]").forEach(button => {
      button.addEventListener("click", () =>
        startQuiz(button.dataset.courseId, button.dataset.openQuiz)
      );
    });

    appMain.focus({ preventScroll: true });
  }

  function shuffle(array) {
    const copy = array.slice();

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }

  function startQuiz(courseId, quizId, retryQuestions = null) {
    const course = courseById(courseId);
    const quiz = quizById(course, quizId);

    if (!course || !quiz) return renderHome();

    stopTimer();

    let questions = (retryQuestions || quiz.questions).map((question, originalIndex) => ({
      ...question,
      originalIndex: question.originalIndex ?? originalIndex,
      options: (question.options || []).map(option =>
        typeof option === "string"
          ? { en: option, ar: option }
          : { ...option }
      )
    }));

    if (!retryQuestions && quiz.shuffleQuestions) {
      questions = shuffle(questions);
    }

    if (quiz.shuffleOptions) {
      questions = questions.map(question => ({
        ...question,
        options: shuffle(question.options)
      }));
    }

    if (!questions.length) {
      showToast(t("emptyQuiz"));
      return;
    }

    quizState = {
      courseId,
      quizId,
      course,
      quiz,
      questions,
      answers: new Array(questions.length).fill(null),
      index: 0,
      startedAt: Date.now(),
      secondsLeft: (quiz.timerMinutes || 0) * 60,
      submitted: false,
      retryMode: Boolean(retryQuestions),
      result: null
    };

    currentRoute = { page: "quiz", courseId, quizId };

    renderQuiz();

    if (quizState.secondsLeft > 0) startTimer();
  }

  function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
  }

  function startTimer() {
    stopTimer();

    timerInterval = setInterval(() => {
      if (!quizState || quizState.submitted) return stopTimer();

      quizState.secondsLeft -= 1;

      const timer = $("#timerValue");
      if (timer) timer.textContent = formatTime(quizState.secondsLeft);

      const pill = $("#timerPill");
      if (pill) pill.classList.toggle("warning", quizState.secondsLeft <= 60);

      if (quizState.secondsLeft <= 0) {
        stopTimer();
        showToast(t("timeUp"));
        submitQuiz(true);
      }
    }, 1000);
  }

  function formatTime(seconds) {
    const safe = Math.max(0, seconds);

    return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
  }

  function isInstantFeedback() {
    return quizState.quiz.feedbackMode === "instant" ||
      quizState.quiz.feedbackMode === "both";
  }

  function isEndFeedback() {
    return quizState.quiz.feedbackMode === "end" ||
      quizState.quiz.feedbackMode === "both";
  }

  function optionValue(option) {
    if (typeof option === "string") return option;

    return language === "ar"
      ? (option.ar ?? option.en)
      : (option.en ?? option.ar);
  }

  function answerValue(option) {
    if (typeof option === "string") return option;

    return option.en ?? option.ar;
  }

  function correctOption(question) {
    return question.options.find(
      option => answerValue(option) === question.answer
    ) || null;
  }

  function isCorrect(question, chosenOption) {
    return chosenOption !== null &&
      answerValue(question.options[chosenOption]) === question.answer;
  }

  function renderQuiz() {
    const state = quizState;
    if (!state) return;

    const question = state.questions[state.index];
    const chosen = state.answers[state.index];
    const instant = isInstantFeedback() && chosen !== null;
    const correct = instant && isCorrect(question, chosen);
    const correctOpt = correctOption(question);

    const optionsHtml = question.options.map((option, optionIndex) => {
      let classes = "option-button";
      let mark = "";

      if (chosen === optionIndex) classes += " selected";

      if (instant && answerValue(option) === question.answer) {
        classes += " correct";
        mark = "✓";
      } else if (instant && chosen === optionIndex && !correct) {
        classes += " incorrect";
        mark = "×";
      }

      return `<button class="${classes}" data-option="${optionIndex}" ${instant ? "disabled" : ""}>
        <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>
        <span class="option-text">${escapeHtml(optionValue(option))}</span>
        <span class="option-mark">${mark}</span>
      </button>`;
    }).join("");

    let feedbackHtml = "";

    if (instant) {
      const explanation = state.quiz.showExplanations
        ? text(question.explanation)
        : "";

      feedbackHtml = `<div class="feedback-box ${correct ? "good" : "bad"}">
        <strong>${escapeHtml(correct ? t("instantCorrect") : t("instantIncorrect"))}</strong>
        ${!correct ? `${escapeHtml(t("correctAnswer"))} ${escapeHtml(optionValue(correctOpt || state.quiz.questions[question.originalIndex]?.options?.[0] || ""))}<br>` : ""}
        ${explanation ? `${escapeHtml(t("explanation"))} ${escapeHtml(explanation)}` : ""}
      </div>`;
    }

    const progressPercent =
      ((state.index + 1) / state.questions.length) * 100;

    appMain.innerHTML = `
      <div class="quiz-layout" dir="${language === "ar" ? "rtl" : "ltr"}">
        <div class="quiz-topline">
          <button class="back-link" id="exitQuiz">${escapeHtml(t("backQuizzes"))}</button>
          <span class="quiz-label">${escapeHtml(text(state.quiz.title))}</span>
          ${state.quiz.timerMinutes ? `<span class="timer-pill" id="timerPill">◷ <span id="timerValue">${formatTime(state.secondsLeft)}</span></span>` : ""}
        </div>

        <div class="quiz-progress" role="progressbar" aria-valuenow="${state.index + 1}" aria-valuemin="1" aria-valuemax="${state.questions.length}">
          <span style="width:${progressPercent}%"></span>
        </div>

        <section class="question-card">
          <div class="question-count">${escapeHtml(t("question"))} ${state.index + 1} ${escapeHtml(t("of"))} ${state.questions.length}</div>
          <h2>${escapeHtml(text(question.question))}</h2>
          <div class="options-list">${optionsHtml}</div>
          ${feedbackHtml}

          <div class="quiz-controls">
            <button class="btn" id="previousQuestion" ${state.index === 0 ? "disabled" : ""}>${escapeHtml(t("previous"))}</button>
            <button class="btn" id="endQuiz" type="button">${escapeHtml(t("endQuiz"))}</button>
            <div class="control-group">
              ${state.index < state.questions.length - 1
                ? `<button class="btn btn-primary" id="nextQuestion">${escapeHtml(t("next"))} →</button>`
                : `<button class="btn btn-primary" id="submitQuiz">${escapeHtml(t("submit"))}</button>`
              }
            </div>
          </div>
        </section>

        <section class="question-nav" aria-label="${escapeHtml(t("review"))}">
          ${state.questions.map((q, i) => `<button class="nav-dot ${i === state.index ? "current" : ""} ${state.answers[i] !== null ? "answered" : ""}" data-goto="${i}" aria-label="${escapeHtml(t("question"))} ${i + 1}">${i + 1}</button>`).join("")}
        </section>
      </div>`;

    $("#exitQuiz").addEventListener("click", () => {
      if (confirm(
        language === "ar"
          ? "هل تريد الخروج من الاختبار؟ لن تُحفظ هذه المحاولة."
          : "Exit this quiz? This attempt will not be saved."
      )) {
        renderCourse(state.courseId);
      }
    });

    appMain.querySelectorAll("[data-option]").forEach(button => {
      button.addEventListener("click", () =>
        chooseAnswer(Number(button.dataset.option))
      );
    });

    appMain.querySelectorAll("[data-goto]").forEach(button => {
      button.addEventListener("click", () => {
        state.index = Number(button.dataset.goto);
        renderQuiz();
      });
    });

    $("#previousQuestion").addEventListener("click", () => {
      if (state.index > 0) {
        state.index--;
        renderQuiz();
      }
    });

    const next = $("#nextQuestion");

    if (next) {
      next.addEventListener("click", () => {
        if (state.answers[state.index] === null) {
          showToast(t("chooseAnswer"));
          return;
        }

        state.index++;
        renderQuiz();
      });
    }

    const submit = $("#submitQuiz");

    if (submit) {
      submit.addEventListener("click", () => submitQuiz(false));
    }

    $("#endQuiz").addEventListener("click", () => {
      if (!confirm(t("endQuizConfirm"))) return;
      submitQuiz(false, true);
    });

    appMain.focus({ preventScroll: true });
  }

  function chooseAnswer(optionIndex) {
    if (!quizState || quizState.submitted) return;

    quizState.answers[quizState.index] = optionIndex;
    renderQuiz();
  }

  function submitQuiz(isTimeout, endEarly = false) {
    if (!quizState || quizState.submitted) return;

    const state = quizState;

    // Early ending scores only questions that have been answered.
    const scoredIndices = endEarly
      ? state.answers
          .map((answer, index) => answer !== null ? index : -1)
          .filter(index => index !== -1)
      : state.questions.map((_, index) => index);

    if (endEarly && scoredIndices.length === 0) {
      showToast(t("noAnswersToScore"));
      return;
    }

    const unanswered = state.answers.filter(
      answer => answer === null
    ).length;

    if (
      !isTimeout &&
      !endEarly &&
      unanswered > 0 &&
      !confirm(t("finishConfirm"))
    ) {
      return;
    }

    stopTimer();
    state.submitted = true;

    const correct = scoredIndices.reduce((sum, index) => {
      return sum + (
        isCorrect(state.questions[index], state.answers[index]) ? 1 : 0
      );
    }, 0);

    const total = scoredIndices.length;

    const result = {
      correct,
      total,
      incorrect: total - correct,
      percent: Math.round((correct / total) * 100),
      secondsUsed: Math.round((Date.now() - state.startedAt) / 1000),
      unanswered,
      scoredIndices,
      endedEarly: endEarly
    };

    state.result = result;

    saveAttempt(state.courseId, state.quizId, result);
    renderResults(result);
  }

  function renderResults(result) {
    const state = quizState;

    currentRoute = {
      page: "results",
      courseId: state.courseId,
      quizId: state.quizId
    };

    const duration = formatTime(result.secondsUsed);

    const scoredIndices = result.scoredIndices ||
      state.questions.map((_, index) => index);

    const wrongIndices = scoredIndices.filter(index =>
      !isCorrect(state.questions[index], state.answers[index])
    );

    const reviewHtml = isEndFeedback()
      ? `<section class="review-list">
          <h2>${escapeHtml(t("answerReview"))}</h2>
          ${scoredIndices.map(index => {
            const question = state.questions[index];
            const correct = isCorrect(question, state.answers[index]);
            const correctOpt = correctOption(question);
            const selected = state.answers[index] === null
              ? t("noAnswer")
              : optionValue(question.options[state.answers[index]]);

            return `<article class="review-item">
              <h3>${index + 1}. ${escapeHtml(text(question.question))}</h3>
              <p class="${correct ? "review-answer" : "review-wrong"}">${escapeHtml(t("yourAnswer"))} ${escapeHtml(selected)}</p>
              ${!correct ? `<p class="review-answer">${escapeHtml(t("showAnswer"))} ${escapeHtml(correctOpt ? optionValue(correctOpt) : question.answer)}</p>` : ""}
              ${state.quiz.showExplanations && question.explanation ? `<p><strong>${escapeHtml(t("explanation"))}</strong> ${escapeHtml(text(question.explanation))}</p>` : ""}
            </article>`;
          }).join("")}
        </section>`
      : "";

    appMain.innerHTML = `
      <div class="quiz-layout" dir="${language === "ar" ? "rtl" : "ltr"}">
        <div class="quiz-topline">
          <button class="back-link" id="resultBack">${escapeHtml(t("backQuizzes"))}</button>
          <span class="quiz-label">${escapeHtml(text(state.quiz.title))}</span>
        </div>

        <section class="result-card">
          <div class="result-symbol">${result.percent >= 80 ? "✓" : "✦"}</div>
          <h1>${escapeHtml(t("results"))}</h1>
          <p>${escapeHtml(result.percent >= 80 ? t("passed") : t("keepPracticing"))}</p>
          <div class="score-number">${result.percent}%</div>
          <div class="score-caption">${result.correct} / ${result.total} ${escapeHtml(t("correct").toLowerCase())}</div>

          ${result.endedEarly ? `<p class="early-result-note">${result.total} ${escapeHtml(t("answeredQuestions"))}</p>` : ""}

          <div class="result-stats">
            <div class="result-stat"><strong>${result.correct}</strong><span>${escapeHtml(t("correct"))}</span></div>
            <div class="result-stat"><strong>${result.incorrect}</strong><span>${escapeHtml(t("incorrect"))}</span></div>
            <div class="result-stat"><strong>${duration}</strong><span>${escapeHtml(language === "ar" ? "الوقت المستغرق" : "Time taken")}</span></div>
          </div>

          <div class="result-actions">
            <button class="btn btn-primary" id="retryAll">${escapeHtml(t("retryAll"))}</button>
            <button class="btn" id="retryWrong" ${wrongIndices.length === 0 ? "disabled" : ""}>${escapeHtml(t("retryWrong"))}</button>
            <button class="btn btn-quiet" id="backCourse">${escapeHtml(t("backToCourse"))}</button>
          </div>

          ${wrongIndices.length === 0 ? `<p style="margin-top:18px;color:var(--success)">${escapeHtml(t("noWrong"))}</p>` : ""}
          ${reviewHtml}
        </section>
      </div>`;

    $("#resultBack").addEventListener("click", () => renderCourse(state.courseId));
    $("#backCourse").addEventListener("click", () => renderCourse(state.courseId));
    $("#retryAll").addEventListener("click", () => startQuiz(state.courseId, state.quizId));

    $("#retryWrong").addEventListener("click", () => {
      if (!wrongIndices.length) {
        showToast(t("retryEmpty"));
        return;
      }

      const wrongQuestions = wrongIndices.map(index => ({
        ...state.questions[index],
        originalIndex: state.questions[index].originalIndex
      }));

      startQuiz(state.courseId, state.quizId, wrongQuestions);
    });

    appMain.focus({ preventScroll: true });
  }

  

function initTheme() {
const saved = localStorage.getItem(STORAGE.theme);
const theme = saved === "light" ? "light" : "dark";

document.documentElement.dataset.theme = theme;

const themeIcon = document.querySelector("#themeIcon");
const themeToggle = document.querySelector("#themeToggle");

function updateThemeButton(currentTheme) {
if (themeIcon) {
themeIcon.textContent = currentTheme === "dark" ? "☀️" : "🌙";
}
}

updateThemeButton(theme);

if (themeToggle) {
themeToggle.addEventListener("click", () => {
const next =
document.documentElement.dataset.theme === "dark"
? "light"
: "dark";

  document.documentElement.dataset.theme = next;
  localStorage.setItem(STORAGE.theme, next);

  updateThemeButton(next);
});

}
}

$("#languageToggle").addEventListener("click", () => {
  language = language === "en" ? "ar" : "en";
  localStorage.setItem(STORAGE.language, language);

  applyLanguage();

  if (currentRoute.page === "home") {
    renderHome();
  } else if (currentRoute.page === "course") {
    renderCourse(currentRoute.courseId);
  } else if (currentRoute.page === "quiz" && quizState) {
    renderQuiz();
  } else if (currentRoute.page === "results" && quizState) {
    const state = quizState;

    if (state.result) {
      renderResults({
        ...state.result,
        secondsUsed: Math.round(
          (Date.now() - state.startedAt) / 1000
        )
      });
    }
  }
});

$("#brandHome").addEventListener("click", event => {
  event.preventDefault();
  renderHome();
});

const yearElement = $("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

initTheme();
applyLanguage();
renderHome();
})();

