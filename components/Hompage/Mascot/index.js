import styles from './Mascot.module.css'
import mascot from '../../../public/mascot.png'
import Image from 'next/image'
import { createRef, useEffect } from 'react';
import lottie from 'lottie-web';

const HomeMascot = ({ rewardRedeemed }) => {

  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animation/reward-leafy.json"
    })
    return () => anim.destroy()
  })
  return (
    <>{
      !rewardRedeemed && (
        <div className={styles.mascot_style}>
          <Image src={mascot} width={200} height={215} alt='original mascot' />
        </div>
      )
    }
    {rewardRedeemed&& (
      <div className={styles.animation__container} ref={animationContainer} />
    )}
      
  
    </>
  )
};

export default HomeMascot;
