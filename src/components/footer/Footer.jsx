// import React from "react";
// import "./Footer.css";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaPhone,
//   FaPhoneFlip,
//   FaXTwitter,
//   FaYoutube,
// } from "react-icons/fa6";
// import { FaTelegramPlane } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer
//       className="footer_main bg-cover bg-center px-1 py-16 text-white"
//       //   style={{ backgroundImage: "url('your-background-image.jpg')" }}
//     >
//       {/* <div className="mx-auto max-w-7xl"> */}
//       <div className="mx-auto max-w-7xl px-4">
//         {/* Top section with availability and contact number */}
//         <div className="mb-8 flex items-center justify-between border-b border-gray-700 pb-6">
//           <div className="flex items-center space-x-4 text-sm">
//             <p>We are available</p>
//             <span className="font-bold">8:00am – 7:00pm</span>
//             <div className="flex items-center space-x-2">
//               <FaPhone />
//               <span>+44 79 9955 7583</span>
//             </div>
//           </div>

//           {/* <div className="flex items-center space-x-4 "> */}
//           <div className="flex items-center space-x-10 text-lg">
//             {/* Social media icons */}
//             <div className="flex space-x-3">
//               <a href="#">
//                 <FaFacebookF />
//               </a>
//               <a href="#">
//                 <FaXTwitter />
//               </a>
//               <a href="#">
//                 <FaInstagram />
//               </a>
//               <a href="#">
//                 <FaYoutube />
//               </a>
//               <a href="#">
//                 <FaTelegramPlane />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Main footer links and subscription */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           {/* Company Links */}
//           <div>
//             <h4 className="mb-2 font-bold">COMPANY</h4>
//             <ul>
//               <li>
//                 <a href="#" className="hover:underline">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Support Links */}
//           <div>
//             <h4 className="mb-2 font-bold">SUPPORT</h4>
//             <ul>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Returns
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Subscription Form */}
//           <div>
//             <h4 className="mb-2 font-bold">SUBSCRIBE</h4>
//             <p className="mb-4 text-sm">
//               Enter your email address to get{" "}
//               <span className="font-bold">$20 off your first order</span>
//             </p>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email id..."
//                 className="w-full bg-white p-2 text-black placeholder-gray-600"
//               />
//               <button
//                 type="submit"
//                 className="bg-trueGray-700 border border-white p-2 text-white"
//               >
//                 SUBSCRIBE
//               </button>
//             </form>
//             <p className="mt-2 text-xs">
//               * Don't worry, we won't spam our customers' mailboxes
//             </p>
//           </div>
//         </div>

//         {/* Bottom copyright section */}
//         <div className="mt-8 border-t border-gray-700 pt-4 text-left text-sm">
//           <p>Copyright © 2024</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer_main bg-cover bg-center px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Top section with availability and contact number */}
        <div className="footer-top mb-8 flex flex-col items-center justify-between space-y-4 border-b border-gray-700 pb-6 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 text-center text-sm md:flex-row md:space-x-4 md:space-y-0 md:text-left">
            <p>We are available</p>
            <span className="font-bold">8:00am – 7:00pm</span>
            <div className="flex items-center space-x-2">
              <FaPhone />
              <span>+44 79 9955 7583</span>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-4 text-lg">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Telegram">
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Main footer links and subscription */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Links */}
          <div>
            <h4 className="mb-2 font-bold">COMPANY</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-2 font-bold">SUPPORT</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscription Form */}
          <div>
            <h4 className="mb-2 font-bold">SUBSCRIBE</h4>
            <p className="mb-4 text-sm">
              Enter your email address to get{" "}
              <span className="font-bold">$20 off your first order</span>
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email id..."
                className="mb-2 w-full rounded bg-white p-2 text-black placeholder-gray-600 sm:mb-0 sm:mr-2"
              />
              <button
                type="submit"
                className="w-full rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 sm:w-auto"
              >
                SUBSCRIBE
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-300">
              * Don't worry, we won't spam our customers' mailboxes
            </p>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm md:text-left">
          <p>Copyright © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
