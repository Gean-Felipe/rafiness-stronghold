import { ArrowRight } from "lucide-react";
import musculacao from "@/assets/musculacao.jpg";
import recepcao from "@/assets/recepcao.jpg";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 sm:py-28" style={{ backgroundColor: "var(--navy)" }}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative">
          <img
            src={musculacao}
            alt="Área de musculação ampla e climatizada da Rafitness Gym"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-xl object-cover shadow-[var(--shadow-panel)]"
          />
          <img
            src={recepcao}
            alt="Recepção da Rafitness Gym"
            width={1280}
            height={960}
            loading="lazy"
            className="absolute -bottom-10 right-0 hidden w-1/2 rounded-xl border-4 border-background object-cover shadow-[var(--shadow-panel)] sm:block lg:-right-8"
          />
          <div
            className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full blur-[90px]"
            style={{ background: "color-mix(in oklab, var(--primary) 40%, transparent)" }}
            aria-hidden
          />
        </div>

        <div className="reveal">
          <p className="label-kicker">Sobre a Rafitness</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Aqui, seu esforço <span className="text-primary">tem propósito.</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              A Rafitness Gym foi criada para quem busca um espaço completo para cuidar da saúde,
              desenvolver força e evoluir de forma consistente.
            </p>
            <p>
              Nossa proposta é oferecer um ambiente amplo, climatizado e equipado, com variedade de
              aparelhos e atendimento próximo para tornar sua experiência melhor a cada treino.
            </p>
            <p className="text-silver">
              Não importa se você está começando agora ou já treina há anos. Aqui existe espaço para
              sua evolução.
            </p>
          </div>
          <a href="#estrutura" className="btn-base btn-primary mt-8 hover:btn-primary-hover">
            Conheça nosso espaço <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
