import styles from "../ProgressBar/ProgressBar.module.css"
export default function ProgressBar({currentQ}) {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.bar__blue}><span></span></div>
                {currentQ >= 2 ? (
                    <div className={styles.bar__blue}><span></span></div>
                ) : (
                    <div className={styles.bar__grey}><span></span></div>
                )}
                 {currentQ >= 3 ? (
                    <div className={styles.bar__blue}><span></span></div>
                ) : (
                    <div className={styles.bar__grey}><span></span></div>
                )}
            </div>

        </>
    )
}