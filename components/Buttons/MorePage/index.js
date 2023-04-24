import styles from './MorePage.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '../../../public/learning/arrow.svg'

const MoreBtn = () => {

  
  return (
    <button className={styles.button}>
      <Link href="/more"><p>More Page</p></Link>
      <Link href="/more"><Image className={styles.arrow}
                                    src={Arrow}
                                    width={18} 
                                    height={18}
                                    /></Link>
    </button>
  );
};

export default MoreBtn;
