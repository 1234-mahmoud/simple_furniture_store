import { createContext, useState } from "react";
import { furniture } from "../furniture";
export const CartContext = createContext();
export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [card] = useState(furniture);

  //-----------------------------------------------------------------------------------

  const showShoppingCart = () => {
    setShowCart(!showCart);
  };
  //-----------------------------------------------------------------------------------
  const incQuant = (p) => {
    const existingProduct = cart.find((item) => item.id === p.id);
    if (existingProduct) {
      setCart(
        cart.map(
          (item) =>
            item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
          //quantity:item.quantity + quantity ---> old quantity + new quantity
        )
      );
    } else {
      setCart([...cart, { ...p, quantity: 1 }]);
      //...p  ---> new product
      // setQuantity(1); // Reset quantity after adding to cart
    }
  };
  //-----------------------------------------------------------------------------------
  const decreaseQuant = (item) => {
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  //-----------------------------------------------------------------------------------

  const AddToCart = (p) => {
    const existingProduct = cart.find((item) => item.id === p.id);
    if (existingProduct) {
      setCart(cart.map((item) => (item.id === p.id ? { ...item,TotalPrice:item.quantity * item.price } : item)));
    } else {
      setCart([...cart, { ...p, quantity: 1 }]);
      //...p  ---> new product
    }
  };
  //-----------------------------------------------------------------------------------

  const deleteFromCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };
  //-----------------------------------------------------------------------------------
  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  //-----------------------------------------------------------------------------------

  const values = {
    card,
    cart,
    AddToCart,
    decreaseQuant,
    deleteFromCart,
    showCart,
    showShoppingCart,
    incQuant,
    getCartTotal
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
