import React from "react";
import logo from "../assets/logo-no-background.png";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-300 mt-10">
        <div className="container px-6 pt-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-3 items-center">
            <div>
              <img src={logo} alt="" />
            </div>

            <div>
              <p className="font-semibold text-black dark:text-black">
                Quick Link
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white transition-colors duration-300 dark:text-black  hover:underline hover:cursor-pointer hover:text-blue-900">
                  Home
                </p>
                <p className="text-white transition-colors duration-300 dark:text-black  hover:underline hover:cursor-pointer hover:text-blue-800">
                  Who We Are
                </p>
                <p className="text-white transition-colors duration-300 dark:text-black  hover:underline hover:cursor-pointer hover:text-blue-900">
                  Our Philosophy
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-black">
                Industries
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300 dark:text-black dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Retail & E-Commerce
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-black dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Information Technology
                </p>
                <p className="text-gray-600 transition-colors duration-300 dark:text-black dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  Finance & Insurance
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <h1 className="m-auto max-w-lg text-xl font-semibold tracking-tight text-black xl:text-2xl dark:text-black">
              Subscribe our newsletter to get an update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="email"
                className="px-16 py-2 text-gray-700 bg-white border rounded-md dark:bg-white dark:text-gray-300 dark:border-red-300 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="p-[3px] ml-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Subscribe
                </div>
              </button>

              
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

          <div className="sm:flex sm:items-center sm:justify-center justify-center">
            <div className="flex gap-4 hover:cursor-pointer">
              <a href="https://www.facebook.com/">
                <img
                  src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                  width="30"
                  height="30"
                  alt="fb"
                />
              </a>
              <a>
                <img
                  src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                  width="30"
                  height="30"
                  alt="tw"
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                  width="30"
                  height="30"
                  alt="inst"
                />
              </a>
              <a href="https://www.github.com/">
                <img
                  src="https://www.svgrepo.com/show/94698/github.svg"
                  className=""
                  width="30"
                  height="30"
                  alt="gt"
                />
              </a>
              <a href="https://www.pinterest.com/">
                <img
                  src="https://www.svgrepo.com/show/22037/path.svg"
                  width="30"
                  height="30"
                  alt="pn"
                />
              </a>
            </div>
          </div>
          <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
            © 2023 You Company Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
