import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";
import { products, doctors } from "@/data/products";
import { Star, Minus, Plus, Heart, ChevronDown, Check } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return <NotFound />;
  }

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 3);

  const highlights = [
    { label: "Reduces Dryness", icon: "💧" },
    { label: "Reduces dandruff", icon: "✨" },
    { label: "Promotes hair growth", icon: "🌱" },
    { label: "Reduces greying", icon: "🖤" },
  ];

  const keyIngredients = [
    { name: "Bhringraj", benefit: "For reducing greying of hair" },
    { name: "Hibiscus", benefit: "For strengthening hair" },
    { name: "Gokhru", benefit: "For reducing dryness" },
    { name: "Methi", benefit: "For nourishment" },
  ];

  return (
    <Layout>
      <div className="container-main py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/shop" className="hover:text-forest">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-sage/30 rounded-2xl overflow-hidden mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="aspect-square bg-sage/30 rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-forest transition-all">
                  <img 
                    src={product.image} 
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-display text-2xl md:text-3xl text-foreground mb-2">
              {product.name}
            </h1>
            <p className="text-muted-foreground mb-4">{product.description}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < product.rating ? 'fill-amber text-amber' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              <span className="text-forest text-sm">✓ 414 sold in past month</span>
            </div>

            <div className="text-3xl font-display text-foreground mb-6">
              ₹ {product.price.toFixed(2)}
            </div>

            {/* Catalog Size */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Size</p>
              <span className="inline-block px-6 py-2 rounded-lg border border-forest bg-forest/5 text-forest">
                {product.size}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-border rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button className="flex-1 bg-forest hover:bg-forest-light text-primary-foreground py-6">
                Add to cart
              </Button>
              <button className="p-3 border border-border rounded-lg hover:border-forest/30 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Product Highlights */}
            <div className="bg-sage/30 rounded-xl p-6 mb-8">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <span className="text-forest">✨</span> Product Highlights
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Ingredients */}
            <div className="mb-8">
              <h3 className="font-display text-lg mb-4 flex items-center gap-2">
                <span className="text-forest">🌿</span> Key Ingredients
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {keyIngredients.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={`/ingredient/${item.name.toLowerCase()}`}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-forest/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                      🌱
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.benefit}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Accordion Sections */}
            {["How to use", "General Instructions", "Commonly Asked Questions"].map((section, idx) => (
              <div key={idx} className="border-b border-border py-4">
                <button className="w-full flex items-center justify-between">
                  <span className="font-medium">{section}</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-16 pt-16 border-t border-border">
          <h2 className="font-display text-2xl mb-8">Reviews and Ratings</h2>
          <div className="flex items-start gap-12">
            <div className="text-center">
              <div className="text-5xl font-display text-foreground">5.0</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Reviewer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Priya M.</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber text-amber" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">2 weeks ago</span>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Amrutam Kuntal care Hair Spa is a luxurious, nourishing treatment that 
                      transformed my dry hair to soft and silky in no time. I highly recommend 
                      it for anyone looking to revitalize their hair at home!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="font-display text-2xl mb-8">People have also bought</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* Meet Our Experts */}
        <section className="mt-16 pt-16 border-t border-border">
          <h2 className="font-display text-2xl text-center mb-8">Meet our Experts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="card-ayurveda p-6 text-center">
                <div className="relative inline-block mb-4">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-forest text-primary-foreground px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {doctor.rating}
                  </div>
                </div>
                <h3 className="font-display text-lg text-foreground">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{doctor.specialty}</p>
                <p className="text-sm text-forest mt-1">{doctor.experience} years experience</p>
                <Button className="mt-4 bg-forest hover:bg-forest-light text-primary-foreground w-full" size="sm">
                  Book a session
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDetail;
