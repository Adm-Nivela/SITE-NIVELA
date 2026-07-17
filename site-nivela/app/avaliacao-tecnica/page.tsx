import Link from "next/link";

import { whatsappHref } from "@/lib/whatsapp";

export const metadata = {
  alternates: {
    canonical: "/avaliacao-tecnica",
  },
  title: "Avaliação técnica de imóvel",
  description:
    "Avaliação técnica inicial para entender documentos, área, limites e riscos antes de comprar, vender, regularizar ou construir.",
  openGraph: {
    title: "Avaliação técnica de imóvel",
    description:
      "Entenda a situação técnica do seu imóvel antes de tomar decisões patrimoniais importantes.",
    url: "/avaliacao-tecnica",
  },
};

const contactHref = "/contato?assunto=avaliacao-tecnica";

const problems = [
  "A área da escritura não parece bater com o terreno.",
  "Existem dúvidas sobre divisas, marcos ou confrontantes.",
  "O imóvel precisa ser vendido, comprado, dividido ou regularizado.",
  "Há documentos antigos, incompletos ou difíceis de interpretar.",
];

const evaluationItems = [
  {
    title: "Leitura da situação",
    description:
      "Entendemos o objetivo do proprietário e analisamos o contexto do imóvel antes de indicar qualquer serviço.",
  },
  {
    title: "Verificação documental",
    description:
      "Observamos matrícula, escritura, plantas, memorial, registros e demais documentos disponíveis.",
  },
  {
    title: "Direcionamento técnico",
    description:
      "Indicamos o caminho mais adequado, como levantamento, georreferenciamento, planta, memorial ou regularização.",
  },
];

const audiences = [
  "Proprietários que querem regularizar ou organizar um imóvel.",
  "Compradores que precisam reduzir risco antes de fechar negócio.",
  "Famílias em processo de herança, divisão ou partilha.",
  "Advogados e profissionais que precisam de apoio técnico claro.",
  "Construtoras pequenas que precisam entender limites e área real.",
];

const recommendedWhen = [
  "Antes de comprar, vender ou financiar um imóvel.",
  "Quando há divergência entre documento, cerca, muro ou uso real.",
  "Antes de iniciar obra, desmembramento, inventário ou regularização.",
  "Quando cartório, advogado ou órgão público solicita documentos técnicos.",
];

const steps = [
  {
    number: "01",
    title: "Você apresenta a situação",
    description:
      "Recebemos a dúvida, o endereço ou localização e os documentos que já existem.",
  },
  {
    number: "02",
    title: "A Nivela analisa o cenário",
    description:
      "Organizamos as informações e verificamos quais pontos precisam de confirmação técnica.",
  },
  {
    number: "03",
    title: "Você recebe orientação objetiva",
    description:
      "Explicamos o problema, os riscos e o próximo serviço recomendado, quando ele for necessário.",
  },
];

export default function AvaliacaoTecnicaPage() {
  return (
    <main>
      <section className="avaliacao-hero">
        <div className="avaliacao-hero-content">
          <span className="section-label">Avaliação técnica</span>
          <h1>
            Clareza técnica antes de decidir sobre o seu <em>imóvel</em>
          </h1>
          <p>
            A Nivela avalia documentos, área, limites e contexto do imóvel para
            indicar o caminho correto antes de comprar, vender, regularizar,
            construir ou resolver uma divergência.
          </p>

          <div className="avaliacao-actions">
            <Link href={contactHref} className="btn-gold">
              Solicitar avaliação
            </Link>
            <Link href="/servicos" className="btn-outline">
              Ver serviços
            </Link>
          </div>
        </div>

        <aside className="avaliacao-hero-panel" aria-label="Resumo da avaliação">
          <strong>O que você recebe</strong>
          <ul>
            <li>Entendimento do problema real</li>
            <li>Leitura técnica dos documentos</li>
            <li>Orientação sobre o próximo passo</li>
          </ul>
        </aside>
      </section>

      <section className="avaliacao-intro">
        <span className="section-label">Sobre a Nivela</span>
        <p>
          A Nivela atua em agrimensura, topografia, cartografia e regularização
          fundiária com foco em segurança técnica e solidez patrimonial. Nosso
          trabalho transforma medições, plantas e documentos em decisões mais
          seguras para proprietários, famílias, advogados e pequenas
          construtoras.
        </p>
      </section>

      <section className="section avaliacao-problems">
        <div className="avaliacao-section-head">
          <span className="section-label">Quando a dúvida aparece</span>
          <h2 className="section-title">
            O problema quase nunca começa pela planta. Começa pela incerteza.
          </h2>
          <p className="section-sub">
            Antes de contratar uma medição ou abrir um processo, é importante
            entender qual é a origem do problema e qual entrega técnica resolve
            a situação.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((problem) => (
            <article className="problem-card" key={problem}>
              <span aria-hidden="true">!</span>
              <p>{problem}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section avaliacao-explanation">
        <div>
          <span className="section-label">O que é</span>
          <h2 className="section-title">
            Uma análise inicial para decidir com segurança
          </h2>
          <p className="section-sub">
            A Avaliação Técnica não é uma promessa genérica nem substitui um
            serviço completo quando ele é necessário. Ela organiza as
            informações existentes, identifica riscos e indica o caminho mais
            coerente para resolver a demanda.
          </p>
          <Link href={contactHref} className="cta-sm">
            Quero orientação
          </Link>
        </div>

        <div className="evaluation-list">
          {evaluationItems.map((item) => (
            <article className="evaluation-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section avaliacao-audience">
        <div className="avaliacao-section-head">
          <span className="section-label">Para quem é indicada</span>
          <h2 className="section-title">
            Para quem precisa entender antes de agir
          </h2>
        </div>

        <div className="audience-list">
          {audiences.map((audience) => (
            <div className="audience-item" key={audience}>
              {audience}
            </div>
          ))}
        </div>
      </section>

      <section className="section avaliacao-when">
        <span className="section-label">Quando solicitar</span>
        <h2 className="section-title">A avaliação é recomendada antes do risco virar custo</h2>

        <div className="when-grid">
          {recommendedWhen.map((item) => (
            <article className="when-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section avaliacao-steps">
        <span className="section-label">Como funciona</span>
        <h2 className="section-title">Um processo simples, direto e documentado</h2>

        <div className="steps avaliacao-flow">
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
          Quer entender a situação <em>técnica do seu imóvel?</em>
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
          <Link href={contactHref} className="btn-gold">
            Solicitar avaliação
          </Link>
        </div>
      </section>
    </main>
  );
}
