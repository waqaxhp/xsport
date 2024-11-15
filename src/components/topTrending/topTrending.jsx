// import React, { useState } from "react";
// import Topgirl from "./../../assets/top trending.jpg";
// import Product1 from "./../../assets/Image_2.1.jpg";
// import Product2 from "./../../assets/Image-1-3.jpg";
// import Product3 from "./../../assets/sneakers-boot-2-1.png";

// export default function TopTrending() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const productImages = [Product1, Product2, Product3];

//   // Function to handle next image in slider
//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
//   };

//   // Function to handle previous image in slider
//   const prevImage = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + productImages.length) % productImages.length,
//     );
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-white p-4 md:flex-row">
//       {/* Left side image */}
//       <div className="flex w-full justify-center md:w-1/2">
//         <img
//           src={Topgirl}
//           alt="Top Trending"
//           className="h-auto w-full max-w-sm object-cover"
//         />
//       </div>

//       {/* Right side slider */}
//       <div className="flex w-full flex-col items-center p-4 md:w-1/2">
//         <h2 className="mb-4 text-2xl font-bold">TOP TRENDING</h2>

//         <div className="relative flex w-full max-w-md items-center justify-center">
//           <button
//             onClick={prevImage}
//             className="absolute left-0 p-2 text-2xl text-gray-500 hover:text-black"
//           >
//             &#8249;
//           </button>
//           <img
//             src={productImages[currentIndex]}
//             alt="Product"
//             className="h-auto w-full object-contain transition-all duration-300 ease-in-out"
//           />
//           <button
//             onClick={nextImage}
//             className="absolute right-0 p-2 text-2xl text-gray-500 hover:text-black"
//           >
//             &#8250;
//           </button>
//         </div>

//         {/* Product details */}
//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-500">Sneakers</p>
//           <h3 className="text-lg font-semibold">KANETYKS : BERMUDA</h3>
//           <div className="mt-2 flex items-center justify-center">
//             {/* Star rating - replace with icons if needed */}
//             {[...Array(5)].map((_, index) => (
//               <span key={index} className="text-xl text-yellow-500">
//                 &#9733;
//               </span>
//             ))}
//           </div>
//           <p className="mt-2 font-medium text-gray-700">$1,500.00</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Topgirl from "./../../assets/top trending.jpg";
import Product1 from "./../../assets/Image_2.1.jpg";
import Product2 from "./../../assets/Image-1-3.jpg";
import Product3 from "./../../assets/sneakers-boot-2-1.png";

export default function TopTrending() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const productImages = [Product1, Product2, Product3];

  // Function to handle next image in slider
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  // Function to handle previous image in slider
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + productImages.length) % productImages.length,
    );
  };

  return (
    <div className="m-10 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-6 shadow-md md:flex-row">
      {/* Left side image */}
      <div className="flex w-full justify-center p-4 md:w-1/2">
        <img
          src={Topgirl}
          alt="Top Trending"
          className="h-100 w-full max-w-sm rounded-lg object-cover"
        />
      </div>

      {/* Right side slider */}
      <div className="flex w-full flex-col items-center p-4 md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">TOP TRENDING</h2>

        <div className="relative flex h-80 w-full max-w-sm items-center justify-center rounded-lg bg-white shadow-md">
          <button
            onClick={prevImage}
            className="absolute left-0 z-10 p-3 text-2xl text-gray-500 hover:text-black"
          >
            &#8249;
          </button>
          <img
            src={productImages[currentIndex]}
            alt="Product"
            className="h-full w-full rounded-lg object-contain transition-all duration-300 ease-in-out"
          />
          <button
            onClick={nextImage}
            className="absolute right-0 z-10 p-3 text-2xl text-gray-500 hover:text-black"
          >
            &#8250;
          </button>
        </div>

        {/* Product details */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Sneakers</p>
          <h3 className="text-lg font-semibold">KANETYKS : BERMUDA</h3>
          <div className="mt-2 flex items-center justify-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-xl text-yellow-500">
                &#9733;
              </span>
            ))}
          </div>
          <p className="mt-2 font-medium text-gray-700">$1,500.00</p>
        </div>
      </div>
    </div>
  );
}
