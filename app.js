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
    },

    reasons: {
      kicker: "Why Join",
      title: "What We Offer",
      items: [
        {
          title: "International & Inclusive",
          desc: "Players from all over the world in a comfortable, respectful environment—regardless of culture or time zone.",
        },
        {
          title: "Experienced Leadership",
          desc: "Veteran leaders who manage growth, events, and SvS without chaos or unnecessary pressure.",
        },
        {
          title: "Official State Discord",
          desc: "A unified state Discord for coordination, announcements, events, and transparent communication between alliances.",
        },
        {
          title: "Structured State Management",
          desc: "Clear rules, aligned decisions, and organized cooperation between alliances across the state.",
        },
        {
          title: "SvS-Oriented State",
          desc: "Strong focus on preparation, discipline, and teamwork to achieve consistent SvS results.",
        },
        {
          title: "Drama-Free & Mature Community",
          desc: "Zero tolerance for toxicity, conflicts, or personal attacks. Calm, mature, goal-focused environment.",
        },
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
    },

    reasons: {
      kicker: "장점",
      title: "우리가 제공하는 것",
      items: [
        {
          title: "국제적 · 포용적인 환경",
          desc: "문화와 타임존에 상관없이 전 세계 유저들이 편안하고 존중받는 분위기에서 함께합니다.",
        },
        {
          title: "경험 많은 운영진",
          desc: "혼란이나 불필요한 압박 없이 성장, 이벤트, SvS를 안정적으로 운영하는 베테랑 리더십.",
        },
        {
          title: "공식 국가 디스코드",
          desc: "국가 단위 디스코드에서 공지, 이벤트, 조율을 통합하고 연맹 간 소통을 투명하게 유지합니다.",
        },
        {
          title: "체계적인 국가 운영",
          desc: "명확한 규칙과 일관된 결정, 그리고 연맹 간 조직적인 협업으로 국가가 함께 움직입니다.",
        },
        {
          title: "SvS 중심 국가",
          desc: "준비, 규율, 팀워크에 집중하여 꾸준한 SvS 성과를 만들어냅니다.",
        },
        {
          title: "드라마 없는 성숙한 커뮤니티",
          desc: "독성, 분쟁, 인신공격 무관용. 차분하고 성숙하며 목표 지향적인 환경.",
        },
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
