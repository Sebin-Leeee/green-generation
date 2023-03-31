

import styles from './Complete.module.css'
import mascot from '../../../public/mascot.png'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import TextBox4 from '../TextBox4'
import TextBox5 from '../TextBox5'


const components = [TextBox4, TextBox5];

const Complete = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentComponentIndex(1);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (currentComponentIndex === components.length - 1) {
      const timeoutId = setTimeout(() => {
        setShowButtons(true);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentComponentIndex]);

  const Component = components[currentComponentIndex];

  return (
    <>
      <div className={styles.main}>
        {!showButtons && (
          <>
            <Component />
            <Image className={styles.mascot_style} 
              src={mascot}
              width={200}/>
          </>
        )}
        {showButtons && (
          <>
          <div className={styles.buttons}>
            <button> <a href="/learning">START QUIZ</a></button>
            <button><a href="/learning">REVIEW LEARNING</a></button>
            <button><a href="/learning">MORE TERMINOLOGIES</a></button>
            </div>
          </>
        )}
      </div>
    </>
  )
};

export default Complete;
