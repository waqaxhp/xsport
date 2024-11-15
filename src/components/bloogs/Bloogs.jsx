// import React, { useState } from "react";
// import Firstimg from "./../../assets/Post_5.jpg";
// import Secondimg from "./../../assets/Post_3.jpg";
// import Thirdimg from "./../../assets/Post_6.jpg";
// import Fourthimg from "./../../assets/Image-7.jpg";

// function Blogs() {
//   const blogPosts = [
//     {
//       id: 1,
//       image: Firstimg,
//       date: "14 Aug",
//       category: "Uncategorized",
//       title: "WITH SKATEBOARDING HEADED TO TOKYO DESIGN",
//       description:
//         "The Quai 54 collection and a sportswear collection based on the national team jersey bookend two of basketball's great recreational spaces...",
//       author: "admin",
//     },
//     {
//       id: 2,
//       image: Secondimg,
//       date: "14 Aug",
//       category: "Uncategorized",
//       title: "THE ZOOMX BRUIN IS A TRIBUTE TO BODECKER",
//       description:
//         "The combination of white, pink blast, total orange and bright crimson will mark Nike’s presence in Tokyo across select performance...",
//       author: "admin",
//     },
//     {
//       id: 3,
//       image: Thirdimg,
//       date: "14 Aug",
//       category: "Uncategorized",
//       title: "MLB CONNECT SERIES EXPLORES BASEBALL",
//       description:
//         "NIKE, Inc. (NYSE:NKE) today reported financial results for its fiscal 2021 fourth quarter and full year ended...",
//       author: "admin",
//     },
//     {
//       id: 4,
//       image: Fourthimg,
//       date: "14 Aug",
//       category: "Uncategorized",
//       title: "A NEW ERA OF SPORTSWEAR",
//       description:
//         "Nike introduces its new sportswear line inspired by Tokyo's fast-paced lifestyle...",
//       author: "admin",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length,
//     );
//   };

//   return (
//     <div className="relative flex items-center justify-center bg-white px-4 py-6">
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
//       >
//         &#8249;
//       </button>

//       <div className="w-full max-w-4xl">
//         <div className="flex flex-col items-center overflow-hidden rounded-lg bg-gray-100 shadow-md transition-transform duration-300 ease-in-out md:max-w-xl md:flex-row">
//           <img
//             src={blogPosts[currentIndex].image}
//             alt="Blog Post"
//             className="h-48 w-full object-cover md:h-auto md:w-1/2"
//           />
//           <div className="flex flex-col justify-between p-4 leading-normal md:w-1/2">
//             {/* Date and Category */}
//             <div className="mb-2 flex items-center">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-gray-800 shadow-lg">
//                 <p className="text-xs">{blogPosts[currentIndex].date}</p>
//               </div>
//               <span className="ml-3 rounded bg-green-500 px-2 py-1 text-xs font-semibold text-white">
//                 {blogPosts[currentIndex].category}
//               </span>
//             </div>
//             {/* Title */}
//             <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
//               {blogPosts[currentIndex].title}
//             </h5>
//             {/* Description */}
//             <p className="mb-3 text-sm text-gray-700">
//               {blogPosts[currentIndex].description}
//             </p>
//             {/* Continue Reading Button */}
//             <button className="mt-2 rounded bg-black px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-gray-800">
//               Continue Reading
//             </button>
//             {/* Author Info */}
//             <div className="mt-4 flex items-center text-xs text-gray-500">
//               <span>by {blogPosts[currentIndex].author}</span>
//               <span className="ml-4">&#x1F4AC; 0</span>
//               <span className="ml-4">&#x1F5E8; 0</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
//       >
//         &#8250;
//       </button>
//     </div>
//   );
// }

// export default Blogs;

import React, { useState } from "react";
import Firstimg from "./../../assets/Post_5.jpg";
import Secondimg from "./../../assets/Post_3.jpg";
import Thirdimg from "./../../assets/Post_6.jpg";
import Fourthimg from "./../../assets/Image-7.jpg";

function Blogs() {
  const blogPosts = [
    {
      id: 1,
      image: Firstimg,
      date: "14 Aug",
      category: "Uncategorized",
      title: "WITH SKATEBOARDING HEADED TO TOKYO DESIGN",
      description:
        "The Quai 54 collection and a sportswear collection based on the national team jersey bookend two of basketball's great recreational spaces...",
      author: "admin",
    },
    {
      id: 2,
      image: Secondimg,
      date: "14 Aug",
      category: "Uncategorized",
      title: "THE ZOOMX BRUIN IS A TRIBUTE TO BODECKER",
      description:
        "The combination of white, pink blast, total orange and bright crimson will mark Nike’s presence in Tokyo across select performance...",
      author: "admin",
    },
    {
      id: 3,
      image: Thirdimg,
      date: "14 Aug",
      category: "Uncategorized",
      title: "MLB CONNECT SERIES EXPLORES BASEBALL",
      description:
        "NIKE, Inc. (NYSE:NKE) today reported financial results for its fiscal 2021 fourth quarter and full year ended...",
      author: "admin",
    },
    {
      id: 4,
      image: Fourthimg,
      date: "14 Aug",
      category: "Uncategorized",
      title: "A NEW ERA OF SPORTSWEAR",
      description:
        "Nike introduces its new sportswear line inspired by Tokyo's fast-paced lifestyle...",
      author: "admin",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 posts per page on large screens
  const itemsPerPage = 3;

  // Calculate the visible items based on current index and items per page
  const visiblePosts = blogPosts.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  // Go to the next set of items
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerPage) % blogPosts.length,
    );
  };

  // Go to the previous set of items
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + blogPosts.length) % blogPosts.length,
    );
  };

  return (
    <div className="relative rounded-lg bg-gray-100 px-4 py-6 shadow-md">
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
      >
        &#8249;
      </button>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md"
          >
            <img
              src={post.image}
              alt="Blog Post"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              {/* Date and Category */}
              <div className="mb-2 flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-gray-800 shadow-lg">
                  <p className="text-center text-xs">{post.date}</p>
                </div>
                <span className="ml-3 rounded bg-green-500 px-2 py-1 text-xs font-semibold text-white">
                  {post.category}
                </span>
              </div>
              {/* Title */}
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                {post.title}
              </h5>
              {/* Description */}
              <p className="mb-3 text-sm text-gray-700">{post.description}</p>
              {/* Continue Reading Button */}
              <button className="mt-2 rounded bg-black px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-gray-800">
                Continue Reading
              </button>
              {/* Author Info */}
              <div className="mt-4 flex items-center text-xs text-gray-500">
                <span>by {post.author}</span>
                <span className="ml-4">&#x1F4AC; 0</span>
                <span className="ml-4">&#x1F5E8; 0</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
      >
        &#8250;
      </button>
    </div>
  );
}

export default Blogs;
