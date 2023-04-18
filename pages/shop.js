import TopBar from "@/components/TopBar"
import NavBarTutorial from "@/components/NavBar/Tutorial"
import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Shop.module.css'
import { useRouter } from "next/router"
import Image from "next/image"
import { useState } from "react"
import HomeMascot from "@/components/Hompage/Mascot"
export default function Shop() {
    const router = useRouter()
    const score = parseInt(router.query.score || 0);
    let stars = 0;
    if (score >= 9) {
        stars = 3;
    } else if (score >= 6) {
        stars = 2;
    } else if (score >= 3) {
        stars = 1;
    }
    const [rewardRedeemed, setRewardRedeemed] = useState(false);



    const handleRedeemReward = () => {
        setRewardRedeemed(true);
        localStorage.setItem('redeemed', 'true');
        router.push({
            pathname: "/homepage",
            query: { rewardRedeemed:true }
        });
    };

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
                            </div>
                            <Image className={styles.shop__img} src="/shop/Shop-Star.png" width={28} height={28} alt="stars" />

                        </div>


                    </div>
                </div>
                <div>
                    <Image src="/shop/Shop-Leaf.png" width={115} height={155} alt="reward 1"/>
                    <button onClick={handleRedeemReward}>Redeem Reward</button>
                </div>
                <HomeMascot rewardRedeemed={rewardRedeemed} />
                <NavBarTutorial />
            </main>
        </>
    )
}