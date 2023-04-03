import Image from "next/image";
import styles from "../MissionComplete/MissionComplete.module.css"
export default function MissionComplete() {
    return (
        <>
            <div>
                <div className={styles.images}>
                    <div className={styles.flower__l}>
                        <Image src="/flower.png" alt="flower large image" width={50} height={50} />
                    </div>
                    <Image src="/mascot-round.png" alt="mascot round image"width={190} height={190} />
                    <div className={styles.flower__s}>
                        <Image src="/flower.png" alt="mascot small image" width={35} height={35} />
                    </div>
                </div>

                <h2 className={styles.font}>MISSIONS COMPLETE!</h2>
            </div>
        </>
    )
}