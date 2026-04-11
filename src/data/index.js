import { getImageByTitle, getCategoryImage, fallbackImage } from '../utils/images';

export { fallbackImage };

export const cakeCategories = [
  "All",
  "Birthday Cakes",
  "Wedding Cakes",
  "Custom Cakes",
  "Cupcakes"
];

export const cakes = [
  {
    id: 1,
    category: "Birthday Cakes",
    title: "Chocolate Truffle Delight",
    price: "₹699",
    description: "Rich chocolate ganache cake with Belgian chocolate layers and cocoa dusting",
<<<<<<< HEAD
    image: getImageByTitle("Chocolate Truffle Delight")
=======
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 2,
    category: "Birthday Cakes",
    title: "Strawberry Cream Dream",
    price: "₹599",
    description: "Fresh strawberry layers with vanilla cream and white chocolate drizzle",
<<<<<<< HEAD
    image: getImageByTitle("Strawberry Cream Dream")
=======
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 3,
    category: "Birthday Cakes",
    title: "Rainbow Celebration Cake",
    price: "₹799",
    description: "Colorful rainbow layers with premium buttercream and edible sparkles",
<<<<<<< HEAD
    image: getImageByTitle("Rainbow Celebration Cake")
=======
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 4,
    category: "Birthday Cakes",
    title: "Pineapple Fresh Cake",
    price: "₹549",
    description: "Fresh pineapple chunks with light vanilla sponge and cream frosting",
    image: getImageByTitle("Pineapple Fresh Cake")
  },
  {
    id: 5,
    category: "Birthday Cakes",
    title: "Red Velvet Royale",
    price: "₹749",
    description: "Classic red velvet with cream cheese frosting and ruby red berries",
    image: getImageByTitle("Red Velvet Royale")
  },
  {
    id: 6,
    category: "Birthday Cakes",
    title: "Blueberry Cheesecake",
    price: "₹649",
    description: "Creamy cheesecake topped with fresh blueberries and berry compote",
    image: getImageByTitle("Blueberry Cheesecake")
  },
  {
    id: 7,
    category: "Wedding Cakes",
    title: "Royal White Wedding",
    price: "₹3,499",
    description: "Elegant three-tier white fondant cake with sugar flowers and gold accents",
<<<<<<< HEAD
    image: getImageByTitle("Royal White Wedding")
=======
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 8,
    category: "Wedding Cakes",
    title: "Rose Gold Elegance",
    price: "₹4,499",
    description: "Luxurious rose gold metallic finish with fresh rose arrangements",
    image: getImageByTitle("Rose Gold Elegance")
  },
  {
    id: 9,
    category: "Wedding Cakes",
    title: "Floral Cascade Wedding",
    price: "₹3,999",
    description: "Stunning cascade of fresh edible flowers on premium vanilla fondant",
<<<<<<< HEAD
    image: getImageByTitle("Floral Cascade Wedding")
=======
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 10,
    category: "Wedding Cakes",
    title: "Pearl White Wedding",
    price: "₹4,999",
    description: "Exquisite white cake adorned with edible pearls and cascading blooms",
<<<<<<< HEAD
    image: getImageByTitle("Pearl White Wedding")
=======
    image: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 11,
    category: "Custom Cakes",
    title: "Photo Print Cake",
    price: "₹899",
    description: "Custom edible photo printing on your choice of cake base and flavor",
    image: getImageByTitle("Photo Print Cake")
  },
  {
    id: 12,
    category: "Custom Cakes",
    title: "Theme Designer Cake",
    price: "₹999",
    description: "Custom themed cake for kids - characters, superheroes, cartoons and more",
<<<<<<< HEAD
    image: getImageByTitle("Theme Designer Cake")
=======
    image: "https://images.unsplash.com/photo-1599785209796-786432b228bc=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 13,
    category: "Custom Cakes",
    title: "Black Forest Special",
    price: "₹749",
    description: "Classic black forest with cherry liqueur, chocolate shavings and cream",
    image: getImageByTitle("Black Forest Special")
  },
  {
    id: 14,
    category: "Custom Cakes",
    title: "Butterscotch Caramel",
    price: "₹699",
    description: "Rich butterscotch cake with caramel drizzle and crunchy nuts",
    image: getImageByTitle("Butterscotch Caramel")
  },
  {
export const cakeCategories = [
  "All",
  "Birthday Cakes",
  "Wedding Cakes",
  "Custom Cakes",
  "Cupcakes"
];

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=450&fit=crop";

export const cakes = [
  {
    id: 1,
    category: "Birthday Cakes",
    title: "Chocolate Truffle Delight",
    price: "₹699",
    description: "Rich chocolate ganache cake",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=450&fit=crop"
  },
  {
    id: 2,
    category: "Birthday Cakes",
    title: "Strawberry Cream Dream",
    price: "₹599",
    description: "Fresh strawberry cream cake",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=450&fit=crop"
  },
  {
    id: 3,
    category: "Birthday Cakes",
    title: "Rainbow Celebration Cake",
    price: "₹799",
    description: "Colorful layered rainbow cake",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&h=450&fit=crop"
  },
  {
    id: 4,
    category: "Birthday Cakes",
    title: "Pineapple Fresh Cake",
    price: "₹549",
    description: "Fresh pineapple cream cake",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=450&fit=crop"
  },
  {
    id: 5,
    category: "Birthday Cakes",
    title: "Red Velvet Royale",
    price: "₹749",
    description: "Classic red velvet cake",
    image:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=450&fit=crop"
  },
  {
    id: 6,
    category: "Birthday Cakes",
    title: "Blueberry Cheesecake",
    price: "₹649",
    description: "Creamy blueberry cheesecake",
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=450&fit=crop"
  },
  {
    id: 7,
    category: "Wedding Cakes",
    title: "Royal White Wedding",
    price: "₹3499",
    description: "Elegant white wedding cake",
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=450&fit=crop"
  },
  {
    id: 8,
    category: "Wedding Cakes",
    title: "Rose Gold Elegance",
    price: "₹4499",
    description: "Rose gold themed cake",
    image:
      "https://images.unsplash.com/photo-1563729768601-d8cdc1395b97?w=600&h=450&fit=crop"
  },
  {
    id: 9,
    category: "Wedding Cakes",
    title: "Floral Cascade Wedding",
    price: "₹3999",
    description: "Floral cascade wedding cake",
    image:
      "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=600&h=450&fit=crop"
  },
  {
    id: 10,
    category: "Wedding Cakes",
    title: "Pearl White Wedding",
    price: "₹4999",
    description: "Pearl decorated wedding cake",
    image:
      "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?w=600&h=450&fit=crop"
  },
  {
    id: 11,
    category: "Custom Cakes",
    title: "Photo Print Cake",
    price: "₹899",
    description: "Custom photo cake",
    image:
      "https://images.unsplash.com/photo-1563729768601-d8cdc1395b97?w=600&h=450&fit=crop"
  },
  {
    id: 12,
    category: "Custom Cakes",
    title: "Theme Designer Cake",
    price: "₹999",
    description: "Creative designer cake",
    image:
      "https://images.unsplash.com/photo-1599785209796-786432b228bc?w=600&h=450&fit=crop"
  },
  {
    id: 13,
    category: "Custom Cakes",
    title: "Black Forest Special",
    price: "₹749",
    description: "Chocolate cherry cake",
    image:
      "https://images.unsplash.com/photo-1606890737304-7b7b26ee8c3e?w=600&h=450&fit=crop"
  },
  {
    id: 14,
    category: "Custom Cakes",
    title: "Butterscotch Caramel",
    price: "₹699",
    description: "Butterscotch caramel cake",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=450&fit=crop"
  },
  {
    id: 15,
    category: "Cupcakes",
    title: "Vanilla Butter Cupcakes",
    price: "₹50",
<<<<<<< HEAD
    description: "Classic vanilla cupcakes with swirl buttercream frosting (per piece)",
    image: getImageByTitle("Vanilla Butter Cupcakes")
=======
    description: "Vanilla cupcakes",
    image:
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=450&fit=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 16,
    category: "Cupcakes",
    title: "Chocolate Truffle Cupcakes",
    price: "₹55",
<<<<<<< HEAD
    description: "Rich chocolate cupcakes with chocolate ganache topping (per piece)",
    image: getImageByTitle("Chocolate Truffle Cupcakes")
=======
    description: "Chocolate cupcakes",
    image:
      "https://images.unsplash.com/photo-1486427944544-d2c6128a44c1?w=600&h=450&fit=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 17,
    category: "Cupcakes",
    title: "Red Velvet Cupcakes",
    price: "₹55",
<<<<<<< HEAD
    description: "Classic red velvet with cream cheese frosting (per piece)",
    image: getImageByTitle("Red Velvet Cupcakes")
=======
    description: "Red velvet cupcakes",
    image:
      "https://images.unsplash.com/photo-1605296830714-7c5287d0eb38?w=600&h=450&fit=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 18,
    category: "Cupcakes",
    title: "Strawberry Cupcakes",
    price: "₹50",
<<<<<<< HEAD
    description: "Fresh strawberry cupcakes with strawberry cream topping (per piece)",
    image: getImageByTitle("Strawberry Cupcakes")
=======
    description: "Strawberry cupcakes",
    image:
      "https://images.unsplash.com/photo-1617305855058-336d24456869?w=600&h=450&fit=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  }
];

export const galleryImages = [
  {
    id: 1,
    category: "birthday",
    title: "Chocolate Delight Cake",
<<<<<<< HEAD
    description: "Rich chocolate cake layered with smooth ganache",
    image: getImageByTitle("Chocolate Delight Cake")
=======
    description: "Chocolate ganache cake",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=450&fit=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 2,
    category: "wedding",
<<<<<<< HEAD
    title: "Elegant White Wedding",
    description: "Classic three-tier wedding cake with delicate sugar flowers",
    image: getImageByTitle("Elegant White Wedding")
=======
    title: "Elegant Wedding Cake",
    description: "Classic wedding cake",
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=450&fit=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 3,
    category: "custom",
<<<<<<< HEAD
    title: "Designer Custom Cake",
    description: "Artistically designed custom cake for unique celebrations",
    image: getImageByTitle("Designer Custom Cake")
=======
    title: "Designer Cake",
    description: "Custom designer cake",
    image:
      "https://images.unsplash.com/photo-1599785209796-786432b228bc?w=600&h=450&fit=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 4,
    category: "birthday",
<<<<<<< HEAD
    title: "Kids Party Special",
    description: "Colorful birthday cake with sprinkles and confetti for little celebrations",
    image: getImageByTitle("Kids Party Special")
=======
    title: "Kids Party Cake",
    description: "Colorful birthday cake",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&h=450&fit=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 5,
    category: "wedding",
    title: "Rose Gold Romance",
<<<<<<< HEAD
    description: "Luxurious rose gold themed wedding cake for modern couples",
    image: getImageByTitle("Rose Gold Romance")
=======
    description: "Floral decorated cake",
    image:
      "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=600&h=450&fit=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 6,
    category: "custom",
<<<<<<< HEAD
    title: "Black Forest Special",
    description: "Classic black forest with cherry and chocolate shavings",
    image: getImageByTitle("Black Forest Special")
=======
    title: "Black Forest Cake",
    description: "Chocolate cherry cake",
    image:
      "https://images.unsplash.com/photo-1606890737304-7b7b26ee8c3e?w=600&h=450&fit=crop"
>>>>>>> 05decc1bd1e99c3547690fdf4d5fef9646a7bb47
  },
  {
    id: 7,
    category: "birthday",
    title: "Premium Chocolate Delight",
    description: "Decadent chocolate cake with ganache and fresh berries",
    image: getImageByTitle("Premium Chocolate Delight")
  },
  {
    id: 8,
    category: "wedding",
    title: "Classic White Elegance",
    description: "Timeless white wedding cake with elegant floral decorations",
    image: getImageByTitle("Classic White Elegance")
  },
  {
    id: 9,
    category: "birthday",
    title: "Vanilla Cream Cake",
    description: "Soft vanilla cream cake with elegant finish",
    image: getImageByTitle("Vanilla Cream Cake")
  },
  {
    id: 10,
    category: "custom",
    title: "Butterscotch Bliss",
    description: "Rich butterscotch cake with caramel drizzle and nuts",
    image: getImageByTitle("Butterscotch Bliss")
  },
  {
    id: 11,
    category: "birthday",
    title: "Chocolate Sprinkles Cake",
    description: "Chocolate cake loaded with colorful sprinkles for fun celebrations",
    image: getImageByTitle("Chocolate Sprinkles Cake")
  },
  {
    id: 12,
    category: "wedding",
    title: "Floral Wedding Masterpiece",
    description: "Exquisite wedding cake adorned with fresh flowers and pearls",
    image: getImageByTitle("Floral Wedding Masterpiece")
  },
  {
    id: 13,
    category: "birthday",
    title: "Mango Delight Cake",
    description: "Fresh mango cake with mango cream and tropical fruit toppings",
    image: getImageByTitle("Mango Delight Cake")
  },
  {
    id: 14,
    category: "custom",
    title: "Coffee Walnut Cake",
    description: "Premium coffee cake with crunchy walnuts and coffee frosting",
    image: getImageByTitle("Coffee Walnut Cake")
  },
  {
    id: 15,
    category: "birthday",
    title: "Fresh Fruit Cake",
    description: "Fresh fruit cake topped with seasonal berries",
    image: getImageByTitle("Fresh Fruit Cake")
  },
  {
    id: 16,
    category: "wedding",
    title: "Designer Celebration Cake",
    description: "Elegant designer cake for weddings and special occasions",
    image: getImageByTitle("Designer Celebration Cake")
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "The best cake I've ever had! The chocolate truffle was absolutely divine. Will definitely order again!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Rahul Verma",
    rating: 5,
    text: "Ordered a custom birthday cake for my daughter. The design was exactly what we wanted. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Anjali Patel",
    rating: 5,
    text: "Excellent service and amazing cakes! The wedding cake was the highlight of our reception. Thank you Cake De Lite!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    name: "Vikram Singh",
    rating: 4,
    text: "Great variety of cupcakes! My kids loved them. Quick delivery and fresh products. Will order more!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

export const categories = [
  {
    id: 1,
    name: "Birthday Cakes",
    icon: "🎂",
    image: getCategoryImage("Birthday Cakes"),
    description: "Make your birthday unforgettable with our custom birthday cakes"
  },
  {
    id: 2,
    name: "Wedding Cakes",
    icon: "💒",
    image: getCategoryImage("Wedding Cakes"),
    description: "Elegant wedding cakes for your special day"
  },
  {
    id: 3,
    name: "Custom Cakes",
    icon: "🎨",
    image: getCategoryImage("Custom Cakes"),
    description: "Design your own unique cake with our custom cake service"
  },
  {
    id: 4,
    name: "Cupcakes",
    icon: "🧁",
    image: getCategoryImage("Cupcakes"),
    description: "Delicious cupcakes perfect for any occasion"
  }
];

export const flavors = [
  'Vanilla', 'Chocolate', 'Strawberry', 'Red Velvet', 'Butterscotch', 
  'Black Forest', 'Pineapple', 'Mango', 'Coffee', 'Lemon', 'Other'
];

export const cakeSizes = [
  'Half kg (Serves 4-6)', '1 kg (Serves 8-12)', '1.5 kg (Serves 15-20)', 
  '2 kg (Serves 25-30)', '2.5 kg (Serves 30-35)', '3 kg (Serves 40-45)', 'Custom Size'
];

export const businessInfo = {
  name: "Cake De Lite",
  phone: "+91 8088366098",
  email: "cakedelite@gmail.com",
  address: "Opp. KSRTC Bus Stand, Raichur, Karnataka 584101",
  hours: "Every Day: 8:00 AM - 9:00 PM"
};

export const WHATSAPP_NUMBER = "918088366098";
