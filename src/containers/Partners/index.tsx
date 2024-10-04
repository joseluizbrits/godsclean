"use client";

import { PartnersContainer } from "./styles";
import Image from "next/image";
import Title from "@/components/Title";

function Partners() {
  return (
    <PartnersContainer className="containers-between-space padding-space">
      <Title centered>
        <h2>Parceiros</h2>
      </Title>
      <ul>
        <li>
          <Image
            src="/marinha.webp"
            fill
            sizes="15vw"
            alt="Logo da Marinha do Brasil"
          />
        </li>
        <li>
          <Image
            src="/almofadinhas.webp"
            fill
            sizes="15vw"
            alt="Logo da Almofadinhas"
          />
        </li>
        <li>
          <Image
            src="/uerj.webp"
            fill
            sizes="15vw"
            alt="Logo da Universidade do Estado do Rio de Janeiro (UERJ)"
          />
        </li>
        <li>
          <Image
            src="/oticas-souza.webp"
            fill
            sizes="15vw"
            alt="Logo da Óticas Souza"
          />
        </li>
        <li>
          <Image
            src="/lewer-tur.webp"
            fill
            sizes="15vw"
            alt="Logo da Lewer Tur"
          />
        </li>
      </ul>
    </PartnersContainer>
  );
}

export default Partners;
