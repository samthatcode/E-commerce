import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import { useSavedProperties } from "../contexts/SavedPropertiesContext";
import { FaSearch, FaUser, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);

  const { savedProperties } = useSavedProperties();
  const savedItemsCount = savedProperties.length;

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://kalles-backend.onrender.com/api/logout",
        // "/api/logout",
        {},
        {
          withCredentials: true, // Include credentials (cookies)
        }
      );
      if (response.data.message === "Logged out successfully") {
        setUser(null);
        clearCart();
        navigate("/");
        // console.log("User Logged Out");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-white text-dark top-0 fixed md:w-full w-full z-10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-primary hover:text-blue font-bold text-lg flex items-center"
            >
              Kalles
            </Link>
          </div>
          {/* Desktop View */}
          <div className="hidden md:flex items-baseline justify-center space-x-4 ">
            <Link
              to="/"
              className="hover:bg-gray-200 py-2 px-4 rounded-md text-slate-950 font-medium"
            >
              Home
            </Link>
            <div className="flex">
              <a
                smooth="true"
                className="hover:bg-gray-200 py-2 px-4 rounded-md text-slate-950 font-medium"
              >
                About Us
              </a>
            </div>
            <div className="group inline-block">
              <a
                href=""
                smooth="true"
                className="hover:bg-gray-200 py-2 px-4 rounded-md text-slate-950 font-medium"
              >
                Shop
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => handleScrollTo("contact")}
              smooth="true"
              className="hover:bg-gray-200 py-2 px-4 rounded-md text-slate-950 font-medium"
            >
              Contact
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black cursor-pointer focus:outline-none  focus:ring-inset"
              onClick={toggleMenu}
            >
              <span className="sr-only">Menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="md:flex items-center space-x-4">
              <Link to="/login">
                <FaUser size={25} className="text-primary hover:text-blue" />
              </Link>

              <FaSearch
                size={25}
                className="text-primary hover:text-blue cursor-pointer"
              />

              <div className="flex items-center ml-4 relative">
                <Link to="/products/saved">
                  <FaHeart
                    size={25}
                    className="text-primary hover:text-blue cursor-pointer"
                  />
                  <span className="absolute -top-3 -right-2 px-1 text-xs font-semibold bg-red text-white rounded-full w-4 h-4 text-center flex items-center justify-center">
                    {savedItemsCount}
                  </span>
                </Link>
              </div>
              <Cart cartItems={cartItems} />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md  font-medium hover:bg-gray-200 text-slate-950"
          >
            Home
          </Link>
          <a
            smooth="true"
            className="block px-3 py-2 rounded-md  font-medium hover:bg-gray-200 text-slate-950"
          >
            About Us
          </a>

          <a
            smooth="true"
            className="block px-3 py-2 rounded-md  font-medium hover:bg-gray-200 text-slate-950"
          >
            Shop
          </a>

          <a
            href="#contact"
            onClick={() => handleScrollTo("contact")}
            smooth="true"
            className="block px-3 py-2 rounded-md  font-medium hover:bg-gray-200 text-slate-950"
          >
            Contact
          </a>
        </div>
        <div className="px-4 py-3 sm:px-6">
          {user ? (
            <>
              <span className="block px-3 py-2 rounded-md font-medium text-slate-950">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="block px-3 py-2 rounded-md font-medium bg-primary hover:bg-blue text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                className="block px-3 py-2 rounded-md font-medium bg-primary hover:bg-blue text-white mb-4 text-center"
                href="/login"
                target="_self"
              >
                Login
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
