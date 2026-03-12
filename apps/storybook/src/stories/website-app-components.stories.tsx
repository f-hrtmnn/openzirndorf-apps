import type { Meta, StoryObj } from "@storybook/react";
import { EventsSection } from "../../../website/src/components/events-section";
import { HomeHeroSection } from "../../../website/src/components/home-hero-section";
import { MascotSection } from "../../../website/src/components/mascot-section";
import { ParticipationSection } from "../../../website/src/components/participation-section";
import termeMarkdown from "../../../website/src/content/termine.md?raw";
import { getMascots, parseEvents } from "../../../website/src/lib/content";
import {
  heroPills,
  participationCards,
  socialLinks,
} from "../../../website/src/site-content";

const events = parseEvents(termeMarkdown);
const mascots = getMascots();

const meta = {
  title: "Apps/Website Components",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeroSectionOnly: Story = {
  render: () => <HomeHeroSection heroPills={heroPills} />,
};

export const EventsSectionOnly: Story = {
  render: () => <EventsSection events={events} />,
};

export const MascotSectionOnly: Story = {
  render: () => <MascotSection mascots={mascots} />,
};

export const ParticipationSectionOnly: Story = {
  render: () => (
    <ParticipationSection
      participationCards={participationCards}
      socialLinks={socialLinks}
    />
  ),
};
