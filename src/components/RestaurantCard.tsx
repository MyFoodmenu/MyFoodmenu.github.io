import { Link } from 'react-router-dom';
import { Star, Clock, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Restaurant } from '@/data/menuData';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="overflow-hidden food-card-hover cursor-pointer group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            {restaurant.cuisine}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold mb-1">{restaurant.name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {restaurant.description}
          </p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-secondary-foreground">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="font-medium">{restaurant.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Truck className="h-4 w-4" />
              <span>${restaurant.deliveryFee.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
