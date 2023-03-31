import styles from '../styles/Resources.module.css'
import Image from 'next/image'
import React, { useState } from 'react';
import NavBarLearning from '@/components/NavBar/Learning';
import TopBar from '@/components/TopBar';

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
    <NavBarLearning />
    <div className={styles.container}>
      <h2>Want to learn<br/>more terminologies</h2>
      <p>Click to see details.</p>
      <div className={styles.images}>
        <div className={styles.imageContainer}>
          <div className={styles.topic} onClick={() => setShow1Explanation(true)}><p>1. Greenhouse Gases</p></div> 
          {show1Explanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
                <button className={styles.closeButton} onClick={() => setShow1Explanation(false)}>x</button>
                <div className={styles.textContainer}>
                <h3>1. Greenhouse Gases</h3>
                <p> These are gases that trap heat in the atmosphere, contributing to global warming. 
                    Examples include carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O).</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
         <div className={styles.topic} onClick={() => setShow2Explanation(true)}><p>2. Carbon Credits</p></div>
          {show2Explanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShow2Explanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>2. Carbon Credits</h3>
                <p> These are a type of tradable permit that allows organizations to offset their carbon emissions by supporting projects 
                    that reduce greenhouse gas emissions, such as renewable energy or reforestation.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.topic} onClick={() => setShow3Explanation(true)}><p>3. Ecological Footprint</p></div>
          {show3Explanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShow3Explanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>3. Ecological Footprint</h3>
                <p>  This is a measure of the impact of human activities on the environment,
                     including the amount of land, water, and other resources required to support our lifestyles. </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.topic} onClick={() => setShow4Explanation(true)}><p>4. Energy Efficiency</p></div>
          {show4Explanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShow4Explanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>4. Energy Efficiency</h3>
                <p> This refers to practices and technologies that reduce energy consumption, 
                    such as using energy-efficient appliances or insulating buildings.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.topic} onClick={() => setShow5Explanation(true)}><p>5. Renewable Energy</p></div>
          {show5Explanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShow5Explanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>5. Renewable Energy</h3>
                <p>This is energy that is generated from sources that do not deplete natural resources, 
                    such as solar, wind, and hydropower.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.topic} onClick={() => setShow6Explanation(true)}><p>6. Circular Economy</p></div>
          {show6Explanation && (
            <div className={styles.overlay}>
              <div className={styles.explanationBox}>
              <button className={styles.closeButton} onClick={() => setShow6Explanation(false)}>x</button>
              <div className={styles.textContainer}>
                <h3>6. Circular Economy</h3>
                <p>This is an economic system that aims to minimize waste
                     and resource use by promoting the reuse, recycling, and repurposing of materials.</p>
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