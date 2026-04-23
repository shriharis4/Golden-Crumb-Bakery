export const fallbackImage = "/img/chocolate-truffle-delight.jpg";

export const getImageByTitle = (title) => {
  if (!title) return fallbackImage;
  
  const imageMapping = {
    'Chocolate Truffle Delight': '/img/chocolate-truffle-delight.jpg',
    'Strawberry Cream Dream': '/img/strawberry-cream-dream.jpg',
    'Rainbow Celebration Cake': '/img/rainbow-celebration-cake.jpg',
    'Pineapple Fresh Cake': '/img/pineapple-fresh-cake.jpg',
    'Red Velvet Royale': '/img/red-velvet-royale.jpg',
    'Blueberry Cheesecake': '/img/blueberry-cheesecake.jpg',
    'Royal White Wedding': '/img/royal-white-wedding.jpg',
    'Rose Gold Elegance': '/img/rose-gold-elegance.jpg',
    'Floral Cascade Wedding': '/img/floral-cascade-wedding.jpg',
    'Pearl White Wedding': '/img/pearl-white-wedding.jpg',
    'Photo Print Cake': '/img/photo-print-cake.jpg',
    'Theme Designer Cake': '/img/theme-designer-cake.jpg',
    'Black Forest Special': '/img/black-forest-special.jpg',
    'Butterscotch Caramel': '/img/butterscotch-caramel.jpg',
    'Vanilla Butter Cupcakes': '/img/vanilla-butter-cupcakes.jpg',
    'Chocolate Truffle Cupcakes': '/img/chocolate-truffle-cupcakes.jpg',
    'Red Velvet Cupcakes': '/img/red-velvet-cupcakes.jpg',
    'Strawberry Cupcakes': '/img/strawberry-cupcakes.jpg',
    'Chocolate Delight Cake': '/img/chocolate-delight-cake.jpg',
    'Elegant White Wedding': '/img/elegant-white-wedding.jpg',
    'Designer Custom Cake': '/img/designer-custom-cake.jpg',
    'Kids Party Special': '/img/kids-party-special.jpg',
    'Rose Gold Romance': '/img/rose-gold-romance.jpg',
    'Premium Chocolate Delight': '/img/premium-chocolate-delight.jpg',
    'Classic White Elegance': '/img/classic-white-elegance.jpg',
    'Butterscotch Bliss': '/img/butterscotch-bliss.jpg',
    'Chocolate Sprinkles Cake': '/img/chocolate-sprinkles-cake.jpg',
    'Floral Wedding Masterpiece': '/img/floral-wedding-masterpiece.jpg',
    'Mango Delight Cake': '/img/mango-delight-cake.jpg',
    'Coffee Walnut Cake': '/img/coffee-walnut-cake.jpg',
    'Fresh Fruit Cake': '/img/fresh-fruit-cake.jpg',
    'Designer Celebration Cake': '/img/designer-celebration-cake.jpg',
  };

  return imageMapping[title] || fallbackImage;
};

export const getCategoryImage = (categoryName) => {
  const categoryMapping = {
    'Birthday Cakes': '/img/chocolate-truffle-delight.jpg',
    'Wedding Cakes': '/img/royal-white-wedding.jpg',
    'Custom Cakes': '/img/theme-designer-cake.jpg',
    'Cupcakes': '/img/strawberry-cupcakes.jpg'
  };
  return categoryMapping[categoryName] || fallbackImage;
};
