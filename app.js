/* STATE 2528 — app.js
   - i18n EN/KOR (real switching)
   - Parallax background layers (scroll-based)
   - Golden dust (light, cinematic)
   - Reveal on scroll (IntersectionObserver)
   - Sticky header shadow
   - Mobile menu (click only)
*/
console.log("✅ app.js loaded");

const COPY = {
  EN: {
    nav: { about: "State", nap: "NAP", reasons: "Why Us", alliances: "Alliances", apply: "Apply" },

    hero: {
      title: "STATE 2528",
      subtitle: "Stability & Teamwork",
      blurb:
        "A state forged in stability and teamwork—engineered for total SvS domination. We grow together, win together, and keep internal drama at zero.",
      badges: ["Organized Leadership", "Drama-Free Culture", "Event Optimized", "International Friendly"],
    },

    about: {
      kicker: "About the State",
      title: "A Stable, United State",
      shortIntro:
        "State 2528 is a stable, multinational state with an active NAP6 and strong inter-alliance coordination. We focus on strategy, unity, and respectful play to succeed in all global events.",
      shortApproach:
        "Our approach emphasizes joint preparation, clear roles, and consistent execution across the state.",
      points: ["Shared Strength", "Experienced Leadership", "Alliance Coordination", "Friendly Environment", "Multinational Community"],
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
      subtitle: "Each alliance is a high-discipline unit with consistent schedules and shared standards.",
      cards: [
        {
          tag: "Main Alliance",
          name: "[ONE]",
          motto: "Forging Victory, Together.",
          languages: "English (International Members Welcome)",
          scheduleTitle: "Event Schedule (UTC)",
          note: "Yes, we have BT3",
          coordsTitle: "Coordinates",
          coords: "X:589  Y:461",
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
          note: "",
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
          schedule: [{ label: "Key Events", time: "UTC 14:00–19:00" }],
          note: "",
          coordsTitle: "Region",
          coords: "Support Zone",
          reqTitle: "Ideal Members",
          requirements: ["FC3+", "Active in events", "Discord recommended"],
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
    },

    about: {
      kicker: "국가 소개",
      title: "안정적이고 단합된 국가",
      shortIntro:
        "State 2528은 안정적인 다국적 국가이며, 활성화된 NAP6와 강력한 연맹 간 협업 체계를 갖추고 있습니다. 우리는 전략, 단합, 그리고 존중 문화를 바탕으로 모든 글로벌 이벤트에서 성과를 냅니다.",
      shortApproach:
        "국가 전체가 함께 준비하고, 역할을 명확히 하며, 일관된 실행으로 결과를 만들어냅니다.",
      points: ["공동의 힘", "경험 있는 운영진", "연맹 간 조율", "친화적 환경", "다국적 커뮤니티"],
    },

   nap: {
  kicker: "NAP 규약",
  title: "공정한 운영 · 공동 권한",
  desc:
    "State 2528은 연맹 간 협력과 상호 존중을 기반으로 한 안정적인 NAP 체계를 운영합니다. 내부 전투에 자원을 낭비하지 않고 함께 성장합니다.",

  rulesTitle: "NAP 규칙",
  rules: [
    "NAP 연맹 간 도시 공격 및 정찰 금지.",
    "성 및 요새 로테이션은 일정 기반으로 투명하게 진행.",
    "분쟁은 운영진이 중재하며 공개 충돌은 금지.",
    "독성 행동, 방해, 괴롭힘은 무관용 원칙.",
  ],

  rotationTitle: "성 · 요새 로테이션",
  rotationDesc:
    "Sunfire Castle은 정해진 일정에 따라 공정하게 로테이션되며, 장기적인 국가 안정과 리더십 균형을 보장합니다.",
  fortsDesc:
    "요새 및 거점은 SvS 준비 단계 기여도를 기준으로 공정하게 분배됩니다.",
     
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
      kicker: "동맹",
      title: "정돈된 팀. 명확한 역할.",
      subtitle: "각 동맹은 일정이 명확하고 공통 기준을 공유하는 고규율 유닛입니다.",
      cards: [
        {
          tag: "메인 동맹",
          name: "[ONE]",
          motto: "함께 승리를 만든다.",
          languages: "영어 (국제 멤버 환영)",
          scheduleTitle: "이벤트 일정(UTC)",
          note: "BT3 보유",
          coordsTitle: "좌표",
          coords: "X:589  Y:461",
          reqTitle: "모집 대상",
          requirements: ["난로 레벨: FC4+", "매일 활동: 동맹/주 이벤트 참여", "소통: 동맹 디스코드 필참", "태도: 긍정적 · 존중 · 성숙"],
          description:
            "[ONE]은 전략가와 활동적인 전사들이 함께 성장과 지배를 추구하는 동맹입니다. 전략, 팀워크, 그리고 차분한 분위기.",
        },
        {
          tag: "파트너 동맹",
          name: "KOR",
          motto: "정확함 · 규율 · 추진력",
          languages: "한국어 • 영어",
          scheduleTitle: "활동 시간대",
          schedule: [
            { label: "프라임", time: "11:00–15:00" },
            { label: "세컨드", time: "18:00–22:00" },
          ],
          note: "",
          coordsTitle: "지역",
          coords: "중앙 구역(로테이션에 따라 변동)",
          reqTitle: "이상적인 멤버",
          requirements: ["꾸준한 참여", "팀 우선 마인드", "집결 시 빠른 소통"],
          description: "주 기준에 맞춰 움직이는 조직적인 유닛. 주요 목표에서 높은 참여율과 빠른 실행.",
        },
        {
          tag: "성장 동맹",
          name: "AFK",
          motto: "빠르게 성장, 강하게 참여.",
          languages: "영어",
          scheduleTitle: "활동 시간대",
          schedule: [{ label: "핵심 이벤트", time: "UTC 14:00–19:00" }],
          note: "",
          coordsTitle: "지역",
          coords: "서포트 구역",
          reqTitle: "이상적인 멤버",
          requirements: ["FC3+", "이벤트 적극 참여", "디스코드 권장"],
          description: "하드코어 강요 없이도 구조적으로 성장하고 싶은 꾸준한 플레이어에게 적합.",
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

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = get(key, dict);
    if (typeof val === "string") el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = get(key, dict);
    if (typeof val === "string") el.setAttribute("placeholder", val);
  });

  const label = document.getElementById("langLabel");
  if (label) label.textContent = state.lang;
  document.documentElement.setAttribute("lang", state.lang === "KOR" ? "ko" : "en");
}

function initLangSwitch() {
  const btn = document.getElementById("langBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    state.lang = state.lang === "EN" ? "KOR" : "EN";
    applyI18n();
  });
}

function initStickyHeader() {
  const bar = document.getElementById("topbar");
  if (!bar) return;
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
    mobileNav.hidden = !open;
  }

  // default closed
  setOpen(false);

  burger.addEventListener("click", (e) => {
    e.preventDefault();
    const open = burger.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  // Close when clicking/tapping outside
  document.addEventListener(
    "pointerdown",
    (e) => {
      if (!wrap.contains(e.target)) setOpen(false);
    },
    { passive: true }
  );

  // ESC closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // Clicking a link closes
  mobileNav.querySelectorAll("[data-close-menu]").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  // When switching to desktop layout, close
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
  if (!host) return;
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
  if (!form || !toast) return;

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

window.addEventListener("DOMContentLoaded", init);
