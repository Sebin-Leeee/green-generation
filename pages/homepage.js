import Head from 'next/head'
import styles from '../styles/Homepage.module.css'
import NavBarHome from '@/components/NavBar/Home'
import TopBar from '@/components/TopBar'
import HomeMascot from '@/components/Hompage/Mascot'
import HomeTextBox from '@/components/Hompage/TextBox'
import StartLearnBtn from '@/components/Buttons/startLearnBtn'
import StartQuizBtn from '@/components/Buttons/startQuizBtn'


export default function Homepage() {
  return (
    <>
      <Head>
        <title>GREEN GENERATION</title>
        <meta name="Learning" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TopBar />
        <HomeTextBox />
        <HomeMascot />
        <div className={styles.buttons}>
        <StartLearnBtn />
        <StartQuizBtn />
        </div>
        <NavBarHome/>
      </main>
    </>
  )
}