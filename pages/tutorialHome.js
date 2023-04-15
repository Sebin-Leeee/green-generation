import TutorialCarousel from "@/components/Tutorial/TutorialCarousel";
import BtnTutorialHome from "@/components/Tutorial/BtnTutorial/BtnTutorialHome";
import TutorialProgress from "@/components/Tutorial/TutorialMascot/TutorialProgress/TutorialProgress";
import { useState, useEffect } from "react";
import styles from "../styles/Tutorial.module.css"
import TutorialMascot from "@/components/Tutorial/TutorialMascot";
import { tutorialLines } from "@/data/tutorialLines"
import Head from "next/head";
import Link from "next/link";


export default function tutorialHome() {
    const [data, setData] = useState([...tutorialLines.lines]);

    const [img, setImg] = useState(1);

    const changeImage = (change) => {
        if (change == "backward") {
            setImg(img - 1);
            console.log(img);
        } else if (change == "forward") {
            setImg(img + 1);
            console.log(img);
        }
    }


    return (
        <>
            <Head>
                <title>GREEN GENERATION</title>
                <meta name="Learning" content="Green Generation - Tutorial Revisit" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <main className={styles.main}>

                <div className={styles.container}>
                    <div className={styles.link}>
                        <Link href="/learning">
                            <p href="/quiz">Skip</p>
                        </Link>

                    </div>
                    <div className={styles.bar}>
                        <TutorialProgress img={img} />
                    </div>
                    
                    <div className={styles.img}>
                        <TutorialCarousel
                            img={img} />
                    </div>

                    <div className={styles.mascot}>
                        {data && data.map((info, index) => {
                            return <TutorialMascot
                                key={index}
                                text={info.text}
                                img={img}
                                id={info.id} />
                        })}
                    </div>

                    <div className={styles.btn}>
                        <BtnTutorialHome
                            img={img}
                            changeImage={changeImage}
                        />
                    </div>
                </div>


            </main>

        </>
    )
}