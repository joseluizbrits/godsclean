"use client";

import { HeroContainer } from "./styles";
import Image from "next/image";

function Hero() {
  return (
    <HeroContainer>
      <h1>GODSCLEAN</h1>

      <span className="padding-space">Lavagem e Limpeza de Estofados</span>

      <Image
        fill
        unoptimized
        priority
        src={"/hero.png"}
        alt="sofá azul centralizado no centro com uma mesinha ao lado com livros em cima"
      />
    </HeroContainer>
  );
}

export default Hero;
