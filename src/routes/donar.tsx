import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";

import donacionManos from "@/assets/donacion-manos.jpg";
import donarAhora from "@/assets/donar-ahora.jpg";
import donarAlianzas from "@/assets/donar-alianzas.jpg";
import donarEmpresas from "@/assets/donar-empresas.jpg";
import donarEspecie from "@/assets/donar-especie.jpg";
import { Logo } from "@/components/site/Logo";
import { MobileNav } from "@/components/site/MobileNav";
import { Reveal } from "@/components/site/Reveal";
import { SiteHeader } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/donar")({
  head: () => ({
    meta: [
      { title: "Donar | Fundación Un Día Más" },
      {
        name: "description",
        content:
          "Tu aporte puede cambiar una vida. Dona dinero o en especie, como persona o como empresa, y sostén nuestros programas de salud mental y acogida.",
      },
      { property: "og:title", content: "Donar | Fundación Un Día Más" },
      {
        property: "og:description",
        content:
          "Cada donación nos ayuda a brindar orientación, educación emocional y acompañamiento psicosocial a quien lo necesita.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Donar,
});

type DonCard = {
  title: string;
  body: string;
  cta: string;
  img: string;
  alt: string;
};

const PERSONAS: DonCard[] = [
  {
    title: "Donar ahora",
    body: "Realiza un aporte económico directo, único o mensual, y sé parte de la solución sosteniendo nuestros programas de salud mental y acogida.",
    cta: "Hacer donación monetaria",
    img: donarAhora,
    alt: "Grupo de voluntarios uniendo sus manos al aire libre",
  },
  {
    title: "Donar en especie",
    body: "Apóyanos donando materiales educativos, herramientas de arte, o insumos que optimizan el desarrollo de nuestros talleres de bienestar.",
    cta: "Ver lista de necesidades",
    img: donarEspecie,
    alt: "Cajas con materiales educativos y herramientas de arte donadas",
  },
];

const EMPRESAS: DonCard[] = [
  {
    title: "Donaciones Corporativas",
    body: "Financia de manera directa proyectos específicos de educación emocional en escuelas o impulsa la sostenibilidad de nuestras líneas de emergencia.",
    cta: "Donar como empresa",
    img: donarEmpresas,
    alt: "Equipo de trabajo reunido alrededor de una mesa",
  },
  {
    title: "Alianzas y Especie",
    body: "Aporta recursos técnicos, espacios de capacitación o productos propios que beneficien directamente el ecosistema de apoyo de la fundación.",
    cta: "Proponer una alianza",
    img: donarAlianzas,
    alt: "Dos manos uniendo piezas de rompecabezas de colores",
  },
];

function DonationCard({ card, delay }: { card: DonCard; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article
        className="group h-full overflow-hidden rounded-[28px] bg-card transition-all duration-400 ease-out hover:-translate-y-1.5"
        style={{ boxShadow: "var(--shadow-n1)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "var(--shadow-n3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "var(--shadow-n1)";
        }}
      >
        <div className="overflow-hidden">
          <img
            src={card.img}
            alt={card.alt}
            loading="lazy"
            width={1200}
            height={900}
            className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] md:h-[210px]"
          />
        </div>
        <div className="p-7 md:p-8">
          <h3 className="text-xl font-bold text-violeta md:text-[1.4rem]">{card.title}</h3>
          <p className="mt-3 max-w-[46ch] text-[0.95rem] leading-relaxed text-muted-foreground">
            {card.body}
          </p>
          <button
            type="button"
            className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-violeta transition-all duration-300 hover:-translate-y-0.5 hover:bg-lavanda/25 focus-visible:ring-4 focus-visible:ring-lavanda/40 focus-visible:outline-none"
          >
            <Heart className="h-4 w-4 shrink-0" strokeWidth={2.4} />
            {card.cta}
          </button>
        </div>
      </article>
    </Reveal>
  );
}

function Donar() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SiteHeader />
      <MobileNav />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-background">
          <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-[92px] pb-14 md:pt-32 md:pb-24 lg:px-[72px]">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_480px] md:gap-14">
              <Reveal>
                <h1 className="text-[2.4rem] leading-[1.05] tracking-tight md:text-[3.4rem]">
                  <span className="block font-light text-lavanda">Tu aporte puede</span>
                  <span className="block font-bold text-gradient-brand">cambiar una vida</span>
                </h1>

                <div className="mt-8 hidden flex-wrap gap-3 md:flex">
                  <button type="button" className="btn-base btn-support px-7">
                    Quiero donar
                    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.4} />
                  </button>
                  <button type="button" className="btn-base btn-tertiary px-7">
                    Quiero ayudar
                  </button>
                </div>
              </Reveal>

              <Reveal delay={80} className="md:justify-self-end">
                <div className="relative md:h-[420px] md:w-[480px]">
                  <img
                    src={donacionManos}
                    alt="Mano abierta recibiendo luz cálida"
                    width={1200}
                    height={900}
                    className="h-56 w-full rounded-[28px] object-cover md:h-[420px] md:w-[480px]"
                    style={{ boxShadow: "var(--shadow-n2)" }}
                  />

                  <div
                    className="relative z-10 mt-6 rounded-[24px] bg-card p-6 md:absolute md:-bottom-12 md:-left-[280px] md:mt-0 md:w-[540px] md:p-7"
                    style={{ boxShadow: "var(--shadow-n2)" }}
                  >
                    <p className="eyebrow text-[#9981C1]">• Un día más puede comenzar contigo.</p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                      Cada donación nos ayuda a brindar orientación, educación emocional,
                      acompañamiento psicosocial y atención en salud mental a personas que
                      necesitan una oportunidad para continuar.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-7 flex flex-col gap-3 md:hidden">
              <button type="button" className="btn-base btn-support w-full">
                Quiero donar
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.4} />
              </button>
              <button type="button" className="btn-base btn-tertiary w-full">
                Quiero ayudar
              </button>
            </div>
          </div>
        </section>

        {/* DONACIÓN PERSONAS */}
        <section className="bg-lila-soft/60 py-14 md:py-20">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal>
              <h2 className="text-3xl font-light tracking-tight text-violeta md:text-center md:text-[2.3rem]">
                Donación Personas
              </h2>
              <p className="mt-4 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted-foreground md:mx-auto md:text-center">
                Tu generosidad personal es el motor que nos permite transformar vidas. Elige cómo
                quieres sumar hoy:
              </p>
            </Reveal>

            <div className="mt-10 grid gap-7 md:grid-cols-2 md:gap-8">
              {PERSONAS.map((card, i) => (
                <DonationCard key={card.title} card={card} delay={i * 90} />
              ))}
            </div>
          </div>
        </section>

        {/* DONACIÓN EMPRESAS */}
        <section className="bg-rosa-soft py-14 md:py-20">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[72px]">
            <Reveal>
              <h2 className="text-3xl font-light tracking-tight text-violeta md:text-center md:text-[2.3rem]">
                Donación Empresas
              </h2>
              <p className="mt-4 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted-foreground md:mx-auto md:text-center">
                Tu empresa puede ser parte del cambio social. Juntos podemos construir un impacto
                mayor y responsable:
              </p>
            </Reveal>

            <div className="mt-10 grid gap-7 md:grid-cols-2 md:gap-8">
              {EMPRESAS.map((card, i) => (
                <DonationCard key={card.title} card={card} delay={i * 90} />
              ))}
            </div>
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
