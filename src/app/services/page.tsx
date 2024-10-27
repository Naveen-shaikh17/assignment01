import Link from "next/link";
import styles from '../page.module.css';


const services=()=>{
    return(
        <div className={styles.main}>
            <nav><h1 className={styles.h1}>SERVICES</h1></nav>
            <p className={styles.p}>You are on services page</p>
            <div className={styles.main}>
            <ul className={styles.pages}>
                <li> <Link href="/service1">APP DEVELOPMENT </Link></li>
                <li> <Link href="/service2">WEB DEVELOPMENT </Link></li>
            </ul>
            </div>
        </div>
    )
}
export default services;