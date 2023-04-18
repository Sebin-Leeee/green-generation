import Head from 'next/head'
import styles from '../styles/Homepage.module.css'
import NavBarHome from '@/components/NavBar/Home'
import TopBar from '@/components/TopBar'
import HomeMascot from '@/components/Hompage/Mascot'
import HomeTextBox from '@/components/Hompage/TextBox'
import StartLearnBtn from '@/components/Buttons/startLearnBtn'
import StartQuizBtn from '@/components/Buttons/startQuizBtn'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Homepage() {
  const router = useRouter();
  const { rewardRedeemed } = router.query;
  const [redeemed, setRedeemed] = useState(false);

  useEffect(() => {
    const redeemed = localStorage.getItem('redeemed');
    if (redeemed === 'true') {
      setRedeemed(true);
    }
  }, []);
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
        <HomeTextBox />
        <HomeMascot rewardRedeemed={rewardRedeemed || redeemed} />
        <div className={styles.buttons}>
        <StartLearnBtn />
        <StartQuizBtn />
        </div>
        <NavBarHome/>
      </main>
    </>
  )
}