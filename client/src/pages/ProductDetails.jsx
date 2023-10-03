import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";
import { Layout } from "../components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          // `https://kalles-backend.onrender.com/api/products/${id}`,
          `/api/products/${id}`,
          { withCredentials: true }
        );
        setProduct(response.data.data);
        setCurrentImage(response.data.data.images[0]); // set the first image as current
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { name, description, price, images } = product;

  const handleThumbnailClick = (index) => {
    setCurrentImage(images[index]); // set the clicked image as current
  };

  const handlePrevClick = () => {
    if (product && product.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextClick = () => {
    if (product && product.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    if (product && product.images) {
      setCurrentImage(product.images[currentImageIndex]);
    }
  }, [currentImageIndex]);

  const handleAddToCart = () => {
    addToCart(product);
    toast("Product added to cart", {
      position: "top-right",
      autoClose: 500,
    });
    // console.log("Product added to cart:", product);
  };

  return (
    <Layout>
      <div className="container mx-auto p-10 py-40">
        <div className="title_head mb-4">
          <h2 className="md:text-2xl text-xl font-bold text-center text-title capitalize">
            Products Details
          </h2>
          <p class="text-center capitalize text-subTitle">
            We provide full service at every step.
          </p>
        </div>
        <div className="flex justify-between items-center gap-5 mx-auto bg-slate-100 rounded-lg shadow-xl p-8">
          <div className="max-w-xl">
            <div className="flex justify-center relative border p-5">
              {currentImage && (
                <img
                  // src={`https://kalles-backend.onrender.com/public/images/${currentImage}`}
                  src={`http://localhost:5175/public/images/${currentImage}`}
                  alt={name}
                  className="w-full max-h-96 object-cover mb-4"
                />
              )}
              <FaChevronLeft
                className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 bg-indigo-100 m-2 p-2 rounded-full hover:text-indigo-500 hover:bg-gray-300 transition-colors duration-300"
                onClick={handlePrevClick}
                size={30}
              />
              <FaChevronRight
                className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 bg-indigo-100 m-2 p-2 rounded-full hover:text-indigo-500 hover:bg-gray-300 transition-colors duration-300"
                onClick={handleNextClick}
                size={30}
              />
            </div>
            <div className="grid grid-cols-4 gap-4 my-4 border p-4">
              {product &&
                product.images &&
                product.images.map((thumbnail, index) => (
                  <img
                    key={index}
                    // src={`https://kalles-backend.onrender.com/public/images/${thumbnail}`}
                    src={`http://localhost:5175/public/images/${thumbnail}`}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-16 object-cover cursor-pointer transition-opacity duration-300 hover:opacity-90"
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
            </div>
          </div>
          <div className="">
            <span className="text-sm font-medium capitalize text-indigo-500 bg-indigo-100 p-1 py-1 px-2 last:mr-0 mr-1 mb-4">
              {name}
            </span>
            <p className="text-title text-lg capitalize break-words font-bold mb-2">
              {description}
            </p>

            <div className="flex justify-between items-center">
              <p className="text-lg text-red font-bold border-t mt-2">
                &#x20A6;{price?.toLocaleString()}
              </p>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-primary hover:bg-blue text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
