import { headers } from 'next/headers'
import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers';
import styles from './Header.module.css';
import Navbar from './Navbar';
import { verifyTokenPage } from '@/utils/verifyToken';
import Logout from './Logout';

const Header = () => {
    const token = cookies().get("cookieToken")?.value || ""
    const payload = verifyTokenPage(token)
    return (
        <header className={styles.header}>
            <Navbar token={token} />
            <div className={styles.right}>
                {payload ? (<><strong className='text-blue-800 md:text-xl capitalize'>{payload?.userName}</strong><Logout></Logout></>) : (
                    <>                    
                    <Link href="./login" className={styles.btn}>log in</Link>
                    <Link href="./register" className={styles.btn}>register</Link>
                    </>
                )
                }
            </div>
        </header>
    )
}

export default Header