import { Container } from "@/components/container/Container";
import React from "react";
import style from "./style.module.css";
import { randomUUID } from "crypto";
import Git from "@/components/icons/Git";
import Insta from "@/components/icons/Insta";
import Link from "next/link";

const dataTechnology = [
  "JavaScript",
  "TypeScript",
  "Redux",
  "Framer motion",
  "Next js",
  "Css",
];

export default function About() {
  return (
    <section className={style.about}>
      <Container>
        <div className={style.about__box}>
          <h1 className={style.about__title}>Info</h1>
          <p className={style.about__description}>
            Hi everyone! My name is Andrii and this is my little progect
          </p>
          <div className={style.stack__box}>
            <h2 className={style.stack__title}>Technologies stack:</h2>
            <ul className={style.stack__list}>
              {dataTechnology.map((item, index) => {
                return (
                  <li className={style.stack__item} key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className={style.git__text}>
            Check all my projects in my GitHub profile
          </p>
          <div className={style.links__group}>
            <Link
              className="info__social-link"
              href="https://github.com/Andriikryl"
              target="blank"
            >
              <Git />
            </Link>
            <Link
              href="https://www.instagram.com/andrej.kr/?hl=ru"
              target="blank"
            >
              <Insta />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
