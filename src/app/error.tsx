"use client"

import Link from "next/link"

const error = () => {
    return (
        <div className="pt-7 text-center">
            <div className="text-3xl text-red-600 font-semibold">
                <p>Somthin went wrong </p>
            </div>
            <Link className="text-xl underline text-blue-700 block mt-6" href="/">
            Go to home page
            </Link>
        </div>
    )
}

export default error