import React, { useContext } from "react";
import { CartContext } from "../context/AppContext";
import { createPortal } from "react-dom";

export default function Cart() {
  const { cart, decreaseQuant, deleteFromCart, showCart, incQuant } =
    useContext(CartContext);
  return createPortal(
    showCart && (
      <dialog
        open
        className="bg-black  absolute top-11 right-2 w-80 h-auto rounded-md my-6 mr-0 max-sm:mx-auto"
      >
        {cart.length <= 0 ? (
          <p className="text-center p-3 font-bold text-stone-50">
            the shopping Cart is empty
          </p>
        ) : (
          <div className="mx-5 my-1 rounded-md flex flex-wrap justify-center gap-3 ">
            {cart.map((p) => (
              <div
                className="flex bg-white flex-col justify-center items-center m-4 rounded-md"
                style={{ width: "300px", height: "300px" }}
                key={p.id}
              >
                <img src={p.img} alt="" className="w-2/3 h-1/2 rounded-md" />
                <p className="text-center">{p.name}</p>
                <span>{p.quantity * p.price}$</span>
                <div className="flex justify-between items-center px-8 w-full h-14">
                  <button
                    onClick={() => incQuant(p)}
                    className="bg-green-600 text-slate-50 font-bold w-10 h-10 rounded-full text-center"
                  >
                    +
                  </button>
                  <span>Quantity:{p.quantity}</span>
                  <button
                    onClick={() => decreaseQuant(p)}
                    className="bg-red-600 text-slate-50 font-bold w-10 h-10 rounded-full text-center"
                  >
                    -
                  </button>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button
                    onClick={() => deleteFromCart(p.id)}
                    className="bg-red-700 text-slate-50 font-bold w-3/4 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </dialog>
    ),
    document.getElementById("cart")
  );
}
