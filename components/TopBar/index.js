import styles from './TopBar.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'


export default function TopBar() {
  return (
      <>
          <div className={styles.container}>
             <Image src={logo}
                    width={40}
                    alt="logo"/>
            <div className={styles.logo_text}>GREEN GENERATION</div>
          </div>
      </>
  )
}