import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">FoodExpress</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We are passionate about connecting food lovers with the best restaurants in their area. Our mission is to deliver not just food, but happiness and memorable dining experiences right to your doorstep.
          </p>
        </div>

        {/* Story */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2020, FoodExpress started with a simple idea: everyone deserves access to great food without the hassle. What began as a small team of food enthusiasts has grown into a platform serving thousands of happy customers daily.
              </p>
              <p className="text-muted-foreground mb-4">
                We carefully curate our restaurant partners, ensuring that every meal delivered meets our high standards for quality, taste, and freshness. From traditional Indonesian comfort food to authentic Italian cuisine and flavorful Chinese dishes, we bring the world's flavors to your table.
              </p>
              <p className="text-muted-foreground">
                Our commitment goes beyond just delivery. We're building a community of food lovers who appreciate good cuisine and the convenience of modern technology working together seamlessly.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="food-card-hover">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-3xl font-bold mb-2">50K+</p>
                  <p className="text-muted-foreground text-sm">Happy Customers</p>
                </CardContent>
              </Card>
              <Card className="food-card-hover">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-3xl font-bold mb-2">100+</p>
                  <p className="text-muted-foreground text-sm">Partner Restaurants</p>
                </CardContent>
              </Card>
              <Card className="food-card-hover">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-3xl font-bold mb-2">500K+</p>
                  <p className="text-muted-foreground text-sm">Orders Delivered</p>
                </CardContent>
              </Card>
              <Card className="food-card-hover">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-3xl font-bold mb-2">4.8</p>
                  <p className="text-muted-foreground text-sm">Average Rating</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We partner only with restaurants that share our commitment to quality ingredients and exceptional cooking standards.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Speed & Reliability</h3>
              <p className="text-muted-foreground">
                Our optimized delivery network ensures your food arrives hot, fresh, and on time, every single order.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We're always here to help and continuously improve based on your feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-4">Join Our Team</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">
            We're always looking for passionate individuals to join our growing team. Whether you're a driver, customer support specialist, or tech enthusiast, there's a place for you at FoodExpress.
          </p>
          <p className="text-center">
            Contact us at <a href="mailto:careers@foodexpress.com" className="text-primary font-semibold hover:underline">careers@foodexpress.com</a>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default About;
