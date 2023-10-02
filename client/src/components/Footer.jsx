import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-seagreen text-white py-6 shadow-3xl px-4 md:px-10">
        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
          {/* Address */}
          <div className="text-sm my-[84px] ">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              123 Example St, City, Country
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" />
              example@example.com
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" />
              +123 456 789
            </p>
          </div>

          {/* Categories */}
          <div className="text-sm">
            <h4 className="font-semibold text-lg my-7">Categories</h4>
            <ul>
              <li className="hover:text-primary">
                <Link to="/shoes">Shoes</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/bags">Bags</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/jeans">Jeans</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/wristwatches">Wristwatches</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/suits">Suits</Link>
              </li>
              {/* Add more categories here */}
            </ul>
          </div>
          {/* Information */}
          <div className="text-sm">
            <h4 className="font-semibold text-lg my-7">Information</h4>
            <ul>
              <li className="hover:text-primary">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/shipping-delivery">Shipping & Delivery</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/return-exchanges">Return & Exchanges</Link>
              </li>
              {/* Add more information links here */}
            </ul>
          </div>
          {/* Useful Links */}
          <div className="text-sm">
            <h4 className="font-semibold text-lg my-7">Useful Links</h4>
            <ul>
              <li className="flex items-center hover:text-primary">
                <FaLink className="mr-2" />
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="flex items-center hover:text-primary">
                <FaLink className="mr-2" />
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li className="flex items-center hover:text-primary">
                <FaLink className="mr-2" />
                <Link to="/">Home</Link>
              </li>
              <li className="flex items-center hover:text-primary">
                <FaLink className="mr-2" />
                <Link to="/shop">Shop</Link>
              </li>
              <li className="flex items-center hover:text-primary">
                <FaLink className="mr-2" />
                <Link to="/contact">Contact</Link>
              </li>
              {/* Add more useful links here */}
            </ul>
          </div>
          {/* Newsletter Signup */}
          <div className="text-sm">
            <h4 className="font-semibold text-lg my-7">Newsletter Signup</h4>
            <p>
              Subscribe to our newsletter to get our news & deals delivered to
              you.
            </p>
            <div className="flex-col items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded mr-2 w-full my-3"
                required
              />
              <button className="bg-primary hover:bg-blue text-white font-semibold py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex flex-col md:flex-row md:justify-around md:items-center bg-slate-200 ">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center font-bold text-lg text-primary"
          >
            Kalles
          </Link>
        </div>

        {/* Copyright and Social Media Links */}
        <div className="text-sm text-center md:text-left mb-4 md:mb-0 text-black">
          <div className="flex flex-row justify-center md:justify-start gap-4 mt-2">
            <a
              href="https://twitter.com"
              className="hover:text-primary block mb-2"
            >
              <AiFillTwitterCircle className="inline mr-2" />
              Twitter
            </a>
            <a
              href="https://web.facebook.com"
              className="hover:text-primary block mb-2"
            >
              <AiFillFacebook className="inline mr-2" />
              Facebook
            </a>
            <a href="https://www.instagram.com" className="hover:text-primary">
              <AiFillInstagram className="inline mr-2" />
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          © 2023 Kalles All rights reserved.
        </div>
        <p className="">
          Powered by{" "}
          <a
            href="https://samthatcode.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-sm text-pink-500"
          >
            samthatcode
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
