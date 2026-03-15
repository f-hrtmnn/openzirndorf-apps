import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AdminPanel } from "./components/admin-panel";
import { FlohmarktApp } from "./components/flohmarkt-app";
import "@openzirndorf/ui/styles.css";
import "./app.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element #root was not found.");

const isAdmin = window.location.hash === "#admin";

createRoot(rootElement).render(
  <StrictMode>
    {isAdmin ? <AdminPanel /> : <FlohmarktApp />}
  </StrictMode>,
);
