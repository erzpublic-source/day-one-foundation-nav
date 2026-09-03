import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, HandHeart, Headphones, Play, Video, Youtube } from "lucide-react";

import heroConversacion from "@/assets/hero-conversacion.jpg";
import historiaJaime from "@/assets/historia-jaime.jpg";
import historiaEntrevista from "@/assets/historia-entrevista.jpg";
import historiaComunidad from "@/assets/historia-comunidad.jpg";
import acusticoGuitarra from "@/assets/acustico-guitarra.jpg";
import acusticoVoces from "@/assets/acustico-voces.jpg";
import acusticoPiano from "@/assets/acustico-piano.jpg";
import donacionImg from "@/assets/donacion-manos.jpg";
import { Logo } from "@/components/site/Logo";
import { MobileNav } from "@/components/site/MobileNav";
import { Reveal } from "@/components/site/Reveal";
import { SiteHeader } from "@/components/site/SiteHeader";
import { VideoModal } from "@/components/site/VideoModal";


export const Route = createFileRoute("/historias")({
  head: () => ({
    meta: [
      { title: "Historias que merecen ser escuchadas | Fundación Un Día Más" },
      {
        name: "description",
        content:
          "Entrevistas y acústicos con personalidades, artistas y personas de la vida cotidiana que comparten conversaciones reales sobre salud mental.",
      },
      {
        property: "og:title",
        content: "Historias que merecen ser escuchadas | Fundación Un Día Más",
      },
      {
        property: "og:description",
        content:
          "Conversaciones reales sobre salud mental, desafíos, aprendizajes y nuevas oportunidades. Míralas en nuestro canal de YouTube.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Historias,
});

const ENTREVISTAS = [
  {
    img: historiaEntrevista,
    title: "Conversaciones sobre el miedo",
    body: "Una charla íntima sobre cómo afrontar la ansiedad en el día a día y encontrar herramientas de apoyo.",
    cta: "Ver en canal",
  },
  {
    img: historiaComunidad,
    title: "Resiliencia comunitaria",
    body: "Líderes locales comparten sus historias de recuperación colectiva y la importancia del tejido social.",
    cta: "Ver en canal",
  },
];

const ACUSTICOS = [
  {
    img: acusticoGuitarra,
    title: "Jaime Valencia — Un Día Más",
    body: "Una interpretación íntima de su canción más resiliente, llena de historia y esperanza.",
  },
  {
    img: acusticoVoces,
    title: "Voces de esperanza — Sesión en vivo",
    body: "Un ensamble local que une voces para sanar a través de melodías compartidas.",
  },
  {
    img: acusticoPiano,
    title: "Melodías que sanan — Piano solo",
    body: "Una pieza instrumental diseñada para acompañar momentos de reflexión y calma.",
  },
];

const VIDEO_ID = "C5xYXV6LsWc";
const VIDEO_URL = "https://youtu.be/C5xYXV6LsWc";

function smoothScrollTo(targetId: string) {
  const element = document.getElementById(targetId);
  if (!element) return;

  const startY = window.scrollY;
  const targetY = element.getBoundingClientRect().top + startY - 80;
  const distance = targetY - startY;
  const duration = 900;
  let startTime: number | null = null;

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

function Historias() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (

    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SiteHeader />
      <MobileNav />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40">
          <div
            className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[520px] rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative mx-auto w-full max-w-[900px] px-6 pt-[104px] pb-16 text-center md:pt-40 md:pb-24 lg:px-[72px]">
            <Reveal>
              {/* Círculos de historias — mobile y tablet */}
              <div className="relative mb-8 flex items-center justify-center lg:hidden">
                <img
                  src={heroConversacion}
                  alt="Mujer en una conversación de apoyo"
                  loading="lazy"
                  className="z-10 h-36 w-36 rounded-full border-4 border-white object-cover shadow-lg md:h-48 md:w-48"
                />
                <img
                  src={historiaJaime}
                  alt="Jaime Valencia con su guitarra"
                  loading="lazy"
                  className="z-20 -ml-6 h-36 w-36 rounded-full border-4 border-white object-cover shadow-lg md:-ml-10 md:h-48 md:w-48"
                />
              </div>

              <h1 className="text-[2.2rem] leading-[1.08] font-light tracking-tight text-lavanda md:text-[3.4rem]">
                Historias que merecen
                <br />
                <span className="text-gradient-brand font-bold">ser escuchadas</span>
              </h1>
              <p className="mx-auto mt-6 max-w-[62ch] text-[1rem] leading-relaxed text-muted-foreground">
                Personalidades, líderes, artistas y personas de la vida cotidiana comparten
                conversaciones reales sobre salud mental, desafíos, aprendizajes y nuevas
                oportunidades.
              </p>
              <p className="mt-4 text-sm font-bold text-violeta/80">
                Descubre las entrevistas y acústicos en nuestro canal de YouTube.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <button
                  type="button"
                  className="btn-base btn-primary"
                  onClick={() => smoothScrollTo("entrevistas")}
                >
                  Ver Entrevistas
                </button>
                <button
                  type="button"
                  className="btn-base btn-tertiary"
                  onClick={() => smoothScrollTo("acusticos")}
                >
                  Ver Acústicos
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ENTREVISTAS */}
        <section id="entrevistas" className="bg-[#FAFAF8] py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal className="text-left md:text-center">
              <p className="eyebrow text-[#9981C1]">Entrevistas</p>
              <h2 className="mt-3 text-3xl font-light tracking-tight md:text-[2.3rem]">
                Voces que abren conversación
              </h2>
              <p className="mx-auto mt-4 max-w-[58ch] text-[0.98rem] leading-relaxed text-muted-foreground">
                Descubre entrevistas auténticas con personalidades, artistas y personas de la vida
                cotidiana, junto a encuentros acústicos íntimos que conectan música, emociones y
                salud mental.
              </p>
            </Reveal>

            {/* Destacada */}
            <Reveal delay={90}>
              <button
                type="button"
                aria-label="Ver entrevista con Jaime Valencia"
                onClick={() => setVideoOpen(true)}
                className="group mt-10 grid w-full cursor-pointer overflow-hidden rounded-[32px] bg-card text-left transition-all duration-400 ease-out hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavanda/40 md:grid-cols-[0.9fr_1.1fr]"
                style={{ boxShadow: "var(--shadow-n1)" }}

                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-n3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-n1)";
                }}
              >
                <span className="relative block overflow-hidden">
                  <img
                    src={historiaJaime}
                    alt="Jaime Valencia tocando la guitarra"
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-60 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] md:h-full"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-card/85 text-violeta transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
                    </span>
                  </span>
                </span>
                <span className="flex flex-col p-7 md:p-10">
                  <span className="eyebrow w-fit rounded-full bg-amarillo/40 px-2.5 py-1 text-tinta">
                    Destacado
                  </span>
                  <span className="mt-4 block text-xl leading-snug font-bold md:text-2xl">
                    Un Día Más con JAIME VALENCIA
                  </span>
                  <span className="mt-3 block text-[0.98rem] leading-relaxed text-muted-foreground">
                    Jaime Valencia es uno de los artistas más icónicos desde finales de los años 80
                    con música de protesta, hoy sigue siendo reconocido y activo en los escenarios.
                    Hablaremos de su vida personal y la salud mental.
                  </span>
                  <span className="btn-base btn-primary mt-6 w-fit text-sm">
                    <Play className="h-4 w-4" fill="currentColor" />
                    Ver entrevista en el canal
                  </span>
                </span>
              </button>
            </Reveal>

            {/* Secundarias */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {ENTREVISTAS.map((card, i) => (
                <Reveal key={card.title} delay={i * 110}>
                  <button
                    type="button"
                    aria-label={`${card.title} — ${card.cta}`}
                    className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl bg-card text-left transition-all duration-400 ease-out hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavanda/40"
                    style={{ boxShadow: "var(--shadow-n1)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "var(--shadow-n3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "var(--shadow-n1)";
                    }}
                  >
                    <span className="relative block overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.title}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                      <span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-full bg-card/85 text-violeta transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
                      </span>
                    </span>
                    <span className="flex flex-1 flex-col p-5">
                      <span className="block text-lg leading-snug font-bold">{card.title}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {card.body}
                      </span>
                      <span className="mt-4 flex items-center gap-1.5 text-sm font-bold text-azul">
                        {card.cta}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>

            {/* DONACIÓN */}
            <Reveal delay={80}>
              <div
                className="mt-6 grid overflow-hidden rounded-[32px] bg-card md:h-[340px] md:grid-cols-[0.85fr_1.15fr]"
                style={{ boxShadow: "var(--shadow-n2)" }}
              >
                <img
                  src={donacionImg}
                  alt="Manos unidas en señal de apoyo"
                  loading="lazy"
                  width={900}
                  height={1000}
                  className="h-56 w-full object-cover md:h-full"
                />
                <div className="p-7 md:overflow-auto md:p-10">
                  <p className="eyebrow text-[#9981C1]">Apóyanos</p>
                  <h2 className="mt-3 text-2xl leading-tight font-light tracking-tight md:text-[2.1rem]">
                    Tu donación salva mañanas
                  </h2>
                  <p className="mt-4 max-w-[46ch] text-[0.98rem] leading-relaxed text-muted-foreground">
                    Cada aporte nos permite seguir ofreciendo sesiones de apoyo, talleres artísticos
                    y el mantenimiento de nuestras líneas de escucha activa.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <button type="button" className="btn-base btn-support">
                      Quiero donar
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button type="button" className="btn-base btn-tertiary">
                      Quiero ser voluntario
                      <HandHeart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ACÚSTICOS */}
        <section id="acusticos" className="bg-rosa-soft py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal className="text-center">
              <p className="eyebrow text-[#9981C1]">Acústicos</p>
              <h2 className="mt-3 text-3xl leading-tight font-light tracking-tight md:text-[2.3rem]">
                Voces que inspiran, música que acompaña
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {ACUSTICOS.map((card, i) => (
                <Reveal key={card.title} delay={i * 110}>
                  <button
                    type="button"
                    aria-label={`${card.title} — disfrutar el acústico en el canal`}
                    className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl bg-card text-left transition-all duration-400 ease-out hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavanda/40"
                    style={{ boxShadow: "var(--shadow-n1)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "var(--shadow-n3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "var(--shadow-n1)";
                    }}
                  >
                    <span className="block overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.title}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="h-44 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-5">
                      <span className="block text-sm font-bold tracking-wide uppercase">
                        {card.title}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {card.body}
                      </span>
                      <span className="btn-base btn-tertiary mt-5 w-full text-sm">
                        <Headphones className="h-4 w-4" />
                        Disfrutar el acústico en el canal
                      </span>
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>

            {/* YOUTUBE */}
            <Reveal delay={120}>
              <div className="mt-12 rounded-[32px] bg-card/70 px-6 py-12 text-center md:px-10">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-rosa/15 text-rosa">
                  <Video className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-violeta md:text-2xl">
                  Nuestra comunidad en YouTube
                </h3>
                <p className="mx-auto mt-3 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                  Suscríbete para ver entrevistas, acústicos y momentos que sanan.
                </p>
                <button type="button" className="btn-base btn-primary mx-auto mt-7">
                  <Youtube className="h-4 w-4" />
                  Ir al canal de YouTube
                </button>
              </div>
            </Reveal>
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

      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        title="Un Día Más con JAIME VALENCIA"
        videoId={VIDEO_ID}
        watchUrl={VIDEO_URL}
      />
    </div>

  );
}
