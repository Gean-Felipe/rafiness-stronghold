import { Dumbbell, HeartPulse, Weight, Activity } from "lucide-react";
import musculacao from "@/assets/musculacao.jpg";
import cardio from "@/assets/cardio.jpg";
import forca from "@/assets/forca.jpg";
import funcional from "@/assets/funcional.jpg";

const CATEGORIES = [
  {
    icon: Dumbbell,
    title: "Musculação",
    text: "Aparelhos para trabalhar diferentes grupos musculares com técnica e progressão.",
    img: musculacao,
    alt: "Equipamentos de musculação",
  },
  {
    icon: HeartPulse,
    title: "Cardio",
    text: "Opções para aquecer, condicionar e manter o ritmo do seu treino.",
    img: cardio,
    alt: "Equipamentos de cardio",
  },
  {
    icon: Weight,
    title: "Força",
    text: "Barras, anilhas e halteres para quem busca carga e evolução consistente.",
    img: forca,
    alt: "Área de peso livre",
  },
  {
    icon: Activity,
    title: "Treino funcional",
    text: "Espaço e acessórios para treinos dinâmicos e movimentos completos.",
    img: funcional,
    alt: "Área de treino funcional",
  },
];

export function Equipment() {
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "var(--navy)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="label-kicker">Equipamentos</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Equipamentos para <span className="text-primary">ir além.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tenha variedade para montar treinos completos e trabalhar diferentes grupos musculares.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <article
              key={cat.title}
              className="reveal group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute bottom-3 left-4 grid h-10 w-10 place-items-center rounded-md border border-primary/50 bg-background/70 backdrop-blur">
                  <cat.icon className="h-5 w-5 text-primary" aria-hidden />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
