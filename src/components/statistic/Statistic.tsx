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

  const smallestNumber = numberList.reduce((min, current) => {
    return current < min ? current : min;
  }, numberList[0]);

  const largestNumber = numberList.reduce((max, current) => {
    return current > max ? current : max;
  }, numberList[0]);

  return (
    <section className={style.statistic}>
      <Container>
        <div className={style.statistic__box}>
          <h3 className={style.statistic__title}>Statistic</h3>
          <div className={style.statistic__description}>
            <p className={style.total__sum}>
              <span className={style.num__title}>Total sum: </span>{" "}
              <span className={style.stut__number}>{totalSum}</span>
            </p>
            <p className={style.total__sum}>
              <span className={style.num__title}>The smallest number:</span>{" "}
              <span className={style.stut__number}>{smallestNumber}</span>
            </p>
            <p className={style.total__sum}>
              <span className={style.num__title}>The biggest number:</span>
              <span className={style.stut__number}>{largestNumber}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
