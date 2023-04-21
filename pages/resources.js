import styles from '../styles/Resources.module.css'
import Image from 'next/image'
import Head from "next/head";
import React, { useState } from 'react';
import NavBarLearning from '@/components/NavBar/Learning';
import TopBar from '@/components/TopBar';
import ReviewBtn from '@/components/Buttons/Review';
import LineChart from '@/components/Learning/LineChart';

export default function Resources() {
  const [show1Explanation, setShow1Explanation] = useState(false);
  const [show2Explanation, setShow2Explanation] = useState(false);
  const [show3Explanation, setShow3Explanation] = useState(false);
  const [show4Explanation, setShow4Explanation] = useState(false);
  const [show5Explanation, setShow5Explanation] = useState(false);
  const [show6Explanation, setShow6Explanation] = useState(false);

  return (
    <>
    <div className={styles.main}>
    <TopBar />
    <ReviewBtn className={styles.back}/>
    <NavBarLearning />
    <div className={styles.container}>
      <h2 className={styles.title}>Do you want to<br/>learn more?</h2>
      <p>Click to see details.</p>
      <div className={styles.images}>
        <div className={styles.imageContainer}>
          <div className={styles.topic} onClick={() => setShow1Explanation(true)}><p>Greenhouse Gases</p></div> 
          {show1Explanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
                <button className={styles.closeButton} onClick={() => setShow1Explanation(false)}>x</button>
                <div className={styles.textContainer}>
                <h3>Greenhouse Gases</h3>
                <p> These are gases that trap heat in the atmosphere, contributing to global warming. 
                    Examples include carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O).</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
         <div className={styles.topic} onClick={() => setShow2Explanation(true)}><p>Carbon Credits</p></div>
          {show2Explanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShow2Explanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>Carbon Credits</h3>
                <p> These are a type of tradable permit that allows organizations to offset their carbon emissions by supporting projects 
                    that reduce greenhouse gas emissions, such as renewable energy or reforestation.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.topic} onClick={() => setShow5Explanation(true)}><p>Renewable Energy</p></div>
          {show5Explanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShow5Explanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>Renewable Energy</h3>
                <p>This is energy that is generated from sources that do not deplete natural resources, 
                    such as solar, wind, and hydropower.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.topic} onClick={() => setShow6Explanation(true)}><p>Circular Economy</p></div>
          {show6Explanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox6}>
              <button className={styles.closeButton} onClick={() => setShow6Explanation(false)}>x</button>
              <div className={styles.textContainer6}>
                <h3>Global CO2 emissions chart</h3>
                <p>line</p>
                <LineChart />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
/**Global carbon dioxide (CO2) emissions from energy combustion
 *  and industrial processes1 grew 0.9% or 321 Mt in 2022 to a new all-time high of 36.8 Gt. 
 * This estimate is based on the IEA’s detailed region-by-region and fuel-by-fuel analysis, 
 * incorporating the latest official national statistics and publicly available data on energy use, 
 * economic indicators, and weather. Last year’s increase follows two years of exceptional 
 * oscillations in energy-related emissions. Emissions shrank by more than 5% in 2020, 
 * as the Covid-19 pandemic cut energy demand. In 2021, emissions rebounded past pre-pandemic levels, 
 * growing more than 6% in tandem with economic stimulus and the roll-out of vaccines 
 * */