import { useState } from 'react';
import { flavors, cakeSizes } from '../data';
import ScrollAnimation from '../components/ScrollAnimation';

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
  const [showThankYou, setShowThankYou] = useState(false);

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

    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
    }, 1500);
  };

  if (showThankYou) {
    return (
      <section className="bg-gradient-to-b from-[#FFE066] to-[#FFF8DC] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#FFE066]">
              <div className="w-20 h-20 bg-[#FFE066] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#E6C442]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#4A2C2A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-Fustat font-bold text-[#4A2C2A] mb-4">Thank You!</h2>
              <p className="text-[#4A2C2A]/70 mb-8">We've received your custom order and will contact you within 24 hours to confirm the details.</p>
              <Link to="/" className="block mt-6 text-[#8B5E3C] hover:text-[#4A2C2A] font-semibold transition-colors border-b-2 border-[#8B5E3C] hover:border-[#4A2C2A] w-fit mx-auto">
                ← Return to Home
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-[#FFE066] to-[#FFF8DC] min-h-screen py-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <span className="inline-block bg-[#4A2C2A] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 border-2 border-[#FFE066]">
              Custom Orders
            </span>
            <h1 className="text-4xl md:text-5xl font-Fustat font-bold text-[#4A2C2A] mb-4">
              Design Your Dream Cake
            </h1>
            <p className="text-[#4A2C2A]/80 max-w-xl mx-auto">
              Tell us about your dream cake and we'll bring it to life! Fill the form below and we'll get back to you.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#FFE066]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#4A2C2A] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50 text-[#4A2C2A]"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#4A2C2A] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50 text-[#4A2C2A]"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#4A2C2A] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50 text-[#4A2C2A]"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="flavor" className="block text-sm font-semibold text-[#4A2C2A] mb-2">
                    Preferred Flavor *
                  </label>
                  <select
                    id="flavor"
                    name="flavor"
                    value={formData.flavor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50 text-[#4A2C2A]"
                    required
                  >
                    <option value="">Select a flavor</option>
                    {flavors.map(f => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="size" className="block text-sm font-semibold text-[#4A2C2A] mb-2">
                    Cake Size *
                  </label>
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50 text-[#4A2C2A]"
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
                <label htmlFor="designDescription" className="block text-sm font-semibold text-[#4A2C2A] mb-2">
                  Describe Your Design *
                </label>
                <textarea
                  id="designDescription"
                  name="designDescription"
                  value={formData.designDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50 text-[#4A2C2A] h-32"
                  placeholder="Describe your cake design, theme, colors, decorations, message on cake, etc."
                  required
                />
              </div>

              <div>
                <label htmlFor="referenceImage" className="block text-sm font-semibold text-[#4A2C2A] mb-2">
                  Reference Image (Optional)
                </label>
                <div className="border-2 border-dashed border-[#FFE066] rounded-xl p-8 text-center hover:border-[#8B5E3C] transition-colors cursor-pointer bg-[#FFF8DC]/30">
                  <input
                    type="file"
                    id="referenceImage"
                    name="referenceImage"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <label htmlFor="referenceImage" className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#8B5E3C] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[#4A2C2A]/70 text-base">
                      {formData.referenceImage || "Click to upload a reference image"}
                    </p>
                    <p className="text-[#4A2C2A]/50 text-sm mt-2">PNG, JPG up to 5MB</p>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4A2C2A] text-white px-8 py-5 rounded-2xl text-lg font-semibold hover:bg-[#3a1f1d] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 border-2 border-[#4A2C2A]"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Order'}
              </button>

              <p className="text-center text-[#4A2C2A]/60 text-sm">
                We'll contact you within 24 hours to confirm your custom order details
              </p>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CustomOrder;
