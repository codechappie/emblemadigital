"use client"
import React from 'react'
import Layout from '../components/LandingLayout/Layout'

const page = () => {
    return (
        <Layout>
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
        </Layout>
    )
}

export default page