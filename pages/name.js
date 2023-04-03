import NameCard from "@/components/Tutorial/NameMascot/NameCard"
import Head from "next/head";
import styles from "../styles/Name.module.css"
export default function Name() {
    return (
        <>
            <Head>
                <title>GREEN GENERATION</title>
                <meta name="Learning" content="Green Generation - Enter Your Name" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <main>
                <div className={styles.main}>
                    <NameCard />
                </div>
            </main>

        </>
    )
}