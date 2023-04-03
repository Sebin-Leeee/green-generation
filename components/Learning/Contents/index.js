import BackNextBtn from '../BtnFn'
import ShortBtn from '../ShortBtn'
import styles from './Contents.module.css'
import React, { useState } from 'react';
import Content2 from '../Content2';
import Content3 from '../Content3';
import Content1 from '../Content1';
import { useRouter } from 'next/router';


export default function Contents() {
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [ <Content1 />, <Content2 />, <Content3 />];
  const router = useRouter();

  const handleNext = () => {
    if (contentIndex === 2) {
      router.push('/learningcomplete'); // Navigate to a new page after the third content
    } else {
      setContentIndex((contentIndex + 1) % contents.length);
    }
  };
  
  const handlePrev = () => {
    if (contentIndex === 0) {
      router.push('/learning'); // Navigate to a new page after the third content
    } else{
    setContentIndex((contentIndex - 1 + contents.length) % contents.length);
    }
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