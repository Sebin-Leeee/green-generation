import styles from './Content1.module.css'
import React from 'react';

export default function Content1() {
  return (
    <>
    <div className={styles.container}>
      <h2 className={styles.title}>1. What is <br/><span>GREEN GENERATION?</span></h2>
      <p>GREEN GENERATION 
        <br/>is an app
        <br/>designed to educate users about their carbon footprint
        <br/>and help them reduce
        <br/>their impact on the environment.
        </p>
    </div>
    </>
  )
}