import React, { useState } from "react";
import Product1 from "./../../assets/Image_10.1-min-300x300.jpg";
import Product2 from "./../../assets/Image_11.1-min-300x300.jpg";
import Product3 from "./../../assets/Image_4.1-300x300.jpg";
import Product4 from "./../../assets/Image_11.1-min-300x300.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrowNext from "../coustomarrow/CustomArrowNext";
import CustomArrowPrevious from "../coustomarrow/CustomArrowPrevius";
// Slick Slider settings
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <CustomArrowNext />,
  prevArrow: <CustomArrowPrevious />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const products = [
  {
    id: 1,
    title: "RAVEN : SILVER / CORALS",
    category: "Sneakers",
    price: "$1,500.00",
    rating: 5,
    imageUrl: Product1,
    hoverImageUrl: Product2,
  },
  {
    id: 2,
    title: "KANETYKS : BERMUDA",
    category: "Sneakers",
    price: "$1,500.00",
    rating: 5,
    imageUrl: Product2,
    hoverImageUrl: Product1,
  },
  {
    id: 3,
    title: "RAVEN : SILVER MINKS",
    category: "Sneakers",
    price: "$1,500.00",
    rating: 5,
    imageUrl: Product3,
    hoverImageUrl: Product4,
  },
  {
    id: 4,
    title: "STORMY : BLACK / GLORY",
    category: "Sneakers",
    price: "$1,500.00",
    rating: 5,
    imageUrl: Product4,
    hoverImageUrl: Product4,
  },
];

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-center overflow-hidden">
        <img
          src={isHovered ? product.hoverImageUrl : product.imageUrl}
          alt={product.title}
          className="mx-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
        {isHovered && (
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 text-sm font-semibold text-white transition-opacity duration-300 ease-in-out">
            👁️ Quick View
          </button>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="font-bold">{product.title}</h3>
        <div className="text-yellow-500">
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
        </div>
        <p className="font-semibold text-gray-700">{product.price}</p>
      </div>
    </div>
  );
}

const Whatsnew = () => {
  return (
    <div className="container mx-auto p-10">
      <h2 className="mb-6 text-center text-2xl font-bold">WHAT'S NEW</h2>
      <p className="mb-10 text-center">
        <a href="#" className="underline">
          VIEW ALL ITEMS
        </a>
      </p>
      <div className="container relative mx-auto py-10">
        <Slider {...settings}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Whatsnew;
