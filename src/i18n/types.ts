export type Locale = 'en' | 'id';

export interface Step {
  n: string;
  title: string;
  text: string;
}

export interface Pillar {
  n: string;
  title: string;
  text: string;
  items: string[];
}

export interface LabItem {
  name: string;
  status: string;
  text: string;
}

export interface ChatBubble {
  from: 'agent' | 'user';
  text: string;
}

export interface ChatCardContent {
  title: string;
  status: string;
  bubbles: ChatBubble[];
  chip: string;
}

export interface Channel {
  title: string;
  text?: string;
  action?: string;
}

export interface SiteContent {
  nav: {
    services: string;
    work: string;
    about: string;
    contact: string;
    cta: string;
  };
  home: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    proof: string[];
    stepsLabel: string;
    steps: Step[];
    services: {
      eyebrow: string;
      title: string;
      link: string;
    };
    work: {
      eyebrow: string;
      title: string;
      link: string;
    };
    about: {
      eyebrow: string;
      title: string;
      text: string;
      link: string;
    };
    band: {
      title: string;
      text: string;
      ctaPrimary: string;
      ctaWhatsapp: string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    lede: string;
    pillars: Pillar[];
    engagement: {
      eyebrow: string;
      title: string;
      side: string;
      steps: Step[];
    };
  };
  work: {
    eyebrow: string;
    title: string;
    lede: string;
    flagship: {
      label: string;
      name: string;
      tagline: string;
      text: string;
      features: string[];
      cta: string;
    };
    chat: ChatCardContent;
    labs: {
      eyebrow: string;
      title: string;
      intro: string;
      items: LabItem[];
    };
    note: {
      title: string;
      text: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    credibility: {
      eyebrow: string;
      title: string;
      items: Step[];
    };
    founder: {
      name: string;
      role: string;
      text: string;
      link: string;
    };
    facts: string[];
    values: Step[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    channels: {
      whatsapp: Channel;
      booking: Channel;
      email: Channel;
      phone: Channel;
      office: Channel;
      github: Channel;
    };
    legalLabel: string;
    note: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
}
