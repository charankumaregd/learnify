import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import TestimonialsList from "../constants/TestimonialsList";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col px-3 w-full md:px-16 max-md:max-w-md pt-24 pb-16 gap-y-8"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Testimonials</h1>
        <p className="text-justify">
          Hear what our satisfied customers have to say about their learning
          experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {TestimonialsList.map(({ name, image, title, text }, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer p-6 gap-8"
          >
            <div className="flex flex-col gap-4">
              <RiDoubleQuotesL size="2rem" />
              <p className="text-justify">{text}</p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={image} className="rounded-full h-12 w-12" />
              <div className="flex flex-col">
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-black/50">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
