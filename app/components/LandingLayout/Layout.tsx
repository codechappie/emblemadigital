import React, { PropsWithChildren } from 'react'
import Footer from '../Landing/Footer/Footer'
import Navbar from '../Landing/Navbar/Navbar'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout