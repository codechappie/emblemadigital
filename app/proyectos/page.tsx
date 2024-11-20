import { Metadata } from 'next';
import Layout from '../components/LandingLayout/Layout';

export const metadata: Metadata = {
    title: "Proyectos Web | Emblema Digital | Potenciamos tu marca en el entorno digital",
    description: "Mostramos una selección de trabajos destacados que reflejan nuestra experiencia en diseño y desarrollo web a medida.",
    keywords: ["diseño web", "desarrollo web", "SEO", "potenciar marca", "experiencias digitales", "diseño personalizado", "logo", "mi primera web"],
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#ffffff",
    openGraph: {
        title: "Emblema Digital | Página de Inicio",
        description: "Mostramos una selección de trabajos destacados que reflejan nuestra experiencia en diseño y desarrollo web a medida.",
        images: "https://imgur.com/KSBaS7I.png",
        url: "https://www.emblemadigital.com",
        type: "website",
    },
};


const page = () => {
    return (
        <Layout>
            <div className="bg-black py-vh-3">
                <div className="container bg-black px-vw-5 py-vh-3 rounded-5">

                    <div className="row gx-5">
                        <div className="col-12 col-md-6">
                            <div className="p-2 pt-0 mt-5" data-aos="fade">
                                <span className="h5 text-secondary fw-lighter">Algunos de nuestros proyectos</span>
                                <h2 className="display-4">Proyectos exitosos que reflejan nuestra experiencia y compromiso con la excelencia.</h2>
                            </div>
                            <div className="card bg-transparent mb-5 mt-5" data-aos="zoom-in-up">
                                <div className="bg-dark shadow rounded-5 p-0">
                                    <img src="https://imgur.com/9F5DoqJ.jpg" width="582" height="390"
                                        alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                    <div className="p-5">
                                        <h2 className="fw-lighter">Esios - Red Eléctrica de España</h2>
                                        <p className="pb-4 text-secondary">Migración de aplicación web a tecnologías modernas, maquetación, optimización y consumo de servicios web para mostrar gráficos y detalles interactivos.</p>
                                        <a href="https://www.esios.ree.es/es" className="link-fancy link-fancy-light">Ver proyecto</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
                                <div className="bg-dark shadow rounded-5 p-0">
                                    <img src="https://imgur.com/DLlEpx1.jpg" width="582" height="327"
                                        alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                    <div className="p-5">
                                        <h2 className="fw-lighter">CasaMia Novedades</h2>
                                        <p className="pb-4 text-secondary">Desarrollamos una tienda en línea personalizada para Casa Mía, mostrando sus productos de importación a nivel nacional.</p>
                                        <a href="https://casamiahogar.com/" className="link-fancy link-fancy-light">Ver proyecto</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-transparent" data-aos="zoom-in-up">
                                <div className="bg-dark shadow rounded-5 p-0">
                                    <img src="https://imgur.com/nyDcHbo.jpg" width="582" height="327"
                                        alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                    <div className="p-5">
                                        <h2 className="fw-lighter">Curriculum - Herramienta</h2>
                                        <p className="pb-4 text-secondary">Desarrollamos una herramienta web para crear y personalizar currículums en línea, permitiendo tener su CV en linea y actualizable en todo momento.</p>
                                        <a href="https://arcadepapel.net/" className="link-fancy link-fancy-light">Ver proyecto</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
                                <div className="bg-dark shadow rounded-5 p-0">
                                    <img src="https://imgur.com/meIn4Rf.jpg" width="582" height="327"
                                        alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                    <div className="p-5">
                                        <h2 className="fw-lighter">Arca de Papel - Editorial</h2>
                                        <p className="pb-4 text-secondary">Desarrollamos a medida la página web de Arca de Papel, utilizando código moderno y tecnologías actuales para ofrecer un diseño personalizado, optimizado y adaptado a todas las plataformas.</p>
                                        <a href="https://arcadepapel.net/" className="link-fancy link-fancy-light">Ver proyecto</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
                                <div className="bg-dark shadow rounded-5 p-0">
                                    <img src="https://imgur.com/CnaYDX6.jpg" width="582" height="442"
                                        alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                    <div className="p-5">
                                        <h2 className="fw-lighter">Lidia React Editor - Herramienta</h2>
                                        <p className="pb-4 text-secondary">Desarrollamos un editor de texto enriquecido a medida para React, con funciones configurables y optimizadas para una edición avanzada.</p>
                                        <a href="https://lidia-editor.codechappie.com/" className="link-fancy link-fancy-light">Ver proyecto</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-transparent" data-aos="zoom-in-up">
                                <div className="bg-dark shadow rounded-5 p-0">
                                    <img src="https://imgur.com/PDF3Xxe.jpg" width="582" height="442"
                                        alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                    <div className="p-5">
                                        <h2 className="fw-lighter">Policia Huanuco</h2>
                                        <p className="pb-4 text-secondary">Desarrollamos una página web informativa para la Policía de Huánuco, brindando acceso rápido a noticias, servicios y recursos importantes para la comunidad.</p>
                                        <a href="https://pagina.policiapataamarilla.com" className="link-fancy link-fancy-light">Ver proyecto</a>
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