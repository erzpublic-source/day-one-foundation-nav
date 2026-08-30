import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { AlignLeft, MessageSquare, X } from "lucide-react";

import { NAV_ITEMS } from "./nav-items";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-hidden={!open}
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-tinta/35 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel que se despliega hacia arriba */}
      <div
        className={`glass-nav fixed inset-x-3 bottom-[5.5rem] z-50 origin-bottom rounded-[24px] border border-border/70 p-3 transition-all duration-400 ease-out ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-6 scale-[0.97] opacity-0"
        }`}
        role="dialog"
        aria-label="Menú principal"
      >
        <ul className="flex flex-col">
          {NAV_ITEMS.map((item, i) => {
            const active = !!item.to && pathname === item.to;
            const cls = `flex w-full items-center gap-2 rounded-full px-5 py-3.5 text-left text-lg transition-all duration-300 active:scale-[0.98] ${
              active
                ? "bg-accent font-bold text-violeta"
                : "font-medium text-violeta/85 hover:bg-secondary"
            }`;
            const style = {
              transitionDelay: open ? `${60 + i * 45}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(10px)",
            } as const;
            const inner = (
              <>
                {active && <span className="h-2 w-2 rounded-full bg-violeta" />}
                {item.label}
              </>
            );
            return (
              <li key={item.label}>
                {item.to ? (
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cls}
                    style={style}
                  >
                    {inner}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className={cls}
                    style={style}
                  >
                    {inner}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Barra inferior fija */}
      <div
        className="glass-nav fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 rounded-t-[24px] border-t border-border/70 px-5 py-3"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex shrink-0 flex-col items-center gap-1 rounded-2xl px-2 py-1 text-violeta transition-transform duration-300 active:scale-95"
        >
          <span className="relative grid h-6 w-6 place-items-center">
            <AlignLeft
              className={`absolute h-6 w-6 transition-all duration-300 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
              strokeWidth={2.6}
            />
            <X
              className={`absolute h-6 w-6 transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
              strokeWidth={2.6}
            />
          </span>
          <span className="text-sm font-bold">Menú</span>
        </button>
        <span className="flex-1" />
        <button
          type="button"
          className="btn-base btn-sos h-[30px] w-[162px] shrink-0 px-0 py-0"
        >
          <MessageSquare className="h-4 w-4 shrink-0" strokeWidth={2.4} />
          <span className="text-sm font-bold">
            SOS <span className="font-bold">Te escucho</span>
          </span>
        </button>
      </div>
    </div>
  );
}
