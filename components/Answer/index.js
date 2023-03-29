import { quizList } from "@/data/quizList";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import styles from '../Answer/Answer.module.css'
import Image from "next/image";
import Robotor from "../Robotor";
import BtnQuiz from "../BtnQuiz";

export default function Answer(props) {
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

    const handleSubmit = () => {
        props.onSubmit(scores);
    };

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
                            <>
                                <div key={index}>
                                    <div>
                                        <Robotor
                                            question1={info.question1}
                                            question2={info.question2}
                                        />
                                    </div>


                                    <div className={styles.listContainer}>
                                        <ul className={styles.ul}>
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
                                    </div>

                                </div>

                            </>

                        );
                    }
                })}
            </div>
            <p>scores{scores}</p>
            <p>PrevScore{previousScore}</p>
            <div>
                <BtnQuiz
                    currentQ={currentQ}
                    buttonFn={buttonFn}
                    selectedAnswerIndex={selectedAnswerIndex}
                    data={data}
                    handleSubmit={handleSubmit}
                />
            </div>
        </>

    );
}