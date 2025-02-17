import React, { useState } from "react";
import Heading from "./microComponents/Heading";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";
import { FaMapMarker } from "react-icons/fa";
import Button from "./microComponents/Button";

const url = {
  wa: "https://wa.me/6289697984990",
  ig: "https://www.instagram.com/kenz11_brownies/",
  map: "https://www.google.com/maps/place/6%C2%B012'55.0%22S+106%C2%B041'35.3%22E/@-6.215279,106.69056,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.215279!4d106.6931349?hl=id&entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D",
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    msg: "ingin memesan",
  });

  const text = `halo kak, saya ${form.name}, ${form.msg}`;

  return (
    <section id="contact" className=" py-[3rem]">
      <section className="flex w-full items-center flex-col">
        <section className="px-5 w-full">
          <Heading data-aos="fade-in" className={"mb-2"}>
            Menu Custom
          </Heading>
          <input
            data-aos="zoom-in-up"
            placeholder="nama..."
            onChange={(e) =>
              setForm((current) => ({ ...current, name: e.target.value }))
            }
            className="border bg-[var(--card)] w-full h-[3rem] px-2 rounded-md"
          />
          <textarea
            data-aos="zoom-in-up"
            onChange={(e) =>
              setForm((current) => ({ ...current, msg: e.target.value }))
            }
            placeholder="pesan..."
            value={form.msg}
            className="border bg-[var(--card)] w-full h-[15rem] p-2 rounded-md my-3"
          />
          <a data-aos="zoom-in-up" href={`${url.wa}/?text=${text}`}>
            <Button>Pesan Sekarang</Button>
          </a>
        </section>
        <section className="mt-6 ">
          <Heading>Hubungi Kami</Heading>
          <section className="flex gap-5 mt-5">
            <a
              href={url.wa}
              target="_blank"
              className="border text-2xl block p-3 rounded-xl"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href={url.ig}
              target="_blank"
              className="border text-2xl block p-3 rounded-xl"
            >
              <IoLogoInstagram />
            </a>
            <a
              href={url.map}
              target="_blank"
              className="border text-2xl block p-3 rounded-xl"
            >
              <FaMapMarker />
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Contact;
