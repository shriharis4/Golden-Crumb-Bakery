import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsCartOpen(false)} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b-2 border-[#FFE066] bg-[#4A2C2A]">
          <h2 className="text-xl font-Fustat font-bold text-white">
            Your Cart ({getCartCount()})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-white hover:text-[#FFE066] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#FFE066] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🧁</span>
              </div>
              <p className="text-[#4A2C2A]/70 mb-4">Your cart is empty</p>
              <Link
                to="/cakes"
                onClick={() => setIsCartOpen(false)}
                className="text-[#8B5E3C] hover:text-[#4A2C2A] font-semibold border-b-2 border-[#8B5E3C] hover:border-[#4A2C2A]"
              >
                Browse Our Cakes →
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 p-4 bg-[#FFF8DC] rounded-xl border-2 border-[#FFE066]">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = '/img/chocolate-truffle-delight.jpg'; }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#4A2C2A] truncate">{item.title}</h3>
                    <p className="text-[#8B5E3C] font-bold">{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#FFE066] transition-colors border border-[#FFE066]"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#FFE066] transition-colors border border-[#FFE066]"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t-2 border-[#FFE066] p-6 bg-[#FFF8DC]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-[#4A2C2A]">Subtotal</span>
              <span className="text-2xl font-bold text-[#4A2C2A]">${getCartTotal().toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full bg-[#4A2C2A] text-white text-center px-6 py-4 rounded-xl text-lg font-semibold hover:bg-[#3a1f1d] transition-all shadow-lg hover:shadow-xl border-2 border-[#4A2C2A]"
            >
              Proceed to Checkout
            </Link>
            <p className="text-center text-[#4A2C2A]/60 text-sm mt-3">
              Free delivery on orders over $50
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;