import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);
      settotalAmount(total);
    }
  });

  // update the count
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemCount(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setcart(newCart);
    } else {
      setcart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setcart(newCart);
  };

  const clearCart = () => {
    setcart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id !== id;
    });
    addToCart(cartItem, id);
  };
  const decreasedAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setcart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreasedAmount,
        itemCount,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
