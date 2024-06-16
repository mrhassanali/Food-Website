import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import AboutCompany from "../../components/AboutCompany";
import PopularFood from "../../components/PopularFood";
import LatestFood from "../../components/LatestFood";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutCompany />
      <PopularFood />
      <LatestFood />
    <Footer /> 
    </div>
  );
}
