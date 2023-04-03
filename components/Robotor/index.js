import Image from "next/image"
import styles from '../Robotor/Robotor.module.css'
export default function Robotor({
    question1,
    question2,
}) {

    return (
        <>
            <div className={styles.questionContainer}>
                <Image src="/robotor.png" alt="robotor image"width={100} height={100} />
            </div>
            <div className={styles.questionContainer}>

                <div className={styles.question1Container}>
                    <div className={styles.quetsion__triangle}><span></span></div>
                    <div className={styles.quetsion__dialog}>
                        <span>
                            {question1}
                        </span></div>
                </div>

                <div className={styles.quetsion__reg}>
                    <span>
                        {question2}
                    </span></div>
            </div>
        </>
    )
}