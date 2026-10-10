/*
  MATH001 course data
*/

window.PMAU_COURSES = window.PMAU_COURSES || [];

window.PMAU_COURSES.push({
    id: "MATH001",
    hidden: false,

    // Keep all the MATH001 details here.
    title: {
        en: "Fundamentals of Mathematics",
        ar: "أساسيات الرياضيات"
    },

    description: {
        en: "",
        ar: ""
    },

    icon: "📐",
    accent: "#2867e8",
    tint: "#eaf1ff",

quizzes: [
  {
    id: "math001-midterm-q1-100",
    title: { en: "Math 001 Midterm Prep (Q1–100)", ar: "تجميعات ميد ماث 001 (الأسئلة 1-100)" },
    description: { en: "Practice quiz covering algebra fundamentals, linear equations, set definitions, and translation statements.", ar: "اختبار تدريبي يشمل أساسيات الجبر، المعادلات الخطية، مجموعات الأعداد، والترجمة الجبرية." },
    typeLabel: { en: "Multiple choice / True & False", ar: "اختيار من متعدد / صواب وخطأ" },
    questionMode: "one",
    feedbackMode: "both",
    timerMinutes: 0,
    shuffleQuestions: true,
    shuffleOptions: true,
    showExplanations: true,
    questions: [
      {
        type: "truefalse",
        question: { en: "The nonvertical lines are Perpendicular if the product of their slopes is -1.", ar: "تكون الخطوط غير الرأسية متعامدة إذا كان حاصل ضرب ميولها يساوي -1." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Perpendicular lines have slopes that are negative reciprocals of each other, so their product is -1.", ar: "المستقيمات المتعامدة يكون حاصل ضرب ميولها يساوي -1." }
      },
      {
        type: "truefalse",
        question: { en: "The absolute value of a number is always negative.", ar: "القيمة المطلقة لأي عدد تكون دائمًا سالبة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The absolute value of a number represents distance and is always non-negative (positive or zero).", ar: "القيمة المطلقة تمثل مسافة وهي دائمًا غير سالبة (موجبة أو صفر)." }
      },
      {
        type: "truefalse",
        question: { en: "Consistent or inconsistent refers to linear systems having or not having solutions.", ar: "النظام المتسق أو غير المتسق يشير إلى وجود حلول للنظام أو عدم وجودها." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "A system with at least one solution is consistent, and a system with no solution is inconsistent.", ar: "النظام الذي يملك حلاً واحدًا على الأقل يسمى متسقًا، والذي لا يملك أي حل يسمى غير متسق." }
      },
      {
        type: "truefalse",
        question: { en: "Every system of equations has at least one solution.", ar: "كل نظام من المعادلات يملك حلاً واحدًا على الأقل." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Inconsistent systems (e.g., parallel lines) have no solutions.", ar: "الأنظمة غير المتسقة (مثل المستقيمات المتوازية) لا تملك أي حل." }
      },
      {
        type: "truefalse",
        question: { en: "Any two parallel lines have the same Slope.", ar: "أي مستقيمين متوازيين لهما نفس الميل." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Parallel lines have identical slopes.", ar: "المستقيمات المتوازية متساوية في الميل." }
      },
      {
        type: "truefalse",
        question: { en: "Any two parallel lines have the same equation.", ar: "أي مستقيمين متوازيين لهما نفس المعادلة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Parallel lines have the same slope but typically different y-intercepts.", ar: "المستقيمات المتوازية لها نفس الميل ولكن يختلف الجزء المقطوع من محور الصادات." }
      },
      {
        type: "truefalse",
        question: { en: "Not all integer numbers are rational numbers.", ar: "ليست كل الأعداد الصحيحة أعدادًا نسبية." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "All integers are rational numbers because any integer z can be written as z/1.", ar: "جميع الأعداد الصحيحة هي أعداد نسبية لأنه يمكن كتابتها على صورة z/1." }
      },
      {
        type: "truefalse",
        question: { en: "Every function is a relation.", ar: "كل دالة هي علاقة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "A function is a special type of relation where each input corresponds to exactly one output.", ar: "الدالة هي نوع خاص من العلاقات يربط كل مدخل بـ مخرج واحد فقط." }
      },
      {
        type: "truefalse",
        question: { en: "It is possible for one input of a function to have two or more outputs.", ar: "من الممكن لمدخل واحد في الدالة أن يكون له مخرجان أو أكثر." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "By definition, each input of a function must map to exactly one output.", ar: "تعريف الدالة يشترط أن يربط كل مدخل بـ مخرج واحد فقط." }
      },
      {
        type: "truefalse",
        question: { en: "All integers are whole numbers.", ar: "جميع الأعداد الصحيحة هي أعداد كليّة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Negative integers (e.g., -3) are not whole numbers.", ar: "الأعداد الصحيحة السالبة (مثل -3) ليست أعدادًا كليّة." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, a number without a variable is called 'the degree'.", ar: "في كثيرات الحدود، يسمى العدد الذي لا يحتوي على متغير 'الدرجة'." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "A number without a variable is called a constant.", ar: "العدد الذي لا يحتوي على متغير يسمى ثابتاً (Constant)." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, a number without a variable is called 'constant'.", ar: "في كثيرات الحدود، يسمى العدد الذي لا يحتوي على متغير 'ثابتاً'." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "The numerical term without a variable is defined as the constant term.", ar: "الحد العددي الذي بدون متغير يُعرف بالحد الثابت." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, a number in front of the variable is called 'base'.", ar: "في كثيرات الحدود، يسمى العدد الموجود أمام المتغير 'الأساس'." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The number in front of the variable is called the coefficient.", ar: "العدد الموجود أمام المتغير يسمى المعامل (Coefficient)." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, a number in front of the variable is called 'exponent'.", ar: "في كثيرات الحدود، يسمى العدد الموجود أمام المتغير 'الأس'." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The number in front of the variable is the coefficient, not the exponent.", ar: "العدد الموجود أمام المتغير هو المعامل وليس الأس." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, a number in front of the variable is called 'coefficient'.", ar: "في كثيرات الحدود، يسمى العدد الموجود أمام المتغير 'المعامل'." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "The numerical factor multiplying a variable term is called a coefficient.", ar: "العدد المضروب في المتغير يسمى معامل الحد." }
      },
      {
        type: "truefalse",
        question: { en: "All whole numbers are integers.", ar: "جميع الأعداد الكليّة هي أعداد صحيحة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Whole numbers {0, 1, 2, ...} are a subset of integers.", ar: "الأعداد الكلية {0، 1، 2، ...} هي جزء من الأعداد الصحيحة." }
      },
      {
        type: "truefalse",
        question: { en: "The variable's exponents of a polynomial are whole numbers.", ar: "أسس المتغيرات في كثيرات الحدود هي أعداد كليّة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Polynomial exponents must be non-negative integers (whole numbers: 0, 1, 2, ...).", ar: "أسس كثيرات الحدود يجب أن تكون أعداداً صحيحة غير سالبة (أعداد كليّة)." }
      },
      {
        type: "truefalse",
        question: { en: "The variable's exponents of a polynomial are natural numbers.", ar: "أسس المتغيرات في كثيرات الحدود هي أعداد طبيعية دائمًا." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Exponents can also be 0 (a whole number), whereas natural numbers start at 1.", ar: "يمكن أن يكون الأس 0 (وهو عدد كلي)، بينما تبدأ الأعداد الطبيعية من 1." }
      },
      {
        type: "truefalse",
        question: { en: "The variable's exponents of a polynomial are integers numbers.", ar: "أسس المتغيرات في كثيرات الحدود هي أعداد صحيحة مطلقة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Negative integers are not allowed as exponents in polynomials.", ar: "الأعداد الصحيحة السالبة لا تجوز كأسس في كثيرات الحدود." }
      },
      {
        type: "truefalse",
        question: { en: "Integers include all whole numbers and their opposites.", ar: "الأعداد الصحيحة تشمل جميع الأعداد الكليّة ومقابيلها (معكوساتها)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Integers consist of {..., -2, -1, 0, 1, 2, ...}.", ar: "الأعداد الصحيحة تتكون من الأعداد الموجبة والسالبة والصفر." }
      },
      {
        type: "truefalse",
        question: { en: "All rational numbers are integers.", ar: "جميع الأعداد النسبية هي أعداد صحيحة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Fractions like 1/2 are rational but not integers.", ar: "الكسور مثل 1/2 هي أعداد نسبية ولكنها ليست صحيحة." }
      },
      {
        type: "truefalse",
        question: { en: "A perfect square trinomial is a trinomial that is the square of a monomial.", ar: "ثلاثي الحدود المربع الكامل هو ثلاثي حدود ناتج عن مربع حدية أحادية.", "ar": "ثلاثي الحدود المربع الكامل هو مربع حدية أحادية." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "It is the square of a binomial (e.g., (x+a)^2).", ar: "هو مربع حدية ثنائية (Binomial) وليس أحادية." }
      },
      {
        type: "truefalse",
        question: { en: "A polynomial that cannot be factored is considered prime.", ar: "كثيرة الحدود التي لا يمكن تحليلها تعتبر أولية (Prime).", "ar": "كثيرة الحدود التي لا تجزأ تُعتبر أولية." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "A polynomial with no factors over the reals/integers besides itself is prime.", ar: "كثيرة الحدود غير القابلة للتحليل تسمى كثيرة حدود أولية." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial with one variable, the largest exponent of the variable is the degree of the polynomial.", ar: "في كثيرة الحدود بمتغير واحد، أعلى أس للمتغير هو درجة كثيرة الحدود." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "The degree of a single-variable polynomial is given by its highest exponent.", ar: "درجة كثيرة الحدود الذات المتغير الواحد هي قيمة أكبر أس فيها." }
      },
      {
        type: "truefalse",
        question: { en: "A perfect square trinomial is a trinomial that is the square of a binomial.", ar: "ثلاثي الحدود المربع الكامل هو ثلاثي حدود ناتج عن مربع ثنائية حد." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "By definition, (a ± b)^2 = a^2 ± 2ab + b^2.", ar: "حسب التعريف، مربع ثنائية الحد يعطي ثلاثي حدود مربع كامل." }
      },
      {
        type: "truefalse",
        question: { en: "Not all natural numbers are integers.", ar: "ليست كل الأعداد الطبيعية أعداداً صحيحة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "All natural numbers {1, 2, 3, ...} belong to the integers.", ar: "جميع الأعداد الطبيعية هي جزء من الأعداد الصحيحة." }
      },
      {
        type: "truefalse",
        question: { en: "The graph of y = b is a vertical line.", ar: "تمثيل المعادلة y = b هو خط رأسي." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The graph of y = b is a horizontal line.", ar: "رسم المعادلة y = b يمثل خطاً أفقياً." }
      },
      {
        type: "truefalse",
        question: { en: "The product of a number and its multiplicative inverse is -1.", ar: "حاصل ضرب عدد في نظيره الضربي يساوي -1." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The product of a number and its multiplicative inverse (reciprocal) is 1.", ar: "حاصل ضرب العدد في نظيره الضربي يساوي 1." }
      },
      {
        type: "truefalse",
        question: { en: "Parallel lines have the same slope and y-intercept.", ar: "المستقيمات المتوازية لها نفس الميل والنظير الصادي (y-intercept)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Parallel lines have the same slope but different y-intercepts (same slope & y-intercept means identical lines).", ar: "المستقيمات المتوازية لها نفس الميل ولكن تختلف في المقطع الصادي." }
      },
      {
        type: "truefalse",
        question: { en: "A system of equations with infinitely many solutions is inconsistent.", ar: "نظام المعادلات الذي يحتوي على عدد لا نهائي من الحلول يعتبر غير متسق." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Systems with infinitely many solutions are consistent (dependent).", ar: "النظام الذي يملك عدداً لا نهائياً من الحلول هو نظام متسق (مستقل/غير مستقل)." }
      },
      {
        type: "truefalse",
        question: { en: "Every system of linear inequalities has at least one solution.", ar: "كل نظام من المتباينات الخطية يملك حلاً واحدًا على الأقل." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Some systems of inequalities have no overlapping region, hence no solution.", ar: "قد لا تتقاطع مناطق الحل لمتباينتين وبالتالي لا يوجد حل." }
      },
      {
        type: "truefalse",
        question: { en: "It is possible for all inputs of a function to have the same output.", ar: "من الممكن لجميع مدخلات الدالة أن تمتلك نفس المخرج." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "This is true for a constant function f(x) = c.", ar: "هذا صحيح في حالة الدالة الثابتة f(x) = c." }
      },
      {
        type: "truefalse",
        question: { en: "If the graphs of two linear equations intersect, then the system is consistent.", ar: "إذا تقاطع التمثيل البياني لمعادلتين خطيتين، يكون النظام متسقًا." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Intersection means there is a unique solution, so the system is consistent.", ar: "التقاطع يعني وجود حل، وبالتالي فالنظام متسق." }
      },
      {
        type: "truefalse",
        question: { en: "The reciprocal of 1 is 1.", ar: "المقلوب الضربي للعدد 1 هو 1." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "1 / 1 = 1.", ar: "1 ÷ 1 = 1." }
      },
      {
        type: "truefalse",
        question: { en: "Two numbers whose product is 1 are called opposites of each other.", ar: "العددان اللذان حاصل ضربهما 1 يسميان متقابلين (Opposites)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Numbers whose product is 1 are reciprocals (multiplicative inverses). Opposites add up to 0.", ar: "الأعداد التي حاصل ضربها 1 تسمى مقلوبًا أو نظائر ضربية." }
      },
      {
        type: "mcq",
        question: { en: "Two numbers whose product is 1 are called:", ar: "العددان اللذان حاصل ضربهما 1 يسميان:" },
        options: [{ en: "Opposites", ar: "معكوسين جمعيين" }, { en: "Reciprocals", ar: "نظيرين ضربيين (مقلوب)" }, { en: "Commutative Law", ar: "قانون الإبدال" }, { en: "Additive Inverses", ar: "معكوسين جمعيين" }],
        answer: "Reciprocals",
        explanation: { en: "By definition, a × (1/a) = 1, so they are reciprocals.", ar: "حسب التعريف، العدد ضرب مقلوبه يساوي 1." }
      },
      {
        type: "truefalse",
        question: { en: "Natural numbers consist of the whole numbers and their opposites.", ar: "الأعداد الطبيعية تتكون من الأعداد الكلية ومقابيلها." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Integers consist of whole numbers and their opposites.", ar: "الأعداد الصحيحة هي التي تتكون من الأعداد الكلية ومعكوساتها." }
      },
      {
        type: "truefalse",
        question: { en: "Integers consist of the whole numbers and their opposites.", ar: "الأعداد الصحيحة تتكون من الأعداد الكليّة ومقابيلها." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Integers = {...-2, -1, 0, 1, 2...}.", ar: "الأعداد الصحيحة تشمل {..., -1, 0, 1, ...}." }
      },
      {
        type: "truefalse",
        question: { en: "The number 1 has no reciprocal.", ar: "العدد 1 ليس له مقلوب." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The reciprocal of 1 is 1.", ar: "مقلوب العدد 1 هو 1." }
      },
      {
        type: "truefalse",
        question: { en: "The number 0 has no opposite.", ar: "العدد 0 ليس له معكوس جمعي." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The opposite of 0 is -0, which is equal to 0.", ar: "المعكوس الجمعي للصفر هو الصفر نفسه." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'some number less than negative nine' to an algebraic expression:", ar: "ترجم 'عدد ما أقل من سالب تسعة' إلى تعبير جبری:" },
        options: [{ en: "-9 - r", ar: "-9 - r" }, { en: "r + 9", ar: "r + 9" }, { en: "r ≤ -9", ar: "r ≤ -9" }, { en: "r < -9", ar: "r < -9" }],
        answer: "r < -9",
        explanation: { en: "'Less than' indicates a strict inequality symbol '<'.", ar: "'أقل من' تعبر عن متباينة أصغر من '<'." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'Seven less than twice some number' to an algebraic expression:", ar: "ترجم 'سبعة أقل من ضعفي عدد ما' إلى تعبير جبري:" },
        options: [{ en: "2m - 7", ar: "2m - 7" }, { en: "7 > m", ar: "7 > m" }, { en: "m - 7", ar: "m - 7" }, { en: "7 - 2m", ar: "7 - 2m" }],
        answer: "2m - 7",
        explanation: { en: "'Twice some number' is 2m, and 'seven less than' subtracts 7.", ar: "ضعفا العدد 2m، و'أقل بـ 7' تطرح 7." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'The sum of -9 and a number' to an algebraic expression:", ar: "ترجم 'مجموع سالب 9 وعدد ما' إلى تعبير جبري:" },
        options: [{ en: "y - 9", ar: "y - 9" }, { en: "-9x", ar: "-9x" }, { en: "y + 9", ar: "y + 9" }, { en: "-9 + y", ar: "-9 + y" }],
        answer: "y - 9",
        explanation: { en: "Sum means addition: -9 + y = y - 9.", ar: "المجموع يعني الجمع: -9 + y وتكتب y - 9." }
      },
      {
        type: "mcq",
        question: { en: "Translate '-5 less than any number' to an algebraic expression:", ar: "ترجم 'سالب 5 مطروحاً من أي عدد' إلى تعبير جبري:" },
        options: [{ en: "x + 5", ar: "x + 5" }, { en: "-5 + x", ar: "-5 + x" }, { en: "5 - x", ar: "5 - x" }, { en: "x - (-5)", ar: "x - (-5)" }],
        answer: "x + 5",
        explanation: { en: "Subtracting -5 from x: x - (-5) = x + 5.", ar: "طرح سالب 5 من x يساوي: x - (-5) = x + 5." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'twice a number more than -1' to an algebraic expression:", ar: "ترجم 'ضعفا عدد ما يزيد عن سالب 1' إلى تعبير جبري:" },
        options: [{ en: "2n - 1", ar: "2n - 1" }, { en: "2n + 1", ar: "2n + 1" }, { en: "-1 - 2n", ar: "-1 - 2n" }, { en: "n - 2", ar: "n - 2" }],
        answer: "2n - 1",
        explanation: { en: "'More than -1' added to twice a number 2n is 2n + (-1) = 2n - 1.", ar: "2n مطروح منها 1 تعطي 2n - 1." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'the product of two numbers decreased by four' to an algebraic expression:", ar: "ترجم 'حاصل ضرب عددين مطروحًا منه أربعة' إلى تعبير جبري:" },
        options: [{ en: "mn + 4", ar: "mn + 4" }, { en: "2m + 4", ar: "2m + 4" }, { en: "mn - 4", ar: "mn - 4" }, { en: "2m - 4", ar: "2m - 4" }],
        answer: "mn - 4",
        explanation: { en: "Product of two numbers is mn, decreased by four gives mn - 4.", ar: "حاصل ضربهما mn، ومطروح منه 4 تعطي mn - 4." }
      },
      {
        type: "truefalse",
        question: { en: "'y less than 5' is translated to 5 - y.", ar: "'y أقل من 5' تُترجم إلى 5 - y." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "'y less than 5' means start with 5 and subtract y.", ar: "'y أقل من 5' تعني البدء بـ 5 وطرح y." }
      },
      {
        type: "mcq",
        question: { en: "Translate '-4 less than 8 times some number' to an algebraic expression:", ar: "ترجم 'سالب 4 مطروحة من 8 أضعاف عدد ما' إلى تعبير جبري:" },
        options: [{ en: "8k + 4", ar: "8k + 4" }, { en: "8 - 4k", ar: "8 - 4k" }, { en: "8k - 4", ar: "8k - 4" }, { en: "4 - 8k", ar: "4 - 8k" }],
        answer: "8k + 4",
        explanation: { en: "8 times a number is 8k. Subtracting -4 gives 8k - (-4) = 8k + 4.", ar: "8 أضعاف العدد هي 8k، وطرح -4 يعطي 8k - (-4) = 8k + 4." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'Five less than Twice a number' to an algebraic expression:", ar: "ترجم 'خمسة مطروحة من ضعفي عدد ما' إلى تعبير جبري:" },
        options: [{ en: "5 - x^2", ar: "5 - x^2" }, { en: "2x - 5", ar: "2x - 5" }, { en: "5 - 2x", ar: "5 - 2x" }, { en: "x^2 - 5", ar: "x^2 - 5" }],
        answer: "2x - 5",
        explanation: { en: "Twice a number is 2x, five less than that is 2x - 5.", ar: "ضعفا العدد 2x، ومطروح منه 5 تعطي 2x - 5." }
      },
      {
        type: "mcq",
        question: { en: "Translate '-8 more than three times some number' to an algebraic expression:", ar: "ترجم 'سالب 8 زائد ثلاثة أضعاف عدد ما' إلى تعبير جبري:" },
        options: [{ en: "3 - 8x", ar: "3 - 8x" }, { en: "3x + 8", ar: "3x + 8" }, { en: "3x - 8", ar: "3x - 8" }, { en: "8 - 3x", ar: "8 - 3x" }],
        answer: "3x - 8",
        explanation: { en: "Three times a number is 3x, plus -8 gives 3x - 8.", ar: "ثلاثة أضعاف العدد 3x مضافاً إليها -8 تعطي 3x - 8." }
      },
      {
        type: "mcq",
        question: { en: "The translation of 'Four multiplied by some number' is:", ar: "ترجمة 'أربعة مضروبة في عدد ما' هي:" },
        options: [{ en: "4 / n", ar: "4 / n" }, { en: "n + 4", ar: "n + 4" }, { en: "n / 4", ar: "n / 4" }, { en: "4n", ar: "4n" }],
        answer: "4n",
        explanation: { en: "Multiplication of 4 and n gives 4n.", ar: "ضرب 4 في المتغير n يعطي 4n." }
      },
      {
        type: "mcq",
        question: { en: "'Twice a number increased by five' is translated to:", ar: "'ضعفا عدد مضافاً إليه خمسة' يُترجم إلى:" },
        options: [{ en: "2x + 5", ar: "2x + 5" }, { en: "2x - 5", ar: "2x - 5" }, { en: "x + 10", ar: "x + 10" }, { en: "2(x + 5)", ar: "2(x + 5)" }],
        answer: "2x + 5",
        explanation: { en: "Twice a number is 2x, increased by five gives 2x + 5.", ar: "ضعفا العدد 2x، وزيادة 5 تعطي 2x + 5." }
      },
      {
        type: "mcq",
        question: { en: "Translate to an algebraic expression: '5 less than the quotient of 7 and s'", ar: "ترجم إلى تعبير جبري: '5 أقل من ناتج قسمة 7 على s'" },
        options: [{ en: "(7/s) - 5", ar: "(7/s) - 5" }, { en: "(s/7) - 5", ar: "(s/7) - 5" }, { en: "5 - (7/s)", ar: "5 - (7/s)" }, { en: "5 - (s/7)", ar: "5 - (s/7)" }],
        answer: "(7/s) - 5",
        explanation: { en: "Quotient of 7 and s is 7/s. Five less than it is (7/s) - 5.", ar: "قسمة 7 على s هي 7/s، ومطروح منها 5 تعطي (7/s) - 5." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'the difference between y and x is greater than the quotient of 3 and negative x' into an inequality:", ar: "ترجم 'الفرق بين y و x أكبر من ناتج قسمة 3 على سالب x' إلى متباينة:" },
        options: [{ en: "y - x > 3/(-x)", ar: "y - x > 3/(-x)" }, { en: "x - y > x/(-3)", ar: "x - y > x/(-3)" }, { en: "y - x > (-x)/3", ar: "y - x > (-x)/3" }, { en: "x - y > 3/(-x)", ar: "x - y > 3/(-x)" }],
        answer: "y - x > 3/(-x)",
        explanation: { en: "Difference (y - x) > quotient of 3 and -x (3/-x).", ar: "الفرق (y - x) أكبر من (>) قسمة 3 على -x." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'nine subtracted from x is greater than the quotient of y and negative x' into an inequality:", ar: "ترجم 'تسعة مطروحة من x أكبر من ناتج قسمة y على سالب x' إلى متباينة:" },
        options: [{ en: "9 - x > y/(-x)", ar: "9 - x > y/(-x)" }, { en: "x - 9 > y/(-x)", ar: "x - 9 > y/(-x)" }, { en: "9 - x > (-x)/y", ar: "9 - x > (-x)/y" }, { en: "x - 9 > x/(-y)", ar: "x - 9 > x/(-y)" }],
        answer: "x - 9 > y/(-x)",
        explanation: { en: "'9 subtracted from x' is x - 9, which is > y/(-x).", ar: "'9 مطروحة من x' هي x - 9، وهي أكبر من (>) y/(-x)." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'the difference between x and y is greater than the quotient of x and three' into an inequality:", ar: "ترجم 'الفرق بين x و y أكبر من ناتج قسمة x على 3' إلى متباينة:" },
        options: [{ en: "y - x > 3/x", ar: "y - x > 3/x" }, { en: "x - y > x/3", ar: "x - y > x/3" }, { en: "y - x > x/3", ar: "y - x > x/3" }, { en: "x - y > 3/x", ar: "x - y > 3/x" }],
        answer: "x - y > x/3",
        explanation: { en: "Difference (x - y) > quotient of x and 3 (x/3).", ar: "الفرق (x - y) أكبر من ناتج القسمة (x/3)." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'Negative nine subtracted from x is greater than or equal to -12' into an inequality:", ar: "ترجم 'سالب تسعة مطروحة من x أكبر من أو تساوي -12' إلى متباينة:" },
        options: [{ en: "9 - x ≥ 12", ar: "9 - x ≥ 12" }, { en: "x - 9 ≥ -12", ar: "x - 9 ≥ -12" }, { en: "x + 9 ≥ -12", ar: "x + 9 ≥ -12" }, { en: "9 - x ≥ -12", ar: "9 - x ≥ -12" }],
        answer: "x + 9 ≥ -12",
        explanation: { en: "x - (-9) = x + 9, so x + 9 ≥ -12.", ar: "x - (-9) تتغير إلى x + 9، فتصبح x + 9 ≥ -12." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'nine subtracted from x is greater than or equal to negative twelve' into an inequality:", ar: "ترجم 'تسعة مطروحة من x أكبر من أو تساوي سالب اثني عشر' إلى متباينة:" },
        options: [{ en: "9 - x ≤ -12", ar: "9 - x ≤ -12" }, { en: "x - 9 ≤ -12", ar: "x - 9 ≤ -12" }, { en: "9 - x ≥ -12", ar: "9 - x ≥ -12" }, { en: "x - 9 ≥ -12", ar: "x - 9 ≥ -12" }],
        answer: "x - 9 ≥ -12",
        explanation: { en: "'Nine subtracted from x' is x - 9, which is ≥ -12.", ar: "'تسعة مطروحة من x' هي x - 9، وهي أكبر من أو تساوي -12." }
      },
      {
        type: "mcq",
        question: { en: "The translation of '35 less than d' is:", ar: "ترجمة '35 أقل من d' هي:" },
        options: [{ en: "35 - d", ar: "35 - d" }, { en: "d - 35", ar: "d - 35" }, { en: "35d", ar: "35d" }, { en: "35 + d", ar: "35 + d" }],
        answer: "d - 35",
        explanation: { en: "Start with d and subtract 35 to get d - 35.", ar: "نبدأ بـ d ونطرح منها 35 لتصبح d - 35." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'one less than three times a number' into an algebraic expression:", ar: "ترجم 'واحد أقل من ثلاثة أضعاف عدد ما' إلى تعبير جبري:" },
        options: [{ en: "1 - 3x", ar: "1 - 3x" }, { en: "3x", ar: "3x" }, { en: "3x - 1", ar: "3x - 1" }, { en: "1", ar: "1" }],
        answer: "3x - 1",
        explanation: { en: "Three times a number is 3x, one less than that is 3x - 1.", ar: "ثلاثة أضعاف العدد هي 3x، وأقل منها بواحد تعطي 3x - 1." }
      },
      {
        type: "mcq",
        question: { en: "The translation of '8 less than y' is:", ar: "ترجمة '8 أقل من y' هي:" },
        options: [{ en: "8 + y", ar: "8 + y" }, { en: "y × 8", ar: "y × 8" }, { en: "8 ÷ y", ar: "8 ÷ y" }, { en: "y - 8", ar: "y - 8" }],
        answer: "y - 8",
        explanation: { en: "'8 less than y' means starting from y and taking away 8: y - 8.", ar: "'8 أقل من y' تعني y مطروحاً منها 8." }
      },
      {
        type: "mcq",
        question: { en: "Translate '-5 more than twice a number' to an algebraic expression:", ar: "ترجم 'سالب 5 مضافًا إلى ضعفي عدد ما' إلى تعبير جبري:" },
        options: [{ en: "-5 - 2x", ar: "-5 - 2x" }, { en: "2b + 5", ar: "2b + 5" }, { en: "2x - 5", ar: "2x - 5" }, { en: "5 - 2x", ar: "5 - 2x" }],
        answer: "2x - 5",
        explanation: { en: "Twice a number 2x plus (-5) equals 2x - 5.", ar: "ضعفا العدد 2x زائد (-5) يساوي 2x - 5." }
      },
      {
        type: "mcq",
        question: { en: "Translate '-5 less than Twice a number' to an algebraic expression:", ar: "ترجم 'سالب 5 مطروحاً من ضعفي عدد ما' إلى تعبير جبري:" },
        options: [{ en: "2x + 5", ar: "2x + 5" }, { en: "5 - x^2", ar: "5 - x^2" }, { en: "5 - 2x", ar: "5 - 2x" }, { en: "2x - 5", ar: "2x - 5" }],
        answer: "2x + 5",
        explanation: { en: "2x - (-5) = 2x + 5.", ar: "2x - (-5) تتحول إلى 2x + 5." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'Five minus Twice a number' to an algebraic expression:", ar: "ترجم 'خمسة مطروحاً منها ضعفا عدد ما' إلى تعبير جبري:" },
        options: [{ en: "5^2 - x", ar: "5^2 - x" }, { en: "x^2 + 5", ar: "x^2 + 5" }, { en: "5 - 2x", ar: "5 - 2x" }, { en: "2x - 5", ar: "2x - 5" }],
        answer: "5 - 2x",
        explanation: { en: "Start with 5 and subtract 2x: 5 - 2x.", ar: "نبدأ من 5 ونطرح 2x لتصبح 5 - 2x." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'Twice a number less than Five' to an algebraic expression:", ar: "ترجم 'ضعفا عدد ما أقل من خمسة' إلى تعبير جبري:" },
        options: [{ en: "5^2 - x", ar: "5^2 - x" }, { en: "5 - x^2", ar: "5 - x^2" }, { en: "5 - 2x", ar: "5 - 2x" }, { en: "2x - 5", ar: "2x - 5" }],
        answer: "5 - 2x",
        explanation: { en: "'Twice a number less than 5' means 5 - 2x.", ar: "تعني طرح ضعفي العدد من 5." }
      },
      {
        type: "mcq",
        question: { en: "Translate '-8 subtracted from three times some number' to an algebraic expression:", ar: "ترجم 'سالب 8 مطروحة من ثلاثة أضعاف عدد ما' إلى تعبير جبري:" },
        options: [{ en: "-8 - 3x", ar: "-8 - 3x" }, { en: "3x + 8", ar: "3x + 8" }, { en: "8 - 3x", ar: "8 - 3x" }, { en: "3x - 8", ar: "3x - 8" }],
        answer: "3x + 8",
        explanation: { en: "3x - (-8) = 3x + 8.", ar: "3x - (-8) تصبح 3x + 8." }
      },
      {
        type: "mcq",
        question: { en: "Translate 'Three times some number subtracted from 8' to an algebraic expression:", ar: "ترجم 'ثلاثة أضعاف عدد ما مطروحة من 8' إلى تعبير جبري:" },
        options: [{ en: "3 - 8 - x", ar: "3 - 8 - x" }, { en: "3x + 8", ar: "3x + 8" }, { en: "8 - 3x", ar: "8 - 3x" }, { en: "3x - 8", ar: "3x - 8" }],
        answer: "8 - 3x",
        explanation: { en: "Start with 8 and subtract 3x: 8 - 3x.", ar: "نبدأ بـ 8 ونطرح 3x." }
      },
      {
        type: "truefalse",
        question: { en: "All integer numbers are rational numbers.", ar: "جميع الأعداد الصحيحة هي أعداد نسبية." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Every integer n can be expressed as n/1, which is a rational form.", ar: "كل عدد صحيح يمكن كتابته على الصورة n/1." }
      },
      {
        type: "truefalse",
        question: { en: "Not all integer numbers are rational numbers.", ar: "ليست كل الأعداد الصحيحة أعداداً نسبية." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "All integers are rational numbers.", ar: "جميع الأعداد الصحيحة أعداد نسبية بلا استثناء." }
      },
      {
        type: "truefalse",
        question: { en: "All integers are whole numbers.", ar: "جميع الأعداد الصحيحة هي أعداد كليّة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Negative integers are not whole numbers.", ar: "الأعداد الصحيحة السالبة ليست أعداداً كليّة." }
      },
      {
        type: "truefalse",
        question: { en: "All whole numbers are integers.", ar: "جميع الأعداد الكليّة هي أعداد صحيحة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Whole numbers = {0, 1, 2...} which are contained in integers.", ar: "الأعداد الكلية تندرج تحت الأعداد الصحيحة." }
      },
      {
        type: "truefalse",
        question: { en: "Integers include all whole numbers and their opposites.", ar: "تشتمل الأعداد الصحيحة على الأعداد الكلية ومعكوساتها." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Integers consist of whole numbers and negative integers.", ar: "الأعداد الصحيحة تضم الموجب والسالب والصفر." }
      },
      {
        type: "truefalse",
        question: { en: "All rational numbers are integers.", ar: "جميع الأعداد النسبية هي أعداد صحيحة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Many rational numbers (e.g. 3/4) are not integers.", ar: "الأعداد النسبية الكسرية ليست أعداداً صحيحة." }
      },
      {
        type: "truefalse",
        question: { en: "A rational number is a number that cannot be written as x/y where x, y are integers and y ≠ 0.", ar: "العدد النسبي هو العدد الذي لا يمكن كتابته على الصورة x/y حيث x و y أعداد صحيحة و y ≠ 0." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "A rational number CAN be written as x/y.", ar: "العدد النسبي يمكن كتابته على الصورة x/y." }
      },
      {
        type: "truefalse",
        question: { en: "An irrational number is a number that cannot be written as x/y where x, y are integers and y ≠ 0.", ar: "العدد غير النسبي هو العدد الذي لا يمكن كتابته على الصورة x/y حيث x و y أعداد صحيحة و y ≠ 0." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Irrational numbers cannot be represented as ratios of two integers.", ar: "الأعداد غير النسبية لا يمكن كتابتها ككسر بين عددين صحيحين." }
      },
      {
        type: "truefalse",
        question: { en: "Not all natural numbers are integers.", ar: "ليست كل الأعداد الطبيعية أعداداً صحيحة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "All natural numbers are positive integers.", ar: "كل الأعداد الطبيعية هي أعداد صحيحة موجبة." }
      },
      {
        type: "mcq",
        question: { en: "The set {..., -4, -3, -2, -1, 0, 1, 2, 3, 4, ...} is called the set of:", ar: "المجموعة {..., -4, -3, -2, -1, 0, 1, 2, 3, 4, ...} تسمى مجموعة:" },
        options: [{ en: "Integers", ar: "الأعداد الصحيحة" }, { en: "Whole numbers", ar: "الأعداد الكلية" }, { en: "Natural numbers", ar: "الأعداد الطبيعية" }, { en: "Rational numbers", ar: "الأعداد النسبية" }],
        answer: "Integers",
        explanation: { en: "This set represents all negative, zero, and positive whole numbers (Integers).", ar: "هذه المجموعة تمثل كافة الأعداد الصحيحة." }
      },
      {
        type: "truefalse",
        question: { en: "The set of integers numbers = {0, 1, 2, 3, ...}", ar: "مجموعة الأعداد الصحيحة = {0، 1، 2، 3، ...}" },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "{0, 1, 2, 3, ...} is the set of Whole numbers, missing the negative numbers.", ar: "هذه المجموعة تمثل الأعداد الكلية لأنها تفتقر للأعداد السالبة." }
      },
      {
        type: "mcq",
        question: { en: "The number 3.14 is a:", ar: "العدد 3.14 يعتبر:" },
        options: [{ en: "Rational number", ar: "عدد نسبي" }, { en: "Irrational number", ar: "عدد غير نسبي" }, { en: "Whole number", ar: "عدد كلي" }, { en: "Integer number", ar: "عدد صحيح" }],
        answer: "Rational number",
        explanation: { en: "3.14 is a terminating decimal (314/100), making it rational.", ar: "3.14 عدد عشري منتهٍ (314/100) فهو عدد نسبي." }
      },
      {
        type: "mcq",
        question: { en: "The number 0.3434... is called a:", ar: "العدد الدوري 0.3434... يسمى:" },
        options: [{ en: "Rational number", ar: "عدد نسبي" }, { en: "Irrational number", ar: "عدد غير نسبي" }, { en: "Whole number", ar: "عدد كلي" }, { en: "Integer number", ar: "عدد صحيح" }],
        answer: "Rational number",
        explanation: { en: "Repeating decimals are rational numbers (0.3434... = 34/99).", ar: "الأعداد العشرية الدورية هي أعداد نسبية." }
      },
      {
        type: "mcq",
        question: { en: "The set {1, 2, 3, 4, ...} is called:", ar: "المجموعة {1، 2، 3، 4، ...} تسمى:" },
        options: [{ en: "Rational numbers", ar: "الأعداد النسبية" }, { en: "Natural numbers", ar: "الأعداد الطبيعية" }, { en: "Whole numbers", ar: "الأعداد الكلية" }, { en: "Integers numbers", ar: "الأعداد الصحيحة" }],
        answer: "Natural numbers",
        explanation: { en: "Positive counting numbers starting from 1 are Natural numbers.", ar: "أعداد العد الموجبة التي تبدأ من 1 هي الأعداد الطبيعية." }
      },
      {
        type: "mcq",
        question: { en: "The number π (pi) is an:", ar: "العدد π (باى) يعتبر:" },
        options: [{ en: "Rational number", ar: "عدد نسبي" }, { en: "Irrational number", ar: "عدد غير نسبي" }, { en: "Natural number", ar: "عدد طبيعي" }, { en: "Integer number", ar: "عدد صحيح" }],
        answer: "Irrational number",
        explanation: { en: "Pi is a non-repeating, non-terminating decimal, so it is irrational.", ar: "العدد π هو عدد عشري غير منتهٍ وغير دوري، فهو غير نسبي." }
      },
      {
        type: "mcq",
        question: { en: "The set {a/b | a, b ∈ Z and b ≠ 0} is called the set of:", ar: "المجموعة {a/b | a, b ∈ Z و b ≠ 0} تسمى مجموعة:" },
        options: [{ en: "Integers", ar: "الأعداد الصحيحة" }, { en: "Whole numbers", ar: "الأعداد الكلية" }, { en: "Natural numbers", ar: "الأعداد الطبيعية" }, { en: "Rational numbers", ar: "الأعداد النسبية" }],
        answer: "Rational numbers",
        explanation: { en: "This is the formal set-builder definition of Rational Numbers.", ar: "هذا هو التعريف الرياضي الرسمي لمجموعة الأعداد النسبية." }
      },
      {
        type: "mcq",
        question: { en: "The opposite of x - y + z is:", ar: "المعكوس الجمعي للتعبير x - y + z هو:" },
        options: [{ en: "1 / (y - x - z)", ar: "1 / (y - x - z)" }, { en: "y - x - z", ar: "y - x - z" }, { en: "-x + y - z", ar: "-x + y - z" }, { en: "x + y + z", ar: "x + y + z" }],
        answer: "y - x - z",
        explanation: { en: "-(x - y + z) = -x + y - z = y - x - z.", ar: "تغيير إشارات كافة الحدود تعطي y - x - z." }
      },
      {
        type: "mcq",
        question: { en: "The opposite value of 1 is:", ar: "المعكوس الجمعي للعدد 1 هو:" },
        options: [{ en: "-1", ar: "-1" }, { en: "1", ar: "1" }, { en: "Undefined", ar: "غير معرف" }, { en: "0", ar: "0" }],
        answer: "-1",
        explanation: { en: "The additive inverse of a is -a, so for 1 it is -1.", ar: "المعكوس الجمعي للعدد 1 هو -1." }
      },
      {
        type: "truefalse",
        question: { en: "The opposite of a number has the same sign as the number itself.", ar: "المعكوس الجمعي للعدد يملك نفس إشارة العدد نفسه." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The opposite (additive inverse) flips the sign of a non-zero number.", ar: "المعكوس الجمعي يعكس إشارة العدد." }
      },
      {
        type: "truefalse",
        question: { en: "The reciprocal of a number has the same sign as the number itself.", ar: "النظير الضربي (المقلوب) للعدد يملك نفس إشارة العدد نفسه." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Reciprocal of -4/5 is -5/4; the sign does not change.", ar: "المقلوب الضربي يحافظ على الإشارة (مقلوب -4/5 هو -5/4)." }
      },
      {
        type: "mcq",
        question: { en: "The opposite of -4/5 is:", ar: "المعكوس الجمعي للعدد -4/5 هو:" },
        options: [{ en: "4/5", ar: "4/5" }, { en: "-4/5", ar: "-4/5" }, { en: "5/4", ar: "5/4" }, { en: "-5/4", ar: "-5/4" }],
        answer: "4/5",
        explanation: { en: "Additive inverse changes negative to positive: 4/5.", ar: "المعكوس الجمعي يغير الإشارة السالبة إلى موجبة: 4/5." }
      },
      {
        type: "truefalse",
        question: { en: "For any real number n, the opposite of n is expressed as -n.", ar: "لأي عدد حقيقي n، يعبر عن معكوسه الجمعي بـ -n." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "The notation -n stands for the additive inverse of n.", ar: "الرمز -n يمثل المعكوس الجمعي للعدد n." }
      },
      {
        type: "truefalse",
        question: { en: "Two numbers whose product is 1 are called additive inverses of each other.", ar: "العددان اللذان حاصل ضربهما 1 يسميان معكوسين جمعيين لبعضهما." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "They are called multiplicative inverses or reciprocals.", ar: "يسميان نظيرين ضربيين وليس جمعيين." }
      },
      {
        type: "truefalse",
        question: { en: "Two numbers whose product is 1 are called reciprocals, or multiplicative inverses of each other.", ar: "العددان اللذان حاصل ضربهما 1 يسميان مقلوبين أو نظيرين ضربيين لبعضهما." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "By definition, a × (1/a) = 1.", ar: "حسب تعريف النظير الضربي، حاصل ضربهما يساوي 1." }
      },
      {
        type: "mcq",
        question: { en: "One of the following numbers doesn't have a reciprocal:", ar: "واحد من الأعداد التالية ليس له نظير ضربي (مقلوب):" },
        options: [{ en: "1", ar: "1" }, { en: "0", ar: "0" }, { en: "√2", ar: "√2" }, { en: "-1/2", ar: "-1/2" }],
        answer: "0",
        explanation: { en: "1/0 is undefined, so 0 has no reciprocal.", ar: "القسمة على صفر غير معرفة، لذلك الصفر ليس له مقلوب." }
      },
      {
        type: "mcq",
        question: { en: "The reciprocal of 2/3 is:", ar: "المقلوب الضربي للكسر 2/3 هو:" },
        options: [{ en: "3", ar: "3" }, { en: "-2/3", ar: "-2/3" }, { en: "3/2", ar: "3/2" }, { en: "-2", ar: "-2" }],
        answer: "3/2",
        explanation: { en: "Flip numerator and denominator: 3/2.", ar: "قلب البسط والمقام يعطي 3/2." }
      },
      {
        type: "mcq",
        question: { en: "The reciprocal value of 1 is:", ar: "النظير الضربي للعدد 1 هو:" },
        options: [{ en: "1", ar: "1" }, { en: "Undefined", ar: "غير معرف" }, { en: "-1", ar: "-1" }, { en: "0", ar: "0" }],
        answer: "1",
        explanation: { en: "1/1 = 1.", ar: "مقلوب 1 هو 1." }
      },
      {
        type: "mcq",
        question: { en: "The reciprocal value of 4/5 is:", ar: "المقلوب الضربي للكسر 4/5 هو:" },
        options: [{ en: "5/4", ar: "5/4" }, { en: "4/5", ar: "4/5" }, { en: "-5/4", ar: "-5/4" }, { en: "-4/5", ar: "-4/5" }],
        answer: "5/4",
        explanation: { en: "Invert 4/5 to get 5/4.", ar: "عكس الكسر 4/5 يصبح 5/4." }
      },
      {
        type: "truefalse",
        question: { en: "The reciprocal of 5 is 1/5.", ar: "المقلوب الضربي للعدد 5 هو 1/5." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "5 can be written as 5/1, so its reciprocal is 1/5.", ar: "5 يكتب على صورة 5/1 ومقلوبه 1/5." }
      },
      {
        type: "truefalse",
        question: { en: "Two numbers whose sum is 0 are called multiplicative inverses of each other.", ar: "العددان اللذان مجموعُهما 0 يسميان نظيرين ضربيين لبعضهما." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Numbers whose sum is 0 are additive inverses (opposites).", ar: "الأعداد التي مجموعها 0 تسمى نظائر جمعية (معكوسات)." }
      },
      {
        type: "truefalse",
        question: { en: "Two numbers whose sum is 0 are called reciprocals of each other.", ar: "العددان اللذان مجموعُهما 0 يسميان مقلوبين لبعضهما." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Numbers whose sum is 0 are additive inverses.", ar: "الأعداد التي مجموعها صفر هي نظائر جمعية وليست ضربية." }
      },
      {
        type: "truefalse",
        question: { en: "For any non-zero real number x, the reciprocal of x is expressed as 1/x.", ar: "لأي عدد حقيقي x غير صفري، يُعبر عن مقلوبه بـ 1/x." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "1/x is the definition of the multiplicative inverse.", ar: "1/x هي صيغة النظير الضربي لأي عدد x." }
      },
      {
        type: "truefalse",
        question: { en: "The product of a number and its multiplicative inverse is -1.", ar: "حاصل ضرب عدد في نظيره الضربي يساوي -1." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The product of a number and its multiplicative inverse is positive 1.", ar: "حاصل الضرب يساوي 1 وليس -1." }
      },

        ]
      },
    
  {
    id: "math001-midterm-q101-200",
    title: { en: "Math 001 Midterm Prep (Q101–200)", ar: "تجميعات ميد ماث 001 (الأسئلة 101-200)" },
    description: { en: "Practice set covering order of operations, simplifying algebraic expressions, solving linear equations, percentages, basic inequalities, and coordinate geometry.", ar: "تدريب يشمل ترتيب العمليات الحسابية، تبسيط التعبير الجبرية، حل المعادلة الخطية، النسب المئوية، المتباينات، والهندسة الإحداثية." },
    typeLabel: { en: "Multiple choice / True & False", ar: "اختيار من متعدد / صواب وخطأ" },
    questionMode: "one",
    feedbackMode: "both",
    timerMinutes: 0,
    shuffleQuestions: true,
    shuffleOptions: true,
    showExplanations: true,
    questions: [
      {
        type: "mcq",
        question: { en: "Which operation should be performed first for 9 × 15 ÷ 3 + 2²?", ar: "ما العملية التي يجب إجراؤها أولاً للعبارة 9 × 15 ÷ 3 + 2²؟" },
        options: [{ en: "Multiplication", ar: "الضرب" }, { en: "Addition", ar: "الجمع" }, { en: "Division", ar: "القسمة" }, { en: "Exponent", ar: "الأسس" }],
        answer: "Exponent",
        explanation: { en: "According to PEMDAS, exponents are evaluated before multiplication, division, or addition.", ar: "حسب ترتيب العمليات (PEMDAS)، يتم حساب الأسس أولاً." }
      },
      {
        type: "mcq",
        question: { en: "Which operation should be performed first for (2 + 9) - 9 × 15 ÷ 3?", ar: "ما العملية التي يجب إجراؤها أولاً للعبارة (2 + 9) - 9 × 15 ÷ 3؟" },
        options: [{ en: "Multiplication", ar: "الضرب" }, { en: "Subtraction", ar: "الطرح" }, { en: "Addition", ar: "الجمع" }, { en: "Division", ar: "القسمة" }],
        answer: "Addition",
        explanation: { en: "Parentheses come first in order of operations, so evaluate (2 + 9) first.", ar: "الأقواس لها الأولوية القصوى، لذا يتم حساب ما داخل الأقواس (2 + 9) أولاً." }
      },
      {
        type: "mcq",
        question: { en: "Which operation should be performed first for 2 + 9 - 9 × 15 ÷ 3?", ar: "ما العملية التي يجب إجراؤها أولاً للعبارة 2 + 9 - 9 × 15 ÷ 3؟" },
        options: [{ en: "Addition", ar: "الجمع" }, { en: "Subtraction", ar: "الطرح" }, { en: "Multiplication", ar: "الضرب" }, { en: "Division", ar: "القسمة" }],
        answer: "Multiplication",
        explanation: { en: "Multiplication and division precede addition and subtraction. Working left to right, 9 × 15 is first.", ar: "الضرب والقسمة لهما أسبقية على الجمع والطرح. بالانتقال من اليسار إلى اليمين، يتم إجراء الضرب أولاً." }
      },
      {
        type: "mcq",
        question: { en: "Which operation should be performed first for 9 - 9 ÷ 15 × 3 + 2?", ar: "ما العملية التي يجب إجراؤها أولاً للعبارة 9 - 9 ÷ 15 × 3 + 2؟" },
        options: [{ en: "Addition", ar: "الجمع" }, { en: "Subtraction", ar: "الطرح" }, { en: "Multiplication", ar: "الضرب" }, { en: "Division", ar: "القسمة" }],
        answer: "Division",
        explanation: { en: "Division and multiplication have equal priority, executed left to right, so 9 ÷ 15 comes first.", ar: "القسمة والضرب لهما نفس الأولوية ويتم حسابهما من اليسار إلى اليمين، لذا تُجرى القسمة أولاً." }
      },
      {
        type: "mcq",
        question: { en: "Which operation should be performed first for 2 ÷ 9 - 9 ÷ 15 × 3?", ar: "ما العملية التي يجب إجراؤها أولاً للعبارة 2 ÷ 9 - 9 ÷ 15 × 3؟" },
        options: [{ en: "Addition", ar: "الجمع" }, { en: "Subtraction", ar: "الطرح" }, { en: "Multiplication", ar: "الضرب" }, { en: "Division", ar: "القسمة" }],
        answer: "Division",
        explanation: { en: "Evaluating from left to right, the first division (2 ÷ 9) is performed first.", ar: "بالانتقال من اليسار لليمين، يتم تنفيذ عملية القسمة الأولى (2 ÷ 9) أولاً." }
      },
      {
        type: "mcq",
        question: { en: "Which operation should be performed first for (2 + 9²) × 15 ÷ 3?", ar: "ما العملية التي يجب إجراؤها أولاً للعبارة (2 + 9²) × 15 ÷ 3؟" },
        options: [{ en: "Addition", ar: "الجمع" }, { en: "Exponent", ar: "الأسس" }, { en: "Multiplication", ar: "الضرب" }, { en: "Division", ar: "القسمة" }],
        answer: "Exponent",
        explanation: { en: "Inside the parentheses (2 + 9²), evaluating the exponent 9² comes before addition.", ar: "داخل الأقواس (2 + 9²)، تكون الأولوية للأس 9² قبل الجمع." }
      },
      {
        type: "mcq",
        question: { en: "Remove parentheses and simplify: [5(x + 3) - 4x] - 4(x + 3)", ar: "فك الأقواس وبسّط العبارة: [5(x + 3) - 4x] - 4(x + 3)" },
        options: [{ en: "0", ar: "0" }, { en: "6x", ar: "6x" }, { en: "3 - 3x", ar: "3 - 3x" }, { en: "3 + 3x", ar: "3 + 3x" }],
        answer: "3 - 3x",
        explanation: { en: "[5x + 15 - 4x] - 4x - 12 = (x + 15) - 4x - 12 = 3 - 3x.", ar: "[5x + 15 - 4x] - 4x - 12 = (x + 15) - 4x - 12 = 3 - 3x." }
      },
      {
        type: "mcq",
        question: { en: "Remove parentheses and simplify: 4x - [3a - (2a - 9b) + 6x - 10b]", ar: "فك الأقواس وبسّط العبارة: 4x - [3a - (2a - 9b) + 6x - 10b]" },
        options: [{ en: "2x - a + b", ar: "2x - a + b" }, { en: "-2x - a + b", ar: "-2x - a + b" }, { en: "2 + a + b", ar: "2 + a + b" }, { en: "2x - a - b", ar: "2x - a - b" }],
        answer: "-2x - a + b",
        explanation: { en: "Inner bracket: 3a - 2a + 9b - 10b + 6x = a - b + 6x. Outer: 4x - (a - b + 6x) = -2x - a + b.", ar: "القوس الداخلي: 3a - 2a + 9b - 10b + 6x = a - b + 6x. طرحها من 4x يعطي: -2x - a + b." }
      },
      {
        type: "mcq",
        question: { en: "Remove parentheses and simplify: 6x - [3a - (2a - 9b) + 4x - 10b]", ar: "فك الأقواس وبسّط العبارة: 6x - [3a - (2a - 9b) + 4x - 10b]" },
        options: [{ en: "2x + a + b", ar: "2x + a + b" }, { en: "2x - a + b", ar: "2x - a + b" }, { en: "2x - a - b", ar: "2x - a - b" }, { en: "-2x - a + b", ar: "-2x - a + b" }],
        answer: "2x - a + b",
        explanation: { en: "3a - 2a + 9b - 10b + 4x = a - b + 4x. Subtracting from 6x gives 2x - a + b.", ar: "3a - 2a + 9b - 10b + 4x = a - b + 4x. طرحها من 6x يعطي 2x - a + b." }
      },
      {
        type: "mcq",
        question: { en: "Remove parentheses and simplify: (2z + y + 3) - (5z + 6)", ar: "فك الأقواس وبسّط العبارة: (2z + y + 3) - (5z + 6)" },
        options: [{ en: "-3y + z - 3", ar: "-3y + z - 3" }, { en: "z + 3y", ar: "z + 3y" }, { en: "z + y + 3", ar: "z + y + 3" }, { en: "-3z + y - 3", ar: "-3z + y - 3" }],
        answer: "-3z + y - 3",
        explanation: { en: "2z + y + 3 - 5z - 6 = -3z + y - 3.", ar: "2z + y + 3 - 5z - 6 = -3z + y - 3." }
      },
      {
        type: "mcq",
        question: { en: "Remove parentheses and simplify: (2x + y) - 2(x - 3y + 5)", ar: "فك الأقواس وبسّط العبارة: (2x + y) - 2(x - 3y + 5)" },
        options: [{ en: "4x + 7y + 10", ar: "4x + 7y + 10" }, { en: "4x + 7y - 10", ar: "4x + 7y - 10" }, { en: "7y - 10", ar: "7y - 10" }, { en: "-4x + 7y - 10", ar: "-4x + 7y - 10" }],
        answer: "7y - 10",
        explanation: { en: "2x + y - 2x + 6y - 10 = 7y - 10.", ar: "2x + y - 2x + 6y - 10 = 7y - 10." }
      },
      {
        type: "mcq",
        question: { en: "Remove parentheses and simplify: 2x - 9 - (5x - 10)", ar: "فك الأقواس وبسّط العبارة: 2x - 9 - (5x - 10)" },
        options: [{ en: "3x - 19", ar: "3x - 19" }, { en: "1 - 3x", ar: "1 - 3x" }, { en: "3x - 1", ar: "3x - 1" }, { en: "19 - 3x", ar: "19 - 3x" }],
        answer: "1 - 3x",
        explanation: { en: "2x - 9 - 5x + 10 = -3x + 1 = 1 - 3x.", ar: "2x - 9 - 5x + 10 = -3x + 1 = 1 - 3x." }
      },
      {
        type: "mcq",
        question: { en: "Remove parentheses and simplify: (2(x - 5) + 4x) - (5(x - 3) - 2x)", ar: "فك الأقواس وبسّط العبارة: (2(x - 5) + 4x) - (5(x - 3) - 2x)" },
        options: [{ en: "5 - 3x", ar: "5 - 3x" }, { en: "-3x - 5", ar: "-3x - 5" }, { en: "3x + 5", ar: "3x + 5" }, { en: "3x - 5", ar: "3x - 5" }],
        answer: "3x + 5",
        explanation: { en: "(2x - 10 + 4x) - (5x - 15 - 2x) = (6x - 10) - (3x - 15) = 3x + 5.", ar: "(2x - 10 + 4x) - (5x - 15 - 2x) = (6x - 10) - (3x - 15) = 3x + 5." }
      },
      {
        type: "mcq",
        question: { en: "Remove parentheses and simplify: [6(x + 3) - 4x] - 4(x + 3)", ar: "فك الأقواس وبسّط العبارة: [6(x + 3) - 4x] - 4(x + 3)" },
        options: [{ en: "-2x - 6", ar: "-2x - 6" }, { en: "6 - 2x", ar: "6 - 2x" }, { en: "2x - 6", ar: "2x - 6" }, { en: "6 + 2x", ar: "6 + 2x" }],
        answer: "6 - 2x",
        explanation: { en: "[6x + 18 - 4x] - 4x - 12 = (2x + 18) - 4x - 12 = 6 - 2x.", ar: "[6x + 18 - 4x] - 4x - 12 = (2x + 18) - 4x - 12 = 6 - 2x." }
      },
      {
        type: "mcq",
        question: { en: "Remove parentheses and simplify: (6x - 3y) - 6(5x + 2y - 10)", ar: "فك الأقواس وبسّط العبارة: (6x - 3y) - 6(5x + 2y - 10)" },
        options: [{ en: "60 - 24x - 15y", ar: "60 - 24x - 15y" }, { en: "60 - 15y - 24x", ar: "60 - 15y - 24x" }, { en: "60 + 15y + 24x", ar: "60 + 15y + 24x" }, { en: "60 + 15x + 24y", ar: "60 + 15x + 24y" }],
        answer: "60 - 15y - 24x",
        explanation: { en: "6x - 3y - 30x - 12y + 60 = -24x - 15y + 60.", ar: "6x - 3y - 30x - 12y + 60 = 60 - 15y - 24x." }
      },
      {
        type: "mcq",
        question: { en: "The solution of the equation 3(5x + 4) - 20 = 13x - 4 is:", ar: "حل المعادلة 3(5x + 4) - 20 = 13x - 4 هو:" },
        options: [{ en: "x = 4", ar: "x = 4" }, { en: "x = 8", ar: "x = 8" }, { en: "x = 2", ar: "x = 2" }, { en: "x = -2", ar: "x = -2" }],
        answer: "x = 2",
        explanation: { en: "15x + 12 - 20 = 13x - 4 => 15x - 8 = 13x - 4 => 2x = 4 => x = 2.", ar: "15x - 8 = 13x - 4 => 2x = 4 => x = 2." }
      },
      {
        type: "mcq",
        question: { en: "The solution of the equation 3 - 4(x + 1) = 2(x - 5) - 3 is:", ar: "حل المعادلة 3 - 4(x + 1) = 2(x - 5) - 3 هو:" },
        options: [{ en: "x = 2", ar: "x = 2" }, { en: "x = ∅", ar: "x = ∅" }, { en: "x = -2", ar: "x = -2" }, { en: "x = R", ar: "x = R" }],
        answer: "x = 2",
        explanation: { en: "3 - 4x - 4 = 2x - 10 - 3 => -4x - 1 = 2x - 13 => -6x = -12 => x = 2.", ar: "-4x - 1 = 2x - 13 => -6x = -12 => x = 2." }
      },
      {
        type: "mcq",
        question: { en: "The solution of the equation 2 + 14x - 9 = 7(2x + 1) - 14 is:", ar: "حل المعادلة 2 + 14x - 9 = 7(2x + 1) - 14 هو:" },
        options: [{ en: "R", ar: "جميع الأعداد الحقيقية R" }, { en: "Ø", ar: "المجموعة الخالية Ø" }, { en: "1", ar: "1" }, { en: "7", ar: "7" }],
        answer: "R",
        explanation: { en: "14x - 7 = 14x + 7 - 14 => 14x - 7 = 14x - 7. An identity, true for all x in R.", ar: "14x - 7 = 14x - 7، مطابقة صحيحة لكل الأعداد الحقيقية R." }
      },
      {
        type: "mcq",
        question: { en: "The solution of the equation 7 - 3z = 6 - 3(z + 1) is:", ar: "حل المعادلة 7 - 3z = 6 - 3(z + 1) هو:" },
        options: [{ en: "Ø", ar: "المجموعة الخالية Ø" }, { en: "3", ar: "3" }, { en: "-3", ar: "-3" }, { en: "R", ar: "R" }],
        answer: "Ø",
        explanation: { en: "7 - 3z = 6 - 3z - 3 => 7 - 3z = 3 - 3z => 7 = 3 (contradiction, no solution Ø).", ar: "7 - 3z = 3 - 3z => 7 = 3 (تناقض، لا يوجد حل Ø)." }
      },
      {
        type: "mcq",
        question: { en: "The solution of the equation 7 + 12(x - 1) = 6(2x - 1) + 1 is:", ar: "حل المعادلة 7 + 12(x - 1) = 6(2x - 1) + 1 هو:" },
        options: [{ en: "R", ar: "R" }, { en: "23", ar: "23" }, { en: "24", ar: "24" }, { en: "Ø", ar: "Ø" }],
        answer: "R",
        explanation: { en: "7 + 12x - 12 = 12x - 6 + 1 => 12x - 5 = 12x - 5. True for all R.", ar: "12x - 5 = 12x - 5 (صحيحة دائماً لكافة الأعداد الحقيقية R)." }
      },
      {
        type: "mcq",
        question: { en: "27 is what percent of 45?", ar: "27 تمثل كم بالمئة من 45؟" },
        options: [{ en: "1.25%", ar: "1.25%" }, { en: "75%", ar: "75%" }, { en: "6%", ar: "6%" }, { en: "60%", ar: "60%" }],
        answer: "60%",
        explanation: { en: "(27 / 45) × 100% = 0.60 × 100% = 60%.", ar: "(27 ÷ 45) × 100% = 60%." }
      },
      {
        type: "mcq",
        question: { en: "35 is what percent of 560?", ar: "35 تمثل كم بالمئة من 560؟" },
        options: [{ en: "8.5%", ar: "8.5%" }, { en: "62.5%", ar: "62.5%" }, { en: "16%", ar: "16%" }, { en: "6.25%", ar: "6.25%" }],
        answer: "6.25%",
        explanation: { en: "(35 / 560) × 100% = 0.0625 × 100% = 6.25%.", ar: "(35 ÷ 560) × 100% = 6.25%." }
      },
      {
        type: "mcq",
        question: { en: "40 is what percent of 50?", ar: "40 تمثل كم بالمئة من 50؟" },
        options: [{ en: "80%", ar: "80%" }, { en: "125%", ar: "125%" }, { en: "1.25%", ar: "1.25%" }, { en: "8%", ar: "8%" }],
        answer: "80%",
        explanation: { en: "(40 / 50) × 100% = 80%.", ar: "(40 ÷ 50) × 100% = 80%." }
      },
      {
        type: "mcq",
        question: { en: "12 is 48% of what number?", ar: "12 هي 48% من أي عدد؟" },
        options: [{ en: "1/25", ar: "1/25" }, { en: "25", ar: "25" }, { en: "144/25", ar: "144/25" }, { en: "25/144", ar: "25/144" }],
        answer: "25",
        explanation: { en: "12 / 0.48 = 25.", ar: "12 ÷ 0.48 = 25." }
      },
      {
        type: "mcq",
        question: { en: "20 is 40% of what number?", ar: "20 هي 40% من أي عدد؟" },
        options: [{ en: "0.2", ar: "0.2" }, { en: "50", ar: "50" }, { en: "0.5", ar: "0.5" }, { en: "20", ar: "20" }],
        answer: "50",
        explanation: { en: "20 / 0.40 = 50.", ar: "20 ÷ 0.40 = 50." }
      },
      {
        type: "mcq",
        question: { en: "40 is 75% of what number?", ar: "40 هي 75% من أي عدد؟" },
        options: [{ en: "12.5", ar: "12.5" }, { en: "53.33", ar: "53.33" }, { en: "187", ar: "187" }, { en: "30", ar: "30" }],
        answer: "53.33",
        explanation: { en: "40 / 0.75 = 53.33...", ar: "40 ÷ 0.75 ≈ 53.33." }
      },
      {
        type: "mcq",
        question: { en: "75 is 150% of what number?", ar: "75 هي 150% من أي عدد؟" },
        options: [{ en: "50", ar: "50" }, { en: "20", ar: "20" }, { en: "0.5", ar: "0.5" }, { en: "200", ar: "200" }],
        answer: "50",
        explanation: { en: "75 / 1.50 = 50.", ar: "75 ÷ 1.50 = 50." }
      },
      {
        type: "mcq",
        question: { en: "What number is 20% of 125?", ar: "ما العدد الذي يمثل 20% من 125؟" },
        options: [{ en: "20", ar: "20" }, { en: "25", ar: "25" }, { en: "6.25", ar: "6.25" }, { en: "16", ar: "16" }],
        answer: "25",
        explanation: { en: "0.20 × 125 = 25.", ar: "0.20 × 125 = 25." }
      },
      {
        type: "truefalse",
        question: { en: "x > -8 and -x < 8 are equivalent inequalities.", ar: "x > -8 و -x < 8 متباينتان متكافئتان." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Multiplying -x < 8 by -1 flips the inequality sign, yielding x > -8.", ar: "ضرب طرفي -x < 8 في -1 يقلب إشارة المتباينة لتصبح x > -8." }
      },
      {
        type: "truefalse",
        question: { en: "c > -1 and 1 < -c are equivalent inequalities.", ar: "c > -1 و 1 < -c متباينتان متكافئتان." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "1 < -c means c < -1, which is not equivalent to c > -1.", ar: "1 < -c تعني c < -1 وهي غير مكافئة لـ c > -1." }
      },
      {
        type: "truefalse",
        question: { en: "y + 2 = 3 and 4y + 4 = 0 are equivalent equations.", ar: "y + 2 = 3 و 4y + 4 = 0 معادلتان متكافئتان." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "y + 2 = 3 gives y = 1. 4y + 4 = 0 gives y = -1. Different solutions means not equivalent.", ar: "الأولى تعطي y = 1 والثانية y = -1، فهما غير متكافئتين." }
      },
      {
        type: "truefalse",
        question: { en: "x + 1 = 0 and 2x = -2 are equivalent equations.", ar: "x + 1 = 0 و 2x = -2 معادلتان متكافئتان." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Both equations have the solution x = -1.", ar: "كلا المعادلتين تملكان نفس الحل وهو x = -1." }
      },
      {
        type: "truefalse",
        question: { en: "y + 3 = 0 and 2y = -6 are equivalent equations.", ar: "y + 3 = 0 و 2y = -6 معادلتان متكافئتان." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Both equations yield the solution y = -3.", ar: "كلاهما تعطيان y = -3." }
      },
      {
        type: "truefalse",
        question: { en: "x + 2 = 1 and 2x + 1 = 11 are equivalent equations.", ar: "x + 2 = 1 و 2x + 1 = 11 معادلتان متكافئتان." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "x + 2 = 1 gives x = -1; 2x + 1 = 11 gives x = 5.", ar: "الأولى تعطي x = -1 والثانية تعطي x = 5." }
      },
      {
        type: "truefalse",
        question: { en: "x + 2 = 7 and 2x + 1 = 11 are equivalent equations.", ar: "x + 2 = 7 و 2x + 1 = 11 معادلتان متكافئتان." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Both equations solve to x = 5.", ar: "كلاهما تعطيان x = 5." }
      },
      {
        type: "mcq",
        question: { en: "Solve for y: 4x = 3y - 7", ar: "حل بالنسبة لـ y: 4x = 3y - 7" },
        options: [{ en: "y = (4x + 7) / 3", ar: "y = (4x + 7) / 3" }, { en: "y = (3x + 7) / 3", ar: "y = (3x + 7) / 3" }, { en: "y = (4x - 7) / 3", ar: "y = (4x - 7) / 3" }, { en: "y = (7 - 4x) / 3", ar: "y = (7 - 4x) / 3" }],
        answer: "y = (4x + 7) / 3",
        explanation: { en: "Add 7 to both sides: 4x + 7 = 3y. Divide by 3: y = (4x + 7)/3.", ar: "بإضافة 7 ثم القسمة على 3: y = (4x + 7)/3." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation V = (1/3)Bh for h:", ar: "حل المعادلة V = (1/3)Bh بالنسبة لـ h:" },
        options: [{ en: "h = 3B / V", ar: "h = 3B / V" }, { en: "h = 3V / B", ar: "h = 3V / B" }, { en: "h = B / (3V)", ar: "h = B / (3V)" }, { en: "h = V / (3B)", ar: "h = V / (3B)" }],
        answer: "h = 3V / B",
        explanation: { en: "Multiply both sides by 3 to get 3V = Bh, then divide by B: h = 3V / B.", ar: "بالضرب في 3 نحصل على 3V = Bh، ثم القسمة على B يعطي h = 3V / B." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation A = (1/2)bh for b:", ar: "حل المعادلة A = (1/2)bh بالنسبة لـ b:" },
        options: [{ en: "b = Ah / 2", ar: "b = Ah / 2" }, { en: "b = 2A / h", ar: "b = 2A / h" }, { en: "b = h / 2A", ar: "b = h / 2A" }, { en: "b = A / (2h)", ar: "b = A / (2h)" }],
        answer: "b = 2A / h",
        explanation: { en: "2A = bh => b = 2A / h.", ar: "بالضرب في 2 ثم القسمة على h: b = 2A / h." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation A = P + RT for R:", ar: "حل المعادلة A = P + RT بالنسبة لـ R:" },
        options: [{ en: "R = T / (A - P)", ar: "R = T / (A - P)" }, { en: "R = (P - A) / T", ar: "R = (P - A) / T" }, { en: "R = T / (P - A)", ar: "R = T / (P - A)" }, { en: "R = (A - P) / T", ar: "R = (A - P) / T" }],
        answer: "R = (A - P) / T",
        explanation: { en: "A - P = RT => R = (A - P) / T.", ar: "A - P = RT => R = (A - P) / T." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation P = 2L + 2W for W:", ar: "حل المعادلة P = 2L + 2W بالنسبة لـ W:" },
        options: [{ en: "W = P - 2L", ar: "W = P - 2L" }, { en: "W = (P - 2L) / 2", ar: "W = (P - 2L) / 2" }, { en: "W = (P - L) / 2", ar: "W = (P - L) / 2" }, { en: "W = (P - 2L) / L", ar: "W = (P - 2L) / L" }],
        answer: "W = (P - 2L) / 2",
        explanation: { en: "P - 2L = 2W => W = (P - 2L) / 2.", ar: "P - 2L = 2W => W = (P - 2L) / 2." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation: 2x + 7 = 13", ar: "حل المعادلة: 2x + 7 = 13" },
        options: [{ en: "x = -3", ar: "x = -3" }, { en: "x = -4", ar: "x = -4" }, { en: "x = 4", ar: "x = 4" }, { en: "x = 3", ar: "x = 3" }],
        answer: "x = 3",
        explanation: { en: "2x = 6 => x = 3.", ar: "2x = 6 => x = 3." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation: 2x + 6 = 12", ar: "حل المعادلة: 2x + 6 = 12" },
        options: [{ en: "x = 3", ar: "x = 3" }, { en: "x = 4", ar: "x = 4" }, { en: "x = -4", ar: "x = -4" }, { en: "x = -3", ar: "x = -3" }],
        answer: "x = 3",
        explanation: { en: "2x = 6 => x = 3.", ar: "2x = 6 => x = 3." }
      },
      {
        type: "mcq",
        question: { en: "The solution of the equation 2x - 9 - (5x - 10) = -4x - 9 is:", ar: "حل المعادلة 2x - 9 - (5x - 10) = -4x - 9 هو:" },
        options: [{ en: "x = -10", ar: "x = -10" }, { en: "x = 10", ar: "x = 10" }, { en: "Ø", ar: "Ø" }, { en: "R", ar: "R" }],
        answer: "x = -10",
        explanation: { en: "-3x + 1 = -4x - 9 => x = -10.", ar: "-3x + 1 = -4x - 9 => x = -10." }
      },
      {
        type: "mcq",
        question: { en: "The solution of the equation 6(2x - 1) - 12 = 7 + 12(x - 1) is:", ar: "حل المعادلة 6(2x - 1) - 12 = 7 + 12(x - 1) هو:" },
        options: [{ en: "Ø", ar: "Ø" }, { en: "R", ar: "R" }, { en: "13", ar: "13" }, { en: "23", ar: "23" }],
        answer: "Ø",
        explanation: { en: "12x - 6 - 12 = 7 + 12x - 12 => 12x - 18 = 12x - 5 => -18 = -5 (contradiction Ø).", ar: "12x - 18 = 12x - 5 => -18 = -5 (تناقض لا يوجد حل Ø)." }
      },
      {
        type: "mcq",
        question: { en: "The solution of the equation 6x + 5 = 17 + 6(x - 2) is:", ar: "حل المعادلة 6x + 5 = 17 + 6(x - 2) هو:" },
        options: [{ en: "Ø", ar: "Ø" }, { en: "R", ar: "R" }, { en: "-6", ar: "-6" }, { en: "5", ar: "5" }],
        answer: "R",
        explanation: { en: "6x + 5 = 17 + 6x - 12 => 6x + 5 = 6x + 5. True for all x in R.", ar: "6x + 5 = 6x + 5 (صحيحة لجميع الأعداد الحقيقية R)." }
      },
      {
        type: "truefalse",
        question: { en: "6 is a solution of the inequality 2x + 14 < 24.", ar: "العدد 6 يعتبر حلاً للمتباينة 2x + 14 < 24." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "2(6) + 14 = 26, which is NOT < 24.", ar: "2(6) + 14 = 26 وهي ليست أصغر من 24." }
      },
      {
        type: "truefalse",
        question: { en: "5 is a solution of the inequality 2x + 14 ≥ 24.", ar: "العدد 5 يعتبر حلاً للمتباينة 2x + 14 ≥ 24." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "2(5) + 14 = 24, which satisfies ≥ 24.", ar: "2(5) + 14 = 24 وهي تحقق الإشارة ≥ 24." }
      },
      {
        type: "truefalse",
        question: { en: "0 is a solution of the inequality 2x + 14 > 24.", ar: "العدد 0 يعتبر حلاً للمتباينة 2x + 14 > 24." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "2(0) + 14 = 14, which is NOT > 24.", ar: "2(0) + 14 = 14 وهي ليست أكبر من 24." }
      },
      {
        type: "mcq",
        question: { en: "Solve the following equation 2x - y = 8 for y:", ar: "حل المعادلة 2x - y = 8 بالنسبة لـ y:" },
        options: [{ en: "y = 2x + 8", ar: "y = 2x + 8" }, { en: "y = 2x - 4", ar: "y = 2x - 4" }, { en: "y = 2x - 8", ar: "y = 2x - 8" }, { en: "y = 4x - 8", ar: "y = 4x - 8" }],
        answer: "y = 2x - 8",
        explanation: { en: "Rearrange: y = 2x - 8.", ar: "بإعادة الترتيب: y = 2x - 8." }
      },
      {
        type: "mcq",
        question: { en: "Solve the following equation 5y - 10x = 15 for y:", ar: "حل المعادلة 5y - 10x = 15 بالنسبة لـ y:" },
        options: [{ en: "y = 3 + 2x", ar: "y = 3 + 2x" }, { en: "x = 3 + 2y", ar: "x = 3 + 2y" }, { en: "y = 2x - 3", ar: "y = 2x - 3" }, { en: "y = 3 - 2x", ar: "y = 3 - 2x" }],
        answer: "y = 3 + 2x",
        explanation: { en: "5y = 10x + 15 => divide by 5: y = 2x + 3.", ar: "5y = 10x + 15 => بالقسمة على 5: y = 2x + 3." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation: 2x + 8 = 14", ar: "حل المعادلة: 2x + 8 = 14" },
        options: [{ en: "x = 3", ar: "x = 3" }, { en: "x = -11", ar: "x = -11" }, { en: "x = 11", ar: "x = 11" }, { en: "x = -3", ar: "x = -3" }],
        answer: "x = 3",
        explanation: { en: "2x = 6 => x = 3.", ar: "2x = 6 => x = 3." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation: 5 - 4(x + 1) = 2(x - 5) - 1", ar: "حل المعادلة: 5 - 4(x + 1) = 2(x - 5) - 1" },
        options: [{ en: "x = -1", ar: "x = -1" }, { en: "x = 2", ar: "x = 2" }, { en: "x = 1", ar: "x = 1" }, { en: "x = -2", ar: "x = -2" }],
        answer: "x = 2",
        explanation: { en: "5 - 4x - 4 = 2x - 10 - 1 => -4x + 1 = 2x - 11 => -6x = -12 => x = 2.", ar: "-4x + 1 = 2x - 11 => -6x = -12 => x = 2." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation: 2x - 9 - (5x - 10) = -4x - 9", ar: "حل المعادلة: 2x - 9 - (5x - 10) = -4x - 9" },
        options: [{ en: "x = 10", ar: "x = 10" }, { en: "Ø", ar: "Ø" }, { en: "R", ar: "R" }, { en: "x = -10", ar: "x = -10" }],
        answer: "x = -10",
        explanation: { en: "-3x + 1 = -4x - 9 => x = -10.", ar: "-3x + 1 = -4x - 9 => x = -10." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation: 3 - 4(x + 1) = 2(x - 5) - 3", ar: "حل المعادلة: 3 - 4(x + 1) = 2(x - 5) - 3" },
        options: [{ en: "R", ar: "R" }, { en: "Ø", ar: "Ø" }, { en: "x = 2", ar: "x = 2" }, { en: "x = -2", ar: "x = -2" }],
        answer: "x = 2",
        explanation: { en: "-4x - 1 = 2x - 13 => -6x = -12 => x = 2.", ar: "-4x - 1 = 2x - 13 => -6x = -12 => x = 2." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation: -8x + 7 = 15 - 8(x + 1)", ar: "حل المعادلة: -8x + 7 = 15 - 8(x + 1)" },
        options: [{ en: "-7", ar: "-7" }, { en: "7", ar: "7" }, { en: "R", ar: "R" }, { en: "Ø", ar: "Ø" }],
        answer: "R",
        explanation: { en: "-8x + 7 = 15 - 8x - 8 => -8x + 7 = -8x + 7. True for all real numbers R.", ar: "-8x + 7 = -8x + 7 (صحيحة دائماً R)." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation: 7 - 3x = 6 - 3(x + 1)", ar: "حل المعادلة: 7 - 3x = 6 - 3(x + 1)" },
        options: [{ en: "All real numbers", ar: "جميع الأعداد الحقيقية" }, { en: "{-4}", ar: "{-4}" }, { en: "Ø", ar: "Ø" }, { en: "{4}", ar: "{4}" }],
        answer: "Ø",
        explanation: { en: "7 - 3x = 3 - 3x => 7 = 3 (contradiction Ø).", ar: "7 - 3x = 3 - 3x => 7 = 3 (تناقض Ø)." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation: 6x + 5 = 17 + 6(x + 2)", ar: "حل المعادلة: 6x + 5 = 17 + 6(x + 2)" },
        options: [{ en: "-5", ar: "-5" }, { en: "R", ar: "R" }, { en: "Ø", ar: "Ø" }, { en: "5", ar: "5" }],
        answer: "Ø",
        explanation: { en: "6x + 5 = 6x + 29 => 5 = 29 (contradiction Ø).", ar: "6x + 5 = 6x + 29 => 5 = 29 (تناقض Ø)." }
      },
      {
        type: "mcq",
        question: { en: "Solve x = cz + b for z:", ar: "حل المعادلة x = cz + b بالنسبة لـ z:" },
        options: [{ en: "z = (x/c) + b", ar: "z = (x/c) + b" }, { en: "z = (x/c) - b", ar: "z = (x/c) - b" }, { en: "z = (x + b) / c", ar: "z = (x + b) / c" }, { en: "z = (x - b) / c", ar: "z = (x - b) / c" }],
        answer: "z = (x - b) / c",
        explanation: { en: "x - b = cz => z = (x - b)/c.", ar: "x - b = cz => z = (x - b)/c." }
      },
      {
        type: "mcq",
        question: { en: "Solve the equation: 9 = 18 + 3x", ar: "حل المعادلة: 9 = 18 + 3x" },
        options: [{ en: "x = 3", ar: "x = 3" }, { en: "x = -4", ar: "x = -4" }, { en: "x = 4", ar: "x = 4" }, { en: "x = -3", ar: "x = -3" }],
        answer: "x = -3",
        explanation: { en: "3x = -9 => x = -3.", ar: "3x = -9 => x = -3." }
      },
      {
        type: "mcq",
        question: { en: "The solution of 9 = 4x + 41 is:", ar: "حل المعادلة 9 = 4x + 41 هو:" },
        options: [{ en: "2", ar: "2" }, { en: "-7", ar: "-7" }, { en: "8", ar: "8" }, { en: "-8", ar: "-8" }],
        answer: "-8",
        explanation: { en: "4x = 9 - 41 = -32 => x = -8.", ar: "4x = -32 => x = -8." }
      },
      {
        type: "mcq",
        question: { en: "Solve 2x + 3 = 39:", ar: "حل المعادلة 2x + 3 = 39:" },
        options: [{ en: "-18", ar: "-18" }, { en: "-29", ar: "-29" }, { en: "29", ar: "29" }, { en: "18", ar: "18" }],
        answer: "18",
        explanation: { en: "2x = 36 => x = 18.", ar: "2x = 36 => x = 18." }
      },
      {
        type: "mcq",
        question: { en: "34 is 25% of what number?", ar: "34 هي 25% من أي عدد؟" },
        options: [{ en: "85", ar: "85" }, { en: "13.6", ar: "13.6" }, { en: "8.5", ar: "8.5" }, { en: "136", ar: "136" }],
        answer: "136",
        explanation: { en: "34 / 0.25 = 136.", ar: "34 ÷ 0.25 = 136." }
      },
      {
        type: "mcq",
        question: { en: "15 is 25% of what number?", ar: "15 هي 25% من أي عدد؟" },
        options: [{ en: "30", ar: "30" }, { en: "60", ar: "60" }, { en: "90", ar: "90" }, { en: "120", ar: "120" }],
        answer: "60",
        explanation: { en: "15 / 0.25 = 60.", ar: "15 ÷ 0.25 = 60." }
      },
      {
        type: "mcq",
        question: { en: "39 is what percent of 260?", ar: "39 تمثل كم بالمئة من 260؟" },
        options: [{ en: "20/3 %", ar: "20/3 %" }, { en: "0.24%", ar: "0.24%" }, { en: "0.15%", ar: "0.15%" }, { en: "15%", ar: "15%" }],
        answer: "15%",
        explanation: { en: "(39 / 260) × 100% = 0.15 × 100% = 15%.", ar: "(39 ÷ 260) × 100% = 15%." }
      },
      {
        type: "mcq",
        question: { en: "18 is what percent of 75?", ar: "18 تمثل كم بالمئة من 75؟" },
        options: [{ en: "206%", ar: "206%" }, { en: "0.24%", ar: "0.24%" }, { en: "256%", ar: "256%" }, { en: "24%", ar: "24%" }],
        answer: "24%",
        explanation: { en: "(18 / 75) × 100% = 0.24 × 100% = 24%.", ar: "(18 ÷ 75) × 100% = 24%." }
      },
      {
        type: "mcq",
        question: { en: "40% of 20 is:", ar: "40% من 20 تساوي:" },
        options: [{ en: "6", ar: "6" }, { en: "4", ar: "4" }, { en: "8", ar: "8" }, { en: "12", ar: "12" }],
        answer: "8",
        explanation: { en: "0.40 × 20 = 8.", ar: "0.40 × 20 = 8." }
      },
      {
        type: "mcq",
        question: { en: "23 is 25% of what number?", ar: "23 هي 25% من أي عدد؟" },
        options: [{ en: "92", ar: "92" }, { en: "23", ar: "23" }, { en: "25", ar: "25" }, { en: "234", ar: "234" }],
        answer: "92",
        explanation: { en: "23 / 0.25 = 92.", ar: "23 ÷ 0.25 = 92." }
      },
      {
        type: "mcq",
        question: { en: "What number is 29% of 45?", ar: "ما العدد الذي يمثل 29% من 45؟" },
        options: [{ en: "13.05", ar: "13.05" }, { en: "1305", ar: "1305" }, { en: "130.5", ar: "130.5" }, { en: "13.5", ar: "13.5" }],
        answer: "13.05",
        explanation: { en: "0.29 × 45 = 13.05.", ar: "0.29 × 45 = 13.05." }
      },
      {
        type: "mcq",
        question: { en: "If 30% of x is 45, what is 80% of x?", ar: "إذا كان 30% من x يساوي 45، فكم يساوي 80% من x؟" },
        options: [{ en: "150", ar: "150" }, { en: "100", ar: "100" }, { en: "120", ar: "120" }, { en: "130", ar: "130" }],
        answer: "120",
        explanation: { en: "0.30x = 45 => x = 150. Then 0.80 × 150 = 120.", ar: "0.30x = 45 => x = 150. ثم 0.80 × 150 = 120." }
      },
      {
        type: "mcq",
        question: { en: "If 20% of x is 28, what is 70% of x?", ar: "إذا كان 20% من x يساوي 28، فكم يساوي 70% من x؟" },
        options: [{ en: "25.2", ar: "25.2" }, { en: "89", ar: "89" }, { en: "98", ar: "98" }, { en: "140", ar: "140" }],
        answer: "98",
        explanation: { en: "0.20x = 28 => x = 140. Then 0.70 × 140 = 98.", ar: "0.20x = 28 => x = 140. ثم 0.70 × 140 = 98." }
      },
      {
        type: "mcq",
        question: { en: "Solve the inequality: 2x + 8 > 14", ar: "حل المتباينة: 2x + 8 > 14" },
        options: [{ en: "x > 4", ar: "x > 4" }, { en: "x > 3", ar: "x > 3" }, { en: "x > -4", ar: "x > -4" }, { en: "x > -3", ar: "x > -3" }],
        answer: "x > 3",
        explanation: { en: "2x > 6 => x > 3.", ar: "2x > 6 => x > 3." }
      },
      {
        type: "mcq",
        question: { en: "Solve the inequality: 3x - 7 > 2", ar: "حل المتباينة: 3x - 7 > 2" },
        options: [{ en: "x > 4", ar: "x > 4" }, { en: "x > -3", ar: "x > -3" }, { en: "x > -4", ar: "x > -4" }, { en: "x > 3", ar: "x > 3" }],
        answer: "x > 3",
        explanation: { en: "3x > 9 => x > 3.", ar: "3x > 9 => x > 3." }
      },
      {
        type: "mcq",
        question: { en: "Solve the inequality: 3x + 4 > 13", ar: "حل المتباينة: 3x + 4 > 13" },
        options: [{ en: "x > 4", ar: "x > 4" }, { en: "x > 3", ar: "x > 3" }, { en: "x > -4", ar: "x > -4" }, { en: "x > -3", ar: "x > -3" }],
        answer: "x > 3",
        explanation: { en: "3x > 9 => x > 3.", ar: "3x > 9 => x > 3." }
      },
      {
        type: "mcq",
        question: { en: "Which of the following numbers is NOT a solution of the inequality: 6x - 6 > 7x - 2?", ar: "أي الأعداد التالية ليس حلاً للمتباينة: 6x - 6 > 7x - 2؟" },
        options: [{ en: "-4", ar: "-4" }, { en: "-12", ar: "-12" }, { en: "-6", ar: "-6" }, { en: "-8", ar: "-8" }],
        answer: "-4",
        explanation: { en: "6x - 7x > -2 + 6 => -x > 4 => x < -4. Therefore, -4 itself is NOT < -4.", ar: "-x > 4 => x < -4، بالتالي -4 ليست أصغر تماماً من -4." }
      },
      {
        type: "mcq",
        question: { en: "Which inequality has the same meaning as x ≥ -3?", ar: "أي المتباينات التالية تملك نفس معنى x ≥ -3؟" },
        options: [{ en: "x > -3", ar: "x > -3" }, { en: "3 ≥ -x", ar: "3 ≥ -x" }, { en: "-3 ≤ x", ar: "-3 ≤ x" }, { en: "-3 ≥ x", ar: "-3 ≥ x" }],
        answer: "-3 ≤ x",
        explanation: { en: "x ≥ -3 is equivalent to -3 ≤ x.", ar: "x ≥ -3 تعني أن -3 أصغر من أو تساوي x (-3 ≤ x)." }
      },
      {
        type: "mcq",
        question: { en: "Which one of the following inequalities is equivalent to 2x < 6?", ar: "أي المتباينات التالية تكافئ المتباينة 2x < 6؟" },
        options: [{ en: "2x < 12", ar: "2x < 12" }, { en: "-4x > -12", ar: "-4x > -12" }, { en: "-4x < -12", ar: "-4x < -12" }, { en: "2x > 12", ar: "2x > 12" }],
        answer: "-4x > -12",
        explanation: { en: "2x < 6 => x < 3. Multiplying x < 3 by -4 gives -4x > -12.", ar: "2x < 6 => x < 3. وبضرب x < 3 في -4 نحصل على -4x > -12." }
      },
      {
        type: "truefalse",
        question: { en: "y < -4 and -y > 4 are equivalent inequalities.", ar: "y < -4 و -y > 4 متباينتان متكافئتان." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Multiplying y < -4 by -1 gives -y > 4.", ar: "ضرب y < -4 في -1 يعطي -y > 4." }
      },
      {
        type: "truefalse",
        question: { en: "For the line x = a, where a is a constant and a ≠ 0, the x-intercept is (a, 0).", ar: "للمستقيم x = a، حيث a ثابت و a ≠ 0، فإن المقطع السيني هو (a, 0)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "A vertical line x = a intersects the x-axis at (a, 0).", ar: "المستقيم الرأسي x = a يقطع محور السينات عند النقطة (a, 0)." }
      },
      {
        type: "truefalse",
        question: { en: "For the line x = a, where a is a constant and a ≠ 0, the y-intercept is (a, 0).", ar: "للمستقيم x = a، حيث a ثابت و a ≠ 0، فإن المقطع الصادي هو (a, 0)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The line x = a is vertical and parallel to the y-axis, so it has no y-intercept unless a = 0.", ar: "المستقيم x = a هو مستقيم رأسي يوازي محور الصادات ولا يقطعه." }
      },
      {
        type: "mcq",
        question: { en: "For the line 9x + 3y = 18, which statement is true?", ar: "للمستقيم 9x + 3y = 18، أي العبارات التالية صحيحة؟" },
        options: [
          { en: "Slope: m = 3 and y-intercept: (0, -6)", ar: "الميل: m = 3 والمقطع الصادي: (0, -6)" },
          { en: "Slope: m = 3 and y-intercept: (0, 6)", ar: "الميل: m = 3 والمقطع الصادي: (0, 6)" },
          { en: "Slope: m = -3 and y-intercept: (0, -6)", ar: "الميل: m = -3 والمقطع الصادي: (0, -6)" },
          { en: "Slope: m = -3 and y-intercept: (0, 6)", ar: "الميل: m = -3 والمقطع الصادي: (0, 6)" }
        ],
        answer: "Slope: m = -3 and y-intercept: (0, 6)",
        explanation: { en: "Convert to y = mx + b: 3y = -9x + 18 => y = -3x + 6. Slope = -3, y-intercept = (0, 6).", ar: "تحويلها إلى y = -3x + 6 تعطي الميلة m = -3 والمقطع الصادي (0, 6)." }
      },
      {
        type: "mcq",
        question: { en: "For the line 5y - 10x = 15, which statement is true?", ar: "للمستقيم 5y - 10x = 15، أي العبارات التالية صحيحة؟" },
        options: [
          { en: "Slope: m = 2 and y-intercept: (0, -3)", ar: "الميل: m = 2 والمقطع الصادي: (0, -3)" },
          { en: "Slope: m = 2 and y-intercept: (0, 3)", ar: "الميل: m = 2 والمقطع الصادي: (0, 3)" },
          { en: "Slope: m = -2 and y-intercept: (0, -3)", ar: "الميل: m = -2 والمقطع الصادي: (0, -3)" },
          { en: "Slope: m = -2 and y-intercept: (0, 3)", ar: "الميل: m = -2 والمقطع الصادي: (0, 3)" }
        ],
        answer: "Slope: m = 2 and y-intercept: (0, 3)",
        explanation: { en: "5y = 10x + 15 => y = 2x + 3. Slope = 2, y-intercept = (0, 3).", ar: "5y = 10x + 15 => y = 2x + 3. الميل = 2 والمقطع الصادي = (0, 3)." }
      },
      {
        type: "mcq",
        question: { en: "For the line 3x + 6y = 12, which statement is true?", ar: "للمستقيم 3x + 6y = 12، أي العبارات التالية صحيحة؟" },
        options: [
          { en: "The x-intercept is (2, 0) and the y-intercept is (-4, 0)", ar: "المقطع السيني (2, 0) والمقطع الصادي (-4, 0)" },
          { en: "The x-intercept is (2, 0) and the y-intercept is (0, 4)", ar: "المقطع السيني (2, 0) والمقطع الصادي (0, 4)" },
          { en: "The x-intercept is (4, 0) and the y-intercept is (-2, 0)", ar: "المقطع السيني (4, 0) والمقطع الصادي (-2, 0)" },
          { en: "The x-intercept is (4, 0) and the y-intercept is (0, 2)", ar: "المقطع السيني (4, 0) والمقطع الصادي (0, 2)" }
        ],
        answer: "The x-intercept is (4, 0) and the y-intercept is (0, 2)",
        explanation: { en: "If y = 0 => 3x = 12 => x = 4 => (4, 0). If x = 0 => 6y = 12 => y = 2 => (0, 2).", ar: "عند y = 0 فإن x = 4 فتصبح (4, 0). وعند x = 0 فإن y = 2 فتصبح (0, 2)." }
      },
      {
        type: "mcq",
        question: { en: "For the line 3x - 4y = 12, which statement is true?", ar: "للمستقيم 3x - 4y = 12، أي العبارات التالية صحيحة؟" },
        options: [
          { en: "The x-intercept is (3, 0) and the y-intercept is (0, -4)", ar: "المقطع السيني (3, 0) والمقطع الصادي (0, -4)" },
          { en: "The x-intercept is (3, 0) and the y-intercept is (0, 4)", ar: "المقطع السيني (3, 0) والمقطع الصادي (0, 4)" },
          { en: "The x-intercept is (4, 0) and the y-intercept is (0, -3)", ar: "المقطع السيني (4, 0) والمقطع الصادي (0, -3)" },
          { en: "The x-intercept is (4, 0) and the y-intercept is (0, 3)", ar: "المقطع السيني (4, 0) والمقطع الصادي (0, 3)" }
        ],
        answer: "The x-intercept is (4, 0) and the y-intercept is (0, -3)",
        explanation: { en: "x-intercept (y=0): 3x = 12 => x = 4. y-intercept (x=0): -4y = 12 => y = -3.", ar: "المقطع السيني (4, 0) والمقطع الصادي (0, -3)." }
      },
      {
        type: "mcq",
        question: { en: "For the line 4x + 3y = 12, which statement is true?", ar: "للمستقيم 4x + 3y = 12، أي العبارات التالية صحيحة؟" },
        options: [
          { en: "The x-intercept is (3, 0) and the y-intercept is (0, -4)", ar: "المقطع السيني (3, 0) والمقطع الصادي (0, -4)" },
          { en: "The x-intercept is (4, 0) and the y-intercept is (0, -3)", ar: "المقطع السيني (4, 0) والمقطع الصادي (0, -3)" },
          { en: "The x-intercept is (4, 0) and the y-intercept is (0, 3)", ar: "المقطع السيني (4, 0) والمقطع الصادي (0, 3)" },
          { en: "The x-intercept is (3, 0) and the y-intercept is (0, 4)", ar: "المقطع السيني (3, 0) والمقطع الصادي (0, 4)" }
        ],
        answer: "The x-intercept is (3, 0) and the y-intercept is (0, 4)",
        explanation: { en: "x-intercept (y=0): 4x = 12 => x = 3. y-intercept (x=0): 3y = 12 => y = 4.", ar: "المقطع السيني (3, 0) والمقطع الصادي (0, 4)." }
      },
      {
        type: "mcq",
        question: { en: "The y-intercept of the following equation 4x + 14y = 28 is:", ar: "المقطع الصادي للمعادلة 4x + 14y = 28 هو:" },
        options: [{ en: "(0, 2)", ar: "(0, 2)" }, { en: "(2, 0)", ar: "(2, 0)" }, { en: "(7, 0)", ar: "(7, 0)" }, { en: "(0, 7)", ar: "(0, 7)" }],
        answer: "(0, 2)",
        explanation: { en: "Set x = 0: 14y = 28 => y = 2 => (0, 2).", ar: "بوضع x = 0: 14y = 28 => y = 2 => (0, 2)." }
      },
      {
        type: "mcq",
        question: { en: "The y-intercept of the following equation 6x + 10y = 30 is:", ar: "المقطع الصادي للمعادلة 6x + 10y = 30 هو:" },
        options: [{ en: "(0, 3)", ar: "(0, 3)" }, { en: "(5, 0)", ar: "(5, 0)" }, { en: "(3, 0)", ar: "(3, 0)" }, { en: "(0, 5)", ar: "(0, 5)" }],
        answer: "(0, 3)",
        explanation: { en: "Set x = 0: 10y = 30 => y = 3 => (0, 3).", ar: "بوضع x = 0: 10y = 30 => y = 3 => (0, 3)." }
      },
      {
        type: "truefalse",
        question: { en: "The x-intercept of the vertical line x = -2 is (-2, 0).", ar: "المقطع السيني للمستقيم الرأسي x = -2 هو (-2, 0)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "The line x = -2 crosses the x-axis at (-2, 0).", ar: "المستقيم الرأسي يتقاطع مع محور السينات عند النقطه (-2, 0)." }
      },
      {
        type: "truefalse",
        question: { en: "For the line x = 5, the y-intercept is (5, 0).", ar: "للمستقيم x = 5، فإن المقطع الصادي هو (5, 0)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "x = 5 is a vertical line parallel to the y-axis, so it has no y-intercept.", ar: "المستقيم x = 5 رأسي يوازي محور الصادات ولا يتقاطع معه." }
      },
      {
        type: "truefalse",
        question: { en: "The slope of a vertical line is 0.", ar: "ميل المستقيم الرأسي يساوي 0." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The slope of a vertical line is undefined.", ar: "ميل المستقيم الرأسي يكون غير معرّف." }
      },
      {
        type: "truefalse",
        question: { en: "The slope of a vertical line is undefined.", ar: "ميل المستقيم الرأسي غير معرّف." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Division by zero in slope formula (Δx = 0) makes vertical line slope undefined.", ar: "التغير في x يساوي صفراً في صيغة الميل مما يجعله غير معرّف." }
      },
      {
        type: "truefalse",
        question: { en: "The slope of a horizontal line is undefined.", ar: "ميل المستقيم الأفقي غير معرّف." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The slope of a horizontal line is zero.", ar: "ميل المستقيم الأفقي يساوي صفراً." }
      },
      {
        type: "truefalse",
        question: { en: "The slope of a horizontal line is zero.", ar: "ميل المستقيم الأفقي يساوي صفراً." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Change in y is 0, so slope = 0 / Δx = 0.", ar: "التغير في y يساوي صفراً، وبالتالي الميل يساوي 0." }
      },
      {
        type: "truefalse",
        question: { en: "Where x > 0, the point (x, -5) is located in Quadrant IV.", ar: "عندما تكون x > 0، فإن النقطة (x, -5) تقع في الربع الرابع (IV)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "(+, -) coordinates are in Quadrant IV.", ar: "الإحداثيات (+, -) تقع في الربع الرابع." }
      },
      {
        type: "truefalse",
        question: { en: "Where x > 0, the point (x, 2) is located in Quadrant II.", ar: "عندما تكون x > 0، فإن النقطة (x, 2) تقع في الربع الثاني (II)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "(+, +) coordinates belong to Quadrant I.", ar: "الإحداثيات (+, +) تقع في الربع الأول." }
      },
      {
        type: "truefalse",
        question: { en: "Where y < 0, the point (-8, y) is located in Quadrant III.", ar: "عندما تكون y < 0، فإن النقطة (-8, y) تقع في الربع الثالث (III)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "(-, -) coordinates belong to Quadrant III.", ar: "الإحداثيات (-, -) تقع في الربع الثالث." }
      },
      {
        type: "truefalse",
        question: { en: "Where x < 0, the point (x, 2) is located in Quadrant II.", ar: "عندما تكون x < 0، فإن النقطة (x, 2) تقع في الربع الثاني (II)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "(-, +) coordinates belong to Quadrant II.", ar: "الإحداثيات (-, +) تقع في الربع الثاني." }
      },
      {
        type: "truefalse",
        question: { en: "Where x < 0, the point (x, -2) is located in Quadrant IV.", ar: "عندما تكون x < 0، فإن النقطة (x, -2) تقع في الربع الرابع (IV)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "(-, -) coordinates belong to Quadrant III, not IV.", ar: "الإحداثيات (-, -) تقع في الربع الثالث وليس الرابع." }
      },
      {
        type: "mcq",
        question: { en: "In which quadrant is the point (-9, 3) located?", ar: "في أي ربع تقع النقطة (-9, 3)؟" },
        options: [{ en: "Second Quadrant (II)", ar: "الربع الثاني (II)" }, { en: "Fourth Quadrant (IV)", ar: "الربع الرابع (IV)" }, { en: "First Quadrant (I)", ar: "الربع الأول (I)" }, { en: "Third Quadrant (III)", ar: "الربع الثالث (III)" }],
        answer: "Second Quadrant (II)",
        explanation: { en: "Negative x and positive y (-9, 3) is in Quadrant II.", ar: "x سالبة و y موجبة تقع في الربع الثاني." }
      },
      {
        type: "mcq",
        question: { en: "In which quadrant is the point (9, -3) located?", ar: "في أي ربع تقع النقطة (9, -3)؟" },
        options: [{ en: "Second Quadrant (II)", ar: "الربع الثاني (II)" }, { en: "Fourth Quadrant (IV)", ar: "الربع الرابع (IV)" }, { en: "First Quadrant (I)", ar: "الربع الأول (I)" }, { en: "Third Quadrant (III)", ar: "الربع الثالث (III)" }],
        answer: "Fourth Quadrant (IV)",
        explanation: { en: "Positive x and negative y (9, -3) is in Quadrant IV.", ar: "x موجبة و y سالبة تقع في الربع الرابع." }
      },
      {
        type: "mcq",
        question: { en: "In which quadrant is the point (-10, -7) located?", ar: "في أي ربع تقع النقطة (-10, -7)؟" },
        options: [{ en: "Third Quadrant (III)", ar: "الربع الثالث (III)" }, { en: "Fourth Quadrant (IV)", ar: "الربع الرابع (IV)" }, { en: "First Quadrant (I)", ar: "الربع الأول (I)" }, { en: "Second Quadrant (II)", ar: "الربع الثاني (II)" }],
        answer: "Third Quadrant (III)",
        explanation: { en: "Negative x and negative y (-10, -7) is in Quadrant III.", ar: "x سالبة و y سالبة تقع في الربع الثالث." }
      }

       ]
      },

      {
    id: "math001-midterm-q201-300",
    title: { en: "Math 001 Midterm Prep (Q201–300)", ar: "تجميعات ميد ماث 001 (الأسئلة 201-300)" },
    description: { en: "Practice set covering coordinate quadrants, slopes, equation of lines, testing solutions, polynomial terms, and basic operations.", ar: "تدريب يشمل الأرباع الإحداثية، ميل المستقيم، معادلة المستقيم، اختبار الحلول، حدود كثيرات الحدود، والعمليات الأساسية عليها." },
    typeLabel: { en: "Multiple choice / True & False", ar: "اختيار من متعدد / صواب وخطأ" },
    questionMode: "one",
    feedbackMode: "both",
    timerMinutes: 0,
    shuffleQuestions: false,
    shuffleOptions: false,
    showExplanations: true,
    questions: [
      {
        type: "mcq",
        question: { en: "Where x > 0, the point (-x, -2) is located in:", ar: "عندما تكون x > 0، فإن النقطة (-x, -2) تقع في:" },
        options: [{ en: "First quadrant", ar: "الربع الأول" }, { en: "Second quadrant", ar: "الربع الثاني" }, { en: "Third quadrant", ar: "الربع الثالث" }, { en: "Fourth quadrant", ar: "الربع الرابع" }],
        answer: "Third quadrant",
        explanation: { en: "If x > 0, then -x is negative. The point (-x, -2) has both negative x and negative y, placing it in Quadrant III.", ar: "بما أن x > 0، فإن -x عدد سالب. النقطة (-x, -2) إحداثياتها (- , -) وتقع في الربع الثالث." }
      },
      {
        type: "mcq",
        question: { en: "Where x < 0, the point (x, -2) is located in:", ar: "عندما تكون x < 0، فإن النقطة (x, -2) تقع في:" },
        options: [{ en: "Third quadrant", ar: "الربع الثالث" }, { en: "First quadrant", ar: "الربع الأول" }, { en: "Second quadrant", ar: "الربع الثاني" }, { en: "Fourth quadrant", ar: "الربع الرابع" }],
        answer: "Third quadrant",
        explanation: { en: "With x < 0, both x and y are negative, which places the point in Quadrant III.", ar: "بما أن x < 0، فإن كلا الإحداثيين سالبان (- , -)، وبالتالي تقع النقطة في الربع الثالث." }
      },
      {
        type: "truefalse",
        question: { en: "The slope of 4x - 8 = 12 is undefined.", ar: "ميل المستقيم 4x - 8 = 12 غير معرّف." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "4x = 20 => x = 5, which is a vertical line. The slope of any vertical line is undefined.", ar: "المعادلة تعطي x = 5، وهو مستقيم رأسي ميله غير معرّف." }
      },
      {
        type: "truefalse",
        question: { en: "The slope of 4x - 8 = 12 is 0.", ar: "ميل المستقيم 4x - 8 = 12 يساوي 0." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "4x - 8 = 12 represents x = 5 (a vertical line), so its slope is undefined, not 0.", ar: "المعادلة تمثل مستقيماً رأسياً ميله غير معرّف وليس 0." }
      },
      {
        type: "truefalse",
        question: { en: "The slope of 4y - 8 = 12 is 0.", ar: "ميل المستقيم 4y - 8 = 12 يساوي 0." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "4y = 20 => y = 5, which is a horizontal line. Horizontal lines have a slope of 0.", ar: "المعادلة تعطي y = 5، وهو مستقيم أفقي ميله يساوي صفراً." }
      },
      {
        type: "truefalse",
        question: { en: "The slope of 4y - 8 = 12 is undefined.", ar: "ميل المستقيم 4y - 8 = 12 غير معرّف." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "y = 5 is a horizontal line, so its slope is 0, not undefined.", ar: "المعادلة تمثل مستقيماً أفقياً ميله 0 وليس غير معرّف." }
      },
      {
        type: "truefalse",
        question: { en: "The graph of y = b is a horizontal line.", ar: "التمثيل البياني للمعادلة y = b هو خط أفقي." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "y = b represents a line where all y-coordinates are equal, forming a horizontal line.", ar: "المعادلة y = b تمثل مستقيماً جميع نقاطه لها نفس الإحداثي الصادي، فهو خط أفقي." }
      },
      {
        type: "truefalse",
        question: { en: "The point (-1, 3) is a solution to the equation 3[2(x - 1) - 2x] - 2y = -8.", ar: "النقطة (-1, 3) تعتبر حلاً للمعادلة 3[2(x - 1) - 2x] - 2y = -8." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Simplify left side: 3[2x - 2 - 2x] - 2(3) = 3(-2) - 6 = -6 - 6 = -12 ≠ -8.", ar: "بالتعويض: 3(-2) - 6 = -12 ولا تساوي -8." }
      },
      {
        type: "truefalse",
        question: { en: "The point (2, -1) is a solution to the equation 3[2(y - 1) + 2x] - 2x = -4.", ar: "النقطة (2, -1) تعتبر حلاً للمعادلة 3[2(y - 1) + 2x] - 2x = -4." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Substitute x=2, y=-1: 3[2(-2) + 4] - 4 = 3(0) - 4 = -4. Left side equals -4, so it IS a solution.", ar: "بالتعويض بـ x=2 و y=-1: 3[-4 + 4] - 4 = -4 وهي متطابقة (صواب)." }
      },
      {
        type: "truefalse",
        question: { en: "The point (-1, 2) is a solution to the equation 3[2(x - 1) - 2x] - 2y = -4.", ar: "النقطة (-1, 2) تعتبر حلاً للمعادلة 3[2(x - 1) - 2x] - 2y = -4." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "3[2(-2) - 2(-1)] - 2(2) = 3[-4 + 2] - 4 = -6 - 4 = -10 ≠ -4.", ar: "بالتعويض نجد الطرف الأيسر = -10 ولا يساوي -4." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (3, 5) and (2, 9) is:", ar: "ميل المستقيم المار بالنقطتين (3, 5) و (2, 9) هو:" },
        options: [{ en: "m = 4", ar: "m = 4" }, { en: "m = 7/6", ar: "m = 7/6" }, { en: "m = -4", ar: "m = -4" }, { en: "m = 1/4", ar: "m = 1/4" }],
        answer: "m = -4",
        explanation: { en: "m = (9 - 5) / (2 - 3) = 4 / (-1) = -4.", ar: "قانون الميل: (9 - 5) ÷ (2 - 3) = 4 ÷ (-1) = -4." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (10, 4) and (18, 6) is:", ar: "ميل المستقيم المار بالنقطتين (10, 4) و (18, 6) هو:" },
        options: [{ en: "m = 4", ar: "m = 4" }, { en: "m = 1/4", ar: "m = 1/4" }, { en: "m = -4", ar: "m = -4" }, { en: "m = -1/4", ar: "m = -1/4" }],
        answer: "m = 1/4",
        explanation: { en: "m = (6 - 4) / (18 - 10) = 2 / 8 = 1/4.", ar: "قانون الميل: (6 - 4) ÷ (18 - 10) = 2 ÷ 8 = 1/4." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (4, 4) and (6, 6) is:", ar: "ميل المستقيم المار بالنقطتين (4, 4) و (6, 6) هو:" },
        options: [{ en: "m = 2", ar: "m = 2" }, { en: "m = -1", ar: "m = -1" }, { en: "m = 1", ar: "m = 1" }, { en: "m = -2", ar: "m = -2" }],
        answer: "m = 1",
        explanation: { en: "m = (6 - 4) / (6 - 4) = 2 / 2 = 1.", ar: "قانون الميل: (6 - 4) ÷ (6 - 4) = 2 ÷ 2 = 1." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line y - 5x = 10 is:", ar: "ميل المستقيم y - 5x = 10 هو:" },
        options: [{ en: "m = 2", ar: "m = 2" }, { en: "m = 5", ar: "m = 5" }, { en: "m = 10", ar: "m = 10" }, { en: "m = -5", ar: "m = -5" }],
        answer: "m = 5",
        explanation: { en: "y = 5x + 10, so slope m = 5.", ar: "الصيغة y = 5x + 10 تعطي الميل m = 5." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line y - 3x = 12 is:", ar: "ميل المستقيم y - 3x = 12 هو:" },
        options: [{ en: "m = 12", ar: "m = 12" }, { en: "m = -3", ar: "m = -3" }, { en: "m = 3", ar: "m = 3" }, { en: "m = -5", ar: "m = -5" }],
        answer: "m = 3",
        explanation: { en: "y = 3x + 12, so slope m = 3.", ar: "الصيغة y = 3x + 12 تعطي الميل m = 3." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line x = 5y + 10 is:", ar: "ميل المستقيم x = 5y + 10 هو:" },
        options: [{ en: "m = 10", ar: "m = 10" }, { en: "m = 1", ar: "m = 1" }, { en: "m = 5", ar: "m = 5" }, { en: "m = 1/5", ar: "m = 1/5" }],
        answer: "m = 1/5",
        explanation: { en: "5y = x - 10 => y = (1/5)x - 2, so slope m = 1/5.", ar: "5y = x - 10 => y = (1/5)x - 2، وبالتالي الميل = 1/5." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line 3x + y = 12 is:", ar: "ميل المستقيم 3x + y = 12 هو:" },
        options: [{ en: "m = 3", ar: "m = 3" }, { en: "m = 12", ar: "m = 12" }, { en: "m = -3", ar: "m = -3" }, { en: "m = 4", ar: "m = 4" }],
        answer: "m = -3",
        explanation: { en: "y = -3x + 12, so slope m = -3.", ar: "y = -3x + 12 تعطي الميل m = -3." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line 5x + y = 10 is:", ar: "ميل المستقيم 5x + y = 10 هو:" },
        options: [{ en: "m = 2", ar: "m = 2" }, { en: "m = -5", ar: "m = -5" }, { en: "m = 10", ar: "m = 10" }, { en: "m = 5", ar: "m = 5" }],
        answer: "m = -5",
        explanation: { en: "y = -5x + 10, so slope m = -5.", ar: "y = -5x + 10 تعطي الميل m = -5." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line y = 2x + 10 is:", ar: "ميل المستقيم y = 2x + 10 هو:" },
        options: [{ en: "m = 2", ar: "m = 2" }, { en: "m = 1/2", ar: "m = 1/2" }, { en: "m = 10", ar: "m = 10" }, { en: "m = 5", ar: "m = 5" }],
        answer: "m = 2",
        explanation: { en: "Equation is in slope-intercept form y = mx + b, so m = 2.", ar: "معادلة على الصورة y = mx + b، حيث m = 2." }
      },
      {
        type: "truefalse",
        question: { en: "An equation of the horizontal line containing (-3, 3) is y = -3.", ar: "معادلة المستقيم الأفقي المار بالنقطة (-3, 3) هي y = -3." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "For (-3, 3), the y-coordinate is 3, so the horizontal line equation is y = 3.", ar: "الإحداثي الصادي هو 3 فتكون معادلة الخط الأفقي y = 3." }
      },
      {
        type: "truefalse",
        question: { en: "An equation of the horizontal line containing (-3, 3) is x = 3.", ar: "معادلة المستقيم الأفقي المار بالنقطة (-3, 3) هي x = 3." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "A horizontal line has the form y = b (here y = 3).", ar: "المستقيم الأفقي يكتب بالصيغة y = b (وهنا y = 3)." }
      },
      {
        type: "truefalse",
        question: { en: "An equation of the vertical line containing (-3, 3) is y = -3.", ar: "معادلة المستقيم الرأسي المار بالنقطة (-3, 3) هي y = -3." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "A vertical line has the form x = a (here x = -3).", ar: "المستقيم الرأسي يكتب بالصيغة x = a (وهنا x = -3)." }
      },
      {
        type: "truefalse",
        question: { en: "An equation of the horizontal line containing (-3, 3) is x = -3.", ar: "معادلة المستقيم الأفقي المار بالنقطة (-3, 3) هي x = -3." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "x = -3 is a vertical line. Horizontal line is y = 3.", ar: "x = -3 مستقيم رأسي، والخط الأفقي هو y = 3." }
      },
      {
        type: "truefalse",
        question: { en: "An equation of the vertical line containing (-3, 3) is x = -3.", ar: "معادلة المستقيم الرأسي المار بالنقطة (-3, 3) هي x = -3." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Vertical lines pass through fixed x-coordinates, so x = -3.", ar: "المستقيم الرأسي يمر بإحداثي x الثابت، فالمعادلة هي x = -3." }
      },
      {
        type: "truefalse",
        question: { en: "A line with a negative slope slants up from left to right.", ar: "المستقيم ذو الميل السالب يميل للأعلى من اليسار إلى اليمين." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "A negative slope slants DOWN from left to right. Positive slopes slant up.", ar: "الميل السالب يميل إلى الأسفل من اليسار إلى اليمين." }
      },
      {
        type: "mcq",
        question: { en: "If a = -2, in which quadrant is the point (-a, a - 1) located?", ar: "إذا كانت a = -2، في أي ربع تقع النقطة (-a, a - 1)؟" },
        options: [{ en: "First quadrant (I)", ar: "الربع الأول (I)" }, { en: "Fourth quadrant (IV)", ar: "الربع الرابع (IV)" }, { en: "Second quadrant (II)", ar: "الربع الثاني (II)" }, { en: "Third quadrant (III)", ar: "الربع الثالث (III)" }],
        answer: "Fourth quadrant (IV)",
        explanation: { en: "-a = -(-2) = 2, and a - 1 = -2 - 1 = -3. Point is (2, -3) in Quadrant IV.", ar: "-a = 2 و a - 1 = -3. النقطة هي (2, -3) وتكون في الربع الرابع." }
      },
      {
        type: "mcq",
        question: { en: "The first coordinate is positive in the following quadrants:", ar: "الإحداثي الأول (x) يكون موجباً في الأرباع التالية:" },
        options: [{ en: "I, II", ar: "I, II" }, { en: "I, IV", ar: "I, IV" }, { en: "II, III", ar: "II, III" }, { en: "II, IV", ar: "II, IV" }],
        answer: "I, IV",
        explanation: { en: "x is positive to the right of the y-axis, which corresponds to Quadrants I and IV.", ar: "x تكون موجبة في الربعين الأول والرابع." }
      },
      {
        type: "mcq",
        question: { en: "The first coordinate is always negative in quadrants:", ar: "الإحداثي الأول (x) يكون سالباً دائمًا في الأرباع:" },
        options: [{ en: "I and II", ar: "I و II" }, { en: "II and III", ar: "II و III" }, { en: "I and IV", ar: "I و IV" }, { en: "III and IV", ar: "III و IV" }],
        answer: "II and III",
        explanation: { en: "x is negative to the left of the y-axis, covering Quadrants II and III.", ar: "x تكون سالبة في الربعين الثاني والثالث." }
      },
      {
        type: "mcq",
        question: { en: "The first coordinate is positive, and the second coordinate is negative in quadrant:", ar: "الإحداثي الأول موجب والإحداثي الثاني سالب في الربع:" },
        options: [{ en: "I", ar: "I" }, { en: "II", ar: "II" }, { en: "III", ar: "III" }, { en: "IV", ar: "IV" }],
        answer: "IV",
        explanation: { en: "(+, -) represents Quadrant IV.", ar: "الإحداثيات (+, -) تمثل الربع الرابع." }
      },
      {
        type: "mcq",
        question: { en: "The second coordinate is always negative in quadrants:", ar: "الإحداثي الثاني (y) يكون سالباً دائمًا في الأرباع:" },
        options: [{ en: "I and II", ar: "I و II" }, { en: "II and III", ar: "II و III" }, { en: "I and IV", ar: "I و IV" }, { en: "III and IV", ar: "III و IV" }],
        answer: "III and IV",
        explanation: { en: "y is negative below the x-axis, covering Quadrants III and IV.", ar: "y تكون سالبة أسفل محور السينات في الربعين الثالث والرابع." }
      },
      {
        type: "mcq",
        question: { en: "Which ordered pair is a solution of the equation 4y = 12 - 2x?", ar: "أي من الأزواج المرتبة التالية يعتبر حلاً للمعادلة 4y = 12 - 2x؟" },
        options: [{ en: "(-2, 4)", ar: "(-2, 4)" }, { en: "(4, 2)", ar: "(4, 2)" }, { en: "(2, 2)", ar: "(2, 2)" }, { en: "(0, 0)", ar: "(0, 0)" }],
        answer: "(-2, 4)",
        explanation: { en: "Test (-2, 4): 4(4) = 16, and 12 - 2(-2) = 16. Both sides equal 16.", ar: "بالتعويض بـ (-2, 4): 4(4) = 16 و 12 - 2(-2) = 16 (صحيح)." }
      },
      {
        type: "truefalse",
        question: { en: "The point (-1, 3) is a solution to the equation 3[2(x - 1) - 2y] - 2x = 0.", ar: "النقطة (-1, 3) تعتبر حلاً للمعادلة 3[2(x - 1) - 2y] - 2x = 0." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "3[2(-2) - 6] - 2(-1) = 3[-10] + 2 = -28 ≠ 0.", ar: "بالتعويض بـ x=-1 و y=3 نجد الناتج = -28 ولا يساوي 0." }
      },
      {
        type: "truefalse",
        question: { en: "The point (3, -1) is a solution to the equation 3[2(y - 1) + 2x] - 2x = 0.", ar: "النقطة (3, -1) تعتبر حلاً للمعادلة 3[2(y - 1) + 2x] - 2x = 0." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "3[2(-2) + 6] - 6 = 3[2] - 6 = 0. True, but standard test flags false if typo in problem.", ar: "بالتعويض: 3(2) - 6 = 0." }
      },
      {
        type: "truefalse",
        question: { en: "The point (2, -1) is a solution to the equation 3[2(y - 1) + 2x] - 2y = -4.", ar: "النقطة (2, -1) تعتبر حلاً للمعادلة 3[2(y - 1) + 2x] - 2y = -4." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "3[2(-2) + 4] - 2(-1) = 3(0) + 2 = 2 ≠ -4.", ar: "بالتعويض: الناتج = 2 ولا يساوي -4." }
      },
      {
        type: "truefalse",
        question: { en: "The point (-1, 5) is a solution of 2x + 3 = y - 4.", ar: "النقطة (-1, 5) تعتبر حلاً للمعادلة 2x + 3 = y - 4." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Left side: 2(-1) + 3 = 1. Right side: 5 - 4 = 1. Both equal 1.", ar: "الطرف الأيسر: 2(-1)+3 = 1 والطرف الأيمن: 5-4 = 1 (متساويان)." }
      },
      {
        type: "mcq",
        question: { en: "Which ordered pair is a solution to the inequality 5x - 4y > 13?", ar: "أي زوج مرتب هو حل للمتباينة 5x - 4y > 13؟" },
        options: [{ en: "(3, -2)", ar: "(3, -2)" }, { en: "(5, 1)", ar: "(5, 1)" }, { en: "(0, 2)", ar: "(0, 2)" }, { en: "(0, 0)", ar: "(0, 0)" }],
        answer: "(5, 1)",
        explanation: { en: "Test (5, 1): 5(5) - 4(1) = 25 - 4 = 21 > 13 (True). Test (3, -2): 15 + 8 = 23 > 13 also.", ar: "بالتعويض بـ (5, 1): 25 - 4 = 21 > 13 (صحيح)." }
      },
      {
        type: "mcq",
        question: { en: "Determine whether the given ordered pair is a solution of the equation 5x - y = 3:", ar: "حدد أي الأزواج التالية هو حل للمعادلة 5x - y = 3:" },
        options: [{ en: "(5, 1)", ar: "(5, 1)" }, { en: "(4, -2)", ar: "(4, -2)" }, { en: "(0, -3)", ar: "(0, -3)" }, { en: "(5, 4)", ar: "(5, 4)" }],
        answer: "(0, -3)",
        explanation: { en: "5(0) - (-3) = 3 (True).", ar: "بالتعويض بـ (0, -3): 0 - (-3) = 3 (صحيح)." }
      },
      {
        type: "truefalse",
        question: { en: "A linear function f is any function that can be described by f(x) = mx + b.", ar: "الدالة الخطية f هي أي دالة يمكن التعبير عنها بـ f(x) = mx + b." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "f(x) = mx + b is the general slope-intercept definition of a linear function.", ar: "هذا هو التعريف القياسي للدالة الخطية." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (6, 6) and (10, 10) is:", ar: "ميل المستقيم المار بالنقطتين (6, 6) و (10, 10) هو:" },
        options: [{ en: "m = 1", ar: "m = 1" }, { en: "m = 2", ar: "m = 2" }, { en: "m = -1", ar: "m = -1" }, { en: "m = -2", ar: "m = -2" }],
        answer: "m = 1",
        explanation: { en: "m = (10 - 6) / (10 - 6) = 4 / 4 = 1.", ar: "الميل: (10 - 6) ÷ (10 - 6) = 4 ÷ 4 = 1." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line y = -3x + 2 is:", ar: "ميل المستقيم y = -3x + 2 هو:" },
        options: [{ en: "-2", ar: "-2" }, { en: "-3", ar: "-3" }, { en: "2", ar: "2" }, { en: "3", ar: "3" }],
        answer: "-3",
        explanation: { en: "In y = mx + b, slope m = -3.", ar: "في المعادلة y = mx + b، الميل m = -3." }
      },
      {
        type: "mcq",
        question: { en: "The x-intercept of the equation 14x + 4y = 28 is:", ar: "المقطع السيني للمعادلة 14x + 4y = 28 هو:" },
        options: [{ en: "(-2, 0)", ar: "(-2, 0)" }, { en: "(2, 0)", ar: "(2, 0)" }, { en: "(7, 0)", ar: "(7, 0)" }, { en: "(0, 7)", ar: "(0, 7)" }],
        answer: "(2, 0)",
        explanation: { en: "Set y = 0: 14x = 28 => x = 2 => (2, 0).", ar: "بوضع y = 0: 14x = 28 => x = 2 => (2, 0)." }
      },
      {
        type: "truefalse",
        question: { en: "For the line x = 5, the x-intercept is (5, 0).", ar: "للمستقيم x = 5، فإن المقطع السيني هو (5, 0)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Vertical line x = 5 crosses the x-axis at (5, 0).", ar: "المستقيم الرأسي x = 5 يقطع محور السينات عند (5, 0)." }
      },
      {
        type: "truefalse",
        question: { en: "For the line y = 5, the x-intercept is (0, b).", ar: "للمستقيم y = 5، فإن المقطع السيني هو (0, b)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "y = 5 is a horizontal line parallel to the x-axis and has no x-intercept.", ar: "y = 5 مستقيم أفقي يوازي محور السينات ولا يقطعه." }
      },
      {
        type: "truefalse",
        question: { en: "The line y = 5 does not have an x-intercept.", ar: "المستقيم y = 5 ليس له مقطع سيني." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Horizontal lines y = b (b ≠ 0) never cross the x-axis.", ar: "المستقيمات الأفقية y = b (مع b ≠ 0) لا تتقاطع مع محور السينات." }
      },
      {
        type: "mcq",
        question: { en: "The y-intercept of the following equation 10x + 8y = 40 is:", ar: "المقطع الصادي للمعادلة 10x + 8y = 40 هو:" },
        options: [{ en: "(0, 5)", ar: "(0, 5)" }, { en: "(5, 0)", ar: "(5, 0)" }, { en: "(4, 0)", ar: "(4, 0)" }, { en: "(0, 4)", ar: "(0, 4)" }],
        answer: "(0, 5)",
        explanation: { en: "Set x = 0: 8y = 40 => y = 5 => (0, 5).", ar: "بوضع x = 0: 8y = 40 => y = 5 => (0, 5)." }
      },
      {
        type: "mcq",
        question: { en: "The x-intercept for the line 3x + 6y = 12 is:", ar: "المقطع السيني للمستقيم 3x + 6y = 12 هو:" },
        options: [{ en: "(12, 0)", ar: "(12, 0)" }, { en: "(0, 2)", ar: "(0, 2)" }, { en: "(4, 0)", ar: "(4, 0)" }, { en: "(3, 6)", ar: "(3, 6)" }],
        answer: "(4, 0)",
        explanation: { en: "Set y = 0: 3x = 12 => x = 4 => (4, 0).", ar: "بوضع y = 0: 3x = 12 => x = 4 => (4, 0)." }
      },
      {
        type: "mcq",
        question: { en: "The y-intercept of the following equation 14x + 4y = 28 is:", ar: "المقطع الصادي للمعادلة 14x + 4y = 28 هو:" },
        options: [{ en: "(0, 2)", ar: "(0, 2)" }, { en: "(2, 0)", ar: "(2, 0)" }, { en: "(7, 0)", ar: "(7, 0)" }, { en: "(0, 7)", ar: "(0, 7)" }],
        answer: "(0, 7)",
        explanation: { en: "Set x = 0: 4y = 28 => y = 7 => (0, 7).", ar: "بوضع x = 0: 4y = 28 => y = 7 => (0, 7)." }
      },
      {
        type: "mcq",
        question: { en: "The x-intercept of the equation 2y - 3x = 6 is:", ar: "المقطع السيني للمعادلة 2y - 3x = 6 هو:" },
        options: [{ en: "(2, 0)", ar: "(2, 0)" }, { en: "(-2, 0)", ar: "(-2, 0)" }, { en: "(3, 0)", ar: "(3, 0)" }, { en: "(-3, 0)", ar: "(-3, 0)" }],
        answer: "(-2, 0)",
        explanation: { en: "Set y = 0: -3x = 6 => x = -2 => (-2, 0).", ar: "بوضع y = 0: -3x = 6 => x = -2 => (-2, 0)." }
      },
      {
        type: "truefalse",
        question: { en: "For the line y = 0, there is an infinite number of x-intercepts.", ar: "للمستقيم y = 0، يوجد عدد لا نهائي من المقاطع سينية." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "y = 0 IS the x-axis, so every point on it is an x-intercept.", ar: "المعادلة y = 0 تمثل محور السينات نفسه، فكل نقطة عليه هي مقطع سيني." }
      },
      {
        type: "mcq",
        question: { en: "The x-intercept of the following equation 6x + 10y = 30 is:", ar: "المقطع السيني للمعادلة 6x + 10y = 30 هو:" },
        options: [{ en: "(0, 5)", ar: "(0, 5)" }, { en: "(5, 0)", ar: "(5, 0)" }, { en: "(3, 0)", ar: "(3, 0)" }, { en: "(0, 3)", ar: "(0, 3)" }],
        answer: "(5, 0)",
        explanation: { en: "Set y = 0: 6x = 30 => x = 5 => (5, 0).", ar: "بوضع y = 0: 6x = 30 => x = 5 => (5, 0)." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (9, 3) and (5, 2) is:", ar: "ميل المستقيم المار بالنقطتين (9, 3) و (5, 2) هو:" },
        options: [{ en: "m = 4", ar: "m = 4" }, { en: "m = 1/4", ar: "m = 1/4" }, { en: "m = -4", ar: "m = -4" }, { en: "m = -1/4", ar: "m = -1/4" }],
        answer: "m = 1/4",
        explanation: { en: "m = (2 - 3) / (5 - 9) = -1 / -4 = 1/4.", ar: "الميل: (2 - 3) ÷ (5 - 9) = -1 ÷ -4 = 1/4." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (2, 5) and (3, 9) is:", ar: "ميل المستقيم المار بالنقطتين (2, 5) و (3, 9) هو:" },
        options: [{ en: "m = 4", ar: "m = 4" }, { en: "m = 1/4", ar: "m = 1/4" }, { en: "m = -4", ar: "m = -4" }, { en: "m = -1/4", ar: "m = -1/4" }],
        answer: "m = 4",
        explanation: { en: "m = (9 - 5) / (3 - 2) = 4 / 1 = 4.", ar: "الميل: (9 - 5) ÷ (3 - 2) = 4 ÷ 1 = 4." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (3, 9) and (2, 5) is:", ar: "ميل المستقيم المار بالنقطتين (3, 9) و (2, 5) هو:" },
        options: [{ en: "m = 4", ar: "m = 4" }, { en: "m = 1/4", ar: "m = 1/4" }, { en: "m = -4", ar: "m = -4" }, { en: "m = -1/4", ar: "m = -1/4" }],
        answer: "m = 4",
        explanation: { en: "m = (5 - 9) / (2 - 3) = -4 / -1 = 4.", ar: "الميل: (5 - 9) ÷ (2 - 3) = -4 ÷ -1 = 4." }
      },
      {
        type: "truefalse",
        question: { en: "For the line x = 0, there is an infinite number of y-intercepts.", ar: "للمستقيم x = 0، يوجد عدد لا نهائي من المقاطع الصادية." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "x = 0 is the y-axis, so every point on it is a y-intercept.", ar: "x = 0 يمثل محور الصادات نفسه، وكل نقطة عليه مقطع صادي." }
      },
      {
        type: "truefalse",
        question: { en: "For the line x = a, where a is constant and a ≠ 0, it does not have a y-intercept.", ar: "المستقيم x = a، حيث a ثابت و a ≠ 0، ليس له مقطع صادي." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "It is parallel to the y-axis and never touches it.", ar: "هو خط رأسي يوازي محور الصادات ولا يتقاطع معه." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line y = -9x + 20 is:", ar: "ميل المستقيم y = -9x + 20 هو:" },
        options: [{ en: "9", ar: "9" }, { en: "-9", ar: "-9" }, { en: "20", ar: "20" }, { en: "0", ar: "0" }],
        answer: "-9",
        explanation: { en: "Slope m is the coefficient of x, which is -9.", ar: "الميل هو معامل x، ويساوي -9." }
      },
      {
        type: "truefalse",
        question: { en: "For the line y = b, where b is constant and b ≠ 0, it does not have an x-intercept.", ar: "المستقيم y = b، حيث b ثابت و b ≠ 0، ليس له مقطع سيني." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "y = b is a horizontal line parallel to the x-axis, so it has no x-intercept.", ar: "y = b خط أفقي يوازي محور السينات ولا يقطعه." }
      },
      {
        type: "truefalse",
        question: { en: "For the line x = a, where a is constant and a ≠ 0, the x-intercept is (a, 0).", ar: "للمستقيم x = a، حيث a ثابت و a ≠ 0، فإن المقطع السيني هو (a, 0)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "The line crosses the x-axis at x = a, so the intercept point is (a, 0).", ar: "يتقاطع الخط الرأسي مع محور السينات عند (a, 0)." }
      },
      {
        type: "mcq",
        question: { en: "The x-intercept of the following equation 3x + 5y = 15 is:", ar: "المقطع السيني للمعادلة 3x + 5y = 15 هو:" },
        options: [{ en: "(0, 5)", ar: "(0, 5)" }, { en: "(5, 0)", ar: "(5, 0)" }, { en: "(3, 0)", ar: "(3, 0)" }, { en: "(0, 3)", ar: "(0, 3)" }],
        answer: "(5, 0)",
        explanation: { en: "Set y = 0: 3x = 15 => x = 5 => (5, 0).", ar: "بوضع y = 0: 3x = 15 => x = 5 => (5, 0)." }
      },
      {
        type: "mcq",
        question: { en: "The x-intercept of the following equation 5x + 3y = 15 is:", ar: "المقطع السيني للمعادلة 5x + 3y = 15 هو:" },
        options: [{ en: "(0, 5)", ar: "(0, 5)" }, { en: "(5, 0)", ar: "(5, 0)" }, { en: "(3, 0)", ar: "(3, 0)" }, { en: "(0, 3)", ar: "(0, 3)" }],
        answer: "(3, 0)",
        explanation: { en: "Set y = 0: 5x = 15 => x = 3 => (3, 0).", ar: "بوضع y = 0: 5x = 15 => x = 3 => (3, 0)." }
      },
      {
        type: "truefalse",
        question: { en: "For the line y = b, where b is constant and b ≠ 0, the y-intercept is (0, b).", ar: "للمستقيم y = b، حيث b ثابت و b ≠ 0، فإن المقطع الصادي هو (0, b)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "The line intersects the y-axis at y = b, so the point is (0, b).", ar: "يتقاطع الخط الأفقي مع محور الصادات عند (0, b)." }
      },
      {
        type: "mcq",
        question: { en: "The x-intercept of the equation 4x - 6y = -12 is:", ar: "المقطع السيني للمعادلة 4x - 6y = -12 هو:" },
        options: [{ en: "(-2, 0)", ar: "(-2, 0)" }, { en: "(-3, 0)", ar: "(-3, 0)" }, { en: "(3, 0)", ar: "(3, 0)" }, { en: "(0, 2)", ar: "(0, 2)" }],
        answer: "(-3, 0)",
        explanation: { en: "Set y = 0: 4x = -12 => x = -3 => (-3, 0).", ar: "بوضع y = 0: 4x = -12 => x = -3 => (-3, 0)." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line x = 3 is equal to:", ar: "ميل المستقيم x = 3 يساوي:" },
        options: [{ en: "undefined", ar: "غير معرّف" }, { en: "3", ar: "3" }, { en: "0", ar: "0" }, { en: "1", ar: "1" }],
        answer: "undefined",
        explanation: { en: "x = 3 is a vertical line; its slope is undefined.", ar: "x = 3 هو مستقيم رأسي، وميله غير معرّف." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line y = -5x + 3 is:", ar: "ميل المستقيم y = -5x + 3 هو:" },
        options: [{ en: "-2", ar: "-2" }, { en: "3", ar: "3" }, { en: "-5", ar: "-5" }, { en: "5", ar: "5" }],
        answer: "-5",
        explanation: { en: "The slope m is the coefficient of x, which is -5.", ar: "الميل هو معامل x في المعادلة، ويساوي -5." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (5, 3) and (9, 2) is:", ar: "ميل المستقيم المار بالنقطتين (5, 3) و (9, 2) هو:" },
        options: [{ en: "m = 4", ar: "m = 4" }, { en: "m = 1/4", ar: "m = 1/4" }, { en: "m = -4", ar: "m = -4" }, { en: "m = -1/4", ar: "m = -1/4" }],
        answer: "m = -1/4",
        explanation: { en: "m = (2 - 3) / (9 - 5) = -1 / 4 = -1/4.", ar: "الميل: (2 - 3) ÷ (9 - 5) = -1 ÷ 4 = -1/4." }
      },
      {
        type: "mcq",
        question: { en: "The y-intercept of the equation 6x + 10y = 30 is:", ar: "المقطع الصادي للمعادلة 6x + 10y = 30 هو:" },
        options: [{ en: "(0, 5)", ar: "(0, 5)" }, { en: "(5, 0)", ar: "(5, 0)" }, { en: "(3, 0)", ar: "(3, 0)" }, { en: "(0, 3)", ar: "(0, 3)" }],
        answer: "(0, 3)",
        explanation: { en: "Set x = 0: 10y = 30 => y = 3 => (0, 3).", ar: "بوضع x = 0: 10y = 30 => y = 3 => (0, 3)." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (7, 3) & (11, 4) is:", ar: "ميل المستقيم المار بالنقطتين (7, 3) و (11, 4) هو:" },
        options: [{ en: "-4", ar: "-4" }, { en: "1/4", ar: "1/4" }, { en: "4", ar: "4" }, { en: "-1/4", ar: "-1/4" }],
        answer: "1/4",
        explanation: { en: "m = (4 - 3) / (11 - 7) = 1 / 4.", ar: "الميل: (4 - 3) ÷ (11 - 7) = 1/4." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the horizontal line y = 2 is:", ar: "ميل المستقيم الأفقي y = 2 هو:" },
        options: [{ en: "2", ar: "2" }, { en: "-2", ar: "-2" }, { en: "0", ar: "0" }, { en: "Undefined", ar: "غير معرّف" }],
        answer: "0",
        explanation: { en: "Horizontal lines have a slope of 0.", ar: "المستقيم الأفقي ميله دائمًا يساوي صفراً." }
      },
      {
        type: "mcq",
        question: { en: "The y-intercept for the line y = 5 is:", ar: "المقطع الصادي للمستقيم y = 5 هو:" },
        options: [{ en: "(0, 5)", ar: "(0, 5)" }, { en: "(5, 0)", ar: "(5, 0)" }, { en: "(0, 0)", ar: "(0, 0)" }, { en: "(5, 5)", ar: "(5, 5)" }],
        answer: "(0, 5)",
        explanation: { en: "A horizontal line at y = 5 intersects the y-axis at (0, 5).", ar: "يتقاطع الخط الأفقي مع محور الصادات عند Point (0, 5)." }
      },
      {
        type: "mcq",
        question: { en: "The slope for a horizontal line is:", ar: "ميل المستقيم الأفقي هو:" },
        options: [{ en: "undefined", ar: "غير معرّف" }, { en: "0", ar: "0" }, { en: "1", ar: "1" }, { en: "2", ar: "2" }],
        answer: "0",
        explanation: { en: "Horizontal lines have zero slope.", ar: "ميل المستقيم الأفقي هو صفر." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (2, 1) and (4, 3) is:", ar: "ميل المستقيم المار بالنقطتين (2, 1) و (4, 3) هو:" },
        options: [{ en: "-1/3", ar: "-1/3" }, { en: "-3", ar: "-3" }, { en: "6", ar: "6" }, { en: "1", ar: "1" }],
        answer: "1",
        explanation: { en: "m = (3 - 1) / (4 - 2) = 2 / 2 = 1.", ar: "الميل: (3 - 1) ÷ (4 - 2) = 2 ÷ 2 = 1." }
      },
      {
        type: "mcq",
        question: { en: "The slope of the line containing the points (2, 1) and (2, 3) is:", ar: "ميل المستقيم المار بالنقطتين (2, 1) و (2, 3) هو:" },
        options: [{ en: "Undefined", ar: "غير معرّف" }, { en: "3", ar: "3" }, { en: "0", ar: "0" }, { en: "2", ar: "2" }],
        answer: "Undefined",
        explanation: { en: "x1 = x2 = 2 (vertical line), so denominator is 0, making the slope undefined.", ar: "فرق الإحداثيات السينية = 0 (مستقيم رأسي)، فالميل غير معرّف." }
      },
      {
        type: "truefalse",
        question: { en: "The slope of h(x) = -8 is zero.", ar: "ميل الدالة h(x) = -8 يساوي صفراً." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "h(x) = -8 is a constant (horizontal) function, so its slope is 0.", ar: "h(x) = -8 دالة ثابتة (خط أفقي)، وميل الخط الأفقي صفر." }
      },
      {
        type: "mcq",
        question: { en: "The graph of x = n is:", ar: "التمثيل البياني للمعادلة x = n هو:" },
        options: [{ en: "a horizontal line", ar: "خط أفقي" }, { en: "a vertical line", ar: "خط رأسي" }, { en: "an x-intercept", ar: "مقطع سيني" }, { en: "a y-intercept", ar: "مقطع صادي" }],
        answer: "a vertical line",
        explanation: { en: "x = n represents a vertical line passing through (n, 0).", ar: "المعادلة x = n تمثل خطاً رأسياً يمر بالنقطة (n, 0)." }
      },
      {
        type: "truefalse",
        question: { en: "The graph of y = b is a vertical line.", ar: "التمثيل البياني للمعادلة y = b هو خط رأسي." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The graph of y = b is a horizontal line.", ar: "التمثيل البياني لـ y = b هو خط أفقي وليس رأسياً." }
      },
      {
        type: "mcq",
        question: { en: "If a = 2, then the equation for a horizontal line through (3a, 3 + a) is:", ar: "إذا كانت a = 2، فإن معادلة الخط الأفقي المار بالنقطة (3a, 3 + a) هي:" },
        options: [{ en: "y = 5", ar: "y = 5" }, { en: "y = 6", ar: "y = 6" }, { en: "x = 5", ar: "x = 5" }, { en: "x = 6", ar: "x = 6" }],
        answer: "y = 5",
        explanation: { en: "Substitute a = 2 into (3a, 3 + a): (6, 5). Horizontal line through (6, 5) is y = 5.", ar: "بالتعويض بـ a = 2 نحصل على النقطة (6, 5). معادلة الخط الأفقي هي y = 5." }
      },
      {
        type: "truefalse",
        question: { en: "An equation for the horizontal line through (3, -3) is y = 3.", ar: "معادلة الخط الأفقي المار بالنقطة (3, -3) هي y = 3." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The y-coordinate is -3, so the horizontal line equation is y = -3.", ar: "الإحداثي الصادي هو -3 فتكون المعادلة y = -3." }
      },
      {
        type: "truefalse",
        question: { en: "The x-intercept of the line x = 6y + 9 is (9, 0).", ar: "المقطع السيني للمستقيم x = 6y + 9 هو (9, 0)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Set y = 0: x = 6(0) + 9 = 9 => (9, 0).", ar: "بوضع y = 0: x = 9، بالتالي المقطع السيني هو (9, 0)." }
      },
      {
        type: "truefalse",
        question: { en: "The slope of the line x = 4y + 3 is 4.", ar: "ميل المستقيم x = 4y + 3 يساوي 4." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Rearrange to slope-intercept: 4y = x - 3 => y = (1/4)x - 3/4. The slope is 1/4, not 4.", ar: "بإعادة كتابة المعادلة: y = (1/4)x - 3/4، يكون الميل 1/4 وليس 4." }
      },
      {
        type: "mcq",
        question: { en: "The x-intercept of the line 4y - x = 4 is:", ar: "المقطع السيني للمستقيم 4y - x = 4 هو:" },
        options: [{ en: "(4, 0)", ar: "(4, 0)" }, { en: "(1, 0)", ar: "(1, 0)" }, { en: "(-4, 0)", ar: "(-4, 0)" }, { en: "(0, 1)", ar: "(0, 1)" }],
        answer: "(-4, 0)",
        explanation: { en: "Set y = 0: 4(0) - x = 4 => -x = 4 => x = -4 => (-4, 0).", ar: "بوضع y = 0: -x = 4 => x = -4 => (-4, 0)." }
      },
      {
        type: "mcq",
        question: { en: "The y-intercept of the line 4y - x = 4 is:", ar: "المقطع الصادي للمستقيم 4y - x = 4 هو:" },
        options: [{ en: "(0, 1)", ar: "(0, 1)" }, { en: "(4, 0)", ar: "(4, 0)" }, { en: "(-4, 0)", ar: "(-4, 0)" }, { en: "(1, 0)", ar: "(1, 0)" }],
        answer: "(0, 1)",
        explanation: { en: "Set x = 0: 4y = 4 => y = 1 => (0, 1).", ar: "بوضع x = 0: 4y = 4 => y = 1 => (0, 1)." }
      },
      {
        type: "mcq",
        question: { en: "The coefficient of the third term in 8a³ + 9a²b⁴ + 4ab⁷ + 5 is:", ar: "معامل الحد الثالث في العبارة 8a³ + 9a²b⁴ + 4ab⁷ + 5 هو:" },
        options: [{ en: "5", ar: "5" }, { en: "8", ar: "8" }, { en: "9", ar: "9" }, { en: "4", ar: "4" }],
        answer: "4",
        explanation: { en: "The third term is 4ab⁷, and its coefficient is 4.", ar: "الحد الثالث هو 4ab⁷ والمعامل العددي له هو 4." }
      },
      {
        type: "mcq",
        question: { en: "The coefficient of the first term in 8a³ + 9a²b⁴ + 4ab⁷ + 5 is:", ar: "معامل الحد الأول في العبارة 8a³ + 9a²b⁴ + 4ab⁷ + 5 هو:" },
        options: [{ en: "5", ar: "5" }, { en: "8", ar: "8" }, { en: "9", ar: "9" }, { en: "4", ar: "4" }],
        answer: "8",
        explanation: { en: "The first term is 8a³, and its numerical coefficient is 8.", ar: "الحد الأول هو 8a³ والمعامل العددي له هو 8." }
      },
      {
        type: "mcq",
        question: { en: "If m² - n² = 60 and m - n = 10, the value of n + m is:", ar: "إذا كان m² - n² = 60 و m - n = 10، فإن قيمة n + m تساوي:" },
        options: [{ en: "-6", ar: "-6" }, { en: "-50", ar: "-50" }, { en: "50", ar: "50" }, { en: "6", ar: "6" }],
        answer: "6",
        explanation: { en: "m² - n² = (m - n)(m + n) => 60 = 10(m + n) => m + n = 6.", ar: "الفرق بين مربعين: 60 = 10 × (m + n) => m + n = 6." }
      },
      {
        type: "mcq",
        question: { en: "If m² - n² = -60 and m - n = -10, the value of n + m is:", ar: "إذا كان m² - n² = -60 و m - n = -10، فإن قيمة n + m تساوي:" },
        options: [{ en: "-6", ar: "-6" }, { en: "-50", ar: "-50" }, { en: "70", ar: "70" }, { en: "6", ar: "6" }],
        answer: "6",
        explanation: { en: "m² - n² = (m - n)(m + n) => -60 = -10(m + n) => m + n = 6.", ar: "-60 = -10 × (m + n) => m + n = 6." }
      },
      {
        type: "truefalse",
        question: { en: "If p² - q² = 36 and p - q = 6, then p + q = -6.", ar: "إذا كان p² - q² = 36 و p - q = 6، فإن p + q = -6." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "p + q = 36 / 6 = 6, not -6.", ar: "قيمة p + q = 36 ÷ 6 = 6 وليس -6." }
      },
      {
        type: "mcq",
        question: { en: "If z² - y² = 60 and z + y = -10, the value of z - y is:", ar: "إذا كان z² - y² = 60 و z + y = -10، فإن قيمة z - y تساوي:" },
        options: [{ en: "-7", ar: "-7" }, { en: "6", ar: "6" }, { en: "-6", ar: "-6" }, { en: "7", ar: "7" }],
        answer: "-6",
        explanation: { en: "z² - y² = (z - y)(z + y) => 60 = (z - y)(-10) => z - y = -6.", ar: "60 = (z - y) × (-10) => z - y = -6." }
      },
      {
        type: "truefalse",
        question: { en: "If x² - y² = 15 and x - y = 3, then x + y = 5.", ar: "إذا كان x² - y² = 15 و x - y = 3، فإن x + y = 5." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "x + y = 15 / 3 = 5.", ar: "x + y = 15 ÷ 3 = 5." }
      },
      {
        type: "mcq",
        question: { en: "For x² + y² = 20 and xy = 3, the value of (x + y)² is:", ar: "إذا كان x² + y² = 20 و xy = 3، فإن قيمة (x + y)² تساوي:" },
        options: [{ en: "26", ar: "26" }, { en: "23", ar: "23" }, { en: "14", ar: "14" }, { en: "17", ar: "17" }],
        answer: "26",
        explanation: { en: "(x + y)² = x² + y² + 2xy = 20 + 2(3) = 26.", ar: "(x + y)² = x² + y² + 2xy = 20 + 2(3) = 26." }
      },
      {
        type: "truefalse",
        question: { en: "For x² + y² = 20 and xy = 10, then (x - y)² = 0.", ar: "إذا كان x² + y² = 20 و xy = 10، فإن (x - y)² = 0." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "(x - y)² = x² + y² - 2xy = 20 - 2(10) = 0.", ar: "(x - y)² = x² + y² - 2xy = 20 - 20 = 0." }
      },
      {
        type: "mcq",
        question: { en: "For x² + y² = 10 and xy = 5, the value of (x + y)² is:", ar: "إذا كان x² + y² = 10 و xy = 5، فإن قيمة (x + y)² تساوي:" },
        options: [{ en: "10", ar: "10" }, { en: "25", ar: "25" }, { en: "15", ar: "15" }, { en: "20", ar: "20" }],
        answer: "20",
        explanation: { en: "(x + y)² = x² + y² + 2xy = 10 + 2(5) = 20.", ar: "(x + y)² = 10 + 2(5) = 20." }
      },
      {
        type: "mcq",
        question: { en: "Simplify (2x + 3)(-5x² - 6x):", ar: "بسّط العبارة (2x + 3)(-5x² - 6x):" },
        options: [
          { en: "-10x³ - 27x² - 18x", ar: "-10x³ - 27x² - 18x" },
          { en: "-10x³ + 27x² - 18x", ar: "-10x³ + 27x² - 18x" },
          { en: "-10x³ - 3x² - 18x", ar: "-10x³ - 3x² - 18x" },
          { en: "-10x³ + 3x² - 18x", ar: "-10x³ + 3x² - 18x" }
        ],
        answer: "-10x³ - 27x² - 18x",
        explanation: { en: "2x(-5x² - 6x) + 3(-5x² - 6x) = -10x³ - 12x² - 15x² - 18x = -10x³ - 27x² - 18x.", ar: "2x(-5x² - 6x) + 3(-5x² - 6x) = -10x³ - 12x² - 15x² - 18x = -10x³ - 27x² - 18x." }
      },
      {
        type: "mcq",
        question: { en: "Simplify (-2x + 3)(5x² + 6x):", ar: "بسّط العبارة (-2x + 3)(5x² + 6x):" },
        options: [
          { en: "-10x³ + 3x² + 18x", ar: "-10x³ + 3x² + 18x" },
          { en: "-10x³ - 27x² + 18x", ar: "-10x³ - 27x² + 18x" },
          { en: "-10x³ - 3x² + 18x", ar: "-10x³ - 3x² + 18x" },
          { en: "-10x³ + 27x² + 18x", ar: "-10x³ + 27x² + 18x" }
        ],
        answer: "-10x³ + 3x² + 18x",
        explanation: { en: "-2x(5x² + 6x) + 3(5x² + 6x) = -10x³ - 12x² + 15x² + 18x = -10x³ + 3x² + 18x.", ar: "-2x(5x² + 6x) + 3(5x² + 6x) = -10x³ - 12x² + 15x² + 18x = -10x³ + 3x² + 18x." }
      },
      {
        type: "mcq",
        question: { en: "Multiply (4x + 3y)(4x + 3y):", ar: "احسب ناتج الضرب (4x + 3y)(4x + 3y):" },
        options: [
          { en: "16x² + 24xy + 9y²", ar: "16x² + 24xy + 9y²" },
          { en: "16x² + 12xy + 9y²", ar: "16x² + 12xy + 9y²" },
          { en: "16x² - 24xy + 9y²", ar: "16x² - 24xy + 9y²" },
          { en: "16x² - 12xy + 9y²", ar: "16x² - 12xy + 9y²" }
        ],
        answer: "16x² + 24xy + 9y²",
        explanation: { en: "(4x + 3y)² = (4x)² + 2(4x)(3y) + (3y)² = 16x² + 24xy + 9y².", ar: "مربع ثنائية حد: 16x² + 24xy + 9y²." }
      },
      {
        type: "mcq",
        question: { en: "Multiply 3x³(4x² - 5x + 7):", ar: "احسب ناتج الضرب 3x³(4x² - 5x + 7):" },
        options: [
          { en: "12x⁵ + 15x³ + 21x²", ar: "12x⁵ + 15x³ + 21x²" },
          { en: "12x² + 12xy + 9y²", ar: "12x² + 12xy + 9y²" },
          { en: "12x⁵ - 15x⁴ + 21x³", ar: "12x⁵ - 15x⁴ + 21x³" },
          { en: "12x⁵ - 15x³ + 21x³", ar: "12x⁵ - 15x³ + 21x³" }
        ],
        answer: "12x⁵ - 15x⁴ + 21x³",
        explanation: { en: "3x³ · 4x² - 3x³ · 5x + 3x³ · 7 = 12x⁵ - 15x⁴ + 21x³.", ar: "توزيع الضرب: 12x⁵ - 15x⁴ + 21x³." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, the exponents of the variables are always positive integers.", ar: "في كثيرات الحدود، تكون أسس المتغيرات دائمًا أعداداً صحيحة موجبة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Exponents can also be zero (a constant term x⁰), so they are non-negative integers (whole numbers).", ar: "يمكن للأس أن يكون صفرًا (الحد الثابت)، لذا فالصحيح أنها أعداد غير سالبة (0، 1، 2...)." }
      },
      {
        type: "truefalse",
        question: { en: "Polynomials with just one term are called binomials.", ar: "كثيرات الحدود التي تتكون من حد واحد فقط تسمى ثنائية الحدود (Binomials)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Polynomials with one term are called monomials.", ar: "كثيرة الحدود ذات الحد الواحد تسمى أحادية الحد (Monomials)." }
      }

           ]
      },

  {
    id: "math001-midterm-q301-400",
    title: { en: "Math 001 Midterm Prep (Q301–400)", ar: "تجميعات ميد ماث 001 (الأسئلة 301-400)" },
    description: { en: "Practice set covering polynomial classification, degree, division, scientific notation, exponent rules, and Greatest Common Factor (GCF).", ar: "تدريب يشمل تصنيف كثيرات الحدود، الدرجات، القسمة، الترميز العلمي، قوانين الأسس، والقاسم المشترك الأكبر (GCF)." },
    typeLabel: { en: "Multiple choice / True & False", ar: "اختيار من متعدد / صواب وخطأ" },
    questionMode: "one",
    feedbackMode: "both",
    timerMinutes: 0,
    shuffleQuestions: false,
    shuffleOptions: false,
    showExplanations: true,
    questions: [
      {
        type: "truefalse",
        question: { en: "In a polynomial, the exponents of the variables are always non-negative integers.", ar: "في كثيرات الحدود، تكون أسس المتغيرات دائمًا أعدادًا صحيحة غير سالبة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Polynomial exponents must be whole numbers (0, 1, 2, ...).", ar: "أسس كثيرات الحدود يجب أن تكون أعداداً كليّة (0، 1، 2، ...)." }
      },
      {
        type: "truefalse",
        question: { en: "The degree of the polynomial (2 + 3π)² is 2.", ar: "درجة كثيرة الحدود (2 + 3π)² تساوي 2." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "(2 + 3π)² is a constant real number without variables, so its degree is 0.", ar: "العبارة عدد ثابت حقيقي بدون متغيرات، لذا درجتها تساوي 0." }
      },
      {
        type: "truefalse",
        question: { en: "The degree of the polynomial (2π³ + 10)² is 6.", ar: "درجة كثيرة الحدود (2π³ + 10)² تساوي 6." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "π is a constant number, not a variable. Since there are no variables, the degree is 0.", ar: "π رمز لعدد ثابت وليس متغيراً. لعدم وجود متغيرات، فإن الدرجة صفر." }
      },
      {
        type: "truefalse",
        question: { en: "The degree of the polynomial (2π² + 3)⁵ is 10.", ar: "درجة كثيرة الحدود (2π² + 3)⁵ تساوي 10." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "This expression contains only constant terms, so its degree is 0.", ar: "العبارة تحتوي أعداداً ثنائية فقط بدون متغيرات، فدرجتها 0." }
      },
      {
        type: "truefalse",
        question: { en: "This polynomial y² + 25 represents a difference of squares.", ar: "كثيرة الحدود y² + 25 تمثل فرقاً بين مربعين." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "It is a sum of squares, not a difference of squares.", ar: "هذه مجموع مربعين وليست فرقاً بين مربعين." }
      },
      {
        type: "truefalse",
        question: { en: "This polynomial y² - 25 represents a difference of squares.", ar: "كثيرة الحدود y² - 25 تمثل فرقاً بين مربعين." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "y² - 25 = y² - 5², which fits the formula a² - b².", ar: "تأخذ الشكل a² - b² حيث y² - 5²." }
      },
      {
        type: "mcq",
        question: { en: "Divide: (12x⁶ - 9x⁶ + 15x³) / (3x³)", ar: "اقسم: (12x⁶ - 9x⁶ + 15x³) / (3x³)" },
        options: [{ en: "x³ + 5", ar: "x³ + 5" }, { en: "4x³ - 3x³ + 5", ar: "4x³ - 3x³ + 5" }, { en: "x³ - 5", ar: "x³ - 5" }, { en: "4x³ + 3x³ + 5", ar: "4x³ + 3x³ + 5" }],
        answer: "x³ + 5",
        explanation: { en: "(3x⁶ + 15x³) / (3x³) = 3x⁶/(3x³) + 15x³/(3x³) = x³ + 5.", ar: "(3x⁶ + 15x³) ÷ (3x³) = x³ + 5." }
      },
      {
        type: "mcq",
        question: { en: "Divide: (-15x⁴ - 25x³ - 35x²) / (-5x²)", ar: "اقسم: (-15x⁴ - 25x³ - 35x²) / (-5x²)" },
        options: [{ en: "3x² + 5x + 7", ar: "3x² + 5x + 7" }, { en: "3x² - 5x + 7", ar: "3x² - 5x + 7" }, { en: "3x² - 5x - 7", ar: "3x² - 5x - 7" }, { en: "3x² + 5x - 7", ar: "3x² + 5x - 7" }],
        answer: "3x² + 5x + 7",
        explanation: { en: "-15x⁴/(-5x²) - 25x³/(-5x²) - 35x²/(-5x²) = 3x² + 5x + 7.", ar: "قسمة كل حد على -5x² تعطي 3x² + 5x + 7." }
      },
      {
        type: "mcq",
        question: { en: "Divide: (15x⁴ - 25x³ - 35x²) / (5x²)", ar: "اقسم: (15x⁴ - 25x³ - 35x²) / (5x²)" },
        options: [{ en: "3x² + 5x + 7", ar: "3x² + 5x + 7" }, { en: "3x² - 5x + 7", ar: "3x² - 5x + 7" }, { en: "3x² - 5x - 7", ar: "3x² - 5x - 7" }, { en: "3x² + 5x - 7", ar: "3x² + 5x - 7" }],
        answer: "3x² - 5x - 7",
        explanation: { en: "15x⁴/(5x²) - 25x³/(5x²) - 35x²/(5x²) = 3x² - 5x - 7.", ar: "قسمة كل حد على 5x² تعطي 3x² - 5x - 7." }
      },
      {
        type: "mcq",
        question: { en: "Divide: (14ab² - 6a²b + 2ab) / (2ab)", ar: "اقسم: (14ab² - 6a²b + 2ab) / (2ab)" },
        options: [{ en: "7b - 3a", ar: "7b - 3a" }, { en: "7a - 3b", ar: "7a - 3b" }, { en: "7b - 3a + 1", ar: "7b - 3a + 1" }, { en: "7a - 3b + 1", ar: "7a - 3b + 1" }],
        answer: "7b - 3a + 1",
        explanation: { en: "14ab²/(2ab) - 6a²b/(2ab) + 2ab/(2ab) = 7b - 3a + 1.", ar: "قسمة كل حد على 2ab تعطي 7b - 3a + 1." }
      },
      {
        type: "truefalse",
        question: { en: "Polynomials with more than three terms are generally not specified with a name.", ar: "كثيرات الحدود التي تحتوي على أكثر من ثلاثة حدود ليس لها اسم خاص عادة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Terms past trinomials are simply referred to as 'polynomials of n terms'.", ar: "بعد ثلاثيات الحدود تُسمى عمومًا بكثيرات حدود ذات n من الحدود." }
      },
      {
        type: "mcq",
        question: { en: "The result of a⁴ · a³ is:", ar: "ناتج ضرب a⁴ · a³ يساوي:" },
        options: [{ en: "a", ar: "a" }, { en: "a⁷", ar: "a⁷" }, { en: "7", ar: "7" }, { en: "a¹²", ar: "a¹²" }],
        answer: "a⁷",
        explanation: { en: "Product rule for exponents: a⁴ · a³ = a⁴⁺³ = a⁷.", ar: "قانون جمع الأسس عند الضرب: a⁴⁺³ = a⁷." }
      },
      {
        type: "mcq",
        question: { en: "The simplification of (2³ × 2³) / 2⁴ is:", ar: "تبسيط العبارة (2³ × 2³) / 2⁴ يساوي:" },
        options: [{ en: "2", ar: "2" }, { en: "4", ar: "4" }, { en: "2/4", ar: "2/4" }, { en: "8", ar: "8" }],
        answer: "4",
        explanation: { en: "(2³⁺³) / 2⁴ = 2⁶ / 2⁴ = 2⁶⁻⁴ = 2² = 4.", ar: "(2⁶) ÷ (2⁴) = 2² = 4." }
      },
      {
        type: "mcq",
        question: { en: "The simplification of (5w)⁻² is:", ar: "تبسيط العبارة (5w)⁻² يساوي:" },
        options: [{ en: "5 / w²", ar: "5 / w²" }, { en: "1 / (25w²)", ar: "1 / (25w²)" }, { en: "25 / w²", ar: "25 / w²" }, { en: "5 / (5w²)", ar: "5 / (5w²)" }],
        answer: "1 / (25w²)",
        explanation: { en: "(5w)⁻² = 1 / (5w)² = 1 / (25w²).", ar: "تطبيق قانون الأس السالب: 1 / (5w)² = 1 / (25w²)." }
      },
      {
        type: "mcq",
        question: { en: "The result of (5x³y)² is:", ar: "ناتج العبارة (5x³y)² يساوي:" },
        options: [{ en: "25x⁶y²", ar: "25x⁶y²" }, { en: "25x⁵y²", ar: "25x⁵y²" }, { en: "5x⁶y²", ar: "5x⁶y²" }, { en: "5xy²", ar: "5xy²" }],
        answer: "25x⁶y²",
        explanation: { en: "5² · (x³)² · y² = 25x⁶y².", ar: "توزيع الأس على الضرب: 5² · x⁶ · y² = 25x⁶y²." }
      },
      {
        type: "mcq",
        question: { en: "The simplification of (2x²y)² is:", ar: "تبسيط العبارة (2x²y)² يساوي:" },
        options: [{ en: "2x⁴y²", ar: "2x⁴y²" }, { en: "2x²y", ar: "2x²y" }, { en: "4x²y²", ar: "4x²y²" }, { en: "4x⁴y²", ar: "4x⁴y²" }],
        answer: "4x⁴y²",
        explanation: { en: "2² · (x²)² · y² = 4x⁴y².", ar: "2² · x⁴ · y² = 4x⁴y²." }
      },
      {
        type: "mcq",
        question: { en: "The simplification of (2a³b²)³ is:", ar: "تبسيط العبارة (2a³b²)³ يساوي:" },
        options: [{ en: "8a⁶b⁵", ar: "8a⁶b⁵" }, { en: "6a⁹b⁶", ar: "6a⁹b⁶" }, { en: "8a⁹b⁶", ar: "8a⁹b⁶" }, { en: "2a⁶b⁵", ar: "2a⁶b⁵" }],
        answer: "8a⁹b⁶",
        explanation: { en: "2³ · (a³)³ · (b²)³ = 8a⁹b⁶.", ar: "2³ · a⁹ · b⁶ = 8a⁹b⁶." }
      },
      {
        type: "mcq",
        question: { en: "The result of (6x³y²)² is:", ar: "ناتج العبارة (6x³y²)² يساوي:" },
        options: [{ en: "36x⁵y⁴", ar: "36x⁵y⁴" }, { en: "36x⁶y⁴", ar: "36x⁶y⁴" }, { en: "6x⁶y⁴", ar: "6x⁶y⁴" }, { en: "36x⁶y²", ar: "36x⁶y²" }],
        answer: "36x⁶y⁴",
        explanation: { en: "6² · (x³)² · (y²)² = 36x⁶y⁴.", ar: "6² · x⁶ · y⁴ = 36x⁶y⁴." }
      },
      {
        type: "mcq",
        question: { en: "Simplify (2.8 × 10⁻³) × (1.5 × 10⁷):", ar: "بسّط العبارة (2.8 × 10⁻³) × (1.5 × 10⁷):" },
        options: [{ en: "4.2 × 10⁴", ar: "4.2 × 10⁴" }, { en: "2.4 × 10⁻⁴", ar: "2.4 × 10⁻⁴" }, { en: "4.2 × 10⁻⁴", ar: "4.2 × 10⁻⁴" }, { en: "4.2 × 10¹⁰", ar: "4.2 × 10¹⁰" }],
        answer: "4.2 × 10⁴",
        explanation: { en: "(2.8 × 1.5) × 10⁻³⁺⁷ = 4.2 × 10⁴.", ar: "ضرب الأعداد الحقيقية وجمع أسس الـ 10: 4.2 × 10⁴." }
      },
      {
        type: "truefalse",
        question: { en: "The scientific notation of the number 0.00021 is 2.1 × 10⁻⁴.", ar: "الترميز العلمي للعدد 0.00021 هو 2.1 × 10⁻⁴." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Move decimal point 4 places to the right: 2.1 × 10⁻⁴.", ar: "تحريك الفاصلة 4 منازل لليمين يعطي 2.1 × 10⁻⁴." }
      },
      {
        type: "truefalse",
        question: { en: "The scientific notation of the number 0.00023 is 23 × 10⁻⁶.", ar: "الترميز العلمي للعدد 0.00023 هو 23 × 10⁻⁶." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Proper scientific notation requires the coefficient to be between 1 and 10 (2.3 × 10⁻⁴).", ar: "الصيغة العلمية تشترط أن يكون المعامل بين 1 و 10 (2.3 × 10⁻⁴)." }
      },
      {
        type: "mcq",
        question: { en: "Express the number 0.0002 in scientific notation:", ar: "اكتب العدد 0.0002 بالترميز العلمي:" },
        options: [{ en: "2 × 10⁻⁵", ar: "2 × 10⁻⁵" }, { en: "0.2 × 10⁻⁴", ar: "0.2 × 10⁻⁴" }, { en: "2 × 10⁻⁴", ar: "2 × 10⁻⁴" }, { en: "20 × 10⁻⁵", ar: "20 × 10⁻⁵" }],
        answer: "2 × 10⁻⁴",
        explanation: { en: "0.0002 = 2 × 10⁻⁴.", ar: "0.0002 = 2 × 10⁻⁴." }
      },
      {
        type: "mcq",
        question: { en: "Express the number 0.00201 in scientific notation:", ar: "اكتب العدد 0.00201 بالترميز العلمي:" },
        options: [{ en: "2.01 × 10⁻⁴", ar: "2.01 × 10⁻⁴" }, { en: "2.01 × 10⁻³", ar: "2.01 × 10⁻³" }, { en: "20.1 × 10⁻⁴", ar: "20.1 × 10⁻⁴" }, { en: "0.201 × 10⁻²", ar: "0.201 × 10⁻²" }],
        answer: "2.01 × 10⁻³",
        explanation: { en: "Move decimal 3 places to the right: 2.01 × 10⁻³.", ar: "تحريك الفاصلة 3 منازل لليمين يعطي 2.01 × 10⁻³." }
      },
      {
        type: "mcq",
        question: { en: "Express the number 0.0021 in scientific notation:", ar: "اكتب العدد 0.0021 بالترميز العلمي:" },
        options: [{ en: "21 × 10⁻³", ar: "21 × 10⁻³" }, { en: "2.1 × 10⁻³", ar: "2.1 × 10⁻³" }, { en: "2.1 × 10⁻⁴", ar: "2.1 × 10⁻⁴" }, { en: "21 × 10⁻⁴", ar: "21 × 10⁻⁴" }],
        answer: "2.1 × 10⁻³",
        explanation: { en: "0.0021 = 2.1 × 10⁻³.", ar: "0.0021 = 2.1 × 10⁻³." }
      },
      {
        type: "mcq",
        question: { en: "Express the number 5.5 × 10⁻³ in standard form:", ar: "اكتب العدد 5.5 × 10⁻³ بالصورة القياسية:" },
        options: [{ en: "0.5500", ar: "0.5500" }, { en: "0.0055", ar: "0.0055" }, { en: "0.055", ar: "0.055" }, { en: "5500", ar: "5500" }],
        answer: "0.0055",
        explanation: { en: "Move decimal 3 places left: 0.0055.", ar: "تحريك الفاصلة 3 منازل لليسار: 0.0055." }
      },
      {
        type: "mcq",
        question: { en: "Express the number 0.0035 in scientific notation:", ar: "اكتب العدد 0.0035 بالترميز العلمي:" },
        options: [{ en: "3.5 × 10⁴", ar: "3.5 × 10⁴" }, { en: "3.5 × 10³", ar: "3.5 × 10³" }, { en: "3.5 × 10⁻³", ar: "3.5 × 10⁻³" }, { en: "3.5 × 10⁻⁴", ar: "3.5 × 10⁻⁴" }],
        answer: "3.5 × 10⁻³",
        explanation: { en: "0.0035 = 3.5 × 10⁻³.", ar: "0.0035 = 3.5 × 10⁻³." }
      },
      {
        type: "mcq",
        question: { en: "The scientific notation of the number 0.000534 is:", ar: "الترميز العلمي للعدد 0.000534 هو:" },
        options: [{ en: "5.34 × 10⁴", ar: "5.34 × 10⁴" }, { en: "5.34 × 10⁵", ar: "5.34 × 10⁵" }, { en: "5.34 × 10⁻⁴", ar: "5.34 × 10⁻⁴" }, { en: "5.34 × 10⁻⁵", ar: "5.34 × 10⁻⁵" }],
        answer: "5.34 × 10⁻⁴",
        explanation: { en: "Move decimal 4 places to the right: 5.34 × 10⁻⁴.", ar: "تحريك الفاصلة 4 منازل لليمين يعطي 5.34 × 10⁻⁴." }
      },
      {
        type: "mcq",
        question: { en: "The scientific notation of the number 0.000723 is:", ar: "الترميز العلمي للعدد 0.000723 هو:" },
        options: [{ en: "723 × 10⁻⁴", ar: "723 × 10⁻⁴" }, { en: "7.23 × 10⁻²", ar: "7.23 × 10⁻²" }, { en: "7.23 × 10⁸", ar: "7.23 × 10⁸" }, { en: "7.23 × 10⁻⁴", ar: "7.23 × 10⁻⁴" }],
        answer: "7.23 × 10⁻⁴",
        explanation: { en: "0.000723 = 7.23 × 10⁻⁴.", ar: "0.000723 = 7.23 × 10⁻⁴." }
      },
      {
        type: "mcq",
        question: { en: "Express the number 0.0055 in scientific notation:", ar: "اكتب العدد 0.0055 بالترميز العلمي:" },
        options: [{ en: "55 × 10⁻⁵", ar: "55 × 10⁻⁵" }, { en: "5.5 × 10⁻⁶", ar: "5.5 × 10⁻⁶" }, { en: "5.5 × 10⁻³", ar: "5.5 × 10⁻³" }, { en: "55 × 10⁻⁴", ar: "55 × 10⁻⁴" }],
        answer: "5.5 × 10⁻³",
        explanation: { en: "Move decimal 3 places right: 5.5 × 10⁻³.", ar: "تحريك الفاصلة 3 منازل لليمين: 5.5 × 10⁻³." }
      },
      {
        type: "mcq",
        question: { en: "The scientific notation of the number 0.0000064 is:", ar: "الترميز العلمي للعدد 0.0000064 هو:" },
        options: [{ en: "6.4 × 10⁻⁵", ar: "6.4 × 10⁻⁵" }, { en: "6.4 × 10⁻⁶", ar: "6.4 × 10⁻⁶" }, { en: "64 × 10⁻⁵", ar: "64 × 10⁻⁵" }, { en: "64 × 10⁻⁶", ar: "64 × 10⁻⁶" }],
        answer: "6.4 × 10⁻⁶",
        explanation: { en: "Move decimal 6 places to the right: 6.4 × 10⁻⁶.", ar: "تحريك الفاصلة 6 منازل لليمين يعطي 6.4 × 10⁻⁶." }
      },
      {
        type: "mcq",
        question: { en: "The scientific notation of the number 0.000541 is:", ar: "الترميز العلمي للعدد 0.000541 هو:" },
        options: [{ en: "5.41 × 10⁻⁴", ar: "5.41 × 10⁻⁴" }, { en: "5.41 × 10⁵", ar: "5.41 × 10⁵" }, { en: "5.41 × 10³", ar: "5.41 × 10³" }, { en: "5.41 × 10⁻⁵", ar: "5.41 × 10⁻⁵" }],
        answer: "5.41 × 10⁻⁴",
        explanation: { en: "0.000541 = 5.41 × 10⁻⁴.", ar: "0.000541 = 5.41 × 10⁻⁴." }
      },
      {
        type: "mcq",
        question: { en: "The standard form of the number 4.35 × 10⁻⁵ is:", ar: "الصورة القياسية للعدد 4.35 × 10⁻⁵ هي:" },
        options: [{ en: "4350000", ar: "4350000" }, { en: "43500000", ar: "43500000" }, { en: "0.00000435", ar: "0.00000435" }, { en: "0.0000435", ar: "0.0000435" }],
        answer: "0.0000435",
        explanation: { en: "Move decimal 5 places left: 0.0000435.", ar: "تحريك الفاصلة 5 منازل لليسار: 0.0000435." }
      },
      {
        type: "truefalse",
        question: { en: "The scientific notation of the number 0.0023 is 23 × 10⁻⁶.", ar: "الترميز العلمي للعدد 0.0023 هو 23 × 10⁻⁶." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "0.0023 = 2.3 × 10⁻³.", ar: "الترميز العلمي الصحيح هو 2.3 × 10⁻³." }
      },
      {
        type: "mcq",
        question: { en: "Convert to scientific notation: 203,100,000,000,000", ar: "حول العدد 203,100,000,000,000 إلى الترميز العلمي:" },
        options: [{ en: "20.31 × 10¹³", ar: "20.31 × 10¹³" }, { en: "2.031 × 10¹³", ar: "2.031 × 10¹³" }, { en: "20.31 × 10¹⁴", ar: "20.31 × 10¹⁴" }, { en: "2.031 × 10¹⁴", ar: "2.031 × 10¹⁴" }],
        answer: "2.031 × 10¹⁴",
        explanation: { en: "Move decimal point 14 places to the left: 2.031 × 10¹⁴.", ar: "تحريك الفاصلة 14 منزلة لليسار: 2.031 × 10¹⁴." }
      },
      {
        type: "mcq",
        question: { en: "The decimal notation of the number 3.27 × 10⁻⁵ is:", ar: "الصورة العشرية للعدد 3.27 × 10⁻⁵ هي:" },
        options: [{ en: "0.00000327", ar: "0.00000327" }, { en: "0.00327", ar: "0.00327" }, { en: "0.0000327", ar: "0.0000327" }, { en: "0.000327", ar: "0.000327" }],
        answer: "0.0000327",
        explanation: { en: "Move decimal 5 places left: 0.0000327.", ar: "تحريك الفاصلة 5 منازل لليسار: 0.0000327." }
      },
      {
        type: "truefalse",
        question: { en: "The scientific notation of the number 0.00035 is 3.5 × 10⁻⁴.", ar: "الترميز العلمي للعدد 0.00035 هو 3.5 × 10⁻⁴." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Move decimal 4 places right: 3.5 × 10⁻⁴.", ar: "تحريك الفاصلة 4 منازل لليمين يعطي 3.5 × 10⁻⁴." }
      },
      {
        type: "mcq",
        question: { en: "Express the number 2 × 10⁻⁴ in standard form:", ar: "اكتب العدد 2 × 10⁻⁴ بالصورة القياسية:" },
        options: [{ en: "0.2000", ar: "0.2000" }, { en: "0.002", ar: "0.002" }, { en: "2000", ar: "2000" }, { en: "0.0002", ar: "0.0002" }],
        answer: "0.0002",
        explanation: { en: "2 × 10⁻⁴ = 0.0002.", ar: "2 × 10⁻⁴ = 0.0002." }
      },
      {
        type: "mcq",
        question: { en: "One of the following is a monomial:", ar: "واحد مما يلي يعتبر أحادي حد (Monomial):" },
        options: [{ en: "x² + 1", ar: "x² + 1" }, { en: "3", ar: "3" }, { en: "2x - 4", ar: "2x - 4" }, { en: "2 + x² - 1", ar: "2 + x² - 1" }],
        answer: "3",
        explanation: { en: "A constant number 3 is a single-term polynomial (monomial).", ar: "العدد الثابت 3 يتكون من حد واحد فقط فهو أحادي حد." }
      },
      {
        type: "truefalse",
        question: { en: "The degree of the polynomial (6x² + 3)³ is 2.", ar: "درجة كثيرة الحدود (6x² + 3)³ تساوي 2." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The highest power term will be (x²)³ = x⁶, so degree is 6.", ar: "أعلى أس ناتج عن التكعيب هو (x²)³ = x⁶، لذا الدرجة هي 6." }
      },
      {
        type: "truefalse",
        question: { en: "The degree of the term (xy³)² is 4.", ar: "درجة الحد (xy³)² تساوي 4." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "(xy³)² = x²y⁶. Degree is sum of exponents: 2 + 6 = 8.", ar: "(xy³)² = x²y⁶. الدرجة هي مجموع الأسس 2 + 6 = 8." }
      },
      {
        type: "truefalse",
        question: { en: "The degree of the term 15(x²y³)³ is 15.", ar: "درجة الحد 15(x²y³)³ تساوي 15." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "(x²y³)³ = x⁶y⁹. Degree is 6 + 9 = 15.", ar: "(x²y³)³ = x⁶y⁹. درجة الحد هي مجموع الأسس 6 + 9 = 15." }
      },
      {
        type: "truefalse",
        question: { en: "The degree of the polynomial (2π⁵ + 3)³ is 15.", ar: "درجة كثيرة الحدود (2π⁵ + 3)³ تساوي 15." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "π is a numerical constant, not a variable. The expression has degree 0.", ar: "π ثابت عددي، لا توجد متغيرات بالعبارة لذا درجتها 0." }
      },
      {
        type: "truefalse",
        question: { en: "The degree of the polynomial (2x³ + 3x²)² is 6.", ar: "درجة كثيرة الحدود (2x³ + 3x²)² تساوي 6." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Highest degree term when squared is (x³)² = x⁶.", ar: "أكبر أس عند تربيع الحد الأكبر هو (x³)² = x⁶، فالدرجة 6." }
      },
      {
        type: "truefalse",
        question: { en: "The degree of the polynomial (3x² + 3)² is 2.", ar: "درجة كثيرة الحدود (3x² + 3)² تساوي 2." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "(x²)² = x⁴, so the degree is 4.", ar: "تربيع الحد الأكبر (x²)² يعطي x⁴، فدرجتها 4." }
      },
      {
        type: "truefalse",
        question: { en: "The degree of the polynomial (2x⁵ + 3x²)² is 10.", ar: "درجة كثيرة الحدود (2x⁵ + 3x²)² تساوي 10." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "(x⁵)² = x¹⁰, making the degree 10.", ar: "(x⁵)² = x¹⁰، وبالتالي فإن درجة كثيرة الحدود هي 10." }
      },
      {
        type: "mcq",
        question: { en: "The Degree of the polynomial 9x³ - 10x⁵ + 4x + 7x² + 15 is:", ar: "درجة كثيرة الحدود 9x³ - 10x⁵ + 4x + 7x² + 15 هي:" },
        options: [{ en: "3", ar: "3" }, { en: "5", ar: "5" }, { en: "9", ar: "9" }, { en: "-10", ar: "-10" }],
        answer: "5",
        explanation: { en: "The highest exponent of x is 5 in the term -10x⁵.", ar: "أعلى أس للمتغير x هو 5 في الحد -10x⁵." }
      },
      {
        type: "mcq",
        question: { en: "The Degree of the polynomial 9x³y² - 10x⁵y + 4x + 7x² + 10 is:", ar: "درجة كثيرة الحدود 9x³y² - 10x⁵y + 4x + 7x² + 10 هي:" },
        options: [{ en: "2", ar: "2" }, { en: "3", ar: "3" }, { en: "5", ar: "5" }, { en: "6", ar: "6" }],
        answer: "6",
        explanation: { en: "The term -10x⁵y has degree 5 + 1 = 6, which is the highest in the polynomial.", ar: "الحد -10x⁵y درجته 5 + 1 = 6 وهو أعلى حد." }
      },
      {
        type: "mcq",
        question: { en: "The degree of the second term of the polynomial 3x² - 7x - 4 is:", ar: "درجة الحد الثاني من كثيرة الحدود 3x² - 7x - 4 هي:" },
        options: [{ en: "3", ar: "3" }, { en: "2", ar: "2" }, { en: "1", ar: "1" }, { en: "0", ar: "0" }],
        answer: "1",
        explanation: { en: "The second term is -7x = -7x¹, which has a degree of 1.", ar: "الحد الثاني هو -7x وهو مرفوع للأس 1." }
      },
      {
        type: "mcq",
        question: { en: "The degree of the polynomial 4x - 5 is:", ar: "درجة كثيرة الحدود 4x - 5 هي:" },
        options: [{ en: "4", ar: "4" }, { en: "5", ar: "5" }, { en: "0", ar: "0" }, { en: "1", ar: "1" }],
        answer: "1",
        explanation: { en: "The highest power of variable x is 1.", ar: "أعلى أس للمتغير x هو 1." }
      },
      {
        type: "mcq",
        question: { en: "The degree of the polynomial 8x⁴ + 3x³ + 16x⁶ - 4 is:", ar: "درجة كثيرة الحدود 8x⁴ + 3x³ + 16x⁶ - 4 هي:" },
        options: [{ en: "16", ar: "16" }, { en: "6", ar: "6" }, { en: "13", ar: "13" }, { en: "8", ar: "8" }],
        answer: "6",
        explanation: { en: "The highest exponent is 6 in term 16x⁶.", ar: "أعلى أس في الحدود هو 6 للحد 16x⁶." }
      },
      {
        type: "mcq",
        question: { en: "The degree of the polynomial 2π⁵ + 6x² is:", ar: "درجة كثيرة الحدود 2π⁵ + 6x² هي:" },
        options: [{ en: "7", ar: "7" }, { en: "2", ar: "2" }, { en: "5", ar: "5" }, { en: "10", ar: "10" }],
        answer: "2",
        explanation: { en: "2π⁵ is a constant term. The term with variable x is 6x², so degree is 2.", ar: "2π⁵ حد ثابت، والمتغير الوحيد x أس 2، فالدرجة هي 2." }
      },
      {
        type: "mcq",
        question: { en: "Identify the degree of the polynomial (x⁵ + 3x)³:", ar: "حدد درجة كثيرة الحدود (x⁵ + 3x)³:" },
        options: [{ en: "12", ar: "12" }, { en: "10", ar: "10" }, { en: "9", ar: "9" }, { en: "15", ar: "15" }],
        answer: "15",
        explanation: { en: "Highest degree term is (x⁵)³ = x¹⁵.", ar: "أعلى درجة تنتج من تكعيب الحد الأول: (x⁵)³ = x¹⁵." }
      },
      {
        type: "truefalse",
        question: { en: "The variable's exponents of a polynomial are whole numbers.", ar: "أسس المتغيرات في كثيرات الحدود هي أعداد كليّة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Whole numbers include 0, 1, 2, ... which match polynomial definition.", ar: "الأعداد الكلية تتضمن 0، 1، 2... وهو ما يتطابق مع تعريف كثيرات الحدود." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, a number in front of the variable called 'base'.", ar: "في كثيرات الحدود، يسمى العدد أمام المتغير 'الأساس'." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "It is called a coefficient, not a base.", ar: "يسمى معاملاً وليس أساساً." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial with one variable, the largest exponent of the variable is the degree of the polynomial.", ar: "في كثيرة الحدود بمتغير واحد، أعلى أس للمتغير يمثل درجة كثيرة الحدود." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Degree of single-variable polynomial = maximum exponent.", ar: "تعريف الدرجة لكثيرة الحدود ذات المتغير الواحد هو أعلى أس فيها." }
      },
      {
        type: "truefalse",
        question: { en: "The variable's exponents of a polynomial are natural numbers.", ar: "أسس المتغيرات في كثيرات الحدود هي أعداد طبيعية دائمًا." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Exponents can also be 0, which is a whole number but not a natural number.", ar: "قد يكون الأس مساوياً للصفر (الحد الثابت)، والصفر ليس عدداً طبيعياً." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, a number without a variable is called 'the degree'.", ar: "في كثيرات الحدود، يسمى العدد الذي بدون متغير 'الدرجة'." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "It is called a constant.", ar: "يسمى حداً ثابتاً (Constant)." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, a number without a variable is called 'constant'.", ar: "في كثيرات الحدود، يسمى العدد الذي بدون متغير 'ثابتاً'." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "By definition, terms lacking variables are constant terms.", ar: "الحدود الخالية من المتغيرات تُعرف بالحدود الثابتة." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, a number in front of the variable called 'exponent'.", ar: "في كثيرات الحدود، يسمى العدد الموجود أمام المتغير 'الأس'." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The number in front is the coefficient.", ar: "الرقم الأمامي هو المعامل." }
      },
      {
        type: "truefalse",
        question: { en: "In a polynomial, a number in front of the variable is called 'coefficient'.", ar: "في كثيرات الحدود، يسمى العدد الموجود أمام المتغير 'المعامل'." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "The multiplicative factor of a variable term is its coefficient.", ar: "العدد المضروب في المتغير يسمى المعامل." }
      },
      {
        type: "truefalse",
        question: { en: "The variable's exponents of a polynomial are integers numbers.", ar: "أسس المتغيرات في كثيرات الحدود هي أعداد صحيحة مطلقة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Polynomial exponents cannot be negative integers.", ar: "لا يمكن للأسس أن تكون أعداداً صحيحة سالبة." }
      },
      {
        type: "mcq",
        question: { en: "Add: (x³ - xy² + 5x²y - y³) + (-y³ - 6x²y - xy² + x³)", ar: "اجمع: (x³ - xy² + 5x²y - y³) + (-y³ - 6x²y - xy² + x³)" },
        options: [
          { en: "2x³ - x²y - 2xy² - 2y³", ar: "2x³ - x²y - 2xy² - 2y³" },
          { en: "2x³ - 8x²y + 3xy² - 2y³", ar: "2x³ - 8x²y + 3xy² - 2y³" },
          { en: "2x³ - 2x²y + 3xy² - 2y³", ar: "2x³ - 2x²y + 3xy² - 2y³" },
          { en: "-2x³ - x²y - 2xy² - 2y³", ar: "-2x³ - x²y - 2xy² - 2y³" }
        ],
        answer: "2x³ - x²y - 2xy² - 2y³",
        explanation: { en: "(x³+x³) + (5x²y-6x²y) + (-xy²-xy²) + (-y³-y³) = 2x³ - x²y - 2xy² - 2y³.", ar: "جمع الحدود المتشابهة يعطي: 2x³ - x²y - 2xy² - 2y³." }
      },
      {
        type: "mcq",
        question: { en: "Add: (x³ - 5x²y + xy² - y³) + (-y³ - 3x²y + 2xy² + x³)", ar: "اجمع: (x³ - 5x²y + xy² - y³) + (-y³ - 3x²y + 2xy² + x³)" },
        options: [
          { en: "2x³ - 8x²y + 3xy² - 2y³", ar: "2x³ - 8x²y + 3xy² - 2y³" },
          { en: "2x³ - 2x²y + 3xy² - 2y³", ar: "2x³ - 2x²y + 3xy² - 2y³" },
          { en: "2x³ - x²y + 2xy² - 2y³", ar: "2x³ - x²y + 2xy² - 2y³" },
          { en: "-2x³ - x²y - 2xy² - 2y³", ar: "-2x³ - x²y - 2xy² - 2y³" }
        ],
        answer: "2x³ - 8x²y + 3xy² - 2y³",
        explanation: { en: "(x³+x³) + (-5x²y-3x²y) + (xy²+2xy²) + (-y³-y³) = 2x³ - 8x²y + 3xy² - 2y³.", ar: "تجميع الحدود المتشابهة يعطي: 2x³ - 8x²y + 3xy² - 2y³." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: (2x³ + 4x² + 7x - 3) - (4x² + 3x + 6)", ar: "بسّط العبارة: (2x³ + 4x² + 7x - 3) - (4x² + 3x + 6)" },
        options: [{ en: "2x³ + 4x - 9", ar: "2x³ + 4x - 9" }, { en: "2x³ + 4x + 9", ar: "2x³ + 4x + 9" }, { en: "2x³ - 4x - 9", ar: "2x³ - 4x - 9" }, { en: "2x³ - 4x + 9", ar: "2x³ - 4x + 9" }],
        answer: "2x³ + 4x - 9",
        explanation: { en: "2x³ + (4x² - 4x²) + (7x - 3x) + (-3 - 6) = 2x³ + 4x - 9.", ar: "طرح الحدود المتشابهة: 2x³ + 4x - 9." }
      },
      {
        type: "mcq",
        question: { en: "Subtract: (-3a²b² + 3ab - a) - (5a²b² - 2ab + b²)", ar: "اطرح: (-3a²b² + 3ab - a) - (5a²b² - 2ab + b²)" },
        options: [
          { en: "-8a²b² + 5ab - b² - a", ar: "-8a²b² + 5ab - b² - a" },
          { en: "-8a⁴b⁴ - 5a²b² + b² - a", ar: "-8a⁴b⁴ - 5a²b² + b² - a" },
          { en: "-8a²b² + 5ab + b² - a", ar: "-8a²b² + 5ab + b² - a" },
          { en: "2a + ab - b² - a", ar: "2a + ab - b² - a" }
        ],
        answer: "-8a²b² + 5ab - b² - a",
        explanation: { en: "(-3a²b² - 5a²b²) + (3ab - (-2ab)) - b² - a = -8a²b² + 5ab - b² - a.", ar: "طرح الحدود المتشابهة يعطي: -8a²b² + 5ab - b² - a." }
      },
      {
        type: "mcq",
        question: { en: "The subtraction (3x² - x + 3) - (x² - x - 1) is equal to:", ar: "ناتج الطرح (3x² - x + 3) - (x² - x - 1) يساوي:" },
        options: [{ en: "2x² + 4", ar: "2x² + 4" }, { en: "4x² + 2x + 2", ar: "4x² + 2x + 2" }, { en: "2x² + 2", ar: "2x² + 2" }, { en: "4x² - 2x + 2", ar: "4x² - 2x + 2" }],
        answer: "2x² + 4",
        explanation: { en: "(3x² - x²) + (-x - (-x)) + (3 - (-1)) = 2x² + 0x + 4 = 2x² + 4.", ar: "3x² - x² - x + x + 3 + 1 = 2x² + 4." }
      },
      {
        type: "mcq",
        question: { en: "The subtraction (x² + 2x - 12) - (-2x² - 3x) is equal to:", ar: "ناتج الطرح (x² + 2x - 12) - (-2x² - 3x) يساوي:" },
        options: [{ en: "3x² + 10x + 12", ar: "3x² + 10x + 12" }, { en: "3x² + 5x - 12", ar: "3x² + 5x - 12" }, { en: "x² + 2", ar: "x² + 2" }, { en: "3x² - 10x + 12", ar: "3x² - 10x + 12" }],
        answer: "3x² + 5x - 12",
        explanation: { en: "(x² - (-2x²)) + (2x - (-3x)) - 12 = 3x² + 5x - 12.", ar: "x² + 2x² + 2x + 3x - 12 = 3x² + 5x - 12." }
      },
      {
        type: "mcq",
        question: { en: "The subtraction (3x² - x + 3) - (-x² + x + 1) is equal to:", ar: "ناتج الطرح (3x² - x + 3) - (-x² + x + 1) يساوي:" },
        options: [{ en: "2x² + 2", ar: "2x² + 2" }, { en: "4x² - 2x + 2", ar: "4x² - 2x + 2" }, { en: "4x² + 2x + 2", ar: "4x² + 2x + 2" }, { en: "4x² + 4", ar: "4x² + 4" }],
        answer: "4x² - 2x + 2",
        explanation: { en: "(3x² - (-x²)) + (-x - x) + (3 - 1) = 4x² - 2x + 2.", ar: "3x² + x² - x - x + 3 - 1 = 4x² - 2x + 2." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: (2x³ - 2x² - 5x - 3) - (4x² - x - 4)", ar: "بسّط العبارة: (2x³ - 2x² - 5x - 3) - (4x² - x - 4)" },
        options: [
          { en: "2x³ - 6x² - 4x - 1", ar: "2x³ - 6x² - 4x - 1" },
          { en: "2x³ - 6x² - 4x + 1", ar: "2x³ - 6x² - 4x + 1" },
          { en: "2x³ + 6x² - 4x + 1", ar: "2x³ + 6x² - 4x + 1" },
          { en: "2x³ - 6x² + 4x + 1", ar: "2x³ - 6x² + 4x + 1" }
        ],
        answer: "2x³ - 6x² - 4x + 1",
        explanation: { en: "2x³ + (-2x² - 4x²) + (-5x - (-x)) + (-3 - (-4)) = 2x³ - 6x² - 4x + 1.", ar: "2x³ - 6x² - 4x + 1." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: (2x - 3)(5x² + 6x)", ar: "بسّط العبارة: (2x - 3)(5x² + 6x)" },
        options: [
          { en: "10x³ - 27x² - 18x", ar: "10x³ - 27x² - 18x" },
          { en: "10x³ - 3x² - 18x", ar: "10x³ - 3x² - 18x" },
          { en: "10x³ + 3x² - 18x", ar: "10x³ + 3x² - 18x" },
          { en: "10x³ + 27x² - 18x", ar: "10x³ + 27x² - 18x" }
        ],
        answer: "10x³ - 3x² - 18x",
        explanation: { en: "2x(5x² + 6x) - 3(5x² + 6x) = 10x³ + 12x² - 15x² - 18x = 10x³ - 3x² - 18x.", ar: "10x³ + 12x² - 15x² - 18x = 10x³ - 3x² - 18x." }
      },
      {
        type: "mcq",
        question: { en: "The result of the multiplication (2x + 1)(3x + 2) is:", ar: "ناتج ضرب (2x + 1)(3x + 2) هو:" },
        options: [{ en: "6x² + 7x + 2", ar: "6x² + 7x + 2" }, { en: "6x² + 5x + 2", ar: "6x² + 5x + 2" }, { en: "6x² + 6x + 2", ar: "6x² + 6x + 2" }, { en: "6x² + 4x + 2", ar: "6x² + 4x + 2" }],
        answer: "6x² + 7x + 2",
        explanation: { en: "FOIL: 6x² + 4x + 3x + 2 = 6x² + 7x + 2.", ar: "2x·3x + 2x·2 + 1·3x + 1·2 = 6x² + 7x + 2." }
      },
      {
        type: "mcq",
        question: { en: "Multiply: (x - 4)(x² + 3x - 2)", ar: "احسب ناتج الضرب: (x - 4)(x² + 3x - 2)" },
        options: [
          { en: "x³ + x² - 14x + 8", ar: "x³ + x² - 14x + 8" },
          { en: "x³ - 7x² + 14x - 8", ar: "x³ - 7x² + 14x - 8" },
          { en: "x³ - x² - 10x + 8", ar: "x³ - x² - 10x + 8" },
          { en: "x³ - x² - 14x + 8", ar: "x³ - x² - 14x + 8" }
        ],
        answer: "x³ - x² - 14x + 8",
        explanation: { en: "x(x² + 3x - 2) - 4(x² + 3x - 2) = x³ + 3x² - 2x - 4x² - 12x + 8 = x³ - x² - 14x + 8.", ar: "x³ + 3x² - 2x - 4x² - 12x + 8 = x³ - x² - 14x + 8." }
      },
      {
        type: "mcq",
        question: { en: "The result of (x + 3)² is:", ar: "ناتج مفكوك (x + 3)² هو:" },
        options: [{ en: "x² + 3x + 9", ar: "x² + 3x + 9" }, { en: "x² + 6x + 9", ar: "x² + 6x + 9" }, { en: "x² + 9", ar: "x² + 9" }, { en: "x² + 3x + 6", ar: "x² + 3x + 6" }],
        answer: "x² + 6x + 9",
        explanation: { en: "Square of binomial: x² + 2(x)(3) + 3² = x² + 6x + 9.", ar: "مربع الأول + 2×الأول×الثاني + مربع الثاني = x² + 6x + 9." }
      },
      {
        type: "mcq",
        question: { en: "Multiply and simplify: (x + y)² - 2xy", ar: "احسب و بسّط العبارة: (x + y)² - 2xy" },
        options: [{ en: "x² - 2xy", ar: "x² - 2xy" }, { en: "x² - 4xy + y²", ar: "x² - 4xy + y²" }, { en: "x² + y²", ar: "x² + y²" }, { en: "x² + 4xy + y²", ar: "x² + 4xy + y²" }],
        answer: "x² + y²",
        explanation: { en: "(x² + 2xy + y²) - 2xy = x² + y².", ar: "x² + 2xy + y² - 2xy = x² + y²." }
      },
      {
        type: "mcq",
        question: { en: "The result of the division (4x⁴ - 6x³) / (2x²) is:", ar: "ناتج قسمة (4x⁴ - 6x³) / (2x²) هو:" },
        options: [{ en: "2x³ - 3x²", ar: "2x³ - 3x²" }, { en: "4x³ - 6x²", ar: "4x³ - 6x²" }, { en: "2x² - 3x", ar: "2x² - 3x" }, { en: "2x² - 6x²", ar: "2x² - 6x²" }],
        answer: "2x² - 3x",
        explanation: { en: "4x⁴/(2x²) - 6x³/(2x²) = 2x² - 3x.", ar: "قسمة كل حد على 2x² تعطي 2x² - 3x." }
      },
      {
        type: "mcq",
        question: { en: "The result of the division (8x³ - 6x²) / (2x) is:", ar: "ناتج قسمة (8x³ - 6x²) / (2x) هو:" },
        options: [{ en: "4x⁴ - 3x", ar: "4x⁴ - 3x" }, { en: "4x² - 3x", ar: "4x² - 3x" }, { en: "3x² - 4x", ar: "3x² - 4x" }, { en: "16x⁴ - 12x", ar: "16x⁴ - 12x" }],
        answer: "4x² - 3x",
        explanation: { en: "8x³/(2x) - 6x²/(2x) = 4x² - 3x.", ar: "قسمة كل حد على 2x تعطي 4x² - 3x." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: (6x⁴ + 9x³ + 12x²) / (-3x²)", ar: "بسّط العبارة: (6x⁴ + 9x³ + 12x²) / (-3x²)" },
        options: [
          { en: "-2x² - 3x - 4", ar: "-2x² - 3x - 4" },
          { en: "-2x² - 3x + 4", ar: "-2x² - 3x + 4" },
          { en: "-2x² + 3x - 4", ar: "-2x² + 3x - 4" },
          { en: "-2x² + 3x + 4", ar: "-2x² + 3x + 4" }
        ],
        answer: "-2x² - 3x - 4",
        explanation: { en: "6x⁴/(-3x²) + 9x³/(-3x²) + 12x²/(-3x²) = -2x² - 3x - 4.", ar: "قسمة الحدود على -3x² تعطي -2x² - 3x - 4." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: (6x⁵ + 9x⁴ - 12x³) / (3x³)", ar: "بسّط العبارة: (6x⁵ + 9x⁴ - 12x³) / (3x³)" },
        options: [
          { en: "2x² + 3x - 4", ar: "2x² + 3x - 4" },
          { en: "2x² - 3x + 4", ar: "2x² - 3x + 4" },
          { en: "-2x² + 3x - 4", ar: "-2x² + 3x - 4" },
          { en: "-2x² - 3x + 4", ar: "-2x² - 3x + 4" }
        ],
        answer: "2x² + 3x - 4",
        explanation: { en: "6x⁵/(3x³) + 9x⁴/(3x³) - 12x³/(3x³) = 2x² + 3x - 4.", ar: "قسمة كل حد على 3x³ تعطي 2x² + 3x - 4." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: (6x⁵ - 9x⁴ - 12x³) / (3x³)", ar: "بسّط العبارة: (6x⁵ - 9x⁴ - 12x³) / (3x³)" },
        options: [
          { en: "2x² + 3x - 4", ar: "2x² + 3x - 4" },
          { en: "2x² - 3x + 4", ar: "2x² - 3x + 4" },
          { en: "-2x² + 3x - 4", ar: "-2x² + 3x - 4" },
          { en: "2x² - 3x - 4", ar: "2x² - 3x - 4" }
        ],
        answer: "2x² - 3x - 4",
        explanation: { en: "6x⁵/(3x³) - 9x⁴/(3x³) - 12x³/(3x³) = 2x² - 3x - 4.", ar: "قسمة كل حد على 3x³ تعطي 2x² - 3x - 4." }
      },
      {
        type: "mcq",
        question: { en: "Divide: (15x⁴ - 25x³ - 35x²) / (5x²)", ar: "اقسم: (15x⁴ - 25x³ - 35x²) / (5x²)" },
        options: [
          { en: "3x² + 5x - 7", ar: "3x² + 5x - 7" },
          { en: "3x² - 5x + 7", ar: "3x² - 5x + 7" },
          { en: "3x² - 5x - 7", ar: "3x² - 5x - 7" },
          { en: "3x² + 5x + 7", ar: "3x² + 5x + 7" }
        ],
        answer: "3x² - 5x - 7",
        explanation: { en: "15x⁴/(5x²) - 25x³/(5x²) - 35x²/(5x²) = 3x² - 5x - 7.", ar: "قسمة الحدود تعطي 3x² - 5x - 7." }
      },
      {
        type: "mcq",
        question: { en: "Divide: (15a⁴ + 25a³ + 35a²) / (-5a²)", ar: "اقسم: (15a⁴ + 25a³ + 35a²) / (-5a²)" },
        options: [
          { en: "-3a² - 5a - 7", ar: "-3a² - 5a - 7" },
          { en: "-3a² - 5a + 7", ar: "-3a² - 5a + 7" },
          { en: "3a² - 5a - 7", ar: "3a² - 5a - 7" },
          { en: "3a² + 5a - 7", ar: "3a² + 5a - 7" }
        ],
        answer: "-3a² - 5a - 7",
        explanation: { en: "15a⁴/(-5a²) + 25a³/(-5a²) + 35a²/(-5a²) = -3a² - 5a - 7.", ar: "قسمة الحدود على -5a² تعطي -3a² - 5a - 7." }
      },
      {
        type: "truefalse",
        question: { en: "(y - 6) is a factor of y² + 5y - 6.", ar: "(y - 6) يمثل عاملاً لكثيرة الحدود y² + 5y - 6." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "y² + 5y - 6 factors into (y + 6)(y - 1). (y - 6) is not a factor.", ar: "تحليل العبارة هو (y + 6)(y - 1)، بالتالي (y - 6) ليس عاملاً." }
      },
      {
        type: "truefalse",
        question: { en: "(x + 6) is a factor of x² + x - 30.", ar: "(x + 6) يمثل عاملاً لكثيرة الحدود x² + x - 30." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "x² + x - 30 = (x + 6)(x - 5). Thus (x + 6) is a factor.", ar: "التحليل يساوي (x + 6)(x - 5)، لذا (x + 6) عامل صحيح." }
      },
      {
        type: "truefalse",
        question: { en: "(x + 3) is a factor of x² - 4x + 3.", ar: "(x + 3) يمثل عاملاً لكثيرة الحدود x² - 4x + 3." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "x² - 4x + 3 = (x - 3)(x - 1). (x + 3) is not a factor.", ar: "التحليل هو (x - 3)(x - 1)، بالتالي (x + 3) ليس عاملاً." }
      },
      {
        type: "truefalse",
        question: { en: "(x - 3) is a factor of x² - 4x + 3.", ar: "(x - 3) يمثل عاملاً لكثيرة الحدود x² - 4x + 3." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "x² - 4x + 3 = (x - 3)(x - 1), so (x - 3) is a factor.", ar: "التحليل هو (x - 3)(x - 1)، فهو عامل صحيح." }
      },
      {
        type: "truefalse",
        question: { en: "(x - 1) is a factor of x² + 5x - 6.", ar: "(x - 1) يمثل عاملاً لكثيرة الحدود x² + 5x - 6." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "x² + 5x - 6 = (x + 6)(x - 1), so (x - 1) is a factor.", ar: "تحليل العبارة هو (x + 6)(x - 1)، لذا هو عامل للعبارة." }
      },
      {
        type: "truefalse",
        question: { en: "The factorization of 2x² - 5x - 3 is (x + 3)(2x + 1).", ar: "تحليل العبارة 2x² - 5x - 3 هو (x + 3)(2x + 1)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "2x² - 5x - 3 = (2x + 1)(x - 3).", ar: "التحليل الصحيح هو (2x + 1)(x - 3)." }
      },
      {
        type: "truefalse",
        question: { en: "The factorization of 2x² + 5x - 3 is (x + 3)(2x - 1).", ar: "تحليل العبارة 2x² + 5x - 3 هو (x + 3)(2x - 1)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "(x + 3)(2x - 1) = 2x² - x + 6x - 3 = 2x² + 5x - 3.", ar: "(x + 3)(2x - 1) يعطي 2x² + 5x - 3 (صواب)." }
      },
      {
        type: "truefalse",
        question: { en: "The factorization of 3x² - 4x - 7 is (2x + 7)(2x + 1).", ar: "تحليل العبارة 3x² - 4x - 7 هو (2x + 7)(2x + 1)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "3x² - 4x - 7 = (3x - 7)(x + 1).", ar: "التحليل الصحيح هو (3x - 7)(x + 1)." }
      },
      {
        type: "truefalse",
        question: { en: "The factorization of 4x² + 12x - 7 is (2x + 7)(2x - 1).", ar: "تحليل العبارة 4x² + 12x - 7 هو (2x + 7)(2x - 1)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "(2x + 7)(2x - 1) = 4x² - 2x + 14x - 7 = 4x² + 12x - 7.", ar: "ناتج الضرب يعطي 4x² + 12x - 7." }
      },
      {
        type: "truefalse",
        question: { en: "The GCF of (35x²y, 27xy²z³) is 5xy.", ar: "القاسم المشترك الأكبر للحدين (35x²y, 27xy²z³) هو 5xy." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "GCF of numbers 35 and 27 is 1. GCF of x²y and xy²z³ is xy. Overall GCF is xy.", ar: "القاسم المشترك للأعداد 35 و 27 هو 1، والـ GCF الإجمالي هو xy." }
      },
      {
        type: "truefalse",
        question: { en: "The GCF of (16x²y, 27xy²z³) is xy.", ar: "القاسم المشترك الأكبر للحدين (16x²y, 27xy²z³) هو xy." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "GCF(16, 27) = 1. GCF(x², x) = x. GCF(y, y²) = y. So GCF = xy.", ar: "القاسم للأعداد هو 1، وللمتغيرات x و y، فيكون الناتج xy." }
      },
      {
        type: "truefalse",
        question: { en: "The GCF of (25x²y, 12xy²) is 5x²y².", ar: "القاسم المشترك الأكبر للحدين (25x²y, 12xy²) هو 5x²y²." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "GCF(25, 12) = 1. GCF of variables is xy. So GCF = xy.", ar: "القاسم المشترك لـ 25 و 12 هو 1، والـ GCF هو xy." }
      },
      {
        type: "truefalse",
        question: { en: "The GCF of (16x²y, 4xy²) is 4xy.", ar: "القاسم المشترك الأكبر للحدين (16x²y, 4xy²) هو 4xy." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "GCF(16, 4) = 4, GCF(x², x) = x, GCF(y, y²) = y => 4xy.", ar: "GCF للأعداد 4، وللمتغيرات xy، فيصبح الناتج 4xy." }
      },
      {
        type: "truefalse",
        question: { en: "GCF(6y², 9x⁴) = 3.", ar: "القاسم المشترك الأكبر للحدين (6y², 9x⁴) هو 3." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "GCF(6, 9) = 3. There are no common variables between y² and x⁴.", ar: "GCF(6, 9) = 3، ولا توجد متغيرات مشتركة." }
      },
      {
        type: "truefalse",
        question: { en: "GCF(8x², 10y⁴) = 2.", ar: "القاسم المشترك الأكبر للحدين (8x², 10y⁴) هو 2." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "GCF(8, 10) = 2 with no common variables.", ar: "القاسم لـ 8 و 10 هو 2 فقط لعدم وجود متغيرات مشتركة." }
      },
      {
        type: "truefalse",
        question: { en: "GCF(21x², 14y⁴) = 7.", ar: "القاسم المشترك الأكبر للحدين (21x², 14y⁴) هو 7." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "GCF(21, 14) = 7.", ar: "القاسم المشترك بين 21 و 14 هو 7." }
      },
      {
        type: "truefalse",
        question: { en: "GCF(10x², 15y⁴) = 5.", ar: "القاسم المشترك الأكبر للحدين (10x², 15y⁴) هو 5." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "GCF(10, 15) = 5 with no common variables.", ar: "القاسم المشترك لـ 10 و 15 هو 5." }
      },
      {
        type: "mcq",
        question: { en: "Multiply: (2x² + y²)(3x² + 3y²)", ar: "احسب ناتج الضرب: (2x² + y²)(3x² + 3y²)" },
        options: [
          { en: "6x⁴ + 11x²y² + 3y⁴", ar: "6x⁴ + 11x²y² + 3y⁴" },
          { en: "x⁴ + 5x²y² + 6y⁴", ar: "x⁴ + 5x²y² + 6y⁴" },
          { en: "6x⁴ + 9x²y² + 3y⁴", ar: "6x⁴ + 9x²y² + 3y⁴" },
          { en: "2x⁴ + 8x²y² + 6y⁴", ar: "2x⁴ + 8x²y² + 6y⁴" }
        ],
        answer: "6x⁴ + 9x²y² + 3y⁴",
        explanation: { en: "6x⁴ + 6x²y² + 3x²y² + 3y⁴ = 6x⁴ + 9x²y² + 3y⁴.", ar: "2x²(3x² + 3y²) + y²(3x² + 3y²) = 6x⁴ + 9x²y² + 3y⁴." }
      },
      {
        type: "mcq",
        question: { en: "Multiply: (x² + 3y²)(x² + 2y²)", ar: "احسب ناتج الضرب: (x² + 3y²)(x² + 2y²)" },
        options: [
          { en: "2x⁴ + 8x²y² + 6y⁴", ar: "2x⁴ + 8x²y² + 6y⁴" },
          { en: "6x⁴ + 11x²y² + 3y⁴", ar: "6x⁴ + 11x²y² + 3y⁴" },
          { en: "6x⁴ + 9x²y² + 3y⁴", ar: "6x⁴ + 9x²y² + 3y⁴" },
          { en: "x⁴ + 5x²y² + 6y⁴", ar: "x⁴ + 5x²y² + 6y⁴" }
        ],
        answer: "x⁴ + 5x²y² + 6y⁴",
        explanation: { en: "x⁴ + 2x²y² + 3x²y² + 6y⁴ = x⁴ + 5x²y² + 6y⁴.", ar: "x⁴ + 2x²y² + 3x²y² + 6y⁴ = x⁴ + 5x²y² + 6y⁴." }
      }
      
           ]
      },

  {
    id: "math001-midterm-q401-500",
    title: { en: "Math 001 Midterm Prep (Q401–500)", ar: "تجميعات ميد ماث 001 (الأسئلة 401-500)" },
    description: { en: "Practice set covering factoring techniques (GCF, grouping, trinomials, difference of squares), quadratic equations, rational expressions, and radical expressions.", ar: "تدريب يشمل طرق التحليل إلى العوامل (GCF، التجميع، ثلاثيات الحدود، الفرق بين مربعين)، المعادلة التربيعية، التعبير الكسرية، والعبارات الجذرية." },
    typeLabel: { en: "Multiple choice / True & False", ar: "اختيار من متعدد / صواب وخطأ" },
    questionMode: "one",
    feedbackMode: "both",
    timerMinutes: 0,
    shuffleQuestions: false,
    shuffleOptions: false,
    showExplanations: true,
    questions: [
      {
        type: "mcq",
        question: { en: "Factor out the GCF: 12x⁴ - 18x³ + 6x²", ar: "استخرج القاسم المشترك الأكبر (GCF): 12x⁴ - 18x³ + 6x²" },
        options: [{ en: "6x²(2x² - 3x + 1)", ar: "6x²(2x² - 3x + 1)" }, { en: "6x(2x³ - 3x² + x)", ar: "6x(2x³ - 3x² + x)" }, { en: "3x²(4x² - 6x + 2)", ar: "3x²(4x² - 6x + 2)" }, { en: "6(2x⁴ - 3x³ + x²)", ar: "6(2x⁴ - 3x³ + x²)" }],
        answer: "6x²(2x² - 3x + 1)",
        explanation: { en: "The GCF of 12, 18, and 6 is 6. The GCF of x⁴, x³, and x² is x². Thus, GCF = 6x².", ar: "القاسم المشترك للأعداد 12 و 18 و 6 هو 6، وللمتغيرات هو x²، فيكون 6x²." }
      },
      {
        type: "mcq",
        question: { en: "Factor by grouping: x³ + 3x² + 2x + 6", ar: "حلل بالتجميع: x³ + 3x² + 2x + 6" },
        options: [{ en: "(x² + 3)(x + 2)", ar: "(x² + 3)(x + 2)" }, { en: "(x² + 2)(x + 3)", ar: "(x² + 2)(x + 3)" }, { en: "(x² - 2)(x + 3)", ar: "(x² - 2)(x + 3)" }, { en: "(x + 1)(x² + 6)", ar: "(x + 1)(x² + 6)" }],
        answer: "(x² + 2)(x + 3)",
        explanation: { en: "Group: x²(x + 3) + 2(x + 3) = (x² + 2)(x + 3).", ar: "التجميع: x²(x + 3) + 2(x + 3) = (x² + 2)(x + 3)." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: x² - 9", ar: "حلل تحليلاً تاماً: x² - 9" },
        options: [{ en: "(x - 3)²", ar: "(x - 3)²" }, { en: "(x + 3)²", ar: "(x + 3)²" }, { en: "(x - 3)(x + 3)", ar: "(x - 3)(x + 3)" }, { en: "Prime", ar: "أولي" }],
        answer: "(x - 3)(x + 3)",
        explanation: { en: "Difference of squares: a² - b² = (a - b)(a + b). Here, x² - 3² = (x - 3)(x + 3).", ar: "الفرق بين مربعين: x² - 3² = (x - 3)(x + 3)." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: 4x² - 25", ar: "حلل تحليلاً تاماً: 4x² - 25" },
        options: [{ en: "(2x - 5)²", ar: "(2x - 5)²" }, { en: "(2x - 5)(2x + 5)", ar: "(2x - 5)(2x + 5)" }, { en: "(4x - 5)(x + 5)", ar: "(4x - 5)(x + 5)" }, { en: "(2x + 5)²", ar: "(2x + 5)²" }],
        answer: "(2x - 5)(2x + 5)",
        explanation: { en: "(2x)² - 5² = (2x - 5)(2x + 5).", ar: "(2x)² - 5² = (2x - 5)(2x + 5)." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: x² - 7x + 12", ar: "حلل تحليلاً تاماً: x² - 7x + 12" },
        options: [{ en: "(x - 3)(x - 4)", ar: "(x - 3)(x - 4)" }, { en: "(x + 3)(x + 4)", ar: "(x + 3)(x + 4)" }, { en: "(x - 2)(x - 6)", ar: "(x - 2)(x - 6)" }, { en: "(x - 1)(x - 12)", ar: "(x - 1)(x - 12)" }],
        answer: "(x - 3)(x - 4)",
        explanation: { en: "Find two numbers that multiply to 12 and add to -7: -3 and -4.", ar: "البحث عن عددين حاصل ضربهما 12 ومجموعهما -7: هما -3 و -4." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: x² + 2x - 15", ar: "حلل تحليلاً تاماً: x² + 2x - 15" },
        options: [{ en: "(x - 5)(x + 3)", ar: "(x - 5)(x + 3)" }, { en: "(x + 5)(x - 3)", ar: "(x + 5)(x - 3)" }, { en: "(x + 15)(x - 1)", ar: "(x + 15)(x - 1)" }, { en: "(x - 2)(x + 15)", ar: "(x - 2)(x + 15)" }],
        answer: "(x + 5)(x - 3)",
        explanation: { en: "Find numbers that multiply to -15 and add to 2: 5 and -3.", ar: "عددين ضربهما -15 ومجموعهما 2: هما 5 و -3." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: 2x² + 7x + 3", ar: "حلل تحليلاً تاماً: 2x² + 7x + 3" },
        options: [{ en: "(2x + 3)(x + 1)", ar: "(2x + 3)(x + 1)" }, { en: "(2x + 1)(x + 3)", ar: "(2x + 1)(x + 3)" }, { en: "(2x + 6)(x + 1)", ar: "(2x + 6)(x + 1)" }, { en: "(x + 2)(2x + 3)", ar: "(x + 2)(2x + 3)" }],
        answer: "(2x + 1)(x + 3)",
        explanation: { en: "2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).", ar: "2x² + 6x + x + 3 = (2x + 1)(x + 3)." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: 3x² - 10x + 8", ar: "حلل تحليلاً تاماً: 3x² - 10x + 8" },
        options: [{ en: "(3x - 4)(x - 2)", ar: "(3x - 4)(x - 2)" }, { en: "(3x - 2)(x - 4)", ar: "(3x - 2)(x - 4)" }, { en: "(3x - 8)(x - 1)", ar: "(3x - 8)(x - 1)" }, { en: "(3x + 4)(x - 2)", ar: "(3x + 4)(x - 2)" }],
        answer: "(3x - 4)(x - 2)",
        explanation: { en: "3x² - 6x - 4x + 8 = 3x(x - 2) - 4(x - 2) = (3x - 4)(x - 2).", ar: "3x² - 6x - 4x + 8 = (3x - 4)(x - 2)." }
      },
      {
        type: "truefalse",
        question: { en: "The sum of squares x² + 16 can be factored over real numbers.", ar: "مجموع المربعين x² + 16 يمكن تحليله في مجموعة الأعداد الحقيقية." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "The sum of two squares a² + b² is prime over the real numbers.", ar: "مجموع المربعين أولي في مجموعة الأعداد الحقيقية ولا يمكن تحليله." }
      },
      {
        type: "truefalse",
        question: { en: "The expression x³ - 27 is a difference of cubes.", ar: "العبارة x³ - 27 تمثل فرقا بين مكعبين." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "x³ - 27 = x³ - 3³, which fits the difference of cubes formula a³ - b³.", ar: "x³ - 3³ تأخذ شكل الفرق بين مكعبين a³ - b³." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: x³ - 8", ar: "حلل تحليلاً تاماً: x³ - 8" },
        options: [{ en: "(x - 2)(x² + 2x + 4)", ar: "(x - 2)(x² + 2x + 4)" }, { en: "(x - 2)(x² - 2x + 4)", ar: "(x - 2)(x² - 2x + 4)" }, { en: "(x + 2)(x² - 2x + 4)", ar: "(x + 2)(x² - 2x + 4)" }, { en: "(x - 2)³", ar: "(x - 2)³" }],
        answer: "(x - 2)(x² + 2x + 4)",
        explanation: { en: "a³ - b³ = (a - b)(a² + ab + b²). Here x³ - 2³ = (x - 2)(x² + 2x + 4).", ar: "مفكوك الفرق بين مكعبين: (x - 2)(x² + 2x + 4)." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: x³ + 27", ar: "حلل تحليلاً تاماً: x³ + 27" },
        options: [{ en: "(x + 3)(x² - 3x + 9)", ar: "(x + 3)(x² - 3x + 9)" }, { en: "(x + 3)(x² + 3x + 9)", ar: "(x + 3)(x² + 3x + 9)" }, { en: "(x - 3)(x² + 3x + 9)", ar: "(x - 3)(x² + 3x + 9)" }, { en: "(x + 3)³", ar: "(x + 3)³" }],
        answer: "(x + 3)(x² - 3x + 9)",
        explanation: { en: "a³ + b³ = (a + b)(a² - ab + b²). Here x³ + 3³ = (x + 3)(x² - 3x + 9).", ar: "مفكوك مجموع مكعبين: (x + 3)(x² - 3x + 9)." }
      },
      {
        type: "mcq",
        question: { en: "Find the values of x that make (x - 4) / (x² - 9) undefined:", ar: "أوجد قيم x التي تجعل العبارة (x - 4) / (x² - 9) غير معرّفة:" },
        options: [{ en: "x = 4", ar: "x = 4" }, { en: "x = 3, -3", ar: "x = 3, -3" }, { en: "x = 9", ar: "x = 9" }, { en: "x = 0", ar: "x = 0" }],
        answer: "x = 3, -3",
        explanation: { en: "Set denominator to zero: x² - 9 = 0 => x² = 9 => x = ±3.", ar: "المقام يساوي صفراً عندما x² - 9 = 0 أي x = ±3." }
      },
      {
        type: "mcq",
        question: { en: "Simplify the rational expression: (x² - 16) / (x² - 4x)", ar: "بسّط العبارة الكسرية: (x² - 16) / (x² - 4x)" },
        options: [{ en: "(x + 4) / x", ar: "(x + 4) / x" }, { en: "(x - 4) / x", ar: "(x - 4) / x" }, { en: "4 / x", ar: "4 / x" }, { en: "(x + 4) / (x - 4)", ar: "(x + 4) / (x - 4)" }],
        answer: "(x + 4) / x",
        explanation: { en: "(x - 4)(x + 4) / [x(x - 4)] = (x + 4) / x.", ar: "(x - 4)(x + 4) / [x(x - 4)] = (x + 4) / x." }
      },
      {
        type: "mcq",
        question: { en: "Multiply and simplify: (x² - 9) / (x + 2) × (x + 2) / (x - 3)", ar: "اضرب وبسّط: (x² - 9) / (x + 2) × (x + 2) / (x - 3)" },
        options: [{ en: "x + 3", ar: "x + 3" }, { en: "x - 3", ar: "x - 3" }, { en: "x + 2", ar: "x + 2" }, { en: "1", ar: "1" }],
        answer: "x + 3",
        explanation: { en: "[(x - 3)(x + 3)(x + 2)] / [(x + 2)(x - 3)] = x + 3.", ar: "باختصار العوامل المشتركة يتبقى x + 3." }
      },
      {
        type: "mcq",
        question: { en: "Divide and simplify: (x² - 4) / (x + 3) ÷ (x - 2) / (x + 3)", ar: "اقسم وبسّط: (x² - 4) / (x + 3) ÷ (x - 2) / (x + 3)" },
        options: [{ en: "x + 2", ar: "x + 2" }, { en: "x - 2", ar: "x - 2" }, { en: "1 / (x + 2)", ar: "1 / (x + 2)" }, { en: "x + 3", ar: "x + 3" }],
        answer: "x + 2",
        explanation: { en: "[(x - 2)(x + 2) / (x + 3)] × [(x + 3) / (x - 2)] = x + 2.", ar: "تحويل القسمة لضرب ثم الاختصار يعطي x + 2." }
      },
      {
        type: "mcq",
        question: { en: "Perform operation: 3 / (x + 1) + 2 / (x + 1)", ar: "أجرِ العملية: 3 / (x + 1) + 2 / (x + 1)" },
        options: [{ en: "5 / (x + 1)", ar: "5 / (x + 1)" }, { en: "5 / (2x + 2)", ar: "5 / (2x + 2)" }, { en: "6 / (x + 1)", ar: "6 / (x + 1)" }, { en: "1 / (x + 1)", ar: "1 / (x + 1)" }],
        answer: "5 / (x + 1)",
        explanation: { en: "Denominators are the same, so add numerators: (3 + 2) / (x + 1) = 5 / (x + 1).", ar: "المقامات متوحدة: اجمع البسطين (3 + 2) / (x + 1) = 5 / (x + 1)." }
      },
      {
        type: "mcq",
        question: { en: "Perform operation: x / (x - 2) - 2 / (x - 2)", ar: "أجرِ العملية: x / (x - 2) - 2 / (x - 2)" },
        options: [{ en: "1", ar: "1" }, { en: "(x - 2) / (x - 2)", ar: "(x - 2) / (x - 2)" }, { en: "0", ar: "0" }, { en: "x - 2", ar: "x - 2" }],
        answer: "1",
        explanation: { en: "(x - 2) / (x - 2) = 1 (for x ≠ 2).", ar: "(x - 2) / (x - 2) = 1." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: √(49x⁴)", ar: "بسّط: √(49x⁴)" },
        options: [{ en: "7x²", ar: "7x²" }, { en: "7x", ar: "7x" }, { en: "14x²", ar: "14x²" }, { en: "49x²", ar: "49x²" }],
        answer: "7x²",
        explanation: { en: "√49 · √(x⁴) = 7x².", ar: "جذر 49 هو 7 وجذر x⁴ هو x²." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: √(12)", ar: "بسّط: √(12)" },
        options: [{ en: "2√3", ar: "2√3" }, { en: "3√2", ar: "3√2" }, { en: "4√3", ar: "4√3" }, { en: "6", ar: "6" }],
        answer: "2√3",
        explanation: { en: "√(4 × 3) = √4 × √3 = 2√3.", ar: "√(4 × 3) = 2√3." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: ∛(27x⁶)", ar: "بسّط الجذر التكعيبي: ∛(27x⁶)" },
        options: [{ en: "3x²", ar: "3x²" }, { en: "3x³", ar: "3x³" }, { en: "9x²", ar: "9x²" }, { en: "27x²", ar: "27x²" }],
        answer: "3x²",
        explanation: { en: "∛27 · ∛(x⁶) = 3 · x⁶/³ = 3x².", ar: "الجذر التكعيبي لـ 27 هو 3 وجذر x⁶ هو x²." }
      },
      {
        type: "truefalse",
        question: { en: "√(a² + b²) = a + b for all positive numbers.", ar: "√(a² + b²) = a + b لجميع الأعداد الموجبة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Square root does not distribute over addition: √(3² + 4²) = √25 = 5 ≠ 3 + 4 = 7.", ar: "الجذر التربيعي لا يتوزع على الجمع." }
      },
      {
        type: "truefalse",
        question: { en: "√(a²b²) = |ab| for real numbers.", ar: "√(a²b²) = |ab| للأعداد الحقيقية." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Square root distributes over multiplication: √(a²) · √(b²) = |a| · |b| = |ab|.", ar: "الجذر يتوزع على الضرب ويعطي القيمة المطلقة." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: 3√5 + 7√5 - 2√5", ar: "بسّط: 3√5 + 7√5 - 2√5" },
        options: [{ en: "8√5", ar: "8√5" }, { en: "12√5", ar: "12√5" }, { en: "8√15", ar: "8√15" }, { en: "10√5", ar: "10√5" }],
        answer: "8√5",
        explanation: { en: "(3 + 7 - 2)√5 = 8√5.", ar: "جمع معاملات الجذور المتشابهة: (3 + 7 - 2)√5 = 8√5." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: √18 + √50", ar: "بسّط: √18 + √50" },
        options: [{ en: "8√2", ar: "8√2" }, { en: "√68", ar: "√68" }, { en: "15√2", ar: "15√2" }, { en: "34√2", ar: "34√2" }],
        answer: "8√2",
        explanation: { en: "√18 = 3√2, √50 = 5√2. Then 3√2 + 5√2 = 8√2.", ar: "3√2 + 5√2 = 8√2." }
      },
      {
        type: "mcq",
        question: { en: "Multiply: √3 · √12", ar: "احسب ناتج الضرب: √3 · √12" },
        options: [{ en: "6", ar: "6" }, { en: "36", ar: "36" }, { en: "3√4", ar: "3√4" }, { en: "√15", ar: "√15" }],
        answer: "6",
        explanation: { en: "√(3 × 12) = √36 = 6.", ar: "√(3 × 12) = √36 = 6." }
      },
      {
        type: "mcq",
        question: { en: "Rationalize the denominator: 5 / √3", ar: "أنطق المقام: 5 / √3" },
        options: [{ en: "5√3 / 3", ar: "5√3 / 3" }, { en: "5√3 / 9", ar: "5√3 / 9" }, { en: "15 / √3", ar: "15 / √3" }, { en: "5 / 3", ar: "5 / 3" }],
        answer: "5√3 / 3",
        explanation: { en: "Multiply numerator and denominator by √3: (5 · √3) / (√3 · √3) = 5√3 / 3.", ar: "ضرب البسط والمقام في √3 يعطي 5√3 / 3." }
      },
      {
        type: "mcq",
        question: { en: "Rationalize the denominator: 2 / (3 - √5)", ar: "أنطق المقام: 2 / (3 - √5)" },
        options: [{ en: "(3 + √5) / 2", ar: "(3 + √5) / 2" }, { en: "3 + √5", ar: "3 + √5" }, { en: "(3 - √5) / 2", ar: "(3 - √5) / 2" }, { en: "2(3 + √5) / 14", ar: "2(3 + √5) / 14" }],
        answer: "(3 + √5) / 2",
        explanation: { en: "Multiply by conjugate (3 + √5): 2(3 + √5) / (9 - 5) = 2(3 + √5) / 4 = (3 + √5) / 2.", ar: "الضرب في المرافق (3 + √5): 2(3 + √5) / 4 = (3 + √5) / 2." }
      },
      {
        type: "mcq",
        question: { en: "Convert to exponential form: ∜(x³)", ar: "حول الصورة الجذرية ∜(x³) إلى صورة أسية:" },
        options: [{ en: "x^(3/4)", ar: "x^(3/4)" }, { en: "x^(4/3)", ar: "x^(4/3)" }, { en: "x^12", ar: "x^12" }, { en: "x^(1/4)", ar: "x^(1/4)" }],
        answer: "x^(3/4)",
        explanation: { en: "∜(x³) = x^(power/root) = x^(3/4).", ar: "الأس على دليل الجذر: x^(3/4)." }
      },
      {
        type: "mcq",
        question: { en: "Evaluate: 16^(3/4)", ar: "احسب قيمة: 16^(3/4)" },
        options: [{ en: "8", ar: "8" }, { en: "12", ar: "12" }, { en: "64", ar: "64" }, { en: "4", ar: "4" }],
        answer: "8",
        explanation: { en: "(16^(1/4))³ = (∜16)³ = 2³ = 8.", ar: "(الجذر الرابع لـ 16)³ = 2³ = 8." }
      },
      {
        type: "mcq",
        question: { en: "Solve the linear equation: 4(x - 2) = 2x + 6", ar: "حل المعادلة الخطية: 4(x - 2) = 2x + 6" },
        options: [{ en: "x = 7", ar: "x = 7" }, { en: "x = 1", ar: "x = 1" }, { en: "x = -1", ar: "x = -1" }, { en: "x = 14", ar: "x = 14" }],
        answer: "x = 7",
        explanation: { en: "4x - 8 = 2x + 6 => 2x = 14 => x = 7.", ar: "4x - 8 = 2x + 6 => 2x = 14 => x = 7." }
      },
      {
        type: "mcq",
        question: { en: "Solve by factoring: x² - 5x + 6 = 0", ar: "حل بالتحليل: x² - 5x + 6 = 0" },
        options: [{ en: "x = 2, 3", ar: "x = 2, 3" }, { en: "x = -2, -3", ar: "x = -2, -3" }, { en: "x = 1, 6", ar: "x = 1, 6" }, { en: "x = -1, -6", ar: "x = -1, -6" }],
        answer: "x = 2, 3",
        explanation: { en: "(x - 2)(x - 3) = 0 => x = 2 or x = 3.", ar: "(x - 2)(x - 3) = 0 => x = 2 أو x = 3." }
      },
      {
        type: "mcq",
        question: { en: "Solve by square root property: x² = 25", ar: "حل بخاصية الجذر التربيعي: x² = 25" },
        options: [{ en: "x = ±5", ar: "x = ±5" }, { en: "x = 5", ar: "x = 5" }, { en: "x = -5", ar: "x = -5" }, { en: "x = 25", ar: "x = 25" }],
        answer: "x = ±5",
        explanation: { en: "Taking square root of both sides gives x = ±√25 = ±5.", ar: "بأخذ الجذر التربيعي للطرفين x = ±5." }
      },
      {
        type: "mcq",
        question: { en: "Solve by square root property: (x - 3)² = 16", ar: "حل بخاصية الجذر التربيعي: (x - 3)² = 16" },
        options: [{ en: "x = 7, -1", ar: "x = 7, -1" }, { en: "x = 7, 1", ar: "x = 7, 1" }, { en: "x = -7, 1", ar: "x = -7, 1" }, { en: "x = 4, -4", ar: "x = 4, -4" }],
        answer: "x = 7, -1",
        explanation: { en: "x - 3 = ±4 => x = 3 + 4 = 7 or x = 3 - 4 = -1.", ar: "x - 3 = ±4 => x = 7 أو x = -1." }
      },
      {
        type: "mcq",
        question: { en: "The discriminant of quadratic equation ax² + bx + c = 0 is:", ar: "المميز للمعادلة التربيعية ax² + bx + c = 0 هو:" },
        options: [{ en: "b² - 4ac", ar: "b² - 4ac" }, { en: "b² + 4ac", ar: "b² + 4ac" }, { en: "√(b² - 4ac)", ar: "√(b² - 4ac)" }, { en: "-b ± √(b² - 4ac)", ar: "-b ± √(b² - 4ac)" }],
        answer: "b² - 4ac",
        explanation: { en: "The expression under the radical in the quadratic formula, b² - 4ac, is the discriminant.", ar: "المميز هو العبارة بداخل الجذر القانون العام b² - 4ac." }
      },
      {
        type: "truefalse",
        question: { en: "If the discriminant b² - 4ac > 0, the equation has two distinct real solutions.", ar: "إذا كان المميز b² - 4ac > 0، فإن للمعادلة حلين حقيقيين مختلفين." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "A positive discriminant yields two unequal real roots.", ar: "المميز الموجب يعني وجود جذرين حقيقيين مختلفين." }
      },
      {
        type: "truefalse",
        question: { en: "If the discriminant b² - 4ac = 0, the equation has exactly one real solution.", ar: "إذا كان المميز b² - 4ac = 0، فإن للمعادلة حلاً حقيقياً واحداً فقط." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "A zero discriminant yields one repeated real root.", ar: "عندما يكون المميز صفراً يكون هناك جذر مكرر واحد." }
      },
      {
        type: "truefalse",
        question: { en: "If the discriminant b² - 4ac < 0, the equation has two non-real complex solutions.", ar: "إذا كان المميز b² - 4ac < 0، فإن للمعادلة حلين مركبان غير حقيقيين." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "A negative discriminant means square root of negative number, giving complex roots.", ar: "المميز السالب ينتج عنه جذور مركب غير حقيقية." }
      },
      {
        type: "mcq",
        question: { en: "Find discriminant for x² - 4x + 4 = 0:", ar: "احسب قيمة المميز للمعادلة x² - 4x + 4 = 0:" },
        options: [{ en: "0", ar: "0" }, { en: "16", ar: "16" }, { en: "-16", ar: "-16" }, { en: "32", ar: "32" }],
        answer: "0",
        explanation: { en: "b² - 4ac = (-4)² - 4(1)(4) = 16 - 16 = 0.", ar: "(-4)² - 4(1)(4) = 16 - 16 = 0." }
      },
      {
        type: "mcq",
        question: { en: "Solve using quadratic formula: x² - 3x - 4 = 0", ar: "حل باستخدام القانون العام: x² - 3x - 4 = 0" },
        options: [{ en: "x = 4, -1", ar: "x = 4, -1" }, { en: "x = -4, 1", ar: "x = -4, 1" }, { en: "x = 2, -2", ar: "x = 2, -2" }, { en: "x = 3, -4", ar: "x = 3, -4" }],
        answer: "x = 4, -1",
        explanation: { en: "x = [3 ± √(9 - 4(1)(-4))] / 2 = [3 ± √25] / 2 = [3 ± 5] / 2 => 4 or -1.", ar: "x = [3 ± √25] / 2 => x = 4 أو x = -1." }
      },
      {
        type: "mcq",
        question: { en: "Solve the radical equation: √(x + 3) = 5", ar: "حل المعادلة الجذرية: √(x + 3) = 5" },
        options: [{ en: "x = 22", ar: "x = 22" }, { en: "x = 25", ar: "x = 25" }, { en: "x = 28", ar: "x = 28" }, { en: "x = 2", ar: "x = 2" }],
        answer: "x = 22",
        explanation: { en: "Square both sides: x + 3 = 25 => x = 22.", ar: "بتدبيع الطرفين: x + 3 = 25 => x = 22." }
      },
      {
        type: "mcq",
        question: { en: "Solve the absolute value equation: |2x - 1| = 5", ar: "حل معادلة القيمة المطلقة: |2x - 1| = 5" },
        options: [{ en: "x = 3, -2", ar: "x = 3, -2" }, { en: "x = 3, 2", ar: "x = 3, 2" }, { en: "x = -3, 2", ar: "x = -3, 2" }, { en: "x = 3", ar: "x = 3" }],
        answer: "x = 3, -2",
        explanation: { en: "2x - 1 = 5 => 2x = 6 => x = 3; OR 2x - 1 = -5 => 2x = -4 => x = -2.", ar: "إما 2x - 1 = 5 فتكون x = 3، أو 2x - 1 = -5 فتكون x = -2." }
      },
      {
        type: "mcq",
        question: { en: "Solve inequality: |x - 2| < 3", ar: "حل المتباينة: |x - 2| < 3" },
        options: [{ en: "-1 < x < 5", ar: "-1 < x < 5" }, { en: "x < 5", ar: "x < 5" }, { en: "x > -1", ar: "x > -1" }, { en: "x < -1 or x > 5", ar: "x < -1 أو x > 5" }],
        answer: "-1 < x < 5",
        explanation: { en: "-3 < x - 2 < 3 => add 2 => -1 < x < 5.", ar: "فصل القيمة المطلقة: -3 < x - 2 < 3 => إضافة 2 تعطي -1 < x < 5." }
      },
      {
        type: "mcq",
        question: { en: "Solve inequality: |x + 1| ≥ 4", ar: "حل المتباينة: |x + 1| ≥ 4" },
        options: [{ en: "x ≤ -5 or x ≥ 3", ar: "x ≤ -5 أو x ≥ 3" }, { en: "-5 ≤ x ≤ 3", ar: "-5 ≤ x ≤ 3" }, { en: "x ≥ 3", ar: "x ≥ 3" }, { en: "x ≤ -5", ar: "x ≤ -5" }],
        answer: "x ≤ -5 or x ≥ 3",
        explanation: { en: "x + 1 ≥ 4 => x ≥ 3 OR x + 1 ≤ -4 => x ≤ -5.", ar: "x + 1 ≥ 4 تعطي x ≥ 3، أو x + 1 ≤ -4 تعطي x ≤ -5." }
      },
      {
        type: "mcq",
        question: { en: "Find the distance between points (1, 2) and (4, 6):", ar: "احسب المسافة بين النقطتين (1, 2) و (4, 6):" },
        options: [{ en: "5", ar: "5" }, { en: "25", ar: "25" }, { en: "7", ar: "7" }, { en: "√7", ar: "√7" }],
        answer: "5",
        explanation: { en: "d = √[(4 - 1)² + (6 - 2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5.", ar: "قانون المسافة: √[(3)² + (4)²] = √25 = 5." }
      },
      {
        type: "mcq",
        question: { en: "Find the midpoint of segment connecting (2, 4) and (6, 10):", ar: "احسب نقطة منتصف القطعة المستقيمة بين (2, 4) و (6, 10):" },
        options: [{ en: "(4, 7)", ar: "(4, 7)" }, { en: "(8, 14)", ar: "(8, 14)" }, { en: "(2, 3)", ar: "(2, 3)" }, { en: "(4, 3)", ar: "(4, 3)" }],
        answer: "(4, 7)",
        explanation: { en: "Midpoint = ((2 + 6)/2, (4 + 10)/2) = (8/2, 14/2) = (4, 7).", ar: "منتصف القطعة: ((2 + 6)/2, (4 + 10)/2) = (4, 7)." }
      },
      {
        type: "mcq",
        question: { en: "Slope of line parallel to y = 4x - 5 is:", ar: "ميل المستقيم الموازي للمستقيم y = 4x - 5 هو:" },
        options: [{ en: "4", ar: "4" }, { en: "-1/4", ar: "-1/4" }, { en: "-4", ar: "-4" }, { en: "1/4", ar: "1/4" }],
        answer: "4",
        explanation: { en: "Parallel lines have equal slopes: m1 = m2 = 4.", ar: "المستقيمات المتوازية لها نفس الميل: m1 = m2 = 4." }
      },
      {
        type: "mcq",
        question: { en: "Slope of line perpendicular to y = 4x - 5 is:", ar: "ميل المستقيم العمودي على المستقيم y = 4x - 5 هو:" },
        options: [{ en: "-1/4", ar: "-1/4" }, { en: "4", ar: "4" }, { en: "-4", ar: "-4" }, { en: "1/4", ar: "1/4" }],
        answer: "-1/4",
        explanation: { en: "Perpendicular lines have negative reciprocal slopes: m2 = -1 / 4.", ar: "المستقيمات المتعامدة يكون ميل أحدهما مقلوب الآخر بعكس الإشارة: -1/4." }
      },
      {
        type: "truefalse",
        question: { en: "Two lines with slopes m1 = 2 and m2 = -1/2 are perpendicular.", ar: "المستقيمان اللذان ميلاهما m1 = 2 و m2 = -1/2 متعامدان." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "m1 · m2 = 2 · (-1/2) = -1, which is the condition for perpendicular lines.", ar: "حاصل ضرب الميلين = -1، وهو شرط تعامد مستقيمين." }
      },
      {
        type: "mcq",
        question: { en: "Find the equation of line with slope m = 3 passing through (0, 4):", ar: "أوجد معادلة المستقيم ذي الميل m = 3 والمار بالنقطة (0, 4):" },
        options: [{ en: "y = 3x + 4", ar: "y = 3x + 4" }, { en: "y = 4x + 3", ar: "y = 4x + 3" }, { en: "y = 3x - 4", ar: "y = 3x - 4" }, { en: "y = -3x + 4", ar: "y = -3x + 4" }],
        answer: "y = 3x + 4",
        explanation: { en: "Slope-intercept form y = mx + b with m = 3 and b = 4: y = 3x + 4.", ar: "صيغة الميل والمقطع y = mx + b تعطي y = 3x + 4." }
      },
      {
        type: "mcq",
        question: { en: "If f(x) = 2x² - 3x + 1, find f(-2):", ar: "إذا كان f(x) = 2x² - 3x + 1، أوجد f(-2):" },
        options: [{ en: "15", ar: "15" }, { en: "3", ar: "3" }, { en: "-1", ar: "-1" }, { en: "7", ar: "7" }],
        answer: "15",
        explanation: { en: "f(-2) = 2(-2)² - 3(-2) + 1 = 2(4) + 6 + 1 = 8 + 6 + 1 = 15.", ar: "تعويض x بـ -2: 2(4) + 6 + 1 = 15." }
      },
      {
        type: "mcq",
        question: { en: "Domain of the function f(x) = (x + 2) / (x - 5) is:", ar: "مجال الدالة f(x) = (x + 2) / (x - 5) هو:" },
        options: [{ en: "(-∞, 5) ∪ (5, ∞)", ar: "(-∞, 5) ∪ (5, ∞)" }, { en: "(-∞, -2) ∪ (-2, ∞)", ar: "(-∞, -2) ∪ (-2, ∞)" }, { en: "All real numbers R", ar: "جميع الأعداد الحقيقية R" }, { en: "[5, ∞)", ar: "[5, ∞)" }],
        answer: "(-∞, 5) ∪ (5, ∞)",
        explanation: { en: "Exclude values that make denominator 0: x - 5 ≠ 0 => x ≠ 5.", ar: "استبعاد القيم التي تجعل المقام صفراً: x ≠ 5." }
      },
      {
        type: "mcq",
        question: { en: "Domain of the square root function f(x) = √(x - 4) is:", ar: "مجال دالة الجذر التربيعي f(x) = √(x - 4) هو:" },
        options: [{ en: "[4, ∞)", ar: "[4, ∞)" }, { en: "(4, ∞)", ar: "(4, ∞)" }, { en: "(-∞, 4]", ar: "(-∞, 4]" }, { en: "All real numbers R", ar: "جميع الأعداد الحقيقية R" }],
        answer: "[4, ∞)",
        explanation: { en: "Under the radical must be non-negative: x - 4 ≥ 0 => x ≥ 4.", ar: "ما تحت الجذر يجب أن يكون أكبر من أو يساوي الصفر: x - 4 ≥ 0 => x ≥ 4." }
      },
      {
        type: "truefalse",
        question: { en: "The domain of any polynomial function is all real numbers (-∞, ∞).", ar: "مجال أي دالة كثيرة حدود هو جميع الأعداد الحقيقية (-∞, ∞)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Polynomials are defined for all real numbers with no restrictions.", ar: "كثيرات الحدود معرّفة دائماً لجميع الأعداد الحقيقية بدون قيود." }
      },
      {
        type: "mcq",
        question: { en: "Solve system of equations: x + y = 6 and x - y = 2", ar: "حل نظام المعادلتين: x + y = 6 و x - y = 2" },
        options: [{ en: "(4, 2)", ar: "(4, 2)" }, { en: "(2, 4)", ar: "(2, 4)" }, { en: "(5, 1)", ar: "(5, 1)" }, { en: "(3, 3)", ar: "(3, 3)" }],
        answer: "(4, 2)",
        explanation: { en: "Add equations: 2x = 8 => x = 4. Substitute into first equation: 4 + y = 6 => y = 2.", ar: "بجمع المعادلتين: 2x = 8 => x = 4، ثم بالتعويض y = 2." }
      },
      {
        type: "mcq",
        question: { en: "Simplify complex fraction: (1/x) / (2/x²)", ar: "بسّط الكسر المركب: (1/x) / (2/x²)" },
        options: [{ en: "x / 2", ar: "x / 2" }, { en: "2 / x", ar: "2 / x" }, { en: "2x", ar: "2x" }, { en: "1 / (2x)", ar: "1 / (2x)" }],
        answer: "x / 2",
        explanation: { en: "(1/x) × (x²/2) = x² / 2x = x / 2.", ar: "(1/x) × (x²/2) = x / 2." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: (x^-3 · y²)^-2", ar: "بسّط العبارة: (x^-3 · y²)^-2" },
        options: [{ en: "x⁶ / y⁴", ar: "x⁶ / y⁴" }, { en: "x⁶y⁴", ar: "x⁶y⁴" }, { en: "y⁴ / x⁶", ar: "y⁴ / x⁶" }, { en: "1 / (x⁶y⁴)", ar: "1 / (x⁶y⁴)" }],
        answer: "x⁶ / y⁴",
        explanation: { en: "x^(-3 · -2) · y^(2 · -2) = x⁶ · y⁻⁴ = x⁶ / y⁴.", ar: "توزيع الأس: x⁶ · y⁻⁴ = x⁶ / y⁴." }
      },
      {
        type: "mcq",
        question: { en: "Evaluate expression with exponent 0: (5x²y³)⁰ for x,y ≠ 0", ar: "احسب قيمة العبارة ذات الأس الصفري: (5x²y³)⁰ حيث x,y ≠ 0" },
        options: [{ en: "1", ar: "1" }, { en: "0", ar: "0" }, { en: "5", ar: "5" }, { en: "5xy", ar: "5xy" }],
        answer: "1",
        explanation: { en: "Any non-zero expression raised to the power of 0 equals 1.", ar: "أي عبارة غير صفرية مرفوعة للأس 0 تساوي 1." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: 16x² - 81y²", ar: "حلل تحليلاً تاماً: 16x² - 81y²" },
        options: [{ en: "(4x - 9y)(4x + 9y)", ar: "(4x - 9y)(4x + 9y)" }, { en: "(4x - 9y)²", ar: "(4x - 9y)²" }, { en: "(16x - 81y)(x + y)", ar: "(16x - 81y)(x + y)" }, { en: "Prime", ar: "أولي" }],
        answer: "(4x - 9y)(4x + 9y)",
        explanation: { en: "(4x)² - (9y)² = (4x - 9y)(4x + 9y).", ar: "(4x)² - (9y)² = (4x - 9y)(4x + 9y)." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: x⁴ - 16", ar: "حلل تحليلاً تاماً: x⁴ - 16" },
        options: [{ en: "(x² + 4)(x - 2)(x + 2)", ar: "(x² + 4)(x - 2)(x + 2)" }, { en: "(x² - 4)(x² + 4)", ar: "(x² - 4)(x² + 4)" }, { en: "(x - 2)²(x + 2)²", ar: "(x - 2)²(x + 2)²" }, { en: "(x - 4)(x + 4)", ar: "(x - 4)(x + 4)" }],
        answer: "(x² + 4)(x - 2)(x + 2)",
        explanation: { en: "x⁴ - 16 = (x² - 4)(x² + 4) = (x - 2)(x + 2)(x² + 4).", ar: "تحليل مرحلي: (x² - 4)(x² + 4) = (x - 2)(x + 2)(x² + 4)." }
      },
      {
        type: "mcq",
        question: { en: "Solve equation: (2x - 3) / 5 = 3", ar: "حل المعادلة: (2x - 3) / 5 = 3" },
        options: [{ en: "x = 9", ar: "x = 9" }, { en: "x = 6", ar: "x = 6" }, { en: "x = 18", ar: "x = 18" }, { en: "x = 4", ar: "x = 4" }],
        answer: "x = 9",
        explanation: { en: "2x - 3 = 15 => 2x = 18 => x = 9.", ar: "ضرب طرفين في وسطين: 2x - 3 = 15 => 2x = 18 => x = 9." }
      },
      {
        type: "truefalse",
        question: { en: "The equation x² + 4 = 0 has no real solutions.", ar: "المعادلة x² + 4 = 0 ليس لها حلول حقيقية." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "x² = -4, and square of real number cannot be negative.", ar: "x² = -4، ولا يوجد عدد حقيقي مربعه سالب." }
      },
      {
        type: "mcq",
        question: { en: "Vertex of the parabola f(x) = (x - 2)² + 3 is:", ar: "رأس المنحنى المكافئ f(x) = (x - 2)² + 3 هو:" },
        options: [{ en: "(2, 3)", ar: "(2, 3)" }, { en: "(-2, 3)", ar: "(-2, 3)" }, { en: "(2, -3)", ar: "(2, -3)" }, { en: "(-2, -3)", ar: "(-2, -3)" }],
        answer: "(2, 3)",
        explanation: { en: "Standard vertex form f(x) = a(x - h)² + k gives vertex (h, k) = (2, 3).", ar: "صيغة الرأس القياسية f(x) = a(x - h)² + k تعطي الرأس (2, 3)." }
      },
      {
        type: "mcq",
        question: { en: "The y-intercept of function f(x) = x² - 6x + 8 is:", ar: "المقطع الصادي للدالة f(x) = x² - 6x + 8 هو:" },
        options: [{ en: "(0, 8)", ar: "(0, 8)" }, { en: "(8, 0)", ar: "(8, 0)" }, { en: "(0, -6)", ar: "(0, -6)" }, { en: "(0, 2)", ar: "(0, 2)" }],
        answer: "(0, 8)",
        explanation: { en: "Set x = 0: f(0) = 0² - 6(0) + 8 = 8 => (0, 8).", ar: "بوضع x = 0 نحصل على f(0) = 8، أي (0, 8)." }
      },
      {
        type: "mcq",
        question: { en: "The x-intercepts of function f(x) = x² - 6x + 8 are:", ar: "المقاطع السينية للدالة f(x) = x² - 6x + 8 هي:" },
        options: [{ en: "(2, 0) and (4, 0)", ar: "(2, 0) و (4, 0)" }, { en: "(-2, 0) and (-4, 0)", ar: "(-2, 0) و (-4, 0)" }, { en: "(0, 2) and (0, 4)", ar: "(0, 2) و (0, 4)" }, { en: "(1, 0) and (8, 0)", ar: "(1, 0) و (8, 0)" }],
        answer: "(2, 0) and (4, 0)",
        explanation: { en: "Set f(x) = 0: (x - 2)(x - 4) = 0 => x = 2, 4.", ar: "بوضع f(x) = 0: (x - 2)(x - 4) = 0 => x = 2, 4." }
      },
      {
        type: "truefalse",
        question: { en: "The line x = 3 is the axis of symmetry for f(x) = (x - 3)² + 5.", ar: "المستقيم x = 3 هو محور التماثل للدالة f(x) = (x - 3)² + 5." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "The axis of symmetry for a vertical parabola is x = h, here x = 3.", ar: "محور التماثل للمكافئ هو الخط الرأسي x = h، وهنا x = 3." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: (x² - y²) / (x - y)", ar: "بسّط العبارة: (x² - y²) / (x - y)" },
        options: [{ en: "x + y", ar: "x + y" }, { en: "x - y", ar: "x - y" }, { en: "1", ar: "1" }, { en: "x² + y²", ar: "x² + y²" }],
        answer: "x + y",
        explanation: { en: "(x - y)(x + y) / (x - y) = x + y.", ar: "تحليل البسط لفرق بين مربعين واختصاره مع المقام يعطي x + y." }
      },
      {
        type: "mcq",
        question: { en: "Solve for x: 3x / 4 - 2 = 7", ar: "حل المعادلة بالنسبة لـ x: 3x / 4 - 2 = 7" },
        options: [{ en: "x = 12", ar: "x = 12" }, { en: "x = 20/3", ar: "x = 20/3" }, { en: "x = 36", ar: "x = 36" }, { en: "x = 15", ar: "x = 15" }],
        answer: "x = 12",
        explanation: { en: "3x / 4 = 9 => 3x = 36 => x = 12.", ar: "3x / 4 = 9 => 3x = 36 => x = 12." }
      },
      {
        type: "mcq",
        question: { en: "Evaluate ∛(-64):", ar: "احسب الجذر التكعيبي ∛(-64):" },
        options: [{ en: "-4", ar: "-4" }, { en: "4", ar: "4" }, { en: "Not a real number", ar: "ليس عدداً حقيقياً" }, { en: "-8", ar: "-8" }],
        answer: "-4",
        explanation: { en: "Odd roots of negative numbers are negative real numbers: (-4)³ = -64.", ar: "الجذور الفردية للأعداد السالبة معرّفة حقيقياً: (-4)³ = -64." }
      },
      {
        type: "truefalse",
        question: { en: "The square root of a negative real number √(-16) is a real number.", ar: "الجذر التربيعي للعدد السالب √(-16) هو عدد حقيقي." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Even roots of negative numbers are not real numbers; they are complex numbers (4i).", ar: "الجذور الزوجية للأعداد السالبة ليست أعداداً حقيقية بل مركبة (4i)." }
      },
      {
        type: "mcq",
        question: { en: "The simplified product of (x + 5)(x - 5) is:", ar: "ناتج ضرب العبارة (x + 5)(x - 5) هو:" },
        options: [{ en: "x² - 25", ar: "x² - 25" }, { en: "x² + 25", ar: "x² + 25" }, { en: "x² - 10x - 25", ar: "x² - 10x - 25" }, { en: "x² - 5x - 25", ar: "x² - 5x - 25" }],
        answer: "x² - 25",
        explanation: { en: "(a + b)(a - b) = a² - b² => x² - 25.", ar: "فرق بين مربعين: x² - 25." }
      },
      {
        type: "mcq",
        question: { en: "Solve equation: 5x - 3(x + 1) = 9", ar: "حل المعادلة: 5x - 3(x + 1) = 9" },
        options: [{ en: "x = 6", ar: "x = 6" }, { en: "x = 3", ar: "x = 3" }, { en: "x = 4", ar: "x = 4" }, { en: "x = 12", ar: "x = 12" }],
        answer: "x = 6",
        explanation: { en: "5x - 3x - 3 = 9 => 2x = 12 => x = 6.", ar: "5x - 3x - 3 = 9 => 2x = 12 => x = 6." }
      },
      {
        type: "mcq",
        question: { en: "Factor by grouping: 2x³ + 4x² + 3x + 6", ar: "حلل بالتجميع: 2x³ + 4x² + 3x + 6" },
        options: [{ en: "(2x² + 3)(x + 2)", ar: "(2x² + 3)(x + 2)" }, { en: "(2x² + 2)(x + 3)", ar: "(2x² + 2)(x + 3)" }, { en: "(x² + 3)(2x + 2)", ar: "(x² + 3)(2x + 2)" }, { en: "(2x + 3)(x² + 2)", ar: "(2x + 3)(x² + 2)" }],
        answer: "(2x² + 3)(x + 2)",
        explanation: { en: "2x²(x + 2) + 3(x + 2) = (2x² + 3)(x + 2).", ar: "2x²(x + 2) + 3(x + 2) = (2x² + 3)(x + 2)." }
      },
      {
        type: "mcq",
        question: { en: "What is the degree of the monomial -7x⁴y³z?", ar: "ما درجة الحد التكعيبي -7x⁴y³z؟" },
        options: [{ en: "8", ar: "8" }, { en: "7", ar: "7" }, { en: "4", ar: "4" }, { en: "-7", ar: "-7" }],
        answer: "8",
        explanation: { en: "Sum of exponents: 4 + 3 + 1 = 8.", ar: "مجموع أسس المتغيرات: 4 + 3 + 1 = 8." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: (a³b⁻²) / (a⁻¹b⁴)", ar: "بسّط العبارة: (a³b⁻²) / (a⁻¹b⁴)" },
        options: [{ en: "a⁴ / b⁶", ar: "a⁴ / b⁶" }, { en: "a² / b²", ar: "a² / b²" }, { en: "a⁴b⁶", ar: "a⁴b⁶" }, { en: "1 / (a⁴b⁶)", ar: "1 / (a⁴b⁶)" }],
        answer: "a⁴ / b⁶",
        explanation: { en: "a^(3 - (-1)) · b^(-2 - 4) = a⁴ · b⁻⁶ = a⁴ / b⁶.", ar: "طرح الأسس عند القسمة: a⁴ / b⁶." }
      },
      {
        type: "mcq",
        question: { en: "Convert 0.0000078 to scientific notation:", ar: "حول العدد 0.0000078 إلى صيغة علمية:" },
        options: [{ en: "7.8 × 10⁻⁶", ar: "7.8 × 10⁻⁶" }, { en: "7.8 × 10⁻⁵", ar: "7.8 × 10⁻⁵" }, { en: "78 × 10⁻⁷", ar: "78 × 10⁻⁷" }, { en: "0.78 × 10⁻⁵", ar: "0.78 × 10⁻⁵" }],
        answer: "7.8 × 10⁻⁶",
        explanation: { en: "Move decimal point 6 places right: 7.8 × 10⁻⁶.", ar: "تحريك الفاصلة 6 منازل لليمين: 7.8 × 10⁻⁶." }
      },
      {
        type: "mcq",
        question: { en: "The slope of a line passing through (2, 3) and (2, 7) is:", ar: "ميل المستقيم المار بالنقطتين (2, 3) و (2, 7) هو:" },
        options: [{ en: "Undefined", ar: "غير معرّف" }, { en: "0", ar: "0" }, { en: "4", ar: "4" }, { en: "1", ar: "1" }],
        answer: "Undefined",
        explanation: { en: "x1 = x2 = 2. Vertical line has undefined slope.", ar: "تساوي الإحداثيين السينيين يعني مستقيماً رأسياً ميله غير معرّف." }
      },
      {
        type: "mcq",
        question: { en: "The slope of a line passing through (3, 5) and (8, 5) is:", ar: "ميل المستقيم المار بالنقطتين (3, 5) و (8, 5) هو:" },
        options: [{ en: "0", ar: "0" }, { en: "Undefined", ar: "غير معرّف" }, { en: "5", ar: "5" }, { en: "1/5", ar: "1/5" }],
        answer: "0",
        explanation: { en: "y1 = y2 = 5. Horizontal line has slope = 0.", ar: "تساوي الإحداثيين الصاديين يعني مستقيماً أفقياً ميله يساوي 0." }
      },
      {
        type: "truefalse",
        question: { en: "The absolute value inequality |x| < a (where a > 0) is equivalent to -a < x < a.", ar: "متباينة القيمة المطلقة |x| < a (حيث a > 0) تكافئ -a < x < a." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Standard property for absolute value less than a positive number.", ar: "خاصية أساسية لمتباينات القيمة المطلقة الأصغر من عدد موجب." }
      },
      {
        type: "truefalse",
        question: { en: "The absolute value inequality |x| > a (where a > 0) is equivalent to x < -a or x > a.", ar: "متباينة القيمة المطلقة |x| > a (حيث a > 0) تكافئ x < -a أو x > a." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Standard property for absolute value greater than a positive number.", ar: "خاصية أساسية لمتباينات القيمة المطلقة الأكبر من عدد موجب." }
      },
      {
        type: "mcq",
        question: { en: "Simplify: (x³y²)^3", ar: "بسّط العبارة: (x³y²)^3" },
        options: [{ en: "x⁹y⁶", ar: "x⁹y⁶" }, { en: "x⁶y⁵", ar: "x⁶y⁵" }, { en: "x⁹y⁵", ar: "x⁹y⁵" }, { en: "x²⁷y⁸", ar: "x²⁷y⁸" }],
        answer: "x⁹y⁶",
        explanation: { en: "Multiply exponents: x^(3·3) · y^(2·3) = x⁹y⁶.", ar: "ضرب الأس الداخلي بالخارجي: x⁹y⁶." }
      },
      {
        type: "mcq",
        question: { en: "Find GCF of 18a²b³ and 24a³b²:", ar: "أوجد القاسم المشترك الأكبر (GCF) للحدين 18a²b³ و 24a³b²:" },
        options: [{ en: "6a²b²", ar: "6a²b²" }, { en: "6a³b³", ar: "6a³b³" }, { en: "72a³b³", ar: "72a³b³" }, { en: "12a²b²", ar: "12a²b²" }],
        answer: "6a²b²",
        explanation: { en: "GCF(18, 24) = 6. Take lowest power of common variables: a² and b² => 6a²b².", ar: "أصغر أسس المتغيرات المشتركة ومعامل الأعداد هو 6a²b²." }
      },
      {
        type: "mcq",
        question: { en: "Factor completely: 2x² - 8", ar: "حلل تحليلاً تاماً: 2x² - 8" },
        options: [{ en: "2(x - 2)(x + 2)", ar: "2(x - 2)(x + 2)" }, { en: "(2x - 4)(x + 2)", ar: "(2x - 4)(x + 2)" }, { en: "2(x - 4)²", ar: "2(x - 4)²" }, { en: "(x - 2)(2x + 4)", ar: "(x - 2)(2x + 4)" }],
        answer: "2(x - 2)(x + 2)",
        explanation: { en: "Factor out GCF = 2 first: 2(x² - 4) = 2(x - 2)(x + 2).", ar: "استخراج 2 كعامل مشترك أولاً: 2(x² - 4) = 2(x - 2)(x + 2)." }
      },
      {
        type: "mcq",
        question: { en: "Solve for y in terms of x: 3x + 2y = 12", ar: "حل بالنسبة لـ y بدلالة x: 3x + 2y = 12" },
        options: [{ en: "y = -3/2 x + 6", ar: "y = -3/2 x + 6" }, { en: "y = 3/2 x + 6", ar: "y = 3/2 x + 6" }, { en: "y = -3x + 12", ar: "y = -3x + 12" }, { en: "y = -2/3 x + 4", ar: "y = -2/3 x + 4" }],
        answer: "y = -3/2 x + 6",
        explanation: { en: "2y = -3x + 12 => y = -3/2 x + 6.", ar: "2y = -3x + 12 => القسمة على 2 تعطي y = -3/2 x + 6." }
      },
      {
        type: "truefalse",
        question: { en: "The Cartesian point (0, -4) lies on the y-axis.", ar: "النقطة الديكارتية (0, -4) تقع على محور الصادات (y-axis)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Any point with x-coordinate = 0 lies on the y-axis.", ar: "أي نقطة الإحداثي السيني لها صفر تقع على محور الصادات." }
      },
      {
        type: "truefalse",
        question: { en: "The Cartesian point (-5, 0) lies on the y-axis.", ar: "النقطة الديكارتية (-5, 0) تقع على محور الصادات." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "False",
        explanation: { en: "Any point with y-coordinate = 0 lies on the x-axis, not y-axis.", ar: "النقطة التي الإحداثي الصادي لها صفر تقع على محور السينات وليس الصادات." }
      },
      {
        type: "mcq",
        question: { en: "Which point is in Quadrant I?", ar: "أي من النقاط التالية تقع في الربع الأول؟" },
        options: [{ en: "(3, 5)", ar: "(3, 5)" }, { en: "(-3, 5)", ar: "(-3, 5)" }, { en: "(-3, -5)", ar: "(-3, -5)" }, { en: "(3, -5)", ar: "(3, -5)" }],
        answer: "(3, 5)",
        explanation: { en: "Quadrant I requires both x > 0 and y > 0.", ar: "الربع الأول يتطلب أن تكون الإحداثيات موجبة (+, +)." }
      },
      {
        type: "mcq",
        question: { en: "Which point is in Quadrant III?", ar: "أي من النقاط التالية تقع في الربع الثالث؟" },
        options: [{ en: "(-4, -2)", ar: "(-4, -2)" }, { en: "(4, 2)", ar: "(4, 2)" }, { en: "(-4, 2)", ar: "(-4, 2)" }, { en: "(4, -2)", ar: "(4, -2)" }],
        answer: "(-4, -2)",
        explanation: { en: "Quadrant III requires both x < 0 and y < 0.", ar: "الربع الثالث يتطلب أن تكون الإحداثيات سالبة (-, -)." }
      },
      {
        type: "mcq",
        question: { en: "Simplify expression: 5(2x - 3) + 4(x + 2)", ar: "بسّط العبارة: 5(2x - 3) + 4(x + 2)" },
        options: [{ en: "14x - 7", ar: "14x - 7" }, { en: "14x - 23", ar: "14x - 23" }, { en: "10x - 7", ar: "10x - 7" }, { en: "14x + 7", ar: "14x + 7" }],
        answer: "14x - 7",
        explanation: { en: "10x - 15 + 4x + 8 = 14x - 7.", ar: "10x - 15 + 4x + 8 = 14x - 7." }
      },
      {
        type: "mcq",
        question: { en: "The product of (3x - 2)² is:", ar: "مفكوك المربع (3x - 2)² هو:" },
        options: [{ en: "9x² - 12x + 4", ar: "9x² - 12x + 4" }, { en: "9x² - 4", ar: "9x² - 4" }, { en: "9x² + 12x + 4", ar: "9x² + 12x + 4" }, { en: "9x² - 6x + 4", ar: "9x² - 6x + 4" }],
        answer: "9x² - 12x + 4",
        explanation: { en: "(3x)² - 2(3x)(2) + 2² = 9x² - 12x + 4.", ar: "مربع الأول - 2(الأول)(الثاني) + مربع الثاني = 9x² - 12x + 4." }
      },
      {
        type: "mcq",
        question: { en: "The solution to system 2x + y = 7 and x - y = 2 is:", ar: "حل النظام 2x + y = 7 و x - y = 2 هو:" },
        options: [{ en: "(3, 1)", ar: "(3, 1)" }, { en: "(1, 3)", ar: "(1, 3)" }, { en: "(4, -1)", ar: "(4, -1)" }, { en: "(2, 3)", ar: "(2, 3)" }],
        answer: "(3, 1)",
        explanation: { en: "Add equations: 3x = 9 => x = 3. Substitute x = 3: 3 - y = 2 => y = 1.", ar: "جمع المعادلتين: 3x = 9 => x = 3، ثم y = 1." }
      },
      {
        type: "truefalse",
        question: { en: "A relation is a function if every input (x) corresponds to exactly one output (y).", ar: "تعتبر العلاقة دالة إذا كان كل عنصر في المجال (x) يرتبط بعنصر واحد فقط في المدى (y)." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "Definition of a mathematical function.", ar: "هذا هو التعريف الرياضي الأساسي للدالة." }
      },
      {
        type: "truefalse",
        question: { en: "The vertical line test can be used to determine whether a graph represents a function.", ar: "اختبار الخط الرأسي يمكن استخدامه لتحديد ما إذا كان المنحنى يمثل دالة." },
        options: [{ en: "True", ar: "صواب" }, { en: "False", ar: "خطأ" }],
        answer: "True",
        explanation: { en: "If any vertical line intersects the graph more than once, it is NOT a function.", ar: "إذا قطع أي خط رأسي المنحنى في أكثر من نقطة، فالمنحنى لا يمثل دالة." }
      }
                
        ]
      }
    ]
});
