import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-green-900 p-3">
        <h4 className="font-Montserrat text-base font-medium text-center text-white capitalize">
          Website in construction
        </h4>
        <h4 className="font-Montserrat text-xs md:text-sm font-light text-center text-white capitalize">
          Website Layout Update | Projects Update | Information Update
        </h4>
      </div>

      {/* Desktop Menu  */}
      <header className="py-8 px-5 hidden md:block">
        <div className="container mx-auto">
          <div className="bg-black/20 backdrop-blur-lg rounded-md p-5 flex justify-between items-center">
            {/* logo  */}
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>

            <div className="flex gap-5 items-center  text-white/50 font-Montserrat">
              <Link
                to="about"
                className="hover:cursor-pointer hover:text-title/50 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
              >
                About
              </Link>

              <Link
                className="hover:cursor-pointer hover:text-title/50 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                to="projects"
                activeClass="active"
                smooth={true}
                spy={true}
              >
                Projects
              </Link>

              <Link
                className="hover:cursor-pointer hover:text-title/50 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
              >
                Experience
              </Link>

              <Link
                className="hover:cursor-pointer hover:text-title/50 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
              >
                Contact
              </Link>

              <button className="flex justify-center md:justify-start text-base font-medium md:text-base">
                <a
                  href="mailto:tokolohomohale@gmail.com"
                  className="text-white text-bold py-2 px-5 bg-primary rounded-md hover:bg-title/80 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                >
                  Hire Me
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu  */}
      <header className="py-8 px-5 block md:hidden">
        <div className="container mx-auto">
          <div className="bg-black/20 backdrop-blur-lg rounded-md p-5">
            <div className="flex items-center justify-between w-full">
              <a href="/">
                <img src={Logo} className="w-[110px]" alt="logo" />
              </a>
              <button
                className="text-base font-medium md:text-base text-white text-bold py-2 px-5 bg-primary rounded-md hover:bg-title/80 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                onClick={toggleMenu}
              >
                {mobileMenu ? "C" : "O"}
              </button>
            </div>

            <div
              className={`flex flex-col gap-5 items-center justify-between w-full transition-all ease-in-out duration-700 delay-75 ${
                mobileMenu ? "block my-5" : "hidden"
              }`}
            >
              <Link
                to="about"
                className="text-paragraph font-Montserrat hover:cursor-pointer hover:text-title/50 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
              >
                About
              </Link>

              <Link
                className="text-paragraph font-Montserrat hover:cursor-pointer hover:text-title/50 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                to="projects"
                activeClass="active"
                smooth={true}
                spy={true}
              >
                Projects
              </Link>

              <Link
                className="text-paragraph font-Montserrat hover:cursor-pointer hover:text-title/50 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
              >
                Experience
              </Link>

              <Link
                className="text-paragraph font-Montserrat hover:cursor-pointer hover:text-title/50 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
              >
                Contact
              </Link>

              <button className="mt-5">
                <a
                  href="mailto:tokolohomohale@gmail.com"
                  className="text-white text-bold py-2 px-5 bg-primary rounded-md hover:bg-title/80 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75"
                >
                  Hire Me
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
