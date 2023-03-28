
import { quizList } from "@/data/quizList";
import { useState, useEffect } from "react";
import Answer from "@/components/Answer";
import Results from "@/components/Results";


export default function Quiz() {
    const [score, setScore] = useState(0);

    const quizSubmit = (score) => {
        setScore(score);
    }

    let resultsPage;

    if (score < 5) {
      resultsPage = <Results />;
    } else if (score >= 5 && score < 8) {
      resultsPage = <Results/>;
    } else {
      resultsPage = <Results />;
    }

    return (
        <>
           <Answer onSubmit={quizSubmit}/>
           <Results/>
        </>

    );
}