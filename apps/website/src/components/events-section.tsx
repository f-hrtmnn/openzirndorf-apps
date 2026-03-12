import {
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  SectionHeader,
} from "@openzirndorf/ui";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { ParsedEvent } from "../lib/content";

type EventsSectionProps = {
  events: ParsedEvent[];
};

function EventRow({
  event,
  onOpen,
}: {
  event: ParsedEvent;
  onOpen: () => void;
}) {
  return (
    <Card
      asChild
      className="grid items-center gap-5 p-5 transition-[transform,box-shadow,border-color,background-color] duration-200 ease-[var(--transition-base)] hover:translate-x-[3px] hover:border-primary hover:bg-brand-green-light md:grid-cols-[80px_1fr_auto]"
    >
      <button
        type="button"
        onClick={onOpen}
        className="cursor-pointer text-left"
        aria-haspopup="dialog"
        data-reveal
      >
        <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-[var(--radius-sm)] bg-brand-green-light px-2 text-center">
          <span className="text-[1.2rem] font-extrabold leading-none text-brand-green-dark">
            {event.dayWithMonth}
          </span>
          <span className="mt-1 text-[0.7rem] font-semibold text-brand-green">
            {event.weekdayLabel}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 text-base font-bold tracking-[-0.015em] text-foreground">
            {event.title}
          </h3>
          <p className="text-[0.87rem] text-muted-foreground">
            {[event.location, event.time].filter(Boolean).join(" · ")}
          </p>
        </div>
        <span className="hidden shrink-0 items-center gap-1 self-center text-[0.8rem] font-semibold uppercase tracking-[0.04em] text-primary md:inline-flex">
          Details
          <ArrowRight className="size-4" />
        </span>
      </button>
    </Card>
  );
}

function EventDialog({
  event,
  onClose,
}: {
  event: ParsedEvent | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={event !== null} onOpenChange={(open) => !open && onClose()}>
      {event ? (
        <DialogContent className="gap-0 px-8 pt-10 pb-8 sm:max-w-[520px]">
          <div className="mb-3 flex flex-col items-start gap-0.5">
            <span className="text-[2.25rem] font-black leading-none tracking-[-0.05em] text-primary">
              {event.dayWithMonth}
            </span>
            <span className="text-[0.85rem] font-semibold text-muted-foreground">
              {event.weekdayLabel}
            </span>
          </div>

          <DialogTitle className="mb-2">{event.title}</DialogTitle>

          <p className="mb-5 text-[0.9rem] text-muted-foreground">
            {[event.location, event.time].filter(Boolean).join(" · ")}
          </p>

          {event.text ? (
            <DialogDescription className="mb-7 text-[0.95rem] leading-7 text-foreground">
              {event.text}
            </DialogDescription>
          ) : null}

          {event.link ? (
            <div className="flex gap-3">
              <Button asChild>
                <a href={event.link} rel="noopener noreferrer" target="_blank">
                  Mehr Infos →
                </a>
              </Button>
            </div>
          ) : null}
        </DialogContent>
      ) : null}
    </Dialog>
  );
}

export function EventsSection({ events }: EventsSectionProps) {
  const [selectedEvent, setSelectedEvent] = useState<ParsedEvent | null>(null);

  return (
    <>
      <section id="termine" className="bg-secondary px-5 py-18">
        <div className="mx-auto w-full max-w-(--container)">
          <SectionHeader
            title="Nächste Termine"
            description="Lerne uns unverbindlich kennen – alle sind willkommen."
            className="mb-8"
          />

          {events.length > 0 ? (
            <div className="grid gap-4">
              {events.map((event) => (
                <EventRow
                  key={`${event.title}-${event.dayWithMonth}`}
                  event={event}
                  onOpen={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          ) : (
            <p className="text-[0.95rem] text-muted-foreground">
              Aktuell sind keine Termine geplant.
            </p>
          )}
        </div>
      </section>

      <EventDialog
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
}
