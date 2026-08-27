import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";

import { Logo } from "./Logo";

const NAV = ["Inicio", "Historias", "Eventos", "Donar", "Voluntariado", "Contacto"];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 hidden transition-all duration-500 ease-out md:block ${
        scrolled ? "glass-nav border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 transition-all duration-500 lg:px-[72px] ${
          scrolled ? "py-2.5" : "py-5"
        }`}
      >
        <Logo compact={scrolled} />
        <button
          type="button"
          className="btn-base btn-sos px-5 py-2.5 text-sm"
          aria-label="Abrir canal SOS Te escucho"
        >
          <MessageSquare className="h-4 w-4 shrink-0" strokeWidth={2.4} />
          <span>
            SOS <span className="font-normal">Te escucho</span>
          </span>
        </button>
      </div>

      <div
        className={`border-t transition-colors duration-500 ${
          scrolled ? "border-border/50" : "border-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex w-full max-w-[1280px] items-center gap-1 px-6 transition-all duration-500 lg:px-[72px] ${
            scrolled ? "py-1.5" : "py-3"
          }`}
          aria-label="Navegación principal"
        >
          {NAV.map((item, i) => {
            const active = i === 0;
            return (
              <button
                key={item}
                type="button"
                aria-current={active ? "page" : undefined}
                className={`group relative rounded-full px-3.5 py-2 text-[0.95rem] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavanda/40 ${
                  active ? "font-bold text-tinta" : "font-medium text-violeta/90 hover:text-violeta"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-tinta" />}
                  {item}
                </span>
                <span
                  className="absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "var(--gradient-brand)" }}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
