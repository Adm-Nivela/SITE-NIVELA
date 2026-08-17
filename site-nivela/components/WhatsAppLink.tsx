"use client";

import { whatsappHref } from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  className?: string;
  location: string;
  children: React.ReactNode;
};

export default function WhatsAppLink({
  className,
  location,
  children,
}: WhatsAppLinkProps) {
  function handleClick() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        location,
      });
    }
  }

  return (
    <a
      href={whatsappHref}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}