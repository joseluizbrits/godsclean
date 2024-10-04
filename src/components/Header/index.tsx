"use client";

import { HeaderContainer } from "./styles";
import Link from "next/link";
import Logo from "@/icons/Logo";

function Header() {
  return (
    <HeaderContainer className="padding-space">
      <ul>
        <li>
          <span>Alguma coisa</span>
        </li>

        <li>
          <Link href="/" aria-label="Ir para a página principal">
            <Logo />
          </Link>
        </li>

        <li>
          <Link
            href="https://api.whatsapp.com/message/NOXGQOBSWEKBH1?autoload=1&app_absent=0wa.me/message/NOXGQOBSWEKBH1"
            aria-label="Entrar em contato pelo WhatsApp"
          >
            CONTATO
          </Link>
        </li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
