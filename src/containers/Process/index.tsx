"use client";

import Title from "@/components/Title";
import { ProcessContainer } from "./styles";

function Process() {
  return (
    <ProcessContainer className="containers-between-space margin-space">
      <Title>
        <h2>Como funciona o processo?</h2>
        <p>
          O processo de limpeza é simples, rápido e utiliza produtos próprios e
          de alta qualidade. A cura do seu sofá funciona da seguinte maneira
        </p>
      </Title>

      <ul>
        <li>
          <div>
            <span>1</span>
            <h3>Flotador Limpador</h3>
            <div>
              <p>Aplicamos o flotador limpador na superfície do estofado.</p>
              <p>
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
              <p>
                Esfregamos o estofado para{" "}
                <strong>retirar crostas e manchas de sujeira.</strong>
              </p>
              <p>
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
              <p>Extraímos toda a sujeira solta para um reservatório.</p>
              <p>
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
