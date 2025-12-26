/* STATE 2528 — app.js
   - i18n: ENG / RUS / KOR / CHI / DEU (real switching)
   - Language menu: click-only dropdown, closes on outside click / ESC
   - Parallax background layers (scroll-based)
   - Golden dust
   - Reveal on scroll
   - Sticky header shadow
*/

console.log("✅ app.js loaded");

/* ---------- Device / performance guards ---------- */
function detectLowPower(){
  try{
    const mem = Number(navigator.deviceMemory || 0); // GB
    const cores = Number(navigator.hardwareConcurrency || 0);
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const saveData = !!(conn && conn.saveData);
    const effectiveType = (conn && conn.effectiveType) ? String(conn.effectiveType) : "";
    const slowNet = /(^2g$|^slow-2g$)/.test(effectiveType);
    const smallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (saveData || slowNet) return true;
    if (smallScreen && (mem && mem <= 4)) return true;
    if (smallScreen && (cores && cores <= 4)) return true;
    return false;
  }catch(_){
    return false;
  }
}

const LANG_ORDER = ["ENG", "RUS", "KOR", "CHI", "DEU"];

const COPY = {
  ENG: {
    nav: { about: "State", nap: "NAP", reasons: "Why Us", alliances: "Alliances", apply: "Apply" },
    hero: { title: "STATE 2528", subtitle: "Stability & Teamwork" },
    about: {
      kicker: "About the State",
      title: "A Stable, United State",
      shortIntro:
        "State 2528 is a stable, multinational state with an active NAP6 and strong inter-alliance coordination. We focus on strategy, unity, and respectful play to succeed in all global events.",
      shortApproach:
        "Our approach emphasizes joint preparation, clear roles, and consistent execution across the state.",
    },
    nap: {
      kicker: "NAP Protocol",
      title: "Fair Play & Shared Power",
      desc:
        "Our state operates under a stable NAP, built on cooperation and mutual respect between alliances. We don’t waste resources fighting each other — we grow stronger together.",
      rulesTitle: "NAP Rules",
      rules: [
        "No city attacks or scouting within NAP alliances.",
        "Scheduled and transparent castle and fort rotations.",
        "Disputes are handled by leadership — no public conflicts.",
        "Zero tolerance for toxicity, sabotage, or harassment.",
      ],
      rotationTitle: "Castle & Fort Rotations",
      rotationDesc:
        "Sunfire Castle is rotated on a scheduled and transparent basis, ensuring fair access to leadership and long-term state stability.",
      fortsDesc:
        "Fort and stronghold rotations are fair and contribution-based, aligned with preparation-phase SvS objectives.",
    },
    reasons: {
      kicker: "Why Join",
      title: "What We Offer",
      items: [
        { title: "International & Inclusive", desc: "Players from all over the world in a comfortable, respectful environment—regardless of culture or time zone." },
        { title: "Experienced Leadership", desc: "Veteran leaders who manage growth, events, and SvS without chaos or unnecessary pressure." },
        { title: "Official State Discord", desc: "A unified state Discord for coordination, announcements, events, and transparent communication between alliances." },
        { title: "Structured State Management", desc: "Clear rules, aligned decisions, and organized cooperation between alliances across the state." },
        { title: "SvS-Oriented State", desc: "Strong focus on preparation, discipline, and teamwork to achieve consistent SvS results." },
        { title: "Drama-Free & Mature Community", desc: "Zero tolerance for toxicity, conflicts, or personal attacks. Calm, mature, goal-focused environment." },
      ],
    },
    alliances: {
      kicker: "Alliances",
      title: "Alliances, same mission.",
      subtitle: "Different groups, same goal — we stay organized and work as one state.",
      placeholder: { title: "Info coming soon", desc: "This card will contain alliance details." },
      one: {
        motto: "Forging Victory, Together.",
        desc:
          "[ONE] is a calm, organized alliance focused on teamwork, growth, and clean wins—so every member reaches full potential.",
        scheduleTitle: "Event Schedule (UTC)",
        reqTitle: "We Are Looking For",
        req: ["Furnace Level: FC4+", "Daily active in alliance & state events", "Positive and respectful attitude"],
        coordsTitle: "Coordinates",
      },
    },
    apply: {
      kicker: "Transfer",
      title: "Ready to Join a Team of Winners?",
      desc: "Apply below and our leadership will reach out with next steps.",
      button: "Open Application Form →",
    },
    footer: { line: "STATE 2528 • Golden Empire Protocol", small: "Built for strategy, stability, and clean wins." },
  },

  RUS: {
    nav: { about: "Государство", nap: "NAP", reasons: "Почему мы", alliances: "Альянсы", apply: "Заявка" },
    hero: { title: "STATE 2528", subtitle: "Стабильность и командная игра" },
    about: {
      kicker: "О государстве",
      title: "Стабильное, объединённое государство",
      shortIntro:
        "State 2528 — стабильное многонациональное государство с активным NAP6 и сильной координацией между альянсами. Ставим на стратегию, единство и уважительное общение.",
      shortApproach:
        "Готовимся вместе, распределяем роли и стабильно выполняем план по всему государству.",
    },
    nap: {
      kicker: "NAP протокол",
      title: "Честная игра и общий порядок",
      desc:
        "В государстве действует стабильный NAP на основе сотрудничества и взаимного уважения. Мы не тратим ресурсы на внутренние войны — мы усиливаемся вместе.",
      rulesTitle: "Правила NAP",
      rules: [
        "Запрещены атаки/разведка городов между NAP-альянсами.",
        "Ротации замка и фортов — по расписанию и прозрачно.",
        "Споры решаются руководством — без публичных конфликтов.",
        "Нулевая терпимость к токсичности, саботажу и харассменту.",
      ],
      rotationTitle: "Ротации замка и фортов",
      rotationDesc:
        "Sunfire Castle ротируется по расписанию и прозрачно, чтобы обеспечить справедливый доступ к лидерству и долгосрочную стабильность.",
      fortsDesc:
        "Ротации фортов и укреплений — по вкладу и подготовке к SvS (preparation).",
    },
    reasons: {
      kicker: "Почему мы",
      title: "Что у нас есть",
      items: [
        { title: "Международно и комфортно", desc: "Игроки со всего мира в спокойной и уважительной атмосфере — независимо от культуры и таймзоны." },
        { title: "Опытное руководство", desc: "Лидеры, которые ведут рост, события и SvS без хаоса и лишнего давления." },
        { title: "Официальный Discord государства", desc: "Единый Discord для координации, объявлений и прозрачной коммуникации между альянсами." },
        { title: "Структурное управление", desc: "Чёткие правила, согласованные решения и организованная совместная работа по всему государству." },
        { title: "Фокус на SvS", desc: "Подготовка, дисциплина и командная игра для стабильных результатов в SvS." },
        { title: "Без драмы, зрелое комьюнити", desc: "Нулевая терпимость к токсичности и конфликтам. Спокойная среда с фокусом на цели." },
      ],
    },
    alliances: {
      kicker: "Альянсы",
      title: "Альянсы — одна цель.",
      subtitle: "Разные команды, одна цель — порядок, роли и командная работа по всему государству.",
      placeholder: { title: "Скоро будет", desc: "Здесь будет информация об альянсе." },
      one: {
        motto: "Побеждаем вместе.",
        desc: "[ONE] — спокойный и организованный альянс с фокусом на командной игре, росте и чистых победах.",
        scheduleTitle: "Расписание событий (UTC)",
        reqTitle: "Мы ищем",
        req: ["Уровень печи: FC4+", "Ежедневная активность в альянсе и событиях", "Позитивный и уважительный настрой"],
        coordsTitle: "Координаты",
      },
    },
    apply: {
      kicker: "Переезд",
      title: "Готов вступить в команду победителей?",
      desc: "Нажми ниже — руководство свяжется с тобой и подскажет следующие шаги.",
      button: "Открыть форму →",
    },
    footer: { line: "STATE 2528 • Golden Empire Protocol", small: "Стратегия, стабильность и чистые победы." },
  },

  KOR: {
    nav: { about: "국가", nap: "NAP", reasons: "장점", alliances: "연맹", apply: "지원" },
    hero: { title: "STATE 2528", subtitle: "안정과 팀워크" },
    about: {
      kicker: "국가 소개",
      title: "안정적이고 단합된 국가",
      shortIntro: "State 2528은 안정적인 다국적 국가이며 활성화된 NAP6와 강력한 연맹 간 협업 체계를 갖추고 있습니다.",
      shortApproach: "함께 준비하고 역할을 명확히 하며 일관된 실행으로 결과를 만들어냅니다.",
    },
    nap: {
      kicker: "NAP 규약",
      title: "공정한 운영 · 공동 질서",
      desc:
        "연맹 간 협력과 상호 존중을 기반으로 한 안정적인 NAP 체계를 운영합니다. 내부 전투에 자원을 낭비하지 않고 함께 성장합니다.",
      rulesTitle: "NAP 규칙",
      rules: [
        "NAP 연맹 간 도시 공격 및 정찰 금지.",
        "성/요새 로테이션은 일정 기반으로 투명하게 진행.",
        "분쟁은 운영진 중재 — 공개 충돌 금지.",
        "독성 행동, 방해, 괴롭힘 무관용.",
      ],
      rotationTitle: "성 · 요새 로테이션",
      rotationDesc: "Sunfire Castle은 정해진 일정에 따라 공정하게 로테이션되며 장기적인 안정과 균형을 보장합니다.",
      fortsDesc: "요새 및 거점은 SvS 준비 단계 기여도를 기준으로 공정하게 분배됩니다.",
    },
    reasons: {
      kicker: "장점",
      title: "우리가 제공하는 것",
      items: [
        { title: "국제적 · 포용적인 환경", desc: "문화/타임존 상관없이 편안하고 존중받는 분위기." },
        { title: "경험 많은 운영진", desc: "혼란 없이 성장, 이벤트, SvS를 안정적으로 운영." },
        { title: "공식 국가 디스코드", desc: "공지/조율/이벤트를 통합하고 소통은 투명하게." },
        { title: "체계적인 국가 운영", desc: "명확한 규칙과 일관된 결정, 연맹 간 조직적 협업." },
        { title: "SvS 중심 국가", desc: "준비·규율·팀워크로 꾸준한 SvS 성과." },
        { title: "드라마 없는 성숙한 커뮤니티", desc: "독성/분쟁 무관용. 차분하고 목표 지향적인 환경." },
      ],
    },
    alliances: {
      kicker: "연맹",
      title: "연맹은 달라도 목표는 하나.",
      subtitle: "역할과 기준을 공유하고 국가 전체가 함께 움직입니다.",
      placeholder: { title: "곧 추가됩니다", desc: "여기에 연맹 정보가 들어갑니다." },
      one: {
        motto: "함께 승리를 만든다.",
        desc: "[ONE]은 팀워크와 성장, 깔끔한 승리를 중시하는 차분하고 조직적인 연맹입니다.",
        scheduleTitle: "이벤트 일정 (UTC)",
        reqTitle: "모집 기준",
        req: ["난로 레벨: FC4+", "연맹/국가 이벤트 일일 참여", "긍정적이고 존중하는 태도"],
        coordsTitle: "좌표",
      },
    },
    apply: {
      kicker: "이동",
      title: "승자 팀에 합류할 준비 되셨나요?",
      desc: "아래 버튼으로 지원서를 열면 운영진이 다음 단계를 안내드립니다.",
      button: "지원서 열기 →",
    },
    footer: { line: "STATE 2528 • Golden Empire Protocol", small: "전략, 안정, 그리고 깔끔한 승리를 위해." },
  },

  CHI: {
    nav: { about: "国家", nap: "NAP", reasons: "优势", alliances: "联盟", apply: "申请" },
    hero: { title: "STATE 2528", subtitle: "稳定与团队" },
    about: {
      kicker: "关于国家",
      title: "稳定、团结的国家",
      shortIntro: "State 2528 是一个稳定的多国玩家国家，拥有活跃的 NAP6 与强大的联盟协作。",
      shortApproach: "共同备战、明确分工、持续执行，整个国家一起拿结果。",
    },
    nap: {
      kicker: "NAP 规则",
      title: "公平与秩序",
      desc: "稳定的 NAP 建立在合作与相互尊重之上。我们不把资源浪费在内战上，而是一起变强。",
      rulesTitle: "NAP 规则",
      rules: ["NAP 联盟之间禁止攻城/侦察。", "城堡与要塞轮换公开透明、按计划执行。", "纠纷由管理层处理，禁止公开争吵。", "对毒性/破坏/骚扰零容忍。"],
      rotationTitle: "城堡与要塞轮换",
      rotationDesc: "Sunfire Castle 按计划透明轮换，保证公平与长期稳定。",
      fortsDesc: "要塞/据点按贡献与SvS备战需求公平分配。",
    },
    reasons: {
      kicker: "为什么加入",
      title: "我们提供什么",
      items: [
        { title: "国际化、包容", desc: "来自世界各地的玩家，在尊重友好的环境中一起玩。" },
        { title: "经验丰富的管理", desc: "成长、活动、SvS 有序推进，不混乱、不施压。" },
        { title: "官方国家 Discord", desc: "统一协调、公告与活动安排，联盟沟通透明。" },
        { title: "结构化管理", desc: "规则清晰、决策一致、联盟协作有组织。" },
        { title: "SvS 导向", desc: "重视备战、纪律与团队配合，稳定出成绩。" },
        { title: "成熟无内斗", desc: "对毒性与冲突零容忍，氛围冷静目标明确。" },
      ],
    },
    alliances: {
      kicker: "联盟",
      title: "联盟不同，目标一致。",
      subtitle: "我们保持秩序与协作，作为一个国家一起行动。",
      placeholder: { title: "即将更新", desc: "这里将放联盟信息。" },
      one: {
        motto: "一起走向胜利。",
        desc: "[ONE] 氛围冷静有序，专注团队、成长与干净的胜利。",
        scheduleTitle: "活动时间 (UTC)",
        reqTitle: "招募要求",
        req: ["熔炉等级：FC4+", "每日活跃参与联盟/国家活动", "积极且尊重他人"],
        coordsTitle: "坐标",
      },
    },
    apply: {
      kicker: "转服",
      title: "准备加入赢家团队了吗？",
      desc: "点击下方按钮打开申请表，我们会联系你确认后续步骤。",
      button: "打开申请表 →",
    },
    footer: { line: "STATE 2528 • Golden Empire Protocol", small: "为策略、稳定与胜利而建。" },
  },

  DEU: {
    nav: { about: "Staat", nap: "NAP", reasons: "Warum wir", alliances: "Allianzen", apply: "Bewerben" },
    hero: { title: "STATE 2528", subtitle: "Stabilität & Teamplay" },
    about: {
      kicker: "Über den Staat",
      title: "Ein stabiler, vereinter Staat",
      shortIntro: "State 2528 ist ein stabiler, multinationaler Staat mit aktivem NAP6 und starker Allianz-Koordination.",
      shortApproach: "Gemeinsam vorbereiten, klare Rollen, konsequente Umsetzung im ganzen Staat.",
    },
    nap: {
      kicker: "NAP Protokoll",
      title: "Fair Play & Ordnung",
      desc: "Ein stabiler NAP basiert auf Zusammenarbeit und Respekt. Wir verschwenden keine Ressourcen in internen Kämpfen — wir werden gemeinsam stärker.",
      rulesTitle: "NAP Regeln",
      rules: [
        "Keine Stadtangriffe oder Spionage innerhalb der NAP-Allianzen.",
        "Geplante und transparente Burg- und Fort-Rotationen.",
        "Konflikte werden von der Führung gelöst — keine öffentlichen Streits.",
        "Null Toleranz für Toxizität, Sabotage oder Belästigung.",
      ],
      rotationTitle: "Burg- & Fort-Rotationen",
      rotationDesc: "Sunfire Castle rotiert nach Plan und transparent — für fairen Zugang und langfristige Stabilität.",
      fortsDesc: "Forts und Strongholds werden fair und beitragsbasiert verteilt (SvS-Preparation).",
    },
    reasons: {
      kicker: "Warum beitreten",
      title: "Was wir bieten",
      items: [
        { title: "International & inklusiv", desc: "Spieler aus aller Welt — respektvoll, entspannt, unabhängig von Zeitzonen." },
        { title: "Erfahrene Führung", desc: "Wachstum, Events und SvS ohne Chaos oder unnötigen Druck." },
        { title: "Offizieller State-Discord", desc: "Koordination, Ankündigungen und transparente Kommunikation zwischen Allianzen." },
        { title: "Strukturiertes Management", desc: "Klare Regeln, abgestimmte Entscheidungen und organisierte Zusammenarbeit." },
        { title: "SvS-orientiert", desc: "Fokus auf Vorbereitung, Disziplin und Teamwork für konstante Ergebnisse." },
        { title: "Reife, drama-freie Community", desc: "Null Toleranz für Toxizität oder persönliche Angriffe." },
      ],
    },
    alliances: {
      kicker: "Allianzen",
      title: "Allianzen, ein Ziel.",
      subtitle: "Unterschiedliche Gruppen — ein Staat. Wir bleiben organisiert und ziehen an einem Strang.",
      placeholder: { title: "Kommt bald", desc: "Hier kommen Allianz-Details hin." },
      one: {
        motto: "Gemeinsam zum Sieg.",
        desc: "[ONE] ist ruhig, organisiert und fokussiert auf Teamwork, Wachstum und saubere Wins.",
        scheduleTitle: "Event-Zeiten (UTC)",
        reqTitle: "Wir suchen",
        req: ["Ofen-Level: FC4+", "Täglich aktiv in Allianz- & State-Events", "Positive & respektvolle Einstellung"],
        coordsTitle: "Koordinaten",
      },
    },
    apply: {
      kicker: "Transfer",
      title: "Bereit für ein Gewinner-Team?",
      desc: "Klicke unten — die Leitung meldet sich mit den nächsten Schritten.",
      button: "Bewerbungsformular öffnen →",
    },
    footer: { line: "STATE 2528 • Golden Empire Protocol", small: "Gebaut für Strategie, Stabilität und saubere Siege." },
  },
};

const state = {
  lang: safeLang(localStorage.getItem("lang") || "ENG"),
  reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  lowPower: detectLowPower(),
};

// Let CSS disable heavy effects on weaker devices
document.documentElement.classList.toggle("low-power", state.lowPower);

function safeLang(code) {
  return LANG_ORDER.includes(code) ? code : "ENG";
}

function get(path, obj) {
  const parts = path.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return "";
    if (Array.isArray(cur)) {
      const idx = Number(p);
      cur = Number.isFinite(idx) ? cur[idx] : "";
    } else {
      cur = cur[p];
    }
  }
  return cur ?? "";
}

function applyI18n() {
  const dict = COPY[state.lang] || COPY.ENG;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = get(key, dict);
    if (typeof val === "string") el.textContent = val;
  });

  const label = document.getElementById("langLabel");
  if (label) label.textContent = state.lang;

  document.documentElement.setAttribute(
    "lang",
    state.lang === "RUS" ? "ru" :
    state.lang === "KOR" ? "ko" :
    state.lang === "CHI" ? "zh" :
    state.lang === "DEU" ? "de" : "en"
  );
}

/* ---------- Language dropdown (created by JS) ---------- */
function injectLangMenuStyles() {
  if (document.getElementById("langMenuStyles")) return;

  const css = `
#langMenu{
  position: fixed;
  z-index: 9999;
  min-width: 140px;
  padding: 8px;
  border-radius: 14px;
  border: 1px solid rgba(251,191,36,0.18);
  background: rgba(7,16,34,0.92);
  box-shadow: 0 25px 80px rgba(0,0,0,0.55);
  backdrop-filter: blur(12px);
  display: none;
}
#langMenu.is-open{ display:block; }
#langMenu button{
  width: 100%;
  text-align: left;
  border: 0;
  background: transparent;
  color: rgba(255,255,255,0.88);
  padding: 10px 10px;
  border-radius: 10px;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  letter-spacing: .06em;
}
#langMenu button:hover{ background: rgba(251,191,36,0.12); }
#langMenu button.is-active{
  color: rgba(253,230,138,0.98);
  background: rgba(251,191,36,0.08);
}
#langMenu .hint{
  margin: 6px 10px 2px;
  font-size: 11px;
  color: rgba(255,255,255,0.55);
  letter-spacing: .12em;
  text-transform: uppercase;
}
  `.trim();

  const style = document.createElement("style");
  style.id = "langMenuStyles";
  style.textContent = css;
  document.head.appendChild(style);
}

function buildLangMenu() {
  let menu = document.getElementById("langMenu");
  if (menu) return menu;

  menu = document.createElement("div");
  menu.id = "langMenu";
  menu.setAttribute("role", "menu");
  menu.innerHTML = `<div class="hint">Language</div>`;
  document.body.appendChild(menu);

  for (const code of LANG_ORDER) {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("role", "menuitem");
    b.dataset.lang = code;
    b.textContent = code;
    b.addEventListener("click", () => {
      state.lang = safeLang(code);
      localStorage.setItem("lang", state.lang);
      applyI18n();
      closeLangMenu();
    });
    menu.appendChild(b);
  }

  return menu;
}

function positionLangMenu(btn, menu) {
  const r = btn.getBoundingClientRect();
  const gap = 10;

  const left = Math.max(10, Math.min(window.innerWidth - menu.offsetWidth - 10, r.right - menu.offsetWidth));
  const top = Math.min(window.innerHeight - menu.offsetHeight - 10, r.bottom + gap);

  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
}

function syncLangMenuActive(menu) {
  menu.querySelectorAll("button[data-lang]").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === state.lang);
  });
}

function openLangMenu(btn, menu) {
  menu.classList.add("is-open");
  syncLangMenuActive(menu);
  positionLangMenu(btn, menu);
  btn.setAttribute("aria-expanded", "true");
}

function closeLangMenu() {
  const menu = document.getElementById("langMenu");
  const btn = document.getElementById("langBtn");
  if (menu) menu.classList.remove("is-open");
  if (btn) btn.setAttribute("aria-expanded", "false");
}

function initLangSwitch() {
  const btn = document.getElementById("langBtn");
  if (!btn) return;

  injectLangMenuStyles();
  const menu = buildLangMenu();

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = menu.classList.contains("is-open");
    if (isOpen) closeLangMenu();
    else openLangMenu(btn, menu);
  });

  document.addEventListener(
    "pointerdown",
    (e) => {
      if (!menu.classList.contains("is-open")) return;
      if (!menu.contains(e.target) && !btn.contains(e.target)) closeLangMenu();
    },
    { passive: true }
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLangMenu();
  });

  window.addEventListener("resize", () => {
    if (menu.classList.contains("is-open")) positionLangMenu(btn, menu);
  });
  window.addEventListener(
    "scroll",
    () => {
      if (menu.classList.contains("is-open")) positionLangMenu(btn, menu);
    },
    { passive: true }
  );
}

/* ---------- Sticky header ---------- */
function initStickyHeader() {
  const bar = document.getElementById("topbar");
  if (!bar) return;
  const onScroll = () => bar.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add("is-visible");
    },
    { threshold: 0.18 }
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Parallax ---------- */
function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function initParallax() {
  if (state.reduceMotion || state.lowPower) return;

  const layers = [...document.querySelectorAll("[data-parallax]")].map((el) => ({
    el,
    rate: Number(el.getAttribute("data-parallax")) || 0,
  }));
  if (!layers.length) return;

  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const y = window.scrollY;
      for (const l of layers) {
        const t = clamp(y * l.rate, -160, 320);
        l.el.style.transform = `translate3d(0, ${t}px, 0)`;
      }
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Dust ---------- */
function hashToUnit(i) {
  const x = Math.sin(i * 999.123 + 0.12345) * 43758.5453;
  return x - Math.floor(x);
}

function initDust() {
  const host = document.getElementById("dust");
  if (!host) return;
  if (state.lowPower) return;
  if (host.dataset.ready === "1") return;
  host.dataset.ready = "1";

  const count = 26;
  for (let i = 0; i < count; i++) {
    const x = hashToUnit(i + 1);
    const y = hashToUnit(i + 77);
    const s = 0.6 + hashToUnit(i + 333) * 1.4;
    const o = 0.18 + hashToUnit(i + 555) * 0.22;
    const blur = 0.6 + hashToUnit(i + 222) * 1.6;
    const dur = 7 + hashToUnit(i + 999) * 10;
    const dx = (hashToUnit(i + 111) - 0.5) * 28;
    const dy = (hashToUnit(i + 444) - 0.5) * 40;

    const dot = document.createElement("span");
    dot.style.left = `${x * 100}%`;
    dot.style.top = `${y * 100}%`;
    dot.style.width = `${2.2 * s}px`;
    dot.style.height = `${2.2 * s}px`;
    dot.style.opacity = o.toFixed(3);
    dot.style.filter = `blur(${blur.toFixed(2)}px)`;

    if (!state.reduceMotion) {
      dot.animate(
        [
          { transform: "translate3d(0,0,0)", opacity: o * 0.6 },
          { transform: `translate3d(${dx}px, ${dy}px, 0)`, opacity: o },
          { transform: "translate3d(0,0,0)", opacity: o * 0.7 },
        ],
        { duration: dur * 1000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" }
      );
    }

    host.appendChild(dot);
  }
}

function initDustDeferred(){
  if (state.reduceMotion || state.lowPower) return;
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => initDust(), { timeout: 1200 });
  } else {
    setTimeout(() => initDust(), 250);
  }
}

function init() {
  state.lang = safeLang(state.lang);
  applyI18n();
  initLangSwitch();
  initStickyHeader();
  initReveal();
  initParallax();
  initDustDeferred();
}

window.addEventListener("DOMContentLoaded", init);
