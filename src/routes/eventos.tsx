import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, MapPin, MonitorSmartphone } from "lucide-react";

import eventoLanzamiento from "@/assets/evento-lanzamiento.jpg";
import eventoEscucha from "@/assets/evento-escucha.jpg";
import eventoAireLibre from "@/assets/evento-aire-libre.jpg";
import eventoCirculos from "@/assets/evento-circulos.jpg";
import { Logo } from "@/components/site/Logo";
import { MobileNav } from "@/components/site/MobileNav";
import { Reveal } from "@/components/site/Reveal";
import { SiteHeader } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos y encuentros | Fundación Un Día Más" },
      {
        name: "description",
        content:
          "Conoce los encuentros, talleres y actividades que dan vida a la misión de la Fundación Un Día Más: escucha activa, jornadas al aire libre y círculos de apoyo.",
      },
      { property: "og:title", content: "Eventos y encuentros | Fundación Un Día Más" },
      {
        property: "og:description",
        content:
          "Talleres de escucha activa, jornadas al aire libre y círculos de apoyo. Encuentra un espacio para ti en nuestras próximas actividades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Eventos,
});

const PROXIMOS = [
  {
    dow: "Sáb",
    day: "1",
    when: "1 de Febrero 7:00 am - 10:00 am",
    title: "Talleres de Escucha Activa",
    place: "Sede Central",
    address: "Calle de la Calma 123, Bogotá",
    body: "Un espacio seguro para aprender técnicas de comunicación empática y fortalecer los vínculos comunitarios a través del diálogo consciente.",
    img: eventoEscucha,
  },
  {
    dow: "Dom",
    day: "2",
    when: "2 de Febrero 10:00 am - 12:30 pm",
    title: "Jornadas al Aire Libre",
    place: "Parque del Retiro",
    address: "Paseo de Fernán Núñez, Ibagué",
    body: "Conectamos con la naturaleza y la comunidad en una mañana de actividades recreativas diseñadas para reducir el estrés y la ansiedad.",
    img: eventoAireLibre,
  },
  {
    dow: "Lun",
    day: "3",
    when: "3 de Febrero 6:00 pm - 7:30 pm",
    title: "Círculos de Apoyo",
    place: "Centro Comunitario",
    address: "Av. de la Esperanza 45, Ibagué",
    body: "Un encuentro íntimo para compartir experiencias y encontrar consuelo en la compañía de otros que transitan caminos similares.",
    img: eventoCirculos,
  },
];

function Eventos() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SiteHeader />
      <MobileNav />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-rosa-soft">
          <div
            className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[520px] rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div
            className="pointer-events-none absolute -top-24 right-0 h-[380px] w-[420px] rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative mx-auto w-full max-w-[900px] px-6 pt-[104px] pb-14 text-center md:pt-40 md:pb-20 lg:px-[72px]">
            <Reveal>
              <h1 className="text-[2.6rem] leading-[1.05] font-light tracking-tight text-lavanda md:text-[3.6rem]">
                Eventos
              </h1>
              <p className="mx-auto mt-5 max-w-[58ch] text-[1rem] leading-relaxed text-muted-foreground">
                Historias que también se cuentan en imágenes. Conoce los encuentros, actividades y
                experiencias que dan vida a la misión de la Fundación Un Día Más.
              </p>
            </Reveal>
          </div>
        </section>

        {/* EVENTO DESTACADO */}
        <section className="bg-lila-soft/60 py-12 md:py-16">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal>
              <button
                type="button"
                aria-label="Quiero saber más del Lanzamiento Fundación Un Día Más"
                className="group grid w-full cursor-pointer overflow-hidden rounded-[32px] bg-card text-left transition-all duration-400 ease-out hover:-translate-y-1.5 focus-visible:ring-4 focus-visible:ring-lavanda/40 focus-visible:outline-none md:grid-cols-2"
                style={{ boxShadow: "var(--shadow-n1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-n3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-n1)";
                }}
              >
                <span className="flex flex-col p-7 md:order-1 md:p-10">
                  <span className="eyebrow w-fit rounded-full bg-amarillo/40 px-2.5 py-1 text-tinta">
                    Evento destacado
                  </span>
                  <span className="mt-4 block text-2xl leading-tight font-bold text-violeta md:text-[2rem]">
                    Lanzamiento Fundación Un Día Más
                  </span>
                  <span className="mt-4 block max-w-[44ch] text-[0.98rem] leading-relaxed text-muted-foreground">
                    Un encuentro para celebrar el inicio de un camino hacia el bienestar emocional
                    compartido.
                  </span>
                  <span className="mt-6 flex flex-col gap-3 text-[0.95rem] text-tinta/85">
                    <span className="flex items-center gap-2.5">
                      <CalendarDays className="h-4 w-4 shrink-0 text-violeta" strokeWidth={2.2} />
                      Próximamente
                    </span>
                    <span className="flex items-center gap-2.5">
                      <MonitorSmartphone
                        className="h-4 w-4 shrink-0 text-violeta"
                        strokeWidth={2.2}
                      />
                      Presencial / Virtual
                    </span>
                    <span className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 shrink-0 text-violeta" strokeWidth={2.2} />
                      Por confirmar
                    </span>
                  </span>
                  <span className="btn-base btn-secondary mt-8 w-full sm:w-fit sm:px-8">
                    Quiero saber más
                  </span>
                </span>
                <span className="block overflow-hidden md:order-2">
                  <img
                    src={eventoLanzamiento}
                    alt="Comunidad reunida en un taller creativo de bienestar"
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] md:h-full"
                  />
                </span>
              </button>
            </Reveal>
          </div>
        </section>

        {/* PRÓXIMOS EVENTOS */}
        <section className="bg-[#FAFAF8] py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal className="text-left md:text-center">
              <h2 className="text-3xl leading-tight font-light tracking-tight md:text-[2.3rem]">
                Próximos Eventos
              </h2>
              <p className="mx-auto mt-4 max-w-[52ch] text-[0.98rem] leading-relaxed text-muted-foreground">
                Encuentra un espacio para ti en nuestras próximas actividades.
              </p>
            </Reveal>

            <ul className="mx-auto mt-10 flex w-full max-w-[980px] flex-col">
              {PROXIMOS.map((ev, i) => (
                <li key={ev.title}>
                  <Reveal delay={i * 110}>
                    <button
                      type="button"
                      aria-label={`${ev.title} — ${ev.when}`}
                      className="group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-3 rounded-3xl px-3 py-7 text-left transition-all duration-400 ease-out hover:-translate-y-1 hover:bg-card focus-visible:ring-4 focus-visible:ring-lavanda/40 focus-visible:outline-none md:gap-x-6 md:px-6"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "var(--shadow-n2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {/* Fecha */}
                      <span
                        className="grid h-[62px] w-[54px] shrink-0 place-items-center rounded-2xl bg-card transition-colors duration-300 group-hover:bg-accent"
                        style={{ boxShadow: "var(--shadow-n1)" }}
                      >
                        <span className="eyebrow text-[0.6rem] text-[#9981C1]">{ev.dow}</span>
                        <span className="-mt-1 block text-xl font-bold text-violeta">{ev.day}</span>
                      </span>

                      {/* Contenido */}
                      <span className="min-w-0">
                        <span className="flex items-center gap-1.5 text-[0.85rem] text-muted-foreground">
                          <Clock className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />
                          {ev.when}
                        </span>
                        <span className="mt-2 block text-lg leading-snug font-bold text-violeta md:text-xl">
                          {ev.title}
                        </span>
                        <span className="mt-1.5 block text-sm">
                          <span className="font-bold text-tinta">{ev.place}</span>{" "}
                          <span className="text-muted-foreground">{ev.address}</span>
                        </span>
                        <span className="mt-3 block max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
                          {ev.body}
                        </span>
                        <span className="mt-3 flex items-center gap-1.5 text-sm font-bold text-azul opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Ver detalles
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </span>

                      {/* Imagen */}
                      <span className="block shrink-0 overflow-hidden rounded-full md:rounded-[28px]">
                        <img
                          src={ev.img}
                          alt={ev.title}
                          loading="lazy"
                          width={1200}
                          height={900}
                          className="h-14 w-14 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] md:h-[130px] md:w-[210px]"
                        />
                      </span>
                    </button>
                  </Reveal>
                  {i < PROXIMOS.length - 1 && (
                    <span className="mx-3 block h-px bg-border/70 md:mx-6" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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
    </div>
  );
}
