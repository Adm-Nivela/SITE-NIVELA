import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

import "@/styles/header.css";
import "@/styles/footer.css";
import "@/styles/home.css";
import "@/styles/about.css";
import "@/styles/services.css";
import "@/styles/blog.css";
import "@/styles/contact.css";
import "@/styles/avaliacao-tecnica.css";
import "@/styles/usucapiao.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nivela.eng.br"),

  title: {
    default: "Nivela | Território & Patrimônio",
    template: "%s | Nivela",
  },

  description:
    "Regularização de imóveis, topografia, agrimensura e georreferenciamento no Rio de Janeiro, com responsabilidade técnica e análise territorial.",

  applicationName: "Nivela",

  icons: {
    icon: "/brand/nivela-symbol-light.png",
    apple: "/brand/nivela-symbol-light.png",
  },

  authors: [
    {
      name: "Nivela Território & Patrimônio",
    },
  ],

  creator: "Nivela Território & Patrimônio",
  publisher: "Nivela Território & Patrimônio",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Nivela Território & Patrimônio",

    title: "Nivela | Território & Patrimônio",

    description:
      "Regularização de imóveis, topografia, agrimensura e georreferenciamento para decisões patrimoniais mais seguras.",
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

        <div className="site-wrapper">
          <StructuredData />
          <Header />

          {children}

          <Footer />
        </div>

        <Analytics />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S62YR8E198"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              window.gtag = function() {
                window.dataLayer.push(arguments);
              };

              window.gtag('js', new Date());
              window.gtag('config', 'G-S62YR8E198');
            `,
          }}
        />
      </body>
    </html>
  );
}
