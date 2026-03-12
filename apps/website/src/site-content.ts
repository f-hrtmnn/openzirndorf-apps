const EXTERNAL_REL = "noopener noreferrer";
const SLACK_INVITE_URL =
  "https://join.slack.com/t/openzirndorf/shared_invite/zt-3qt1trev5-UZDu3QpOfFfLKcIQTndZ6Q";

export type ToolCard = {
  description: string;
  href: string;
  icon: string;
  label: string;
  rel?: string;
  target?: string;
  title: string;
  tone: "blue" | "orange";
};

export type ParticipationCard = {
  description: string;
  href: string;
  label: string;
  rel?: string;
  target?: string;
  title: string;
  tone: "neutral" | "orange" | "violet";
};

export type SocialLink = {
  href: string;
  label: string;
};

export type Pillar = {
  description: string;
  icon: string;
  title: string;
};

const siteSections = [
  { id: "was-wir-sind", label: "Was wir sind" },
  { id: "tools", label: "Tools" },
  { id: "termine", label: "Termine" },
  { id: "mitmachen", label: "Mitmachen" },
  { id: "medien", label: "Medien" },
] as const;

const heroPills = [
  "🔓 Open Source",
  "📍 Aus Zirndorf",
  "🏛️ Überparteilich",
  "🤝 Für alle offen",
] as const;

const pillars: readonly Pillar[] = [
  {
    description:
      "Ob fertige Tools sinnvoll eingesetzt, neue Anwendungen entwickelt oder Schulungen angeboten – wir schauen, was gebraucht wird, und machen es für alle zugänglich.",
    icon: "💻",
    title: "Wir machen digitales nutzbar",
  },
  {
    description:
      "Was wir tun, kann jeder nachvollziehen. Unsere Projekte, Ergebnisse und Entscheidungen sind öffentlich einsehbar – verständlich für alle, nicht nur für Technikbegeisterte.",
    icon: "🔍",
    title: "Wir arbeiten offen",
  },
  {
    description:
      "Wir kommen aus Zirndorf, kennen die lokale Politik und entwickeln Lösungen, die konkret zu unserer Stadt passen.",
    icon: "🏡",
    title: "Wir sind lokal verwurzelt",
  },
] as const;

const toolCards: ToolCard[] = [
  {
    description:
      "KI-gestützte Analyse zur Kommunalwahl 2026. Fragenkatalog, Methodik und alle Ergebnisse sind vollständig veröffentlicht.",
    href: "https://wahl2026.openzirndorf.de/",
    icon: "📊",
    label: "KI-Analyse",
    rel: EXTERNAL_REL,
    target: "_blank",
    title: "Wahlanalyse Zirndorf 2026",
    tone: "blue" as const,
  },
  {
    description:
      "Eine offene Plattform, auf der Bürgerinnen und Bürger Ideen für Zirndorf einreichen, diskutieren und gemeinsam weiterentwickeln können.",
    href: "https://ideen.openzirndorf.de/",
    icon: "💡",
    label: "Bürgerbeteiligung",
    rel: EXTERNAL_REL,
    target: "_blank",
    title: "Ideenbörse für Zirndorf",
    tone: "orange" as const,
  },
] as const;

const participationCards: ParticipationCard[] = [
  {
    description:
      "Stelle Fragen, tausche dich mit anderen aus und erfahre als Erstes von neuen Projekten. Kein Programmieren nötig.",
    href: SLACK_INVITE_URL,
    label: "Empfohlen für den Start",
    rel: EXTERNAL_REL,
    target: "_blank",
    title: "Slack beitreten",
    tone: "violet" as const,
  },
  {
    description:
      "Teile deine Ideen für Zirndorf, diskutiere mit anderen und bring sie gemeinsam voran. Keine Anmeldung nötig.",
    href: "https://ideen.openzirndorf.de/",
    label: "Du hast Ideen?",
    rel: EXTERNAL_REL,
    target: "_blank",
    title: "Ideenbörse",
    tone: "orange" as const,
  },
  {
    description:
      "Alle Projekte, Tools und Daten öffentlich zugänglich. Forken, mitwirken, eigene Ideen einbringen.",
    href: "https://github.com/openzirndorf",
    label: "Für Entwickler & Neugierige",
    rel: EXTERNAL_REL,
    target: "_blank",
    title: "Code auf GitHub",
    tone: "neutral" as const,
  },
] as const;

const socialLinks: SocialLink[] = [
  {
    href: "https://instagram.com/openzirndorf",
    label: "Instagram",
  },
  {
    href: "https://facebook.com/openzirndorf",
    label: "Facebook",
  },
] as const;

function withSectionHref(homeHref: string, sectionId: string) {
  return `${homeHref ? `${homeHref}` : ""}#${sectionId}`;
}

export function buildHeaderItems(homeHref: string) {
  return siteSections.map((section) => ({
    href: withSectionHref(homeHref, section.id),
    label: section.label,
  }));
}

export function buildPrimaryCta(homeHref: string) {
  return {
    href: withSectionHref(homeHref, "mitmachen"),
    label: "Mitmachen",
  };
}

export function buildFooterColumns(_homeHref: string) {
  return [
    {
      title: "Tools",
      links: [
        {
          href: "https://wahl2026.openzirndorf.de/",
          label: "Wahlanalyse 2026",
          rel: EXTERNAL_REL,
          target: "_blank",
        },
        {
          href: "https://ideen.openzirndorf.de/",
          label: "Ideenbörse",
          rel: EXTERNAL_REL,
          target: "_blank",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          href: SLACK_INVITE_URL,
          label: "Slack",
          rel: EXTERNAL_REL,
          target: "_blank",
        },
        {
          href: "https://github.com/openzirndorf",
          label: "GitHub",
          rel: EXTERNAL_REL,
          target: "_blank",
        },
        {
          href: "https://instagram.com/openzirndorf",
          label: "Instagram",
          rel: EXTERNAL_REL,
          target: "_blank",
        },
      ],
    },
    {
      title: "Rechtliches",
      links: [
        {
          href: "impressum.html",
          label: "Impressum",
        },
        {
          href: "datenschutz.html",
          label: "Datenschutz",
        },
      ],
    },
  ];
}

export { heroPills, participationCards, pillars, socialLinks, toolCards };
