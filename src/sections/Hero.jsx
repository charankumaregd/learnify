import React from "react";
import collaborators from "../constants/Collaborators";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12 px-3 md:px-16 pt-24 max-md:max-w-md w-screen h-fit">
      <div className="grid max-md:grid-rows-2 md:grid-cols-2 gap-8 md:gap-16">
        <div className="flex flex-col justify-center gap-4 md:gap-8">
          <div className="flex">
            <span className="text-6xl">Learn Without Limits.</span>
          </div>
          <div className="flex">
            <p className="md:text-lg text-justify">
              Start, switch, or advance your career with more than 7,000
              courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
          </div>
          <div className="flex max-md:flex-col gap-4 md:gap-8">
            <button className="border-2 bg-[#407BFF] hover:bg-[#407BFF]/90 text-white px-8 py-4 pb-5 rounded-lg">
              <span className="text-nowrap font-bold">Get Started</span>
            </button>
            <button className="border-2 border-[#407BFF] hover:bg-[#407BFF]/5 px-8 py-4 pb-5 rounded-lg">
              <span className="text-nowrap font-bold">
                Try Learnify for Buisness
              </span>
            </button>
          </div>
        </div>
        <div className="flex md:flex-grow md:flex-1 items-center justify-center">
          <img
            src="assets/hero-image.svg"
            alt="hero-image"
            className="rounded-xl max-w-sm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        <p className="text-lg text-justify">
          We collaborate with{" "}
          <span className="text-[#407BFF] font-bold">325+</span> leading
          universities and companies
        </p>

        <div className="flex gap-8 flex-wrap justify-center items-center">
          {Object.keys(collaborators).map((key) => (
            <a
              key={key}
              href={`https://${key}.com`}
              target="_blank"
              rel="noreferrer"
              className="border-2 px-4 py-2 rounded-lg text-gray-600 flex gap-4 justify-center items-center"
            >
              {collaborators[key]}
              <span className="text-lg">{key}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
