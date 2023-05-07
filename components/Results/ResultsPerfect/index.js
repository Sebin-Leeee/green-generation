import styles from '@/components/Results/ResultsPerfect/Resultsperfect.module.css';
import TopBar from '@/components/TopBar';
import NavBarQuiz from '@/components/NavBar/Quiz';
import Image from 'next/image';
import SelectedAnswer from '../SelectedAnswer';
import lottie from 'lottie-web';
import { createRef, useEffect } from 'react';
import AccordionPerfect from '@/components/Accordian/AccordianPerfect';
import Link from 'next/link';
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
            path: "/animation/congrat.json",

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
                        <h1 className={styles.title}> CONGRATULATIONS!! </h1>
                        <p>You got perfect score!</p>
                    </div>

                    <div className={styles.star_box}>
                        <Image className={styles.stars} src="/stars/threeStar.png" width={220} height={65} />
                    </div>
                </header>

                <div className={styles.results_box}>
                   
                    <div className={styles.animation}>
                        <div className={styles.animation_container} ref={animationContainer} />
                        <p>Shop is now open!</p>
                        <Link href="shop"> <button className={styles.btn}>Shop</button></Link>
                    </div>
                    
                    <div className={styles.box}>
                        <AccordionPerfect
                            heading={"1. Traveling To A Cafe"}
                            answerID={1}
                            id={1}
                        />

                    </div>
                    <div className={styles.box}>
                        <AccordionPerfect
                            heading={"2. Choosing Your Cup"}
                            answerID={2}
                            id={2}
                        />

                    </div>
                    <div className={styles.box}>
                        <AccordionPerfect
                            heading={"3. Getting Fruit From Store"}
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
