// Food images
import sateAyam from '@/assets/food/sate-ayam.jpg';
import bakso from '@/assets/food/bakso.jpg';
import mieAyam from '@/assets/food/mie-ayam.jpg';
import esCendol from '@/assets/food/es-cendol.jpg';
import esDawet from '@/assets/food/es-dawet.jpg';
import carbonara from '@/assets/food/carbonara.jpg';
import pizzaMargherita from '@/assets/food/pizza-margherita.jpg';
import kungPao from '@/assets/food/kung-pao.jpg';
import dimSum from '@/assets/food/dim-sum.jpg';
import nasiGoreng from '@/assets/food/nasi-goreng.jpg';
import rendang from '@/assets/food/rendang.jpg';
import tiramisu from '@/assets/food/tiramisu.jpg';
import pekingDuck from '@/assets/food/peking-duck.jpg';
import gadoGado from '@/assets/food/gado-gado.jpg';
import bruschetta from '@/assets/food/bruschetta.jpg';
import esTeler from '@/assets/food/es-teler.jpg';
import friedRice from '@/assets/food/fried-rice.jpg';
import lasagna from '@/assets/food/lasagna.jpg';
import sotoAyam from '@/assets/food/soto-ayam.jpg';
import sweetSourPork from '@/assets/food/sweet-sour-pork.jpg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
  spicy?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  image: string;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: 'warung-nusantara',
    name: 'Warung Nusantara',
    cuisine: 'Indonesian',
    description: 'Authentic Indonesian cuisine featuring traditional recipes passed down through generations. Experience the rich flavors of the archipelago with our carefully crafted dishes.',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 2.50,
    minOrder: 15,
    image: nasiGoreng,
    menu: [
      {
        id: 'sate-ayam',
        name: 'Sate Ayam',
        description: 'Tender grilled chicken skewers marinated in aromatic spices, served with rich peanut sauce, rice cakes, and fresh cucumber. A beloved Indonesian street food classic.',
        price: 12.99,
        image: sateAyam,
        category: 'Main Course',
        popular: true
      },
      {
        id: 'bakso',
        name: 'Bakso',
        description: 'Hearty Indonesian meatball soup featuring hand-rolled beef meatballs in savory clear broth, served with rice noodles, bok choy, and crispy fried shallots.',
        price: 10.99,
        image: bakso,
        category: 'Soup',
        popular: true
      },
      {
        id: 'mie-ayam',
        name: 'Mie Ayam',
        description: 'Silky egg noodles topped with savory minced chicken, wontons, and bok choy, dressed in sweet soy sauce. A comforting Indonesian noodle favorite.',
        price: 9.99,
        image: mieAyam,
        category: 'Noodles'
      },
      {
        id: 'nasi-goreng',
        name: 'Nasi Goreng',
        description: 'Fragrant Indonesian fried rice wok-tossed with sweet soy sauce, topped with a sunny-side-up egg, served with prawn crackers and chicken satay.',
        price: 13.99,
        image: nasiGoreng,
        category: 'Main Course',
        popular: true
      },
      {
        id: 'rendang',
        name: 'Beef Rendang',
        description: 'World-famous slow-cooked beef in rich coconut milk and aromatic spices until tender and caramelized. Served with steamed jasmine rice.',
        price: 16.99,
        image: rendang,
        category: 'Main Course',
        popular: true,
        spicy: true
      },
      {
        id: 'gado-gado',
        name: 'Gado Gado',
        description: 'Fresh Indonesian salad with blanched vegetables, tofu, tempeh, and hard-boiled eggs, dressed in creamy peanut sauce with prawn crackers.',
        price: 11.99,
        image: gadoGado,
        category: 'Salad'
      },
      {
        id: 'soto-ayam',
        name: 'Soto Ayam',
        description: 'Aromatic yellow chicken soup with turmeric-infused broth, shredded chicken, vermicelli noodles, and topped with fried shallots and hard-boiled egg.',
        price: 10.99,
        image: sotoAyam,
        category: 'Soup'
      },
      {
        id: 'es-cendol',
        name: 'Es Cendol',
        description: 'Refreshing Indonesian iced dessert with green rice flour jelly droplets swimming in creamy coconut milk and sweet palm sugar syrup.',
        price: 5.99,
        image: esCendol,
        category: 'Beverages',
        popular: true
      },
      {
        id: 'es-dawet',
        name: 'Es Dawet',
        description: 'Traditional Javanese iced drink featuring chewy green droplets in sweet coconut milk with palm sugar. A perfect refresher on hot days.',
        price: 5.49,
        image: esDawet,
        category: 'Beverages'
      },
      {
        id: 'es-teler',
        name: 'Es Teler',
        description: 'Tropical fruit cocktail dessert with fresh avocado, jackfruit, and young coconut meat in sweetened condensed milk over crushed ice.',
        price: 6.99,
        image: esTeler,
        category: 'Beverages',
        popular: true
      }
    ]
  },
  {
    id: 'bella-italia',
    name: 'Bella Italia',
    cuisine: 'Italian',
    description: 'Experience authentic Italian flavors with our handcrafted pasta, wood-fired pizzas, and classic desserts made with imported ingredients from Italy.',
    rating: 4.7,
    deliveryTime: '30-40 min',
    deliveryFee: 3.00,
    minOrder: 20,
    image: pizzaMargherita,
    menu: [
      {
        id: 'carbonara',
        name: 'Spaghetti Carbonara',
        description: 'Classic Roman pasta with silky egg sauce, crispy pancetta, aged Pecorino Romano, and freshly cracked black pepper. Made the traditional way.',
        price: 16.99,
        image: carbonara,
        category: 'Pasta',
        popular: true
      },
      {
        id: 'pizza-margherita',
        name: 'Pizza Margherita',
        description: 'Wood-fired Neapolitan pizza with San Marzano tomato sauce, fresh buffalo mozzarella, fragrant basil leaves, and extra virgin olive oil.',
        price: 14.99,
        image: pizzaMargherita,
        category: 'Pizza',
        popular: true
      },
      {
        id: 'lasagna',
        name: 'Lasagna Bolognese',
        description: 'Layers of fresh pasta sheets with slow-cooked beef ragù, creamy béchamel sauce, and melted Parmigiano-Reggiano. Baked to golden perfection.',
        price: 17.99,
        image: lasagna,
        category: 'Pasta',
        popular: true
      },
      {
        id: 'bruschetta',
        name: 'Bruschetta al Pomodoro',
        description: 'Toasted rustic bread topped with diced ripe tomatoes, fresh basil, garlic, extra virgin olive oil, and aged balsamic glaze.',
        price: 8.99,
        image: bruschetta,
        category: 'Appetizers'
      },
      {
        id: 'tiramisu',
        name: 'Tiramisu',
        description: 'Iconic Italian dessert with espresso-soaked ladyfingers layered with mascarpone cream, dusted with premium cocoa powder.',
        price: 8.99,
        image: tiramisu,
        category: 'Desserts',
        popular: true
      }
    ]
  },
  {
    id: 'golden-dragon',
    name: 'Golden Dragon',
    cuisine: 'Chinese',
    description: 'Premium Chinese cuisine featuring traditional Cantonese and Szechuan dishes. Our chefs bring decades of experience to every dish.',
    rating: 4.6,
    deliveryTime: '25-35 min',
    deliveryFee: 2.50,
    minOrder: 18,
    image: dimSum,
    menu: [
      {
        id: 'kung-pao',
        name: 'Kung Pao Chicken',
        description: 'Szechuan classic with tender chicken pieces wok-fried with roasted peanuts, dried chilies, and vegetables in a savory spicy sauce.',
        price: 14.99,
        image: kungPao,
        category: 'Main Course',
        popular: true,
        spicy: true
      },
      {
        id: 'dim-sum',
        name: 'Dim Sum Platter',
        description: 'Assortment of handcrafted dumplings including har gow shrimp dumplings and siu mai pork dumplings, steamed in bamboo baskets.',
        price: 16.99,
        image: dimSum,
        category: 'Appetizers',
        popular: true
      },
      {
        id: 'peking-duck',
        name: 'Peking Duck',
        description: 'Crispy roasted duck with lacquered skin, served with thin pancakes, hoisin sauce, sliced scallions, and cucumber.',
        price: 32.99,
        image: pekingDuck,
        category: 'Main Course',
        popular: true
      },
      {
        id: 'fried-rice',
        name: 'Yang Zhou Fried Rice',
        description: 'Classic Cantonese fried rice with prawns, BBQ pork, egg, and vegetables, wok-tossed over high heat for that signature smoky flavor.',
        price: 12.99,
        image: friedRice,
        category: 'Rice'
      },
      {
        id: 'sweet-sour-pork',
        name: 'Sweet & Sour Pork',
        description: 'Crispy battered pork pieces tossed with pineapple chunks and bell peppers in a tangy sweet and sour sauce.',
        price: 13.99,
        image: sweetSourPork,
        category: 'Main Course'
      }
    ]
  }
];

export const categories = [
  { id: 'all', name: 'All Cuisines', icon: '🍽️' },
  { id: 'indonesian', name: 'Indonesian', icon: '🇮🇩' },
  { id: 'italian', name: 'Italian', icon: '🇮🇹' },
  { id: 'chinese', name: 'Chinese', icon: '🇨🇳' }
];

export const getRestaurantById = (id: string) => {
  return restaurants.find(r => r.id === id);
};

export const getMenuItemById = (restaurantId: string, itemId: string) => {
  const restaurant = getRestaurantById(restaurantId);
  return restaurant?.menu.find(item => item.id === itemId);
};
