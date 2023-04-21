import styles from './TextBox3.module.css'
import Image from 'next/image'
import cloud from '../../../public/learning/cloud.png'


export default function TextBox3() {

  return (
    <>
      <div className={styles.main}>
      <Image className={styles.cloud} src={cloud} width={300} height={100} alt="cloud"/>
        <div className={styles.container}>
            <p className={styles.text}>Click the button to start</p>
        </div>
        
      </div>
    </>
  )
}