/*
  ENG001 course data
*/

window.PMAU_COURSES = window.PMAU_COURSES || [];

window.PMAU_COURSES.push({
    id: "ENG001",
    hidden: true,

    title: {
        en: "English Language Skills",
        ar: "مهارات اللغة الإنجليزية"
    },

    description: {
        en: "",
        ar: ""
    },

    icon: "🔤",
    accent: "#0f9b8e",
    tint: "#e5f8f5",

    quizzes: [
{
        id: "math001-true-false-basics",
        title: { en: "Quick Check — Math Basics", ar: "اختبار سريع — أساسيات الرياضيات" },
        description: { en: "Test a few essential math statements.", ar: "اختبر فهمك لبعض المفاهيم الرياضية الأساسية." },
        typeLabel: [
      { en: "True or false", ar: "صح أم خطأ" },
      { en: "Multiple choice", ar: "اختيار من متعدد" }
    ],
        questionMode: "one",
        feedbackMode: "instant",
        timerMinutes: 0,
        shuffleQuestions: true,
        shuffleOptions: false,
        showExplanations: true,
        questions: [
          { type: "truefalse", question: {en:"The number 0.5 is equal to 50%",ar:"العدد 0.5 يساوي 50٪."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"True", explanation:{en:"Multiply 0.5 by 100 to get 50%.",ar:"اضرب 0.5 في 100 لتحصل على 50٪."} },
          { type: "truefalse", question: {en:"One quarter is equal to 0.4",ar:"الرُبع يساوي 0.4."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"False", explanation:{en:"One quarter is 1 ÷ 4 = 0.25.",ar:"الرُبع يساوي 1 ÷ 4 = 0.25."} },
          { type: "truefalse", question: {en:"10% of 90 is 9",ar:"10٪ من 90 تساوي 9"}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"True", explanation:{en:"0.10 × 90 = 9.",ar:"0.10 × 90 = 9."} },
          { type: "truefalse", question: {en:"If a value decreases from 100 to 80, it decreases by 20%.",ar:"إذا انخفضت قيمة من 100 إلى 80، فإنها انخفضت بنسبة 20٪."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"True", explanation:{en:"The decrease is 20, and 20 ÷ 100 = 20%.",ar:"مقدار الانخفاض 20، و20 ÷ 100 = 20٪."} }
        ]
      },

      {
        id: "math001-true-false-basics",
        title: { en: "Quick Check — Math Basics", ar: "اختبار سريع — أساسيات الرياضيات" },
        description: { en: "Test a few essential math statements.", ar: "اختبر فهمك لبعض المفاهيم الرياضية الأساسية." },
        typeLabel: { en: "True or false", ar: "صح أم خطأ" },
        questionMode: "one",
        feedbackMode: "instant",
        timerMinutes: 0,
        shuffleQuestions: true,
        shuffleOptions: false,
        showExplanations: true,
        questions: [
          { type: "truefalse", question: {en:"The number 0.5 is equal to 50%.",ar:"العدد 0.5 يساوي 50٪."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"True", explanation:{en:"Multiply 0.5 by 100 to get 50%.",ar:"اضرب 0.5 في 100 لتحصل على 50٪."} },
          { type: "truefalse", question: {en:"One quarter is equal to 0.4.",ar:"الرُبع يساوي 0.4."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"False", explanation:{en:"One quarter is 1 ÷ 4 = 0.25.",ar:"الرُبع يساوي 1 ÷ 4 = 0.25."} },
          { type: "truefalse", question: {en:"10% of 90 is 9.",ar:"10٪ من 90 تساوي 9."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"True", explanation:{en:"0.10 × 90 = 9.",ar:"0.10 × 90 = 9."} },
          { type: "truefalse", question: {en:"If a value decreases from 100 to 80, it decreases by 20%.",ar:"إذا انخفضت قيمة من 100 إلى 80، فإنها انخفضت بنسبة 20٪."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"True", explanation:{en:"The decrease is 20, and 20 ÷ 100 = 20%.",ar:"مقدار الانخفاض 20، و20 ÷ 100 = 20٪."} }
        ]
      },

      {
        id: "math001-true-false-basics",
        title: { en: "Quick Check — Math Basics", ar: "اختبار سريع — أساسيات الرياضيات" },
        description: { en: "Test a few essential math statements.", ar: "اختبر فهمك لبعض المفاهيم الرياضية الأساسية." },
        typeLabel: { en: "True or false", ar: "صح أم خطأ" },
        questionMode: "one",
        feedbackMode: "instant",
        timerMinutes: 0,
        shuffleQuestions: true,
        shuffleOptions: false,
        showExplanations: true,
        questions: [
          { type: "truefalse", question: {en:"The number 0.5 is equal to 50%.",ar:"العدد 0.5 يساوي 50٪."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"True", explanation:{en:"Multiply 0.5 by 100 to get 50%.",ar:"اضرب 0.5 في 100 لتحصل على 50٪."} },
          { type: "truefalse", question: {en:"One quarter is equal to 0.4.",ar:"الرُبع يساوي 0.4."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"False", explanation:{en:"One quarter is 1 ÷ 4 = 0.25.",ar:"الرُبع يساوي 1 ÷ 4 = 0.25."} },
          { type: "truefalse", question: {en:"10% of 90 is 9.",ar:"10٪ من 90 تساوي 9."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"True", explanation:{en:"0.10 × 90 = 9.",ar:"0.10 × 90 = 9."} },
          { type: "truefalse", question: {en:"If a value decreases from 100 to 80, it decreases by 20%.",ar:"إذا انخفضت قيمة من 100 إلى 80، فإنها انخفضت بنسبة 20٪."}, options:[{en:"True",ar:"صحيح"},{en:"False",ar:"خطأ"}], answer:"True", explanation:{en:"The decrease is 20, and 20 ÷ 100 = 20%.",ar:"مقدار الانخفاض 20، و20 ÷ 100 = 20٪."} }
        ]
      }
      
    ]
});

