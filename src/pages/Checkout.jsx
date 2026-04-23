import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import ScrollAnimation from '../components/ScrollAnimation';
import { generateOrderNumber } from '../utils/orderUtils';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = (e) => {
     e.preventDefault();
     setIsSubmitting(true);

     setTimeout(() => {
       setIsSubmitting(false);
       setOrderNumber(generateOrderNumber());
       setShowConfirmation(true);
       clearCart();
     }, 2000);
   };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  if (cart.length === 0 && !showConfirmation) {
    return (
      <section className="bg-gradient-to-b from-[#FFE066] to-[#FFF8DC] py-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#FFE066]">
            <div className="w-20 h-20 bg-[#FFE066] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🧁</span>
            </div>
            <h2 className="text-2xl font-Fustat font-bold text-[#4A2C2A] mb-4">Your Cart is Empty</h2>
            <p className="text-[#4A2C2A]/70 mb-6">Add some delicious cakes to your cart first!</p>
            <Link to="/cakes" className="inline-block bg-[#4A2C2A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3a1f1d] transition-all">
              Browse Cakes
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (showConfirmation) {
    return (
      <section className="bg-gradient-to-b from-[#FFE066] to-[#FFF8DC] py-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <ScrollAnimation>
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#FFE066]">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-Fustat font-bold text-[#4A2C2A] mb-4">Order Confirmed!</h2>
              <p className="text-[#4A2C2A]/70 mb-6">
                Thank you for your order! We'll prepare your cakes fresh and deliver them within 24 hours.
              </p>
               <p className="text-lg font-semibold text-[#8B5E3C] mb-6">
                 Order #GC{orderNumber}
               </p>
              <Link to="/" className="inline-block bg-[#4A2C2A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3a1f1d] transition-all">
                Back to Home
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-[#FFE066] to-[#FFF8DC] py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollAnimation>
          <div className="text-center mb-10">
            <h1 className="text-4xl font-Fustat font-bold text-[#4A2C2A] mb-2">Checkout</h1>
            <p className="text-[#4A2C2A]/70">Complete your order securely</p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <ScrollAnimation className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#FFE066] space-y-6">
              <h2 className="text-xl font-Fustat font-bold text-[#4A2C2A] pb-4 border-b-2 border-[#FFE066]">
                Delivery Information
              </h2>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="John Smith" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">Street Address *</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="123 Maple Street" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">City *</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} required
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="Brooklyn" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">State *</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} required
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="NY" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">ZIP Code *</label>
                  <input type="text" name="zip" value={formData.zip} onChange={handleChange} required
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="11201" />
                </div>
              </div>

              <h2 className="text-xl font-Fustat font-bold text-[#4A2C2A] py-4 border-t-2 border-b-2 border-[#FFE066]">
                Payment Details
              </h2>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">Card Number *</label>
                  <input type="text" name="cardNumber" value={formData.cardNumber} onChange={(e) => {
                    e.target.value = formatCardNumber(e.target.value);
                    handleChange(e);
                  }} required maxLength={19}
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="4242 4242 4242 4242" />
                </div>
                
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">Name on Card *</label>
                  <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} required
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="JOHN SMITH" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">Expiry Date *</label>
                  <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} required
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="MM/YY" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#4A2C2A] mb-2">CVV *</label>
                  <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required maxLength={4}
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50"
                    placeholder="123" />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full bg-[#4A2C2A] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#3a1f1d] transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 border-2 border-[#4A2C2A]">
                {isSubmitting ? 'Processing...' : `Pay $${getCartTotal().toFixed(2)}`}
              </button>

              <p className="text-center text-[#4A2C2A]/60 text-xs flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure payment - Your data is protected
              </p>
            </form>
          </ScrollAnimation>

          <ScrollAnimation delay={200} className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[#FFE066] sticky top-24">
              <h2 className="text-xl font-Fustat font-bold text-[#4A2C2A] pb-4 border-b-2 border-[#FFE066]">Order Summary</h2>
              
              <div className="space-y-4 mt-4 max-h-64 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.title} className="w-14 h-14 rounded-lg object-cover" onError={(e) => { e.target.src = '/img/chocolate-truffle-delight.jpg'; }} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#4A2C2A] text-sm truncate">{item.title}</h3>
                      <p className="text-[#8B5E3C] text-sm">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-[#4A2C2A]">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-[#FFE066] mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#4A2C2A]/70">Subtotal</span>
                  <span className="font-semibold">{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#4A2C2A]/70">Delivery</span>
                  <span className="font-semibold text-green-600">{getCartTotal() >= 50 ? 'FREE' : '$5.99'}</span>
                </div>
                <div className="flex justify-between text-lg pt-2 border-t border-[#FFE066]">
                  <span className="font-bold text-[#4A2C2A]">Total</span>
                  <span className="font-bold text-[#4A2C2A]">${(getCartTotal() + (getCartTotal() >= 50 ? 0 : 5.99)).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Checkout;