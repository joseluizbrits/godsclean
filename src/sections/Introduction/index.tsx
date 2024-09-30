"use client";

import Title from "@/components/Title";
import { IntroductionContainer } from "./styles";

function Introduction() {
  return (
    <IntroductionContainer className="sections-between-sections">
      <Title centered>
        <h2>O que é a GODSCLEAN?</h2>
        <p>
          A GodsClean é a sua aliada celestial na batalha contra a sujeira!
          Somos especialistas em higienização de estofados, trazendo um toque
          divino para o seu sofá.
        </p>
      </Title>
    </IntroductionContainer>
  );
}

export default Introduction;
