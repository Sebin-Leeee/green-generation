import BackNextBtn from '../BtnFn'
import ShortBtn from '../ShortBtn'
import styles from './Contents.module.css'
import React, { useState } from 'react';
import Content2 from '../Content2';
import Content3 from '../Content3';
import Content1 from '../Content1';


export default function Contents() {
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [ <Content1 />, <Content2 />, <Content3 />];
 

  const handleNext = () => {
    setContentIndex((contentIndex + 1) % contents.length);
    
  };

  const handlePrev = () => {
    setContentIndex((contentIndex - 1 + contents.length) % contents.length);
    
  };
  return (
    <>
    <div className={styles.container}>
    {contents[contentIndex]}
    <ShortBtn onNext={handleNext} onPrev={handlePrev} />
    </div>
    </>
  )
}