import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem('goldencrumb_cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('goldencrumb_cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (cake, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === cake.id);
      if (existing) {
        return prev.map(item =>
          item.id === cake.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...cake, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cakeId) => {
    setCart(prev => prev.filter(item => item.id !== cakeId));
  };

  const updateQuantity = (cakeId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cakeId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === cakeId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    console.error("useCart must be used within CartProvider");
    return {
      cart: [],
      isCartOpen: false,
      setIsCartOpen: () => {},
      addToCart: () => {},
      removeFromCart: () => {},
      updateQuantity: () => {},
      clearCart: () => {},
      getCartTotal: () => 0,
      getCartCount: () => 0,
    };
  }

  return context;
};