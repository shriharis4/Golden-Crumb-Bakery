export const fallbackImage = "/public/img/chocolate-truffle-delight.jpg";

export const getImageByTitle = (title) => {
  if (!title) return fallbackImage;
  
  const imageMapping = {
    'Chocolate Truffle Delight': '/public/img/chocolate-truffle-delight.jpg',
    'Strawberry Cream Dream': '/public/img/strawberry-cream-dream.jpg',
    'Rainbow Celebration Cake': '/public/img/rainbow-celebration-cake.jpg',
    'Pineapple Fresh Cake': '/public/img/pineapple-fresh-cake.jpg',
    'Red Velvet Royale': '/public/img/red-velvet-royale.jpg',
    'Blueberry Cheesecake': '/public/img/blueberry-cheesecake.jpg',
    'Royal White Wedding': '/public/img/royal-white-wedding.jpg',
    'Rose Gold Elegance': '/public/img/rose-gold-elegance.jpg',
    'Floral Cascade Wedding': '/public/img/floral-cascade-wedding.jpg',
    'Pearl White Wedding': '/public/img/pearl-white-wedding.jpg',
    'Photo Print Cake': '/public/img/photo-print-cake.jpg',
    'Theme Designer Cake': '/public/img/theme-designer-cake.jpg',
    'Black Forest Special': '/public/img/black-forest-special.jpg',
    'Butterscotch Caramel': '/public/img/butterscotch-caramel.jpg',
    'Vanilla Butter Cupcakes': '/public/img/vanilla-butter-cupcakes.jpg',
    'Chocolate Truffle Cupcakes': '/public/img/chocolate-truffle-cupcakes.jpg',
    'Red Velvet Cupcakes': '/public/img/red-velvet-cupcakes.jpg',
    'Strawberry Cupcakes': '/public/img/strawberry-cupcakes.jpg',
    'Chocolate Delight Cake': '/public/img/chocolate-delight-cake.jpg',
    'Elegant White Wedding': '/public/img/elegant-white-wedding.jpg',
    'Designer Custom Cake': '/public/img/designer-custom-cake.jpg',
    'Kids Party Special': '/public/img/kids-party-special.jpg',
    'Rose Gold Romance': '/public/img/rose-gold-romance.jpg',
    'Premium Chocolate Delight': '/public/img/premium-chocolate-delight.jpg',
    'Classic White Elegance': '/public/img/classic-white-elegance.jpg',
    'Butterscotch Bliss': '/public/img/butterscotch-bliss.jpg',
    'Chocolate Sprinkles Cake': '/public/img/chocolate-sprinkles-cake.jpg',
    'Floral Wedding Masterpiece': '/public/img/floral-wedding-masterpiece.jpg',
    'Mango Delight Cake': '/public/img/mango-delight-cake.jpg',
    'Coffee Walnut Cake': '/public/img/coffee-walnut-cake.jpg',
    'Fresh Fruit Cake': '/public/img/fresh-fruit-cake.jpg',
    'Designer Celebration Cake': '/public/img/designer-celebration-cake.jpg',
  };

  return imageMapping[title] || fallbackImage;
};

export const getCategoryImage = (categoryName) => {
  const categoryMapping = {
    'Birthday Cakes': '/public/img/chocolate-truffle-delight.jpg',
    'Wedding Cakes': '/public/img/royal-white-wedding.jpg',
    'Custom Cakes': '/public/img/theme-designer-cake.jpg',
    'Cupcakes': '/public/img/strawberry-cupcakes.jpg'
  };
  return categoryMapping[categoryName] || fallbackImage;
};
