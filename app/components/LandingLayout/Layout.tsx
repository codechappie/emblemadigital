import React, { PropsWithChildren } from 'react'
import Navbar from '../Landing/Navbar/Navbar'
import Hero from '../Landing/Hero/Hero'
import Footer from '../Landing/Footer/Footer'

const Layout: React.FC<PropsWithChildren> = () => {
    return (
        <>
            <Navbar />
            <Hero />

            <Footer />
        </>
    )
}

export default Layout