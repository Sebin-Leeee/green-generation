import styles from '@/components/Results/ResultsAlmost/Resultsalmost.module.css';
import TopBar from '@/components/TopBar';
import NavBarQuiz from '@/components/NavBar/Quiz';
import Image from 'next/image';
import SelectedAnswer from '../SelectedAnswer';
import lottie from 'lottie-web';
import { createRef, useEffect } from 'react';
import Accordion from '@/components/Accordian';

export default function ResultsAlmost() {

    let animationContainer = createRef();
    let animationContainer2 = createRef();
    let animationContainer3 = createRef();

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renrender: "svg",
            loop: true,
            autoplay: true,
            path: "/animation/Map.json",

        });

        const anim2 = lottie.loadAnimation({
            container: animationContainer2.current,
            renrender: "svg",
            loop: true,
            autoplay: true,
            path: "/animation/Cup.json",

        });

        const anim3 = lottie.loadAnimation({
            container: animationContainer3.current,
            renrender: "svg",
            loop: true,
            autoplay: true,
            path: "/animation/truck.json",

        });

        return () => {
            anim.destroy(),
                anim2.destroy(),
                anim3.destroy()

        };
    }, [])

    return (
        <>

            <TopBar />

            <main className={styles.main}>

                <header className={styles.title}>
                    <div className={styles.title_box}>
                        <h1 className={styles.title}> ALMOST THERE </h1>
                        <p>Keep Learning</p>
                    </div>

                    <div className={styles.star_box}>
                        <Image className={styles.stars} src="/stars/twoStar.png" width={220} height={65} />
                    </div>
                </header>

                <div className={styles.results_box}>
                    <div className={styles.box}>
                        <Accordion
                            heading={"1. Traveling To A Cafe"}
                            option1={"A typical vehicle emits about 4.6 metric tons of carbon dioxide every year!"}
                            option2={"Do you know buiding a parking for shared bike actually produce emit high carbon emissions?"}
                            answerID={1}
                            id={1}
                        />

                    </div>
                    <div className={styles.box}>
                        <Accordion
                            heading={"2. Choosing Your Cup"}
                            option1={"1.6 billion plastic cups are thrown away in Canada every year."}
                            option2={"Garbage is the number one wildlife attractant in residential areas."}
                            answerID={2}
                            id={2}
                        />

                    </div>
                    <div className={styles.box}>
                        <Accordion
                            heading={"3. Getting Fruit From Store"}
                            option1={"Food transport was responsible for 6% of global emissions"}
                            option2={"CO2 emissions from most plant-based products are as much as 10-50 times lower than most animal-based products."}
                            answerID={3}
                            id={3}
                        />

                    </div>



                </div>




            </main>

            <NavBarQuiz />


        </>
    )

}
