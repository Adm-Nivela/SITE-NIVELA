import Link from "next/link";

const stats = [
  {
    value: "100%",
    label: "Responsabilidade técnica assinada",
  },
  {
    value: "ART",
    label: "Anotação em todos os serviços",
  },
  {
    value: "B2C",
    label: "Foco no cliente final",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-lines" />

      <div className="hero-content">
        <span className="hero-badge">Território & Patrimônio</span>

        <h1>
          Segurança técnica para decisões que exigem{" "}
          <em>responsabilidade</em>
        </h1>

        <p>
          Mais que plantas e medições, entregamos soluções estratégicas para
          quem precisa de certeza jurídica em cada metro quadrado do seu imóvel.
        </p>

        <div className="hero-actions">
          <Link href="/contato" className="btn-gold">
            Solicitar Avaliação Técnica
          </Link>

          <Link href="/servicos" className="btn-outline">
            Conheça os Serviços
          </Link>
        </div>
      </div>

      <div className="hero-float" aria-label="Diferenciais da Nivela">
        {stats.map((stat) => (
          <div className="hero-stat-card" key={stat.value}>
            <div className="num">{stat.value}</div>
            <div className="lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
