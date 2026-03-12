import mascotEntries from "../content/maskottchen.json";

const MONTH_NUMBERS = {
  Januar: 1,
  Februar: 2,
  März: 3,
  April: 4,
  Mai: 5,
  Juni: 6,
  Juli: 7,
  August: 8,
  September: 9,
  Oktober: 10,
  November: 11,
  Dezember: 12,
} as const;

const WEEKDAY_LABELS = {
  Mo: "Montag",
  Di: "Dienstag",
  Mi: "Mittwoch",
  Do: "Donnerstag",
  Fr: "Freitag",
  Sa: "Samstag",
  So: "Sonntag",
} as const;

type MascotName =
  | "fynn"
  | "horst"
  | "kreiselix"
  | "nico"
  | "paul"
  | "quirin"
  | "tuxi";

type ParsedEvent = {
  title: string;
  weekdayLabel: string;
  day: string;
  dayWithMonth: string;
  time: string;
  location: string;
  link: string;
  text: string;
};

type ParsedMascot = {
  description: string;
  name: MascotName;
  title: string;
};

export function parseEvents(markdown: string): ParsedEvent[] {
  const blocks = markdown
    .split(/^## /m)
    .filter((block) => block.trim() && !block.trim().startsWith("<!--"));

  return blocks.map((block) => {
    const lines = block
      .trim()
      .split("\n")
      .filter((line) => line.trim() && !line.trim().startsWith("<!--"));

    const title = lines[0]?.trim() ?? "";
    const fields: Record<string, string> = {};

    for (const line of lines.slice(1)) {
      const match = line.match(/^(\w+):\s*(.+)$/);

      if (match) {
        fields[match[1]] = match[2].trim();
      }
    }

    const dateSource = fields.Datum ?? "";
    const weekdayShort = dateSource.match(/^(\w+),/)?.[1] ?? "";
    const numericMatch = dateSource.match(/(\d{1,2})\.(\d{1,2})\./);
    const textMatch = dateSource.match(
      /(\d{1,2})\.\s*([A-Za-z\u00C0-\u00FF]+)/,
    );

    let day = "?";
    let monthNumber: number | null = null;

    if (numericMatch) {
      day = numericMatch[1];
      monthNumber = Number.parseInt(numericMatch[2], 10);
    } else if (textMatch) {
      day = textMatch[1];
      monthNumber =
        MONTH_NUMBERS[textMatch[2] as keyof typeof MONTH_NUMBERS] ?? null;
    }

    return {
      title,
      weekdayLabel:
        WEEKDAY_LABELS[weekdayShort as keyof typeof WEEKDAY_LABELS] ??
        weekdayShort,
      day,
      dayWithMonth: monthNumber ? `${day}.${monthNumber}.` : `${day}.`,
      time: fields.Zeit ?? "",
      location: fields.Ort ?? "",
      link: fields.Link ?? "",
      text: fields.Text ?? "",
    };
  });
}

export function getMascots(): ParsedMascot[] {
  return mascotEntries.map((entry) => ({
    description: entry.beschreibungstext,
    name: entry.datei.replace(/\.png$/, "") as MascotName,
    title: entry.name,
  }));
}

export type { ParsedEvent, ParsedMascot };
