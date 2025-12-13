import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { products, doctors } from "@/data/products";
import { ArrowRight, Star, Clock, Shield, Leaf, Heart } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sage/40 to-background overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-40">
          <svg viewBox="0 0 200 200" className="w-full h-full text-forest/30">
            <ellipse cx="60" cy="100" rx="50" ry="80" fill="currentColor" transform="rotate(-30 60 100)" />
            <ellipse cx="90" cy="120" rx="40" ry="70" fill="currentColor" transform="rotate(-15 90 120)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-40">
          <svg viewBox="0 0 200 200" className="w-full h-full text-forest/30">
            <ellipse cx="140" cy="100" rx="50" ry="80" fill="currentColor" transform="rotate(30 140 100)" />
          </svg>
        </div>

        <div className="container-main py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block text-forest font-medium mb-4">Ancient Wisdom, Modern Wellness</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Embrace Natural Healing with <span className="text-forest">Ayurveda</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover the power of traditional Ayurvedic remedies crafted with pure herbs 
              and ancient wisdom for your complete well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button className="bg-forest hover:bg-forest-light text-primary-foreground px-8 py-6 text-lg">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/find-doctors">
                <Button variant="outline" className="border-forest text-forest hover:bg-forest/5 px-8 py-6 text-lg">
                  Consult a Doctor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "100% Natural", desc: "Pure Ayurvedic ingredients" },
              { icon: Shield, title: "Certified", desc: "GMP & AYUSH approved" },
              { icon: Clock, title: "Fast Delivery", desc: "Across India" },
              { icon: Heart, title: "Expert Support", desc: "24/7 doctor consultation" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-sage flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-forest" />
                </div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">Featured Products</h2>
              <p className="text-muted-foreground mt-2">Handpicked Ayurvedic essentials for your wellness journey</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-forest font-medium hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <Link to="/shop" className="mt-8 flex md:hidden items-center justify-center gap-2 text-forest font-medium">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="section-padding bg-cream-dark">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Meet Our Experts</h2>
            <p className="text-muted-foreground mt-2">Consult with certified Ayurvedic practitioners</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="card-ayurveda p-6 text-center">
                <div className="relative inline-block mb-4">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-forest text-primary-foreground px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {doctor.rating}
                  </div>
                </div>
                <h3 className="font-display text-xl text-foreground">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{doctor.specialty}</p>
                <p className="text-sm text-forest mt-1">{doctor.experience} years experience</p>
                <Button className="mt-4 bg-forest hover:bg-forest-light text-primary-foreground w-full">
                  Book a session
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/find-doctors">
              <Button variant="outline" className="border-forest text-forest hover:bg-forest/5">
                Find more experts <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ayurveda */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-forest font-medium">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-6">
                The Amrutam Difference
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Ancient Wisdom", desc: "Formulations based on 5000-year-old Ayurvedic texts" },
                  { title: "Pure Ingredients", desc: "Sourced from organic farms across India" },
                  { title: "Scientific Approach", desc: "Modern testing meets traditional knowledge" },
                  { title: "Holistic Care", desc: "Complete wellness solutions for mind and body" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                      <span className="text-forest font-semibold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-sage rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl text-forest mb-4">5000+</div>
                  <p className="text-foreground">Years of Ayurvedic Tradition</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-forest text-primary-foreground rounded-2xl p-6">
                <div className="font-display text-3xl">10K+</div>
                <p className="text-sm opacity-80">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
