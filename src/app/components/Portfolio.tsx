
import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div
      className="flex items-center max-w-7xl mx-auto leading-8 mb-10"
      id="portfolio"
    >
      <div className="text-gray-500 px-10 mt-32 mx-auto">
        <h1 className="font-autograph1 text-center text-4xl text-white mb-10 -mt-20">Portfolio</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full  "> 
          {/* card 4 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"/images/portfolio/3.jpeg"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white font-bold">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 5 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"/images/portfolio/4.jpeg"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white font-bold">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
          {/* card 6 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"/images/portfolio/5.jpeg"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white font-bold">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;