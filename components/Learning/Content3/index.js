import styles from './Content3.module.css'
import Bus from '../../../public/learning/bus.png'
import Meat from '../../../public/learning/meat.png'
import Tree from '../../../public/learning/tree.png'
import Image from 'next/image'
import React, { useState } from 'react';
import BusNoBg from '../../../public/learning/buswoback.png'
import PlantsNoBg from '../../../public/learning/plants.png'
import CupNoBg from '../../../public/learning/cupwobk.png'
import Food from '../../../public/learning/plantbased.png'
import Cup from '../../../public/learning/cup.png'

export default function Content3() {
  const [showBusExplanation, setShowBusExplanation] = useState(false);
  const [showMeatExplanation, setShowMeatExplanation] = useState(false);
  const [showTreeExplanation, setShowTreeExplanation] = useState(false);
  const [showCupExplanation, setShowCupExplanation] = useState(false);

  return (
    <>
    <div className={styles.container}>
      <h2 className={styles.title}>3. How to reduce<br/> <span>Carbon Footprint?</span></h2>
      <p className={styles.details}>Click to see details.</p>
      <div className={styles.images}>
        <div className={styles.imageContainer}>
          <Image src={Bus} width={125} height={110} onClick={() => setShowBusExplanation(true)} alt="bus"/>
          {showBusExplanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
                <button className={styles.closeButton} onClick={() => setShowBusExplanation(false)}>x</button>
                <div className={styles.textContainer}>
                <h3>1. Use public transportation</h3>
                <p>Take the bus, shared bike, or skytrain to reduce emissions.
                Buses generally have a lower carbon footprint than shared bikes due to their larger carrying 
                capacity and more fuel-efficient engines. While bike-sharing programs are still a great option for short
                 trips, they require the production and maintenance of bicycles and infrastructure, 
                 which can have a carbon footprint.</p>
                
                <Image className={styles.moving_bus} src={BusNoBg} width={190} height={75} alt="bus"/>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
          <Image src={Meat} width={125} height={110} onClick={() => setShowMeatExplanation(true)} alt="meat"/>
          {showMeatExplanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShowMeatExplanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>2. Reduce meat consumption</h3>
                <p> Livestock farming is a significant contributor to greenhouse gas emissions.
                  Reducing meat consumption or switching 
                    to a plant-based diet can help reduce your carbon footprint.
                    consider reducing your meat consumption by incorporating more vegetarian or vegan meals into your diet. 
                    You could start with one or two meals a week and gradually increase from there.</p>
                <Image className={styles.food} src={Food} width={160} height={85} alt="food"/>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
          <Image src={Tree} width={125} height={110} onClick={() => setShowTreeExplanation(true)} alt="tree"/>
          {showTreeExplanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShowTreeExplanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>3. Plant trees</h3>
                <p> Trees absorb carbon dioxide from the atmosphere, so planting trees 
                    or supporting reforestation efforts can help reduce your carbon footprint.
                    In addition to absorbing carbon dioxide, trees provide a number of other important environmental benefits, such as preventing soil erosion, 
                    supporting biodiversity, and improving air quality.</p>
                <Image className={styles.plants} src={PlantsNoBg} width={290} height={130} alt="plant"/>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
          <Image src={Cup} width={125} height={110} onClick={() => setShowCupExplanation(true)} alt="cup"/>
          {showCupExplanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShowCupExplanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>4. Use Reusable Cup</h3>
                <p> Using a reusable cup saves resources and energy because it eliminates the 
                  need for producing, transporting, 
                  and disposing of single-use cups. Disposable cups are not 
                  recyclable due to their plastic lining, which means they can take up to
                  500 years to decompose. By choosing to use a reusable cup, you
                  are making a positive impact on the environment.</p>
                <Image className={styles.cups} src={CupNoBg} width={110} height={100} alt="cups"/>
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
