import styles from "@/components/Quiz/Card/Card.module.css";
import { useState, useEffect } from "react";
export default function Card({
  cardAnswer,
  selectedAnswerIndex,
  onSelectAnswer
}) {
  const handleClick = (index) => {
    onSelectAnswer(index);
  };


  return (
    <li className={styles.list}>
      {
        cardAnswer.map((answer,index) => (
          <div key={index}
          onClick={() => handleClick(index)} 
          className={styles.itemContainer} >
            <div>
              {index === selectedAnswerIndex ? (
                <button className={styles.circle__green} />
              ) : (
                <button className={styles.circle} />
              )}
            </div>
            <div>
              {index === selectedAnswerIndex ? (
                <div className={styles.btn__thicker}><span>{answer.text}</span></div>
              ) : (
                <div className={styles.btn__box}><span>{answer.text}</span></div>
              )}
            </div>
          </div>
        ))
      }
   

    </li>
  );
}