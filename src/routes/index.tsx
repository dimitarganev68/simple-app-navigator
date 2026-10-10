import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Начална — Моята Фирма" },
      { name: "description", content: "Начална страница на системата за управление на отпуски и потребители." },
      { property: "og:title", content: "Начална — Моята Фирма" },
      { property: "og:description", content: "Начална страница на системата за управление на отпуски и потребители." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Начална страница</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Добре дошли в системата на Моята Фирма. Използвайте менюто по-горе, за да
        превключвате между страниците Отпуски, Потребители и Настройки.
      </p>
    </div>
  );
}
