import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurants, categories } from '@/data/menuData';
import heroBanner from '@/assets/hero-banner.jpg';

const Index = () => {
  const popularItems = restaurants.flatMap(r =>
    r.menu.filter(item => item.popular).slice(0, 2).map(item => ({
      ...item,
      restaurantId: r.id,
      restaurantName: r.name
    }))
  ).slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Delicious food variety"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-background mb-6 leading-tight">
              Delicious Food,
              <br />
              <span className="text-primary">Delivered Fast</span>
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Explore the finest cuisines from top restaurants. Indonesian, Italian, Chinese and more. Order now and enjoy restaurant-quality meals at home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/restaurants">
                <Button size="lg" className="text-lg px-8">
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-background text-background hover:bg-background hover:text-foreground">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-food">
              <div className="p-3 bg-primary/10 rounded-full">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Fast Delivery</h3>
                <p className="text-muted-foreground text-sm">Get your food in 30 minutes or less</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-food">
              <div className="p-3 bg-primary/10 rounded-full">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Free Delivery</h3>
                <p className="text-muted-foreground text-sm">On orders over $25</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-food">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Secure Payment</h3>
                <p className="text-muted-foreground text-sm">100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore <span className="text-gradient">Cuisines</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/restaurants${category.id !== 'all' ? `?cuisine=${category.id}` : ''}`}
                className="flex flex-col items-center p-6 bg-card rounded-xl shadow-food hover:shadow-food-hover transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-4xl mb-2">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Featured <span className="text-gradient">Restaurants</span>
            </h2>
            <Link to="/restaurants">
              <Button variant="ghost" className="text-primary">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Hungry? We've Got You Covered!
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Browse our wide selection of restaurants and cuisines. From Indonesian satay to Italian pizza, we deliver happiness to your door.
          </p>
          <Link to="/restaurants">
            <Button size="lg" variant="secondary" className="text-lg px-10">
              Start Ordering
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
