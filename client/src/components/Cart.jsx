import React, { useContext, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const cartItemsCount = cartItems ? cartItems.length : 0;

  return (
    <div className="flex items-center ml-4 relative">
      <FaShoppingBasket
        size={25}
        onClick={() => navigate("/cart")}
        className="cursor-pointer text-primary"
      />
      
        <span className="absolute -top-3 -right-1 px-1 text-xs font-semibold bg-red text-white rounded-full w-4 h-4 text-center flex items-center justify-center">
          {cartItemsCount}
        </span>
     
    </div>
  );
};

export default Cart;
