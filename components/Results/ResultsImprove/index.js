import styles from '@/components/Results/ResultsImprove/Resultsimprove.module.css';
import TopBar from '@/components/TopBar';
import NavBarQuiz from '@/components/NavBar/Quiz';
import Image from 'next/image';



export default function Resultsimprove() {



    return (
        <>

            <TopBar />

            <main className={styles.main}>

                <header className={styles.title}>
                    <div className={styles.title_box}>
                        <h1 className={styles.title}> You Can Do Better!! <br /> Try Visiting the Learning Tab!</h1>
                    </div>

                    <div className={styles.star_box}>
                        <Image src="/stars/oneStar.png" width={400} height={110} />
                    </div>
                </header>

                <div className={styles.results_box}>

                    <div className={styles.question_box}>
                        <h3 className={styles.heading}>1. Traveling To A Cafe</h3>
                        <p className={styles.desc}>
                            By taking a taxi to your destintions, you are contributing to more carbon emissions than necessary.
                            <br /> There are other ways to reduce your carbon footprint, even if a ride is more convenient. 
                        </p>


                    </div>

                    <div className={styles.question_box}>
                        <h3 className={styles.heading}>2. Choosing Your Cup</h3>
                        <p className={styles.desc}>
                            By choosing to use plastic over other alternatives you are adding more waste to landfills.
                            <br /> Remember, Reduce, Resuse, Recycle.
                        </p>
                    </div>

                    <div className={styles.question_box}>
                        <h3 className={styles.heading}>3. Getting Fruit From The Store</h3>
                        <p className={styles.desc}>
                            Food that travels long distances can contribute to more carbon emissions and increase your footprint.
                            <br /> It's best to think locally.
                        </p>
                    </div>
                </div>

                


            </main>

            <NavBarQuiz/>


        </>
    )

}
