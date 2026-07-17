import {
  Hero,
  About,
  Services,
  Benefits,
  BlogPreview,
  CTA,
} from "@/components/home";

export const metadata = {
  alternates: {
    canonical: "/",
  },
  title: "Agrimensura, topografia e regularização fundiária",
  description:
    "Serviços de agrimensura, topografia, cartografia e regularização fundiária para proprietários que precisam de segurança técnica.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <BlogPreview />
      <CTA />
    </main>
  );
}
