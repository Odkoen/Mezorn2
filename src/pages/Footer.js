import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inset-x-0 sticky bottom-0 flex lg:flex md:hidden sm:hidden opacity-90">
        <div className="flex flex-1 items-center  bg-gray-300 ">
          <p className="px-8 py-4 text-lg">
            {" "}
            Get a page and a domain with your name.
          </p>
          <a
            href="https://about.me/welcome"
            className="text-white rounded py-2 px-5 bg-blue-700 h-10"
          >
            Get started for free
          </a>
        </div>
      </div>

      <div className="sticky bottom-0 flex md:inline-block lg:hidden  opacity-90 ">
        <div className="flex flex-1 items-center w-screen justify-center  bg-gray-300 ">
          <button className="my-2 text-white rounded  px-5 bg-blue-700 h-10">
            Get your page
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
