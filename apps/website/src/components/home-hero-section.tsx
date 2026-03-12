import { Button } from "@openzirndorf/ui";

type HomeHeroSectionProps = {
  heroPills: readonly string[];
};

export function HomeHeroSection({ heroPills }: HomeHeroSectionProps) {
  return (
    <section className="overflow-hidden bg-[linear-gradient(145deg,var(--green-light)_0%,#fff_55%)] px-5 py-18 md:py-22">
      <div className="mx-auto flex w-full max-w-(--container) flex-col items-center text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(0,154,0,0.25)] bg-brand-green-light px-[0.85rem] py-[0.38rem] text-[0.83rem] font-semibold text-brand-green-dark">
          🌱 Civic Tech aus Zirndorf
        </div>

        <h1 className="mb-5 text-[clamp(2.3rem,5.5vw,3.6rem)] font-black leading-[1.05] tracking-[-0.055em] text-balance text-foreground">
          Digitale Möglichkeiten
          <br />
          <span className="text-primary">für Zirndorf</span>
        </h1>

        <p className="mb-8 max-w-[50ch] text-[1.1rem] leading-[1.7] text-muted-foreground">
          Wir sind eine Gruppe aus Zirndorf, die Dinge einfacher machen will.
          Lokale Politik soll für alle verständlich sein – nicht nur für die,
          die sich schon auskennen. OpenZirndorf hilft dabei mit digitalen
          Mitteln, die jeder nutzen kann.
        </p>

        <div className="mb-7 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#mitmachen">Jetzt mitmachen</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#tools">Unsere Tools</a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {heroPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-[0.82rem] text-muted-foreground"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
