const translations = {
  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_learn: "تعلّم",
    nav_combinational: "دوائر توافقية",
    nav_sequential: "دوائر تعاقبية",
    nav_simulator: "المحاكي",
    nav_kmap: "خريطة كارنوف",
    nav_ar: "الواقع المعزز",
    nav_markers: "العلامات",

    // Home / Hero
    site_title: "LogicAR — تعلم البوابات المنطقية بالواقع المعزز",
    hero_badge: "وسيلة تعليمية تفاعلية",
    hero_title: "تعلّم <span>البوابات المنطقية</span> <br>بالواقع المعزز",
    hero_subtitle: "اكتشف عالم الدوائر الرقمية من خلال تجربة تفاعلية ثلاثية الأبعاد. افهم البوابات المنطقية، صمم دوائرك، وشاهدها تنبض بالحياة أمام عينيك.",
    btn_start_learning: "ابدأ التعلم &larr;",
    btn_try_simulator: "جرّب المحاكي",

    // Features
    features_tag: "المميزات",
    features_title: "أدوات تعليمية متكاملة",
    features_desc: "أربع طرق مختلفة للتعلم والاستكشاف، مصممة لتناسب جميع أنماط التعلم",
    feat1_title: "محتوى تعليمي تفاعلي",
    feat1_desc: "شرح مفصل لكل بوابة منطقية مع جداول الحقيقة والرموز الكهربائية، وأمثلة تفاعلية حية يمكنك التحكم فيها.",
    feat2_title: "محاكي الدوائر",
    feat2_desc: "صمم دوائرك الرقمية من خلال سحب وإفلات البوابات المنطقية وتوصيلها ببعضها. شاهد الإشارات تنتقل في الوقت الحقيقي.",
    feat3_title: "تجربة الواقع المعزز",
    feat3_desc: "وجّه كاميرا هاتفك نحو العلامات المطبوعة وشاهد البوابات المنطقية تظهر أمامك كمجسمات ثلاثية الأبعاد مع شرح تفاعلي.",
    feat4_title: "علامات قابلة للطباعة",
    feat4_desc: "اطبع مجموعة العلامات الخاصة بكل بوابة منطقية واستخدمها في تجربة الواقع المعزز. سهلة الطباعة والاستخدام.",

    // Gates Preview
    gates_tag: "البوابات المنطقية",
    gates_title: "٧ بوابات أساسية",
    gates_desc: "تعرّف على البوابات المنطقية الأساسية المستخدمة في بناء الدوائر الرقمية",
    gate_and: "بوابة \"و\"",
    gate_or: "بوابة \"أو\"",
    gate_not: "بوابة \"النفي\"",
    gate_nand: "بوابة \"نفي و\"",
    gate_nor: "بوابة \"نفي أو\"",
    gate_xor: "بوابة \"حصري أو\"",
    gate_xnor: "بوابة \"تكافؤ\"",
    btn_discover_gates: "اكتشف كل بوابة بالتفصيل &larr;",

    // How it works
    steps_tag: "كيف تعمل",
    steps_title: "خطوات بسيطة للبدء",
    step1_title: "تعلّم النظرية",
    step1_desc: "ابدأ بقراءة شرح كل بوابة منطقية وفهم جداول الحقيقة",
    step2_title: "جرّب المحاكي",
    step2_desc: "صمم دوائرك الخاصة في المحاكي التفاعلي وشاهد النتائج",
    step3_title: "اطبع العلامات",
    step3_desc: "حمّل واطبع علامات الواقع المعزز الخاصة بكل بوابة",
    step4_title: "شاهد بالـ AR",
    step4_desc: "وجّه الكاميرا نحو العلامات وشاهد المجسمات ثلاثية الأبعاد",

    // Footer
    footer_desc: "LogicAR — وسيلة تعليمية لتدريس البوابات المنطقية والدوائر الكهربائية بتقنية الواقع المعزز",
    footer_copy: "مشروع تعليمي جامعي &copy; ٢٠٢٦",

    // Learn Page
    page_learn_title: "تعلّم البوابات المنطقية — LogicAR",
    learn_content_tag: "المحتوى التعليمي",
    learn_main_title: "البوابات المنطقية الأساسية",
    learn_main_desc: "اضغط على المفاتيح لتغيير المدخلات وشاهد كيف تتغير المخرجات في كل بوابة",
    what_is_gate_title: "ما هي البوابات المنطقية؟",
    what_is_gate_desc: "البوابات المنطقية (Logic Gates) هي الوحدات الأساسية لبناء الدوائر الرقمية. تقوم كل بوابة بتنفيذ عملية منطقية على إشارة دخل واحدة أو أكثر وتنتج إشارة خرج واحدة. الإشارات تكون إما <strong style=\"color:var(--accent-green);\">1 (HIGH)</strong> أو <strong style=\"color:var(--accent-red);\">0 (LOW)</strong>. هذه البوابات تشكّل أساس عمل جميع الأجهزة الإلكترونية من الهواتف إلى الحواسيب.",
    apps_tag: "تطبيقات",
    apps_title: "أمثلة على دوائر مركبة",
    apps_desc: "يمكن تركيب البوابات المنطقية معاً لبناء دوائر أكثر تعقيداً",
    half_adder_title: "نصف الجامع (Half Adder)",
    half_adder_desc: "يستخدم بوابة XOR لحساب المجموع (Sum) وبوابة AND لحساب الحمل (Carry). يجمع رقمين ثنائيين (0 أو 1).",
    mux_title: "المُبدّل (Multiplexer)",
    mux_desc: "يختار مدخل واحد من عدة مدخلات بناءً على إشارة التحكم. يُستخدم في توجيه البيانات في المعالجات.",
    btn_try_sim_learn: "جرّب بناء دوائرك في المحاكي &larr;",
    truth_table_title: "جدول الحقيقة",
    try_yourself: "جرّب بنفسك",

    // Combinational Page
    page_comb_title: "الدوائر التوافقية — LogicAR",
    comb_content_tag: "وحدة تعليمية",
    comb_main_title: "الدوائر التوافقية (Combinational)",
    comb_main_desc: "الدوائر التي يعتمد خرجها فقط على المدخلات الحالية دون الاعتماد على حالة سابقة (لا تحتوي على ذاكرة).",
    btn_try_sim_comb: "جرّب بناء هذه الدوائر في المحاكي &larr;",

    // Sequential Page
    page_seq_title: "الدوائر التعاقبية — LogicAR",
    seq_content_tag: "وحدة تعليمية",
    seq_main_title: "الدوائر التعاقبية (Sequential)",
    seq_main_desc: "الدوائر التي يعتمد خرجها على المدخلات الحالية وحالة الدائرة السابقة (تحتوي على ذاكرة ونبضات ساعة Clock).",
    btn_back_to_sim: "العودة إلى المحاكي &larr;",
    state_table: "جدول الحالة (State Table)",
    interactive_demo: "تجربة تفاعلية",
    sr_note: "ملاحظة: SR Latch يتأثر فوراً بالتغيير. أما D و JK يحتاجان لضغط زر CLK لحفظ القيمة.",
    btn_reset: "تصفير",
    state_col: "الحالة",
    state_no_change: "لا تغيير (No Change)",
    state_reset: "إعادة تعيين (Reset)",
    state_set: "تعيين (Set)",
    state_invalid: "غير مسموح (Invalid)",
    state_toggle: "عكس الحالة (Toggle)",
    col_clock: "نبضة الساعة",
    col_op: "العملية",
    op_init: "الحالة الابتدائية",
    op_shift_1: "نبضة 1 (Shift)",
    op_shift_2: "نبضة 2 (Shift)",
    op_shift_3: "نبضة 3 (Shift)",

    // Simulator Page
    page_sim_title: "محاكي الدوائر — LogicAR",
    sim_toolbar_io: "المدخلات والمخرجات",
    sim_btn_input: "مفتاح دخل",
    sim_btn_output: "مصباح خرج",
    sim_toolbar_basic: "البوابات الأساسية",
    sim_btn_and: "بوابة و",
    sim_btn_or: "بوابة أو",
    sim_btn_not: "بوابة نفي",
    sim_toolbar_complex: "البوابات المركبة",
    sim_btn_nand: "نفي و",
    sim_btn_nor: "نفي أو",
    sim_btn_xor: "حصري أو",
    sim_btn_xnor: "تكافؤ",
    sim_hint_title: "اختر بوابة من القائمة لإضافتها",
    sim_hint_desc: "اضغط على منفذ خرج ثم منفذ دخل للتوصيل",
    sim_btn_connect: "توصيل",
    sim_btn_delete: "حذف",
    sim_btn_clear: "مسح الكل",
    sim_info_title: "معلومات العنصر",
    sim_info_empty: "اضغط على أي بوابة لمشاهدة معلوماتها هنا",
    sim_err_loop: "لا يمكن إنشاء دائرة مغلقة!",
    sim_info_in_desc: "مفتاح دخل - اضغط عليه لتغيير القيمة بين 0 و 1",
    sim_info_out_desc: "مصباح خرج - يضيء عندما تكون القيمة 1",
    sim_info_curr_val: "القيمة الحالية:",
    sim_info_inputs: "المدخلات:",
    sim_info_output: "المخرج:",
    sim_tab_info: "معلومات العنصر",
    sim_tab_results: "نتائج الدائرة",
    sim_results_summary: "الملخص الحي",
    sim_results_inputs: "المدخلات",
    sim_results_outputs: "المخرجات",
    sim_results_truth_table: "جدول الحقيقة الكامل",
    sim_results_expression: "المعادلة المنطقية",
    sim_results_no_circuit: "أضف مدخلات ومخرجات وبوابات لبناء دائرة",
    sim_results_no_outputs: "أضف مخرج واحد على الأقل (OUT)",
    sim_results_disconnected: "غير متصل",

    // K-Map Page
    page_kmap_title: "خريطة كارنوف — LogicAR",
    kmap_content_tag: "محاكي متقدم",
    kmap_main_title: "خريطة كارنوف (K-Map)",
    kmap_main_desc: "استخدم خريطة كارنوف لتبسيط المعادلات المنطقية. أدخل قيم جدول الحقيقة وسيتم استخراج المعادلة المبسطة تلقائياً.",
    kmap_panel_tt: "جدول الحقيقة",
    btn_2_vars: "متغيرين",
    btn_3_vars: "٣ متغيرات",
    btn_4_vars: "٤ متغيرات",
    kmap_panel_map: "الخريطة والمعادلة",
    kmap_expression_label: "المعادلة المبسطة (SOP)",

    // AR Page
    page_ar_title: "الواقع المعزز — LogicAR",
    ar_exp_title: "تجربة <span class=\"text-gradient\">الواقع المعزز</span>",
    ar_exp_desc: "وجّه كاميرا هاتفك نحو العلامة المطبوعة وشاهد البوابة المنطقية تظهر كمجسم ثلاثي الأبعاد مع المعلومات التعليمية",
    ar_step_1: "اطبع العلامات من <a href=\"markers.html\">صفحة العلامات</a>",
    ar_step_2: "اختر البوابة المراد عرضها",
    ar_step_3: "اضغط \"ابدأ الكاميرا\" ووجّهها للعلامة",
    ar_sel_gate: "اختر البوابة:",
    btn_start_cam: "📷 ابدأ الكاميرا",
    cam_req: "يتطلب متصفح حديث يدعم الكاميرا (Chrome / Safari)",
    btn_close: "✕ إغلاق",
    loading_cam: "⏳ جاري التحميل...",

    // Markers Page
    page_markers_title: "علامات الواقع المعزز — LogicAR",
    markers_tag: "طباعة",
    markers_title: "علامات الواقع المعزز",
    markers_desc: "اطبع هذه العلامات واستخدمها مع كاميرا هاتفك في تجربة الواقع المعزز",
    print_inst_title: "📋 تعليمات الطباعة",
    print_inst_1: "اطبع هذه الصفحة على ورق أبيض عادي (A4)",
    print_inst_2: "تأكد أن الطباعة بنسبة 100% بدون تصغير",
    print_inst_3: "قص كل علامة على حدة أو استخدمها كما هي",
    print_inst_4: "ضع العلامة على سطح مستوٍ ووجّه الكاميرا نحوها",
    print_inst_5: "حافظ على إضاءة جيدة لأفضل نتيجة",
    print_inst_6: "المسافة المثالية بين الكاميرا والعلامة: ١٥-٣٠ سم",
    btn_print: "طباعة العلامات",
    note_title: "⚠️ ملاحظة مهمة",
    note_text: "تستخدم تجربة الواقع المعزز نظام <strong>Barcode Markers</strong> من AR.js.<br>العلامة الأساسية المستخدمة هي العلامة رقم <strong style=\"color:var(--accent-cyan);\">0</strong> (Barcode Value 0).<br>يمكنك أيضاً استخدام علامة <strong>Hiro</strong> المعروفة لاختبار الكاميرا.",
    note_link: "← جرّب الواقع المعزز الآن"
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_learn: "Learn",
    nav_combinational: "Combinational",
    nav_sequential: "Sequential",
    nav_simulator: "Simulator",
    nav_kmap: "K-Map",
    nav_ar: "AR Experience",
    nav_markers: "Markers",

    // Home / Hero
    site_title: "LogicAR — Learn Logic Gates with AR",
    hero_badge: "Interactive Educational Tool",
    hero_title: "Learn <span>Logic Gates</span> <br>with AR",
    hero_subtitle: "Discover the world of digital circuits through a 3D interactive experience. Understand logic gates, design your circuits, and see them come to life.",
    btn_start_learning: "Start Learning &rarr;",
    btn_try_simulator: "Try Simulator",

    // Features
    features_tag: "Features",
    features_title: "Comprehensive Educational Tools",
    features_desc: "Four different ways to learn and explore, designed to suit all learning styles",
    feat1_title: "Interactive Content",
    feat1_desc: "Detailed explanation of each logic gate with truth tables, electrical symbols, and live interactive examples.",
    feat2_title: "Circuit Simulator",
    feat2_desc: "Design your digital circuits by dragging and dropping logic gates and connecting them. Watch signals propagate in real-time.",
    feat3_title: "AR Experience",
    feat3_desc: "Point your phone camera at printed markers and see logic gates appear as 3D models with interactive explanations.",
    feat4_title: "Printable Markers",
    feat4_desc: "Print the markers for each logic gate and use them in the AR experience. Easy to print and use.",

    // Gates Preview
    gates_tag: "Logic Gates",
    gates_title: "7 Basic Gates",
    gates_desc: "Learn about the basic logic gates used in building digital circuits",
    gate_and: "\"AND\" Gate",
    gate_or: "\"OR\" Gate",
    gate_not: "\"NOT\" Gate",
    gate_nand: "\"NAND\" Gate",
    gate_nor: "\"NOR\" Gate",
    gate_xor: "\"XOR\" Gate",
    gate_xnor: "\"XNOR\" Gate",
    btn_discover_gates: "Discover Each Gate in Detail &rarr;",

    // How it works
    steps_tag: "How It Works",
    steps_title: "Simple Steps to Start",
    step1_title: "Learn the Theory",
    step1_desc: "Start by reading the explanation of each logic gate and understanding truth tables",
    step2_title: "Try the Simulator",
    step2_desc: "Design your own circuits in the interactive simulator and see the results",
    step3_title: "Print the Markers",
    step3_desc: "Download and print the AR markers for each gate",
    step4_title: "View in AR",
    step4_desc: "Point the camera at the markers and view 3D models",

    // Footer
    footer_desc: "LogicAR — An educational tool for teaching logic gates and digital circuits using Augmented Reality",
    footer_copy: "University Educational Project &copy; 2026",

    // Learn Page
    page_learn_title: "Learn Logic Gates — LogicAR",
    learn_content_tag: "Educational Content",
    learn_main_title: "Basic Logic Gates",
    learn_main_desc: "Click on the switches to change the inputs and see how the outputs change for each gate.",
    what_is_gate_title: "What are Logic Gates?",
    what_is_gate_desc: "Logic Gates are the basic building blocks of digital circuits. Each gate performs a logical operation on one or more input signals and produces a single output signal. Signals are either <strong style=\"color:var(--accent-green);\">1 (HIGH)</strong> or <strong style=\"color:var(--accent-red);\">0 (LOW)</strong>. These gates form the basis of all electronic devices from phones to computers.",
    apps_tag: "Applications",
    apps_title: "Examples of Complex Circuits",
    apps_desc: "Logic gates can be combined to build more complex circuits.",
    half_adder_title: "Half Adder",
    half_adder_desc: "Uses an XOR gate to calculate the Sum and an AND gate to calculate the Carry. Adds two binary numbers (0 or 1).",
    mux_title: "Multiplexer",
    mux_desc: "Selects one of several input signals based on a control signal. Used for data routing in processors.",
    btn_try_sim_learn: "Try building your circuits in the Simulator &rarr;",
    truth_table_title: "Truth Table",
    try_yourself: "Try It Yourself",

    // Combinational Page
    page_comb_title: "Combinational Circuits — LogicAR",
    comb_content_tag: "Educational Unit",
    comb_main_title: "Combinational Circuits",
    comb_main_desc: "Circuits where the output depends only on the current inputs without depending on a previous state (no memory).",
    btn_try_sim_comb: "Try building these circuits in the Simulator &rarr;",

    // Sequential Page
    page_seq_title: "Sequential Circuits — LogicAR",
    seq_content_tag: "Educational Unit",
    seq_main_title: "Sequential Circuits",
    seq_main_desc: "Circuits whose output depends on the current inputs and the previous state of the circuit (contains memory and Clock pulses).",
    btn_back_to_sim: "Back to Simulator &rarr;",
    state_table: "State Table",
    interactive_demo: "Interactive Demo",
    sr_note: "Note: SR Latch is affected immediately by changes. D and JK require pressing the CLK button to save the value.",
    btn_reset: "Reset",
    state_col: "State",
    state_no_change: "No Change",
    state_reset: "Reset",
    state_set: "Set",
    state_invalid: "Invalid",
    state_toggle: "Toggle",
    col_clock: "Clock Pulse",
    col_op: "Operation",
    op_init: "Initial State",
    op_shift_1: "Pulse 1 (Shift)",
    op_shift_2: "Pulse 2 (Shift)",
    op_shift_3: "Pulse 3 (Shift)",

    // Simulator Page
    page_sim_title: "Circuit Simulator — LogicAR",
    sim_toolbar_io: "Inputs and Outputs",
    sim_btn_input: "Input Switch",
    sim_btn_output: "Output LED",
    sim_toolbar_basic: "Basic Gates",
    sim_btn_and: "AND Gate",
    sim_btn_or: "OR Gate",
    sim_btn_not: "NOT Gate",
    sim_toolbar_complex: "Complex Gates",
    sim_btn_nand: "NAND Gate",
    sim_btn_nor: "NOR Gate",
    sim_btn_xor: "XOR Gate",
    sim_btn_xnor: "XNOR Gate",
    sim_hint_title: "Select a gate from the menu to add it",
    sim_hint_desc: "Click on an output port then an input port to connect",
    sim_btn_connect: "Connect",
    sim_btn_delete: "Delete",
    sim_btn_clear: "Clear All",
    sim_info_title: "Element Information",
    sim_info_empty: "Click on any gate to view its information here",
    sim_err_loop: "Cannot create a closed loop!",
    sim_info_in_desc: "Input Switch - Click to toggle value between 0 and 1",
    sim_info_out_desc: "Output LED - Lights up when value is 1",
    sim_info_curr_val: "Current Value:",
    sim_info_inputs: "Inputs:",
    sim_info_output: "Output:",
    sim_tab_info: "Element Info",
    sim_tab_results: "Circuit Results",
    sim_results_summary: "Live Summary",
    sim_results_inputs: "Inputs",
    sim_results_outputs: "Outputs",
    sim_results_truth_table: "Full Truth Table",
    sim_results_expression: "Boolean Expression",
    sim_results_no_circuit: "Add inputs, outputs, and gates to build a circuit",
    sim_results_no_outputs: "Add at least one output (OUT)",
    sim_results_disconnected: "Disconnected",

    // K-Map Page
    page_kmap_title: "Karnaugh Map — LogicAR",
    kmap_content_tag: "Advanced Simulator",
    kmap_main_title: "Karnaugh Map (K-Map)",
    kmap_main_desc: "Use the Karnaugh Map to simplify boolean expressions. Enter truth table values and the simplified expression will be extracted automatically.",
    kmap_panel_tt: "Truth Table",
    btn_2_vars: "2 Variables",
    btn_3_vars: "3 Variables",
    btn_4_vars: "4 Variables",
    kmap_panel_map: "Map and Expression",
    kmap_expression_label: "Simplified Expression (SOP)",

    // AR Page
    page_ar_title: "Augmented Reality — LogicAR",
    ar_exp_title: "<span class=\"text-gradient\">Augmented Reality</span> Experience",
    ar_exp_desc: "Point your phone camera at the printed marker and watch the logic gate appear as a 3D model with educational information",
    ar_step_1: "Print markers from the <a href=\"markers.html\">Markers Page</a>",
    ar_step_2: "Select the gate you want to view",
    ar_step_3: "Click 'Start Camera' and point it at the marker",
    ar_sel_gate: "Select Gate:",
    btn_start_cam: "📷 Start Camera",
    cam_req: "Requires a modern browser that supports camera (Chrome / Safari)",
    btn_close: "✕ Close",
    loading_cam: "⏳ Loading...",

    // Markers Page
    page_markers_title: "AR Markers — LogicAR",
    markers_tag: "Print",
    markers_title: "AR Markers",
    markers_desc: "Print these markers and use them with your phone camera for the Augmented Reality experience",
    print_inst_title: "📋 Printing Instructions",
    print_inst_1: "Print this page on plain white A4 paper",
    print_inst_2: "Ensure printing is at 100% scale without shrinking",
    print_inst_3: "Cut each marker separately or use as is",
    print_inst_4: "Place the marker on a flat surface and point your camera at it",
    print_inst_5: "Maintain good lighting for best results",
    print_inst_6: "Ideal distance between camera and marker: 15-30 cm",
    btn_print: "Print Markers",
    note_title: "⚠️ Important Note",
    note_text: "The AR experience uses the <strong>Barcode Markers</strong> system from AR.js.<br>The primary marker used is marker <strong style=\"color:var(--accent-cyan);\">0</strong> (Barcode Value 0).<br>You can also use the well-known <strong>Hiro</strong> marker to test the camera.",
    note_link: "Try Augmented Reality Now →"
  }
};

function setLanguage(lang) {
  window.currentLang = lang;
  localStorage.setItem('logicAR_lang', lang);

  // Update HTML attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Highlight active language button (if any)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Dispatch event for custom JS re-rendering
  document.documentElement.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function initLanguage() {
  // Check local storage or default to 'ar'
  const savedLang = localStorage.getItem('logicAR_lang') || 'ar';
  setLanguage(savedLang);
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();

  // Add event listeners to language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
