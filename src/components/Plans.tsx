import { Check, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

const BENEFITS = [
  "Sem fidelidade",
  "Sem multa",
  "Débito automático no cartão",
  "Mais liberdade",
  "Ambiente climatizado",
  "Variedade de equipamentos",
];

export function Plans() {
  return (
    <section id="planos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="label-kicker">Planos</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Escolha como você
            <br />
            <span className="text-primary">quer treinar.</span>
          </h2>
        </div>

        <div className="reveal mx-auto mt-12 max-w-xl">
          <div className="surface-card relative overflow-hidden rounded-2xl p-7 sm:p-10">
            <span
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-[100px]"
              style={{ background: "color-mix(in oklab, var(--primary) 35%, transparent)" }}
              aria-hidden
            />
            <span className="inline-block rounded-full border border-primary/50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Plano mensal
            </span>
            <p className="mt-6 font-display text-3xl sm:text-4xl">Consulte nossos planos</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Fale com a Rafitness e confira as condições disponíveis.
            </p>

            <ul className="mt-8 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-silver">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary w-full hover:btn-primary-hover"
              >
                Quero ser aluno
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-ghost w-full hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> Falar com a Rafitness
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
