import "./index.css";
import App from "./App.jsx";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx"; // Import your Home component
import Aboutus from "./pages/aboutus/Aboutus.jsx";
import Contactus from "./pages/contactus/Contactus.jsx";
import Order from "./pages/order/Order.jsx";
import Shop from "./pages/shop/Shop.jsx"; // Import Shop component if not already

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />, // Set Home as the default route at "/"
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about_us",
        element: <Aboutus />,
      },
      {
        path: "contact_us",
        element: <Contactus />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
