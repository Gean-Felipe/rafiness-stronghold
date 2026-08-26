import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import musculacao from "@/assets/musculacao.jpg";
import cardio from "@/assets/cardio.jpg";
import forca from "@/assets/forca.jpg";
import funcional from "@/assets/funcional.jpg";
import recepcao from "@/assets/recepcao.jpg";
import cta from "@/assets/cta.jpg";

const IMAGES = [
  { src: musculacao, alt: "Área de musculação da Rafitness Gym" },
  { src: hero, alt: "Ambiente interno da Rafitness Gym com iluminação laranja" },
  { src: cardio, alt: "Área de cardio da Rafitness Gym" },
  { src: recepcao, alt: "Recepção da Rafitness Gym" },
  { src: forca, alt: "Barras e anilhas da Rafitness Gym" },
  { src: funcional, alt: "Espaço de treino funcional da Rafitness Gym" },
  { src: cta, alt: "Aluno treinando com barra na Rafitness Gym" },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % IMAGES.length)), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, next, prev]);

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "var(--navy)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal">
          <p className="label-kicker">Galeria</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Conheça a <span className="text-primary">Rafitness</span>
          </h2>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>button]:mb-4">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ampliar imagem: ${img.alt}`}
              className="reveal group relative block w-full overflow-hidden rounded-xl border border-border break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-background/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagens"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="btn-base btn-ghost absolute right-4 top-4 p-2.5"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Imagem anterior"
            className="btn-base btn-ghost absolute left-3 p-2.5 sm:left-8"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <img
            src={IMAGES[index]!.src}
            alt={IMAGES[index]!.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-auto max-w-[90vw] rounded-xl object-contain shadow-[var(--shadow-panel)]"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próxima imagem"
            className="btn-base btn-ghost absolute right-3 p-2.5 sm:right-8"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
        </div>
      )}
    </section>
  );
}
