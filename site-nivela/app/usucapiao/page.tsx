import type { Metadata } from "next";

import WhatsAppLink from "@/components/WhatsAppLink";

import UsucapiaoLeadForm from "./UsucapiaoLeadForm";

const whatsappMessage =
  "Olá! Vim pela página de usucapião da Nivela e gostaria de solicitar uma análise para o meu imóvel.";

const deliverables = [
  {
    number: "01",
    title: "Levantamento topográfico planialtimétrico",
    description:
      "Realizamos a medição do imóvel para identificar sua configuração, área, perímetro, limites, confrontações e elementos relevantes ao trabalho técnico.",
  },
  {
    number: "02",
    title: "Planta técnica do imóvel",
    description:
      "Representamos graficamente o perímetro levantado, suas dimensões, confrontantes e demais informações definidas para o caso.",
  },
  {
    number: "03",
    title: "Memorial descritivo",
    description:
      "Elaboramos a descrição técnica do perímetro com os dados necessários para individualizar a área levantada.",
  },
  {
    number: "04",
    title: "Responsabilidade técnica",
    description:
      "As peças são produzidas por profissional habilitado, com a documentação de responsabilidade técnica aplicável ao serviço contratado.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Entendemos o caso",
    description:
      "Você informa a localização, a situação do imóvel e envia os documentos que já possui.",
  },
  {
    number: "02",
    title: "Definimos o escopo",
    description:
      "Analisamos a finalidade do trabalho e alinhamos as exigências técnicas conhecidas com você ou seu advogado.",
  },
  {
    number: "03",
    title: "Levantamos o imóvel",
    description:
      "A equipe vai a campo para medir a área e registrar os elementos necessários à caracterização técnica.",
  },
  {
    number: "04",
    title: "Elaboramos as peças",
    description:
      "Processamos os dados e produzimos a planta, o memorial descritivo e os documentos técnicos previstos na proposta.",
  },
];

const faqs = [
  {
    question: "A Nivela faz todo o processo de usucapião?",
    answer:
      "A Nivela atua na parte técnica de engenharia e agrimensura. Produzimos o levantamento e as peças técnicas do imóvel. A condução jurídica e o protocolo do pedido devem ser feitos pelo advogado responsável, no Judiciário ou no cartório competente.",
  },
  {
    question: "Planta e memorial descritivo são a mesma coisa?",
    answer:
      "Não. A planta representa graficamente a área levantada. O memorial descreve tecnicamente o perímetro, as dimensões, os limites e outras informações necessárias para individualizar o imóvel. As duas peças são complementares.",
  },
  {
    question: "Quais documentos preciso enviar para pedir um orçamento?",
    answer:
      "Para a análise inicial, envie a localização do imóvel e os documentos que tiver, como matrícula, escritura, contrato, IPTU, planta anterior ou indicação dos confrontantes. A lista definitiva depende da situação de cada área.",
  },
  {
    question: "O levantamento garante a aprovação do usucapião?",
    answer:
      "Não. O levantamento fornece a caracterização técnica do imóvel, mas o reconhecimento do usucapião depende dos requisitos jurídicos, da documentação, das manifestações dos envolvidos e da decisão do cartório ou do Judiciário.",
  },
  {
    question: "Vocês atendem Duque de Caxias e outros municípios do RJ?",
    answer:
      "Sim. Atendemos Duque de Caxias, municípios da Baixada Fluminense e outras regiões do estado do Rio de Janeiro, conforme a localização e o escopo do serviço.",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/usucapiao" },
  title: "Topografia para Usucapião no Rio de Janeiro",
  description:
    "Levantamento topográfico planialtimétrico, planta e memorial descritivo para usucapião na Baixada Fluminense, Região Serrana e outros municípios do RJ.",
  openGraph: {
    title: "Topografia e peças técnicas para usucapião | Nivela",
    description:
      "Levantamento do imóvel, planta, memorial descritivo e responsabilidade técnica para apoiar seu processo de usucapião.",
    url: "/usucapiao",
  },
};

export default function UsucapiaoPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Levantamento topográfico para usucapião",
      serviceType:
        "Levantamento topográfico planialtimétrico, planta e memorial descritivo para usucapião",
      provider: {
        "@type": "Organization",
        "@id": "https://nivela.eng.br/#organization",
        name: "Nivela Território & Patrimônio",
      },
      areaServed: [
        { "@type": "City", name: "Duque de Caxias" },
        { "@type": "City", name: "Nova Iguaçu" },
        { "@type": "City", name: "Itaguaí" },
        { "@type": "City", name: "Petrópolis" },
        { "@type": "City", name: "Teresópolis" },
        { "@type": "AdministrativeArea", name: "Baixada Fluminense" },
        { "@type": "State", name: "Rio de Janeiro" },
      ],
      url: "https://nivela.eng.br/usucapiao",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="usucapiao-page">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />

      <section className="usucapiao-hero">
        <div className="usucapiao-hero-copy">
          <span className="section-label">Topografia para usucapião</span>
          <h1>
            Levantamento, planta e memorial para caracterizar o seu imóvel
          </h1>
          <p className="usucapiao-hero-lead">
            Atuamos na etapa técnica do usucapião com levantamento topográfico
            planialtimétrico, elaboração de planta e memorial descritivo para
            representar a área, os limites e as confrontações do imóvel.
          </p>

          <div className="usucapiao-hero-actions">
            <a className="btn-gold" href="#solicitar-analise">
              Solicitar análise
            </a>
            <WhatsAppLink
              className="btn-outline"
              location="usucapiao-hero"
              message={whatsappMessage}
            >
              Falar pelo WhatsApp
            </WhatsAppLink>
          </div>

          <ul className="usucapiao-trust-list" aria-label="Diferenciais do atendimento">
            <li>Atuação técnica especializada</li>
            <li>Atendimento em diferentes municípios do RJ</li>
            <li>Escopo definido conforme o imóvel</li>
          </ul>
        </div>

        <div id="solicitar-analise">
          <UsucapiaoLeadForm />
        </div>
      </section>

      <section className="usucapiao-context">
        <div>
          <span className="section-label">O papel da topografia</span>
          <h2>O tempo de posse não descreve fisicamente o imóvel</h2>
        </div>
        <p>
          Para apoiar o procedimento, a área precisa ser tecnicamente
          individualizada. O levantamento transforma a ocupação observada em
          informações mensuráveis e coerentes entre si, que dão origem à planta
          e ao memorial descritivo usados pelo responsável jurídico.
        </p>
      </section>

      <section className="section usucapiao-deliverables" id="como-atuamos">
        <div className="usucapiao-section-heading">
          <span className="section-label">Como atuamos</span>
          <h2 className="section-title">Da medição em campo às peças técnicas</h2>
          <p className="section-sub">
            O escopo final depende das características do imóvel e das
            exigências do procedimento. Estes são os principais serviços da
            Nivela para a caracterização da área.
          </p>
        </div>

        <div className="usucapiao-deliverables-grid">
          {deliverables.map((item) => (
            <article className="usucapiao-deliverable" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section usucapiao-fit">
        <div className="usucapiao-fit-panel">
          <span className="section-label">Quando nos procurar</span>
          <h2>Seu caso precisa transformar limites de fato em informação técnica</h2>
          <p>
            Podemos ajudar quando seu advogado ou cartório solicita planta e
            memorial; quando os documentos não descrevem bem a ocupação; ou
            quando é necessário medir área, perímetro e confrontações antes de
            avançar.
          </p>
          <WhatsAppLink
            className="btn-gold"
            location="usucapiao-quando-procurar"
            message={whatsappMessage}
          >
            Conversar sobre o imóvel
          </WhatsAppLink>
        </div>

        <aside className="usucapiao-scope-note">
          <strong>Escopo técnico, sem promessa de resultado jurídico</strong>
          <p>
            A Nivela mede e caracteriza o imóvel e produz as peças contratadas.
            O reconhecimento da usucapião depende da análise jurídica e da
            decisão do cartório ou do Judiciário.
          </p>
        </aside>
      </section>

      <section className="section usucapiao-process">
        <div className="usucapiao-section-heading">
          <span className="section-label">Etapas do trabalho</span>
          <h2 className="section-title">Um processo técnico explicado com clareza</h2>
        </div>

        <div className="usucapiao-process-grid">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section usucapiao-area">
        <div>
          <span className="section-label">Atendimento no Rio de Janeiro</span>
          <h2 className="section-title">
            Baixada Fluminense, Região Serrana e outros municípios do RJ
          </h2>
        </div>
        <div>
          <p>
            Atendemos cidades como Duque de Caxias, Nova Iguaçu, Itaguaí,
            Japeri, Petrópolis e Teresópolis. Avaliamos a localização e a
            necessidade de cada imóvel para definir o deslocamento, o
            levantamento e os documentos técnicos adequados.
          </p>
          <a className="cta-sm" href="#solicitar-analise">
            Pedir análise inicial
          </a>
        </div>
      </section>

      <section className="section usucapiao-faq">
        <div className="usucapiao-section-heading">
          <span className="section-label">Dúvidas frequentes</span>
          <h2 className="section-title">Antes de solicitar o levantamento</h2>
        </div>

        <div className="usucapiao-faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-band usucapiao-final-cta">
        <div>
          <span className="section-label">Próximo passo</span>
          <h2>Vamos entender o imóvel antes de definir o orçamento.</h2>
          <p>
            Informe o município e a situação atual. A análise inicial ajuda a
            definir o escopo correto do levantamento e das peças técnicas.
          </p>
        </div>
        <div className="cta-btns">
          <a className="btn-gold" href="#solicitar-analise">
            Solicitar análise
          </a>
          <WhatsAppLink
            className="btn-whatsapp"
            location="usucapiao-final"
            message={whatsappMessage}
          >
            Falar pelo WhatsApp
          </WhatsAppLink>
        </div>
      </section>

      <div className="usucapiao-mobile-cta">
        <WhatsAppLink
          location="usucapiao-mobile-sticky"
          message={whatsappMessage}
        >
          Falar sobre meu imóvel
        </WhatsAppLink>
      </div>
    </main>
  );
}
