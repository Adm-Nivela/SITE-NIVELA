import Link from "next/link";

import { getCmsPage } from "@/lib/pages";
import WhatsAppLink from "@/components/WhatsAppLink";

export function generateMetadata() {
  const cmsPage = getCmsPage("sobre");

  const title = "Quem Somos | Agrimensura e Território";

  const description =
    cmsPage?.description ??
    "Conheça a Nivela Território & Patrimônio, empresa especializada em agrimensura, topografia, georreferenciamento e soluções técnicas para imóveis no Rio de Janeiro.";

  return {
    alternates: {
      canonical: "/sobre",
    },
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/sobre",
    },
  };
}

const values = [
  {
    title: "Missão",
    description:
      "Produzir informação territorial confiável para ajudar pessoas e empresas a regularizar, proteger e tomar melhores decisões sobre seus imóveis.",
  },
  {
    title: "Visão",
    description:
      "Ser reconhecida pela confiança técnica, responsabilidade profissional e capacidade de transformar dados territoriais em decisões mais seguras.",
  },
  {
    title: "Valores",
    description:
      "Honestidade, responsabilidade, confiança, respeito, colaboração, dedicação e compromisso com a qualidade técnica.",
  },
];

const steps = [
  {
    number: "01",
    title: "Entender a finalidade",
    description:
      "Começamos entendendo o que o cliente precisa resolver e quais documentos e informações já estão disponíveis.",
  },
  {
    number: "02",
    title: "Analisar documentos e território",
    description:
      "Verificamos os dados disponíveis para identificar divergências, lacunas e pontos que precisam de confirmação técnica.",
  },
  {
    number: "03",
    title: "Planejar e executar o trabalho",
    description:
      "Definimos o método adequado, realizamos o levantamento quando necessário e processamos os dados com controle de qualidade.",
  },
  {
    number: "04",
    title: "Produzir e entregar as peças técnicas",
    description:
      "Elaboramos plantas, memoriais, relatórios e demais entregáveis previstos no escopo, com responsabilidade técnica compatível com o serviço.",
  },
];

export default function SobrePage() {
  const cmsPage = getCmsPage("sobre");

  return (
    <main>
      <section className="sobre-hero">
        <span className="section-label">Quem somos</span>

        <h1>
          {cmsPage?.title ??
            "Território, patrimônio e responsabilidade técnica"}
        </h1>

        <p>
          {cmsPage?.description ||
            "A Nivela atua com agrimensura, topografia, georreferenciamento e análise territorial para transformar documentos, medições e dados de campo em informações confiáveis para decisões sobre imóveis."}
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

      <section className="section about-section">
        <span className="section-label">Missão, Visão e Valores</span>

        <div className="mvv-grid">
          {values.map((item) => (
            <article className="mvv-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section method-section">
        <span className="section-label">Como trabalhamos</span>

        <h2 className="section-title">
          Método técnico, processo documentado
        </h2>

        <p className="section-sub">
          Cada trabalho parte da finalidade do imóvel e segue um processo de
          análise, planejamento, campo, controle de qualidade e produção das
          peças técnicas previstas no escopo.
        </p>

        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <div className="step-num">{step.number}</div>

              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>
          Precisa entender ou regularizar a situação{" "}
          <em>técnica do seu imóvel?</em>
        </h2>

        <div className="cta-btns">
          <WhatsAppLink
            className="btn-whatsapp"
            location="sobre"
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