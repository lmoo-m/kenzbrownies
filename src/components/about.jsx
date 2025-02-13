import React from "react";
import Heading from "./microComponents/Heading";
import icon from "../assets/icon.jpeg";
import Paragraph from "./microComponents/Paragraph";

const About = () => {
  return (
    <section id="about" className="min-h-min flex justify-center">
      <section className="px-5 py-10">
        <Heading data-aos="fade-in" className={"text-center mb-5"}>
          Tentang Kami
        </Heading>
        <img
          data-aos="zoom-in"
          src={icon}
          className="aspect-square rounded-md "
        />
        <Paragraph data-aos="fade-up" className={"mt-6"}>
          Sejak 2022, Kenz11_Brownies hadir untuk menghadirkan brownies premium
          dengan rasa yang otentik dan kualitas terbaik. Kami percaya bahwa
          setiap gigitan brownies bisa membawa kebahagiaan, itulah mengapa kami
          selalu menggunakan bahan berkualitas tinggi dan proses pembuatan yang
          penuh perhatian. <br /> <br />✨ Mengapa Kenz11_Brownies? <br />✔
          Homemade & Freshly Baked – Dipanggang setiap hari untuk rasa yang
          selalu fresh <br />
          🍫 Bahan Premium – Menggunakan cokelat asli untuk tekstur lembut dan
          rasa yang kaya <br /> 💖 100% Halal & Tanpa Pengawet – Aman untuk
          dikonsumsi semua orang <br /> <br />
          Dengan cinta dan dedikasi, kami ingin menghadirkan brownies yang tidak
          hanya lezat, tetapi juga membawa kebahagiaan dalam setiap potongan.
          Terima kasih telah menjadi bagian dari perjalanan manis kami! 🍩✨
        </Paragraph>
      </section>
    </section>
  );
};

export default About;
