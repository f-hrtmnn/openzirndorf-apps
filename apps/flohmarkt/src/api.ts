import type { Stand, StandFormData } from "./types";

const API = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

export async function fetchStands(): Promise<Stand[]> {
  const res = await fetch(`${API}/stands`);
  if (!res.ok) throw new Error("Stände konnten nicht geladen werden");
  return res.json();
}

export async function fetchGeoJSON(): Promise<GeoJSON.FeatureCollection> {
  const res = await fetch(`${API}/stands/geojson`);
  if (!res.ok) throw new Error("GeoJSON konnte nicht geladen werden");
  return res.json();
}

export async function createStand(data: StandFormData): Promise<Stand> {
  const res = await fetch(`${API}/stands`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail ?? "Fehler beim Anmelden");
  }
  return res.json();
}
