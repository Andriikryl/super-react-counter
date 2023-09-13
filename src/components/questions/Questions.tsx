import React from "react";
import { Container } from "../container/Container";
import Accordion from "../Accordion/Accordion";
import { defaultFAQs } from "./defaultValues";
import style from "./style.module.css";

export default function Questions() {
  return (
    <section className={style.question}>
      <Container>
        <h4 className={style.question__title}>???</h4>
        <div className={style.faq__box}>
          {defaultFAQs.map((faq, i) => (
            <Accordion key={i} title={faq.question} body={faq.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
}
