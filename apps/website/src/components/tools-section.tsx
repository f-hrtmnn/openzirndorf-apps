import { FeatureCard, SectionHeader } from "@openzirndorf/ui";
import type { ToolCard } from "../site-content";

type ToolsSectionProps = {
  toolCards: readonly ToolCard[];
};

export function ToolsSection({ toolCards }: ToolsSectionProps) {
  return (
    <section id="tools" className="px-5 py-18">
      <div className="mx-auto w-full max-w-(--container)">
        <SectionHeader
          title="Unsere bisherigen Tools"
          description="Beispiele aus der Praxis – open source und frei zugänglich."
          className="mb-8"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {toolCards.map((tool) => (
            <FeatureCard
              key={tool.title}
              href={tool.href}
              icon={<span aria-hidden="true">{tool.icon}</span>}
              label={tool.label}
              title={tool.title}
              description={tool.description}
              rel={tool.rel}
              target={tool.target}
              tone={tool.tone}
              className="[&_a]:h-full"
              data-reveal
            />
          ))}
        </div>
      </div>
    </section>
  );
}
