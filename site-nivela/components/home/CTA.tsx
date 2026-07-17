import Link from "next/link";

import { whatsappHref } from "@/lib/whatsapp";

export default function CTA() {
  return (
    <section className="cta-band">
      <h2>
        Tem um imóvel e precisa de <em>certeza técnica?</em> Fale com a Nivela.
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

        <Link href="/contato" className="btn-gold">
          Avaliação Técnica
        </Link>
      </div>
    </section>
  );
}
