"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

function NavLinks({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <ul className={className} id={className.includes("mobile") ? "mobile-navigation-links" : undefined}>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className={pathname === link.href ? "active" : undefined}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  return (
    <nav className="main-nav" aria-label="Navegação principal">
      <NavLinks className="nav-links nav-links-desktop" />
      <div className="nav-actions">
        <details className="nav-menu-details">
          <summary aria-controls="mobile-navigation-links" className="nav-menu-toggle">
            Menu
          </summary>
          <NavLinks className="nav-links nav-links-mobile" />
        </details>
        <Link href="/avaliacao-tecnica" className="nav-cta">
          Avaliação Técnica
        </Link>
      </div>
    </nav>
  );
}
