import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/otpuski")({
  head: () => ({
    meta: [
      { title: "Отпуски — Моята Фирма" },
      { name: "description", content: "Управление и преглед на отпуските на служителите." },
      { property: "og:title", content: "Отпуски — Моята Фирма" },
      { property: "og:description", content: "Управление и преглед на отпуските на служителите." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OtpuskiPage,
});

function OtpuskiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Отпуски</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Тук ще се управляват и преглеждат отпуските на служителите.
      </p>
    </div>
  );
}
