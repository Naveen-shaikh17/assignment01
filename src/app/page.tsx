import Link from "next/link";
import styles from './page.module.css';
const homepage =()=>{
    return(
        <div className={styles.body}>
        <nav className={styles.nav}>
            <h1 className={styles.h1}>HOME PAGE </h1>
            </nav>

            <p className={styles.p}>You are on home page.</p>
        
      <div className={styles.main}>  
   <ul className={styles.pages}>
    <li ><Link href ="/about"> About Us </Link></li>
    <li  ><Link href="/contact">Contact us</Link></li>
    <li> <Link href="/services"> Services</Link></li>
   </ul>
   </div>
        
        </div>
        
        
    );
};
export default homepage;