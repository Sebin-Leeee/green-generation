import styles from '@/components/Results/ResultsPerfect/Resultsperfect.module.css';
import TopBar from '@/components/TopBar';
import NavBarQuiz from '@/components/NavBar/Quiz';
import Image from 'next/image';
import SelectedAnswer from '../SelectedAnswer';


export default function ResultsPerfect() {



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
                    <SelectedAnswer answerID={1}/>
                        <h3 className={styles.heading}>1. Traveling To A Cafe</h3>
                        <p className={styles.desc}>
                            Walking may take longer but its the best way to completely eliminate the amount of carbon emissions released.
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

                    <div className={styles.question_box}>
                    <SelectedAnswer answerID={3}/>
                        <h3 className={styles.heading}>3. Getting Fruit From The Store</h3>
                        <p className={styles.desc}>
                            Getting food from the local market is one of best ways to reduce your carbon footprint.
                            <br /> Food has to travel less distance to get delivered to your city.
                        </p>
                    </div>
                </div>

                


            </main>

            <NavBarQuiz/>


        </>
    )

}
