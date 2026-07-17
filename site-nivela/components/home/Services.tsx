import Link from "next/link";

const services = [
  {
    icon: "TP",
    title: "Topografia e Levantamento",
    description:
      "Levantamento planialtimétrico, cadastral e de situação para imóveis urbanos e rurais com precisão e laudo técnico.",
  },
  {
    icon: "AR",
    title: "Agrimensura e Regularização",
    description:
      "Georreferenciamento, demarcação e divisão de terras para processos de regularização fundiária e registro em cartório.",
  },
  {
    icon: "CM",
    title: "Cartografia e Mapeamento",
    description:
      "Elaboração de plantas, cartas e mapas temáticos com sistema de coordenadas oficiais e compatibilidade com INCRA e cartório.",
  },
  {
    icon: "DT",
    title: "Desenho Técnico em Engenharia",
    description:
      "Plantas, perfis, cortes e memoriais descritivos elaborados com rigor normativo para projetos de engenharia civil.",
  },
];

export default function Services() {
  return (
    <section className="section services-section">
      <span className="section-label">O que fazemos</span>

      <h2 className="section-title">
        Serviços especializados em
        <br />
        território e patrimônio
      </h2>

      <p className="section-sub">
        Cada serviço é conduzido com critério técnico, documentação completa e
        assinatura de responsabilidade. Poucos serviços, feitos com excelência.
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
              Saiba mais
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
