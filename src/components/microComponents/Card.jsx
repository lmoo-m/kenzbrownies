import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";

const directWa = "https://wa.me/6289697984990/?text=Saya ingin memesan";

const Card = ({ img, title, price }) => {
  return (
    <section
      data-aos="fade-up-right"
      className="bg-[var(--card)] w-[90%] p-5 rounded-md"
    >
      <img src={img} className="w-[100%] rounded-md" />
      <section className="text-yellow-500 my-4">
        <Heading>{title}</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          laborum tempora tenetur! Eaque accusamus labore rem, nihil facere quae
          quasi odit cupiditate voluptatem! Distinctio voluptatem veritatis fuga
          pariatur nostrum molestiae?
        </Paragraph>
      </section>
      <a href={`${directWa} ${title}`}>
        <Button>{price}</Button>
      </a>
    </section>
  );
};

export default Card;
