import styles from './Complete.module.css'
import mascot from '../../../public/mascot.png'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import TextBox4 from '../TextBox4'
import TextBox5 from '../TextBox5'



const components = [TextBox4, TextBox5];

const LearningComplete = () => {
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
            <Current />
            <Image className={styles.mascot_style} 
              src={mascot}
              width={200}/>
      </div>
    </>
  )
};

export default LearningComplete;
