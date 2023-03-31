import BackNextBtn from '../BtnFn'
import ShortBtn from '../ShortBtn'
import styles from './Contents.module.css'
import React, { useState } from 'react';

import Content2 from '../Content2';
import Content3 from '../Content3';


export default function Content1() {
   const [contentIndex, setContentIndex] = useState(0);
  const contents = [ <Content2 />, <Content3 />];

  const handleNext = () => {
    setContentIndex((contentIndex + 1) % contents.length);
  };

  const handlePrev = () => {
    setContentIndex((contentIndex - 1 + contents.length) % contents.length);
  };
  return (
    <>
    <div className={styles.container}>
      <h2>1.What is <br/> GREEN GENERATION?</h2>
      <p>GREEN GENERATION 
        <br/>is an app
        <br/>designed to educate users about their carbon footprint
        <br/>and help them reduce
        <br/>their impact on the environment.
        </p>
    </div>
    {contents[contentIndex]}
    <ShortBtn onNext={handleNext} onPrev={handlePrev} />
    </>
  )
}