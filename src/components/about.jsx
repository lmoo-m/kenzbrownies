import React from "react";
import Heading from "./microComponents/Heading";
import product from "../assets/product.jpg";
import Paragraph from "./microComponents/Paragraph";

const About = () => {
  return (
    <section id="about" className="h-screen flex justify-center items-center">
      <section className="px-5">
        <Heading className={"text-center mb-5"}>Tentang Kami</Heading>
        <img src={product} className="aspect-video rounded-md " />
        <Paragraph className={"mt-6"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          corporis enim nemo mollitia sequi quo quae nobis excepturi
          reprehenderit deleniti deserunt, praesentium eveniet odit quis ratione
          assumenda necessitatibus iure maiores.
        </Paragraph>
      </section>
    </section>
  );
};

export default About;
