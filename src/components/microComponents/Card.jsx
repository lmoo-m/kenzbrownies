import React from "react";
import product from "../../assets/product.jpg";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";

const Card = () => {
  return (
    <section className="bg-white w-[90%] p-5 rounded-md">
      <img src={product} className="w-[100%] rounded-md" />
      <section className="text-yellow-500 my-4">
        <Heading>Product</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          laborum tempora tenetur! Eaque accusamus labore rem, nihil facere quae
          quasi odit cupiditate voluptatem! Distinctio voluptatem veritatis fuga
          pariatur nostrum molestiae?
        </Paragraph>
      </section>
      <Button>500000</Button>
    </section>
  );
};

export default Card;
