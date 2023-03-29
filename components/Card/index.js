import styles from "@/components/Card/Card.module.css";
import { useState, useEffect } from "react";
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
    <li className={styles.list}>
      <div onClick={handleClick} className={styles.itemContainer} >
        <div  >
          {cardIndex === selectedAnswerIndex ? (
            <button className={styles.circle__green} />
          ) : (
            <button className={styles.circle} />
          )}
        </div>
        <div>
          {cardIndex === selectedAnswerIndex ? (
            <div className={styles.btn__thicker}><span>{cardAnswer.text}</span></div>
          ) : (
            <div className={styles.btn__box}><span>{cardAnswer.text}</span></div>
          )}
        </div>
      </div>

    </li>
  );
}