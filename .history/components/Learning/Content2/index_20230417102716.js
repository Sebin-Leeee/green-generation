import styles from './Content2.module.css'

export default function Content2() {
  return (
    <>
    <div className={styles.main}>
    <div className={styles.container}>
      <h2 className={styles.title}>2. What is <br/> 
      <span>Carbon Footprint?</span></h2>
      <p className={styles.detail}>It refers to the 
        <br/>amount of <span>greenhouse gases</span>,
        <br/> primarily carbon dioxide, 
that are released into the atmosphere as a result of human activities 
such as transportation, energy use, and consumption of goods and services.
        </p>
    </div>
    </div>
    </>
  )
}