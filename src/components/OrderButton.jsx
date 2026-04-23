import { Link } from 'react-router-dom';

const OrderButton = ({ to = '/custom', className = '', children }) => {
  return (
    <Link 
      to={to} 
      className={`inline-flex items-center gap-2 bg-[#8B5E3C] text-white px-4 py-2 rounded-xl hover:bg-[#4A2C2A] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 border-2 border-[#8B5E3C] hover:border-[#4A2C2A] ${className}`}
    >
      {children || 'Order Now'}
    </Link>
  );
};

export default OrderButton;