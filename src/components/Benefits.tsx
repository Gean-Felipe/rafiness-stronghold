import { Snowflake, Dumbbell, Unlock, HeartHandshake } from "lucide-react";

const ITEMS = [
  {
    n: "01",
    icon: Snowflake,
    title: "Ambiente climatizado",
    text: "Treine com mais conforto durante sua rotina.",
  },
  {
    n: "02",
    icon: Dumbbell,
    title: "Variedade de equipamentos",
    text: "Tenha diferentes opções para desenvolver seus treinos.",
  },
  {
    n: "03",
    icon: Unlock,
    title: "Sem fidelidade",
    text: "Mais liberdade para organizar sua rotina.",
  },
  {
    n: "04",
    icon: HeartHandshake,
    title: "Atendimento próximo",
    text: "Um ambiente onde você é bem recebido.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="reveal max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl">
          Mais que uma academia.
          <br />
          <span className="text-primary">Um ambiente para evoluir.</span>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <article
              key={item.n}
              className="reveal group surface-card relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "color-mix(in oklab, var(--primary) 45%, transparent)" }}
                aria-hidden
              />
              <span className="font-display text-4xl text-muted-foreground/40">{item.n}</span>
              <item.icon className="mt-5 h-8 w-8 text-primary" aria-hidden />
              <h3 className="mt-4 font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <span className="mt-6 block h-0.5 w-10 bg-primary transition-all duration-300 group-hover:w-20" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
