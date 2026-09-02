"use client";

import { useState } from "react";

type Status = {
  type: "success" | "error";
  text: string;
};

const initialForm = {
  name: "",
  contact: "",
  municipality: "",
  propertyType: "Imóvel urbano",
  stage: "",
};

export default function UsucapiaoLeadForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.contact.trim() || !form.municipality.trim()) {
      setStatus({
        type: "error",
        text: "Preencha nome, WhatsApp e município do imóvel.",
      });
      return;
    }

    setLoading(true);

    try {
      const params = new URLSearchParams(window.location.search);
      const attribution = Object.fromEntries(
        [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_term",
          "utm_content",
          "gclid",
        ]
          .map((key) => [key, params.get(key) ?? ""])
          .filter(([, value]) => value),
      );

      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          municipality: form.municipality,
          subject: "Orçamento para usucapião",
          service: "Levantamento topográfico para usucapião",
          message: [
            `Tipo de imóvel: ${form.propertyType}.`,
            form.stage
              ? `Etapa atual: ${form.stage}.`
              : "Etapa atual: não informada.",
          ].join("\n"),
          attribution: {
            landingPage: "/usucapiao",
            ...attribution,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Não foi possível enviar agora.");
      }

      window.gtag?.("event", "generate_lead", {
        service: "usucapiao",
        municipality: form.municipality,
        method: "form",
      });

      setForm(initialForm);
      setStatus({
        type: "success",
        text: "Recebemos seus dados. A Nivela entrará em contato para entender o imóvel.",
      });
    } catch (error: unknown) {
      setStatus({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Erro de conexão. Tente novamente ou fale pelo WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="usucapiao-form" onSubmit={handleSubmit}>
      <div className="usucapiao-form-heading">
        <span>Análise inicial</span>
        <h2>Conte onde fica o imóvel</h2>
        <p>Retornamos para entender o caso e orientar o escopo técnico.</p>
      </div>

      <div className="usucapiao-form-grid">
        <label>
          Nome
          <input
            autoComplete="name"
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Seu nome"
            required
            type="text"
            value={form.name}
          />
        </label>

        <label>
          WhatsApp
          <input
            autoComplete="tel"
            inputMode="tel"
            name="contact"
            onChange={(event) => updateField("contact", event.target.value)}
            placeholder="(21) 99999-9999"
            required
            type="tel"
            value={form.contact}
          />
        </label>

        <label>
          Município do imóvel
          <input
            autoComplete="address-level2"
            name="municipality"
            onChange={(event) => updateField("municipality", event.target.value)}
            placeholder="Ex.: Duque de Caxias"
            required
            type="text"
            value={form.municipality}
          />
        </label>

        <label>
          Tipo de imóvel
          <select
            name="propertyType"
            onChange={(event) => updateField("propertyType", event.target.value)}
            value={form.propertyType}
          >
            <option>Imóvel urbano</option>
            <option>Imóvel rural</option>
            <option>Não sei informar</option>
          </select>
        </label>

        <label className="usucapiao-form-wide">
          Em que etapa você está? <small>(opcional)</small>
          <select
            name="stage"
            onChange={(event) => updateField("stage", event.target.value)}
            value={form.stage}
          >
            <option value="">Selecione uma opção</option>
            <option>Ainda estou buscando orientação</option>
            <option>Já tenho advogado</option>
            <option>O advogado ou cartório pediu a topografia</option>
            <option>O processo já foi iniciado</option>
          </select>
        </label>
      </div>

      {status ? (
        <div className={`usucapiao-form-status ${status.type}`} role="status">
          {status.text}
        </div>
      ) : null}

      <button className="usucapiao-form-submit" disabled={loading} type="submit">
        {loading ? "Enviando..." : "Solicitar análise do imóvel"}
      </button>

      <p className="usucapiao-form-note">
        Seus dados serão usados somente para atender esta solicitação.
      </p>
    </form>
  );
}
