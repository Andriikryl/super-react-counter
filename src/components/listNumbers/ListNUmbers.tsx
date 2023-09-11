import React from "react";
import style from "./style.module.css";

interface IListNumbers {
  numberList: number[];
}

export default function ListNUmbers({ numberList }: IListNumbers) {
  return (
    <div className={style.list__box}>
      <h2 className={style.list__title}>list of numbers :</h2>
      <ul className={style.list}>
        {numberList.map((number, index) => (
          <li className={style.list__item} key={index}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}
