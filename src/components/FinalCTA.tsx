import { ArrowRight, MessageCircle } from "lucide-react";
import cta from "@/assets/cta.jpg";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <img
        src={cta}
        alt="Atleta segurando barra em treino intenso"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-background/80" />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40"
        style={{ background: "linear-gradient(180deg, transparent, var(--background))" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-24 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full blur-[130px]"
        style={{ background: "color-mix(in oklab, var(--primary) 28%, transparent)" }}
        aria-hidden
      />

      <div className="reveal mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="label-kicker">Comece agora</span>
        <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl">
          Seu objetivo
          <br />
          <span className="text-primary">não vai se alcançar sozinho.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-silver/85">
          Comece hoje a construir uma rotina mais forte, saudável e consistente.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary hover:btn-primary-hover"
          >
            Quero treinar <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-ghost hover:border-primary hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" aria-hidden /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
