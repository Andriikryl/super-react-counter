import React from "react";
import style from "./style.module.css";

interface ICounterControls {
  resetAll: () => void;
}

export default function CounterControls({ resetAll }: ICounterControls) {
  return (
    <div className={style.box__controls}>
      <button className={style.reset__button} onClick={resetAll}>
        Reset
      </button>
    </div>
  );
}
