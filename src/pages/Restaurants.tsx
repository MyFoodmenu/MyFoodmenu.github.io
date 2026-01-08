import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurants, categories } from '@/data/menuData';
import { Button } from '@/components/ui/button';

const Restaurants = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const cuisineFilter = searchParams.get('cuisine') || 'all';

  const filteredRestaurants = useMemo(() => {
    if (cuisineFilter === 'all') return restaurants;
    return restaurants.filter(r => r.cuisine.toLowerCase() === cuisineFilter);
  }, [cuisineFilter]);

  const setCuisineFilter = (cuisine: string) => {
    if (cuisine === 'all') {
      searchParams.delete('cuisine');
    } else {
      searchParams.set('cuisine', cuisine);
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Our <span className="text-gradient">Restaurants</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the finest restaurants offering authentic cuisines from around the world. Each restaurant is carefully selected for quality and taste.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={cuisineFilter === category.id ? 'default' : 'outline'}
              onClick={() => setCuisineFilter(category.id)}
              className="gap-2"
            >
              <span>{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No restaurants found for this cuisine. Try another category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Restaurants;
