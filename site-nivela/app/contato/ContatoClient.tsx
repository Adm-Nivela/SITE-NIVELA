"use client";

import { useState } from "react";

const methods = [
  {
    icon: "WA",
    title: "WhatsApp (preferencial)",
    description:
      "Resposta rápida para dúvidas e agendamentos. Clique para iniciar conversa.",
  },
  {
    icon: "EM",
    title: "E-mail",
    description:
      "Para envio de documentos e solicitações formais. Respondemos em até 24h úteis.",
  },
  {
    icon: "RJ",
    title: "Área de atendimento",
    description:
      "Região metropolitana do Rio de Janeiro com planos de expansão nacional.",
  },
];

type ContatoClientProps = {
  initialSubject: string;
};

export default function ContatoClient({ initialSubject }: ContatoClientProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!name.trim() || !contact.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Por favor, preencha todos os campos obrigatórios." });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, contact, subject, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocorreu um erro ao enviar a mensagem.");
      }

      setStatus({ type: "success", text: "Mensagem enviada com sucesso!" });
      
      setName("");
      setContact("");
      setSubject("Orçamento");
      setMessage("");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro de conexão. Tente novamente.";

      setStatus({ type: "error", text: errorMessage });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="sobre-hero">
        <span className="section-label">Fale conosco</span>
        <h1>Vamos conversar sobre o seu imóvel</h1>
        <p>
          Seja por WhatsApp, e-mail ou formulário. Escolha como prefere.
          Respondemos todas as mensagens com atenção e sem pressa.
        </p>
      </section>

      <section className="section contact-page-section">
        <div className="contato-grid">
          <div className="contato-info">
            <h2>Como chegar até nós</h2>
            <p>
              Atendemos proprietários de imóveis, pequenas construtoras e
              advogados na região de atuação. Para dúvidas sobre qual serviço é
              o correto, basta perguntar. Orientamos sem custo.
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
            <h2>Envie uma mensagem</h2>

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
                autoComplete="email"
                type="text"
                placeholder="Como prefere receber retorno?"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
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
                <option value="Dúvida técnica">Dúvida técnica</option>
                <option value="Parceria">Parceria</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                autoComplete="off"
                placeholder="Descreva sua necessidade..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {status && (
              <div aria-live="polite" role="status" style={{
                padding: '12px',
                marginBottom: '16px',
                borderRadius: '4px',
                fontSize: '14px',
                backgroundColor: status.type === 'success' ? '#e6f4ea' : '#fce8e6',
                color: status.type === 'success' ? '#137333' : '#c5221f',
                border: `1px solid ${status.type === 'success' ? '#b7e1cd' : '#f5c2c1'}`
              }}>
                {status.text}
              </div>
            )}
            <button 
              className="form-submit" 
              type="submit" 
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
