import { Link } from "@tanstack/react-router";
import { CalendarDays, Home, Settings, Users } from "lucide-react";

const navItems = [
  { to: "/", label: "Начална", icon: Home },
  { to: "/otpuski", label: "Отпуски", icon: CalendarDays },
  { to: "/potrebiteli", label: "Потребители", icon: Users },
  { to: "/nastroiki", label: "Настройки", icon: Settings },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
          Моята Фирма
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
