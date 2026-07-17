import Link from "next/link";

import { getCmsPage } from "@/lib/pages";
import { whatsappHref } from "@/lib/whatsapp";

export function generateMetadata() {
  const cmsPage = getCmsPage("sobre");
  const title = cmsPage?.title ?? "Sobre a Nivela";
  const description =
    cmsPage?.description ??
    "Conheça a Nivela: engenharia, agrimensura e topografia com rigor técnico, clareza e responsabilidade patrimonial.";

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
      "Oferecer serviços de topografia, agrimensura e regularização fundiária com rigor técnico e responsabilidade, transformando medições em segurança patrimonial para o cliente final.",
  },
  {
    title: "Visão",
    description:
      "Ser referência regional em qualidade técnica para proprietários de imóveis, crescendo de forma sustentável com base na confiança conquistada serviço a serviço.",
  },
  {
    title: "Valores",
    description:
      "Rigor técnico sem concessões. Transparência na comunicação. Responsabilidade em cada laudo. Educação como diferencial. Qualidade acima de quantidade.",
  },
];

const steps = [
  {
    number: "01",
    title: "Avaliação técnica inicial",
    description:
      "Entendemos a demanda do cliente, verificamos a documentação existente e identificamos o tipo de serviço adequado antes de emitir qualquer proposta.",
  },
  {
    number: "02",
    title: "Execução em campo",
    description:
      "Levantamento com equipamento calibrado, seguindo normas ABNT e especificações do INCRA quando aplicável. Registro fotográfico e rastreamento de pontos.",
  },
  {
    number: "03",
    title: "Processamento e elaboração técnica",
    description:
      "Cálculo de coordenadas, elaboração de plantas, memoriais descritivos e demais documentos com software especializado e conferência de qualidade.",
  },
  {
    number: "04",
    title: "Entrega e ART",
    description:
      "Entrega dos arquivos, emissão de ART e suporte ao cliente para uso da documentação junto a cartórios, INCRA ou juízo.",
  },
];

export default function SobrePage() {
  const cmsPage = getCmsPage("sobre");

  return (
    <main>
      <section className="sobre-hero">
        <span className="section-label">Quem somos</span>
        <h1>{cmsPage?.title ?? "Engenharia com propósito, técnica com responsabilidade"}</h1>
        <p>
          {cmsPage?.description ||
            "A Nivela nasceu da convicção de que cada proprietário de imóvel merece acesso a serviços técnicos de alto nível, com clareza, rigor e documentação que protege seu patrimônio."}
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
        <h2 className="section-title">Método claro, processo documentado</h2>
        <p className="section-sub">
          Cada projeto segue um fluxo estruturado que garante precisão,
          rastreabilidade e entrega dentro das normas.
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
          Pronto para resolver a situação <em>técnica do seu imóvel?</em>
        </h2>
        <div className="cta-btns">
          <a
            href={whatsappHref}
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <Link href="/contato" className="btn-gold">
            Solicitar Avaliação
          </Link>
        </div>
      </section>
    </main>
  );
}
