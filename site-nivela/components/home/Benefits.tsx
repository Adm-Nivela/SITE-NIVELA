const benefits = [
  {
    number: "01",
    title: "Rigor Técnico",
    description:
      "Todos os serviços seguem normas ABNT e são executados com equipamentos calibrados e metodologia precisa.",
  },
  {
    number: "02",
    title: "Educação do Mercado",
    description:
      "Acreditamos que um cliente informado toma decisões melhores. Por isso publicamos conteúdo técnico acessível.",
  },
  {
    number: "03",
    title: "Responsabilidade Assinada",
    description:
      "Cada projeto tem ART registrada, garantindo respaldo jurídico e técnico para o cliente em qualquer instância.",
  },
];

export default function Benefits() {
  return (
    <section className="diff-section">
      <span className="section-label">Nossa filosofia</span>

      <h2 className="section-title">
        Fazemos poucos serviços.
        <br />
        Mas fazemos bem feito.
      </h2>

      <p className="section-sub">
        A Nivela não compete por volume. Compete por qualidade técnica e pela
        confiança que cada laudo gera para o cliente.
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
