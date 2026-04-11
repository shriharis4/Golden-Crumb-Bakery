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
    image: getImageByTitle("Chocolate Truffle Delight")
  },
  {
    id: 2,
    category: "Birthday Cakes",
    title: "Strawberry Cream Dream",
    price: "₹599",
    description: "Fresh strawberry layers with vanilla cream and white chocolate drizzle",
    image: getImageByTitle("Strawberry Cream Dream")
  },
  {
    id: 3,
    category: "Birthday Cakes",
    title: "Rainbow Celebration Cake",
    price: "₹799",
    description: "Colorful rainbow layers with premium buttercream and edible sparkles",
    image: getImageByTitle("Rainbow Celebration Cake")
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
    image: getImageByTitle("Royal White Wedding")
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
    image: getImageByTitle("Floral Cascade Wedding")
  },
  {
    id: 10,
    category: "Wedding Cakes",
    title: "Pearl White Wedding",
    price: "₹4,999",
    description: "Exquisite white cake adorned with edible pearls and cascading blooms",
    image: getImageByTitle("Pearl White Wedding")
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
    image: getImageByTitle("Theme Designer Cake")
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
    id: 15,
    category: "Cupcakes",
    title: "Vanilla Butter Cupcakes",
    price: "₹50",
    description: "Classic vanilla cupcakes with swirl buttercream frosting (per piece)",
    image: getImageByTitle("Vanilla Butter Cupcakes")
  },
  {
    id: 16,
    category: "Cupcakes",
    title: "Chocolate Truffle Cupcakes",
    price: "₹55",
    description: "Rich chocolate cupcakes with chocolate ganache topping (per piece)",
    image: getImageByTitle("Chocolate Truffle Cupcakes")
  },
  {
    id: 17,
    category: "Cupcakes",
    title: "Red Velvet Cupcakes",
    price: "₹55",
    description: "Classic red velvet with cream cheese frosting (per piece)",
    image: getImageByTitle("Red Velvet Cupcakes")
  },
  {
    id: 18,
    category: "Cupcakes",
    title: "Strawberry Cupcakes",
    price: "₹50",
    description: "Fresh strawberry cupcakes with strawberry cream topping (per piece)",
    image: getImageByTitle("Strawberry Cupcakes")
  }
];

export const galleryImages = [
  {
    id: 1,
    category: "birthday",
    title: "Chocolate Delight Cake",
    description: "Rich chocolate cake layered with smooth ganache",
    image: getImageByTitle("Chocolate Delight Cake")
  },
  {
    id: 2,
    category: "wedding",
    title: "Elegant White Wedding",
    description: "Classic three-tier wedding cake with delicate sugar flowers",
    image: getImageByTitle("Elegant White Wedding")
  },
  {
    id: 3,
    category: "custom",
    title: "Designer Custom Cake",
    description: "Artistically designed custom cake for unique celebrations",
    image: getImageByTitle("Designer Custom Cake")
  },
  {
    id: 4,
    category: "birthday",
    title: "Kids Party Special",
    description: "Colorful birthday cake with sprinkles and confetti for little celebrations",
    image: getImageByTitle("Kids Party Special")
  },
  {
    id: 5,
    category: "wedding",
    title: "Rose Gold Romance",
    description: "Luxurious rose gold themed wedding cake for modern couples",
    image: getImageByTitle("Rose Gold Romance")
  },
  {
    id: 6,
    category: "custom",
    title: "Black Forest Special",
    description: "Classic black forest with cherry and chocolate shavings",
    image: getImageByTitle("Black Forest Special")
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
