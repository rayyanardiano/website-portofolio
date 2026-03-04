import {useEffect, useState } from "react";
// import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
// import LogoShowcase from "./sections/LogoShowcase";
// import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import About from "./sections/About";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false); // tambahkan state global untuk blur
  
  // ✅ Tambahkan auto-close saat layar > 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
  <>
     <div className="relative">
      {/* Navbar selalu di atas dan tidak diblur */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Layer blur hanya diterapkan untuk konten utama */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          menuOpen ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <Hero />
        <About />
        <ShowcaseSection />
        {/* <LogoShowcase /> */}
        {/* <FeatureCards /> */}
        <Experience />
        <TechStack />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  </>
  );
};

export default App;
