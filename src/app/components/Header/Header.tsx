import { headers } from 'next/headers'
import React from 'react'
import Link from 'next/link'

import styles from './Header.module.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar/>
            <div className={styles.right}>
                <Link href="./login" className={styles.btn}>log in</Link>
                <Link href="./register" className={styles.btn}>register</Link>
            </div>
        </header>
    )
}

export default Header