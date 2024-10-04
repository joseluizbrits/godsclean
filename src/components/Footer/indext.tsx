"use client";

import Logo from "@/icons/Logo";
import { FooterContainer } from "./styles";
import Link from "next/link";

function Footer() {
  return (
    <FooterContainer className="containers-between-space padding-space">
      <Link href="/" aria-label="Ir para a página principal">
        <Logo />
        <span>GODSCLEAN</span>
      </Link>
      <div>
        <span>
          © Copyright {new Date().getFullYear()} -{" "}
          {new Date().getFullYear() + 1} | GodsClean | Todos os Direitos
          Reservados | Desenvolvido por 
          <Link
            href="https://www.brits.com.br/"
            target="_blank"
            aria-label="Ir para o site do Brits"
          >
            BRITS
          </Link>
        </span>
      </div>
    </FooterContainer>
  );
}

export default Footer;
