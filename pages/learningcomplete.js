import Head from 'next/head'
import styles from '../styles/LearningComplete.module.css'
import NavBarLearning from '@/components/NavBar/Learning'
import TopBar from '@/components/TopBar'

import Complete from '@/components/Learning/Complete'

export default function LearningComplete() {
  return (
    <>
   <Head>
        <title>GREEN GENERATION</title>
        <meta name="Learning" content="Green Generation - Learning Complete"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <TopBar />
        <Complete/>
        <NavBarLearning/>
      </main>
    </>
  )
}