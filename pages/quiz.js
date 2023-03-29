import { quizList } from "@/data/quizList";
import { useState } from "react";
import Answer from "@/components/Answer";
import Results from "@/components/Results";
import styles from '@/styles/Quiz.module.css'

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
    setQuizStarted(true);
  };

  const handleStart = () => {
    setQuizStarted(true);
  };

  return (
    <>
      {!quizStarted && <button onClick={handleStart}>Start Now</button>}

      {quizStarted && !submitted && (
        <Answer
          onSubmit={quizSubmit}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          questions={quizList}
        />
      )}

      {submitted && <Results resultScore={score} />}
      {submitted && (
        <button onClick={() => handleRestart()}>Restart</button>
      )}
    </>
  );
}