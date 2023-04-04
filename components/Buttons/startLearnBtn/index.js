import styles from './StartLearnBtn.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StartLearnBtn = () => {
  const router = useRouter();

  const linkHref = router.pathname === '/homepage' ? '/learningIntro' : '/learning';
  const linkText = router.pathname === '/homepage' ? 'START LEARNING' : 'START NOW';

  return (
    <button className={styles.button}>
      <Link href={linkHref}>
        <h3>{linkText}</h3>
      </Link>
    </button>
  );
};

export default StartLearnBtn;
