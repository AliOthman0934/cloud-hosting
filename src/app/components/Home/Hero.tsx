import React from 'react'
import Image from 'next/image'
import { TiTick } from 'react-icons/ti'
import CloudImage from "../../../../public/cloud-hosting.png"
import style from "./Hero.module.css"

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={style.heroLeft}>
                <h1 className={style.title}>Cloud Hosting</h1>
                <p className={style.desc}>The best hosting solution for your onlin success</p>

                <div className= {style.services}>
                    <div className= {style.servicesItem}>
                        <TiTick /> Easy To Use Control Panel
                    </div>

                    <div className= {style.servicesItem}>
                        <TiTick /> Secure Hosting
                    </div>

                    <div className= {style.servicesItem}>
                        <TiTick /> Website Maintenace
                    </div>
                </div>

            </div>
            <div>
                <Image src={CloudImage} alt='Cloud image' width={500} height={500} />
            </div>
        </div>
    )
}

export default Hero