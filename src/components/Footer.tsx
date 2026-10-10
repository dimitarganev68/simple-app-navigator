import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2">
        <div>
          <p className="text-lg font-bold text-foreground">Моята Фирма</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Система за управление на отпуски и потребители.
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Контакти</p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> гр. София, бул. „България" 100
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4" /> +359 2 123 4567
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> info@moyata-firma.bg
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2026 Моята Фирма. Всички права запазени.
      </div>
    </footer>
  );
}
