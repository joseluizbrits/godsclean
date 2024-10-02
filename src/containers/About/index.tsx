"use client";

import { AboutContainer } from "./styles";
import { openSans } from "@/lib/fonts";
import { useRef } from "react";

import Title from "@/components/Title";
import Goal from "@/icons/Goal";
import Eye from "@/icons/Eye";
import Heart from "@/icons/Heart";
import { ShowUp } from "@/animation";

function About() {
  const container = useRef(null);

  ShowUp(container, ["#mission", "#vision", "#values"]);

  return (
    <AboutContainer
      className="containers-between-space padding-space"
      ref={container}
    >
      <Title centered>
        <h2>Quem somos nós?</h2>
        <p className={openSans.className}>
          Vamos <strong>além de um simples serviço de limpeza.</strong> Queremos
          que você tenha uma experiência leve e agradável, além da limpeza
          profissional
        </p>
      </Title>

      <div>
        <div>
          <h3>Especialistas em limpeza de estofados</h3>

          <div>
            <p className={openSans.className}>
              Nossa missão é trazer a pureza dos céus diretamente para a sua
              casa, deixando seus estofados como novos e completamente
              renovados.
            </p>
            <p className={openSans.className}>
              Combinamos produtos de alta qualidade e um toque especial da nossa
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
        <li id="mission">
          <Goal />
          <h4>Missão</h4>
          <p>Oferecer uma experiência de renovação.</p>
        </li>
        <li id="vision">
          <Eye />
          <h4>Visão</h4>
          <p>Se tornar referência em prestações de serviços no Brasil.</p>
        </li>
        <li id="values">
          <Heart />
          <h4>Valores</h4>
          <p>Ética profissional, respeito e cuidado com nosso cliente.</p>
        </li>
      </ul>
    </AboutContainer>
  );
}

export default About;
