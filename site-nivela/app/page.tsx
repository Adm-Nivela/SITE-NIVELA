import {
  Hero,
  About,
  Services,
  Benefits,
  BlogPreview,
  CTA,
} from "@/components/home";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  title: "Regularização de Imóveis e Topografia no RJ",
  description:
    "Regularização de imóveis, topografia e agrimensura no Rio de Janeiro para proprietários que precisam corrigir áreas, conferir limites e tomar decisões com segurança técnica.",
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <BlogPreview />
        <CTA />
      </main>
    </>

  );
}
