import { MapPin, Phone, Navigation, MessageCircle, Instagram } from "lucide-react";
import { SITE } from "@/lib/site";

export function Location() {
  return (
    <section id="localizacao" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal">
          <p className="label-kicker">Localização</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Venha treinar <span className="text-primary">com a gente.</span>
          </h2>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <address className="not-italic text-silver">
                {SITE.address.street}
                <br />
                {SITE.address.district}
                <br />
                {SITE.address.city}
                <br />
                {SITE.address.zip}
              </address>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <a href={SITE.phoneHref} className="text-silver transition-colors hover:text-primary">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-4">
              <Instagram className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver transition-colors hover:text-primary"
              >
                Instagram da Rafitness
              </a>
            </li>
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary hover:btn-primary-hover"
            >
              <Navigation className="h-4 w-4" aria-hidden /> Como chegar
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

        <div className="reveal overflow-hidden rounded-xl border border-border shadow-[var(--shadow-panel)]">
          <iframe
            title="Mapa com a localização da Rafitness Gym em Cuiabá - MT"
            src="https://www.google.com/maps?q=R.%20Alves%20de%20Oliveira%2C%202150%20-%20Cristo%20Rei%2C%20Cuiab%C3%A1%20-%20MT%2C%2078118-081&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full border-0 sm:h-[460px]"
          />
        </div>
      </div>
    </section>
  );
}
