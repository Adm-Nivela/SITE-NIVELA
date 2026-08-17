import ContatoClient from "./ContatoClient";

export const metadata = {
  alternates: {
    canonical: "/contato",
  },
  title: "Contato e Orçamento",
  description:
    "Fale com a Nivela sobre regularização de imóveis, topografia, agrimensura, georreferenciamento rural e diagnóstico técnico no Rio de Janeiro.",
  openGraph: {
    title: "Contato e Orçamento | Nivela",
    description:
      "Envie os dados do imóvel e fale com a Nivela sobre regularização, topografia, georreferenciamento e outros serviços técnicos.",
    url: "/contato",
  },
};

type ContatoPageProps = {
  searchParams: Promise<{
    assunto?: string;
    servico?: string;
  }>;
};

export default async function ContatoPage({ searchParams }: ContatoPageProps) {
  const { assunto, servico } = await searchParams;

  const initialSubject =
    assunto === "diagnostico-tecnico"
      ? "Diagnóstico técnico"
      : "Orçamento";

  return (
    <ContatoClient
      initialSubject={initialSubject}
      initialService={servico ?? ""}
    />
  );
}