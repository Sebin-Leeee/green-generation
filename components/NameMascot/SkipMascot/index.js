import Image from "next/image";
import styles from "@/components/NameMascot/NameMascot.module.css"
import Link from "next/link";

export default function NameMascot({skip,setSkip}) {
    const handleBack = () => {
        setSkip(false);
    }

    return (
        
        <>
           
                <div className={styles.container}>
                    <div className={styles.question__triangle}><span></span></div>
                    <div className={styles.question__dialog}>
                        <h3 className={styles.question__dialog__reg}>
                           Are you sure you want to skip the Tutorials?
                        </h3>
                    </div>
                   
                    <div className={styles.img}><Image src="/tutorial-mascot.png" alt="mascot image" width={200} height={215} /></div>
                    <div className={styles.btn__l}><Link href="/name">Confirm</Link></div>
                    <div className={styles.btn__l} onClick={handleBack}>Back</div>
                </div>
         
        </>




    )
}