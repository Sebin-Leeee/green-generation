import Head from 'next/head'
import styles from '../styles/LearningIntro.module.css'
import NavBarLearning from '@/components/NavBar/Learning'
import TopBar from '@/components/TopBar'
import StartLearnBtn from '@/components/Buttons/startLearnBtn';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import TextBox1 from '../components/Learning/TextBox1'
import TextBox2 from '../components/Learning/TextBox2'
import TextBox3 from '../components/Learning/TextBox3'
import mascot from '../public/mascot.png'
import Username from '@/components/Username';

export default function LearningInt() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const components = [TextBox1, TextBox2, TextBox3];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentComponentIndex(prevIndex => (prevIndex + 1) % components.length);
    }, 5000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (currentComponentIndex === components.length - 1) {
      clearInterval(intervalId);
    }
  }, [currentComponentIndex, intervalId]);

  const Current = components[currentComponentIndex];
  return (
    <>
      <Head>
        <title>GREEN GENERATION</title>
        <meta name="Learning" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <TopBar />
        <Current />
            <Image className={styles.mascot_style} 
              src={mascot}
              width={200}
              alt="leaning page mascot"/>
              <div className={styles.button}><StartLearnBtn/></div>
            
    
        <NavBarLearning/>
      </main>
    </>
  )
}