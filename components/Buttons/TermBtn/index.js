import styles from './TermBtn.module.css'
import Link from 'next/link';

const TermBtn = () => {

  return (
    <button className={styles.button}> <Link href="/resources"><h3>MORE TERMINOLOGIES</h3></Link></button>
  )
};

export default TermBtn;