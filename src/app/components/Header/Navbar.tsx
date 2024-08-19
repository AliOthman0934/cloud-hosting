import Link from "next/link"
import styles from './Header.module.css';
import { GrTechnology } from "react-icons/gr";




const Navbar = () => {
    return (
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
    )
}

export default Navbar