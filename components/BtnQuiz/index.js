import styles from '../BtnQuiz/BtnQuiz.module.css'

export default function BtnQuiz({
    currentQ,
    buttonFn,
    selectedAnswerIndex,
    data,
    handleSubmit,
}) {


    return (
        <>
            <div className={styles.container}>


                {currentQ === 1 ? (
                    <button className={styles.btn__s__sp}> <span>Back</span></button>
                ) : (
                    <button className={styles.btn__s}

                        onClick={() => { buttonFn("back"); }}
                        style={{ display: currentQ === data.length + 1 || currentQ === 1 ? "none" : "" }}>
                        <span>
                            Back</span>
                    </button>
                )}
                <button className={styles.btn__s}
                    disabled={selectedAnswerIndex === -1}
                    onClick={() => buttonFn("forward")}
                    style={{ display: currentQ === data.length + 1 ? "none" : "" }}>
                    {currentQ === data.length && (
                        <span>Submit
                        </span>
                    )}{currentQ !== data.length && (
                        <span>Next
                        </span>
                    )}

                </button>

                {currentQ === data.length + 1 && (
                    <button className={styles.btn__l} onClick={handleSubmit}>

                        <span>Check Your Results

                        </span>
                    </button>
                )}
            </div>

        </>
    )
}