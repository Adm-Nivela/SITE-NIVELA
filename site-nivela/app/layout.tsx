import type { Metadata } from "next";
import "./globals.css";

import "@/styles/header.css";
import "@/styles/footer.css";
import "@/styles/home.css";
import "@/styles/about.css";
import "@/styles/services.css";
import "@/styles/blog.css";
import "@/styles/contact.css";
import "@/styles/avaliacao-tecnica.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://nivela.eng.br"),
  title: {
    default: "Nivela | Território & Patrimônio",
    template: "%s | Nivela",
  },
  description:
    "Agrimensura, topografia, cartografia e regularização fundiária com responsabilidade técnica no Rio de Janeiro.",
  applicationName: "Nivela",
  icons: {
    icon: "/brand/nivela-symbol-light.png",
    apple: "/brand/nivela-symbol-light.png",
  },
  authors: [{ name: "Nivela Território & Patrimônio" }],
  creator: "Nivela Território & Patrimônio",
  publisher: "Nivela Território & Patrimônio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Nivela",
    title: "Nivela | Território & Patrimônio",
    description:
      "Serviços técnicos de agrimensura, topografia e regularização fundiária para decisões patrimoniais mais seguras.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StructuredData />
        <div className="site-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
