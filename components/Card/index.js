import styles from "@/components/Card/Card.module.css";
import { useState,useEffect } from "react";
export default function Card({
  cardIndex,
  cardAnswer,
  selectedAnswerIndex,
  onSelectAnswer
}) {

  const handleClick = () => {
    if (selectedAnswerIndex === cardIndex) {
      onSelectAnswer(-1);
    } else {
      onSelectAnswer(cardIndex);
    }
  };

  return (
    <li>
      <button onClick={handleClick}>
        {cardIndex === selectedAnswerIndex ? (
          <button className={styles.circle} />
        ) : (
          <button className={styles.circle__green} />
        )}
        {cardAnswer.text}
      </button>
    </li>
  );
}