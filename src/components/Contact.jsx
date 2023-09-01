import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "./variants";

import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto flex flex-col mt-24 mb-5">
        {/* title  */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-8 mb-8 mx-auto"
        >
          <h3 className="max-w-2xl text-lg font-semibold text-center tracking-wider text-title/90 -mb-8 md:text-lg">
            Contact Me
          </h3>
          <h1 className="max-w-2xl text-3xl font-bold text-center text-primary -mb-5 md:text-4xl">
            Get In Touch With Me
          </h1>
        </motion.div>
      </div>

      <div className="container flex flex-col items-center justify-center space-y-0 gap-10 mx-auto md:flex-row md:space-x-0">
        {/* address  */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="p-5"
        >
          {/* details */}
          <div className=" bg-secondary text-paragraph text-center custom-shadow rounded-xl p-14 mx-6">
            <ul className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <li className="flex items-center justify-between gap-1">
                <FaMapPin size={20} className="inline-block text-title mr-1" />
                41 Impofu Street, Senaoane, Johannesburg, SA
              </li>
              <a href="tel:0813446402">
                <li className="flex items-center justify-between gap-1 hover:text-title hover:-translate-y-2 transition-all ease-in-out duration-700">
                  <BsTelephoneFill
                    size={20}
                    className="inline-block text-title mr-1"
                  />
                  +27 81 344 6402
                </li>
              </a>
              <a href="mailto:tokolohomohale@gmail.com">
                <li className="flex items-center justify-between gap-1 hover:text-title hover:-translate-y-2 transition-all ease-in-out duration-700">
                  <MdEmail size={25} className="inline-block text-title mr-1" />
                  tokolohomohale@gmail.co.za
                </li>
              </a>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
