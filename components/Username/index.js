import { useSearchParams } from "next/navigation";
import styles from '../Username/Username.module.css'
export default function Username() {

  const searchParams = useSearchParams()
  const isUser = searchParams.get('username');


  return (
    <>
      <div className={styles.message}>
        <p>
          Hello <span>{isUser}</span>! I'm Greenie.
        </p>
      </div>
    </>
  )

}