import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import PricingList from "../constants/PricingList";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col items-start px-3 w-full md:px-16 max-md:max-w-md pt-24 gap-y-8"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Pricing</h1>
        <p className="text-justify">
          Reach goals faster with one of our plans or programs. Try one free
          today or contact sales to learn more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 w-full">
        {PricingList.map(
          (
            { title, subtitle, targetIcon, target, price, billing, features },
            index
          ) => (
            <div
              key={index}
              className="flex flex-col border-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer p-4 gap-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <span className="text-black/50 text-xs">{subtitle}</span>
                </div>
                <span className="text-md text-black/50 flex gap-2 items-center">
                  {targetIcon} {target}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">
                  &#8377;{price} per month
                </span>
                <p className="text-xs text-black/50">{billing}</p>
              </div>
              <button className="border-2 border-[#407BFF] hover:bg-[#407BFF]/5 px-4 py-3 pb-3.5 rounded-lg">
                <span className="text-nowrap font-bold">
                  Start Subscription
                </span>
              </button>
              <ul className="flex flex-col gap-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <CiCircleCheck className="text-[#407BFF]" />
                    <span className="text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Pricing;
