import Link from 'next/link';
import React from 'react'
import { useEffect } from 'react';

const Navbar = () => {

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

                console.log(scrollpos);
            })
        }

    }, []);

    return (
        <nav id="navScroll" className="navbar navbar-dark bg-black fixed-top px-vw-5" tabIndex={0}>
            <div className="container">
                <a className="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center" href="index.html">
                    <img src="/logo.png" alt="" />
                    <span className="ms-md-1 mt-1 fw-bolder me-md-5">Emblema Digital</span>
                </a>

                {/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0 list-group list-group-horizontal">
                    <li className="nav-item">
                        <Link className="nav-link fs-5" href="/servicios" aria-label="Homepage">
                            Servicios
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5" href="content.html" aria-label="A sample content page">
                            Content
                        </a>
                    </li>

                </ul> */}
                <a href="#" aria-label="Check this"
                    className="btn btn-outline-light">
                    <small>Check this</small>
                </a>
            </div>
        </nav>
    )
}

export default Navbar