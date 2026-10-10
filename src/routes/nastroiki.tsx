import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nastroiki")({
  head: () => ({
    meta: [
      { title: "Настройки — Моята Фирма" },
      { name: "description", content: "Настройки на системата и потребителския профил." },
      { property: "og:title", content: "Настройки — Моята Фирма" },
      { property: "og:description", content: "Настройки на системата и потребителския профил." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: NastroikiPage,
});

function NastroikiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Настройки</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Тук ще се намират настройките на системата.
      </p>
    </div>
  );
}
