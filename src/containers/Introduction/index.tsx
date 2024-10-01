"use client";

import Title from "@/components/Title";
import { IntroductionContainer } from "./styles";
import Image from "next/image";

function Introduction() {
  return (
    <IntroductionContainer className="containers-between-space">
      <Title centered>
        <h2>O que é a GODSCLEAN?</h2>
        <p>
          A GodsClean é a sua aliada celestial na batalha contra a sujeira!
          Somos especialistas em higienização de estofados, trazendo um toque
          divino para o seu sofá.
        </p>
      </Title>

      <ul>
        <li id="label-1">
          <span>Seu sofá renovado</span>
        </li>
        <li id="label-2">
          <span>Com conforto</span>
        </li>
        <li id="label-3">
          <span>No seu lar</span>
        </li>
        <li id="label-4">
          <span>Toque celestial</span>
        </li>
      </ul>

      <div className="image-container">
        <Image
          src="/sofa.png"
          fill
          alt="Sofá branco com uma mesinha branca que tem um abajur branco em cima"
          unoptimized
        />
      </div>
    </IntroductionContainer>
  );
}

export default Introduction;
