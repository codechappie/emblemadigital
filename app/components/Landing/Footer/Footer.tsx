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
                        <span className="h6">Agencia</span>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="/nosotros" className="link-fancy link-fancy-light">Nosotros</a>
                            </li>
                            {/* <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Legal</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Career</a>
                            </li> */}
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col border-end border-dark">
                        <span className="h6">Servicios</span>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="/logos-y-disenios" className="link-fancy link-fancy-light">Logos y Diseños</a>
                            </li>
                            <li className="nav-item">
                                <a href="/proyectos" className="link-fancy link-fancy-light">Desarrollo web</a>
                            </li>

                            {/* <li className="nav-item">
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
                            </li> */}
                        </ul>
                    </div>
                    <div className="col">
                        <span className="h6">Soporte</span>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Legal</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Carreras</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="link-fancy link-fancy-light">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container text-center small py-vh-2 border-top border-dark">Hecho por {" "}
                <a href="https://emblemadigital.com" className="link-fancy link-fancy-light" target="_blank">emblemadigital.com</a>.{" "}
                © Copyright 2024 <a href="https://emblemadigital.com" className="link-fancy link-fancy-light" target="_blank">Emblema Digital</a>
            </div>
        </footer>
    )
}

export default Footer