import { ReactNode } from "react";
import style from "./style.module.css";

export type FAQ = { question: string; answer: ReactNode };

export const defaultFAQs: FAQ[] = [
  {
    question: "Array ?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          The Array object, as with arrays in other programming languages,
          enables storing a collection of multiple items under a single variable
          name, and has members for performing common array operations.
        </p>
      </div>
    ),
  },
  {
    question: "Array: length ?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          The length data property of an Array instance represents the number of
          elements in that array. The value is an unsigned, 32-bit integer that
          is always numerically greater than the highest index in the array.
        </p>
      </div>
    ),
  },
  {
    question: "Bubble sort ?",
    answer: (
      <div className={style.accordion__box}>
        <p className={style.accordion__body}>
          Bubble sort, sometimes referred to as sinking sort, is a simple
          sorting algorithm that repeatedly steps through the input list element
          by element, comparing the current element with the one after it,
          swapping their values if needed. These passes through the list are
          repeated until no swaps had to be performed during a pass, meaning
          that the list has become fully sorted. The algorithm, which is a
          comparison sort, is named for the way the larger elements bubble up to
          the top of the list.
        </p>
      </div>
    ),
  },
];
