import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Eye, HandHeart, Sparkles, Users } from "lucide-react";

import heroImg from "@/assets/hero-conversacion.jpg";
import cardHistorias from "@/assets/card-historias.jpg";
import cardEventos from "@/assets/card-eventos.jpg";
import cardVoluntariado from "@/assets/card-voluntariado.jpg";
import donacionImg from "@/assets/donacion-manos.jpg";
import { Logo } from "@/components/site/Logo";
import { MobileNav } from "@/components/site/MobileNav";
import { Reveal } from "@/components/site/Reveal";
import { SiteHeader } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fundación Un Día Más | Un espacio seguro para volver a brillar" },
      {
        name: "description",
        content:
          "Acompañamiento en salud mental: escucha activa, arte y comunidad para quienes atraviesan momentos de oscuridad. Siempre puede existir un día más.",
      },
      {
        property: "og:title",
        content: "Fundación Un Día Más | Un espacio seguro para volver a brillar",
      },
      {
        property: "og:description",
        content:
          "Transformamos el silencio en música, el dolor en propósito y la soledad en una comunidad que sostiene.",
      },
    ],
  }),
  component: Home,
});

const ESENCIA = [
  {
    icon: Users,
    title: "Quiénes somos",
    tint: "bg-accent text-violeta",
    body: (
      <>
        En la <strong className="font-bold">Fundación Un Día Más</strong> creemos que la salud mental
        es un derecho fundamental. Somos un equipo interdisciplinario que trabaja incansablemente
        para brindar herramientas de sanación y acompañamiento a quienes atraviesan momentos de
        oscuridad, recordándoles que siempre puede existir un día más para volver a empezar.
      </>
    ),
  },
  {
    icon: Sparkles,
    title: "Misión",
    tint: "bg-amarillo/25 text-amarillo",
    body: (
      <>
        En la <strong className="font-bold">Fundación Un Día Más</strong> transformamos la manera de
        comprender el bienestar emocional. Nuestra misión es prevenir el aislamiento a través del
        arte, la música y la escucha activa, construyendo puentes de esperanza que permitan a cada
        individuo encontrar un camino para vivir un día más. Porque toda persona merece ser
        escuchada, acompañada y encontrar una razón, una oportunidad y{" "}
        <strong className="font-bold text-violeta">un camino para vivir un día más</strong>.
      </>
    ),
  },
  {
    icon: Eye,
    title: "Visión",
    tint: "bg-accent text-violeta",
    body: (
      <>
        Para 2035, la <strong className="font-bold">Fundación Un Día Más</strong> será un referente
        regional en el acompañamiento emocional alternativo, consolidando una red de apoyo donde
        ninguna persona tenga que enfrentar en silencio una crisis emocional. A través de programas
        de alto impacto, investigación, tecnología y alianzas estratégicas, reduciremos las brechas
        de acceso y contribuiremos a construir una sociedad donde pedir ayuda sea un acto de
        valentía.
      </>
    ),
  },
];

const IMPACTO = [
  {
    img: cardHistorias,
    tag: "HISTORIAS",
    tagClass: "bg-lavanda/25 text-violeta",
    title: "Historias que merecen ser escuchadas",
    body: "Conoce testimonios reales de resiliencia, comunidad y esperanza.",
    cta: "Ver historias",
  },
  {
    img: cardEventos,
    tag: "EVENTOS",
    tagClass: "bg-azul/15 text-azul",
    title: "Encuentros y comunidad",
    body: "Participa en nuestros encuentros, talleres artísticos y actividades comunitarias.",
    cta: "Ver eventos",
  },
  {
    img: cardVoluntariado,
    tag: "VOLUNTARIADO",
    tagClass: "bg-amarillo/40 text-tinta",
    title: "Sé parte del cambio",
    body: "Únete a nuestro equipo y sé parte del cambio en la vida de otras personas.",
    cta: "Ver voluntariado",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SiteHeader />
      <MobileNav />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-secondary/40">
          <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-8 px-6 pt-8 pb-12 md:grid-cols-2 md:gap-4 md:pt-36 md:pb-20 lg:px-[72px]">
            <div className="order-2 md:order-1">
              <h1 className="text-[2.6rem] leading-[1.05] font-light tracking-tight text-lavanda md:text-[3.6rem] lg:text-[4.2rem]">
                Un espacio
                <br className="hidden md:block" /> seguro para
                <br />
                <span className="text-gradient-brand font-bold">volver a brillar</span>
              </h1>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" className="btn-base btn-primary">
                  Necesito ayuda
                </button>
                <button type="button" className="btn-base btn-tertiary">
                  Quiero ayudar
                </button>
              </div>
            </div>

            <Reveal
              delay={120}
              className="order-3 md:absolute md:bottom-14 md:left-[34%] md:z-20 md:w-[440px]"
            >
              <div
                className="mt-10 rounded-3xl bg-card p-6 md:mt-0"
                style={{ boxShadow: "var(--shadow-n3)" }}
              >
                <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-azul/10 px-3 py-1.5 text-azul">
                  <span className="h-1.5 w-1.5 rounded-full bg-azul" />
                  Salud mental con propósito
                </span>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-muted-foreground">
                  Transformamos el silencio en música, el dolor en propósito y la soledad en una
                  comunidad que sostiene.
                </p>
              </div>
            </Reveal>


            <div className="order-1 md:order-2 md:-mr-[72px]">
              <img
                src={heroImg}
                alt="Dos mujeres conversando en un espacio de escucha activa"
                width={1408}
                height={1104}
                className="h-[280px] w-full rounded-3xl object-cover object-center md:h-[560px] md:rounded-l-[40px] md:rounded-r-none"
              />
            </div>
          </div>
        </section>

        {/* ESENCIA */}
        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto w-full max-w-[900px] px-6 lg:px-[72px]">
            <Reveal className="text-center">
              <p className="eyebrow text-muted-foreground">Nuestra esencia</p>
              <h2 className="mt-3 text-3xl font-light tracking-tight md:text-[2.3rem]">
                Para volver a empezar
              </h2>
            </Reveal>

            <div className="mt-10 divide-y divide-border/70">
              {ESENCIA.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <article className="group flex gap-4 py-8 md:gap-6">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${item.tint}`}
                    >
                      <item.icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-[0.98rem] leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACTO */}
        <section className="bg-[#FAFAF8] py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Impacto</p>
              <h2 className="mt-3 text-3xl font-light tracking-tight md:text-[2.3rem]">
                Explora nuestro impacto
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {IMPACTO.map((card, i) => (
                <Reveal key={card.title} delay={i * 110}>
                  <button
                    type="button"
                    aria-label={card.cta}
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
                        width={900}
                        height={700}
                        className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-5">
                      <span
                        className={`eyebrow w-fit rounded-full px-2.5 py-1 ${card.tagClass}`}
                      >
                        {card.tag}
                      </span>
                      <span className="mt-3 block text-lg leading-snug font-bold">
                        {card.title}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {card.body}
                      </span>
                      <span className="mt-4 flex items-center gap-1.5 text-sm font-bold text-violeta">
                        {card.cta}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DONACIÓN */}
        <section className="bg-accent/60 py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal>
              <div
                className="grid overflow-hidden rounded-[32px] bg-card md:h-[340px] md:grid-cols-[0.85fr_1.15fr]"
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
                  <p className="eyebrow text-muted-foreground">Apóyanos</p>
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

        {/* ALIADOS */}
        <section className="border-t border-border/60 bg-[#FFFFFF] py-14">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal className="text-center">
              <p className="eyebrow text-muted-foreground">
                Instituciones que confían en nosotros
              </p>
              <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
                {["LOGO_1", "LOGO_2", "LOGO_3", "LOGO_4", "LOGO_5"].map((l) => (
                  <span
                    key={l}
                    className="cursor-default text-center text-lg font-bold tracking-widest text-muted-foreground/40 transition-colors duration-300 hover:text-violeta/70"
                  >
                    {l}
                  </span>
                ))}
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
            <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-muted-foreground">
              Unidos por la salud mental y el bienestar emocional de nuestra comunidad.
            </p>
          </div>
          <div>
            <p className="eyebrow text-violeta">Enlaces</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {["Privacidad", "Términos", "Nosotros"].map((l) => (
                <li key={l}>
                  <span className="cursor-default transition-colors duration-300 hover:text-violeta">{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-violeta">Contacto</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>info@fundacionundiamas.org</li>
              <li>+57 300 000 0000</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-violeta">Síguenos</p>
            <div className="mt-4 flex gap-3">
              {["Facebook", "YouTube", "Instagram"].map((red) => (
                <span
                  key={red}
                  aria-label={red}
                  className="grid h-10 w-10 cursor-default place-items-center rounded-full bg-card text-violeta transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
                  style={{ boxShadow: "var(--shadow-n1)" }}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border/60 py-5">
          <p className="mx-auto w-full max-w-[1280px] px-6 text-xs text-muted-foreground lg:px-[72px]">
            © 2026 Fundación Un Día Más. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
