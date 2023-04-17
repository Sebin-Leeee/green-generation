import styles from './Content3.module.css'
import Bus from '../../../public/learning/bus.png'
import Meat from '../../../public/learning/meat.png'
import Tree from '../../../public/learning/tree.png'
import Image from 'next/image'
import React, { useState } from 'react';

export default function Content3() {
  const [showBusExplanation, setShowBusExplanation] = useState(false);
  const [showMeatExplanation, setShowMeatExplanation] = useState(false);
  const [showTreeExplanation, setShowTreeExplanation] = useState(false);

  return (
    <>
    <div className={styles.container}>
      <h2>3. How to reduce<br/> Carbon Footprint</h2>
      <p>Click to see details.</p>
      <div className={styles.images}>
        <div className={styles.imageContainer}>
          <Image src={Bus} width={90} height={90} onClick={() => setShowBusExplanation(true)} />
          {showBusExplanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
                <button className={styles.closeButton} onClick={() => setShowBusExplanation(false)}>x</button>
                <div className={styles.textContainer}>
                <h3>Use public transportation or carpool</h3>
                <p>Take the bus, train, or subway instead of driving, or consider carpooling with friends or coworkers to reduce emissions.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
          <Image src={Meat} width={90} height={90} onClick={() => setShowMeatExplanation(true)} />
          {showMeatExplanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShowMeatExplanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>Reduce meat consumption</h3>
                <p> Livestock farming is a significant contributor to greenhouse gas emissions, so reducing meat consumption or switching 
                    to a plant-based diet can help reduce your carbon footprint.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
          <Image src={Tree} width={90} height={90} onClick={() => setShowTreeExplanation(true)} />
          {showTreeExplanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShowTreeExplanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>Plant trees</h3>
                <p> Trees absorb carbon dioxide from the atmosphere, so planting trees 
                    or supporting reforestation efforts can help reduce your carbon footprint.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}
