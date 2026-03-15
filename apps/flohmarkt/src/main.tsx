import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FlohmarktApp } from "./components/flohmarkt-app";
import "@openzirndorf/ui/styles.css";
import "./app.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element #root was not found.");
createRoot(rootElement).render(
  <StrictMode>
    <FlohmarktApp />
  </StrictMode>,
);
