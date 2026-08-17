const SITE_URL = "https://nivela.eng.br";
const WHATSAPP_PHONE = "+5521978918246";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,

    name: "Nivela Território & Patrimônio",

    url: SITE_URL,

    description:
      "Regularização de imóveis, topografia, agrimensura, georreferenciamento e inteligência territorial no Rio de Janeiro.",

    telephone: WHATSAPP_PHONE,

    logo: `${SITE_URL}/brand/nivela-symbol-light.png`,

    contactPoint: {
      "@type": "ContactPoint",
      telephone: WHATSAPP_PHONE,
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },

    areaServed: {
      "@type": "State",
      name: "Rio de Janeiro",
    },

    knowsAbout: [
      "Regularização de imóveis",
      "Agrimensura",
      "Topografia",
      "Levantamento topográfico",
      "Levantamento planialtimétrico",
      "Georreferenciamento de imóveis rurais",
      "SIGEF",
      "Retificação de área",
      "Levantamentos técnicos para usucapião",
      "Cartografia",
      "Inteligência territorial",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}