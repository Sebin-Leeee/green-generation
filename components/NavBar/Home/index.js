import styles from '../Home/NavBar.module.css'
import Image from 'next/image'
import homeIcon from '../../../public/navbar_icon/home_blue.png'
import learnIcon from '../../../public/navbar_icon/learn.png'
import quizIcon from '../../../public/navbar_icon/quiz.png'
import moreIcon from '../../../public/navbar_icon/more.png'
import Link from 'next/link'

export default function NavBarHome() {
  return (
      <>
          <div className={styles.container}>
              <ul className={styles.icon_list}>
                  <li className={styles.icon_text}>
                      <Link href="/homepage"><Image src={homeIcon}
                          alt={homeIcon}
                          width={30}
                          height={26}
                         /></Link>
                      <Link href="/homepage">Home</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/learningIntro"><Image className={styles.learn}
                          alt={learnIcon}
                          src={learnIcon}
                          width={30}
                          height={20} /></Link>
                      <Link href="/learningIntro">Learning</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/quiz"><Image src={quizIcon}
                          alt={quizIcon}
                          width={30}
                          height={26} /></Link>
                      <Link href="/quiz">Quiz</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/more"><Image className={styles.more}
                          src={moreIcon}
                          alt={moreIcon}
                          width={35}
                          height={9} /></Link>
                      <Link href="/more">More</Link>
                  </li>
              </ul>
          </div>
      </>
  )
}