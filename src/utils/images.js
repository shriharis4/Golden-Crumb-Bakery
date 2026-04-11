const images = import.meta.glob('/src/img/*.{jpg,jpeg,png}', { eager: true });

const fallbackImage = '/src/img/chocolate-truffle-delight.jpg';

const imageMapping = {
  'Chocolate Truffle Delight': 'chocolate-truffle-delight.jpg',
  'Strawberry Cream Dream': 'strawberry-cream-dream.jpg',
  'Rainbow Celebration Cake': 'rainbow-celebration-cake.jpg',
  'Pineapple Fresh Cake': 'pineapple-fresh-cake.jpg',
  'Red Velvet Royale': 'red-velvet-royale.jpg',
  'Blueberry Cheesecake': 'blueberry-cheesecake.jpg',
  'Royal White Wedding': 'royal-white-wedding.jpg',
  'Rose Gold Elegance': 'rose-gold-elegance.jpg',
  'Floral Cascade Wedding': 'floral-cascade-wedding.jpg',
  'Pearl White Wedding': 'pearl-white-wedding.jpg',
  'Photo Print Cake': 'photo-print-cake.jpg',
  'Theme Designer Cake': 'theme-designer-cake.jpg',
  'Black Forest Special': 'black-forest-special.jpg',
  'Butterscotch Caramel': 'butterscotch-caramel.jpg',
  'Vanilla Butter Cupcakes': 'vanilla-butter-cupcakes.jpg',
  'Chocolate Truffle Cupcakes': 'chocolate-truffle-cupcakes.jpg',
  'Red Velvet Cupcakes': 'red-velvet-cupcakes.jpg',
  'Strawberry Cupcakes': 'strawberry-cupcakes.jpg',
  'Chocolate Delight Cake': 'chocolate-delight-cake.jpg',
  'Elegant White Wedding': 'elegant-white-wedding.jpg',
  'Designer Custom Cake': 'designer-custom-cake.jpg',
  'Kids Party Special': 'kids-party-special.jpg',
  'Rose Gold Romance': 'rose-gold-romance.jpg',
  'Premium Chocolate Delight': 'premium-chocolate-delight.jpg',
  'Classic White Elegance': 'classic-white-elegance.jpg',
  'Vanilla Cream Cake': 'vanilla-butter-cupcakes.jpg',
  'Butterscotch Bliss': 'butterscotch-bliss.jpg',
  'Chocolate Sprinkles Cake': 'chocolate-sprinkles-cake.jpg',
  'Floral Wedding Masterpiece': 'floral-wedding-masterpiece.jpg',
  'Mango Delight Cake': 'mango-delight-cake.jpg',
  'Coffee Walnut Cake': 'coffee-walnut-cake.jpg',
  'Fresh Fruit Cake': 'fresh-fruit-cake.jpg',
  'Designer Celebration Cake': 'designer-celebration-cake.jpg',
};

const categoryMapping = {
  'Birthday Cakes': 'chocolate-truffle-delight.jpg',
  'Wedding Cakes': 'royal-white-wedding.jpg',
  'Custom Cakes': 'theme-designer-cake.jpg',
  'Cupcakes': 'strawberry-cupcakes.jpg'
};

export const getImageByTitle = (title) => {
  if (!title) return fallbackImage;

  const imageName = imageMapping[title];
  if (!imageName) {
    const formatted = title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");

    const match = Object.keys(images).find((path) => {
      const fileName = path.split('/').pop().replace(/\.(jpg|jpeg|png)$/i, '');
      return fileName.includes(formatted) || formatted.includes(fileName);
    });

    return match ? images[match].default : fallbackImage;
  }

  const match = Object.keys(images).find((path) =>
    path.includes(imageName.replace('.jpg', ''))
  );

  return match ? images[match].default : fallbackImage;
};

export const getCategoryImage = (categoryName) => {
  const imageName = categoryMapping[categoryName];
  if (!imageName) return fallbackImage;

  const match = Object.keys(images).find((path) =>
    path.includes(imageName.replace('.jpg', ''))
  );

  return match ? images[match].default : fallbackImage;
};

export { fallbackImage };
