"use client";

import { HeaderContainer } from "./styles";
import Logo from "@/icons/Logo";

function Header() {
  return (
    <HeaderContainer className="padding-space">
      <ul>
        <li>
          <span>Alguma coisa</span>
        </li>

        <li>
          <a href="/">
            <Logo />
          </a>
        </li>

        <li>
          <a>CONTATO</a>
        </li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
