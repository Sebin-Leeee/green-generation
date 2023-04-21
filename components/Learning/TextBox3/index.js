import styles from './TextBox3.module.css'
import Image from 'next/image'


export default function TextBox3() {

  return (
    <>
      <div className={styles.main}>
      <Image className={styles.cloud} src="/../public/learning/cloud.png" width={300} height={100} alt="cloud"/>
        <div className={styles.container}>
            <p className={styles.text}>Click the button to start</p>
        </div>
        
      </div>
    </>
  )
}