import Link from "next/link";

import { getCmsPage } from "@/lib/pages";
import WhatsAppLink from "@/components/WhatsAppLink";

export function generateMetadata() {
  const cmsPage = getCmsPage("servicos");

  const title =
    cmsPage?.title ?? "Regularização, Topografia e Agrimensura no RJ";

  const description =
    cmsPage?.description ??
    "Regularização de imóveis, levantamento topográfico, agrimensura, georreferenciamento rural, usucapião, retificação e demarcação no Rio de Janeiro.";

  return {
    alternates: {
      canonical: "/servicos",
    },
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/servicos",
    },
  };
}

const services = [
  {
    id: "regularizacao-de-imoveis",
    icon: "RG",
    title: "Regularização de Imóveis",
    description:
      "Diagnóstico e suporte técnico para imóveis urbanos e rurais com divergências entre documentos, área, limites e realidade de campo. O trabalho pode envolver levantamento, conferência de área, planta, memorial, georreferenciamento e outras peças técnicas conforme a situação.",
  },
  {
    id: "levantamento-topografico",
    icon: "LT",
    title: "Levantamento Topográfico e Planialtimétrico",
    description:
      "Medição e representação técnica de terrenos urbanos e rurais para regularização, conferência de área, projetos, divisão, demarcação e outras finalidades. O método e a precisão são definidos conforme o objetivo do trabalho.",
  },
  {
    id: "georreferenciamento-rural",
    icon: "GR",
    title: "Georreferenciamento de Imóvel Rural",
    description:
      "Análise documental, levantamento dos limites, processamento dos dados e preparação das peças técnicas para imóveis rurais, incluindo suporte à certificação no SIGEF quando aplicável ao caso.",
  },
  {
    id: "usucapiao-retificacao",
    icon: "UR",
    title: "Usucapião e Retificação de Área",
    description:
      "Levantamento, planta, memorial descritivo e responsabilidade técnica para apoiar procedimentos de usucapião, retificação de área e correção da descrição do imóvel.",
  },
  {
    id: "divisao-demarcacao",
    icon: "DD",
    title: "Divisão e Demarcação de Áreas",
    description:
      "Definição e materialização de limites, conferência de confrontações e produção de peças técnicas para divisão, demarcação, desmembramento ou reorganização de áreas, conforme a finalidade e as condições do imóvel.",
  },
  {
    id: "cartografia-inteligencia-territorial",
    icon: "CT",
    title: "Cartografia e Inteligência Territorial",
    description:
      "Organização, análise e representação de informações geográficas para apoiar decisões patrimoniais, estudos territoriais, planejamento e produção de mapas e plantas técnicas.",
  },
];

export default function ServicosPage() {
  const cmsPage = getCmsPage("servicos");

  return (
    <main>
      <section className="sobre-hero">
        <span className="section-label">Serviços da Nivela</span>

        <h1>
          {cmsPage?.title ??
            "Regularização de imóveis, topografia e agrimensura no Rio de Janeiro"}
        </h1>

        <p>
          {cmsPage?.description ||
            "A Nivela reúne diagnóstico, levantamento de campo e peças técnicas para ajudar proprietários, advogados e investidores a regularizar, conferir e tomar decisões sobre imóveis urbanos e rurais."}
        </p>
      </section>

      {cmsPage?.body ? (
        <section className="section cms-page-section">
          <div
            className="cms-content"
            dangerouslySetInnerHTML={{ __html: cmsPage.html }}
          />
        </section>
      ) : null}

      <section className="section services-page-section">
        <span className="section-label">Principais soluções</span>

        <div className="servicos-full">
          {services.map((service) => (
            <article
              className="servico-row"
              id={service.id}
              key={service.id}
            >
              <div className="icon-big" aria-hidden="true">
                {service.icon}
              </div>

              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>

              <Link
                href={`/contato?servico=${encodeURIComponent(service.title)}`}
                className="cta-sm"
              >
                Solicitar análise
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>
          Não sabe qual serviço seu imóvel precisa?{" "}
          <em>Comece pelo diagnóstico.</em>
        </h2>

        <div className="cta-btns">
          <WhatsAppLink
            className="btn-whatsapp"
            location="servicos"
          >
            Falar pelo WhatsApp
          </WhatsAppLink>

          <Link href="/contato" className="btn-gold">
            Solicitar Diagnóstico Técnico
          </Link>
        </div>
      </section>
    </main>
  );
}