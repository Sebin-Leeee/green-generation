import TopBar from "@/components/TopBar"
import NavBarTutorial from "@/components/NavBar/Tutorial"
import Head from "next/head"
import Link from "next/link"
import styles from '../styles/More.module.css'
import Image from "next/image"
export default function More() {


    return (
        <>
            <Head>
                <title>GREEN GENERATION</title>
                <meta name="Learning" content="Green Generation - More" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <main className={styles.main}>
                <TopBar />
                <div className={styles.container}>
                    <div className={styles.main__container}>
                        <div className={styles.grid__item__1}>
                            <div className={styles.btn__container}>
                                <div className={`${styles.btn__circle} ${styles.first}`}>
                                    <Link href="tutorialHome">Tutorial</Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.grid__item__2}>
                            <div className={styles.btn__container}>
                                <div className={`${styles.btn__circle} ${styles.first}`}>
                                    <Link href="shop">Shop</Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.grid__item__3}>
                            <div className={styles.btn__container}>
                                <div className={`${styles.btn__circle} ${styles.first}`}>
                                    <Link href="resources">Term</Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.grid__item__4}>
                            <div className={styles.btn__container}>
                                <div className={`${styles.btn__circle} ${styles.first}`}>
                                    <Link href="about">About</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <NavBarTutorial />
            </main>
        </>
    )
}