# PMAU Studying Hub

A beginner-friendly, static university study hub built with HTML, CSS, and vanilla JavaScript.

## Files

- `index.html` — the page shell.
- `css/style.css` — all visual design and responsive styling.
- `js/data.js` — **the only file you normally edit to add courses, quizzes, and questions**.
- `js/app.js` — the reusable course and quiz engine. You usually do not need to edit it.

## Run it

For a quick preview, open `index.html` in a modern browser. If your browser blocks local file behavior, use a simple static server or upload the folder to Netlify / GitHub Pages.

## Add a course

Open `js/data.js`. Inside `window.PMAU_COURSES`, add another course object, separated from the previous course by a comma:

```js
{
  id: "ENGL101",
  title: { en: "English", ar: "اللغة الإنجليزية" },
  description: { en: "English practice", ar: "تدريبات اللغة الإنجليزية" },
  icon: "A",
  accent: "#7c3aed",
  tint: "#f0eaff",
  quizzes: []
}
```

Use a unique `id` for each course. The `id` appears on its course card.

## Add a quiz

Inside the course's `quizzes` array, add an object like this:

```js
{
  id: "math001-homework-2",
  title: { en: "Homework 2", ar: "الواجب الثاني" },
  description: { en: "Practice set 2", ar: "مجموعة تدريبية ثانية" },
  typeLabel: { en: "Multiple choice", ar: "اختيار من متعدد" },
  questionMode: "one",
  feedbackMode: "both",
  timerMinutes: 10,
  shuffleQuestions: false,
  shuffleOptions: false,
  showExplanations: true,
  questions: [
    {
      type: "mcq",
      question: { en: "What is 5 + 7?", ar: "كم يساوي 5 + 7؟" },
      options: [
        { en: "10", ar: "10" },
        { en: "11", ar: "11" },
        { en: "12", ar: "12" },
        { en: "13", ar: "13" }
      ],
      answer: "12",
      explanation: { en: "5 + 7 = 12.", ar: "5 + 7 = 12." }
    },
    {
      type: "truefalse",
      question: { en: "7 is an even number.", ar: "العدد 7 زوجي." },
      options: [
        { en: "True", ar: "صحيح" },
        { en: "False", ar: "خطأ" }
      ],
      answer: "False",
      explanation: { en: "7 is odd.", ar: "العدد 7 فردي." }
    }
  ]
}
```

### Settings you can change

- `feedbackMode`: `"instant"`, `"end"`, or `"both"`.
- `timerMinutes`: a number; use `0` for no timer.
- `shuffleQuestions`: `true` or `false`.
- `shuffleOptions`: `true` or `false`.
- `showExplanations`: `true` or `false`.
- `questionMode`: keep `"one"` for one question at a time.

**Important:** for answer checking, each question's `answer` must exactly match the English `en` value of the correct option. Keep question IDs unique within a course, and quiz IDs unique within that course.

## Student data and privacy

This project does not use a server or database. Scores and attempts are stored in local browser storage on each device. They do not follow a student to another device or browser and may be lost if browser storage is cleared. Course and answer data are part of the public website files; do not use this design for confidential exam material.

## Publishing

Upload the complete folder structure to any static host. Do not move `style.css`, `data.js`, or `app.js` unless you also update their paths in `index.html`.
