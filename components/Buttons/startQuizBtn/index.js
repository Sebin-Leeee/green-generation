import styles from './StartQuizBtn.module.css'
import Link from 'next/link';

const StartQuizBtn = () => {

  return (
    <button className={styles.button}> <Link href="/quiz"><h3>START QUIZ</h3></Link></button>
  )
};

export default StartQuizBtn;