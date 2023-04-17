import styles from './TextBox3.module.css'


export default function TextBox3() {

  return (
    <>
       <div className={styles.chatboxContainer}>
            <div className={styles.chatbox}>
                <p className={styles.message}>Click the button to start! </p>
            </div>
            <div className={styles.triangleContainer}>
                <div className={styles.triangle}></div>
            </div>
        </div>
    </>
  )
}