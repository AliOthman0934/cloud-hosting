"use client"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";
import styles from './Header.module.css';

function Logout() {
    const router = useRouter();
    const logOutHandler = async () => {
        try {
            await axios.get("http://localhost:3000/api/user/logout")
            router.push("/")
        } catch (error) {
            toast.warning("Somthing went wrong")
            console.log(error)
        }

    }
    return (
        <button onClick={logOutHandler} className={styles.btn}>
            Logout
        </button>
    )
}

export default Logout