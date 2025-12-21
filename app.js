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
        { title: "We Dominate in SvS", desc: "We don’t just participate—we win. Coordinated strategies create consistent victories." },
        { title: "Masterful Event Execution", desc: "Foundry, Bear Hunt, Canyon, Crazy Joe—optimized runs to secure maximum rewards." },
        { title: "Supportive & Organized Leadership", desc: "Active R4/R5 team with clear comms, planning docs, and role distribution." },
        { title: "Healthy & Respectful Ecosystem", desc: "F2P, low spenders, and whales are welcome. Activity and teamwork matter most." },
        { title: "Drama-Free Community", desc: "Strict enforcement against toxicity and personal attacks. Mature vibe only." },
        { title: "Fight Club", desc: "A friendly practice environment to test comps, timing, and rally discipline." },
      ],
    },
    alliances: {
      kicker: "Alliances",
      title: "Organized Teams. Clear Identity.",
      subtitle: "Each alliance is a high-discipline unit with consistent schedules and shared standards.",
      cards: [
        {
          tag: "Main Alliance",
          name: "[ONE]",
          motto: "Forging Victory, Together.",
          languages: "English (International Members Welcome)",
          scheduleTitle: "Event Schedule (UTC)",
          schedule: [{ label: "Bear Hunt", time: "02:00 • 13:00 • 18:30", note: "Yes, we have BT3" }],
          coordsTitle: "Coordinates",
          reqTitle: "We Are Looking For",
          requirements: [
            "Furnace Level: FC4+",
            "Daily active: participates in alliance & state events",
            "Communication: must join Alliance Discord",
            "Attitude: positive, respectful, mature",
          ],
          description:
            "[ONE] is a collective of strategists and active warriors committed to mutual growth and dominance. Strategy, teamwork, and a calm environment—so every member reaches full potential.",
        },
        {
          tag: "Partner Alliance",
          name: "KOR",
          motto: "Precision, Discipline, Momentum.",
          languages: "Korean • English",
          scheduleTitle: "Activity Windows",
          schedule: [
            { label: "Prime Time", time: "11:00–15:00" },
            { label: "Secondary", time: "18:00–22:00" },
          ],
          coordsTitle: "Region",
          coords: "Central Zone (varies by rotation)",
          reqTitle: "Ideal Members",
          requirements: ["Consistent participation", "Team-first mindset", "Quick comms during rallies"],
          description: "A coordinated unit aligned with state standards. Strong turnout and fast execution during major objectives.",
        },
        {
          tag: "Growth Alliance",
          name: "AFK",
          motto: "Build Fast. Show Up Strong.",
          languages: "English",
          scheduleTitle: "Activity Windows",
          schedule: [
            { label: "Daily Tasks", time: "Flexible" },
            { label: "Key Events", time: "State-wide announcements" },
          ],
          coordsTitle: "Region",
          coords: "Support Zone",
          reqTitle: "Ideal Members",
          requirements: ["New/returning players", "Willing to learn", "Discord optional"],
          description: "A supportive home for consistent builders and future fighters. Learn the state’s standards and level up smoothly.",
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
      whyTitle: "왜 안전하고 이득인가",
      why: [
        "안정적인 성장: 손실 감소, 업그레이드 가속.",
        "예측 가능한 로테이션: 주요 구조물 접근 공정.",
        "정돈된 협업: SvS/이벤트 대응 속도 향상.",
        "장기 유지: 드라마 없는 공동체는 오래 갑니다.",
      ],
      alliesTitle: "주요 우호 연맹",
      sharedTitle: "권한 공유",
      sharedDesc: "로테이션/분배로 상위 연맹의 힘을 유지하며 내부 경쟁을 줄입니다.",
    },
    reasons: {
      kicker: "합류 이유",
      title: "우리가 제공하는 것",
      items: [
        { title: "SvS 승리 중심", desc: "참가에 그치지 않습니다. 국가 단위 전략으로 꾸준히 승리합니다." },
        { title: "이벤트 운영 최적화", desc: "Foundry, Bear Hunt, Canyon, Crazy Joe 등 보상 극대화 운영." },
        { title: "체계적 리더십", desc: "활동적인 R4/R5가 명확한 커뮤니케이션과 역할 배분을 제공합니다." },
        { title: "건강한 생태계", desc: "무과금/소과금/고과금 모두 환영. 핵심은 활동과 팀워크입니다." },
        { title: "드라마 없는 커뮤니티", desc: "독성 및 인신공격에 강력 대응. 성숙한 분위기 유지." },
        { title: "파이트 클럽", desc: "조합/타이밍/집결 규율을 연습하는 친선 테스트 환경." },
      ],
    },
    alliances: {
      kicker: "연맹",
      title: "조직력. 명확한 정체성.",
      subtitle: "각 연맹은 일정과 기준이 분명한 고규율 팀입니다.",
      cards: [
        {
          tag: "메인 연맹",
          name: "[ONE]",
          motto: "승리를 함께 빚어낸다.",
          languages: "영어 (국제 멤버 환영)",
          scheduleTitle: "이벤트 일정 (UTC)",
          schedule: [{ label: "Bear Hunt", time: "02:00 • 13:00 • 18:30", note: "BT3 보유" }],
          coordsTitle: "좌표",
          reqTitle: "모집 기준",
          requirements: ["용광로 레벨: FC4+", "매일 활동 및 주요 이벤트 참여", "소통: 연맹 디스코드 필수", "태도: 긍정 • 존중 • 성숙"],
          description:
            "[ONE]은 전략가와 활동적인 전사들의 팀입니다. 전략과 팀워크, 차분한 분위기 속에서 모두가 최대 잠재력을 발휘합니다.",
        },
        {
          tag: "우호 연맹",
          name: "KOR",
          motto: "정밀 • 규율 • 추진력",
          languages: "한국어 • 영어",
          scheduleTitle: "활동 시간",
          schedule: [
            { label: "프라임", time: "11:00–15:00" },
            { label: "세컨", time: "18:00–22:00" },
          ],
          coordsTitle: "구역",
          coords: "중앙권 (로테이션에 따라 변동)",
          reqTitle: "추천 인원",
          requirements: ["꾸준한 참여", "팀 우선 마인드", "집결 시 빠른 콜"],
          description: "국가 기준에 맞춘 협업 연맹. 주요 목표에서 높은 출석과 빠른 실행이 강점입니다.",
        },
        {
          tag: "성장 연맹",
          name: "AFK",
          motto: "빠르게 성장, 강하게 참여",
          languages: "영어",
          scheduleTitle: "활동",
          schedule: [
            { label: "일일", time: "자유" },
            { label: "핵심 이벤트", time: "국가 공지 기준" },
          ],
          coordsTitle: "구역",
          coords: "지원권",
          reqTitle: "추천 인원",
          requirements: ["복귀/신규", "학습 의지", "디스코드 선택"],
          description: "안정적으로 성장하고 전투에 합류할 준비를 하는 멤버를 위한 공간.",
        },
      ],
    },
    apply: {
      kicker: "이주",
      title: "승자의 팀에 합류할 준비 되셨나요?",
      desc: "지원서를 작성하면 운영진이 안내드립니다. 장기적으로 안정된 국가를 찾는 성숙한 플레이어를 환영합니다.",
      formTitle: "지원서",
      fields: { name: "게임 닉네임", id: "플레이어 ID", furnace: "용광로 레벨", language: "선호 언어", timezone: "시간대", notes: "메모 (전력, 목표, 가능한 시간)" },
      placeholders: { name: "예: Raven", id: "예: 123456789", furnace: "예: FC4", timezone: "예: UTC+2", notes: "SvS 경험, 이벤트 가능 시간, 원하는 분위기 등을 적어주세요…" },
      submit: "지원서 제출",
      hint: "현재는 UI 데모입니다. 백엔드/Google Form/Discord 봇으로 연동하세요.",
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
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  function setOpen(open) {
    burger.setAttribute("aria-expanded", String(open));
    burger.textContent = open ? "✕" : "☰";
    mobileNav.hidden = !open;
  }

  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  mobileNav.querySelectorAll("[data-close-menu]").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

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
  const layers = [...document.querySelectorAll("[data-parallax]")].map((el) => ({
    el,
    rate: Number(el.getAttribute("data-parallax")) || 0,
  }));

  if (layers.length === 0) return;

  // Mouse parallax (tiny amplitude, premium)
  // target range: [-1..1] in both axes
  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  // Keep it subtle
  const MAX_PX = 12; // total max mouse shift on fastest layer
  const SMOOTH = 0.08; // interpolation factor

  function onPointerMove(e) {
    // ignore if reduced motion
    if (state.reduceMotion) return;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const nx = (e.clientX - cx) / cx;
    const ny = (e.clientY - cy) / cy;
    target.x = clamp(nx, -1, 1);
    target.y = clamp(ny, -1, 1);
  }

  // Scroll parallax base
  let scrollY = window.scrollY;

  let rafScroll = 0;
  function onScroll() {
    scrollY = window.scrollY;
    if (rafScroll) return;
    rafScroll = requestAnimationFrame(() => {
      rafScroll = 0;
      // do nothing here; render loop handles final transform
    });
  }

  // Render loop (combines scroll + mouse)
  let raf = 0;
  function render() {
    raf = requestAnimationFrame(render);

    // Smooth mouse values
    mouse.x += (target.x - mouse.x) * SMOOTH;
    mouse.y += (target.y - mouse.y) * SMOOTH;

    for (const l of layers) {
      const scrollOffset = state.reduceMotion ? 0 : clamp(scrollY * l.rate, -160, 320);

      // mouseOffset scales with layer rate (fast layer moves slightly more)
      const mx = state.reduceMotion ? 0 : mouse.x * (MAX_PX * (l.rate / 0.18));
      const my = state.reduceMotion ? 0 : mouse.y * (MAX_PX * (l.rate / 0.18));

      // Combined transform (small mouse on top of scroll)
      l.el.style.transform = `translate3d(${mx.toFixed(2)}px, ${(scrollOffset + my).toFixed(2)}px, 0)`;
    }
  }

  // Start
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });

  // If user leaves the tab, relax mouse parallax back to center
  window.addEventListener("blur", () => {
    target.x = 0;
    target.y = 0;
  });

  // kick
  onScroll();
  if (!raf) render();
}


function hashToUnit(i) {
  const x = Math.sin(i * 999.123 + 0.12345) * 43758.5453;
  return x - Math.floor(x);
}

function initGoldSweep() {
  const sweep = document.getElementById("sweep");
  if (!sweep || state.reduceMotion) return;

  // мягкая рандомизация (12–16 сек)
  function nextDelay() {
    return 12000 + Math.random() * 4000; // 12–16s
  }

  function runOnce() {
    // начальные/конечные позиции (диагональный проход)
    sweep.classList.add("is-on");

    // очень мягкая анимация: лёгкий проход + fade
    sweep.animate(
      [
        { transform: "translate3d(-30%, 20%, 0)", opacity: 0.0 },
        { transform: "translate3d(-10%, 10%, 0)", opacity: 0.22 },
        { transform: "translate3d(10%, 0%, 0)", opacity: 0.28 },
        { transform: "translate3d(30%, -10%, 0)", opacity: 0.18 },
        { transform: "translate3d(55%, -20%, 0)", opacity: 0.0 },
      ],
      {
        duration: 2200, // коротко, но “кинематографично”
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      }
    );

    // выключаем класс чуть позже
    setTimeout(() => sweep.classList.remove("is-on"), 2300);

    // планируем следующий проход
    setTimeout(runOnce, nextDelay());
  }

  // старт через небольшую паузу, чтобы не отвлекать на загрузке
  setTimeout(runOnce, 1800);
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
        { duration: dur * 1000, iterations: Infinity, easing: "ease-in-out" }
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
    // demo only
    toast.textContent = state.lang === "KOR" ? "제출 완료! (데모)" : "Submitted! (demo)";
    setTimeout(() => (toast.textContent = ""), 3200);
    form.reset();
  });
}

function boot() {
  applyI18n();
  initLangSwitch();
  initStickyHeader();
  initMobileMenu();
  initReveal();
  initParallax();
  initDust();
  initGoldSweep(); 
  initForm();
}


document.addEventListener("DOMContentLoaded", boot);
