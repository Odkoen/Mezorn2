import React from "react";
import { Link } from "react-router-dom";
import onClick from "react";
const Navbar = ({ toggle, isOpen }) => {
  return (
    <div className="sticky top-0">
      <nav className=" flex flex-wrap items-center justify-between bg-white w-full p-4 z-0  shadow-sm">
        <div className="flex flex-row items-center flex-shrink-0 ">
          <a href="https://about.me/" className=" pl-2 font-medium text-xl">
            about.me
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggle}
            className="p-2 border rounded-full text-gray-500 border-gray-500 hover:text-black hover:border-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            isOpen
              ? "hidden w-full pt-6 lg:items-center lg:w-auto lg:block lg:pt-0"
              : "block w-full pt-6 lg:items-center lg:w-auto lg:block lg:pt-0"
          }
        >
          <ul className="font-semibold lg:flex lg:flex-1 md:flex md:flex-row  ">
            <li>
              <Link
                to="/"
                className=" py-2 px-4  rounded focus:border-2 focus:border-blue-700  "
              >
                Get started for free
              </Link>
            </li>
            <li>
              <Link
                to="/Feature"
                className="py-2 px-4  rounded focus:border-2 focus:border-blue-700"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/Pricing"
                className=" py-2 px-4  rounded focus:border-2 focus:border-blue-700"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className=" py-2 px-4  rounded focus:border-2 focus:border-blue-700"
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
