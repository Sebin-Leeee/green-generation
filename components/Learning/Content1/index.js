import styles from './Content1.module.css'
import React from 'react';

export default function Content1() {
  return (
    <>
    <div className={styles.container}>
      <h2 className={styles.title}>1. What is<br/><span>GREEN GENERATION?</span></h2>
      <p className={styles.content}><span>GREEN GENERATION </span>
        <br/>is an app
        designed to educate users about their carbon footprint
        <br/>and help them reduce
        <br/>their impact on the environment. 
        By encouraging sustainable habits and providing resources for environmentally responsible living,
        we aims to empower individuals to make <span>eco-friendly</span> choices in their daily lives.
        </p>
    </div>
    </>
  )
}