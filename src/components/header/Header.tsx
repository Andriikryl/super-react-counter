import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
export default function Header() {
  return (
    <header className={style.header}>
      <Container>Header</Container>
    </header>
  );
}
