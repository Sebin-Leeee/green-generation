import styles from './TextBox2.module.css'
import chatbox from '../../../public/learning/Down.png'
import Image from 'next/image'

export default function TextBox2() {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
            <p className={styles.text}>After successfully finishing 
            <br/>all the learning tasks,  
            <br/>the background will turn green!</p>
        </div>
      </div>
    </>
  )
}