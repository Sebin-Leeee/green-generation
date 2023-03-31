import styles from './Complete.module.css'
import mascot from '../../../public/mascot.png'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import TextBox4 from '../TextBox4'
import TextBox5 from '../TextBox5'



const components = [TextBox4, TextBox5];

const LearningComplete = () => {
 
  return (
    <>
      <div className={styles.main}>
      
            <Image className={styles.mascot_style} 
              src={mascot}
              width={200}/>
      </div>
    </>
  )
};

export default LearningComplete;
