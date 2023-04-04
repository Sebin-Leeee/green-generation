import styles from './TextBox.module.css'


const HomeTextBox = () => {

    return (
        <div className={styles.chatboxContainer}>
            <div className={styles.chatbox}>
                <h2 className={styles.message}>Welcome to 
                <br/>GREEN GENERATION! </h2>
            </div>
            <div className={styles.triangleContainer}>
                <div className={styles.triangle}></div>
            </div>
        </div>
    );
  };
  

export default HomeTextBox;
