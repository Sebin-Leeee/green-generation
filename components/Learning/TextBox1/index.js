import styles from './TextBox1.module.css'
import chatbox from '../../../public/learning/Down.png'
import Image from 'next/image'
import Username from '@/components/Username'

export default function TextBox1() {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
        <Username/>
            <p className={styles.text}> We have 3 big topics to learn today!</p>
        </div>
        
      </div>
    </>
  )
}