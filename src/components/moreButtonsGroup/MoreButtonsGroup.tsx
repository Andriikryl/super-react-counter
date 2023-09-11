import {
  incrementBy100,
  incrementBy1000,
  incrementBy10000,
  incrementBy100000,
} from "@/features/counterSlice";
import React from "react";
import { useDispatch } from "react-redux";
import style from "./style.module.css";
export default function MoreButtonsGroup() {
  const dispatch = useDispatch();
  return (
    <div className={style.button__box}>
      <button
        className={style.button}
        onClick={() => dispatch(incrementBy100())}
      >
        add 100
      </button>
      <button
        className={style.button}
        onClick={() => dispatch(incrementBy1000())}
      >
        add 1000
      </button>
      <button
        className={style.button}
        onClick={() => dispatch(incrementBy10000())}
      >
        add 10000
      </button>
      <button
        className={style.button}
        onClick={() => dispatch(incrementBy100000())}
      >
        add 100000
      </button>
    </div>
  );
}
