import { quizList } from "@/data/quizList";
import { useState, useEffect } from "react";
import Card from "@/components/Card";

export default function Answer() {
    const [data, setData] = useState([]);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
    const [currentQ, setCurrentQ] = useState(1);
    const [scores, setScores] = useState(0);
    const [previousScore, setPreviousScore] = useState([]);

    const currentQuestion = quizList.lists.find((q) => q.id === currentQ);

    useEffect(() => {
        setData(quizList.lists);
    }, []);

    useEffect(() => {
        setSelectedAnswerIndex(-1);
    }, [currentQ]);

    const handleSelectAnswer = (index) => {
        setSelectedAnswerIndex(index);
      };
    
      const buttonFn = (fn) => {
        if (fn === "back") {
          setCurrentQ(currentQ - 1);
          setScores(scores - previousScore[previousScore.length - 1]);
          setPreviousScore((prevScores) => prevScores.slice(0, -1));
        } else if (fn === "forward") {
          setCurrentQ(currentQ + 1);
          const currentAnswer = currentQuestion?.answers?.[selectedAnswerIndex];
          if (currentAnswer && currentAnswer.score) {
            setScores((prevScores) => prevScores + currentAnswer.score);
            setPreviousScore((prevScores) => [...prevScores, currentAnswer.score]);
          }
        }
      };


    return (
        <>
            <div>
                {data.map((info, index) => {
                    if (info.id === currentQ) {
                        return (
                            <ul key={index}>
                                {info.answers.map((answer, i) => (
                                    <>
                                        <Card
                                            key={i}
                                            cardIndex={i}
                                            cardAnswer={answer}
                                            selectedAnswerIndex={selectedAnswerIndex}
                                            onSelectAnswer={handleSelectAnswer}
                                        />
                                    </>

                                ))}
                            </ul>
                        );
                    }
                })}
            </div>
            <p>scores{scores}</p>
            <p>PrevScore{previousScore}</p>
            <button disabled={currentQ === 1} onClick={() => buttonFn("back")}>
                Prev
            </button>
            <button disabled={selectedAnswerIndex === -1} onClick={() => buttonFn("forward")}>
                Next
            </button>

        </>

    );}