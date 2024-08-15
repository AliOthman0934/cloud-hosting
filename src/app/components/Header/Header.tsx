import { headers } from 'next/headers'
import React from 'react'
import Link from 'next/link'
import { GrTechnology } from "react-icons/gr";

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <Link href="/">
                        CLOUD
                            <GrTechnology />
                        HOSTING
                    </Link>
                </div>

                <ul>
                    <Link href="/about">about</Link>
                    <Link href="/admin">admin</Link>
                    <Link href="/">home</Link>
                </ul>
            </nav>

            <div>
                <Link href="./login">log in</Link>
                <Link href="./register">register</Link>
            </div>
        </header>
    )
}

export default Header