import styles from './Mascot.module.css'
import mascot from '../../../public/mascot.png'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

const HomeMascot = ({rewardRedeemed}) => {

  return (
    <>
      <Image className={styles.mascot_style}
        src={rewardRedeemed ? '/shop/Shop-Leaf.png' : mascot}
        width={rewardRedeemed ? 220 : 200}
        height={rewardRedeemed ? 285 : 215} />
    </>
  )
};

export default HomeMascot;
