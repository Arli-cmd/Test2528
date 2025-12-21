/* STATE 2528 — app.js
   - i18n EN/KOR (real switching)
   - Parallax background layers (scroll-based)
   - Golden dust (light, cinematic)
   - Reveal on scroll (IntersectionObserver)
   - Sticky header shadow
   - Mobile menu
*/

const COPY = {
  EN: {
    nav: { about: "State", nap: "NAP", reasons: "Why Us", alliances: "Alliances", apply: "Apply" },
    hero: {
      title: "STATE 2528",
      subtitle: "Stability & Teamwork",
      blurb:
        "A state forged in stability and teamwork—engineered for total SvS domination. We grow together, win together, and keep internal drama at zero.",
      badges: ["Organized Leadership", "Drama-Free Culture", "Event Optimized", "International Friendly"],
      cta: "Apply for Transfer",
      secondary: "Explore Our Structure",
    },
    one: {
      title: "Forging Victory, Together.",
      desc:
        "A collective of strategists and active warriors committed to mutual growth and dominance—strategy, teamwork, and a mature environment.",
      scheduleTitle: "Event Schedule (UTC)",
      bt3: "Yes, we have BT3",
      contactTitle: "Contact / Coordinates",
      contactDesc: "Message our leader in-game for details.",
      requireHint: "Requirement highlight: FC4+ • daily active • Discord.",
    },
    about: {
      kicker: "About the State",
      title: "A Stable Empire Built for Winners",
      desc:
        "State 2528 prioritizes growth and external threats over costly internal conflicts. Our structure rewards teamwork, coordination, and mature play—so winners can thrive.",
      svsTitle: "SvS Performance Focus",
      svsPrep: "Preparation Phase: coordinated scoring plans, resource routing, and role assignments.",
      svsBattle: "Battle Phase: disciplined rallies, clean comms, and focused objectives.",
      govTitle: "Governance",
      govDesc: "Stable NAP, transparent rotations, and clear enforcement. We focus on external threats—not internal chaos.",
      govPill1: "Statewide teamwork",
      govPill2: "Low conflict",
      stats: [
        { label: "Core Principle", value: "Shared Power" },
        { label: "Culture", value: "Respectful • Mature" },
        { label: "Primary Language", value: "English (International Welcome)" },
      ],
      commsTitle: "Communication Standard",
      commsDesc: "Discord is our command center: guides, rally sheets, SvS plans, and rapid coordination.",
    },
    nap: {
      kicker: "NAP Protocol",
      title: "Fair Play & Shared Power",
      desc:
        "Our state is united under a stable NAP. We don’t waste resources fighting each other—we grow, rotate, and strengthen together.",
      rulesTitle: "NAP Rules",
      rules: [
        "No city hits or resource harassment within NAP alliances.",
        "Castle/fortress and major objective rotations are scheduled and transparent.",
        "Disputes go through leadership mediation—no public flame wars.",
        "Zero-tolerance for toxicity, personal attacks, or sabotage.",
      ],
      whyTitle: "Why It’s Safe (and Profitable)",
      why: [
        "Stable farming and growth: less loss, faster upgrades.",
        "Predictable rotations: fair access to power structures.",
        "Clean coordination: faster response in SvS and events.",
        "Better retention: drama-free communities last longer.",
      ],
      alliesTitle: "Our Valued Allies",
      sharedTitle: "Shared Power",
      sharedDesc: "Rotations and distribution keep top alliances strong without internal rivalries.",
    },
    reasons: {
      kicker: "Why Join",
      title: "What We Offer",
      items: [
        { title: "Stable Growth", desc: "Build power without internal wars draining your resources." },
        { title: "Clean Leadership", desc: "Clear rules, rotations, and consistent enforcement." },
        { title: "SvS Ready", desc: "We plan, coordinate, and show up disciplined for every phase." },
        { title: "International Friendly", desc: "English primary, global players welcome and supported." },
        { title: "Drama-Free Culture", desc: "We keep comms respectful and focused on winning." },
        { title: "Event Optimized", desc: "Structured times, shared sheets, and rally standards." },
      ],
    },
    alliances: {
      kicker: "Alliances",
      title: "Organized Teams. Clear Identity.",
      subtitle: "Pick a lane: competitive, balanced, or growth-focused—each with clear expectations.",
      cards: [
        {
          tag: "Competitive",
          name: "KOR",
          motto: "Discipline. Execution. Victory.",
          languages: "Korean + English",
          scheduleTitle: "Activity Windows",
          schedule: [{ label: "Main Push", time: "UTC 13:00–19:00" }],
          coordsTitle: "Region",
          coords: "Core Zone",
          reqTitle: "Ideal Members",
          requirements: ["FC4+", "Daily activity", "Discord required", "Team-first mindset"],
          description: "For active players who want strict coordination and strong results in every major event.",
        },
        {
  tag: "Core",
  name: "ONE",
  motto: "Forging Victory, Together.",
  languages: "English",
  scheduleTitle: "Event Schedule (UTC)",
  note: "Yes, we have BT3",
  coordsTitle: "Coordinates",
  coords: "X:589  Y:461",
  reqTitle: "Ideal Members",
  requirements: ["FC4+", "Daily activity", "Discord required", "Team-first mindset"],
  description:
    "Strategists and active warriors committed to mutual growth and dominance—strategy, teamwork, and a mature environment."
}
   
        {
          tag: "Balanced",
          name: "AFK",
          motto: "Steady growth, steady wins.",
          languages: "English",
          scheduleTitle: "Activity Windows",
          schedule: [{ label: "Key Events", time: "UTC 14:00–19:00" }],
          coordsTitle: "Region",
          coords: "Support Zone",
          reqTitle: "Ideal Members",
          requirements: ["FC3+", "Active in events", "Discord recommended", "Mature & respectful"],
          description: "A strong home for consistent players who want structure without hardcore intensity.",
        },
      ],
    },
    apply: {
      kicker: "Transfer",
      title: "Ready to Join a Team of Winners?",
      desc:
        "Apply below and our leadership will reach out with next steps. We prioritize mature, reliable players who want long-term stability.",
      formTitle: "Application Form",
      fields: {
        name: "In-Game Name",
        id: "Player ID",
        furnace: "Furnace Level",
        language: "Preferred Language",
        timezone: "Timezone",
        notes: "Notes (power, goals, schedule)",
      },
      placeholders: {
        name: "e.g., Raven",
        id: "e.g., 123456789",
        furnace: "e.g., FC4",
        timezone: "e.g., UTC+2",
        notes: "Anything we should know—SvS experience, event times, what you’re looking for…",
      },
      submit: "Submit Application",
      hint: "This form is a UI demo—wire it to your backend / Google Form / Discord bot.",
      reco: "Recommended: FC4+ • Daily active • Discord",
      contactTitle: "Prefer In-Game Contact?",
      contactDesc: "Message our leader for details and screening.",
      contactCta: "Coordinates: X:589  Y:461",
      quickTitle: "Quick Requirements",
      quick: ["Furnace Level: FC4+", "Daily active in major events", "Discord coordination", "Positive & mature"],
      tip: "Tip: Add a Discord invite button here once you’re ready.",
    },
    footer: { line: "STATE 2528 • Golden Empire Protocol", small: "Built for strategy, stability, and clean wins." },
  },

  KOR: {
    nav: { about: "국가 소개", nap: "NAP", reasons: "장점", alliances: "연맹", apply: "지원" },
    hero: {
      title: "STATE 2528",
      subtitle: "안정과 팀워크",
      blurb:
        "안정과 협력으로 단단히 구축된 국가—SvS 완전 제패를 위한 시스템입니다. 함께 성장하고 함께 승리하며, 내부 분쟁은 최소화합니다.",
      badges: ["체계적 운영", "드라마 없는 문화", "이벤트 최적화", "국제 멤버 환영"],
      cta: "이주 지원하기",
      secondary: "구조 살펴보기",
    },
    one: {
      title: "승리를 함께 빚어낸다.",
      desc: "전략가와 활동적인 전사들의 팀. 전략과 팀워크, 성숙한 분위기 속에서 성장과 지배를 추구합니다.",
      scheduleTitle: "이벤트 일정 (UTC)",
      bt3: "BT3 보유",
      contactTitle: "연락 / 좌표",
      contactDesc: "자세한 내용은 인게임에서 리더에게 문의하세요.",
      requireHint: "요약: FC4+ • 일일 활동 • 디스코드 필수",
    },
    about: {
      kicker: "국가",
      title: "승자를 위한 안정적인 제국",
      desc:
        "2528은 내부 갈등보다 성장과 외부 위협 대응을 우선합니다. 팀워크와 조율, 성숙한 플레이가 보상받는 환경입니다.",
      svsTitle: "SvS 운영 방향",
      svsPrep: "준비 단계: 점수 플랜, 자원/역할 배분, 협업 루트 설계.",
      svsBattle: "전투 단계: 규율 있는 집결, 명확한 콜, 목표 집중.",
      govTitle: "운영",
      govDesc: "안정적인 NAP, 투명한 로테이션, 명확한 규정. 내부 혼란 대신 외부 목표에 집중합니다.",
      govPill1: "국가 단위 팀워크",
      govPill2: "낮은 내부 분쟁",
      stats: [
        { label: "핵심 원칙", value: "권한 공유" },
        { label: "문화", value: "존중 • 성숙" },
        { label: "주 언어", value: "영어 (국제 멤버 환영)" },
      ],
      commsTitle: "커뮤니케이션",
      commsDesc: "디스코드는 지휘 센터입니다: 가이드, 집결 시트, SvS 플랜, 빠른 조율.",
    },
    nap: {
      kicker: "국가 규약",
      title: "공정한 NAP • 공동 성장",
      desc:
        "안정적인 NAP 아래 국가가 하나로 움직입니다. 내부 싸움에 자원을 낭비하지 않고 함께 성장합니다.",
      rulesTitle: "NAP 규칙",
      rules: [
        "NAP 연맹 간 도시 공격/자원 괴롭힘 금지.",
        "성/요새 등 주요 목표는 일정 기반으로 투명하게 로테이션.",
        "분쟁은 운영진 중재로 해결—공개 싸움 금지.",
        "독성/인신공격/방해 행위는 무관용.",
      ],
      whyTitle: "왜 안전하고 이득인가요?",
      why: ["안정적인 성장", "예측 가능한 로테이션", "깔끔한 조율", "드라마 없는 커뮤니티"],
      alliesTitle: "우호 연맹",
      sharedTitle: "권한 공유",
      sharedDesc: "로테이션과 분배로 최상위 연맹이 내부 경쟁 없이 강해집니다.",
    },
    reasons: {
      kicker: "장점",
      title: "우리가 제공하는 것",
      items: [
        { title: "안정적인 성장", desc: "내전으로 자원을 낭비하지 않습니다." },
        { title: "명확한 운영", desc: "규칙과 로테이션, 집행이 투명합니다." },
        { title: "SvS 준비", desc: "매 фазе 계획과 조율로 강하게 참여합니다." },
        { title: "국제 멤버 환영", desc: "영어 중심, 글로벌 플레이어 지원." },
        { title: "드라마 최소", desc: "존중 기반 커뮤니케이션." },
        { title: "이벤트 최적화", desc: "구조화된 시간/기준/집결 운영." },
      ],
    },
    alliances: {
      kicker: "연맹",
      title: "정돈된 팀 • 명확한 정체성",
      subtitle: "경쟁/밸런스/성장형 등 역할이 분명합니다.",
      cards: [
        {
          tag: "경쟁",
          name: "KOR",
          motto: "규율, 실행, 승리.",
          languages: "한국어 + 영어",
          scheduleTitle: "활동 시간",
          schedule: [{ label: "메인", time: "UTC 13:00–19:00" }],
          coordsTitle: "지역",
          coords: "핵심 구역",
          reqTitle: "추천 대상",
          requirements: ["FC4+", "일일 활동", "디스코드 필수", "팀 우선"],
          description: "강한 조율로 주요 이벤트에서 성과를 내고 싶은 액티브 유저를 위한 팀입니다.",
        },
         {
  tag: "핵심",
  name: "ONE",
  motto: "승리를 함께 빚어낸다.",
  languages: "영어",
  scheduleTitle: "이벤트 일정 (UTC)",
  note: "BT3 보유",
  coordsTitle: "좌표",
  coords: "X:589  Y:461",
  reqTitle: "추천 대상",
  requirements: ["FC4+", "일일 활동", "디스코드 필수", "팀 우선"],
  description:
    "전략가와 활동적인 전사들의 팀. 전략과 팀워크, 성숙한 분위기 속에서 성장과 지배를 추구합니다."
}

        {
          tag: "밸런스",
          name: "AFK",
          motto: "꾸준한 성장, 꾸준한 승리.",
          languages: "영어",
          scheduleTitle: "활동 시간",
          schedule: [{ label: "주요 이벤트", time: "UTC 14:00–19:00" }],
          coordsTitle: "지역",
          coords: "지원 구역",
          reqTitle: "추천 대상",
          requirements: ["FC3+", "이벤트 참여", "디스코드 권장", "성숙/존중"],
          description: "하드코어까진 아니지만 체계적인 환경에서 안정적으로 성장하고 싶은 유저에게 추천합니다.",
        },
      ],
    },
    apply: {
      kicker: "지원",
      title: "승자 팀에 합류할 준비 되셨나요?",
      desc: "아래 지원서를 작성하면 운영진이 다음 단계로 안내드립니다.",
      formTitle: "지원서",
      fields: {
        name: "인게임 닉네임",
        id: "플레이어 ID",
        furnace: "난로 레벨",
        language: "희망 언어",
        timezone: "타임존",
        notes: "메모 (전투력/목표/활동 시간)",
      },
      placeholders: {
        name: "예: Raven",
        id: "예: 123456789",
        furnace: "예: FC4",
        timezone: "예: UTC+9",
        notes: "SvS 경험, 활동 시간, 원하는 스타일 등을 적어주세요…",
      },
      submit: "제출",
      hint: "UI 데모입니다. 백엔드/Google Form/Discord 봇으로 연동하세요.",
      reco: "추천: FC4+ • 일일 활동 • 디스코드",
      contactTitle: "인게임으로 먼저 연락할까요?",
      contactDesc: "리더에게 메시지 후 진행 방법을 안내받으세요.",
      contactCta: "좌표: X:589  Y:461",
      quickTitle: "요구사항",
      quick: ["FC4+ 이상", "주요 이벤트 일일 참여", "디스코드 조율", "긍정적이고 성숙한 태도"],
      tip: "팁: 준비되면 여기 디스코드 초대 버튼을 추가하세요.",
    },
    footer: { line: "STATE 2528 • 골든 엠파이어 프로토콜", small: "전략, 안정, 그리고 깔끔한 승리를 위해." },
  },
};

const state = {
  lang: "EN",
  reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
};

function get(path, langObj) {
  // path: "hero.badges.0"
  const parts = path.split(".");
  let cur = langObj;
  for (const p of parts) {
    if (cur == null) return "";
    cur = Array.isArray(cur) ? cur[Number(p)] : cur[p];
  }
  return cur ?? "";
}

function applyI18n() {
  const dict = COPY[state.lang];

  // text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = get(key, dict);
    if (typeof val === "string") el.textContent = val;
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = get(key, dict);
    if (typeof val === "string") el.setAttribute("placeholder", val);
  });

  // update lang label + html lang
  document.getElementById("langLabel").textContent = state.lang;
  document.documentElement.setAttribute("lang", state.lang === "KOR" ? "ko" : "en");
}

function initLangSwitch() {
  const btn = document.getElementById("langBtn");
  btn.addEventListener("click", () => {
    state.lang = state.lang === "EN" ? "KOR" : "EN";
    applyI18n();
  });
}

function initStickyHeader() {
  const bar = document.getElementById("topbar");
  const onScroll = () => {
    bar.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileMenu() {
  const wrap = document.getElementById("menuWrap");
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  if (!wrap || !burger || !mobileNav) return;

  function setOpen(open) {
    wrap.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.textContent = open ? "✕" : "☰";
    // можно оставить hidden для доступности
    mobileNav.hidden = !open;
  }

  // по умолчанию ЗАКРЫТО
  setOpen(false);

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = burger.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  // клики внутри меню не закрывают его сами по себе
  mobileNav.addEventListener("click", (e) => e.stopPropagation());

  // клик вне — закрыть
  document.addEventListener("click", () => setOpen(false));

  // ESC — закрыть
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // клик по пункту — закрыть
  mobileNav.querySelectorAll("[data-close-menu]").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  // при переходе на desktop — закрыть
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setOpen(false);
  });
}


function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      }
    },
    { threshold: 0.18 }
  );
  els.forEach((el) => io.observe(el));
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function initParallax() {
  if (state.reduceMotion) return;

  const layers = [...document.querySelectorAll("[data-parallax]")].map((el) => ({
    el,
    rate: Number(el.getAttribute("data-parallax")) || 0,
  }));

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

function hashToUnit(i) {
  const x = Math.sin(i * 999.123 + 0.12345) * 43758.5453;
  return x - Math.floor(x);
}

function initDust() {
  const host = document.getElementById("dust");
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

function initForm() {
  const form = document.getElementById("applyForm");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    toast.textContent = state.lang === "KOR" ? "제출 완료 (데모)" : "Submitted (demo)";
    setTimeout(() => (toast.textContent = ""), 2400);
    form.reset();
  });
}

function init() {
  applyI18n();
  initLangSwitch();
  initStickyHeader();
  initMobileMenu();
  initReveal();
  initParallax();
  initDust();
  initForm();
}

init();
