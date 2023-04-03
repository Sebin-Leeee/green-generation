import styles from '../Learning/NavBar.module.css'
import Image from 'next/image'
import homeIcon from '../../../public/navbar_icon/home.png'
import learnIcon from '../../../public/navbar_icon/learn_blue.png'
import quizIcon from '../../../public/navbar_icon/quiz.png'
import tutorialIcon from '../../../public/navbar_icon/tutorial.png'

export default function NavBarLearning() {
  return (
      <>
          <div className={styles.container}>
              <ul className={styles.icon_list}>
                  <li className={styles.icon_text}>
                      <a href="/"><Image src={homeIcon}
                          width={30}
                          height={26} /></a>
                      <a href="/">Home</a>
                  </li>

                  <li className={styles.icon_text}>
                      <a href="/learning"><Image className={styles.learn}
                          src={learnIcon}
                          width={30}
                          height={20} /></a>
                      <a href="/learning">Learning</a>
                  </li>

                  <li className={styles.icon_text}>
                      <a href=""><Image src={quizIcon}
                          width={30}
                          height={26} /></a>
                      <a href="">Quiz</a>
                  </li>

                  <li className={styles.icon_text}>
                      <a href=""><Image className={styles.tutorial}
                          src={tutorialIcon}
                          width={30}
                          height={20} /></a>
                      <a href="">Tutorial</a>
                  </li>
              </ul>
          </div>
      </>
  )
}