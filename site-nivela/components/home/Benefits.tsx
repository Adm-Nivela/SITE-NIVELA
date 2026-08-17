const benefits = [
  {
    number: "01",
    title: "Método e Rastreabilidade",
    description:
      "Cada trabalho é planejado conforme a finalidade do imóvel, com método, controle de qualidade e registros que permitem conferir as informações produzidas.",
  },
  {
    number: "02",
    title: "Clareza para Decidir",
    description:
      "Traduzimos informações técnicas para que proprietários, advogados e investidores entendam melhor os limites, riscos e próximos passos de cada situação.",
  },
  {
    number: "03",
    title: "Responsabilidade Técnica",
    description:
      "Os serviços são conduzidos por profissional habilitado, com ART compatível com o escopo contratado e suporte técnico dentro das responsabilidades da Nivela.",
  },
];

export default function Benefits() {
  return (
    <section className="diff-section">
      <span className="section-label">Como trabalhamos</span>

      <h2 className="section-title">
        Informação técnica para
        <br />
        decisões mais seguras
      </h2>

      <p className="section-sub">
        O trabalho da Nivela conecta finalidade, documentos, campo e peças
        técnicas para reduzir incertezas e dar mais clareza às decisões sobre o
        imóvel.
      </p>

      <div className="diff-grid">
        {benefits.map((benefit) => (
          <article className="diff-item" key={benefit.number}>
            <div className="diff-num">{benefit.number}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}