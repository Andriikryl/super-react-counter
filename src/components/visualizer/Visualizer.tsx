"use client";
import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { randomSortNumberList, sortNumberList } from "@/features/listSlice";
import { AnimatePresence, motion } from "framer-motion";

export default function Visualizer() {
  const dispatch = useDispatch();
  const numberList = useSelector((state: RootState) => state.list.numberList);
  const maxNumber = Math.max(...numberList);
  const scaleFactor = maxNumber > 0 ? 350 / maxNumber : 1;
  const handleSort = () => {
    dispatch(sortNumberList());
  };
  const handleRandomSort = () => {
    dispatch(randomSortNumberList());
  };
  return (
    <section className={style.visualizer}>
      <Container>
        <h4 className={style.visualizer__title}>Visualizer</h4>
        <div className={style.visualizer__box}>
          <AnimatePresence>
            {numberList.map((element, index) => (
              <motion.div
                className={style.element}
                key={index}
                style={{ height: element * scaleFactor + "px" }}
                layout
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: -200,
                }}
                transition={{ opacity: { duration: 0.7 } }}
              >
                <span className={style.element__number}>{element}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className={style.button__group}>
          <button className={style.button} onClick={handleSort}>
            Sort Array
          </button>
          <button className={style.button} onClick={handleRandomSort}>
            Random sort array
          </button>
        </div>
      </Container>
    </section>
  );
}
