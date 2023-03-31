import styles from './Intro.module.css'
import mascot from '../../../public/mascot.png'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import TextBox1 from '../TextBox1'
import TextBox2 from '../TextBox2'
import TextBox3 from '../TextBox3'
import LearningContents from '../Contents'


const components = [TextBox1, TextBox2, TextBox3];

const LearningIntro = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentComponentIndex(prevIndex => (prevIndex + 1) % components.length);
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (currentComponentIndex === components.length - 1) {
      clearInterval(intervalId);
    }
  }, [currentComponentIndex, intervalId]);

  const Current = components[currentComponentIndex];

  const handleButtonClick = () => {
    setShowContent(true);
  }

  return (
    <>
      <div className={styles.main}>
        {showContent ? (
          <LearningContents />
        ) : (
          <>
            <Current />
            <Image className={styles.mascot_style} 
              src={mascot}
              width={200}/>
            {currentComponentIndex === components.length - 1 && (
              <button className={styles.button} onClick={handleButtonClick}>Next</button>
            )}
          </>
        )}
      </div>
    </>
  )
};

export default LearningIntro;
