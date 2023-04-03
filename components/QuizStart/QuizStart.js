import Image from "next/image";
import styles from "../QuizStart/QuizStart.module.css"
export default function QuizStart({
    handleStart
}) {
    return (
        <>
            <div className={styles.container}>
                <Image src="/mascot-round.png" alt="mascot round image"width={190} height={190} />
                <div className={styles.question1Container}>
                    <div className={styles.question__triangle}><span></span></div>
                    <div className={styles.question__dialog}>
                        <p className={styles.question__dialog__reg}>
                            Welcome to the Green Generation Quiz!
                            <span>Robotor</span>has just presented you with a challenge to see who lives a healthier lifestyle.
                        </p>
                    </div>
                    <div className={styles.question__reg}>
                        <p className={styles.question__dialog__reg}>
                            Achieve high scores in three missions to prove that you have a healthy lifestyle!
                        </p>
                    </div>
                </div>
                <button className={styles.btn__l}
                    onClick={handleStart}>Start Now</button>
            </div>

        </>
    )
}