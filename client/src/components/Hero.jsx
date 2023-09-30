import React, { useState } from "react";
import { CarouselData } from "../data/CarouselData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineEnvironment,
} from "react-icons/ai";
// import { useSearch } from "../contexts/SearchContext";
import { FaWalking } from "react-icons/fa";

<style jsx>
  {`
    @media (max-width: 768px) {
      .inset-y-0 {
        left: 1/3 !important;
      }
      .right-3 {
        right: 1/3 !important;
      }
    }
  `}
</style>;

const Hero = () => {
  // const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className="">
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        {CarouselData.map((item, index) => (
          <div
            key={index}
            className="relative z-10 flex items-center justify-center w-full h-screen"
          >
            <img
              src={item.image}
              alt={item.text}
              className="absolute left-0 top-0 right-0 bottom-0 w-full h-full object-cover"
            />
            <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-row justify-center p-4 bg-black bg-opacity-50 text-center">
              {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between mx-10">
                <div>
                  <p className="w-full text-white md:text-4xl text-2xl uppercase font-extrabold mb-2">
                    {item.text}
                  </p>
                  <p className="w-full text-gray-100 md:text-xl text-sm">
                    {item.text1}
                  </p>
                 
                </div>
              </div> */}
            </div>
           
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
