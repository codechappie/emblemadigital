"use client"
import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false);

    useEffect(() => {
        let scrollpos = window.scrollY;

        const header: HTMLElement | null = document.querySelector(".navbar");
        if (header) {
            const header_height = header.offsetHeight;

            const add_class_on_scroll = () => header.classList.add("scrolled", "shadow-sm");
            const remove_class_on_scroll = () => header.classList.remove("scrolled", "shadow-sm");

            window.addEventListener('scroll', function () {
                scrollpos = window.scrollY;

                if (scrollpos >= header_height) { add_class_on_scroll(); }
                else { remove_class_on_scroll(); }

            })
        }

    }, []);


    return (
        <nav id="navScroll" className={`${menuIsOpen && "navMenuOpen"}  navbar navbar-dark bg-black fixed-top px-vw-5`} tabIndex={0}>
            <div className="container">
                <Link className="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center" href="/">
                    <img src="/logo.png" alt="" />
                    <span className="ms-md-1 mt-1 fw-bolder me-md-5">Emblema Digital</span>
                </Link>

                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 list-group list-group-horizontal">
                    <li className="nav-item">
                        <Link className="nav-link fs-5" href="/" aria-label="Inicio">
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-5" href="/logos-y-disenios" aria-label="Logos">
                            Logos
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link fs-5" href="/proyectos" aria-label="Proyectos web">
                            Proyectos
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link fs-5" href="/nosotros" aria-label="Nosotros">
                            Nosotros
                        </Link>
                    </li>


                </ul>
                <Link href="https://wa.me/51986970093?text=Hola%2C+me+pueden+brindar+mas+informaci%C3%B3n" target='_blank' aria-label="Check this"
                    className="btn btn-outline-light">
                    <small>Contactanos</small>
                </Link>

                <button
                    className="btn-menu"
                    onClick={() => setmenuIsOpen(!menuIsOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar