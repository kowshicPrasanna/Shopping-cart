import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      alert(`${product.title} already added to the cart!`);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setTotal(total + parseFloat(product.price)); // Use parseFloat
    }
  };

  const incrementQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    setTotal(total + parseFloat(updatedCart[index].price)); // Use parseFloat
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      setTotal(total - parseFloat(updatedCart[index].price)); // Use parseFloat
    } else {
      removeCart(updatedCart[index], index);
    }
  };

  const removeCart = (item, index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    setTotal(total - parseFloat(item.price) * item.quantity); // Use parseFloat
  };

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeCart, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
