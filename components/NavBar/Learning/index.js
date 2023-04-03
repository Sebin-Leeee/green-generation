import styles from '../Learning/NavBar.module.css'
import Image from 'next/image'
import homeIcon from '../../../public/navbar_icon/home.png'
import learnIcon from '../../../public/navbar_icon/learn_blue.png'
import quizIcon from '../../../public/navbar_icon/quiz.png'
import tutorialIcon from '../../../public/navbar_icon/tutorial.png'
import Link from 'next/link'

export default function NavBarLearning() {
  return (
      <>
          <div className={styles.container}>
              <ul className={styles.icon_list}>
                  <li className={styles.icon_text}>
                      <Link href="/"><Image src={homeIcon}
                          width={30}
                          height={26} /></Link>
                      <Link href="/">Home</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/learning"><Image className={styles.learn}
                          src={learnIcon}
                          width={30}
                          height={20} /></Link>
                      <Link href="/learning">Learning</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/quiz"><Image src={quizIcon}
                          width={30}
                          height={26} /></Link>
                      <Link href="/quiz">Quiz</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/tutorialHome"><Image className={styles.tutorial}
                          src={tutorialIcon}
                          width={30}
                          height={20} /></Link>
                      <Link href="/tutorialHome">Tutorial</Link>
                  </li>
              </ul>
          </div>
      </>
  )
}