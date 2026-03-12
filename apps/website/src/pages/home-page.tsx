import { useMemo } from "react";
import { AboutSection } from "../components/about-section";
import { EventsSection } from "../components/events-section";
import { HomeHeroSection } from "../components/home-hero-section";
import { MascotSection } from "../components/mascot-section";
import { ParticipationSection } from "../components/participation-section";
import { SiteShell } from "../components/site-shell";
import { ToolsSection } from "../components/tools-section";
import termeMarkdown from "../content/termine.md?raw";
import { useRevealOnScroll } from "../hooks/use-reveal-on-scroll";
import { getMascots, parseEvents } from "../lib/content";
import {
  heroPills,
  participationCards,
  pillars,
  socialLinks,
  toolCards,
} from "../site-content";

type HomePageProps = {
  homeHref: string;
};

const mascots = getMascots();

export function HomePage({ homeHref }: HomePageProps) {
  const events = useMemo(() => parseEvents(termeMarkdown), []);

  useRevealOnScroll();

  return (
    <SiteShell homeHref={homeHref}>
      <HomeHeroSection heroPills={heroPills} />
      <AboutSection pillars={pillars} />
      <ToolsSection toolCards={toolCards} />
      <EventsSection events={events} />
      <ParticipationSection
        participationCards={participationCards}
        socialLinks={socialLinks}
      />

      <MascotSection mascots={mascots} />
    </SiteShell>
  );
}
