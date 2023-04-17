import { useState } from "react";
import Head from "next/head";
import Answer from "@/components/Quiz/Answer";
import Results from "@/components/Results";
import QuizStart from "@/components/Quiz/QuizStart/QuizStart";
import styles from '@/styles/Quiz.module.css'
import NavBarQuiz from "@/components/NavBar/Quiz";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const quizSubmit = (score) => {
    setScore(score);
    setSubmitted(true);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(1);
    setSubmitted(false);
    setQuizStarted(false);
  };

  const handleStart = () => {
    setQuizStarted(true);
  };

  
  return (
    <>
                <Head>
                <title>GREEN GENERATION</title>
                <meta name="Learning" content="Green Generation - Quiz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          {!quizStarted &&
            (
              <>
                <div><QuizStart handleStart={handleStart}/></div>
               
              </>
            )}
         
          {quizStarted && !submitted && (
            <>
            <Answer
              onSubmit={quizSubmit}
              setQuizStarted={setQuizStarted}
              setCurrentQuestion={setCurrentQuestion}
            />
            <NavBarQuiz/>
            </>
            
          )}

          {submitted && <Results resultScore={score} />}
          {submitted && (
            <button className={styles.btn__1} onClick={() => handleRestart()} >Restart</button>
          )}
        </div>
      </main>


    </>
  );
}