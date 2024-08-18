import { headers } from 'next/headers'
import React from 'react'
import Link from 'next/link'
import { GrTechnology } from "react-icons/gr";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div>
                    <Link href="/" className={styles.logo}>
                        CLOUD
                            <GrTechnology />
                        HOSTING
                    </Link>
                </div>

                <ul className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/articale" className={styles.link}>Articale</Link>
                    <Link href="/admin" className={styles.link}>Admin Dashboard</Link>
                </ul>
            </nav>

            <div className={styles.right}>
                <Link href="./login" className={styles.btn}>log in</Link>
                <Link href="./register" className={styles.btn}>register</Link>
            </div>
        </header>
    )
}

export default Header