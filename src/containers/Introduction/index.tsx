"use client";

import { IntroductionContainer } from "./styles";
import { useRef } from "react";

import Image from "next/image";
import Title from "@/components/Title";

import { openSans } from "@/lib/fonts";
import { ScaleUp, ShowUp } from "@/animation";

function Introduction() {
  const container = useRef(null);

  ScaleUp(container, ["#label-1", "#label-2", "#label-3", "#label-4"]);
  ShowUp(container, [".image-container"]);

  return (
    <IntroductionContainer className="containers-between-space" ref={container}>
      <Title centered>
        <h2>O que é a GodsClean?</h2>
        <p className={openSans.className}>
          A GodsClean é a sua aliada celestial na batalha contra a sujeira!
          Somos <strong>especialistas em higienização de estofados</strong>,
          trazendo um toque divino para o seu sofá
        </p>
      </Title>

      <ul>
        <li id="label-1" className="label">
          <span>Seu sofá renovado</span>
        </li>
        <li id="label-2" className="label">
          <span>Com conforto</span>
        </li>
        <li id="label-3" className="label">
          <span>No seu lar</span>
        </li>
        <li id="label-4" className="label">
          <span>Toque celestial</span>
        </li>
      </ul>

      <div className="image-container">
        <Image
          src="/sofa.png"
          alt="Sofá branco com uma mesinha branca que tem um abajur branco em cima"
          fill
          sizes="100vw"
          unoptimized
        />
      </div>
    </IntroductionContainer>
  );
}

export default Introduction;
