const whatsappPhone = "+55 21 97891-8246";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nivela Território & Patrimônio",
    description:
      "Serviços de agrimensura, topografia, cartografia e regularização fundiária no Rio de Janeiro.",
    telephone: whatsappPhone,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Rio de Janeiro",
    },
    knowsAbout: [
      "Agrimensura",
      "Topografia",
      "Cartografia",
      "Regularização fundiária",
      "Georreferenciamento",
    ],
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}
