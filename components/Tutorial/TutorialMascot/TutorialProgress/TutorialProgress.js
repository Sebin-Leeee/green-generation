import styles from "../TutorialProgress/TutorialProgress.module.css"

export default function TutorialProgress({
    img
}) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.bar__green}><span></span></div>
                {img >= 2 ? (
                    <div className={styles.bar__green}><span></span></div>
                ) : (
                    <div className={styles.bar__grey}><span></span></div>
                )}
                {img >= 3 ? (
                    <div className={styles.bar__green}><span></span></div>
                ) : (
                    <div className={styles.bar__grey}><span></span></div>
                )}
                 {img >= 4 ? (
                    <div className={styles.bar__green}><span></span></div>
                ) : (
                    <div className={styles.bar__grey}><span></span></div>
                )}
                 {img >= 5 ? (
                    <div className={styles.bar__green}><span></span></div>
                ) : (
                    <div className={styles.bar__grey}><span></span></div>
                )}
            </div>
        </>
    )
}