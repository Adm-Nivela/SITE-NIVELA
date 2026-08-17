import Link from "next/link";

import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata = {
  alternates: {
    canonical: "/avaliacao-tecnica",
  },
  title: "Diagnóstico Técnico de Imóvel no RJ",
  description:
    "Diagnóstico técnico para entender documentos, área, limites e divergências antes de comprar, vender, regularizar, dividir ou tomar decisões sobre um imóvel.",
  openGraph: {
    title: "Diagnóstico Técnico de Imóvel no RJ",
    description:
      "Entenda documentos, área, limites e divergências antes de tomar decisões sobre seu imóvel.",
    url: "/avaliacao-tecnica",
  },
};

const contactHref = "/contato?assunto=diagnostico-tecnico";

const problems = [
  "A área da escritura ou matrícula não parece bater com o terreno.",
  "Existem dúvidas sobre divisas, marcos ou confrontantes.",
  "O imóvel precisa ser vendido, comprado, dividido ou regularizado.",
  "Há documentos antigos, incompletos ou informações que não parecem compatíveis.",
];

const evaluationItems = [
  {
    title: "Leitura da situação",
    description:
      "Entendemos a finalidade do imóvel e o problema que precisa ser resolvido antes de indicar qualquer serviço.",
  },
  {
    title: "Análise documental",
    description:
      "Avaliamos os documentos disponíveis, como matrícula, escritura, plantas, memoriais e cadastros relacionados ao imóvel.",
  },
  {
    title: "Direcionamento técnico",
    description:
      "Indicamos quais verificações, levantamentos ou peças técnicas podem ser necessários para avançar com mais segurança.",
  },
];

const audiences = [
  "Proprietários que precisam regularizar ou entender melhor a situação do imóvel.",
  "Compradores e investidores que querem reduzir incertezas antes de fechar negócio.",
  "Famílias envolvidas em herança, divisão ou organização patrimonial.",
  "Advogados que precisam de apoio técnico territorial para seus processos.",
  "Corretores e profissionais que precisam conferir área, limites ou documentação antes de uma negociação.",
];

const recommendedWhen = [
  "Antes de comprar ou vender um imóvel com dúvidas sobre área ou limites.",
  "Quando matrícula, escritura, cerca, muro ou ocupação apresentam divergências.",
  "Antes de iniciar regularização, divisão, usucapião, retificação ou outro procedimento.",
  "Quando advogado, cartório, prefeitura ou outro órgão solicita peças ou informações técnicas.",
];

const steps = [
  {
    number: "01",
    title: "Você apresenta a situação",
    description:
      "Recebemos sua dúvida, a localização do imóvel e os documentos disponíveis.",
  },
  {
    number: "02",
    title: "A Nivela organiza as informações",
    description:
      "Comparamos documentos, contexto territorial e dados disponíveis para identificar os pontos que precisam de confirmação.",
  },
  {
    number: "03",
    title: "Definimos o próximo passo técnico",
    description:
      "Explicamos o cenário e indicamos o levantamento, a conferência ou as peças técnicas que podem ser necessárias.",
  },
];

export default function AvaliacaoTecnicaPage() {
  return (
    <main>
      <section className="avaliacao-hero">
        <div className="avaliacao-hero-content">
          <span className="section-label">Diagnóstico técnico</span>

          <h1>
            Entenda a situação técnica do seu <em>imóvel antes de decidir</em>
          </h1>

          <p>
            A Nivela analisa documentos, área, limites e contexto territorial
            para identificar divergências e ajudar a definir o próximo passo
            técnico antes de comprar, vender, dividir ou regularizar um imóvel.
          </p>

          <div className="avaliacao-actions">
            <Link href={contactHref} className="btn-gold">
              Solicitar diagnóstico
            </Link>

            <Link href="/servicos" className="btn-outline">
              Ver serviços
            </Link>
          </div>
        </div>

        <aside className="avaliacao-hero-panel" aria-label="Resumo do diagnóstico">
          <strong>O que analisamos</strong>
          <ul>
            <li>Objetivo e situação do imóvel</li>
            <li>Documentos e informações disponíveis</li>
            <li>Possíveis próximos passos técnicos</li>
          </ul>
        </aside>
      </section>

      <section className="avaliacao-intro">
        <span className="section-label">Por que começar pelo diagnóstico</span>

        <p>
          Nem toda divergência de área ou documentação exige o mesmo serviço.
          A Nivela conecta documentos, limites e informações de campo para
          entender o problema antes de definir levantamento, georreferenciamento,
          planta, memorial ou outra solução técnica.
        </p>
      </section>

      <section className="section avaliacao-problems">
        <div className="avaliacao-section-head">
          <span className="section-label">Quando a dúvida aparece</span>

          <h2 className="section-title">
            O problema quase nunca começa pela planta. Começa pela incerteza.
          </h2>

          <p className="section-sub">
            Antes de contratar uma medição ou iniciar um procedimento, é
            importante entender a origem da divergência e qual informação
            técnica realmente precisa ser produzida.
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
            Uma análise inicial para definir o caminho técnico
          </h2>

          <p className="section-sub">
            O diagnóstico técnico organiza as informações disponíveis,
            identifica inconsistências e ajuda a definir quais levantamentos,
            verificações ou peças técnicas podem ser necessários em cada caso.
          </p>

          <Link href={contactHref} className="cta-sm">
            Solicitar diagnóstico
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
          <span className="section-label">Para quem é indicado</span>

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

        <h2 className="section-title">
          O diagnóstico ajuda a reduzir incertezas antes do próximo passo
        </h2>

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

        <h2 className="section-title">
          Um processo simples para entender a situação do imóvel
        </h2>

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
          Tem dúvidas sobre área, limites ou documentos do imóvel?{" "}
          <em>Comece pelo diagnóstico.</em>
        </h2>

        <div className="cta-btns">
          <WhatsAppLink
            className="btn-whatsapp"
            location="avaliacao-tecnica"
          >
            Falar pelo WhatsApp
          </WhatsAppLink>

          <Link href={contactHref} className="btn-gold">
            Solicitar Diagnóstico Técnico
          </Link>
        </div>
      </section>
    </main>
  );
}