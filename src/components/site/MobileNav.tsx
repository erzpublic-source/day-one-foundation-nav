import { useEffect, useState } from "react";
import { AlignLeft, MessageSquare, X } from "lucide-react";

const NAV = ["Inicio", "Historias", "Eventos", "Donar", "Voluntariado", "Contacto"];

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
        className={`fixed inset-x-3 bottom-[5.5rem] z-50 origin-bottom rounded-[24px] border border-border/70 bg-card p-3 transition-all duration-400 ease-out ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-6 scale-[0.97] opacity-0"
        }`}
        style={{ boxShadow: "var(--shadow-n3)" }}
        role="dialog"
        aria-label="Menú principal"
      >
        <ul className="flex flex-col">
          {NAV.map((item, i) => {
            const active = i === 0;
            return (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex w-full items-center gap-2 rounded-full px-5 py-3.5 text-left text-lg transition-all duration-300 active:scale-[0.98] ${
                    active
                      ? "bg-accent font-bold text-violeta"
                      : "font-medium text-violeta/85 hover:bg-secondary"
                  }`}
                  style={{
                    transitionDelay: open ? `${60 + i * 45}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(10px)",
                  }}
                >
                  {active && <span className="h-2 w-2 rounded-full bg-violeta" />}
                  {item}
                </button>
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
        <button type="button" className="btn-base btn-sos flex-1 py-3">
          <MessageSquare className="h-5 w-5 shrink-0" strokeWidth={2.4} />
          <span className="text-base">
            SOS <span className="font-normal">Te escucho</span>
          </span>
        </button>
      </div>
    </div>
  );
}
