import React from "react";
import Heading from "./microComponents/Heading";
import Card from "./microComponents/Card";

const Menu = () => {
  return (
    <section className="min-h-screen flex justify-center ">
      <section className="flex items-center flex-col">
        <Heading className={"mb-10"}>Menu Kami</Heading>
        <section className="flex items-center gap-5 flex-col">
          <Card />
          <Card />
          <Card />
        </section>
      </section>
    </section>
  );
};

export default Menu;
