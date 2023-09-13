import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Link from "next/link";

const dataNav = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
];
export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__box}>
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              {dataNav.map((item) => {
                return (
                  <li key={item.id} className={style.nav__item}>
                    <Link className={style.nav__link} href={item.href}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
