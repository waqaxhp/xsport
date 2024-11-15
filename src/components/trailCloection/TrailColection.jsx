import React from "react";
import "./TrailColection.css";

function TrailColection() {
  return (
    <>
      <div className="trail_bgimg relative flex h-[60vh] min-h-[500px] items-center justify-start bg-cover bg-fixed bg-center p-4 text-white">
        {/* Overlay */}
        <div className="relative flex h-screen items-center justify-start bg-black bg-opacity-0 px-4 text-center italic text-white sm:px-10 lg:px-20">
          <div className="space-y-4">
            {/* Subtitle */}
            <p className="text-lg font-semibold text-lime-400">
              New Balance,{" "}
              <spain className="text-md text-white lg:text-lg">
                Super Soft Support{" "}
              </spain>
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold uppercase lg:text-6xl">
              Trail Collection
            </h1>

            {/* Button */}
            <div className="flex justify-center gap-4">
              <button className="mt-4 transform rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase italic text-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-lime-400">
                SHOP MEN
              </button>
              <button className="mt-4 transform rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase italic text-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-lime-400">
                SHOP WOMEN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrailColection;
