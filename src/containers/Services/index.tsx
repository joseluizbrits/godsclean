"use client";

import { ServicesContainer } from "./styles";
import { openSans } from "@/lib/fonts";

import Title from "@/components/Title";
import Sofa from "@/icons/Sofa";
import Bed from "@/icons/Bed";
import Bench from "@/icons/Bench";
import Image from "next/image";

import { useRef } from "react";
import { ShowUp, ScaleUp } from "@/animation";

function Services() {
  const container = useRef(null);

  ShowUp(container, ["#service-1", "#service-2", "#service-3"]);
  ScaleUp(container, ["#img-1", "#img-2", "#img-3", "#img-4", "#img-5"]);

  return (
    <ServicesContainer
      className="containers-between-space padding-space"
      ref={container}
    >
      <Title centered>
        <h2>O que Oferecemos?</h2>
        <p className={openSans.className}>
          Na GodsClean, trazemos soluções de limpeza tão puras quanto os céus!{" "}
          <strong>Garantimos qualidade, confiabilidade e saúde</strong>, tudo no
          aconchego do seu lar
        </p>
      </Title>

      <div className="content">
        <div>
          <h3>São Três Tipos de Limpeza</h3>

          <ul>
            <li id="service-1">
              <Sofa />
              <p className={openSans.className}>
                <strong>Sofás:</strong>
                <em>Removemos manchas, odores e sujeira acumulada</em>, deixando
                seu sofá pronto para os milagres do dia a dia.
              </p>
            </li>
            <li id="service-2">
              <Bed />
              <p className={openSans.className}>
                <strong>Colchões:</strong>Adeus ácaros e impurezas. Nossa{" "}
                <em>limpeza garante noites mais limpas e tranquilas</em>, como
                dormir nas nuvens.
              </p>
            </li>
            <li id="service-3">
              <Bench />
              <p className={openSans.className}>
                <strong>Bancos Automotivos:</strong>
                <em>Eliminamos sujeira e manchas dos bancos</em>, te
                proporcionando uma viagem tão limpa quanto relaxante.
              </p>
            </li>
          </ul>
        </div>

        <div className="images">
          <div id="img-1">
            <Image
              src="/sofa-1.webp"
              fill
              sizes="(min-width: 1440px) 60vw, 40vw"
              alt="Um sofá e uma poltrona marrons"
            />
          </div>
          <div id="img-2">
            <Image
              src="/sofa-2.webp"
              fill
              sizes="(min-width: 768px) 30vw, 15vw"
              alt="Uma poltrona azul água"
              unoptimized
            />
          </div>
          <div id="img-3">
            <Image
              src="/sofa-3.webp"
              fill
              alt="Um sofá azul clarinho"
              unoptimized
            />
          </div>
          <div id="img-4">
            <Image src="/sofa-4.webp" fill alt="Um sofá clarinho" unoptimized />
          </div>
          <div id="img-5">
            <Image
              src="/sofa-5.webp"
              fill
              alt="Um sofá verde amplo"
              unoptimized
            />
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
}

export default Services;
