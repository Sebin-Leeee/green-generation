import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/tutorial');
  };

  return (
    <>
   <Head>
        <title>GREEN GENERATION</title>
        <meta name="Learning" content="Green Generation - Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}  onClick={handleClick}>
       <video
          preload="auto"
          playsInline
          autoPlay
          muted
          loop>
          <source src="/Tutorial-BG.mp4" type="video/mp4" />
        </video>
       
        <div className={styles.title}>
          <p>Welcome to</p>
          <h1>GREEN GRENERATION</h1>
        </div>
        <div className={styles.delay__container}>
        <Link href="/tutorial"><Image className={styles.tap} src="/tap.png" alt="tap image" width={45} height={70} /></Link>
          <div>
            <Link href="/tutorial"><h2>Tap to Continue</h2></Link>
          </div>
        </div>
      </main>
    </>
  )
}
