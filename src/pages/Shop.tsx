import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ShopHero } from "@/components/shop/ShopHero";
import { ProductCard } from "@/components/ui/ProductCard";
import { products, categories } from "@/data/products";
import { Grid, Sparkles, Flower, Leaf, Bone, Shield, ChevronRight } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  grid: <Grid className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  flower: <Flower className="w-5 h-5" />,
  leaf: <Leaf className="w-5 h-5" />,
  bone: <Bone className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
};

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <ShopHero />
      
      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container-main">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex flex-col items-center gap-2 px-6 py-3 rounded-xl transition-all min-w-fit ${
                  activeCategory === cat.id 
                    ? "bg-forest text-primary-foreground" 
                    : "bg-card border border-border hover:border-forest/30"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeCategory === cat.id ? "bg-primary-foreground/20" : "bg-sage"
                }`}>
                  {categoryIcons[cat.icon]}
                </div>
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            ))}
            <button className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-forest/30 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              {activeCategory === "all" ? "All Products" : categories.find(c => c.id === activeCategory)?.name + " Products"}
            </h2>
            <span className="text-muted-foreground">{filteredProducts.length} products</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {/* Summer Collection */}
          <div className="mt-16">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Summer Collection</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(0, 3).map((product) => (
                <ProductCard key={`summer-${product.id}`} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
