import React from "react";
import Sixgroupimg from "./../../assets/Group-1-1.jpg"; // The single image for the right side

function Sixgroup() {
  return (
    <>
      <section className="flex flex-col items-center px-4 py-10 lg:flex-row lg:justify-between lg:px-20">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h2 className="mb-4 text-3xl font-bold lg:text-5xl">
            JOIN INSTAGRAM
          </h2>
          <p className="mb-4 text-2xl font-semibold">@xsportshoes</p>
          <p className="text-gray-600">
            Elementor WooCommerce Demo. Contemporary running shoes sample
            authentic style modern man and women. Follow us for the latest
            deals. Tag us and get featured @xsportshoes
          </p>
          <p className="mt-4 text-gray-600">instagram.com/xsportshoes</p>
        </div>

        {/* Right side single image */}
        <div className="mt-8 flex w-full lg:mt-0 lg:w-1/2">
          <img
            src={Sixgroupimg} // Single image for right side
            alt="Instagram collage of xsportshoes"
            className="h-full w-full rounded object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Sixgroup;
