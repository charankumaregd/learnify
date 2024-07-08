import React, { useState, useEffect } from "react";
import NavLinks from "../constants/NavLinks";
import { FaXmark } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import Logo from "./Logo";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isNavOpen && window.innerWidth < 768) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavOpen]);

  return (
    <nav className="md:hidden flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <Logo />
        <button>
          <BiMenu
            size="1.5rem"
            className={isNavOpen ? "hidden" : "block"}
            onClick={toggle}
          />
          <FaXmark
            size="1.5rem"
            className={isNavOpen ? "block" : "hidden"}
            onClick={toggle}
          />
        </button>
      </div>

      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } flex flex-col justify-between w-full max-w-md bg-white py-8`}
      >
        <div className="flex flex-col gap-4">
          {NavLinks.map(({ title, href }, index) => (
            <a
              href={href}
              key={index}
              onClick={toggle}
              className="hover:underline hover:underline-offset-4"
            >
              <span className="capitalize">{title}</span>
            </a>
          ))}
          <div className="flex gap-4">
            <button className="flex justify-center items-center border border-[#407BFF] px-4 py-2 pb-2.5 rounded-lg hover:bg-[#407BFF]/10">
              <span className="font-bold text-nowrap">Log in</span>
            </button>
            <button className="flex justify-center items-center border bg-[#407BFF] text-white px-4 py-2 pb-2.5 rounded-lg hover:bg-[#407BFF]/85">
              <span className="font-bold text-nowrap">Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
