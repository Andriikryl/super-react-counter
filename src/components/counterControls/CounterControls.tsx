import React from "react";
import style from "./style.module.css";

interface ICounterControls {
  resetAll: () => void;
  addToNumberList: () => void;
  handleDeleteAll: () => void;
}

export default function CounterControls({
  resetAll,
  addToNumberList,
  handleDeleteAll,
}: ICounterControls) {
  return (
    <div className={style.box__controls}>
      <button className={style.button} onClick={resetAll}>
        Reset
      </button>
      <button className={style.button} type="button" onClick={addToNumberList}>
        Add to List
      </button>
      <button className={style.button} onClick={handleDeleteAll}>
        Delete All list
      </button>
    </div>
  );
}
