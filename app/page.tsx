"use client"
import Layout from "./components/LandingLayout/Layout";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import Hero from "./components/Landing/Hero/Hero";


export default function Home() {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      duration: 800,
      delay: 0
    });
  }, []);

  return (
    <Layout>
      <Hero />
    </Layout>)
}
