import ContatoClient from "./ContatoClient";

export const metadata = {
  alternates: {
    canonical: "/contato",
  },
  title: "Contato",
  description:
    "Fale com a Nivela para solicitar avaliação técnica, orçamento de topografia, agrimensura ou regularização de imóvel.",
  openGraph: {
    title: "Contato | Nivela",
    description:
      "Envie sua dúvida ou solicite atendimento técnico para o seu imóvel.",
    url: "/contato",
  },
};

type ContatoPageProps = {
  searchParams: Promise<{
    assunto?: string;
  }>;
};

export default async function ContatoPage({ searchParams }: ContatoPageProps) {
  const { assunto } = await searchParams;
  const initialSubject =
    assunto === "avaliacao-tecnica" ? "Dúvida técnica" : "Orçamento";

  return <ContatoClient initialSubject={initialSubject} />;
}
