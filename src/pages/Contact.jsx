import { useState } from 'react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../data';
import ScrollAnimation from '../components/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  if (showThankYou) {
    return (
      <section className="bg-gradient-to-b from-[#FFE066] to-[#FFF8DC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <div className="bg-white rounded-3xl p-12 shadow-xl max-w-md mx-auto border-2 border-[#FFE066]">
              <div className="w-20 h-20 bg-[#FFE066] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#E6C442]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#4A2C2A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-Fustat font-bold text-[#4A2C2A] mb-4">Thank You!</h2>
              <p className="text-[#4A2C2A]/70 mb-8">We've received your message and will get back to you shortly.</p>
              <Link to="/cakes" className="mx-auto text-lg px-8 py-4">
                Browse Cakes
              </Link>
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
    <section className="bg-gradient-to-b from-[#FFE066] to-[#FFF8DC] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block bg-[#4A2C2A] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 border-2 border-[#FFE066]">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-Fustat font-bold text-[#4A2C2A] mb-4">
              Contact Us
            </h1>
            <p className="text-[#4A2C2A]/70 max-w-xl mx-auto">
              Have a question or want to place an order? We'd love to hear from you!
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollAnimation>
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#FFE066]">
                <h2 className="text-2xl font-Fustat font-bold text-[#4A2C2A] mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FFE066] rounded-2xl flex items-center justify-center border-2 border-[#E6C442]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4A2C2A]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#4A2C2A]">Phone</h3>
                      <p className="text-[#4A2C2A]/80">{businessInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FFE066] rounded-2xl flex items-center justify-center border-2 border-[#E6C442]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4A2C2A]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V0a2 2 0 012-2h12a2 2 0 012 2v8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#4A2C2A]">Email</h3>
                      <p className="text-[#4A2C2A]/80">{businessInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FFE066] rounded-2xl flex items-center justify-center border-2 border-[#E6C442]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4A2C2A]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#4A2C2A]">Address</h3>
                      <p className="text-[#4A2C2A]/80 whitespace-pre-line">{businessInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FFE066] rounded-2xl flex items-center justify-center border-2 border-[#E6C442]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4A2C2A]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#4A2C2A]">Working Hours</h3>
                      <p className="text-[#4A2C2A]/80">{businessInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-4 shadow-lg border-2 border-[#FFE066]">
                <div className="bg-[#FFE066]/30 rounded-2xl h-56 flex items-center justify-center text-[#4A2C2A]/60 border-2 border-dashed border-[#E6C442]">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-3 text-[#8B5E3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-lg font-semibold text-[#4A2C2A]">Find Us Here</p>
                    <p className="text-sm mt-1 text-[#4A2C2A]/70">Google Maps integration</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#FFE066]">
              <h2 className="text-2xl font-Fustat font-bold text-[#4A2C2A] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#4A2C2A] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#FFE066] rounded-xl focus:ring-2 focus:ring-[#8B5E3C] focus:border-transparent bg-[#FFF8DC]/50 text-[#4A2C2A] h-32"
                    placeholder="Tell us about your requirements..."
                    rows="4"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#4A2C2A] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#3a1f1d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 border-2 border-[#4A2C2A]"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <Link to="/cakes" className="flex-1 justify-center text-lg px-8 py-4">
                    Browse Cakes
                  </Link>
                </div>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
