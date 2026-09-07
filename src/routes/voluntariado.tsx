import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  FileText,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageSquare,
  Phone,
  Stethoscope,
  User,
  X,
} from "lucide-react";

import equipo from "@/assets/voluntariado-equipo.png";
import { LegalModal, PRIVACY_DOC, TERMS_DOC, type LegalDoc } from "@/components/site/LegalModal";
import { Logo } from "@/components/site/Logo";
import { MobileNav } from "@/components/site/MobileNav";
import { Reveal } from "@/components/site/Reveal";
import { SiteHeader } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/voluntariado")({
  head: () => ({
    meta: [
      { title: "Voluntariado profesional | Fundación Un Día Más" },
      {
        name: "description",
        content:
          "Tu conocimiento puede salvar vidas. Súmate como psicólogo o profesional de la salud al voluntariado de la Fundación Un Día Más.",
      },
      {
        property: "og:title",
        content: "Voluntariado profesional | Fundación Un Día Más",
      },
      {
        property: "og:description",
        content:
          "Transforma el dolor en esperanza a través de tu profesión: intervención primaria, talleres de prevención, asesoría clínica e investigación.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Voluntariado,
});

const ROLES = [
  {
    icon: MessageSquare,
    title: "Intervención Primaria",
    body: "Brindar apoyo psicológico inicial a personas en crisis de salud mental.",
  },
  {
    icon: GraduationCap,
    title: "Talleres de Prevención",
    body: "Facilitar espacios psicoeducativos para comunidades vulnerables, colegios y familias.",
  },
  {
    icon: HeartHandshake,
    title: "Asesoría Clínica",
    body: "Colaborar en el diseño de estrategias terapéuticas para nuestros beneficiarios constantes.",
  },
  {
    icon: BarChart3,
    title: "Investigación y Desarrollo",
    body: "Aportar desde la evidencia científica para mejorar nuestros protocolos de atención.",
  },
];

const FIELDS = [
  { label: "Nombre del Profesional", placeholder: "Nombre completo", icon: User, type: "text" },
  { label: "Fecha de Disponibilidad", placeholder: "Seleccionar fecha", icon: Calendar, type: "date" },
  {
    label: "Especialidad Clínica",
    placeholder: "Ingresar especialidad, ej: Psicología Clínica, Cognitivo-Conductual",
    icon: Stethoscope,
    type: "text",
  },
  { label: "Ciudad de Residencia", placeholder: "Ciudad, País", icon: MapPin, type: "text" },
  { label: "Número de celular", placeholder: "Ingresa número de celular", icon: Phone, type: "tel" },
];

function Voluntariado() {
  const [modalDoc, setModalDoc] = useState<LegalDoc | null>(null);
  const [target, setTarget] = useState<"privacidad" | "terminos" | null>(null);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    fecha: "",
    especialidad: "",
    ciudad: "",
    celular: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const canSubmit =
    form.nombre.trim() &&
    form.fecha &&
    form.especialidad.trim() &&
    form.ciudad.trim() &&
    form.celular.trim() &&
    cvFile &&
    acceptPrivacy &&
    acceptTerms;

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const openDoc = (which: "privacidad" | "terminos") => {
    setTarget(which);
    setModalDoc(which === "privacidad" ? PRIVACY_DOC : TERMS_DOC);
  };

  const closeDoc = () => {
    setModalDoc(null);
    setTarget(null);
  };

  const acceptDoc = () => {
    if (target === "privacidad") setAcceptPrivacy(true);
    if (target === "terminos") setAcceptTerms(true);
    closeDoc();
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SiteHeader />
      <MobileNav />

      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, var(--background) 0%, var(--rosa-soft) 45%, var(--rosa-soft) 100%)",
          }}
        >
          <div className="mx-auto w-full max-w-[1280px] px-6 pt-[104px] pb-12 text-center md:pt-32 md:pb-16 lg:px-[72px]">
            <Reveal>
              <img
                src={equipo}
                alt="Equipo de profesionales de la salud mental voluntarios"
                width={1200}
                height={704}
                className="mx-auto h-[124px] w-auto object-contain object-bottom md:h-[190px]"
              />
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-6 text-[2.1rem] leading-[1.1] font-light tracking-tight text-lavanda md:text-[3.3rem]">
                Tu conocimiento puede salvar vidas
              </h1>
              <p className="mx-auto mt-5 max-w-[70ch] text-[0.95rem] leading-relaxed text-muted-foreground">
                Transforma el dolor en esperanza a través de tu profesión. En la Fundación Un Día Más
                creemos que cada vida cuenta y que tu experiencia clínica es la herramienta más
                poderosa para prevenir el suicidio y promover el bienestar emocional en quienes más
                lo necesitan.
              </p>
              <a
                href="#registro"
                className="btn-base btn-primary mt-8 inline-flex w-full px-8 sm:w-auto"
              >
                Quiero apoyar
              </a>
            </Reveal>
          </div>
        </section>

        {/* ROL PROFESIONAL */}
        <section className="bg-background py-14 md:py-20">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal>
              <h2 className="text-3xl font-light tracking-tight text-tinta md:text-center md:text-[2.3rem]">
                El rol del profesional de la salud en nuestra misión
              </h2>
              <p className="mt-4 max-w-[68ch] text-[0.95rem] leading-relaxed text-muted-foreground md:mx-auto md:text-center">
                Los profesionales de la salud mental, especialmente los psicólogos, son el pilar
                fundamental de nuestras iniciativas. Su apoyo nos permite ampliar el alcance de
                nuestros programas y ofrecer una red de contención profesional y humana. Como
                voluntario, podrás participar en:
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-7">
              {ROLES.map((r, i) => (
                <Reveal key={r.title} delay={i * 80}>
                  <article
                    className="h-full rounded-[24px] bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 md:p-7"
                    style={{ boxShadow: "var(--shadow-n1)" }}
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-violeta">
                      <r.icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-violeta">{r.title}</h3>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-muted-foreground">
                      {r.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULARIO */}
        <section id="registro" className="bg-rosa-soft py-14 md:py-20">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal>
              <h2 className="text-3xl font-light tracking-tight text-tinta md:text-center md:text-[2.3rem]">
                Formulario de Registro para Voluntariado Profesional
              </h2>
              <p className="mt-4 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted-foreground md:mx-auto md:text-center">
                Si deseas poner tu talento al servicio de la vida, por favor completa la siguiente
                información para iniciar tu proceso de vinculación.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <form
                className="mx-auto mt-10 w-full max-w-[560px] rounded-[28px] bg-card p-6 md:p-9"
                style={{ boxShadow: "var(--shadow-n2)" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <h3 className="text-xl font-bold text-violeta">Información del Aspirante</h3>

                <div className="mt-6 space-y-5">
                  {FIELDS.map((f) => (
                    <label key={f.label} className="block">
                      <span className="text-sm font-bold text-tinta">{f.label}</span>
                      <span className="relative mt-2 block">
                        <f.icon
                          className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-violeta/70"
                          strokeWidth={2.2}
                        />
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={
                            f.label === "Nombre del Profesional"
                              ? form.nombre
                              : f.label === "Fecha de Disponibilidad"
                                ? form.fecha
                                : f.label === "Especialidad Clínica"
                                  ? form.especialidad
                                  : f.label === "Ciudad de Residencia"
                                    ? form.ciudad
                                    : form.celular
                          }
                          onChange={(e) =>
                            update(
                              f.label === "Nombre del Profesional"
                                ? "nombre"
                                : f.label === "Fecha de Disponibilidad"
                                  ? "fecha"
                                  : f.label === "Especialidad Clínica"
                                    ? "especialidad"
                                    : f.label === "Ciudad de Residencia"
                                      ? "ciudad"
                                      : "celular",
                              e.target.value
                            )
                          }
                          className="h-12 w-full rounded-full border border-border bg-rosa-soft/70 pr-4 pl-11 text-sm text-tinta transition-all duration-300 outline-none placeholder:text-muted-foreground focus:border-lavanda focus:ring-4 focus:ring-lavanda/25"
                        />
                      </span>
                    </label>
                  ))}

                  <label className="block">
                    <span className="text-sm font-bold text-tinta">Hoja de Vida / Credenciales</span>
                    <span className="relative mt-2 flex h-12 items-center gap-3 rounded-full border border-border bg-rosa-soft/70 px-4 transition-colors duration-300 hover:border-lavanda">
                      <FileText className="h-4 w-4 shrink-0 text-violeta/70" strokeWidth={2.2} />
                      <span className="truncate text-sm text-muted-foreground">
                        {cvFile ? cvFile.name : "Seleccionar archivo (PDF, DOCX)"}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 cursor-pointer opacity-0"
                        onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
                      />
                    </span>
                  </label>
                </div>

                <div className="mt-7 space-y-4">
                  <ConsentRow
                    checked={acceptPrivacy}
                    onToggle={() => setAcceptPrivacy((v) => !v)}
                    onOpen={() => openDoc("privacidad")}
                    linkText="Política de Privacidad"
                    before="Acepto la "
                    after=" y el tratamiento de mis datos personales conforme a la ley vigente de protección de datos."
                  />
                  <ConsentRow
                    checked={acceptTerms}
                    onToggle={() => setAcceptTerms((v) => !v)}
                    onOpen={() => openDoc("terminos")}
                    linkText="Términos y Condiciones"
                    before="Acepto los "
                    after=" de la Fundación Un Día Más para el programa de voluntariado profesional."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="btn-base btn-secondary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Enviar solicitud
                </button>

                <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
                  Nuestro equipo de coordinación se pondrá en contacto contigo para una entrevista
                  inicial y la verificación de credenciales profesionales. Gracias por considerar a
                  la Fundación Un Día Más como el espacio para ejercer tu vocación con impacto
                  social.
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>


      <footer className="bg-[#FAFAF8] pt-14">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 pb-10 md:grid-cols-4 lg:px-[72px]">
          <div>
            <Logo compact />
            <p className="mt-4 text-sm leading-relaxed text-[#6A5390] md:max-w-[30ch]">
              Unidos por la salud mental y el bienestar emocional de nuestra comunidad.
            </p>
          </div>
          <div>
            <p className="eyebrow text-[#6B7280]">Enlaces</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#6A5390]">
              {["Privacidad", "Términos", "Nosotros"].map((l) => (
                <li key={l}>
                  <span className="cursor-default transition-colors duration-300 hover:text-violeta">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-[#6B7280]">Contacto</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#6A5390]">
              <li>info@fundacionundiamas.org</li>
              <li>+57 300 000 0000</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-[#6B7280]">Síguenos</p>
            <div className="mt-4 flex gap-3">
              {["Facebook", "YouTube", "Instagram"].map((red) => (
                <span
                  key={red}
                  aria-label={red}
                  className="grid h-10 w-10 cursor-default place-items-center rounded-full bg-card text-violeta transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
                  style={{ boxShadow: "var(--shadow-n1)" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border/60 py-5">
          <p className="mx-auto w-full max-w-[1280px] px-6 text-xs text-[#6A5390] lg:px-[72px]">
            © 2026 Fundación Un Día Más. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <LegalModal
        doc={modalDoc}
        open={!!modalDoc}
        onClose={closeDoc}
        onAccept={acceptDoc}
      />
    </div>
  );
}

function ConsentRow({
  checked,
  onToggle,
  onOpen,
  linkText,
  before,
  after,
}: {
  checked: boolean;
  onToggle: () => void;
  onOpen: () => void;
  linkText: string;
  before: string;
  after: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={onToggle}
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[6px] border transition-all duration-300 focus-visible:ring-4 focus-visible:ring-lavanda/35 focus-visible:outline-none ${
          checked ? "border-violeta bg-violeta text-white" : "border-border bg-card"
        }`}
      >
        {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
      </button>
      <p className="text-[0.85rem] leading-relaxed text-muted-foreground">
        {before}
        <button
          type="button"
          onClick={onOpen}
          className="font-bold text-violeta underline decoration-lavanda/60 underline-offset-2 transition-colors duration-300 hover:text-rosa"
        >
          {linkText}
        </button>
        {after}
      </p>
    </div>
  );
}
