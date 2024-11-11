import React from "react";
import PrimaryButton from "./PrimaryButton";
import CTA from "../assets/call-to-action.png";
import { Link } from "react-scroll";

function CallToAction() {
  return (
    <div className="p-10 relative md:rounded-md md:border md:border-paragraph/10 md:w-[80%] lg:w-[60%] w-[100%] mx-auto mt-10 mb-0 md:my-20">
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      <img
        src={CTA}
        alt="call to action"
        className="absolute w-full h-full top-0 left-0 object-cover z-0 rounded-md"
      />
      <div className="relative z-20 flex flex-col items-center gap-5">
        <p className="text-center font-bold text-white font-montserrat md:text-[50px] text-[40px]">
          Helping Businesses Grow Online.
        </p>

        <Link
          to="contact"
          className="cursor-pointer"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
        >
          <PrimaryButton label="Get In Touch" />
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
