import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScroll ? "bg-white/20 backdrop-blur-md transition-all" : ""
      }  flex items-center justify-between p-5 top-0 fixed w-full z-50`}
    >
      <h1 className="text-2xl drop-shadow-md text-yellow-500 font-bold">
        Kenz11_Brownies
      </h1>
      <div className="flex gap-4 text-[var(--text-button)]">
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
