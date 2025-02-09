import React from "react";
import bg from "../assets/bg.jpg";
import Heading from "./microComponents/Heading";
import Paragraph from "./microComponents/Paragraph";
import Button from "./microComponents/Button";

const HeroSection = () => {
  return (
    <section
      className="min-h-svh relative bg-fixed bg-center bg-cover flex items-center px-5 overlay-background"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="z-30">
        <Heading>Brownies Premium</Heading>
        <Paragraph className="my-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          odit voluptatem soluta! Expedita itaque iure earum tempora assumenda,
        </Paragraph>
        <Button className="">Pesan Sekarang</Button>
      </section>
    </section>
  );
};

export default HeroSection;
