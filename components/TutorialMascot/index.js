import Image from "next/image";
import styles from "../TutorialMascot/TutorialMascot.module.css"
export default function TutorialMascot({
    text,
    img,
    id }) {
    return (
        <>
            {img === id && (
                <div className={styles.container}>
                    <div className={styles.question__triangle}><span></span></div>
                    <div className={styles.question__dialog}>
                        <p className={styles.question__dialog__reg}>

                            {text}
                        </p>
                    </div>
                    <div className={styles.img}><Image src="/tutorial-mascot.png" alt="mascot image" width={200} height={215} /></div>

                </div>
            )}
        </>




    )
}