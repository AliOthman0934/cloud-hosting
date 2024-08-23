import Link from "next/link"



const notFoundPage = () => {
    return (
        <section>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link href="/">
                Go To Home 
            </Link>
        </section>
    )
}

export default notFoundPage