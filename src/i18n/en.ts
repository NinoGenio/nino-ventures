import type { SiteContent } from './types';

const en: SiteContent = {
  nav: {
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    cta: 'Book a call',
  },
  home: {
    eyebrow: 'AI consultancy · Jakarta',
    titleA: 'We put AI',
    titleEm: 'to work',
    titleB: 'in your business.',
    lede:
      'Nino Genio works beside your team to find the problems worth solving — then designs, builds, and runs the systems that solve them. Senior people, honest advice, and technology that has to earn its place in your business.',
    ctaPrimary: 'Book a discovery call',
    ctaSecondary: 'See our work',
    proof: [
      '13+ years building software & companies',
      'Serving big systems with 100K+ requests per second',
      'Engineering leadership at Indonesia\u2019s largest e-commerce scale',
      'Founder-led — you talk to the builder',
    ],
    stepsLabel: 'How we work',
    steps: [
      {
        n: '01',
        title: 'Problem Discovery',
        text:
          'We start with your problem, not the technology. Together we dig into how your business runs, where it hurts, and what success actually looks like — so we build the right thing, not just the fashionable one.',
      },
      {
        n: '02',
        title: 'Implementation & Launch',
        text:
          'Designed, built, and shipped by a small senior team — in weeks, not quarters, and ready for real users from day one.',
      },
      {
        n: '03',
        title: 'Monitoring & Review',
        text:
          'Launch is the midpoint. We stay in your work cycle: watching, tuning, and finding the next thing worth improving.',
      },
    ],
    services: {
      eyebrow: 'Services',
      title: 'Two practices, one standard: production.',
      link: 'More on services',
    },
    work: {
      eyebrow: 'Work',
      title: 'Proof over promises.',
      link: 'All work',
    },
    about: {
      eyebrow: 'About',
      title: 'Big-company discipline. Personal service.',
      text:
        'Every client is served personally by senior engineers — the people you talk to are the people who build. No hand-offs, no telephone game: a partner who understands Indonesian business and stays long after launch.',
      link: 'About us',
    },
    band: {
      title: 'Let\u2019s find your first AI win.',
      text: 'A 30-minute call is enough to map where AI can move your numbers.',
      ctaPrimary: 'Book a discovery call',
      ctaWhatsapp: 'Chat on WhatsApp',
    },
  },
  services: {
    eyebrow: 'Services',
    title: 'From first AI roadmap to systems that run your business.',
    lede:
      'We keep a deliberately narrow focus: AI strategy on one side, and the unglamorous systems work — websites, ecommerce, ERP — that turns strategy into operations on the other.',
    pillars: [
      {
        n: '01',
        title: 'AI Strategy & Consulting',
        text:
          'For teams that know AI matters but need help deciding where, how, and with what. We work alongside your team to find the highest-leverage opportunities and turn them into buildable plans.',
        items: [
          'AI opportunity audit — where AI actually pays off in your business',
          'Use-case discovery and prioritization',
          'Build-vs-buy and model selection',
          'Roadmap, pilot scoping, and success metrics',
          'Data and team readiness assessment',
        ],
      },
      {
        n: '02',
        title: 'Websites, Ecommerce & ERP',
        text:
          'The delivery practice. Marketing sites, storefronts, and ERP integration — including the AI-powered workflows that connect them. Built to run in production, not to demo well.',
        items: [
          'Marketing sites and ecommerce builds',
          'ERP integration and process automation',
          'Back-office workflow automation, AI-assisted',
          'Long-term delivery partnership',
        ],
      },
    ],
    engagement: {
      eyebrow: 'How we work',
      title: 'An engagement in three moves.',
      side: 'Most of the value is created before we write a single line of code.',
      steps: [
        {
          n: '01',
          title: 'Problem Discovery',
          text:
            'Most teams don\u2019t yet know exactly what they need — sometimes they just want the hype. We begin by collaborating deeply with you: investigating, discussing, and pressure-testing until the problem statement and requirements truly fit your needs. We focus on the problem, never innovation for its own sake — because the big goals live behind the right problem.',
        },
        {
          n: '02',
          title: 'Implementation & Launch',
          text:
            'With the problem pinned down, we design, build, and launch — scoped honestly, shipped fast, and integrated into the systems you already run.',
        },
        {
          n: '03',
          title: 'Monitoring & Review',
          text:
            'We don\u2019t stop at launch. Our service continues inside your work cycle: monitoring results, reviewing with your team, and finding what to improve next — because the first iteration is rarely the last word.',
        },
      ],
    },
  },
  work: {
    eyebrow: 'Work',
    title: 'Built in two directions: client engagements, and the products they inspire.',
    lede:
      'HaiNaya is the flagship. The labs are what\u2019s next. Both started the same way — as a client problem worth solving twice.',
    flagship: {
      label: 'Product · Live',
      name: 'HaiNaya',
      tagline: 'AI customer service on WhatsApp, for Indonesian businesses.',
      text:
        'HaiNaya answers customer inquiries 24/7, qualifies leads, and hands off to humans gracefully. Born from real client work with wedding vendors and service businesses, it is now a multi-tenant SaaS integrated with Meta\u2019s WhatsApp Business API.',
      features: [
        'Automated WhatsApp responses, 24/7',
        'AI lead qualification',
        'Graceful human handoff',
        'Multi-tenant SaaS',
        'Built on Meta WABA',
      ],
      cta: 'Visit hainaya.id',
    },
    chat: {
      title: 'Naya — AI Customer Service',
      status: 'Online',
      bubbles: [
        { from: 'agent', text: 'Hi! I\u2019m Naya. How can I help you today?' },
        { from: 'user', text: 'I\u2019m looking for a wedding photography package.' },
        { from: 'agent', text: 'Happy to help! What\u2019s your wedding date — and is the venue set?' },
      ],
      chip: 'Lead qualified — score 92/100',
    },
    labs: {
      eyebrow: 'Labs',
      title: 'Experiments we grow in public.',
      intro:
        'Product candidates we develop between engagements. Some graduate; some teach us what not to build.',
      items: [
        {
          name: 'web-builder',
          status: 'Exploring',
          text: 'A website builder for Indonesian small businesses, including digital-menu tooling for restaurants and caf\u00e9s.',
        },
        {
          name: 'FamilyOS',
          status: 'Concept',
          text: 'A family operating system — shared memory and coordination for the people who matter most.',
        },
      ],
    },
    note: {
      title: 'Case studies, on request.',
      text:
        'We keep client engagements confidential until they can be shared. Ask us directly and we\u2019ll tell you what we can.',
    },
  },
  about: {
    eyebrow: 'About',
    title: 'A founder-led consultancy, built in Jakarta.',
    p1:
      'PT Nino Genio Indonesia is an AI consultancy serving clients in Indonesia and across Southeast Asia. We consult, integrate, and deploy AI into real businesses — customer service, ERP, websites, ecommerce — and we stay, monitoring and improving long after launch.',
    p2:
      'The company was founded in 2026 by Gentra Aditya Putra Ruswanda on a simple observation: the gap between AI\u2019s promise and its presence in production is not a model problem — it is an engineering and judgment problem. That gap is where we work.',
    credibility: {
      eyebrow: 'Why clients trust us',
      title: 'Battle-tested at national scale.',
      items: [
        {
          n: '01',
          title: 'Well over a decade of building',
          text: 'Since 2012 our founder has been building software and companies — from early mobile apps to national-scale systems. Long enough to know what lasts.',
        },
        {
          n: '02',
          title: 'Indonesia\u2019s largest e-commerce',
          text: 'Years of engineering leadership inside one of Indonesia\u2019s largest e-commerce platforms — building systems that stayed up through the country\u2019s biggest shopping days.',
        },
        {
          n: '03',
          title: 'Hundreds of thousands of RPS',
          text: 'Designed and operated systems for a global product organization serving multiple teams at hundreds of thousands of requests per second — the kind of load that forgives nothing.',
        },
        {
          n: '04',
          title: 'We\u2019ve sat in your seat',
          text: 'Two-time startup founder and active engineering mentor — we understand the founder\u2019s chair, its pressures, and where technology actually helps.',
        },
      ],
    },
    founder: {
      name: 'Gentra Aditya Putra Ruswanda',
      role: 'Founder',
      text: 'Gentra leads every engagement personally — the person you talk to is the person responsible for your systems.',
      link: 'LinkedIn',
    },
    facts: ['Founded 2026', 'Jakarta, Indonesia', 'PT Nino Genio Indonesia'],
    values: [
      {
        n: '01',
        title: 'Problem before technology',
        text: 'We solve your problem — even when the honest answer is less AI than you expected.',
      },
      {
        n: '02',
        title: 'Production over demos',
        text: 'A demo that doesn\u2019t survive contact with users is theatre. We ship systems that run.',
      },
      {
        n: '03',
        title: 'Local roots, regional reach',
        text: 'We know the Indonesian market from the inside, and work across Southeast Asia.',
      },
      {
        n: '04',
        title: 'Service that stays',
        text: 'Launch is the midpoint, not the finish line. We review, tune, and improve — iteration after iteration.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Start a conversation.',
    lede:
      'Whether you have a defined project or a nagging feeling that AI should be doing more for you — both are good starting points.',
    channels: {
      whatsapp: {
        title: 'WhatsApp',
        text: 'Fastest for Indonesian and SEA time zones.',
        action: 'Chat now',
      },
      booking: {
        title: 'Discovery call',
        text: '30 minutes, free, no deck required.',
        action: 'Schedule',
      },
      email: { title: 'Email' },
      phone: { title: 'Phone' },
      office: { title: 'Office' },
      github: { title: 'GitHub' },
    },
    legalLabel: 'Legal entity',
    note: 'We reply within one business day.',
  },
  footer: {
    tagline: 'AI consultancy — Jakarta, Indonesia',
    rights: '\u00a9 2026 PT Nino Genio Indonesia.',
  },
  notFound: {
    title: 'Page not found.',
    text: 'The page you\u2019re looking for doesn\u2019t exist — or it moved.',
    cta: 'Back home',
  },
};

export default en;
