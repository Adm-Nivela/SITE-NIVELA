import Link from "next/link";

import WhatsAppLink from "../WhatsAppLink";

export default function CTA() {
  return (
    <section className="cta-band">
      <h2>
        Precisa regularizar, conferir ou entender melhor seu imóvel?{" "}
        <em>Fale com a Nivela.</em>
      </h2>

      <div className="cta-btns">
           <WhatsAppLink
                  className="btn-whatsapp"
                  location="inicial"
                >
                  Falar pelo WhatsApp
                </WhatsAppLink>

        <Link href="/contato" className="btn-gold">
          Solicitar Diagnóstico Técnico
        </Link>
      </div>
    </section>
  );
}