"use client";
import { useSelector } from "react-redux";
import { Container } from "../container/Container";
import { RootState } from "@/store/store";
import style from "./style.module.css";

export default function Statistic() {
  const numberList = useSelector((state: RootState) => state.list.numberList);
  const totalSum = numberList.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  return (
    <section className={style.statistic}>
      <Container>
        <div className={style.statistic__box}>
          <h3 className={style.statistic__title}>Statistic</h3>
          <div>
            <p className={style.total__sum}>
              Total sum: <span>{totalSum}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
