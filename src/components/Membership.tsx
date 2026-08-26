import { Unlock, ShieldCheck, CreditCard, PiggyBank } from "lucide-react";

const BLOCKS = [
  { icon: Unlock, title: "Sem fidelidade", text: "Mais liberdade para sua rotina." },
  { icon: ShieldCheck, title: "Sem multa", text: "Sem compromisso de longo prazo." },
  { icon: CreditCard, title: "Débito automático", text: "Mais praticidade para manter sua mensalidade." },
  { icon: PiggyBank, title: "Paga mais barato", text: "Uma opção prática para quem busca treinar com liberdade." },
];

export function Membership() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24" style={{ backgroundColor: "var(--navy)" }}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ backgroundImage: "var(--gradient-orange)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="reveal mx-auto max-w-3xl text-center font-display text-3xl sm:text-4xl lg:text-5xl">
          Por que escolher a <span className="text-primary">mensalidade Rafitness?</span>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BLOCKS.map((b, i) => (
            <div
              key={b.title}
              className="reveal group rounded-xl border border-border bg-background/60 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-primary/40 bg-primary/10">
                <b.icon className="h-6 w-6 text-primary" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
