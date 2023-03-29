import styles from '../BtnQuiz/BtnQuiz.module.css'
import Image from 'next/image'
export default function BtnQuiz({
    currentQ,
    buttonFn,
    selectedAnswerIndex,
    data,
    handleSubmit
}) {
    return (
        <>
            <div className={styles.container}>
                <button className={styles.btn__s}
                disabled={currentQ === 1} 
                onClick={() => buttonFn("back")}>
                     
                     <span>
                   
                    Back</span>
                </button>
                <button className={styles.btn__s}
                    disabled={selectedAnswerIndex === -1}
                    onClick={() => buttonFn("forward")}
                    style={{ display: currentQ === data.length + 1 ? "none" : "" }}
                >
                     <span>Next
                   
                     </span>
                   
                   
                </button>
                {currentQ === data.length + 1 && (
                    <button className={styles.btn__s} onClick={handleSubmit}>
                        
                        <span>Submit
      
                     </span>
                    </button>
                )}
            </div>

        </>
    )
}