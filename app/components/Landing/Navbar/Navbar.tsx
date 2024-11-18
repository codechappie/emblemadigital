import Link from 'next/link';
import React from 'react'
import { useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {
        let scrollpos = window.scrollY;
        const header: any = document.querySelector(".navbar");
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stack"
                        viewBox="0 0 16 16">
                        <path
                            d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                        <path
                            d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                    </svg>
                    <span className="ms-md-1 mt-1 fw-bolder me-md-5">Emblema Digital</span>
                </a>

                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 list-group list-group-horizontal">
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

                </ul>
                <a href="#" aria-label="Check this"
                    className="btn btn-outline-light">
                    <small>Check this</small>
                </a>
            </div>
        </nav>
    )
}

export default Navbar