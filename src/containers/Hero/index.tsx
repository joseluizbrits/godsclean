"use client";

import { HeroContainer } from "./styles";
import Image from "next/image";

function Hero() {
  return (
    <HeroContainer>
      <h1>GODSCLEAN</h1>

      <span className="padding-space">Limpeza e Higienização de Estofados</span>

      <Image
        src={"/hero.png"}
        alt="sofá azul centralizado no centro com uma mesinha ao lado com livros em cima"
        fill
        sizes="100vw"
        priority
        unoptimized
      />
    </HeroContainer>
  );
}

export default Hero;
