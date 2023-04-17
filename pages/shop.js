import TopBar from "@/components/TopBar"
import NavBarTutorial from "@/components/NavBar/Tutorial"
import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Shop.module.css'
export default function Shop() {


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
                <div>
              


                </div>

                <NavBarTutorial />
            </main>
        </>
    )
}