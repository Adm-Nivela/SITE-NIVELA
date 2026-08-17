import Link from "next/link";

const stats = [
  {
    value: "ART",
    label: "Responsabilidade técnica conforme o escopo",
  },
  {
    value: "RJ",
    label: "Atuação no Rio de Janeiro",
  },
  {
    value: "Urbano + Rural",
    label: "Soluções para diferentes tipos de imóveis",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-lines" />

      <div className="hero-content">
        <span className="hero-badge">Território & Patrimônio</span>

        <h1>
          Regularização de imóveis, topografia e agrimensura no{" "}
          <em>Rio de Janeiro</em>
        </h1>

        <p>
          A Nivela conecta documentos, limites e realidade de campo para
          ajudar proprietários, advogados e investidores a regularizar,
          conferir e tomar decisões mais seguras sobre imóveis urbanos e rurais.
        </p>

        <div className="hero-actions">
          <Link href="/contato" className="btn-gold">
            Solicitar Diagnóstico Técnico
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