import Link from "next/link";

import { getCmsPage } from "@/lib/pages";
import { whatsappHref } from "@/lib/whatsapp";

export function generateMetadata() {
  const cmsPage = getCmsPage("servicos");
  const title = cmsPage?.title ?? "Serviços técnicos";
  const description =
    cmsPage?.description ??
    "Levantamento topográfico, georreferenciamento, demarcação, plantas técnicas e regularização fundiária com responsabilidade técnica.";

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
    icon: "LT",
    title: "Levantamento Topográfico",
    description:
      "Levantamento planialtimétrico e cadastral de terrenos urbanos e rurais. Essencial para projetos de construção, regularização, partilha e disputas de área.",
  },
  {
    icon: "GR",
    title: "Georreferenciamento de Imóvel Rural",
    description:
      "Exigido pelo INCRA para transferência e registro de imóveis rurais. Realizamos o georreferenciamento com precisão submétrica e entregamos a documentação completa para averbação.",
  },
  {
    icon: "DD",
    title: "Demarcação e Divisão de Terras",
    description:
      "Fixação de marcos e definição de limites em campo, com elaboração de planta e memorial descritivo. Indicado para partilha, herança e resolução de conflitos de divisa.",
  },
  {
    icon: "CP",
    title: "Cartografia e Plantas Técnicas",
    description:
      "Elaboração de plantas de situação, implantação, cortes e perfis para uso em projetos de engenharia, processos jurídicos e registros em cartório.",
  },
  {
    icon: "DT",
    title: "Desenho Técnico em Engenharia",
    description:
      "Produção de plantas, cortes, perfis e memoriais descritivos em norma ABNT para projetos estruturais, hidrossanitários e de terraplanagem.",
  },
];

export default function ServicosPage() {
  const cmsPage = getCmsPage("servicos");

  return (
    <main>
      <section className="sobre-hero">
        <span className="section-label">O que oferecemos</span>
        <h1>{cmsPage?.title ?? "Serviços técnicos para quem decide com responsabilidade"}</h1>
        <p>
          {cmsPage?.description ||
            "Cada serviço da Nivela é organizado pela necessidade do cliente, não por catálogo. Encontre o que resolve sua situação."}
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
        <span className="section-label">Serviços disponíveis</span>

        <div className="servicos-full">
          {services.map((service) => (
            <article className="servico-row" key={service.title}>
              <div className="icon-big" aria-hidden="true">
                {service.icon}
              </div>

              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>

              <Link href="/contato" className="cta-sm">
                Solicitar
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>
          Não sabe qual serviço é o <em>certo para você?</em> A gente explica.
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
            Avaliação Gratuita
          </Link>
        </div>
      </section>
    </main>
  );
}
