import styles from './Learning.module.css'
import mascot from '../../public/mascot.png'
import Image from 'next/image'
import ChatBox1 from './TextBox1'

export default function LearningContents() {

  return (
    <>
      <div className={styles.main}>
        <ChatBox1 />
        <Image className={styles.mascot_style} 
            src={mascot}
            width={250}/>
      </div>
    </>
  )
}