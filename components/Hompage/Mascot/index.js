import styles from './Mascot.module.css'
import mascot from '../../../public/mascot.png'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

const HomeMascot = () => {

  return (
    <>
     
        <Image className={styles.mascot_style} 
            src={mascot}
            width={200}/>
           
    </>
  )
};

export default HomeMascot;
