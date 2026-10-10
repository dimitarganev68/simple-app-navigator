import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/potrebiteli")({
  head: () => ({
    meta: [
      { title: "Потребители — Моята Фирма" },
      { name: "description", content: "Списък и управление на потребителите в системата." },
      { property: "og:title", content: "Потребители — Моята Фирма" },
      { property: "og:description", content: "Списък и управление на потребителите в системата." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PotrebiteliPage,
});

function PotrebiteliPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Потребители</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Тук ще се показва списъкът с потребители и тяхното управление.
      </p>
    </div>
  );
}
