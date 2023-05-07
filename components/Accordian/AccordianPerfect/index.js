
import SelectedAnswer from "@/components/Results/SelectedAnswer";

import styles from "@/components/Accordian/Accordian.module.css"
export default function AccordionPerfect(
    { 
        answerID,
        heading }) {

    return (
        <>
            <div  >
                <div className={styles.question_box}>
                    <h2>{heading}</h2>
                    <div className={styles.answer__box}>
                        <SelectedAnswer answerID={answerID} />
                    </div>
                </div>
               

                
            </div>

        </>
    )
}