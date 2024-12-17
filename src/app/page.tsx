import Image from "next/image";

import Hero from './components/Hero';
import SubHero from "./components/Subhero";
import Product from "./components/Product";
import Slides from "./components/Slides";
import FurnitureSection from "./components/FurnitureSection";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div>
      <Hero />
      <SubHero />
      <Product />

      <Slides />
      <FurnitureSection />
      <Contact />
    
    </div>
  );
}
