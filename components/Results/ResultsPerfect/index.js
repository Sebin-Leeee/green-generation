import styles from '@/components/Results/ResultsPerfect/Resultsperfect.module.css';
import TopBar from '@/components/TopBar';
import NavBarQuiz from '@/components/NavBar/Quiz';
import Image from 'next/image';
import SelectedAnswer from '../SelectedAnswer';
import lottie from 'lottie-web';
import { createRef, useEffect } from 'react';


export default function ResultsPerfect() {

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
                        <h1 className={styles.title}> Congratulations!! <br /> You got a perfect score!</h1>
                    </div>

                    <div className={styles.star_box}>
                        <Image className={styles.stars} src="/stars/threeStar.png" width={220} height={65} />
                    </div>
                </header>

                <div className={styles.results_box}>

                <div className={styles.animation_container} ref={animationContainer} />

                    <div className={styles.question_box}>
                    <SelectedAnswer answerID={1}/>
                        <h3 className={styles.heading}>1. Traveling To A Cafe</h3>
                        <p className={styles.desc}>
                        Taking transit is one of the best ways to reduce your carbon footprint as it encourages society to drive less.
                            <br /> It also allows you to get some cardio in and a breathe of fresh air!
                        </p>


                    </div>

                    <div className={styles.question_box}>
                    <SelectedAnswer answerID={2}/>
                        <h3 className={styles.heading}>2. Choosing Your Cup</h3>
                        <p className={styles.desc}>
                            Owning your own bottle will reduce waste compared to one-time use bottles/cups.
                            <br /> Having a reusable bottle is one the most effective strategies to cutting waste in landfills.
                        </p>
                    </div>

                    <div className={styles.animation_container2} ref={animationContainer2} />

                    <div className={styles.question_box}>
                    <SelectedAnswer answerID={3}/>
                        <h3 className={styles.heading}>3. Getting Fruit From The Store</h3>
                        <p className={styles.desc}>
                            Getting food from the local market is one of best ways to reduce your carbon footprint.
                            <br /> Food has to travel less distance to get delivered to your city.
                        </p>
                    </div>

                    <div className={styles.animation_container3} ref={animationContainer3} />
                    
                </div>

                


            </main>

            <NavBarQuiz/>


        </>
    )

}
