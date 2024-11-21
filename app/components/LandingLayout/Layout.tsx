"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from '../Landing/Footer/Footer';
import Navbar from '../Landing/Navbar/Navbar';

const Layout = ({ children }: any) => {

    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            duration: 800,
            delay: 0
        });
    }, []);

    return (
        <>

            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout