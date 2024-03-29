
import { quizList } from '@/data/quizList';
import styles from './SelectedAnswer.module.css'

export default function SelectedAnswer( {answerID}) {
    const getSelectedAnswer = (questionId) => {
        const selectedAnswer = localStorage.getItem(`answer-${questionId}`);
        if (selectedAnswer) {
            return JSON.parse(selectedAnswer);
        }
    };

    const firQuestion = quizList.lists[0];
    const secQuestion = quizList.lists[1];
    const thQuestion = quizList.lists[2];

    return (
        <>



            <main className={styles.main}>

                {
                    answerID == 1 && (

                        <div className={styles.box}>
                           
                            <p className={styles.desc}>
                            <span>
                            Your answer: 
                            </span>
                                {getSelectedAnswer(firQuestion.id)?.text}<br />
                            </p>
                        </div>


                    )
                }
              {
                    answerID == 2 && (

                        <div className={styles.box}>
                         <p className={styles.desc}>
                            <span>
                            Your answer: 
                            </span>
                            {getSelectedAnswer(secQuestion.id)?.text}<br />
                        </p>
                    </div>



                    )
                }
          {
                    answerID == 3 && (

                        <div className={styles.box}>
                         <p className={styles.desc}>
                            <span>
                            Your answer: 
                            </span>
                            {getSelectedAnswer(thQuestion.id)?.text}<br />
                        </p>
                    </div>


                    )
                }



            </main>


        </>
    )

}
