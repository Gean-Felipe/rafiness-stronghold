import { Star } from "lucide-react";
import { SITE } from "@/lib/site";

function Stars({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-primary text-primary" aria-hidden />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="label-kicker">Avaliações</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Quem treina, <span className="text-primary">recomenda.</span>
          </h2>
        </div>

        <div className="reveal surface-card mx-auto mt-12 max-w-2xl rounded-2xl p-8 text-center sm:p-10">
          <p className="font-display text-6xl text-primary">5,0</p>
          <div className="mt-3 flex justify-center">
            <Stars label="Nota 5 de 5 no Google" />
          </div>
          <p className="mt-4 font-display text-xl">5,0 no Google</p>
          <p className="mt-1 text-sm text-muted-foreground">2 avaliações</p>
          <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground">
            Avaliação pública da Rafitness Gym no Google. Treinou com a gente? Conte como foi sua
            experiência.
          </p>
          <a
            href={SITE.mapsPlace}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary mt-7 hover:btn-primary-hover"
          >
            Avaliar no Google
          </a>
        </div>
      </div>
    </section>
  );
}
