import styles from "../BtnTutorial.module.css"
import Link from "next/link";
export default function BtnTutorialHome({
    img,
    changeImage
}){
    return (
        <>
             <div className={styles.container}>
            {img === 1 ? (
                    <button className={styles.btn__s__sp}> <span>Back</span></button>
                ) : (
                    <button className={styles.btn__s}

                        onClick={() => { changeImage("backward"); }}>
                        <span>
                            Back</span>
                    </button>
                )}
               {img === 5 ? (
                    <Link href="/learning">
                    <button className={styles.btn__s}> <span>Start</span></button>
                    </Link>
                ) : (
                    <button className={styles.btn__s}

                        onClick={() => { changeImage("forward"); }}>
                        <span>
                            Next</span>
                    </button>
                )}
            </div>
        </>
    )
}