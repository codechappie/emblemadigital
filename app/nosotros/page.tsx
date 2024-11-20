"use client"
import { Metadata } from 'next';
import Layout from '../components/LandingLayout/Layout'

export const metadata: Metadata = {
    title: "Nosotros | Emblema Digital | Potenciamos tu marca en el entorno digital",
    description: "En Emblema Digital, creamos logos y diseños únicos que potencian tu marca en el entorno digital. Nuestra misión es transformar ideas en experiencias visuales que te hagan destacar.",
    keywords: ["diseño web", "desarrollo web", "SEO", "potenciar marca", "experiencias digitales", "diseño personalizado", "logo", "diseño gráfico", "identidad visual", "branding"],
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#ffffff",
    openGraph: {
        title: "Nosotros | Emblema Digital",
        description: "Potenciamos tu marca con diseños únicos y logos a medida que te hacen destacar en el entorno digital.",
        images: "https://imgur.com/KSBaS7I.png",
        url: "https://www.emblemadigital.com/logos-y-disenios",
        type: "website",
    },
};

const page = () => {
    return (
        <Layout>
            <main>
                <div className="container">
                    <div className="row d-flex justify-content-center py-vh-5 pb-0">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="display-1 fw-bold" data-aos="fade-down">
                                        Emblema Digital:
                                        <br />
                                        <span className="fs-3 display-inline">Nos diferenciamos por ofrecer una atención personalizada, basada en la transparencia y la confianza.</span>
                                    </h1>
                                    <p className="lead border-top pt-5 mt-5" data-aos="fade-up">
                                        Asistimos a las marcas en superar desafíos clave y alcanzar productos digitales de mayor calidad.
                                    </p>
                                    <p className="lead pt-2" data-aos="fade-up">
                                        Contamos con un equipo de profesionales comprometidos, cuyo objetivo es ayudarte a definir tus metas y superar cualquier desafío en el camino hacia el avance.
                                    </p>

                                    <p className="lead pt-2" data-aos="fade-up">
                                        Acompáñanos en esta apasionante travesía, donde nos enfocamos en garantizar el éxito de tu proyecto.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 py-vh-2">
                                <img
                                    src="https://scontent.flim41-1.fna.fbcdn.net/v/t39.30808-6/467165083_977405647744125_1703637986091216817_n.png?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=zxZm4jj0bPwQ7kNvgG2cNfX&_nc_zt=23&_nc_ht=scontent.flim41-1.fna&_nc_gid=AqUDzmslZROQgP44ZEaWfgL&oh=00_AYDwMS3iURqrHBGVPqg4R8GnXD6VWu6RYziJhhdbouZqCw&oe=6744396A"
                                    width={1446}
                                    height={482}
                                    alt="abstract image"
                                    className="img-fluid position-relative rounded-5 shadow"
                                    data-aos="zoom-up"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="row d-flex align-items-start" data-aos="fade-right">
                                <div className="col-12 ">
                                    <h2 className="h3 mt-5 border-top pt-5">Misión</h2>
                                    <p className="text-secondary">
                                        En Emblema Digital, nuestra misión es proporcionar soluciones de diseño y desarrollo web innovadoras que ayuden a las marcas a crecer en el entorno digital. Nos enfocamos en crear experiencias únicas que conecten con los usuarios y fortalezcan la identidad digital de cada cliente.
                                    </p>
                                </div>

                            </div>
                            <div className="row d-flex align-items-start" data-aos="fade-right">
                                <div className="col-12 ">
                                    <h2 className="h3 mt-5 border-top pt-5">Visión</h2>
                                    <p className="text-secondary">
                                        Nuestra visión es ser una agencia líder en el diseño y desarrollo web, reconocida por transformar ideas en soluciones digitales de alto impacto, que ayuden a las marcas a alcanzar sus metas comerciales y conectar de manera efectiva con su audiencia.
                                    </p>
                                </div>

                            </div>
                            <div className="row d-flex align-items-start" data-aos="fade-right">
                                <div className="col-12 ">
                                    <h2 className="h3 mt-5 border-top pt-5">Valores</h2>

                                    <p>Creatividad: Aportamos ideas frescas e innovadoras a cada proyecto.</p>
                                    <p>Colaboración: Trabajamos estrechamente con nuestros clientes para entender sus necesidades y objetivos.</p>
                                    <p>Transparencia: Nos aseguramos de mantener una comunicación abierta y honesta en todo momento.</p>
                                    <p>Compromiso: Estamos comprometidos con el éxito de nuestros clientes, brindando resultados excepcionales.</p>
                                </div>

                            </div>
                            <div className="row d-flex align-items-start" data-aos="fade-right">
                                <div className="col-12 ">
                                    <h2 className="h3 mt-5 border-top pt-5">
                                        La Cultura en Emblema Digital
                                    </h2>
                                    <p className="text-secondary">
                                        En Emblema Digital, cultivamos un ambiente de trabajo creativo, inclusivo y colaborativo. Nos enorgullece tener un equipo diverso donde cada miembro aporta su experiencia y habilidades para crear soluciones únicas y eficaces para nuestros clientes.
                                    </p>

                                    <p className="text-secondary">
                                        Nuestro equipo se caracteriza por un fuerte sentido de compromiso, y buscamos siempre mantener un ambiente dinámico y de aprendizaje constante, donde cada proyecto es una oportunidad para innovar y mejorar.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div
                        className="row d-flex align-items-start justify-content-center py-vh-3 text-muted"
                        data-aos="fade"
                    >
                        <div className="col-12 col-lg-10 col-xl-9">
                            <h2>Únete a Nosotros</h2>
                            <div className="p-5 small border-8">
                                <p>
                                    Si eres un profesional apasionado por el diseño o el desarrollo web, Emblema Digital está siempre en búsqueda de nuevos talentos para unirse a nuestro equipo. ¡Envía tu CV y portafolio a <a href="mailto:image.bussiness@gmail.com" >image.bussiness@gmail.com</a> y sé parte de nuestra misión de transformar ideas en experiencias digitales únicas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </Layout>
    )
}

export default page