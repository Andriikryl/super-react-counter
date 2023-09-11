"use client";
import { useSelector, useDispatch } from "react-redux";
import { reset, incrementByAmount } from "../../features/counterSlice";
import { useState } from "react";
import { RootState } from "../../store/store";
import { AnimatedNumber } from "../animateValue/AnimatedNumber";
import { Container } from "../container/Container";
import style from "./style.module.css";
import MoreButtonsGroup from "../moreButtonsGroup/MoreButtonsGroup";
import CounterControls from "../counterControls/CounterControls";
import IncDecGroupButton from "../incDecGroupButton/incDecGroupButton";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  const handleAddAmount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(incrementByAmount(addValue));
  };

  return (
    <section className={style.count__section}>
      <Container>
        <CounterControls resetAll={resetAll} />
        <div className={style.counter__box}>
          <AnimatedNumber value={count} />
          <IncDecGroupButton />
          <div className={style.input__wrapper}>
            <form onSubmit={handleAddAmount} className={style.form}>
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
              <button className={style.input__button} type="submit">
                Add Amount
              </button>
            </form>
          </div>
        </div>
        <MoreButtonsGroup />
      </Container>
    </section>
  );
};
export default Counter;
