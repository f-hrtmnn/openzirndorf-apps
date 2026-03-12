import { Card, CardContent, Mascot } from "@openzirndorf/ui";
import type { ParsedMascot } from "../lib/content";

type MascotPanelProps = {
  mascot: ParsedMascot;
};

export function MascotPanel({ mascot }: MascotPanelProps) {
  return (
    <Card className="gap-0 overflow-hidden p-0" data-reveal>
      <div className="flex h-40 items-center justify-center border-b border-border/70 bg-background px-6 py-6">
        <Mascot
          name={mascot.name}
          variant="mark"
          size="sm"
          className="w-full max-w-32"
          decorative={false}
          alt={mascot.title}
          imageClassName="mx-auto max-h-28 w-auto object-contain"
        />
      </div>

      <CardContent className="space-y-2 p-5">
        <h3 className="text-base font-bold tracking-[-0.015em] text-foreground">
          {mascot.title}
        </h3>
        <p className="text-[0.83rem] leading-[1.55] text-muted-foreground">
          {mascot.description}
        </p>
      </CardContent>
    </Card>
  );
}
