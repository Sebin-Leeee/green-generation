import { quizList } from "@/data/quizList";
import { useState, useEffect } from "react";
import Card from "../Card";
import styles from '../Answer/Answer.module.css'
import ProgressBar from "../ProgressBar";
import Image from "next/image";
import Robotor from "../Robotor";
import BtnQuiz from "../BtnQuiz";
import MissionComplete from "../MissionComplete/MissionComplete";
import { useRouter } from "next/router";

export default function Answer(props) {
    const [data, setData] = useState([]);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
    const [currentQ, setCurrentQ] = useState(1);
    const [scores, setScores] = useState(0);
    const [previousScore, setPreviousScore] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const currentQuestion = quizList.lists.find((q) => q.id === currentQ);
    const router = useRouter();

    useEffect(() => {
        setData(quizList.lists);
    }, []);

    useEffect(() => {
        setSelectedAnswerIndex(-1);
    }, [currentQ]);

    const handleSubmit = () => {
        props.onSubmit(scores, selectedAnswers);
        localStorage.setItem('quizScore', scores);
    };

    const handleSelectAnswer = (index) => {
        setSelectedAnswerIndex(index);
        const selectedAnswer = currentQuestion.answers[index];
    localStorage.setItem(`answer-${currentQ}`, JSON.stringify(selectedAnswer));
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
            <div className={styles.main__container}>
                <div>
                    {data.map((info, index) => {
                        if (info.id === currentQ) {
                            return (

                                <div className={styles.container} key={index}>
                                    <div className={styles.ProgressBar}>
                                        <ProgressBar
                                            currentQ={currentQ} />
                                    </div>
                                    <div>
                                        <Robotor
                                            question1={info.question1}
                                            question2={info.question2}
                                        />
                                    </div>
                                    <div className={styles.question__div}>
                                        <h3>It's time for you to choose:</h3>
                                    </div>

                                    <div className={styles.listContainer}>
                                        <ul className={styles.ul}>

                                            <>
                                                <Card
                                                    key={info.id}
                                                    cardIndex={info.id}
                                                    cardAnswer={info.answers}
                                                    selectedAnswerIndex={selectedAnswerIndex}
                                                    onSelectAnswer={handleSelectAnswer}
                                                />
                                            </>

                                        </ul>
                                    </div>

                                </div>


                            );
                        }
                    })}
                </div>
                <div
                    style={{ display: currentQ === data.length + 1 ? "" : "none" }}>
                    <div className={styles.complete__container}>
                        <MissionComplete />
                    </div>
                </div>
                <div>
                    <BtnQuiz
                        currentQ={currentQ}
                        buttonFn={buttonFn}
                        selectedAnswerIndex={selectedAnswerIndex}
                        data={data}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>

        </>

    );
}