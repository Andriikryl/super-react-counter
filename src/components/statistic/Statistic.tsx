"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../container/Container";

interface StatisticProps {
  numberList: number[];
}

export default function Statistic({ numberList }: StatisticProps) {
  const [totalSum, setTotalSum] = useState<number>(0);

  useEffect(() => {
    const sum = numberList.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    setTotalSum(sum);
  }, [numberList]);

  return (
    <section>
      <Container>
        <div>
          <h3>statistic</h3>
          <p>{totalSum}</p>
        </div>
      </Container>
    </section>
  );
}
