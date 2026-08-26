import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { Structure } from "@/components/Structure";
import { Equipment } from "@/components/Equipment";
import { Plans } from "@/components/Plans";
import { Membership } from "@/components/Membership";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Rafitness Gym | Academia em Cuiabá - MT";
const DESCRIPTION =
  "Rafitness Gym em Cuiabá - MT. Academia com ambiente climatizado, variedade de equipamentos e estrutura para você treinar, evoluir e alcançar seus objetivos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "academia em Cuiabá, academia Cristo Rei, Rafitness Gym, academia Cuiabá MT, musculação Cuiabá, academia climatizada Cuiabá",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ExerciseGym",
          name: "Rafitness Gym",
          description: DESCRIPTION,
          telephone: "+55 65 98170-6248",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Alves de Oliveira, 2150",
            addressLocality: "Cuiabá",
            addressRegion: "MT",
            postalCode: "78118-081",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "2",
          },
          sameAs: ["https://www.instagram.com/p/DbbnE6TgnZr/"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Structure />
        <Equipment />
        <Plans />
        <Membership />
        <Testimonials />
        <Gallery />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
