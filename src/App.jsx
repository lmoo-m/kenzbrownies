import "./App.css";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Menu from "./components/menu";
import Contact from "./components/contact";

function App() {
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
