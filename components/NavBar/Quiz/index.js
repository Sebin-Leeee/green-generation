import styles from '../Quiz/NavBar.module.css'
import Image from 'next/image'
import homeIcon from '../../../public/navbar_icon/home.png'
import learnIcon from '../../../public/navbar_icon/learn.png'
import quizIcon from '../../../public/navbar_icon/quiz_blue.png'
import tutorialIcon from '../../../public/navbar_icon/tutorial.png'

export default function NavBarQuiz() {
  return (
      <>
          <div className={styles.container}>
              <ul className={styles.icon_list}>
                  <li className={styles.icon_text}>
                      <a href=""><Image src={homeIcon}
                          width={30}
                          height={26} /></a>
                      <a href="">Home</a>
                  </li>

                  <li className={styles.icon_text}>
                      <a href=""><Image className={styles.learn}
                          src={learnIcon}
                          width={30}
                          height={20} /></a>
                      <a href="">Learning</a>
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