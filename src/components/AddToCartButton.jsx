import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

const AddToCartButton = ({ cake, quantity = 1, className = '', children, variant = 'default' }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(cake, quantity);
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleAddToCart}
        className={`bg-[#8B5E3C] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#4A2C2A] transition-all shadow-lg hover:shadow-xl ${className}`}
        title="Add to Cart"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-[#8B5E3C] text-white px-4 py-2 rounded-xl hover:bg-[#4A2C2A] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 border-2 border-[#8B5E3C] hover:border-[#4A2C2A] ${className}`}
    >
      {children || 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;