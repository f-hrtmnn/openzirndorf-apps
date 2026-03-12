import { SectionHeader } from "@openzirndorf/ui";
import type { ParsedMascot } from "../lib/content";
import { MascotPanel } from "./mascot-panel";

type MascotSectionProps = {
  mascots: ParsedMascot[];
};

export function MascotSection({ mascots }: MascotSectionProps) {
  return (
    <section id="medien" className="bg-secondary px-5 py-18">
      <div className="mx-auto w-full max-w-(--container)">
        <SectionHeader
          title="Unsere Maskottchen"
          description="Die Figuren, die OpenZirndorf ein Gesicht geben."
          className="mb-8"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mascots.map((mascot) => (
            <MascotPanel key={mascot.name} mascot={mascot} />
          ))}
        </div>
      </div>
    </section>
  );
}
