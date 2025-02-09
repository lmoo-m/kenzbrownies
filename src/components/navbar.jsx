import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 top-0 fixed w-full z-50">
      <h1 className="text-xl text-yellow-500 font-bold">kenzbrownies</h1>
      <div className="flex gap-4">
        <a href="#about">About</a>
        <a>Menu</a>
        <a>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
