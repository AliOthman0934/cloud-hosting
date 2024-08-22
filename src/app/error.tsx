"use client"
import Link from "next/link"
interface ErrorPageProps{
    error: Error,
    reset: () => void
}

const error = ({error , reset}:ErrorPageProps) => {
    return (
        <div className="pt-7 text-center grid place-content-center" >
            <div className="text-3xl text-red-600 font-semibold">
                <p>Somthin went wrong </p>
            </div>
            <h2 className="text-gray-700 text-xl">
                Error Message:{error.message}
            </h2>
            <div>
            <button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full">
                Try again
            </button>
            </div>

        </div>
    )
}

export default error