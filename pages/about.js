import Head from 'next/head'
import styles from '../styles/About.module.css'
import NavBarMore from '@/components/NavBar/Home'
import TopBar from '@/components/TopBar'
import Image from 'next/image'
import Rachel from '../public/rachel.png'
import Sebin from '../public/sebin.png'
import Meelaud from '../public/meelaud.png'
import Link from 'next/link'

export default function About() {
 
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
        <h2>About Us</h2>
        <div className={styles.character_container}>
        <Image src={Rachel} height={100} width={100} />
         <Image src={Sebin} height={100} width={100} />
         <Image src={Meelaud} height={100} width={100} />
        </div>
  
        <NavBarMore />
      </main>
    </>
  )
}
