import styles from './ChatBox1.module.css'
import chatbox from '../../../public/learning/Down.png'
import Image from 'next/image'

export default function ChatBox1() {

  return (
    <>
      <div className={styles.main}>
        <Image className={styles.box} 
            src={chatbox}
            width={330}/>
        <p className={styles.text}>Hi,I’m Greenie! <br/>We have 3 big topics to learn today!</p>
      </div>
    </>
  )
}