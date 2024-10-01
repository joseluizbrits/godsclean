"use client";

import Logo from "@/icons/Logo";
import { FooterContainer } from "./styles";
import Link from "next/link";

function Footer() {
  return (
    <FooterContainer className="containers-between-space padding-space">
      <Link href="/">
        <Logo />
        <span>GODSCLEAN</span>
      </Link>
      <div>
        <span>
          © Copyright 2024 - 2025 | GODSCLEAN | Todos os Direitos Reservados |
          Desenvolvido por 
          <Link href="https://www.brits.com.br/" target="_blank">
            BRITS
          </Link>
        </span>
      </div>
    </FooterContainer>
  );
}

export default Footer;
