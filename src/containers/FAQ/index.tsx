"use client";

import { FAQContainer } from "./styles";
import { useState } from "react";

import { openSans } from "@/lib/fonts";
import { faq } from "./faq";

import Title from "@/components/Title";
import Dropdown from "@/icons/Dropdown";

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState("");

  function handleQuestion(e: React.MouseEvent<HTMLElement>) {
    if (!e.currentTarget) return;

    console.log(e.currentTarget.id);

    const question = e.currentTarget.id;

    if (question === activeQuestion) return setActiveQuestion("");

    return setActiveQuestion(question);
  }

  return (
    <FAQContainer className="containers-between-space padding-space">
      <Title centered>
        <h2>Perguntas frequentes</h2>
      </Title>

      <ul>
        {faq.map(({ id, question, answer }) => (
          <li key={id} className={activeQuestion === id ? "active" : ""}>
            <div id={id} onClick={(e) => handleQuestion(e)}>
              <h3>{question}</h3>
              <Dropdown />
            </div>
            <p className={openSans.className}>{answer}</p>
          </li>
        ))}
      </ul>
    </FAQContainer>
  );
}

export default FAQ;
