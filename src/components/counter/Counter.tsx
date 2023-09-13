"use client";
import { useSelector, useDispatch } from "react-redux";
import { reset, incrementByAmount } from "../../features/counterSlice";
import { useState } from "react";
import { AnimatedNumber } from "../animateValue/AnimatedNumber";
import { Container } from "../container/Container";
import style from "./style.module.css";
import MoreButtonsGroup from "../moreButtonsGroup/MoreButtonsGroup";
import CounterControls from "../counterControls/CounterControls";
import IncDecGroupButton from "../incDecGroupButton/IncDecGroupButton";
import ListNUmbers from "../listNumbers/ListNUmbers";
import { addNumber, addNumbers, deleteAllNumbers } from "@/features/listSlice";
import { RootState } from "@/store/store";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const numberList = useSelector((state: RootState) => state.list.numberList);
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  const handleAddAmount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(incrementByAmount(addValue));
  };

  const addToNumberList = () => {
    dispatch(addNumber(count));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllNumbers());
  };

  const addRandomNumbers = () => {
    const randomNumbers = []; // Initialize an array for random numbers
    for (let i = 0; i < 5; i++) {
      // Change 5 to the number of random numbers you want to add
      const randomNumber = Math.floor(Math.random() * 100); // Generate a random number (adjust the range as needed)
      randomNumbers.push(randomNumber);
    }
    dispatch(addNumbers(randomNumbers)); // Dispatch the action to add random numbers
  };

  return (
    <section className={style.count__section}>
      <Container className={style.container}>
        <ListNUmbers numberList={numberList} />
        <div className={style.counter__body}>
          <CounterControls
            resetAll={resetAll}
            addToNumberList={addToNumberList}
            handleDeleteAll={handleDeleteAll}
            addRandomNumbers={addRandomNumbers}
          />
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
        </div>
      </Container>
    </section>
  );
};
export default Counter;
