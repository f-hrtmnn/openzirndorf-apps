import type { Meta, StoryObj } from "@storybook/react";

const colorTokens = [
  { name: "Brand Green", variable: "--oz-brand-green", fallback: "#009a00" },
  {
    name: "Brand Green Hover",
    variable: "--oz-brand-green-hover",
    fallback: "#007a00",
  },
  {
    name: "Brand Green Dark",
    variable: "--oz-brand-green-dark",
    fallback: "#006600",
  },
  { name: "Brand Orange", variable: "--oz-brand-orange", fallback: "#d96020" },
  { name: "Brand Dark", variable: "--oz-brand-dark", fallback: "#1f2937" },
  { name: "Text Primary", variable: "--oz-text-primary", fallback: "#1f2937" },
  {
    name: "Text Secondary",
    variable: "--oz-text-secondary",
    fallback: "#6b7280",
  },
  { name: "Background", variable: "--oz-bg-primary", fallback: "#ffffff" },
  { name: "Surface", variable: "--oz-bg-surface", fallback: "#f3f4f6" },
  { name: "Subtle", variable: "--oz-bg-subtle", fallback: "#e5e7eb" },
  { name: "Green Tint", variable: "--oz-bg-green", fallback: "#eef7e6" },
  { name: "Orange Tint", variable: "--oz-bg-orange", fallback: "#fff4eb" },
  { name: "Success", variable: "--oz-color-success", fallback: "#15803d" },
  { name: "Warning", variable: "--oz-color-warning", fallback: "#b45309" },
  { name: "Error", variable: "--oz-color-error", fallback: "#b91c1c" },
  { name: "Info", variable: "--oz-color-info", fallback: "#1d4ed8" },
] as const;

const textColorTokens = new Set(["--oz-text-primary", "--oz-text-secondary"]);

const typeScale = [
  {
    label: "XS",
    token: "--oz-font-size-xs",
    sample: "12px utility and metadata",
  },
  {
    label: "SM",
    token: "--oz-font-size-sm",
    sample: "Small body copy and helper text",
  },
  {
    label: "Base",
    token: "--oz-font-size-base",
    sample: "Default paragraph size",
  },
  {
    label: "LG",
    token: "--oz-font-size-lg",
    sample: "Intro copy and emphasized body text",
  },
  {
    label: "XL",
    token: "--oz-font-size-xl",
    sample: "Card titles and section support text",
  },
  { label: "2XL", token: "--oz-font-size-2xl", sample: "Section headlines" },
  { label: "3XL", token: "--oz-font-size-3xl", sample: "Page headlines" },
  { label: "4XL", token: "--oz-font-size-4xl", sample: "Hero headline range" },
] as const;

const spacingTokens = [
  "--oz-space-1",
  "--oz-space-2",
  "--oz-space-3",
  "--oz-space-4",
  "--oz-space-5",
  "--oz-space-6",
  "--oz-space-8",
  "--oz-space-10",
  "--oz-space-12",
  "--oz-space-16",
] as const;

const radiusTokens = [
  "--oz-radius-sm",
  "--oz-radius",
  "--oz-radius-lg",
  "--oz-radius-xl",
  "--oz-radius-full",
] as const;

const shadowTokens = [
  "--oz-shadow-sm",
  "--oz-shadow",
  "--oz-shadow-lg",
  "--oz-shadow-xl",
] as const;

const meta = {
  title: "Foundation/Design Tokens",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-black tracking-[-0.03em] text-foreground">
        {title}
      </h2>
      <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function TokenValue({ token, fallback }: { token: string; fallback: string }) {
  return (
    <p className="font-mono text-xs text-muted-foreground">
      {token} <span className="text-foreground">{fallback}</span>
    </p>
  );
}

export const Reference: Story = {
  render: () => (
    <div className="min-h-screen bg-background px-6 py-10 text-foreground md:px-10 md:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Foundation
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl font-black tracking-[-0.05em] text-foreground">
              Design Tokens
            </h1>
            <p className="max-w-3xl text-base leading-7 text-muted-foreground">
              Reference for the OpenZirndorf token contract defined in
              `packages/ui/src/styles/globals.css`. These swatches and samples
              render the same CSS custom properties consumed by the shared UI
              package and the website app.
            </p>
          </div>
        </div>

        <section className="space-y-6">
          <SectionTitle
            title="Color"
            description="Brand, text, surface, and semantic colors taken directly from the OZ token set."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colorTokens.map((token) => (
              <div
                key={token.variable}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                {textColorTokens.has(token.variable) ? (
                  <div
                    className="flex items-center border-b border-border bg-background px-4"
                    style={{ minHeight: "7rem" }}
                  >
                    <p
                      className="text-lg font-semibold"
                      style={{ color: `var(${token.variable}, ${token.fallback})` }}
                    >
                      Beispieltext in {token.name}
                    </p>
                  </div>
                ) : (
                  <div
                    className="border-b border-border"
                    style={{
                      minHeight: "7rem",
                      backgroundColor: `var(${token.variable}, ${token.fallback})`,
                    }}
                  />
                )}
                <div className="space-y-1 p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {token.name}
                  </p>
                  <p className="inline-flex items-center gap-2 font-mono text-xs text-foreground">
                    <span
                      className="h-3 w-3 rounded-full border border-border/70"
                      style={{
                        backgroundColor: `var(${token.variable}, ${token.fallback})`,
                      }}
                    />
                    {token.fallback}
                  </p>
                  <TokenValue
                    token={token.variable}
                    fallback={token.fallback}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            title="Typography"
            description="Type families, scale, and reading rhythm used by the shared design system."
          />
          <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
            <div className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Font Families
                </p>
                <p className="text-3xl font-black tracking-[-0.04em] text-foreground [font-family:var(--oz-font-heading)]">
                  Montserrat heading sample
                </p>
                <p className="text-base leading-7 text-muted-foreground [font-family:var(--oz-font-body)]">
                  Inter body sample for UI copy, paragraphs, and navigation.
                </p>
                <p className="rounded-lg bg-secondary px-3 py-2 font-mono text-sm text-foreground">
                  JetBrains Mono token / code sample
                </p>
              </div>
            </div>
            <div className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
              {typeScale.map((item) => (
                <div
                  key={item.token}
                  className="border-b border-border/70 pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {item.token}
                    </p>
                  </div>
                  <p
                    className="mt-2 text-foreground"
                    style={{ fontSize: `var(${item.token})` }}
                  >
                    {item.sample}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            title="Spacing"
            description="Core spacing scale shown as actual block size and real layout gap, so the rhythm is visible at a glance."
          />
          <div className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            {spacingTokens.map((token) => (
              <div
                key={token}
                className="grid grid-cols-[140px_96px_1fr] items-center gap-5 border-b border-border/70 pb-4 last:border-b-0 last:pb-0"
              >
                <p className="font-mono text-xs text-muted-foreground">
                  {token}
                </p>
                <div className="flex items-center justify-center rounded-lg bg-secondary p-4">
                  <div
                    className="rounded bg-primary"
                    style={{ width: `var(${token})`, height: `var(${token})` }}
                  />
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <div
                    className="flex rounded-lg bg-background p-3"
                    style={{ gap: `var(${token})` }}
                  >
                    <div className="h-6 w-6 rounded bg-brand-green" />
                    <div className="h-6 w-6 rounded bg-brand-orange" />
                    <div className="h-6 w-6 rounded bg-brand-blue" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionTitle
              title="Radius"
              description="Corner radii for controls, cards, and large section containers."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {radiusTokens.map((token) => (
                <div
                  key={token}
                  className="space-y-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div
                    className="h-20 border border-border bg-secondary"
                    style={{ borderRadius: `var(${token})` }}
                  />
                  <p className="font-mono text-xs text-muted-foreground">
                    {token}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <SectionTitle
              title="Shadow"
              description="Elevation tokens used for cards, hover states, and raised surfaces."
            />
            <div className="grid gap-4">
              {shadowTokens.map((token) => (
                <div
                  key={token}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <div
                    className="rounded-xl bg-card p-5"
                    style={{ boxShadow: `var(${token})` }}
                  >
                    <p className="text-sm font-semibold text-foreground">
                      Elevated surface
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {token}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
};
