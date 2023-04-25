import Image from "next/image";
import styles from "../QuizStart/QuizStart.module.css"
import NavBarQuiz from "@/components/NavBar/Quiz";
import TopBar from "@/components/TopBar";
export default function QuizStart({
    handleStart
}) {
    return (
        <>
            <div className={styles.container}>
                <TopBar />

                <div className={styles.question1Container}>
                    <div className={styles.img}>
                    <Image src="/mascot-round.png" alt="mascot round image" width={190} height={190} />
                    </div>
                    
                    <div className={styles.question__dialog__container}>
                        <div className={styles.question__triangle}><span></span></div>
                        <div className={styles.question__dialog}>
                            <p className={styles.question__dialog__reg}>
                                <span>Robotor</span>has just presented you with a challenge to see who lives a healthier lifestyle.
                            </p>
                        </div>
                    </div>

                    <div className={styles.question__reg}>
                        <p className={styles.question__dialog__reg}>
                            Achieve high scores in three missions and redeem rewards at shop!
                        </p>
                    </div>
                    <div className={styles.btn__container}>
                    <button className={styles.btn__l}
                        onClick={handleStart}>START NOW</button>
                    </div>
                   
                </div>
                <NavBarQuiz />
            </div>

        </>
    )
}