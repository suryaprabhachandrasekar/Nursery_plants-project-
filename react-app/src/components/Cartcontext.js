import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
                
        toast.info("Increased quantity in cart", {
          position: "bottom-center",
          autoClose: 1000,
          theme: "colored"
        });
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        toast.success("Product added to cart!", {
          position: "bottom-center",
          autoClose: 1000,
          theme: "colored"
        });
        return [...prev, { ...item, quantity: 1 }];
      }
    });
   };
  

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(p => p.id !== id));
  };

  const increment = (id) => {
    setCartItems(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decrement = (id) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increment, decrement, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
