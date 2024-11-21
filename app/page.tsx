import Layout from "./components/LandingLayout/Layout";

import Hero from "./components/Landing/Hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emblema Digital | Potenciamos tu marca en el entorno digital",
  description: "Potenciamos tu marca en el entorno digital para que se haga notar y crezca de manera significativa. Nuestra misión es convertir ideas en experiencias digitales únicas.",
  keywords: ["diseño web", "desarrollo web", "SEO", "potenciar marca", "experiencias digitales", "diseño personalizado", "logo", "mi primera web"],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
  openGraph: {
    title: "Emblema Digital | Página de Inicio",
    description: "Potenciamos tu marca en el entorno digital para que se haga notar y crezca de manera significativa.",
    images: "https://imgur.com/KSBaS7I.png",
    url: "https://www.emblemadigital.com",
    type: "website",
  },
};

export default function Page() {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}


