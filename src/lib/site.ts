export const SITE = {
  name: "Rafitness Gym",
  tagline: "SAÚDE • FORÇA • RESULTADOS",
  phoneDisplay: "(65) 98170-6248",
  phoneHref: "tel:+5565981706248",
  whatsapp:
    "https://wa.me/5565981706248?text=" +
    encodeURIComponent("Olá! Gostaria de conhecer os planos da Rafitness Gym."),
  instagram: "https://www.instagram.com/p/DbbnE6TgnZr/",
  address: {
    street: "R. Alves de Oliveira, 2150",
    district: "Cristo Rei",
    city: "Cuiabá - MT",
    zip: "78118-081",
  },
  maps:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("R. Alves de Oliveira, 2150 - Cristo Rei, Cuiabá - MT, 78118-081"),
  mapsPlace:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Rafitness Gym, R. Alves de Oliveira, 2150 - Cristo Rei, Cuiabá - MT"),
} as const;

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
] as const;
