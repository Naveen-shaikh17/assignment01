import Link from "next/link";



const homepage =()=>{
    return(
        <>
            <h1 >HOME PAGE </h1>
            <p>You are on home page.</p>
        
        <nav>
   <ul>
    <li ><Link href ="/about"> About Us </Link></li>
    <li  ><Link href="/contact">Contact us</Link></li>
   </ul>
        </nav>
        </>
    );
};
export default homepage;