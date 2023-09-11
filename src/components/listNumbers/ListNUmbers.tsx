"use client";
import React from "react";
import style from "./style.module.css";
import { AnimatePresence, motion } from "framer-motion";

interface IListNumbers {
  numberList: number[];
  onDelete: (index: number) => void;
  onDeleteAll: () => void;
}

export default function ListNUmbers({ numberList, onDelete }: IListNumbers) {
  return (
    <div className={style.list__box}>
      <h2 className={style.list__title}>list of numbers :</h2>
      <ul className={style.list}>
        <AnimatePresence>
          {numberList.map((number, index) => (
            <motion.li
              className={style.list__item}
              key={index}
              layout
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: -200,
              }}
              transition={{ opacity: { duration: 0.2 } }}
            >
              <div className={style.flex__group}>
                {number}
                <button
                  className={style.delete__button}
                  onClick={() => onDelete(index)}
                >
                  <svg viewBox="0 0 16 16" width="12" height="12">
                    <path
                      d="M 1 1 L 15 15 M 1 15 L 15 1"
                      fill="none"
                      stroke-width="2"
                      stroke="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
