import React from "react";
import { useDispatch } from "react-redux";
import style from "./style.module.css";
import { decrement, increment } from "@/features/counterSlice";

export default function IncDecGroupButton() {
  const dispatch = useDispatch();
  return (
    <div className={style.button__group}>
      <button className={style.button} onClick={() => dispatch(increment())}>
        +
      </button>
      <button className={style.button} onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}
