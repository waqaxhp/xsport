import React from "react";
import Image1 from "./../../assets/Image-1-3.jpg";
import Image2 from "./../../assets/Image-2-1.jpg";
import Image3 from "./../../assets/Image-5.jpg";

const NewCollection = () => {
  return (
    <div className="bg-black px-5 py-10 text-white">
      {/* <h2 className="mb-8 text-center text-3xl font-bold">
        NEW COLLECTION XSTORE
      </h2> */}
      <h1 className="mb-5 text-center text-4xl font-bold text-white md:text-6xl">
        NEW COLLECTION XSTORE
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        {/* Men Section */}
        <div className="w-full bg-black p-5 text-white shadow-lg md:w-1/3">
          <div className="overflow-hidden">
            <img
              src={Image1}
              alt="Men"
              className="h-50 mb-4 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-bold">Men</h3>
          <p className="mb-4 text-sm">
            Choose a trail and we will provide right equipment
          </p>
          <button className="transform rounded-md bg-white px-4 py-2 font-bold text-black transition-colors duration-300 ease-in-out hover:bg-[#c8ff0b] hover:text-black">
            LOAD MORE
          </button>
        </div>

        {/* Shoes Section */}
        <div className="w-full bg-black p-5 text-white shadow-lg md:w-1/3">
          <div className="overflow-hidden">
            <img
              src={Image2}
              alt="Shoes"
              className="h-50 mb-4 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-bold">Shoes</h3>
          <p className="mb-4 text-sm">
            Discover our new collection for asphalt running
          </p>
          <button className="transform rounded-md bg-white px-4 py-2 font-bold text-black transition-colors duration-300 ease-in-out hover:bg-[#c8ff0b] hover:text-black">
            LOAD MORE
          </button>
        </div>

        {/* Women Section */}
        <div className="w-full bg-black p-5 text-white shadow-lg md:w-1/3">
          <div className="overflow-hidden">
            <img
              src={Image3}
              alt="Women"
              className="h-50 mb-4 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-bold">Women</h3>
          <p className="mb-4 text-sm">
            Discount up to 50% on product from previous season
          </p>
          <button className="transform rounded-md bg-white px-4 py-2 font-bold text-black transition-colors duration-300 ease-in-out hover:bg-[#c8ff0b] hover:text-black">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
