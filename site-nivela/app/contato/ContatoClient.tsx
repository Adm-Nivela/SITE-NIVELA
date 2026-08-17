"use client";

import { useState } from "react";

const methods = [
  {
    icon: "WA",
    title: "WhatsApp",
    description:
      "Para uma conversa inicial sobre o imóvel, documentos disponíveis e o serviço que você procura.",
  },
  {
    icon: "EM",
    title: "E-mail",
    description:
      "Indicado para envio de documentos, plantas e informações que ajudem a entender a situação do imóvel.",
  },
  {
    icon: "RJ",
    title: "Área de atendimento",
    description:
      "Atendimento no estado do Rio de Janeiro, conforme localização e escopo do serviço.",
  },
];

const serviceOptions = [
  "Regularização de Imóveis",
  "Levantamento Topográfico e Planialtimétrico",
  "Georreferenciamento de Imóvel Rural",
  "Usucapião e Retificação de Área",
  "Divisão e Demarcação de Áreas",
  "Cartografia e Inteligência Territorial",
  "Não sei qual serviço preciso",
];

type ContatoClientProps = {
  initialSubject: string;
  initialService: string;
};

export default function ContatoClient({
  initialSubject,
  initialService,
}: ContatoClientProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [service, setService] = useState(initialService);
  const [municipality, setMunicipality] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    if (
      !name.trim() ||
      !contact.trim() ||
      !service.trim() ||
      !municipality.trim() ||
      !message.trim()
    ) {
      setStatus({
        type: "error",
        text: "Por favor, preencha todos os campos obrigatórios.",
      });

      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          contact,
          subject,
          service,
          municipality,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Ocorreu um erro ao enviar a mensagem."
        );
      }

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          service,
          municipality,
          subject,
        });
      }

      setStatus({
        type: "success",
        text: "Mensagem enviada com sucesso! A Nivela recebeu as informações do seu imóvel.",
      });

      setName("");
      setContact("");
      setSubject("Orçamento");
      setService("");
      setMunicipality("");
      setMessage("");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro de conexão. Tente novamente.";

      setStatus({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="sobre-hero">
        <span className="section-label">Fale com a Nivela</span>

        <h1>Conte o que está acontecendo com o seu imóvel</h1>

        <p>
          Envie a localização, o serviço que procura e uma breve descrição da
          situação. Essas informações ajudam a entender melhor sua necessidade
          antes do primeiro contato.
        </p>
      </section>

      <section className="section contact-page-section">
        <div className="contato-grid">
          <div className="contato-info">
            <h2>Como falar com a Nivela</h2>

            <p>
              Atendemos proprietários, advogados, compradores, investidores e
              outros profissionais que precisam de suporte técnico relacionado
              a imóveis, limites, documentos e território.
            </p>

            {methods.map((method) => (
              <article className="contact-method" key={method.title}>
                <div className="contact-method-icon" aria-hidden="true">
                  {method.icon}
                </div>

                <div>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </div>
              </article>
            ))}
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <h2>Envie os dados do imóvel</h2>

            <div className="form-group">
              <label htmlFor="name">Nome</label>

              <input
                id="name"
                autoComplete="name"
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">E-mail ou WhatsApp</label>

              <input
                id="contact"
                type="text"
                placeholder="Como prefere receber retorno?"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Serviço desejado</label>

              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">Selecione uma opção</option>

                {serviceOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="municipality">Município do imóvel</label>

              <input
                id="municipality"
                type="text"
                placeholder="Ex.: Niterói, Petrópolis, Rio de Janeiro..."
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>

              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="Orçamento">Orçamento</option>
                <option value="Diagnóstico técnico">
                  Diagnóstico técnico
                </option>
                <option value="Dúvida técnica">Dúvida técnica</option>
                <option value="Parceria">Parceria</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Conte um pouco sobre a situação</label>

              <textarea
                id="message"
                autoComplete="off"
                placeholder="Ex.: a área da matrícula não confere com o terreno, preciso regularizar o imóvel, tenho dúvidas sobre os limites..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {status && (
              <div
                aria-live="polite"
                role="status"
                style={{
                  padding: "12px",
                  marginBottom: "16px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  backgroundColor:
                    status.type === "success" ? "#e6f4ea" : "#fce8e6",
                  color:
                    status.type === "success" ? "#137333" : "#c5221f",
                  border: `1px solid ${
                    status.type === "success" ? "#b7e1cd" : "#f5c2c1"
                  }`,
                }}
              >
                {status.text}
              </div>
            )}

            <button
              className="form-submit"
              type="submit"
              disabled={loading}
              style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Enviando..." : "Enviar solicitação"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}