import TopBar from "@/components/TopBar"
import NavBarTutorial from "@/components/NavBar/Tutorial"
import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Shop.module.css'
import { useRouter } from "next/router"
import Image from "next/image"
import { useState } from "react"
import { createRef, useEffect } from 'react';
import lottie from 'lottie-web';

export default function Shop() {
    const router = useRouter()
    const [animation, setAnimation] = useState(false);
    const [view, setView] = useState(false);
    const [error, setError] = useState(false);
    const [score,setScore]  = useState(0);
    let animationContainer = createRef();
    let animationContainer2 = createRef();
    
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "/animation/reward-rain.json"
        })
        return () => anim.destroy()
    })
    
    useEffect(() => {
        const anim2 = lottie.loadAnimation({
            container: animationContainer2.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "/animation/reward-leafy.json"
        })
        return () => anim2.destroy()
    })
    useEffect (()=> {
        const scores = parseInt(localStorage.getItem('quizScore') || 0);
        setScore(scores)
    })

    let stars = 0;
    if (score >= 9) {
        stars = 3;
    } else if (score >= 6) {
        stars = 2;
    } else if (score >= 3) {
        stars = 1;
    }
    const [rewardRedeemed, setRewardRedeemed] = useState(false);

    useEffect(() => {
        const redeemed = localStorage.getItem('redeemed');
        if (redeemed === 'true') {
            setRewardRedeemed(true);
        }
    }, []);

    useEffect(() => {
        if (rewardRedeemed) {
            localStorage.setItem('redeemed', 'true');
            localStorage.removeItem('quizScore');
        }
    }, [rewardRedeemed]);

    const handleRedeemReward = () => {
        if (stars === 3) {
            setRewardRedeemed(true);
            router.push({
                query: { rewardRedeemed: true }
            });
            localStorage.removeItem('quizScore');
        } else {
            setError(true)
        }

    };

    const handleAnimation = () => {
        if (animation === false) {
            setAnimation(true);
        } else {
            setAnimation(false);
        }
    }
    const handleView = () => {
        if (view === false) {
            setView(true);
        } else {
            setView(false);
        }
    }
    return (
        <>
            <Head>
                <title>GREEN GENERATION</title>
                <meta name="Learning" content="Green Generation - More" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <main className={styles.main}>
                <TopBar />
                <div className={styles.main__container}>
                    <div>
                        <div className={styles.shop__star}>

                            <div className={styles.shop__score}>
                                {stars === 3 && (
                                    <>
                                        <p>3</p>
                                    </>
                                )}
                                {stars === 2 && (
                                    <>
                                        <p>2</p>
                                    </>
                                )}
                                {stars === 1 && (
                                    <>
                                        <p>1</p>
                                    </>
                                )}
                                {stars === 0 && (
                                    <>
                                        <p>0</p>
                                    </>
                                )}
                            </div>
                            <Image className={styles.shop__img} src="/shop/Shop-Star.png" width={28} height={28} />

                        </div>


                    </div>
                </div>
                <div>
                    <div className={styles.reward__topcontainer}>
                        <div className={styles.reward__topItem}>
                            <div className={styles.reward__imgbg}>

                                <Image src="/shop/reward-leafy.png" width={115} height={155} alt="reward 1" />

                            </div>
                            {
                                !rewardRedeemed && (
                                    <div className={styles.reward__btn}>
                                    <button onClick={handleView}>View & Redeem</button>
                                </div>
                                )
                            }
                            {rewardRedeemed && (
                                <div className={styles.reward__btn__sp}>
                                <button onClick={handleView}>Redeemed</button>
                            </div>
                            )}
                            

                            {view && (
                                <div className={styles.animation__bg}>

                                    <div className={styles.animation__container} ref={animationContainer2} />
                                    {error && (
                                        <div className={styles.animation__desc}>
                                            <p>You need 3 stars to unlock!</p>
                                            <p>Try to score higher in the quiz!</p>
                                        </div>
                                    )}
                                    {
                                        !rewardRedeemed && (
                                            <div className={styles.animation__btn}>
                                                <button onClick={handleRedeemReward}>Redeem Reward</button>
                                                <button onClick={handleView}>Check Other Outfits</button>
                                            </div>
                                        )
                                    }

                                    {rewardRedeemed && (
                                        <div>
                                            <div className={styles.animation__desc__sp}>
                                                <p>Congradulation! </p>
                                                <p>Your mascot has a new outfit!</p></div>
                                            <div className={styles.animation__btn}>
                                                <Link href="/homepage"><button>Check Your Outfit</button></Link>
                                                <button onClick={handleView}>Check Other Outfits</button>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            )}

                        </div>
                        <div className={styles.reward__topItem}>
                            <div className={styles.reward__imgbg}>
                                <Image src="/shop/reward-rain.png" width={95} height={155} alt="reward 1" />
                            </div>
                            <div className={styles.reward__btn}>
                                <button onClick={handleAnimation}>Preview Outfit</button>
                            </div>
                            {animation && (
                                <div className={styles.animation__bg}>
                                    <div className={styles.animation__container} ref={animationContainer} />
                                    <div className={styles.animation__desc}>
                                        <p>This outfit is only available on Feb 30th, 2024</p>
                                    </div>
                                    <div className={styles.animation__btn}>
                                        <button onClick={handleAnimation}>Check Other Outfits</button>
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>


                </div>

                <NavBarTutorial />
            </main>
        </>
    )
}