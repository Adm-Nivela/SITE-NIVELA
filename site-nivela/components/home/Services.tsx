import Link from "next/link";

const services = [
  {
    icon: "RG",
    title: "Regularização de Imóveis",
    description:
      "Diagnóstico e suporte técnico para imóveis urbanos e rurais com divergências de área, limites, documentos ou ocupação.",
  },
  {
    icon: "TP",
    title: "Levantamento Topográfico e Planialtimétrico",
    description:
      "Medição e representação do terreno para regularização, conferência de área, projetos, divisão e outras finalidades.",
  },
  {
    icon: "GR",
    title: "Georreferenciamento de Imóvel Rural",
    description:
      "Levantamento, processamento e preparação das peças técnicas para imóveis rurais, incluindo suporte ao SIGEF quando aplicável.",
  },
  {
    icon: "UR",
    title: "Usucapião e Retificação de Área",
    description:
      "Levantamento, planta, memorial descritivo e responsabilidade técnica para apoiar procedimentos de usucapião e correção da descrição do imóvel.",
  },
];

export default function Services() {
  return (
    <section className="section services-section">
      <span className="section-label">Principais soluções</span>

      <h2 className="section-title">
        Serviços para regularizar,
        <br />
        conferir e proteger seu imóvel
      </h2>

      <p className="section-sub">
        Cada trabalho começa pela finalidade do imóvel. A partir dela,
        definimos o levantamento, as peças técnicas e o suporte necessário para
        cada situação.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <Link href="/servicos" className="service-link">
              Conhecer o serviço
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}