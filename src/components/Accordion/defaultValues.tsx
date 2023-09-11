"use client";
import { ReactNode } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { increment } from "@/features/counterSlice";
import MoreButtonsGroup from "../moreButtonsGroup/MoreButtonsGroup";

export type FAQ = { question: string; answer: ReactNode };
export const defaultFAQs: FAQ[] = [
  {
    question: "More buttos",
    answer: (
      <div className={style.accordion__box}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at dolor
        adipisci amet, voluptatibus soluta, modi veritatis molestiae facere
        vero, porro repudiandae cupiditate ratione quas consectetur debitis
        accusantium magnam voluptate.
      </div>
    ),
  },
];
