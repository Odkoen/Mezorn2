import React from "react";
import lady from "../img/lady.JPG";
const Feature = () => {
  return (
    <div className="h-screen ">
      <div className="shadow-lg h-40 w-full text-4xl flex justify-center items-center">
        Features
      </div>
      <div className="shadow-lg mt-10 mx-10 flex border mb-12 border-gray-300 h-full rounded-lg 11/12 ">
        <div className="font-sans  justify-center grid grid-col mt-10 ml-10 rounded-lg w-1/3 text-gray-700 text-lg bg-indigo-200 flex-shrink-0">
          <span className="pt-6">Your about.me page</span>
          <span>E-mail signature</span>
          <span>Spotlight Button</span>
          <span>Visit my website</span>
          <span>Lead Capture</span>
          <span>Apointment Scheduling</span>
        </div>
        <div>
          <img src={lady} className="m-10"></img>
        </div>
      </div>
    </div>
  );
};

export default Feature;
