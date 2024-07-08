import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import CourseList from "../constants/CourseList";

const Courses = () => {
  const [maxIndex, setMaxIndex] = useState(4);
  const [btnText, setBtnText] = useState("Show 4 More");

  const handleClick = () => {
    if (maxIndex === 4) {
      setMaxIndex(8);
      setBtnText("Show Less");
    } else {
      setMaxIndex(4);
      setBtnText("Show 4 More");
    }
  };

  return (
    <div
      id="courses"
      className="flex flex-col items-start px-3 w-full md:px-16 max-md:max-w-md pt-24 gap-y-8"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Popular Courses</h1>
        <p className="text-justify">
          From critical skills to technical topics, Learnify supports your
          professional development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8  w-full">
        {CourseList.map(
          (
            { image, logo, company, title, rating, description, price },
            index
          ) => {
            return (
              index < maxIndex && (
                <div
                  key={index}
                  className="flex flex-col border-2 rounded-lg shadow-md hover:shadow-xl cursor-pointer overflow-hidden"
                >
                  <img src={image} alt={title} />
                  <div className="flex flex-col p-4">
                    <div className="flex items-center gap-2 text-black/50">
                      {logo}
                      {company}
                    </div>
                    <span className="font-semibold">{title}</span>
                    <div className="flex items-center gap-2 text-black/70">
                      {rating}
                      <FaStar />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{description}</span>
                      <span className="font-bold">&#8377;{price}</span>
                    </div>
                  </div>
                </div>
              )
            );
          }
        )}
      </div>
      <div className="flex gap-4">
        <button
          className="border-2 bg-[#407BFF] hover:bg-[#407BFF]/90 text-white px-4 py-2 pb-2.5 rounded-lg"
          onClick={handleClick}
        >
          <span className="text-nowrap font-bold">{btnText}</span>
        </button>
        <button className="border-2 border-[#407BFF] hover:bg-[#407BFF]/5 px-4 py-2 pb-2.5 rounded-lg">
          <span className="text-nowrap font-bold">View All</span>
        </button>
      </div>
    </div>
  );
};

export default Courses;
