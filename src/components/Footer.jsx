import React from "react";
import { GrFacebook } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "./variants";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="contact">
      <div className="container mx-auto flex flex-col mt-24 mb-5">
        {/* title  */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-8 mb-8 mx-auto"
        >
          <h3 className="max-w-2xl font-Caveat text-xl font-bold text-center tracking-wider text-title/90 -mb-8">
            Contact Me
          </h3>
          <h1 className="max-w-2xl font-Montserrat text-3xl font-bold text-center text-primary -mb-5 md:text-4xl">
            Get In Touch With Me
          </h1>
        </motion.div>
      </div>

      <div className="container m-auto pb-[50px]">
        <div className="md:flex md:flex-row flex-col items-center justify-center gap-5 md:gap-[40px]">
          <div>
            <h4 className="font-Montserrat text-center font-semibold text-lg text-white">
              Email
            </h4>
            <p className="font-Montserrat text-center font-light text-base text-paragraph hover:text-title/80 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75">
              <a href="mailto:mohaledesigns@gmail.com">
                mohaledesigns@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-Montserrat text-center font-semibold text-lg text-white">
              Phone No.
            </h4>
            <p className="font-Montserrat text-center font-light text-base text-paragraph hover:text-title/80 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75">
              <a href="tel:0614525991">+27 61 452 5991</a>
            </p>
          </div>

          <div>
            <h4 className="font-Montserrat text-center font-semibold text-lg text-white">
              Location
            </h4>
            <p className="font-Montserrat text-center font-light text-base text-paragraph hover:text-title/80 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75">
              Johannesburg, South Africa
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-paragraph/50 flex flex-col-reverse md:flex-row items-center justify-between gap-3">
        <p className="font-Montserrat text-white/50 text-xs md:text-sm text-center">
          {currentYear} Copyright reserved © Mohale Designs.
        </p>

        <div className="flex items-center justify-center gap-1">
          <a
            href="https://www.facebook.com/kabelo.mohale.54/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 cursor-pointer hover:text-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700 text-xl"
          >
            <GrFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/tokoloho-kabelo-mohale-910058209/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 cursor-pointer hover:text-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700 text-xl"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://www.instagram.com/mohaledesigns/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 cursor-pointer hover:text-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700 text-2xl"
          >
            <FaInstagramSquare />
          </a>

          <a
            href="https://github.com/MohaleDesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 cursor-pointer hover:text-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700 text-2xl"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
