import React from "react";
import style from "./style.module.css";

interface ICounterControls {
  resetAll: () => void;
  addToNumberList: () => void;
}

export default function CounterControls({
  resetAll,
  addToNumberList,
}: ICounterControls) {
  return (
    <div className={style.box__controls}>
      <button className={style.button} onClick={resetAll}>
        Reset
      </button>
      <button className={style.button} type="button" onClick={addToNumberList}>
        Add to List
      </button>
    </div>
  );
}
