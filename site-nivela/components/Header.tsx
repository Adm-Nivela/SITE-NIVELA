import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

function Logo() {
  return (
    <Link href="/" className="nav-logo" aria-label="Nivela - página inicial">
      <Image
        src="/brand/nivela-symbol-light.png"
        alt=""
        width={48}
        height={48}
        className="nav-logo-symbol"
        priority
      />

      <span>
        <span className="nav-logo-text">NIVELA</span>
        <span className="nav-logo-sub">Território & Patrimônio</span>
      </span>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="nav">
      <Logo />
      <Navbar />
    </header>
  );
}
