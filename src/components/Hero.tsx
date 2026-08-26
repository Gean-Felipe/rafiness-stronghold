import { ArrowRight, Check } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { SITE } from "@/lib/site";

const BULLETS = ["Ambiente climatizado", "Variedade de equipamentos", "Atendimento próximo"];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16">
      <img
        src={hero}
        alt="Interior da academia Rafitness Gym com iluminação laranja e equipamentos de musculação"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: "var(--gradient-hero)" }} />
      <div
        className="absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full blur-[130px]"
        style={{ background: "color-mix(in oklab, var(--primary) 30%, transparent)" }}
        aria-hidden
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="label-kicker reveal flex items-center gap-3">
            <span className="h-px w-10 bg-primary" aria-hidden />
            Academia em Cuiabá — Cristo Rei
          </p>

          <h1 className="reveal mt-5 font-display text-[13vw] leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl">
            Seu próximo nível
            <br />
            <span className="text-primary">começa aqui.</span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-base text-silver/80 sm:text-lg">
            Treine em um ambiente completo, climatizado e preparado para você buscar mais força, saúde
            e evolução todos os dias.
          </p>

          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary hover:btn-primary-hover"
            >
              Quero treinar <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#sobre" className="btn-base btn-ghost hover:border-primary hover:text-primary">
              Conhecer a Rafitness
            </a>
          </div>

          <ul className="reveal mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-silver/85">
                <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {b}
              </li>
            ))}
          </ul>

          <div className="reveal mt-12 inline-flex items-center gap-4 border-l-2 border-primary pl-4">
            <div>
              <p className="font-display text-2xl leading-none">Rafitness Gym</p>
              <p className="mt-1 text-[11px] tracking-[0.3em] text-muted-foreground">{SITE.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
