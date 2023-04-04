import Head from 'next/head'
import styles from '../styles/Learning.module.css'
import NavBarLearning from '@/components/NavBar/Learning'
import TopBar from '@/components/TopBar'
import Content1 from '@/components/Learning/Content1'
import Content2 from '@/components/Learning/Content2'
import Content3 from '@/components/Learning/Content3'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function Learning() {
  const [contentIndex, setContentIndex] = useState(0);
  const [bgImage, setBgImage] = useState('/learning/background1.png');

  const contents = [<Content1 />, <Content2 />, <Content3 />];
  const router = useRouter();

  const handleNext = () => {
    if (contentIndex === 2) {
      router.push('/learningcomplete'); // Navigate to a new page after the third content
    } else {
      setContentIndex((contentIndex + 1) % contents.length);
      setBgImage(`/learning/background${(contentIndex + 1) % contents.length + 1}.png`);
    }
  };

  const handlePrev = () => {
    if (contentIndex === 0) {
      router.push('/learning'); // Navigate to a new page after the third content
    } else {
      setContentIndex((contentIndex - 1 + contents.length) % contents.length);
      setBgImage(`/learning/background${(contentIndex - 1 + contents.length) % contents.length + 1}.png`);

    }
  };
  return (
    <>
      <Head>
        <title>GREEN GENERATION</title>
        <meta name="Learning" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{ backgroundImage: `url(${bgImage})`}}>
        <TopBar />
        <div className={styles.container}>
         {contents[contentIndex]}
          <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handlePrev}>Back</button>
        <button className={styles.button} onClick={handleNext}>Next</button>
      </div>
        </div>
        <NavBarLearning/>
      </main>
    </>
  )
}

