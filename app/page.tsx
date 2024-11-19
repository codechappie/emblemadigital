"use client"
import Layout from "./components/LandingLayout/Layout";

import Hero from "./components/Landing/Hero/Hero";


export default function Home() {



  return (
    <Layout>
      <head>
        <title>Emblema Digital - Soluciones tecnológicas</title>
        <meta name="description" content="Emblema Digital se especializa en diseño y desarrollo web, creando soluciones a medida con sitios atractivos, funcionales y optimizados." />
        <meta name="author" content="codechappie" />
        <meta name="keywords" content="emblema, digital, web, diseño" />
        <meta name="robots" content="emblema, digital, web, diseño" />
        <meta property="og:title" content="Emblema Digital - Soluciones tecnológicas" />
        <meta property="og:description" content="Emblema Digital se especializa en diseño y desarrollo web, creando soluciones a medida con sitios atractivos, funcionales y optimizados." />
        <meta property="og:image" content="http://localhost:3000/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://emblemadigital.vercel.app" />
      </head>
      <Hero />
    </Layout>)
}
