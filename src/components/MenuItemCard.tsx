import { Plus, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface MenuItemCardProps {
  item: MenuItem;
  restaurantId: string;
  restaurantName: string;
}

const MenuItemCard = ({ item, restaurantId, restaurantName }: MenuItemCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item, restaurantId, restaurantName);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <Card className="overflow-hidden food-card-hover group">
      <div className="relative h-40 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.popular && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
            Popular
          </Badge>
        )}
        {item.spicy && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            <Flame className="h-3 w-3 mr-1" />
            Spicy
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-base">{item.name}</h3>
          <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {item.description}
        </p>
        <Button
          onClick={handleAddToCart}
          className="w-full"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
