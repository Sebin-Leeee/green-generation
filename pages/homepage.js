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
import Image from 'next/image'
import Link from 'next/link'

export default function Homepage() {
  console.log("App Name:"+ process.env.NEXT_PUBLIC_APP_NAME)
  const router = useRouter();
  const { rewardRedeemed } = router.query;
  const [redeemed, setRedeemed] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const redeemed = localStorage.getItem('redeemed');
    if (redeemed === 'true') {
      setRedeemed(true);
    } else {
      localStorage.setItem('redeemed', 'false');
      setRedeemed(false);
    }

    const handleBeforeUnload = () => {
      localStorage.setItem('redeemed', 'false');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };

  }, []);

  const handleReset = () => {
    localStorage.setItem('redeemed', 'null');
    setRedeemed(null);
    handleConfirm(false);
    setClicked(false);
  };

  const handleClick = () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false)
    }
  }

  const handleConfirm = () => {
    if (confirm === false) {
      setConfirm(true);
    } else {
      setConfirm(false)
    }
  }


  return (
    <>
      <Head>
        <title>GREEN GENERATION</title>
        <meta name="Learning" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <TopBar />
          <div className={styles.imageContainer}>
            <HomeTextBox className={styles.textBox} />
          </div>

          <HomeMascot className={styles.mascot} rewardRedeemed={rewardRedeemed || redeemed} />
          <div className={styles.buttons}>
            <StartLearnBtn />
            <StartQuizBtn />
          </div>
          <div className={styles.reset__container}>
            <div className={styles.reset__btn}>
              <button>
                <Image src="/flower.png" alt="reset mascot" width={25} height={25}
                  className={clicked ? `${styles.rotate}` : ''}
                  onClick={handleClick}
                />
              </button>
            </div>
            <div className={clicked ? `${styles.reset__overlay__animation}` : ``}>
              {clicked && (
                <>
                  <div className={styles.reset__overlay}>
                    <Link href="/shop">
                      <button>Shop</button>
                    </Link>
                    <button onClick={handleConfirm} disabled={!redeemed}>Reset</button>

                  </div>
                </>

              )}
            </div>
            {
              confirm && (
                <div className={styles.confirm__bg}>
                  <div className={styles.confirm__container}>
                    <p>Want to reset Greenie's outfit? You will lose the current outfit.</p>
                    <div className={styles.confirm__btn}>
                      <button onClick={handleConfirm}>No, keep the outfit.</button>
                      <button onClick={handleReset}>Yes, change to original.</button>
                    </div>

                  </div>
                </div>

              )
            }
          </div>
          <NavBarHome />
        </div>
      </main>
    </>
  )
}
