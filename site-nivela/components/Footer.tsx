import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-about">
          <strong className="footer-brand">NIVELA</strong>

          <p>
            A Nivela conecta documentos, limites e realidade de campo para
            produzir informações confiáveis sobre imóveis e território.
          </p>
        </div>

        <div className="footer-col">
          <h5>Páginas</h5>

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/sobre">Sobre nós</Link>
            </li>

            <li>
              <Link href="/servicos">Serviços</Link>
            </li>

            <li>
              <Link href="/avaliacao-tecnica">Diagnóstico técnico</Link>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Serviços</h5>

          <ul>
            <li>
              <Link href="/servicos#regularizacao-de-imoveis">
                Regularização de Imóveis
              </Link>
            </li>

            <li>
              <Link href="/servicos#levantamento-topografico">
                Levantamento Topográfico
              </Link>
            </li>

            <li>
              <Link href="/servicos#georreferenciamento-rural">
                Georreferenciamento Rural
              </Link>
            </li>

            <li>
              <Link href="/servicos#usucapiao-retificacao">
                Usucapião e Retificação
              </Link>
            </li>

            <li>
              <Link href="/servicos#divisao-demarcacao">
                Divisão e Demarcação
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Nivela Território & Patrimônio. Todos os
          direitos reservados.
        </p>

        <p>Design by Signal Jr.</p>
      </div>
    </footer>
  );
}