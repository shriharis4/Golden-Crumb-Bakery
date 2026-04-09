import { useState, useEffect, useRef } from 'react';
import { createWhatsAppLink } from '../utils/whatsapp';
import { flavors, cakeSizes } from '../data';

const ScrollAnimation = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    flavor: '',
    size: '',
    designDescription: '',
    referenceImage: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, referenceImage: e.target.files[0]?.name || null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hello Cake De Lite! I'd like to place a custom order:

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📧 Email: ${formData.email || 'Not provided'}
🧁 Flavor: ${formData.flavor}
📏 Size: ${formData.size}
🎨 Design: ${formData.designDescription}
📎 Reference: ${formData.referenceImage || 'None'}

Please confirm my order. Thank you!`;

    const whatsappLink = createWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
    setIsSubmitting(false);
  };

  return (
    <section className="bg-cream min-h-screen py-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary-yellow text-dark-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
              Custom Orders
            </span>
            <h1 className="text-4xl md:text-5xl font-Fustat font-bold text-dark-brown mb-4">
              Design Your Dream Cake
            </h1>
            <p className="text-dark-brown/80 max-w-xl mx-auto">
              Tell us about your dream cake and we'll bring it to life! Fill the form below and we'll get back to you.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-brown mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-yellow rounded-xl focus:ring-2 focus:ring-caramel-brown focus:border-transparent bg-cream/50"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-brown mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-yellow rounded-xl focus:ring-2 focus:ring-caramel-brown focus:border-transparent bg-cream/50"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-brown mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-yellow rounded-xl focus:ring-2 focus:ring-caramel-brown focus:border-transparent bg-cream/50"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="flavor" className="block text-sm font-medium text-dark-brown mb-2">
                    Preferred Flavor *
                  </label>
                  <select
                    id="flavor"
                    name="flavor"
                    value={formData.flavor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-yellow rounded-xl focus:ring-2 focus:ring-caramel-brown focus:border-transparent bg-cream/50"
                    required
                  >
                    <option value="">Select a flavor</option>
                    {flavors.map(f => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-dark-brown mb-2">
                    Cake Size *
                  </label>
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-yellow rounded-xl focus:ring-2 focus:ring-caramel-brown focus:border-transparent bg-cream/50"
                    required
                  >
                    <option value="">Select size</option>
                    {cakeSizes.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="designDescription" className="block text-sm font-medium text-dark-brown mb-2">
                  Describe Your Design *
                </label>
                <textarea
                  id="designDescription"
                  name="designDescription"
                  value={formData.designDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-yellow rounded-xl focus:ring-2 focus:ring-caramel-brown focus:border-transparent bg-cream/50 h-32"
                  placeholder="Describe your cake design, theme, colors, decorations, message on cake, etc."
                  required
                />
              </div>

              <div>
                <label htmlFor="referenceImage" className="block text-sm font-medium text-dark-brown mb-2">
                  Reference Image (Optional)
                </label>
                <div className="border-2 border-dashed border-secondary-yellow rounded-xl p-8 text-center hover:border-caramel-brown transition-colors cursor-pointer bg-cream/30">
                  <input
                    type="file"
                    id="referenceImage"
                    name="referenceImage"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <label htmlFor="referenceImage" className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-caramel-brown mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-dark-brown/70 text-base">
                      {formData.referenceImage || "Click to upload a reference image"}
                    </p>
                    <p className="text-dark-brown/50 text-sm mt-2">PNG, JPG up to 5MB</p>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-dark-brown text-white px-8 py-5 rounded-2xl text-lg font-medium hover:bg-caramel-brown transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50"
              >
                {isSubmitting ? 'Redirecting...' : 'Submit & Order via WhatsApp'}
              </button>

              <p className="text-center text-dark-brown/60 text-sm">
                After submitting, you'll be redirected to WhatsApp to confirm your order
              </p>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CustomOrder;