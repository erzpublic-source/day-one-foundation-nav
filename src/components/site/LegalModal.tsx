import { useEffect } from "react";
import { X } from "lucide-react";

export type LegalDoc = {
  title: string;
  updated: string;
  note: string;
  sections: { heading: string; body: string }[];
};

export const PRIVACY_DOC: LegalDoc = {
  title: "Políticas de Privacidad",
  updated: "Última actualización: Febrero 2026",
  note: "Al aceptar, autorizas el tratamiento de tus credenciales clínicas.",
  sections: [
    {
      heading: "1. Recopilación de datos",
      body: "Recopilamos información personal de identificación de nuestros postulantes a voluntarios médicos y de salud, incluyendo nombre, especialidad clínica, credenciales profesionales, datos de contacto y hoja de vida con el único fin de validar su idoneidad para las brigadas de apoyo psicoeducativo.",
    },
    {
      heading: "2. Uso de la información",
      body: "La información suministrada se procesa con fines organizativos internos para coordinar el voluntariado profesional en la Fundación Un Día Más. No utilizamos sus datos con fines publicitarios de terceros ni comerciales.",
    },
    {
      heading: "3. Compartir datos con terceros",
      body: "Nos comprometemos a no vender, alquilar ni transferir su información personal. Sus credenciales e historial solo podrán ser verificados ante los entes certificadores oficiales de salud de acuerdo a las regulaciones vigentes de salud mental.",
    },
    {
      heading: "4. Derechos del usuario",
      body: "Usted mantiene todos sus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición). Podrá retirar su consentimiento de voluntariado o solicitar la eliminación total de su hoja de vida escribiéndonos de forma directa.",
    },
  ],
};

export const TERMS_DOC: LegalDoc = {
  title: "Términos y Condiciones",
  updated: "Última actualización: Febrero 2026",
  note: "Al aceptar, confirmas que la información profesional entregada es veraz.",
  sections: [
    {
      heading: "1. Naturaleza del voluntariado",
      body: "La vinculación como voluntario profesional es libre, voluntaria y no genera relación laboral, contractual ni remuneración alguna con la Fundación Un Día Más.",
    },
    {
      heading: "2. Requisitos del aspirante",
      body: "El aspirante declara contar con título profesional vigente y credenciales válidas en su especialidad clínica, y autoriza su verificación ante las entidades competentes.",
    },
    {
      heading: "3. Compromiso ético y confidencialidad",
      body: "El voluntario se compromete a mantener absoluta confidencialidad sobre la información de los beneficiarios y a actuar conforme al código deontológico de su profesión y a los protocolos de la Fundación.",
    },
    {
      heading: "4. Vigencia y retiro",
      body: "El voluntario podrá dar por terminada su participación en cualquier momento notificando al equipo de coordinación. La Fundación podrá finalizar la vinculación cuando no se cumplan los protocolos de atención.",
    },
  ],
};

export function LegalModal({
  doc,
  open,
  onClose,
  onAccept,
}: {
  doc: LegalDoc | null;
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !doc) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 md:p-6">
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-tinta/45 backdrop-blur-[2px]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={doc.title}
        className="relative flex max-h-[88vh] w-full max-w-[640px] flex-col overflow-hidden rounded-[24px] bg-card"
        style={{ boxShadow: "var(--shadow-n3)" }}
      >
        <div className="h-1.5 w-full shrink-0" style={{ background: "var(--gradient-brand)" }} />

        <div className="flex items-start justify-between gap-4 px-6 pt-6 md:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-tinta md:text-[1.7rem]">
              {doc.title}
            </h2>
            <p className="eyebrow mt-2 text-[#9981C1]">{doc.updated}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-violeta transition-all duration-300 hover:-translate-y-0.5 hover:bg-lila-soft"
          >
            <X className="h-4 w-4" strokeWidth={2.6} />
          </button>
        </div>

        <div className="mt-5 flex-1 overflow-y-auto px-6 pb-6 md:px-8">
          {doc.sections.map((s) => (
            <div key={s.heading} className="mt-5 first:mt-0">
              <h3 className="text-lg font-bold text-violeta">{s.heading}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="shrink-0 border-t border-border/70 bg-card px-6 py-5 md:px-8">
          <p className="text-sm leading-relaxed text-muted-foreground md:hidden">{doc.note}</p>
          <div className="mt-4 flex flex-col gap-3 md:mt-0 md:flex-row md:items-center md:justify-between">
            <p className="hidden max-w-[34ch] text-sm leading-relaxed text-muted-foreground md:block">
              {doc.note}
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="btn-base btn-tertiary flex-1 px-7 md:flex-none"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={onAccept}
                className="btn-base btn-primary flex-1 px-7 md:flex-none"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
