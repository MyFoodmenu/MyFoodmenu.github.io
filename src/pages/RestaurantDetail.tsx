import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Truck, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import MenuItemCard from '@/components/MenuItemCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getRestaurantById } from '@/data/menuData';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = getRestaurantById(id || '');

  if (!restaurant) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Link to="/restaurants">
            <Button>Back to Restaurants</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Group menu items by category
  const menuByCategory = restaurant.menu.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof restaurant.menu>);

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <Link to="/restaurants">
              <Button variant="ghost" size="sm" className="text-background mb-4 hover:bg-background/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Restaurants
              </Button>
            </Link>
            <Badge className="mb-2">{restaurant.cuisine}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-background mb-2">
              {restaurant.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-background/80">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-secondary text-secondary" />
                <span className="font-medium">{restaurant.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="h-4 w-4" />
                <span>${restaurant.deliveryFee.toFixed(2)} delivery</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Min. ${restaurant.minOrder}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-muted-foreground max-w-3xl mb-12">
          {restaurant.description}
        </p>

        {/* Menu Sections */}
        {Object.entries(menuByCategory).map(([category, items]) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map(item => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  restaurantId={restaurant.id}
                  restaurantName={restaurant.name}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default RestaurantDetail;
