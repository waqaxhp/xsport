import React from "react";
import "./head.css";

function Head() {
  return (
    <div className="flex flex-col justify-around gap-4 bg-gray-200 p-5 md:flex-row">
      <div className="head_bgimg text flex flex-col items-end justify-center p-6">
        <p className="text-sm font-semibold text-green-400">
          100% ENVIRONMENT SAVING
        </p>
        <p className="mt-2 text-4xl font-bold text-white">REFURBISH</p>
        <button className="mt-4 rounded bg-white px-5 py-2 font-semibold text-black hover:bg-gray-300">
          PURCHASE IT
        </button>
      </div>
      <div className="head_bgimg2 flex flex-col items-end justify-center p-6">
        <p className="text-sm font-semibold text-green-400">
          OFFER! ON REGISTRATION
        </p>
        <p className="mt-2 text-4xl font-bold text-white">SAVE 50%</p>
        <button className="mt-4 rounded bg-white px-5 py-2 font-semibold text-black hover:bg-gray-300">
          GRAB OFFER!
        </button>
      </div>
    </div>
  );
}

export default Head;
