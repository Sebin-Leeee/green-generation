import styles from './TextBox1.module.css'
import Image from 'next/image'
import Username from '@/components/Username'
import cloud from '../../../public/learning/cloud.png'

export default function TextBox1() {

  return (
    <>
      <div className={styles.main}>
      <Image className={styles.cloud} src={cloud} width={300} height={100} alt="cloud"/>
        <div className={styles.container}>
        <Username/>
            <p className={styles.text}> We have 3 big topics<br/>to learn today!</p>
        </div>
        
      </div>
    </>
  )
}