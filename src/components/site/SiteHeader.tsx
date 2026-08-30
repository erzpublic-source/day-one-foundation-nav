import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";

import { Logo } from "./Logo";
import { NAV_ITEMS } from "./nav-items";

function NavList({ className = "" }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className={`flex items-center gap-1 ${className}`} aria-label="Navegación principal">
      {NAV_ITEMS.map((item) => {
        const active = !!item.to && pathname === item.to;
        const base = `group relative rounded-full px-3.5 py-2 text-[0.95rem] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavanda/40 ${
          active ? "font-bold text-tinta" : "font-medium text-violeta/90 hover:text-violeta"
        }`;
        const inner = (
          <>
            <span className="flex items-center gap-1.5">
              {active && <span className="h-1.5 w-1.5 rounded-full bg-tinta" />}
              {item.label}
            </span>
            <span
              className="absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
              style={{ background: "var(--gradient-brand)" }}
            />
          </>
        );

        return item.to ? (
          <Link
            key={item.label}
            to={item.to}
            aria-current={active ? "page" : undefined}
            className={base}
          >
            {inner}
          </Link>
        ) : (
          <button key={item.label} type="button" className={base}>
            {inner}
          </button>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header mobile: logo centrado 178x24 sobre fondo #FAFAF8 */}
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center bg-[#FAFAF8] py-3 md:hidden">
        <Link to="/" aria-label="Inicio">
          <Logo imgClassName="!h-6 !w-[178px] object-contain object-center" />
        </Link>
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 hidden transition-all duration-500 ease-out md:block ${
          scrolled ? "glass-nav border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center gap-6 px-6 lg:px-[72px]">
          <Link to="/" aria-label="Inicio" className="shrink-0">
            <Logo compact={scrolled} />
          </Link>

          {scrolled && <NavList className="flex-1 justify-center" />}
          {!scrolled && <span className="flex-1" />}

          <button
            type="button"
            className="btn-base btn-sos shrink-0 px-5 py-2.5"
            aria-label="Abrir canal SOS Te escucho"
          >
            <MessageSquare className="h-4 w-4 shrink-0" strokeWidth={2.4} />
            <span className="text-sm font-bold">
              SOS <span className="font-bold">Te escucho</span>
            </span>
          </button>
        </div>

        {!scrolled && (
          <>
            <div className="h-px w-full" style={{ backgroundColor: "#D9D9D9" }} />
            <div className="transition-colors duration-500">
              <NavList className="mx-auto w-full max-w-[1280px] px-6 py-3 lg:px-[72px]" />
            </div>
          </>
        )}
      </header>
    </>
  );
}
