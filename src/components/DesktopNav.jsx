import React from "react";
import NavLinks from "../constants/NavLinks";
import Logo from "./Logo";

const DesktopNav = () => {
  return (
    <div className="hidden md:flex  justify-between w-full items-center">
      <Logo />
      <nav className="flex gap-8 items-center justify-center">
        {NavLinks.map(({ title, href }, index) => {
          return (
            <a
              href={href}
              key={index}
              className="hover:underline hover:underline-offset-4"
            >
              <span className="capitalize">{title}</span>
            </a>
          );
        })}
        <div className="flex gap-4 items-center">
          <button className="flex justify-center items-center border border-[#407BFF] px-4 py-2 pb-2.5 rounded-lg hover:bg-[#407BFF]/10">
            <span className="font-bold text-nowrap">Log in</span>
          </button>
          <button className="flex justify-center items-center border bg-[#407BFF] text-white px-4 py-2 pb-2.5 rounded-lg hover:bg-[#407BFF]/85">
            <span className="font-bold text-nowrap">Sign up</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default DesktopNav;
