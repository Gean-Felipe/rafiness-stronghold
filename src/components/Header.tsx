import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label="Rafitness Gym — início">
          <img src={logo} alt="Logo Rafitness Gym" width={56} height={56} className="h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14" />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none text-foreground sm:text-xl">
              Rafitness <span className="text-primary">Gym</span>
            </span>
            <span className="hidden text-[10px] tracking-[0.28em] text-muted-foreground sm:block">
              {SITE.tagline}
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative text-xs font-semibold uppercase tracking-[0.16em] text-silver/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary hidden px-5 py-2.5 text-xs hover:btn-primary-hover sm:inline-flex"
          >
            Quero treinar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="btn-base btn-ghost p-2.5 lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Navegação mobile" className="px-4 py-4 sm:px-6">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 font-display text-xl text-silver transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-base btn-primary mt-5 w-full"
          >
            Quero treinar
          </a>
        </nav>
      </div>
    </header>
  );
}
