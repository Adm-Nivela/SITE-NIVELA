import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-about">
          <strong className="footer-brand">NIVELA</strong>
          <p>
            Segurança técnica e solidez patrimonial. Agrimensura, cartografia,
            topografia e regularização fundiária com responsabilidade assinada.
          </p>
        </div>

        <div className="footer-col">
          <h5>Páginas</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre">Sobre nós</Link></li>
            <li><Link href="/servicos">Serviços</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Serviços</h5>
          <ul>
            <li>Topografia</li>
            <li>Georreferenciamento</li>
            <li>Regularização fundiária</li>
            <li>Demarcação de terras</li>
            <li>Desenho técnico</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Nivela Território & Patrimônio. Todos os direitos reservados.</p>
        <p>Design by Signal Jr.</p>
      </div>
    </footer>
  );
}