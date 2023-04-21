import styles from './TopBar.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'


export default function TopBar() {
  return (
      <>
     
        <Link className={styles.container} href="homepage">
          <Image src={logo}
            width={28}
            alt="logo"
            href="/homepage.js" />
          <div className={styles.logo_text}>GREEN GENERATION</div>
        </Link>
     
      </>
  )
}