import React from "react";
import products from "./product";
import Heading from "./microComponents/Heading";
import Card from "./microComponents/Card";

const Menu = () => {
  return (
    <section id="menu" className="min-h-min flex justify-center py-10">
      <section className="flex items-center flex-col">
        <Heading className={"mb-10"}>Menu Kami</Heading>
        <section className="flex items-center gap-5 flex-col">
          {products.map((product, i) => (
            <Card
              img={product.img}
              title={product.title}
              price={product.price}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default Menu;
