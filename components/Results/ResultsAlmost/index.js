import styles from '@/components/Results/ResultsAlmost/Resultsalmost.module.css';
import TopBar from '@/components/TopBar';
import NavBarQuiz from '@/components/NavBar/Quiz';
import Image from 'next/image';



export default function ResultsAlmost() {



    return (
        <>

            <TopBar />

            <main className={styles.main}>

                <header className={styles.title}>
                    <div className={styles.title_box}>
                        <h1 className={styles.title}> Congratulations!! <br /> You got a perfect score!</h1>
                    </div>

                    <div className={styles.star_box}>
                        <Image src="/stars/threeStar.png" width={400} height={110} />
                    </div>
                </header>

                <div className={styles.results_box}>

                    <div className={styles.question_box}>
                        <h3 className={styles.heading}>1. Traveling To A Cafe</h3>
                        <p className={styles.desc}>
                            Taking transit is one of the best ways to reduce your carbon footprint as it encourages society to drive less.
                            <br /> It may be more inconvenient for you, it helps the planet!
                        </p>


                    </div>

                    <div className={styles.question_box}>
                        <h3 className={styles.heading}>2. Choosing Your Cup</h3>
                        <p className={styles.desc}>
                            Using an alternative like paper can be recycled and help cut waste.
                            <br /> This is a good strategy but there may be an even better way to lessen your carbon fooprint.
                        </p>
                    </div>

                    <div className={styles.question_box}>
                        <h3 className={styles.heading}>3. Getting Fruit From The Store</h3>
                        <p className={styles.desc}>
                            Food imported from near by cities to your supermarket is much better than food from distant countries.
                            <br /> There is still a greener option to get your food.
                        </p>
                    </div>
                </div>

                


            </main>

            <NavBarQuiz/>


        </>
    )

}
