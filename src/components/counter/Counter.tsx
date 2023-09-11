"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../../features/counterSlice";
import { useState } from "react";
import { RootState } from "../../store/store";
import { AnimatedNumber } from "../animateValue/AnimatedNumber";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { defaultFAQs } from "../Accordion/defaultValues";
import Accordion from "../Accordion/Accordion";
import MoreButtonsGroup from "../moreButtonsGroup/MoreButtonsGroup";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className={style.count__section}>
      <Container>
        <div className={style.box__controls}>
          <button className={style.reset__button} onClick={resetAll}>
            Reset
          </button>
        </div>
        <div className={style.counter__box}>
          <AnimatedNumber value={count} />
          <div className={style.button__group}>
            <button
              className={style.button}
              onClick={() => dispatch(increment())}
            >
              +
            </button>
            <button
              className={style.button}
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
          <div className={style.input__wrapper}>
            <input
              type="number"
              className={style.input}
              id="name"
              placeholder="type number"
              onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
            />
            <label className={style.label} htmlFor="name">
              Type number here...
            </label>
            <button
              className={style.input__button}
              onClick={() => dispatch(incrementByAmount(addValue))}
            >
              Add Amount
            </button>
          </div>
        </div>
        <MoreButtonsGroup />
      </Container>
    </section>
  );
};
export default Counter;
