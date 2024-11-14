// import React, { useState } from "react";
// import logo from "../../assets/Logo.png";
// import { BsCart2 } from "react-icons/bs";
// import { CiHeart, CiSearch } from "react-icons/ci";
// import { AiOutlineClose } from "react-icons/ai";
// import { HiMenu } from "react-icons/hi";
// import "./Navbar.css";

// function Navbar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("MENU"); // State to manage active tab in sidebar

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed z-10 flex w-full items-center justify-between bg-black px-8 py-4 text-white">
//         {/* Left side: Logo + Menu Items */}
//         <div className="lg:hidden">
//           <button onClick={toggleSidebar}>
//             <HiMenu className="text-3xl text-white" />
//           </button>
//         </div>
//         <div className="flex items-center space-x-12">
//           <img src={logo} alt="Logo" className="h-15 mr-2" />

//           {/* Main Menu Items (Hidden on small screens) */}
//           <div className="font_family_custom hidden space-x-12 text-sm font-bold uppercase tracking-wide md:flex">
//             <NavLink//               to="#shop"
//               className="relative hidden hover:text-yellow-400 lg:block"
//             >
//               Shop
//             </NavLink>
//             {/* <span className="relative hidden self-center lg:block">…</span> */}
//             <NavLink
//               to="#about"
//               className="relative hidden hover:text-yellow-400 lg:block"
//             >
//               About Us
//             </NavLink>
//             {/* <span className="relative hidden self-center lg:block">…</span> */}
//             <NavLink
//               to="#contact"
//               className="relative hidden hover:text-yellow-400 lg:block"
//             >
//               Contact Us
//             </NavLink>

//             <NavLink
//               to="#order"
//               className="relative hidden hover:text-yellow-400 lg:block"
//             >
//               Order
//             </NavLink>
//           </div>
//         </div>

//         {/* Right side: Icons & Cart */}
//         <div className="flex items-center space-x-4">
//           <button className="relative hidden hover:text-yellow-400 lg:block">
//             <CiSearch className="text-3xl" />
//           </button>
//           <div>
//             <span className="relative hidden lg:block">|</span>
//           </div>
//           <div className="relative hidden lg:block">
//             <CiHeart className="text-3xl hover:text-yellow-400" />
//             <span className="bg_custom_lime absolute right-0 top-0 rounded-full px-1 text-xs text-black">
//               0
//             </span>
//           </div>
//           <div>
//             <span className="relative hidden lg:block">|</span>
//           </div>
//           <div className="relative">
//             <BsCart2 className="text-3xl hover:text-yellow-400" />
//             <span className="text_customLime bg_custom_lime absolute right-0 top-0 rounded-full px-1 text-xs text-black">
//               0
//             </span>
//           </div>
//           <span className="relative ml-2 hidden lg:block">$0.00</span>
//         </div>
//       </nav>

{
  /* Sidebar for Mobile */
}
//   <div
//     className={`fixed inset-0 z-20 transform bg-black bg-opacity-90 ${
//       isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//     } transition-transform duration-300 ease-in-out lg:hidden`}
//   >
//     <div className="flex items-center justify-between p-4">
//       <img src={logo} alt="Logo" className="h-8" />
//       <button onClick={toggleSidebar}>
//         <AiOutlineClose className="text-3xl text-white" />
//       </button>
//     </div>

//     {/* Tab Navigation for Menu and Categories */}
//     <div className="p-4 text-white">
//       {/* Search Input */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full rounded bg-gray-800 p-2 text-white"
//         />
//       </div>

//       {/* Tab Navigation */}
//       <div className="mb-4 flex space-x-4">
//         <button
//           className={`pb-1 text-lg font-semibold ${
//             activeTab === "MENU"
//               ? "border-b-2 border-white"
//               : "text-gray-500"
//           }`}
//           onClick={() => setActiveTab("MENU")}
//         >
//           MENU
//         </button>
//         <button
//           className={`pb-1 text-lg font-semibold ${
//             activeTab === "CATEGORIES"
//               ? "border-b-2 border-white"
//               : "text-gray-500"
//           }`}
//           onClick={() => setActiveTab("CATEGORIES")}
//         >
//           CATEGORIES
//         </button>
//       </div>

//       {/* Content Based on Active Tab */}
//       {activeTab === "MENU" ? (
//         // Menu Content
//         <div>
//           <ul className="space-y-4">
//             <li>
//               <NavLink
//                 to="#shop"
//                 className="block w-full text-left hover:text-yellow-400"
//               >
//                 Shop
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="#about"
//                 className="block w-full text-left hover:text-yellow-400"
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="#contact"
//                 className="block w-full text-left hover:text-yellow-400"
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="#order"
//                 className="block w-full text-left hover:text-yellow-400"
//               >
//                 Order
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       ) : (
//         // Categories Content
//         <div>
//           <ul className="space-y-4">
//             <li>
//               <button className="block w-full text-left hover:text-yellow-400">
//                 Trail Running
//               </button>
//             </li>
//             <li>
//               <button className="block w-full text-left hover:text-yellow-400">
//                 Travelling
//               </button>
//             </li>
//             <li>
//               <button className="block w-full text-left hover:text-yellow-400">
//                 Sneakers
//               </button>
//             </li>
//             <li>
//               <button className="block w-full text-left hover:text-yellow-400">
//                 Asphalt Running
//               </button>
//             </li>
//             <li>
//               <button className="block w-full text-left hover:text-yellow-400">
//                 Casual Styles
//               </button>
//             </li>
//             <li>
//               <button className="block w-full text-left hover:text-yellow-400">
//                 Cushioned Shoes
//               </button>
//             </li>
//             <li>
//               <button className="block w-full text-left hover:text-yellow-400">
//                 Hiking Travelling
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   </div>
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { BsCart2 } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("MENU");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed z-10 flex w-full items-center justify-between bg-black px-8 py-4 text-white">
        {/* Left side: Logo + Menu Items */}
        <div className="lg:hidden">
          <button onClick={toggleSidebar}>
            <HiMenu className="text-3xl text-white" />
          </button>
        </div>
        <div className="flex items-center space-x-12">
          <img src={logo} alt="Logo" className="h-15 mr-2" />

          {/* Main Menu Items (Hidden on small screens) */}
          <div className="font_family_custom hidden space-x-8 text-sm font-bold uppercase tracking-wide md:flex">
            <NavLink
              to="/shop"
              className="relative hidden hover:text-yellow-400 lg:block"
            >
              Shop
            </NavLink>
            <span className="separator relative hidden self-center lg:block"></span>

            <NavLink
              to="/about_us"
              className="relative hidden hover:text-yellow-400 lg:block"
            >
              About Us
            </NavLink>
            <span className="separator relative hidden self-center lg:block"></span>

            <NavLink
              to="/contact_us"
              className="relative hidden hover:text-yellow-400 lg:block"
            >
              Contact Us
            </NavLink>
            <span className="separator relative hidden self-center lg:block"></span>

            <NavLink
              to="/order"
              className="relative hidden hover:text-yellow-400 lg:block"
            >
              Order
            </NavLink>
          </div>
        </div>

        {/* Right side: Icons & Cart */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSearchModal}
            className="relative hidden hover:text-yellow-400 lg:block"
          >
            <CiSearch className="text-3xl" />
          </button>
          <div>
            <span className="relative hidden lg:block">|</span>
          </div>
          <div className="relative hidden lg:block">
            <CiHeart className="text-3xl hover:text-yellow-400" />
            <span className="bg_custom_lime absolute right-0 top-0 rounded-full px-1 text-xs text-black">
              0
            </span>
          </div>
          <div>
            <span className="relative hidden lg:block">|</span>
          </div>
          <div className="relative" onClick={toggleCartModal}>
            <BsCart2 className="cursor-pointer text-3xl hover:text-yellow-400" />
            <span className="text_customLime bg_custom_lime absolute right-0 top-0 rounded-full px-1 text-xs text-black">
              0
            </span>
          </div>
          <span className="relative ml-2 hidden lg:block">$0.00</span>
        </div>
      </nav>

      {/* Cart Modal */}
      <div
        className={`fixed inset-y-0 right-0 z-30 w-80 transform bg-white p-6 transition-transform ${
          isCartModalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={toggleCartModal}>
            <AiOutlineClose className="text-2xl text-gray-600" />
          </button>
        </div>
        <div className="mt-8 text-center">
          <BsCart2 className="mx-auto text-6xl text-gray-400" />
          <h3 className="mt-4 text-lg font-semibold">
            No products in the cart.
          </h3>
          <button
            className="mt-6 rounded bg-black px-4 py-2 text-white"
            onClick={toggleCartModal}
          >
            Return to Shop
          </button>
        </div>
      </div>

      {/* Search Modal */}
      <div
        className={`fixed inset-x-0 top-0 z-30 transform bg-black bg-opacity-90 p-4 transition-transform ${
          isSearchModalOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-white">Search</h2>
          <button onClick={toggleSearchModal}>
            <AiOutlineClose className="text-2xl text-white" />
          </button>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded bg-gray-800 p-3 text-white"
          />
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 z-20 transform bg-black bg-opacity-90 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <img src={logo} alt="Logo" className="h-8" />
          <button onClick={toggleSidebar}>
            <AiOutlineClose className="text-3xl text-white" />
          </button>
        </div>

        {/* Tab Navigation for Menu and Categories */}
        <div className="p-4 text-white">
          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded bg-gray-800 p-2 text-white"
            />
          </div>

          {/* Tab Navigation */}
          <div className="mb-4 flex space-x-4">
            <button
              className={`pb-1 text-lg font-semibold ${
                activeTab === "MENU"
                  ? "border-b-2 border-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("MENU")}
            >
              MENU
            </button>
            <button
              className={`pb-1 text-lg font-semibold ${
                activeTab === "CATEGORIES"
                  ? "border-b-2 border-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("CATEGORIES")}
            >
              CATEGORIES
            </button>
          </div>

          {/* Content Based on Active Tab */}
          {activeTab === "MENU" ? (
            // Menu Content
            <div>
              <ul className="space-y-4">
                <li>
                  <NavLink
                    to="#shop"
                    className="block w-full text-left hover:text-yellow-400"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#about"
                    className="block w-full text-left hover:text-yellow-400"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#contact"
                    className="block w-full text-left hover:text-yellow-400"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#order"
                    className="block w-full text-left hover:text-yellow-400"
                  >
                    Order
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            // Categories Content
            <div>
              <ul className="space-y-4">
                <li>
                  <button className="block w-full text-left hover:text-yellow-400">
                    Trail Running
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left hover:text-yellow-400">
                    Travelling
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left hover:text-yellow-400">
                    Sneakers
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left hover:text-yellow-400">
                    Asphalt Running
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left hover:text-yellow-400">
                    Casual Styles
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left hover:text-yellow-400">
                    Cushioned Shoes
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left hover:text-yellow-400">
                    Hiking Travelling
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
