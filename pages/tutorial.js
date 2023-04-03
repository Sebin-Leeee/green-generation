import TutorialCarousel from "@/components/Tutorial/TutorialCarousel";
import Head from "next/head";
import BtnTutorial from "@/components/Tutorial/BtnTutorial";
import TutorialProgress from "@/components/Tutorial/TutorialMascot/TutorialProgress/TutorialProgress";
import { useState, useEffect } from "react";
import styles from "../styles/Tutorial.module.css"
import TutorialMascot from "@/components/Tutorial/TutorialMascot";
import { tutorialLines } from "@/data/tutorialLines"
import SkipMascot from "../components/Tutorial/NameMascot/SkipMascot"


export default function tutorial() {
    const [data, setData] = useState([...tutorialLines.lines]);
    const [skip, setSkip] = useState(false)
    const [img, setImg] = useState(1);

    const handleSkip = () => {
        setSkip(true)
    }
    const changeImage = (change) => {
        if (change == "backward") {
            setImg(img - 1);
        } else if (change == "forward") {
            setImg(img + 1);
        }
    }


    return (
        <>            <Head>
            <title>GREEN GENERATION</title>
            <meta name="Learning" content="Green Generation - Enter Tutorial" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.png" />
        </Head>
            <main className={styles.main}>
                {skip === false && (
                    <>
                        <div className={styles.container}>
                            <div className={styles.link} onClick={handleSkip}>
                                <p href="/quiz">Skip</p>
                            </div>
                            <div className={styles.bar}>
                                <TutorialProgress img={img} />
                            </div>
                            <div>

                            </div >
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
                                <BtnTutorial
                                    img={img}
                                    changeImage={changeImage}
                                />
                            </div>
                        </div>

                    </>
                )}
                {
                    skip === true && (
                        <SkipMascot
                            skip={skip}
                            setSkip={setSkip} />
                    )
                }

            </main>

        </>
    )
}