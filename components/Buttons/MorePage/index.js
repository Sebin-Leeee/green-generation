import styles from './MorePage.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '../../../public/learning/arrow.svg'

const MoreBtn = () => {

  return (
    <button>
      <div className={styles.button}>
        <Link href="/more">More</Link>
        <Link href="/more"><Image className={styles.arrow}
          src={Arrow}
          width={18}
          height={18}
          alt="more"
        /></Link>
      </div>
    </button>
  );
};

export default MoreBtn;
