import {
  ParticipationCard,
  SectionHeader,
  SupportBanner,
} from "@openzirndorf/ui";
import { CircleAlert } from "lucide-react";
import type {
  ParticipationCard as ParticipationCardItem,
  SocialLink,
} from "../site-content";

function SlackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-6"
    >
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-6"
    >
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="size-5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function ParticipationIcon({ title }: { title: string }) {
  if (title === "Slack beitreten") {
    return <SlackIcon />;
  }

  if (title === "Code auf GitHub") {
    return <GithubIcon />;
  }

  return <CircleAlert className="size-6" />;
}

function SocialIcon({ label }: { label: string }) {
  return label === "Instagram" ? <InstagramIcon /> : <FacebookIcon />;
}

type ParticipationSectionProps = {
  participationCards: readonly ParticipationCardItem[];
  socialLinks: readonly SocialLink[];
};

export function ParticipationSection({
  participationCards,
  socialLinks,
}: ParticipationSectionProps) {
  return (
    <section id="mitmachen" className="px-5 py-18">
      <div className="mx-auto w-full max-w-(--container)">
        <SectionHeader
          align="center"
          title="Einstieg leicht gemacht"
          description="Kein technisches Vorwissen nötig. Such dir einfach den Kanal, der zu dir passt."
          className="mb-8"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {participationCards.map((card) => (
            <ParticipationCard
              key={card.title}
              href={card.href}
              icon={<ParticipationIcon title={card.title} />}
              label={card.label}
              title={card.title}
              description={card.description}
              rel={card.rel}
              target={card.target}
              tone={card.tone}
              data-reveal
            />
          ))}
        </div>

        <SupportBanner
          title="Du willst uns unterstützen?"
          description="Jede Hilfe zählt – ob Ideen, Kontakte, Fähigkeiten oder einfach ein gutes Wort weiter."
          actionLabel="Melde dich bei uns"
          actionHref="mailto:fabian@openzirndorf.de"
          className="mt-6"
          data-reveal
        />

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.92rem] font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              <SocialIcon label={link.label} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
