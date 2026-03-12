import { PillarCard, SectionHeader } from "@openzirndorf/ui";
import type { Pillar } from "../site-content";

type AboutSectionProps = {
  pillars: readonly Pillar[];
};

export function AboutSection({ pillars }: AboutSectionProps) {
  return (
    <section id="was-wir-sind" className="bg-secondary px-5 py-18">
      <div className="mx-auto w-full max-w-(--container)">
        <SectionHeader
          align="center"
          title="Was ist OpenZirndorf?"
          description="Ein kurzer Überblick – für alle, die uns noch nicht kennen."
          className="mb-8"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              className="p-7"
              data-reveal
            />
          ))}
        </div>
      </div>
    </section>
  );
}
