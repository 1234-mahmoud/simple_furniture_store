import React, { useContext } from "react";
import { CartContext } from "../context/AppContext";
export default function Card() {
  const { card, AddToCart,cart} = useContext(CartContext);

  return (
    <div className="container flex justify-center gap-3 flex-wrap p-3 ">
      {card.map((f) => (
        <div
          className="flex bg-blue-50 flex-col justify-center items-center sm:w-full md:w-[30%]"
          // style={{ width: "300px", height: "300px" }}
          key={f.id}
        >
          <img src={f.img} alt="" className="w-2/3 h-1/2 rounded-md" />
          <p className="text-center">{f.name}</p>
          <span>{f.price}$</span>
          <button
            onClick={() => AddToCart(f)}
            className="bg-blue-300 p-2 rounded-md hover:bg-blue-400"
            style={{display:cart.find((p)=>p.id===f.id)?'none':'block'}}
           
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}
