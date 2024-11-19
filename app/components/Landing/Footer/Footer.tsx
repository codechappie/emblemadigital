import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black border-top border-dark">
            <div className="container py-vh-4 text-secondary fw-lighter">
                <div className="footermobile row">
                    <div className="col-12 col-lg-5 py-4 text-center text-lg-start">
                        <a className="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center" href="index.html">
                            <img src="/logo.png" alt="" />
                            <span className="ms-md-1 mt-1 fw-bolder me-md-5">Emblema Digital</span>
                        </a>

                    </div>
                    <div className="col border-end border-dark">
                        <span className="h6">Company</span>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">About us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Legal</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Career</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col border-end border-dark">
                        <span className="h6">Services</span>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Products</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Customers</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Success Stories</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">More</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <span className="h6">Support</span>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">About us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Legal</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Career</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container text-center small py-vh-2 border-top border-dark">Made by {" "}
                <a href="https://emblemadigital.com" className="link-fancy link-fancy-light" target="_blank">emblemadigital.com</a>{" "}
                Distributed by <a href="https://emblemadigital.com" className="link-fancy link-fancy-light" target="_blank">Emblema Digital</a>
            </div>
        </footer>
    )
}

export default Footer