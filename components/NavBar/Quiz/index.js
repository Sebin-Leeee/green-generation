import styles from '../Quiz/NavBar.module.css'
import Image from 'next/image'
import homeIcon from '../../../public/navbar_icon/home.png'
import learnIcon from '../../../public/navbar_icon/learn.png'
import quizIcon from '../../../public/navbar_icon/quiz_blue.png'
import moreIcon from '../../../public/navbar_icon/more.png'
import Link from 'next/link'

export default function NavBarQuiz() {
  return (
      <>
           <div className={styles.container}>
              <ul className={styles.icon_list}>
                  <li className={styles.icon_text}>
                      <Link href="/homepage"><Image src={homeIcon}
                          width={30}
                          height={26}
                          alt="home" /></Link>
                      <Link href="/homepage">Home</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/learningIntro"><Image className={styles.learn}
                          src={learnIcon}
                          width={30}
                          height={20}
                          alt="learn" /></Link>
                
                      <Link href="/learningIntro">Learning</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/quiz"><Image src={quizIcon}
                          width={30}
                          height={26}
                          alt="quiz"/></Link>
                      <Link href="/quiz">Quiz</Link>
                  </li>

                  <li className={styles.icon_text}>
                      <Link href="/more"><Image className={styles.more}
                          src={moreIcon}
                          alt={moreIcon}
                          width={35}
                          height={9}
                          /></Link>
                      <Link href="/more">More</Link>
                  </li>
              </ul>
          </div>
      </>
  )
}