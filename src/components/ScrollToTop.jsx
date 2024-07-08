import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-0 right-0 px-2 py-2 md:px-16 md:py-8">
      <button
        onClick={handleClick}
        className="bg-[#407BFF] hover:bg-[#407BFF]/85 text-white p-2.5 rounded-lg"
      >
        <FaArrowUp className="max-md:w-4 max-md:h-4" />
      </button>
    </div>
  );
};

export default ScrollToTop;
