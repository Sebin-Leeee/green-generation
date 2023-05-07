import styles from '@/components/Results/ResultsAlmost/Resultsalmost.module.css';
import TopBar from '@/components/TopBar';
import NavBarQuiz from '@/components/NavBar/Quiz';
import Image from 'next/image';
import SelectedAnswer from '../SelectedAnswer';
import lottie from 'lottie-web';
import { createRef, useEffect } from 'react';


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
                        <h1 className={styles.title}> Almost There! <br /> Keep Learning!</h1> 
                    </div>

                    <div className={styles.star_box}>
                        <Image className={styles.stars}src="/stars/twoStar.png" width={220} height={65} />
                    </div>
                </header>

                <div className={styles.results_box}>

                <div className={styles.animation_container} ref={animationContainer} />

                    <div className={styles.question_box}>
                        <SelectedAnswer answerID={1}/>
                        <h3 className={styles.heading}>1. Traveling To A Cafe</h3>
                        <p className={styles.desc}>
                            Biking is one of the ways to reduce your carbon footprint. However, it is not the best way to transit!
                            <br /> It may be more inconvenient for you, it helps the planet!
                        </p>


                    </div>

                    <div className={styles.question_box}>
                    <SelectedAnswer answerID={2}/>
                        <h3 className={styles.heading}>2. Choosing Your Cup</h3>
                        <p className={styles.desc}>
                            Using an alternative like paper can be recycled and help cut waste.
                            <br /> This is a good strategy but there may be an even better way to lessen your carbon fooprint.
                        </p>
                    </div>

                    <div className={styles.animation_container2} ref={animationContainer2} />

                    <div className={styles.question_box}>
                    <SelectedAnswer answerID={3}/>
                        <h3 className={styles.heading}>3. Getting Fruit From The Store</h3>
                        <p className={styles.desc}>
                            Food imported from near by cities to your supermarket is much better than food from distant countries.
                            <br /> There is still a greener option to get your food.
                        </p>
                    </div>

                    <div className={styles.animation_container3} ref={animationContainer3} />
                    
                </div>

                


            </main>

            <NavBarQuiz/>


        </>
    )

}
