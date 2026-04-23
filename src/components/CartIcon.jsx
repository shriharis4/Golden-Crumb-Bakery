import { useCart } from "../context/CartContext";

const CartIcon = () => {
  const { setIsCartOpen, getCartCount } = useCart();
  const count = getCartCount();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative bg-[#4A2C2A] text-white px-4 py-2 rounded-xl hover:bg-[#3a1f1d] transition-all hover:shadow-lg border-2 border-[#4A2C2A]"
    >
      <span className="hidden md:inline">Cart</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 4m12 4a2 2 0 100-4 2 2 0 000 4zm-9-2h9l2-4M5 21a1 1 0 112 0 1 1 0 01-2 0zm14 0a1 1 0 112 0 1 1 0 01-2 0z" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#FF4444] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </button>
  );
};

export default CartIcon;