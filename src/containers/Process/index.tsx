"use client";

import { ProcessContainer } from "./styles";
import { openSans } from "@/lib/fonts";
import Title from "@/components/Title";

function Process() {
  return (
    <ProcessContainer className="containers-between-space margin-space">
      <Title>
        <h2>Como Funciona o Processo?</h2>
        <p className={openSans.className}>
          O processo de limpeza é simples, rápido e utiliza{" "}
          <strong>produtos próprios e de alta qualidade.</strong> A cura do seu
          sofá funciona da seguinte maneira
        </p>
      </Title>

      <ul>
        <li>
          <div>
            <span>1</span>
            <h3>Flotador Limpador</h3>
            <div>
              <p className={openSans.className}>
                Aplicamos o flotador limpador na superfície do estofado.
              </p>
              <p className={openSans.className}>
                Logo em seguida, deixamos agir por alguns minutos para{" "}
                <strong>soltar as moléculas de sujeira</strong>, facilitando a
                remoção posterior.
              </p>
            </div>
          </div>
        </li>

        <li>
          <div>
            <span>2</span>
            <h3>Remoção de Sujidade</h3>
            <div>
              <p className={openSans.className}>
                Esfregamos o estofado para{" "}
                <strong>retirar crostas e manchas de sujeira.</strong>
              </p>
              <p className={openSans.className}>
                Esta etapa pode ser repetida conforme o nível de sujeira
                presente.
              </p>
            </div>
          </div>
        </li>

        <li>
          <div>
            <span>3</span>
            <h3>Extração e Enxágue</h3>
            <div>
              <p className={openSans.className}>
                Extraímos toda a sujeira solta para um reservatório.
              </p>
              <p className={openSans.className}>
                Enxaguamos o estofado para{" "}
                <strong>remover qualquer resíduo de produto e sujeira.</strong>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </ProcessContainer>
  );
}

export default Process;
