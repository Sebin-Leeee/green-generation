import { useState } from "react";
import SelectedAnswer from "../Results/SelectedAnswer";
import Image from "next/image";
import styles from "@/components/Accordian/Accordian.module.css"
import Link from "next/link";
export default function Accordion(
    { option1,
        option2,
        answerID,
        heading, id }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div onClick={() => setIsActive(!isActive)} >
                <div className={styles.question_box}>
                    <h2>{heading}</h2>
                    <div className={styles.answer__box}>
                        <SelectedAnswer answerID={answerID} />
                    </div>
                </div>
                {
                    !isActive && id === 1 && <div className={styles.help__box}>

                        <div className={styles.help__box__item}>
                            <Image src="/mascot-help.png" width={80} height={80} alt="mascot help"></Image>

                            <span className={styles.greenie}>Click here! Greenie can help!</span>
                        </div>
                        <div className={styles.greenie}>{isActive ? "-" : "+"}</div>
                    </div>
                }
                {
                    !isActive && id === 2 && <div className={styles.help__box}>

                        <div className={styles.help__box__item}>
                            <Image src="/Quiz/2.png" width={80} height={80} alt="Robotor help"></Image>

                            <span className={styles.robotor}>Click here! Ask Robotor!</span>
                        </div>
                        <div className={styles.robotor}>{isActive ? "-" : "+"}</div>
                    </div>
                }
                {
                    !isActive && id === 3 && <div className={styles.help__box}>

                        <div className={styles.help__box__item}>
                            <Image src="/learning/meatwobk.png" width={80} height={80} alt="Robotor help"></Image>

                            <span className={styles.robotor}>Let's review the terminologies</span>
                        </div>
                        <div className={styles.robotor}>{isActive ? "-" : "+"}</div>
                    </div>
                }

                {isActive &&
                    <div className={styles.fact__box}>
                        <span>Fact 1. </span>{option1}<br />
                        <br />
                        <span>Fact 2. </span>{option2}<br />
                    </div>}
            </div>

        </>
    )
}