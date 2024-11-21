import { Metadata } from 'next';
import Layout from '../components/LandingLayout/Layout';
import ContactForm from '../components/Landing/ContactForm/ContactForm';


export const metadata: Metadata = {
    title: "Logos & Diseños | Emblema Digital | Potenciamos tu marca en el entorno digital",
    description: "En Emblema Digital, creamos logos y diseños únicos que potencian tu marca en el entorno digital. Nuestra misión es transformar ideas en experiencias visuales que te hagan destacar.",
    keywords: ["diseño web", "desarrollo web", "SEO", "potenciar marca", "experiencias digitales", "diseño personalizado", "logo", "diseño gráfico", "identidad visual", "branding"],
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#ffffff",
    openGraph: {
        title: "Logos & Diseños | Emblema Digital",
        description: "Potenciamos tu marca con diseños únicos y logos a medida que te hacen destacar en el entorno digital.",
        images: "https://imgur.com/KSBaS7I.png",
        url: "https://www.emblemadigital.com/logos-y-disenios",
        type: "website",
    },
};

export default function Page() {
    return <Layout>

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
                                <img src="https://i.imgur.com/TQHLhr0.jpeg" width="582" height="390"
                                    alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                <div className="p-5">
                                    <h2 className="fw-lighter">CasaMia Novedades</h2>
                                    <p className="pb-4 text-secondary"> Venta por menor y mayor de novedades para el hogar y tecnología, envíos a nivel nacional.</p>
                                    <a href="https://casamiahogar.com/" className="link-fancy link-fancy-light">Ver proyecto</a>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
                            <div className="bg-dark shadow rounded-5 p-0">
                                <img src="https://i.imgur.com/NTff8WP.jpeg" width="582" height="327"
                                    alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                <div className="p-5">
                                    <h2 className="fw-lighter">ABRINPE E.I.R.L</h2>
                                    <p className="pb-4 text-secondary">ABRINPE E.I.R.L es una empresa importadora y comercializadora de productos
                                        Abrasivos en general que desarrolla sus actividades en la ciudad de lima Perú.</p>
                                    <a href="https://www.instagram.com/abrinpe/" className="link-fancy link-fancy-light">Ver proyecto</a>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
                            <div className="bg-dark shadow rounded-5 p-0">
                                <img src="https://i.imgur.com/oZzziPt.jpeg" width="582" height="327"
                                    alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                <div className="p-5">
                                    <h2 className="fw-lighter">Laboratorio virtual optico</h2>
                                    <p className="pb-4 text-secondary">Óptica virtual conformada con los mejores laboratorios ópticos, nuestro principal objetivo es brindar salud visual al mejor precio.</p>
                                    <a href="https://www.facebook.com/laboratoriovirtualoptico/" className="link-fancy link-fancy-light">Ver proyecto</a>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-transparent mb-5" data-aos="zoom-in-up">
                            <div className="bg-dark shadow rounded-5 p-0">
                                <img src="https://i.imgur.com/eqaYbM1.jpeg" width="582" height="442"
                                    alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                <div className="p-5">
                                    <h2 className="fw-lighter">FEYKAS PERU</h2>
                                    <p className="pb-4 text-secondary">Una empresa Autorizada por el Ministerio de Transportes y Comunicaciones, para TI.</p>
                                    <a href="https://lidia-editor.codechappie.com/" className="link-fancy link-fancy-light">Ver proyecto</a>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-transparent" data-aos="zoom-in-up">
                            <div className="bg-dark shadow rounded-5 p-0">
                                <img src="https://i.imgur.com/yo5pGjR.jpeg" width="582" height="327"
                                    alt="abstract image" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
                                <div className="p-5">
                                    <h2 className="fw-lighter">PRONASA SAC</h2>
                                    <p className="pb-4 text-secondary">Es una Empresa dedicada al Alquiler y Venta de Equipos Médicos con Servicio a Domicilio.</p>
                                    <a href="https://www.facebook.com/Pronasasalud/" className="link-fancy link-fancy-light">Ver proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <ContactForm />

    </Layout>;
}