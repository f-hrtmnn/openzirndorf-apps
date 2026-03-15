import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@openzirndorf/ui";
import { useState } from "react";
import { createStand } from "../api";
import type { StandFormData } from "../types";

interface Props {
  onSuccess: () => void;
}

const EMPTY: StandFormData = {
  name: "",
  adresse: "",
  beschreibung: "",
  email: "",
};

export function StandForm({ onSuccess }: Props) {
  const [form, setForm] = useState<StandFormData>(EMPTY);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!form.name || !form.adresse) {
      setErrorMsg("Name und Adresse sind Pflichtfelder.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      await createStand(form);
      setStatus("success");
      setForm(EMPTY);
      onSuccess();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Unbekannter Fehler");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Card>
        <CardContent className="pt-6">
          <p role="alert" className="text-green-700 font-medium">
            Dein Stand wurde eingereicht und wird bald freigeschaltet.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stand anmelden</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {status === "error" && (
            <p role="alert" className="text-red-600 text-sm">
              {errorMsg}
            </p>
          )}

          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">
              Name *
            </label>
            <input
              id="name"
              className="border border-input rounded-md px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              disabled={status === "loading"}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="adresse" className="text-sm font-medium">
              Adresse *
            </label>
            <input
              id="adresse"
              className="border border-input rounded-md px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              placeholder="z.B. Musterstraße 1, Zirndorf"
              value={form.adresse}
              onChange={(e) =>
                setForm((f) => ({ ...f, adresse: e.target.value }))
              }
              disabled={status === "loading"}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="beschreibung" className="text-sm font-medium">
              Was gibt es zu kaufen?
            </label>
            <textarea
              id="beschreibung"
              className="border border-input rounded-md px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 min-h-[80px] resize-y"
              value={form.beschreibung}
              onChange={(e) =>
                setForm((f) => ({ ...f, beschreibung: e.target.value }))
              }
              disabled={status === "loading"}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              E-Mail (optional, für Rückfragen)
            </label>
            <input
              id="email"
              type="email"
              className="border border-input rounded-md px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              disabled={status === "loading"}
            />
          </div>

          <Button onClick={handleSubmit} disabled={status === "loading"}>
            {status === "loading" ? "Wird eingereicht…" : "Stand anmelden"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
