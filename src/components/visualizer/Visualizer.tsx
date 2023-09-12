"use client";
import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Visualizer() {
  const numberList = useSelector((state: RootState) => state.list.numberList);
  const maxNumber = Math.max(...numberList);
  const scaleFactor = maxNumber > 0 ? 350 / maxNumber : 1;
  return (
    <section className={style.visualizer}>
      <Container>
        <h4 className={style.visualizer__title}>Visualizer</h4>
        <div className={style.visualizer__box}>
          {numberList.map((element, index) => (
            <div
              className={style.element}
              key={index}
              style={{ height: element * scaleFactor + "px" }}
            >
              <span className={style.element__number}>{element}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
