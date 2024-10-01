"use client";

import Sofa from "@/icons/Sofa";
import { ServicesContainer } from "./styles";
import Title from "@/components/Title";
import Bed from "@/icons/Bed";
import Bench from "@/icons/Bench";
import Image from "next/image";

function Services() {
  return (
    <ServicesContainer className="containers-between-space padding-space">
      <Title centered>
        <h2>O que oferecemos?</h2>
        <p>
          Na GodsClean, trazemos soluções de limpeza tão puras quanto os céus!
          Garantimos qualidade, confiabilidade e saúde, tudo no aconchego do seu
          lar
        </p>
      </Title>

      <div className="content">
        <div>
          <h3>São três tipos de lavagem</h3>

          <ul>
            <li>
              <Sofa />
              <p>
                <strong>Sofás:</strong>Removemos manchas, odores e sujeira
                acumulada, deixando seu sofá pronto para os milagres do dia a
                dia.
              </p>
            </li>
            <li>
              <Bed />
              <p>
                <strong>Colchões:</strong>Adeus ácaros e impurezas. Nossa
                limpeza garante noites mais limpas e tranquilas, como dormir nas
                nuvens.
              </p>
            </li>
            <li>
              <Bench />
              <p>
                <strong>Bancos Automotivos:</strong>Eliminamos sujeira e manchas
                dos bancos, te proporcionando uma viagem tão limpa quanto
                relaxante.
              </p>
            </li>
          </ul>
        </div>

        <div className="images">
          <div id="img-1">
            <Image
              src="/sofa-1.webp"
              fill
              alt="Um sofá e uma poltrona marrons"
            />
          </div>
          <div id="img-2">
            <Image
              src="/sofa-2.webp"
              fill
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
