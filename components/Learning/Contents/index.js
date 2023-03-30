import styles from './Contents.module.css'
import NavBarLearning from '@/components/NavBar/Learning'
import TopBar from '@/components/TopBar'


export default function LearningContents() {
  return (
    <>
      <div className = {styles.container}>
        <h2>1. What is <br/>GREEN GENERATION?</h2>
        <p>GREEN GENERATION
          <br/>is an app 
          <br/>designed to educate users about their carbon footprint 
          <br/>and help them reduce 
          <br/>their impact on the environment.</p>
      </div>

    </>
  )
}