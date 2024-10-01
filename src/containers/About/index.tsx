"use client";

import Title from "@/components/Title";
import { AboutContainer } from "./styles";
import Goal from "@/icons/Goal";
import Eye from "@/icons/Eye";
import Heart from "@/icons/Heart";

function About() {
  return (
    <AboutContainer className="containers-between-space padding-space">
      <Title centered>
        <h2>Quem somos nós?</h2>
        <p>
          Vamos alem de um simples serviço de limpeza. Queremos que você receba
          tenha uma experiência leve e agradável, além da limpeza profissional
        </p>
      </Title>

      <div>
        <div>
          <h3>Especialistas em limpeza de estofados</h3>

          <div>
            <p>
              Nossa missão é trazer a pureza dos céus diretamente para a sua
              casa, deixando seus estofados como novos e completamente
              renovados.
            </p>
            <p>
              Combinamos produtos de alta qualidade e o toque especial de uma
              equipe dedicada para garantir um serviço impecável.
            </p>
          </div>
        </div>

        {/* Colocar uma imagem aqui embaixo */}
        <div
          style={{
            display: "grid",
            placeItems: "center",
            backgroundColor: "var(--highlight)",
            color: "var(--emphasis)",
            fontSize: "2rem",
          }}
        >
          IMG
        </div>
      </div>

      <ul>
        <li>
          <Goal />
          <h4>Missão</h4>
          <p>Oferecer não apenas serviços, mas uma experiência de renovação.</p>
        </li>
        <li>
          <Eye />
          <h4>Visão</h4>
          <p>Se tornar referência em prestações de serviços no Brasil.</p>
        </li>
        <li>
          <Heart />
          <h4>Valores</h4>
          <p>Ética profissional, respeito e cuidado com nosso cliente.</p>
        </li>
      </ul>
    </AboutContainer>
  );
}

export default About;
