"use client";

import Link from "next/link"
import styles from './Header.module.css';
import { GrTechnology } from "react-icons/gr";
import { CiMenuBurger }from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";


const Navbar = () => {

    const [toggel, setToggel] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/" className={styles.logo}>
                    CLOUD
                    <GrTechnology />
                    HOSTING
                </Link>
            </div>

            <div className={styles.menu} >
                {toggel ? <IoCloseSharp onClick={() => setToggel(prev => !prev)}/> : <CiMenuBurger onClick={() => setToggel(prev => !prev)}/> }
                
            </div>

            <div className={styles.navLinksWrapper} style = {{
                clipPath : toggel && "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" || ""
            }}>

                <ul className={styles.links}>
                    <Link href="/" className={styles.link} onClick={()=> setToggel(false)}>Home</Link>
                    <Link href="/about" className={styles.link} onClick={()=> setToggel(false)}>About</Link>
                    <Link href="/articles?pageNumber=2" className={styles.link} onClick={()=> setToggel(false)}>Articale</Link>
                    <Link href="/admin" className={styles.link} onClick={()=> setToggel(false)}>Admin Dashboard</Link>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar