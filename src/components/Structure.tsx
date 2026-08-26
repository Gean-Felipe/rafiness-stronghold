import musculacao from "@/assets/musculacao.jpg";
import cardio from "@/assets/cardio.jpg";
import forca from "@/assets/forca.jpg";
import funcional from "@/assets/funcional.jpg";
import recepcao from "@/assets/recepcao.jpg";

const TILES = [
  { src: musculacao, alt: "Área de musculação da Rafitness Gym", label: "Musculação", span: "sm:col-span-2 sm:row-span-2" },
  { src: cardio, alt: "Área de cardio com esteiras e bikes", label: "Cardio", span: "" },
  { src: recepcao, alt: "Recepção e atendimento da Rafitness Gym", label: "Recepção", span: "" },
  { src: forca, alt: "Barras e anilhas na área de peso livre", label: "Peso livre", span: "" },
  { src: funcional, alt: "Espaço de treino funcional com kettlebells e cordas", label: "Funcional", span: "" },
];

export function Structure() {
  return (
    <section id="estrutura" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="label-kicker reveal">Estrutura</p>
        <h2 className="reveal mt-4 max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl">
          Uma estrutura pensada
          <br />
          <span className="text-primary">para o seu treino.</span>
        </h2>

        <div className="mt-12 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[200px]">
          {TILES.map((tile, i) => (
            <figure
              key={tile.label}
              className={`reveal group relative overflow-hidden rounded-xl border border-border ${tile.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />
              <figcaption className="absolute bottom-4 left-4 font-display text-lg tracking-wide">
                <span className="mr-2 inline-block h-2 w-2 -translate-y-0.5 bg-primary" aria-hidden />
                {tile.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
