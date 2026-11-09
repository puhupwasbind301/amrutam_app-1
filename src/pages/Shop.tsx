import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "";
  const activeCategory = categories.find(cat => cat.id === searchParams.get("category"))?.id ?? "all";
  const searchTerms = search.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const hasFilters = searchTerms.length > 0 || activeCategory !== "all";

  const updateFilter = (key: "q" | "category", value: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value && !(key === "category" && value === "all")) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }
    setSearchParams(nextParams, { replace: key === "q" });
  };

  const clearFilters = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("q");
    nextParams.delete("category");
    setSearchParams(nextParams);
  };

  const filteredProducts = products.filter(product => {
    const categoryName = categories.find(cat => cat.id === product.category)?.name ?? "";
    const searchableText = `${product.name} ${product.description} ${categoryName}`.toLowerCase();
    return (activeCategory === "all" || product.category === activeCategory)
      && searchTerms.every(term => searchableText.includes(term));
  });

  return (
    <Layout>
      <ShopHero search={search} onSearchChange={value => updateFilter("q", value)} />
      
      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container-main">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => updateFilter("category", cat.id)}
                aria-pressed={activeCategory === cat.id}
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
            <span role="status" aria-live="polite" className="text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 rounded-xl bg-sage/30">
              <h3 className="font-display text-xl mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">Try another search or clear your filters.</p>
              <button onClick={clearFilters} className="btn-primary-ayurveda">Clear filters</button>
            </div>
          ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          )}
          
          {/* Summer Collection */}
          {!hasFilters && <div className="mt-16">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Summer Collection</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(0, 3).map((product) => (
                <ProductCard key={`summer-${product.id}`} {...product} />
              ))}
            </div>
          </div>}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
