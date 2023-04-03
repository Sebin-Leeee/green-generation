import styles from '@/components/Results/ResultsPerfect/resultsperfect.module.css';



export default function ResultsPerfect() {



    return (
        <>

            <header>

                <div className={styles.title_box}>
                    <h1 className={styles.title}> Congratulations!! <br /> You got a perfect score!</h1>
                </div>

            </header>

            <main className={styles.main}>

                <div className={styles.question_one}>
                    <h3>1. Traveling To A Cafe</h3>
                    <p className={styles.desc}>
                        Walking may take longer but its the best way to completely eliminate the amount of carbon emissions released.
                        <br /> It also allows you to get some cardio in and a breathe of fresh air!
                    </p>


                </div>

                <div className={styles.question_two}>
                    <h3>2. Choosing Your Cup</h3>
                    <p className={styles.desc}>
                        Owning your own bottle will reduce waste compared to one-time use bottles/cups.
                        <br /> Having a reusable bottle is one the most effective strategies to cutting waste in landfills.
                    </p>
                </div>

                <div className={styles.question_three}>
                    <h3>3. Getting Fruit From the Store</h3>
                    <p className={styles.desc}>
                        Getting food from the local market is one of best ways to reduce your carbon footprint.
                        <br /> Food has to travel less distance to get delivered to your city.
                    </p>
                </div>


                <button></button>


            </main>

            <nav>

            </nav>


        </>
    )

}