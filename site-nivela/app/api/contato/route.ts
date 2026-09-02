import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character
  );
}

export async function POST(request: Request) {
  try {
    const {
      name,
      contact,
      subject,
      service,
      municipality,
      message,
      attribution,
    } = await request.json();

    if (
      !name ||
      !contact ||
      !subject ||
      !service ||
      !municipality ||
      !message
    ) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailText = `
Novo contato pelo site da Nivela

Nome: ${name}
Contato: ${contact}
Assunto: ${subject}
Serviço: ${service}
Município do imóvel: ${municipality}

Mensagem:
${message}

Origem:
${attribution ? JSON.stringify(attribution, null, 2) : "Não informada"}
    `.trim();

    const safeAttribution =
      attribution && typeof attribution === "object"
        ? Object.entries(attribution)
            .slice(0, 12)
            .map(
              ([key, value]) =>
                `<li><strong>${escapeHtml(String(key))}:</strong> ${escapeHtml(String(value).slice(0, 500))}</li>`,
            )
            .join("")
        : "";

    const emailHtml = `
      <div style="font-family: sans-serif; font-size: 16px; line-height: 1.6;">
        <h2>Novo contato pelo site da Nivela</h2>

        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Contato:</strong> ${escapeHtml(contact)}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Serviço:</strong> ${escapeHtml(service)}</p>
        <p><strong>Município do imóvel:</strong> ${escapeHtml(municipality)}</p>

        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>

        ${safeAttribution ? `<p><strong>Origem:</strong></p><ul>${safeAttribution}</ul>` : ""}
      </div>
    `;

    await transporter.sendMail({
      from: `"Nivela Site" <${process.env.EMAIL_USER}>`,
      replyTo: contact.includes("@") ? contact : undefined,
      to:
        process.env.EMAIL_DESTINATION ||
        process.env.EMAIL_RECEIVER ||
        process.env.EMAIL_USER,
      subject: `[Site] ${subject} - ${service}`,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "E-mail enviado com sucesso!",
    });
  } catch (error) {
    console.error("Erro na rota de contato:", error);

    return NextResponse.json(
      { error: "Ocorreu um erro interno ao tentar enviar o e-mail." },
      { status: 500 }
    );
  }
}
