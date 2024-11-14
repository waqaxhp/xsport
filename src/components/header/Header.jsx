import { FaChevronRight } from "react-icons/fa6";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ name }) {
  return (
    <>
      <div className="order_main relative flex h-64 flex-col items-center justify-center bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-center">
          <p className="mb-2 flex items-center justify-center text-sm text-lime-300">
            <Link to={"/"} className="mr-1">
              HOME
            </Link>{" "}
            <FaChevronRight className="mx-1" />
          </p>
          <h1 className="text-4xl font-bold italic">{name}</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
