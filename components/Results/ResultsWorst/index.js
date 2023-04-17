import styles from '@/components/Results/Resultsworst/Resultsworst.module.css';
import TopBar from '@/components/TopBar';
import NavBarQuiz from '@/components/NavBar/Quiz';
import Image from 'next/image';



export default function ResultsWorst() {



    return (
        <>

            <TopBar />

            <main className={styles.main}>

                <header className={styles.title}>
                    <div className={styles.title_box}>
                        <h1 className={styles.title}> You Can Do Better!! <br /> Try Visiting the Learning Tab!</h1>
                    </div>

                    <div className={styles.star_box}>
                        <Image src="/stars/noStar.png" width={400} height={110} />
                    </div>
                </header>

                <div className={styles.results_box}>

                    <div className={styles.question_box}>
                        <h3 className={styles.heading}>1. Traveling To A Cafe</h3>
                        <p className={styles.desc}>
                           
                            <br /> 
                        </p>


                    </div>

                    <div className={styles.question_box}>
                        <h3 className={styles.heading}>2. Choosing Your Cup</h3>
                        <p className={styles.desc}>
                            
                            <br /> 
                        </p>
                    </div>

                    <div className={styles.question_box}>
                        <h3 className={styles.heading}>3. Getting Fruit From The Store</h3>
                        <p className={styles.desc}>
                            
                            <br /> 
                        </p>
                    </div>
                </div>

                


            </main>

            <NavBarQuiz/>


        </>
    )

}
