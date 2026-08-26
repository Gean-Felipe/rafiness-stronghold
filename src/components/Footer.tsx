import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border" style={{ backgroundColor: "var(--navy)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo Rafitness Gym" width={64} height={64} loading="lazy" className="h-14 w-14 object-contain" />
            <div>
              <p className="font-display text-xl">
                Rafitness <span className="text-primary">Gym</span>
              </p>
              <p className="text-[10px] tracking-[0.28em] text-muted-foreground">{SITE.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Academia em Cuiabá - MT, no bairro Cristo Rei. Ambiente climatizado, variedade de
            equipamentos e atendimento próximo.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="font-display text-sm tracking-[0.2em] text-primary">Navegação</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-silver/80 transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm tracking-[0.2em] text-primary">Contato</h2>
          <ul className="mt-4 space-y-3.5 text-sm text-silver/80">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a href={SITE.phoneHref} className="transition-colors hover:text-primary">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <address className="not-italic">
                {SITE.address.street}
                <br />
                {SITE.address.district} - {SITE.address.city}
              </address>
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                @rafitness
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
          © 2026 Rafitness Gym. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
