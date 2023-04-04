import styles from '../Quiz/NavBar.module.css'
import Image from 'next/image'
import homeIcon from '../../../public/navbar_icon/home.png'
import learnIcon from '../../../public/navbar_icon/learn.png'
import quizIcon from '../../../public/navbar_icon/quiz_blue.png'
import tutorialIcon from '../../../public/navbar_icon/tutorial.png'
import Link from 'next/link'

export default function NavBarQuiz() {
  return (
      <>
           <div className={styles.container}>
              <ul className={styles.icon_list}>
                  <li className={styles.icon_text}>
                      <Link href="/homepage"><Image src={homeIcon}
                          width={30}
                          height={26} /></Link>
                      <Link href="/homepage">Home</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/learningIntro"><Image className={styles.learn}
                          src={learnIcon}
                          width={30}
                          height={20} /></Link>
                
                      <Link href="/learningIntro">Learning</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/quiz"><Image src={quizIcon}
                          width={30}
                          height={26} /></Link>
                      <Link href="/quiz">Quiz</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/tutorial"><Image className={styles.tutorial}
                          src={tutorialIcon}
                          width={30}
                          height={20} /></Link>
                      <Link href="/tutorial">Tutorial</Link>
                  </li>
              </ul>
          </div>
      </>
  )
}