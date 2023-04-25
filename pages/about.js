import Head from 'next/head'
import styles from '../styles/About.module.css'
import NavBarMore from '@/components/NavBar/More'
import TopBar from '@/components/TopBar'
import Image from 'next/image'
import Rachel from '../public/rachel.png'
import Sebin from '../public/sebin.png'
import Meelaud from '../public/meelaud.png'
import cloud from '../public/learning/cloud.png'
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
        <div className={styles.back__btn}>
          <Link href="/more"><button>Go Back</button></Link>
        </div>
        <div className={styles.main_container}>
          <TopBar className={styles.topBar} />
          <NavBarMore />
          <h1>ABOUT US</h1>
          <Image className={styles.cloud} src={cloud} width={300} height={100} alt={cloud} />
          <div className={styles.character_container}>
            <div className={styles.row}>
              <Image className={styles.team_image} src={Rachel} height={80} width={80} alt="rachel" />
              <div className={styles.text}>
                <h3>Rachel</h3>
                <h4>Front-end developer</h4>
                <p>Rachel shares creative ideas and translate them into real-world applications.</p>
              </div>
            </div>

            <div className={styles.row}>
              <Image className={styles.team_image} src={Sebin} height={80} width={80} alt="sebin" />
              <div className={styles.text}>
                <h3>Sebin</h3>
                <h4>Front-end developer</h4>
                <p>Sebin brings her knowledge and a sense of design into the business that we need.</p>
              </div>
            </div>

            <div className={styles.row}>
              <Image className={styles.team_image} src={Meelaud} height={80} width={80} alt="meelaud" />
              <div className={styles.text}>
                <h3>Meelaud</h3>
                <h4>Content Creator</h4>
                <p>Meelaud loves to think of different ways to express ideas and solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
