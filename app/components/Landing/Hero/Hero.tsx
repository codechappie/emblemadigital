"use client"
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <main>
            <div className="w-100 overflow-hidden position-relative bg-black text-white" data-aos="fade">
                <div className="position-absolute w-100 h-100 bg-black opacity-75 top-0 start-0"></div>
                <div className="container py-vh-4 position-relative mt-5 px-vw-3 text-center">
                    <div className="row d-flex align-items-center justify-content-center py-vh-5">
                        <div className="col-12 col-xl-10">
                            <span className="h5 text-secondary fw-lighter">Nuestra Misión</span>
                            <h1 className="display-huge mt-3 mb-3 lh-1">Convertir ideas en experiencias digitales únicas.</h1>
                        </div>
                        <div className="col-12 col-xl-8">
                            <p className="lead text-secondary">Potenciamos tu marca en el entorno digital para que se haga notar y crezca de manera significativa.</p>
                        </div>
                        <div className="col-12 text-center">
                            <Link href="https://wa.me/51986970093?text=Hola%2C+me+pueden+brindar+mas+información" target='_blank' className="btn btn-xl btn-light">Empieza gratis
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="arrow-inline bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-100 position-relative bg-black text-white bg-cover d-flex align-items-center">
                <div className="container-fluid px-vw-1">
                    <div className="position-absolute w-100 h-50 bg-dark bottom-0 start-0"></div>
                    <div className="web-gallery row d-flex align-items-center position-relative justify-content-center px-0 g-5">
                        <div className="col-12 col-lg-3">
                            <img src="https://imgur.com/7mQ21W3.png"
                                alt="abstract image" className="img-fluid position-relative rounded-5 shadow" data-aos="fade-up" />
                        </div>
                        <div className="col-12 col-lg-5 col-md-6 col-lg-3">
                            <img src="https://imgur.com/uqM0wcv.png"
                                alt="abstract image" className="img-fluid position-relative rounded-5 shadow" data-aos="fade-up"
                                data-aos-duration="2000" />
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 col-lg-3">
                            <img src="https://imgur.com/RYY8p9b.png"
                                alt="abstract image" className="img-fluid position-relative rounded-5 shadow" data-aos="fade-up"
                                data-aos-duration="2000" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark">
                <div className="container px-vw-5 py-vh-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-lg-7 text-lg-end" data-aos="fade-right">
                            <span className="h5 text-secondary fw-lighter">Lo que hacemos</span>
                            <h2 className="display-4">Creamos experiencias que cautivan, conectan y hacen crecer tu marca.
                                Llevamos tu presencia online al siguiente nivel.</h2>
                        </div>
                        <div className="col-12 col-lg-5" data-aos="fade-left">
                            <h3 className="pt-5">Diseño y Estrategia</h3>
                            <p className="text-secondary">Fusionamos diseño y estrategia para crear experiencias digitales atractivas que conecten con tu audiencia y generen resultados reales.<br />
                                <a href="#" className="link-fancy link-fancy-light me-2">Más información</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    className="arrow-inline bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </p>
                            <h3 className="border-top border-secondary pt-5 mt-5">Desarrollo e Ingeniería</h3>
                            <p className="text-secondary">Creamos soluciones tecnológicas robustas y escalables, asegurando que cada proyecto sea funcional, seguro y optimizado para el éxito.<br />
                                <a href="#" className="link-fancy link-fancy-light me-2">Más información</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    className="arrow-inline bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black py-vh-3" id="#proyectos">
                <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">

                    <div className="row gx-5">
                        <div className="col-12 col-md-6">
                            <div className="p-2 pt-0 mt-5" data-aos="fade">
                                <span className="h5 text-secondary fw-lighter">Nuestros Servicios</span>
                                <h2 className="display-4">Satisface las necesidades de tu negocio y crece desde el inicio.</h2>
                            </div>
                            <div className="card bg-transparent mb-5 mt-5" data-aos="zoom-in-up">
                                <div className="bg-dark shadow rounded-5 p-0">
                                    <img src="https://cdn.dribbble.com/userupload/17427533/file/original-ff467291c96cfc602917f815fd4c7d69.png?resize=400x0" width="582" height="390"
                                        alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                    <div className="p-5">
                                        <h2 className="fw-lighter">Páginas Web</h2>
                                        <p className="pb-4 text-secondary">Creamos tu página web a medida, adaptada a las necesidades de tu negocio, 100% gestionable y con un diseño y calidad únicos.</p>
                                        <a href="#" className="link-fancy link-fancy-light">Leer más</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-transparent" data-aos="zoom-in-up">
                                <div className="bg-dark shadow rounded-5 p-0">
                                    <img src="https://www.digitalauthority.me/wp-content/uploads/2022/04/shutterstock_1192353367-1.jpg" width="582" height="327"
                                        alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                    <div className="p-5">
                                        <h2 className="fw-lighter">Redes Sociales</h2>
                                        <p className="pb-4 text-secondary">Gestión y optimización de campañas digitales. Mejoramos el rendimiento de tus campañas en Facebook Ads.</p>
                                        <a href="#" className="link-fancy link-fancy-light">Leer más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
                                <div className="bg-dark shadow rounded-5 p-0">
                                    <img src="https://cdn.dribbble.com/userupload/13020854/file/original-565089b6c992db586b93264eea2ea08f.png?resize=400x300&vertical=center" width="582" height="327"
                                        alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                    <div className="p-5">
                                        <h2 className="fw-lighter">Tienda
                                            Virtual</h2>
                                        <p className="pb-4 text-secondary">Desarrollamos tu tienda online y la preparamos para comenzar a vender. Agrega tus productos y empieza a recibir pedidos.</p>
                                        <a href="#" className="link-fancy link-fancy-light">Leer más</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-transparent" data-aos="zoom-in-up">
                                <div className="bg-dark shadow rounded-5 p-0">
                                    <img src="https://www.accesscreative.ac.uk/wp-content/uploads/2024/05/Graphic-Design-student-making-a-design.jpg" width="582" height="442"
                                        alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                    <div className="p-5">
                                        <h2 className="fw-lighter">Diseño Grafico</h2>
                                        <p className="pb-4 text-secondary">Te brindamos diseño gráfico para potenciar tu marca con logotipos, folletos y otros diseños creativos y efectivos que destaquen tu identidad y atraigan a tu audiencia.</p>
                                        <a href="#" className="link-fancy link-fancy-light">Leer más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="bg-dark position-relative">
                <div className="container px-vw-2 py-vh-5">
                    <div className="row d-flex align-items-center">

                        <div className="image-gallery">
                            <img className="img-fluid rounded-5 shadow"
                                src="https://imgur.com/Ps2J1WZ.png"
                                alt="another nice person" loading="lazy" data-aos="zoom-in-up" />
                            <img className="img-fluid rounded-5 shadow"
                                src="https://imgur.com/yo5pGjR.png"
                                alt="another nice person" loading="lazy" data-aos="zoom-in-up" />
                            <img className="img-fluid rounded-5 shadow"
                                src="https://imgur.com/oZzziPt.png"
                                alt="another nice person" loading="lazy" data-aos="zoom-in-up" />
                            <img className="img-fluid rounded-5 shadow"
                                src="https://imgur.com/eqaYbM1.png"
                                alt="another nice person" loading="lazy" data-aos="zoom-in-up" />

                        </div>
                        <div className="col-12 col-lg-6 bg-dark rounded-5 py-5 mt-4" data-aos="fade">
                            <span className="h5 text-secondary fw-lighter pl-5">Detrás de cada proyecto.</span>
                            <h2 className="display-3 pl-5">En Emblema Digital nos enorgullecen las amistades que hemos creado con nuestro equipo y clientes.</h2>
                            <h2 className="display-3 pl-5 mt-5">Somos un equipo de personas apasionadas por emprender y trabajar juntas para enfrentar cualquier desafío.</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="bg-black">
                <div className="container px-vw-5 py-vh-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-lg-5 text-center text-lg-end" data-aos="zoom-in-right">
                            <span className="h5 text-secondary fw-lighter">What we charge</span>
                            <h2 className="display-4">You get all our knowledge for one simple price</h2>
                        </div>
                        <div className="col-12 col-lg-7 bg-dark rounded-5 py-vh-3 text-center my-5" data-aos="zoom-in-up">
                            <h2 className="display-huge mb-5">
                                <span className="fs-4 me-2 fw-light">$</span><span className="border-bottom border-5">499</span><span
                                    className="fs-6 fw-light">/day</span>
                            </h2>
                            <p className="lead text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" className="btn btn-xl btn-light">Sign up
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="arrow-inline bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div> */}
            {/* <div className="container-fluid px-vw-5 position-relative" data-aos="fade">
                <div className="position-absolute w-100 h-50 bg-black top-0 start-0"></div>
                <div className="position-relative py-vh-5 bg-cover bg-center rounded-5 mb-4"
                    style={{ backgroundImage: "url(https://themewagon.github.io/klar/img/webp/abstract12.webp)" }}>
                    <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">
                        <div className="row d-flex align-items-center">

                            <div className="col-6 d-flex align-items-center bg-dark shadow rounded-5 p-0" data-aos="zoom-in-up">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12">
                                        <img src="https://themewagon.github.io/klar/img/webp/person103.webp" width="684" height="457"
                                            alt="our CEO with some nice numbers" className="img-fluid rounded-5" loading="lazy" />
                                    </div>
                                    <div className="col-12 col-lg-10 col-xl-8 text-center my-5">
                                        <p className="lead border-bottom pb-4 border-secondary">"¡Me encanta cómo trabajaron en mi sitio web! Desde el diseño hasta la funcionalidad, todo quedó increíble. ¡Gracias, equipo de Emblema Digital, por hacer que mi negocio brille en línea!"</p>
                                        <p className="text-secondary text-center">Carlos M., Lima, Perú.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 offset-1">
                                <span className="h5 text-secondary fw-lighter">The numbers</span>
                                <h2 className="display-huge display-huge-left fw-bolder" data-aos="zoom-in-left">+400</h2>
                                <p className="h4 fw-lighter text-secondary">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                </p>

                                <h2 className="display-huge display-huge-left fw-bolder border-top border-secondary pt-5 mt-5" data-aos="zoom-in-left">78.981
                                </h2>
                                <p className="h4 fw-lighter text-secondary">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                </p>
                                <h2 className="display-huge display-huge-left fw-bolder border-top border-secondary pt-5 mt-5" data-aos="zoom-in-left">98%</h2>
                                <p className="h4 fw-lighter text-secondary">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

            <div className="container-fluid px-vw-5 position-relative" data-aos="fade">
                <div className="position-absolute w-100 h-50 bg-black top-0 start-0"></div>
                <div className="position-relative py-vh-2 bg-cover bg-center rounded-5 mb-4">
                    <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">
                        <div className="row d-flex align-items-start">
                            <div className="col-lg-4 col-sm-12">
                                {/* <span className="h5 text-secondary fw-lighter">The numbers</span> */}
                                <h2 className="display-huge display-huge-left fw-bolder" data-aos="zoom-in-left">+100</h2>
                                <p className="h4 fw-lighter text-secondary">
                                    proyectos exitosos.
                                </p>
                            </div>

                            <div className="col-lg-4 col-sm-12">
                                <h2 className="display-huge display-huge-left fw-bolder" data-aos="zoom-in-left">+90.000
                                </h2>
                                <p className="h4 fw-lighter text-secondary">
                                    usuarios alcanzados en campañas publicitarias.
                                </p>
                            </div>

                            <div className="col-lg-4 col-sm-12">
                                <h2 className="display-huge display-huge-left fw-bolder" data-aos="zoom-in-left">100%</h2>
                                <p className="h4 fw-lighter text-secondary">
                                    de proyectos entregados a tiempo.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-dark py-vh-5">
                <div className="container px-vw-5">
                    <div className="row d-flex gx-5 align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="p-5 pt-0" data-aos="fade">
                                <span className="h5 text-secondary fw-lighter">Lo que nuestros clientes dicen</span>
                                <h2 className="display-3">No lo afirmamos nosotros, lo dicen nuestros propios clientes.</h2>
                            </div>
                            <div className="rounded-5 bg-black p-5 shadow mt-5" data-aos="zoom-in-right">
                                <div className="fs-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                </div>
                                <p className="text-secondary lead">&quot;¡Me encanta cómo trabajaron en mi sitio web! Desde el diseño hasta la funcionalidad, todo quedó increíble. ¡Gracias, equipo de Emblema Digital, por hacer que mi negocio brille en línea!&quot;</p>
                                <div className="d-flex justify-content-start align-items-center border-top border-secondary pt-3">
                                    <img src="https://imgur.com/TQHLhr0.png" width="96" height="96"
                                        className="rounded-circle me-3" alt="a nice person" data-aos="fade" loading="lazy" />
                                    <div>
                                        <span className="h6 fw-5">CasaMia Novedades</span><br />
                                        <small className="text-secondary">Lima, Perú.</small>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="rounded-5 bg-black p-5 shadow mt-5 gradient" data-aos="zoom-in-left">
                                <div className="fs-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                </div>
                                <p className="lead">&quot;¡Excelente servicio! La comunicación fue super clara y siempre estuvieron pendientes de mis necesidades. Definitivamente recomiendo a Emblema Digital a todos los emprendedores que buscan calidad y dedicación.&quot;</p>
                                <div className="d-flex justify-content-start align-items-center border-top pt-3">
                                    <img src="https://themewagon.github.io/klar/img/webp/person16.webp" width="96" height="96"
                                        className="rounded-circle me-3" alt="a nice person" data-aos="fade" loading="lazy" />
                                    <div>
                                        <span className="h6 fw-5">Lizbeth R.</span><br />
                                        <small className="text-secondary">Lima, Perú.</small>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-5 bg-black p-5 shadow mt-5" data-aos="zoom-in-right">
                                <div className="fs-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star-half" viewBox="0 0 16 16">
                                        <path
                                            d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                    </svg>

                                </div>
                                <p className="lead">&quot;Me ayudaron con el diseño de mi logo, sino también a estructurar toda mi estrategia digital. ¡El cambio en mi negocio ha sido brutal! Super agradecido con todo el equipo.&quot;</p>
                                <div className="d-flex justify-content-start align-items-center border-top border-secondary pt-3">
                                    <img src="https://themewagon.github.io/klar/img/webp/person13.webp" width="96" height="96"
                                        className="rounded-circle me-3" alt="a nice person" data-aos="fade" loading="lazy" />
                                    <div>
                                        <span className="h6 fw-5">Andrés F.</span><br />
                                        <small>Lima, Perú.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-black">
                <div className="container px-vw-5 py-vh-2">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-lg-5 text-center text-lg-end" data-aos="zoom-in-right">
                            <span className="h5 text-secondary fw-lighter">¿En qué podemos ayudarte?</span>
                            <h2 className="display-4">Será un placer conocerte y conocer más sobre tu proyecto.</h2>
                        </div>
                        <div className="form-container col-12 col-lg-7 bg-dark rounded-5 py-vh-3 text-center my-5" data-aos="zoom-in-up">
                            <h2 className="display-huge mb-5">
                                <span className="fs-3 me-2 fw-light">Contáctanos</span>
                            </h2>

                            <div className="inputForm">
                                <label htmlFor="#">Nombre</label>
                                <input type="text" />
                            </div>

                            <div className="inputForm">
                                <label htmlFor="#">Teléfono</label>
                                <input type="text" />
                            </div>

                            <div className="inputForm">
                                <label htmlFor="#">Cuentanos tu idea</label>
                                <textarea ></textarea>
                            </div>

                            <Link href="#" className="form-btn btn btn-xl btn-light">Más información
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="arrow-inline bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    )
}

export default Hero