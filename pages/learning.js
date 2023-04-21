import Head from 'next/head'
import styles from '../styles/Learning.module.css'
import NavBarLearning from '@/components/NavBar/Learning'
import TopBar from '@/components/TopBar'
import Content1 from '@/components/Learning/Content1'
import Content2 from '@/components/Learning/Content2'
import Content3 from '@/components/Learning/Content3'
import { useRouter } from 'next/router';
import { useState } from 'react'
import Image from 'next/image'

export default function Learning() {
  const [contentIndex, setContentIndex] = useState(0);
  const [bgImage, setBgImage] = useState('/learning/bg1.png');

  const contents = [<Content1 />, <Content2 />, <Content3 />];
  const router = useRouter();

  const handleNext = () => {
    if (contentIndex === 2) {
      router.push('/learningcomplete');
    } else {
      setContentIndex((contentIndex + 1) % contents.length);
      setBgImage(`/learning/bg${(contentIndex + 1) % contents.length + 1}.png`);
    }
  };

  const handlePrev = () => {
    if (contentIndex === 0) {
      router.push('/learning');
    } else {
      setContentIndex((contentIndex - 1 + contents.length) % contents.length);
      setBgImage(`/learning/bg${(contentIndex - 1 + contents.length) % contents.length + 1}.png`);

    }
  };
  return (
    <>
      <Head>
        <title>GREEN GENERATION</title>
        <meta name="Learning" content="Green Generation - Learning Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main} style={{ backgroundImage: `url(${bgImage})` }}>
        <TopBar />
        <div className={styles.container}>
          <Image className={styles.cloud} src="/../public/learning/cloud.png" width={300} height={100} alt="cloud" />
          {contents[contentIndex]}
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handlePrev}>Back</button>
            <button className={styles.button} onClick={handleNext}>Next</button>
          </div>
        </div>
        <NavBarLearning />
      </main>
    </>
  )
}

