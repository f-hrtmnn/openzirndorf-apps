import { SiteFooter, SiteHeader } from "@openzirndorf/ui";
import type { ReactNode } from "react";

import {
  buildFooterColumns,
  buildHeaderItems,
  buildPrimaryCta,
} from "../site-content";

type SiteShellProps = {
  children: ReactNode;
  homeHref: string;
};

export function SiteShell({ children, homeHref }: SiteShellProps) {
  const sectionHomeHref = homeHref === "." ? "" : homeHref;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>

      <SiteHeader
        items={buildHeaderItems(sectionHomeHref)}
        cta={buildPrimaryCta(sectionHomeHref)}
        homeHref={homeHref}
        mobileCtaLabel="Jetzt mitmachen"
      />

      <main id="main">{children}</main>

      <SiteFooter
        columns={buildFooterColumns(sectionHomeHref)}
        copyright="© 2026 OpenZirndorf · Entwickelt mit ❤️ in Zirndorf"
        description="Digitale Möglichkeiten für Zirndorf."
      />
    </div>
  );
}
