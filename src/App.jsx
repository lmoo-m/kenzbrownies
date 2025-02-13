import "./App.css";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Menu from "./components/menu";
import Contact from "./components/contact";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Menu />
      <Contact />
    </>
  );
}

export default App;
