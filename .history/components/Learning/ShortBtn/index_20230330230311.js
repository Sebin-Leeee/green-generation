import React from 'react';
import styles from './ShortBtn.module.css'
import { useState } from 'react';
import Content1 from '../Contents';
import Content2 from '../Content2';
import Content3 from '../Content3';

const ShortBtn = ({ onNext, onPrev }) => {
    const [contentIndex, setContentIndex] = useState(0);
    const contents = [<Content1 />, <Content2 />, <Content3 />];
  
    const handleNext = () => {
      setContentIndex((contentIndex + 1) % contents.length);
      onNext();
    };
  
    const handleBack = () => {
      setContentIndex((contentIndex - 1 + contents.length) % contents.length);
      onPrev();
    };
  
    return (
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleBack}>Back</button>
        <button className={styles.button} onClick={handleNext}>Next</button>
      </div>
    );
};

export default ShortBtn;