import styles from './TextBox.module.css'
import Image from 'next/image';
import cloud from '../../../public/learning/cloud.png'


const HomeTextBox = () => {

    return (
        <>
        <Image className={styles.cloud} src={cloud} width={300} height={100} alt="cloud"/>
        <div className={styles.chatboxContainer}>
            <div className={styles.chatbox}>
                <h2 className={styles.message}>Welcome to
                <br/>GREEN GENERATION! </h2>
            </div>
            <div className={styles.triangleContainer}>
                <div className={styles.triangle}></div>
            </div>
        </div>
        </>
    );
  };
 

export default HomeTextBox;
