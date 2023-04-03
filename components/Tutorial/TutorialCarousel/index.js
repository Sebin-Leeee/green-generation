import Image from "next/image";
import { useState } from "react";
import BtnTutorial from "../BtnTutorial";
import styles from "../TutorialCarousel/TutorialCarousel.module.css"
export default function TutorialCarousel({img}) {

    return (
        <>
            <div className={styles.img}>
                <div style={{
                    backgroundImage: "url(/tutorial-carousel/" + img + ".png)",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: 300,
                    height: 200
                }} >

                </div>
            </div>


        </>
    )
}