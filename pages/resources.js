import styles from '../styles/Resources.module.css'
import Image from 'next/image'
import Head from "next/head";
import cloud from '../public/learning/cloud.png'
import React, { useState } from 'react';
import NavBarMore from '@/components/NavBar/More';
import TopBar from '@/components/TopBar';
import { PieChart } from '@/components/Learning/PieChart';
import Wind from '../public/learning/wind.png'
import CircularEconomy from '../public/learning/circular.jpeg'
import MoreBtn from '@/components/Buttons/MorePage';
import ReviewBtn from '@/components/Buttons/Review';

export default function Resources() {
  const [show1Explanation, setShow1Explanation] = useState(false);
  const [show2Explanation, setShow2Explanation] = useState(false);
  const [show5Explanation, setShow5Explanation] = useState(false);
  const [show6Explanation, setShow6Explanation] = useState(false);

  return (
    <>
      <Head>
        <title>GREEN GENERATION</title>
        <meta name="Learning" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.main}>
        <div className={styles.main__container}>
          <TopBar />
          <Image className={styles.cloud} src={cloud} width={300} height={100} alt={cloud} />
          <MoreBtn className={styles.back} />
          <ReviewBtn />
          <NavBarMore />
          <div className={styles.container}>
            <h2 className={styles.title}>Do you want to<br />learn more?</h2>
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
                        <PieChart />
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
                        <h3>How does it work?</h3>
                        <p>When a activity reduces greenhouse gas emissions, it is eligible for carbon credits.
                          These can then be sold on the carbon market to companies or countries that need to offset their emissions.
                          By buying credits, they can effectively offset their emissions and contribute to global emissions reductions.</p>
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
                      <div className={styles.textContainer3}>
                        <h3>Renewable Energy</h3>
                        <p>This is energy that is generated from sources that do not deplete natural resources,
                          such as solar, wind, and hydropower.
                          Renewable energy is considered to be clean and sustainable because it does not generate greenhouse gas emissions or other harmful pollutants.</p>
                        <Image className={styles.image} src={Wind} alt='windImage' width={280} height={200} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.imageContainer}>
                <div className={styles.topic} onClick={() => setShow6Explanation(true)}><p>Circular Economy</p></div>
                {show6Explanation && (
                  <div className={styles.overlay}>
                    <div className={styles.explanationBox}>
                      <button className={styles.closeButton} onClick={() => setShow6Explanation(false)}>x</button>
                      <div className={styles.textContainer}>
                        <h3>Circular Economy</h3>
                        <p>This is an economic system that aims to minimize waste and resource use by promoting the reuse, recycling, and repurposing of materials.</p>
                        <Image className={styles.circle} src={CircularEconomy} alt='circularEconomyImage' width={275} height={360} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}