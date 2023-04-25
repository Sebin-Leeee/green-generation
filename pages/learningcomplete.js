import Head from 'next/head'
import styles from '../styles/LearningComplete.module.css'
import NavBarLearning from '@/components/NavBar/Learning'
import TopBar from '@/components/TopBar'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import StartQuizBtn from '@/components/Buttons/startQuizBtn'
import TermBtn from '@/components/Buttons/TermBtn'
import TextBox4 from '@/components/Learning/TextBox4'
import TextBox5 from '@/components/Learning/TextBox5'
import mascot from '../public/mascot.png'
import ReviewBtn from '@/components/Buttons/Review'

export default function LearningComplete() {

  const components = [TextBox4, TextBox5];
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentComponentIndex(1);
    }, 2000);

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
      <Head>
        <title>GREEN GENERATION</title>
        <meta name="Learning" content="Green Generation - Learning Complete" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <TopBar />
          <ReviewBtn className={styles.back} />
          <div className={styles.maincontents}>
            <Component />
            <Image className={styles.mascot_style}
              src={mascot}
              width={200}
              alt='mascot' />

            <div className={styles.buttons}>
              <StartQuizBtn />
              <TermBtn />
            </div>
          </div>

          <NavBarLearning />
        </div>
      </main>
    </>
  )
};
