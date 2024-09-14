import React, { useContext } from "react";
import { CartContext } from "../context/AppContext";
export default function Header() {
  const { cart, showShoppingCart, getCartTotal } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center p-4 bg-black">
      <div className="flex gap-2 items-center">
        <svg
          className="h-8 w-8 text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <line x1="3" y1="21" x2="21" y2="21" />{" "}
          <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />{" "}
          <path d="M5 21v-10.15" /> <path d="M19 21v-10.15" />{" "}
          <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
        </svg>
        <h1 className="text-white text-2xl uppercase max-sm:text-sm">online store</h1>
      </div>
      <div>
        <span className="text-white max-sm:text-sm "> Total Price: <strong>{getCartTotal()}$</strong></span>
      </div>
      <div className="relative">
        {/* ----------------------------------------------------------------------------------------- */}
        <div
          className="w-5 h-5 text-white font-bold text-center"
          style={{ position: "absolute", right: "0", top: "-15px" }}
        >
          {cart.length}
        </div>

        <svg
          className="h-8 w-8 text-white cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={showShoppingCart}
        >
          {" "}
          <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      </div>
    </div>
  );
}
