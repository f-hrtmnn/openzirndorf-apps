import faviconUrl from "@openzirndorf/brand/favicons/favicon.svg";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/home-page";
import { LegalPage } from "./pages/legal-page";

import "@openzirndorf/ui/styles.css";
import "./app.css";

const favicon = document.querySelector<HTMLLinkElement>("#app-favicon");

if (favicon) {
  favicon.href = faviconUrl;
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found.");
}

const page = document.body.dataset.page;

const app =
  page === "impressum" ? (
    <LegalPage homeHref="index.html" title="Impressum">
      <p>
        <strong>OpenZirndorf</strong>
        <br />
        Fabian Hartmann
        <br />
        Erich-Kästner-Weg 33
        <br />
        90513 Zirndorf
      </p>

      <p>
        E-Mail:{" "}
        <a href="mailto:fabian@openzirndorf.de">fabian@openzirndorf.de</a>
      </p>

      <p>entwickelt mit ❤️ in Zirndorf</p>
    </LegalPage>
  ) : page === "datenschutz" ? (
    <LegalPage homeHref="index.html" title="Datenschutz">
      <p>
        Diese Website wird auf GitHub.com bereitgestellt und als statische Seite
        ausgeliefert. Beim Aufruf können durch den Hosting-Anbieter technisch
        notwendige Verbindungsdaten (z.&nbsp;B. IP-Adresse, Zeitstempel,
        angeforderte Ressource) verarbeitet werden.
      </p>

      <p>
        Die Seite selbst setzt keine Cookies und verwendet keine eigene
        serverseitige Verarbeitung von Formularinhalten. Für Details zur
        Verarbeitung durch den Hosting-Anbieter gelten zusätzlich die{" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          rel="noopener noreferrer"
          target="_blank"
        >
          Datenschutzbestimmungen von GitHub
        </a>
        .
      </p>

      <p>
        Bei Fragen zum Datenschutz:{" "}
        <a href="mailto:root@openzirndorf.de">root@openzirndorf.de</a>
      </p>
    </LegalPage>
  ) : (
    <HomePage homeHref="." />
  );

createRoot(rootElement).render(<StrictMode>{app}</StrictMode>);
