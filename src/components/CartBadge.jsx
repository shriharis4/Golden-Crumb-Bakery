import { useCart } from "../context/CartContext";

const CartBadge = () => {
  const { getCartCount, setIsCartOpen } = useCart();
  const count = getCartCount();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative bg-[#4A2C2A] text-white px-4 py-2 rounded-xl hover:bg-[#3a1f1d] transition-all border-2 border-[#4A2C2A] flex items-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5m0 0l2.5 10h9l2.5-10M7 13l-2 5h12" />
      </svg>
      <span className="hidden sm:inline">Cart</span>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
          {count}
        </span>
      )}
    </button>
  );
};

export default CartBadge;