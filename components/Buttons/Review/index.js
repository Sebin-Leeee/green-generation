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
                                    /></Link>
      <Link href="/learning"><p>Go Back</p></Link>
    </button>
  );
};

export default ReviewBtn;
