// import React from "react";

// export default function ProductList({ products }) {
//   return (
//     <div className="w-3/4 p-4">
//       <div className="mb-4 flex items-center justify-between">
//         <h2 className="text-lg font-bold">Products</h2>
//         <select className="border p-2">
//           <option>Sort by Popular</option>
//           <option>Sort by Price</option>
//         </select>
//       </div>
//       <div className="grid grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="rounded border p-4">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="mb-4 h-48 w-full object-cover"
//             />
//             <h3 className="text-md font-semibold">{product.name}</h3>
//             <p className="text-gray-500">{product.price}</p>
//           </div>
//         ))}
//       </div>
//       <div className="mt-4 flex justify-center">{/* Pagination Buttons */}</div>
//     </div>
//   );
// }

import React, { useState } from "react";
// Import your product images here
import Product1 from "./../../assets/Image_10.1-min-300x300.jpg";
import Product2 from "./../../assets/Image_11.1-min-300x300.jpg";
import Product3 from "./../../assets/Image_4.1-300x300.jpg";
import Product4 from "./../../assets/Image_11.1-min-300x300.jpg";

const products = [
  {
    id: 1,
    name: "RAVEN : SILVER / CORALS",
    price: "$1,500.00",
    image: Product1,
  },
  {
    id: 2,
    name: "KANETYKS : BERMUDA",
    price: "$1,500.00",
    image: Product2,
  },
  {
    id: 3,
    name: "RAVEN : SILVER MINKS",
    price: "$1,500.00",
    image: Product3,
  },
  {
    id: 4,
    name: "STORMY : BLACK / GLORY",
    price: "$1,500.00",
    image: Product4,
  },
];

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;

  // Calculate the indices of the products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // Pagination control functions
  const totalPages = Math.ceil(products.length / productsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage,
    );
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className="mx-auto w-3/4 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">Products</h2>
        <select className="border p-2">
          <option>Sort by Popular</option>
          <option>Sort by Price</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {currentProducts.map((product) => (
          <div key={product.id} className="rounded border p-4 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-md font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`rounded px-4 py-2 ${
            currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`rounded px-4 py-2 ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
      <div className="mt-2 text-center">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default ProductList;
