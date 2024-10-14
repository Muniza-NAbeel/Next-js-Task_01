import Link from "next/link";
export default function Navbar(){
    return (
        <>
        <Link href="/"> Home</Link> &nbsp;&nbsp; |&nbsp;&nbsp;
        <Link href="/About"> About us</Link>&nbsp;&nbsp; |&nbsp;&nbsp;
        <Link href="/Contact"> Contact Us</Link>
        </>

    )
}