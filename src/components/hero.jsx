import React from "react";
import bg from "../assets/bg.jpg";
import Heading from "./microComponents/Heading";
import Paragraph from "./microComponents/Paragraph";
import Button from "./microComponents/Button";

const HeroSection = () => {
  return (
    <section
      className="text-[var(--text-button)] min-h-screen relative bg-fixed bg-center bg-cover flex items-center px-5 overlay-background"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="z-30">
        <Heading>
          Kenz11_Brownies – Lezatnya Brownies Premium Sejak 2022! 🍫
        </Heading>
        <Paragraph className="my-2">
          Nikmati kelembutan brownies dengan rasa yang kaya dan lumer di mulut!
          Dibuat dengan bahan berkualitas dan penuh cinta, setiap gigitan dari
          Kenz11_Brownies menghadirkan kebahagiaan yang tak terlupakan.
        </Paragraph>
        <a href="#menu">
          <Button className="">Pesan Sekarang</Button>
        </a>
      </section>
    </section>
  );
};

export default HeroSection;
