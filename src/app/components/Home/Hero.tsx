import React from 'react'
import Image from 'next/image'
import { TiTick } from 'react-icons/ti'
import CloudImage from "../../../../public/cloud-hosting.png"

const Hero = () => {
    return (
        <div>
            <div>
                <h1>Cloud Hosting</h1>
                <p>The best hosting solution for your onlin success</p>
                <div>
                    <TiTick/> Easy To Use Control Panel
                </div>
                <div>
                    <TiTick/> Secure Hosting
                </div>
                <div>
                    <TiTick/> Website Maintenace
                </div>
            </div>
            <div>
                <Image src={CloudImage} alt='Cloud image' width={500} height={500}/>
            </div>
        </div>
    )
}

export default Hero