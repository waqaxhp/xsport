// import React, { useState } from "react";
// import "./Pluscard.css";
// import Cardimg1 from "./../../assets/Image_10.1-min-300x300.jpg";
// import Cardimg2 from "./../../assets/Image_11.1-min-300x300.jpg";
// import Cardimg3 from "./../../assets/Image_4.1-300x300.jpg";

// const productData = [
//   {
//     id: 1,
//     iconPosition: { top: "30%", left: "20%" },
//     title: "Asphalt Running",
//     name: "Raven : Silver Minks – Corals",
//     price: "$1,500.00",
//     rating: 5,
//     imageUrl: Cardimg1,
//   },
//   {
//     id: 2,
//     iconPosition: { top: "50%", left: "40%" },
//     title: "Another Product",
//     name: "Product Details Here",
//     price: "$1,200.00",
//     rating: 4,
//     imageUrl: Cardimg2,
//   },
//   {
//     id: 3,
//     iconPosition: { top: "60%", left: "70%" },
//     title: "New Arrival",
//     name: "Latest Edition Shoes",
//     price: "$1,700.00",
//     rating: 5,
//     imageUrl: Cardimg3,
//   },
// ];

// function Pluscard() {
//   const [hoveredProduct, setHoveredProduct] = useState(null);

//   return (
//     <>
//       <div className="pluscard_main relative w-full bg-cover bg-center">
//         {productData.map((product) => (
//           <div
//             key={product.id}
//             className="glow w-15 h-13 absolute cursor-pointer bg-yellow-400 p-4"
//             style={{
//               top: product.iconPosition.top,
//               left: product.iconPosition.left,
//             }}
//             onMouseEnter={() => setHoveredProduct(product)}
//             onMouseLeave={() => setHoveredProduct(null)}
//           >
//             <span className="font-bold text-black">+</span>
//           </div>
//         ))}

//         {hoveredProduct && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="max-w-xs rounded-lg bg-white p-6 text-center shadow-lg">
//               <img
//                 src={hoveredProduct.imageUrl}
//                 alt={hoveredProduct.name}
//                 className="mb-4 h-40 w-full object-contain"
//               />
//               <h3 className="text-sm text-gray-500">{hoveredProduct.title}</h3>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {hoveredProduct.name}
//               </h2>
//               <p className="text-lg font-bold text-gray-700">
//                 {hoveredProduct.price}
//               </p>
//               <div className="mt-2 text-yellow-500">
//                 {"★".repeat(hoveredProduct.rating)}
//                 {"☆".repeat(5 - hoveredProduct.rating)}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Pluscard;

import React, { useState } from "react";
import "./Pluscard.css";
import Cardimg1 from "./../../assets/Image_10.1-min-300x300.jpg";
import Cardimg2 from "./../../assets/Image_11.1-min-300x300.jpg";
import Cardimg3 from "./../../assets/Image_4.1-300x300.jpg";

const productData = [
  {
    id: 1,
    iconPosition: { top: "30%", left: "20%" },
    title: "Asphalt Running",
    name: "Raven : Silver Minks – Corals",
    price: "$1,500.00",
    rating: 5,
    imageUrl: Cardimg1,
  },
  {
    id: 2,
    iconPosition: { top: "50%", left: "40%" },
    title: "Another Product",
    name: "Product Details Here",
    price: "$1,200.00",
    rating: 4,
    imageUrl: Cardimg2,
  },
  {
    id: 3,
    iconPosition: { top: "60%", left: "70%" },
    title: "New Arrival",
    name: "Latest Edition Shoes",
    price: "$1,700.00",
    rating: 5,
    imageUrl: Cardimg3,
  },
];

function Pluscard() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="pluscard_main relative h-3/4 w-full bg-cover bg-center">
      {productData.map((product) => (
        <div
          key={product.id}
          className="glow h-13 w-18 absolute transform cursor-pointer rounded-full bg-yellow-400 p-4 transition-transform hover:scale-110"
          style={{
            top: product.iconPosition.top,
            left: product.iconPosition.left,
          }}
          onMouseEnter={() => setHoveredProduct(product)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <span className="font-bold text-black">+</span>
        </div>
      ))}

      {hoveredProduct && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="max-w-xs scale-105 transform rounded-lg bg-white p-2 text-center shadow-lg transition-transform">
            <img
              src={hoveredProduct.imageUrl}
              alt={hoveredProduct.name}
              className="mb-4 h-40 w-full object-contain"
            />
            <h3 className="text-sm text-gray-500">{hoveredProduct.title}</h3>
            <h2 className="text-lg font-semibold text-gray-800">
              {hoveredProduct.name}
            </h2>
            <p className="text-lg font-bold text-gray-700">
              {hoveredProduct.price}
            </p>
            <div className="mt-2 text-yellow-500">
              {"★".repeat(hoveredProduct.rating)}
              {"☆".repeat(5 - hoveredProduct.rating)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pluscard;
