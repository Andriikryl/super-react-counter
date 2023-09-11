"use client";
import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Less, More } from "@/components/icons/AccordionIcons";
import style from "./style.module.css";

type Props = {
  title: string;
  body: ReactNode;
};

const Accordion = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.accordion} onClick={() => setIsOpen((prev) => !prev)}>
      <button
        className={style.accordion__button}
        aria-controls={props.title}
        aria-expanded={isOpen}
      >
        <div className={style.accordion__title}>{props.title}</div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? "minus" : "plus"}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              rotate: 0,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circOut",
              },
            }}
            exit={{
              rotate: isOpen ? -90 : 90,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circIn",
              },
            }}
          >
            {isOpen ? <Less /> : <More />}
          </motion.div>
        </AnimatePresence>
      </button>
      <motion.div
        id={props.title}
        initial={false}
        animate={
          isOpen
            ? {
                height: "auto",
                opacity: 1,
                display: "block",
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }
            : {
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
                transitionEnd: {
                  display: "none",
                },
              }
        }
        className="font-light"
      >
        {props.body}
      </motion.div>
    </div>
  );
};

export default Accordion;
