import styles from './ReviewBtn.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '../../../public/learning/arrow.svg'

const ReviewBtn = () => {

  
  return (
    <button className={styles.button}>
      <Link href="/learning"><Image className={styles.arrow}
                                    src={Arrow}
                                    width={18} 
                                    height={18}
                                    alt="review"
                                    /></Link>
      <Link href="/learning">Review</Link>
    </button>
  );
};

export default ReviewBtn;
