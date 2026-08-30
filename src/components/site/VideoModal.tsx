import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  videoId: string;
  watchUrl: string;
};

export function VideoModal({ open, onClose, title, videoId, watchUrl }: VideoModalProps) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!open) {
      // Al cerrar, se desmonta el iframe -> el video queda pausado
      setPlaying(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[70] grid place-items-center px-4 py-8 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      {/* Fondo glass */}
      <button
        type="button"
        tabIndex={-1}
        aria-label="Cerrar"
        onClick={onClose}
        className="glass-nav absolute inset-0 h-full w-full cursor-default"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`relative w-full max-w-[720px] overflow-hidden rounded-[24px] bg-card transition-all duration-400 ease-out ${
          open ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.98]"
        }`}
        style={{ boxShadow: "var(--shadow-n2)" }}
      >
        {/* Línea superior con gradiente */}
        <span
          className="block h-[5px] w-full"
          style={{ background: "var(--gradient-brand)" }}
        />

        <div className="flex items-start justify-between gap-4 px-6 pt-6 md:px-8">
          <h2 className="text-xl leading-snug font-bold text-tinta md:text-2xl">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-rosa/12 text-violeta transition-all duration-300 hover:bg-rosa/25 active:scale-95"
          >
            <X className="h-4 w-4" strokeWidth={2.6} />
          </button>
        </div>

        <div className="px-6 pt-5 md:px-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-tinta/90">
            {open && playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Reproducir video"
                className="group absolute inset-0 grid place-items-center"
              >
                <img
                  src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                  alt={title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-card/90 text-violeta transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-border/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary text-sm"
          >
            <Play className="h-4 w-4" fill="currentColor" />
            Ver entrevista en el canal
          </a>
          <button type="button" onClick={onClose} className="btn-base btn-tertiary text-sm">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
