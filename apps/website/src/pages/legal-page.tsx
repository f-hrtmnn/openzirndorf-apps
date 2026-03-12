import type { ReactNode } from "react";

import { SiteShell } from "../components/site-shell";

type LegalPageProps = {
  children: ReactNode;
  homeHref: string;
  title: string;
};

export function LegalPage({ children, homeHref, title }: LegalPageProps) {
  return (
    <SiteShell homeHref={homeHref}>
      <section className="px-5 py-12 md:py-16">
        <div className="mx-auto w-full max-w-(--container)">
          <div className="max-w-[680px]">
            <a
              href={homeHref}
              className="mb-8 inline-block text-[0.88rem] text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              ← Zurück zur Startseite
            </a>

            <h1 className="mb-8 text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-[-0.045em] text-foreground">
              {title}
            </h1>

            <div className="space-y-5 text-[0.95rem] leading-7 text-muted-foreground [&_a]:text-primary [&_a]:transition-colors [&_a:hover]:underline [&_p]:m-0">
              {children}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
