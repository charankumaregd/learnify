import React from "react";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 border-b-2 flex justify-center items-center w-screen">
      <header className="max-md:max-w-md w-screen bg-white flex gap-8 md:items-center justify-between px-3 md:px-16 py-4">
        <DesktopNav />
        <MobileNav />
      </header>
    </div>
  );
};

export default Header;
