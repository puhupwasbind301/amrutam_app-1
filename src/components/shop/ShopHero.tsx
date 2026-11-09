import { Search, X } from "lucide-react";

interface ShopHeroProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export const ShopHero = ({ search, onSearchChange }: ShopHeroProps) => {
  return (
    <div className="relative bg-gradient-to-b from-sage/40 to-background overflow-hidden">
      {/* Decorative Leaves */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-60">
        <svg viewBox="0 0 200 200" className="w-full h-full text-forest/20">
          <ellipse cx="60" cy="100" rx="50" ry="80" fill="currentColor" transform="rotate(-30 60 100)" />
          <ellipse cx="90" cy="120" rx="40" ry="70" fill="currentColor" transform="rotate(-15 90 120)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 opacity-60">
        <svg viewBox="0 0 200 200" className="w-full h-full text-forest/20">
          <ellipse cx="140" cy="100" rx="50" ry="80" fill="currentColor" transform="rotate(30 140 100)" />
          <ellipse cx="110" cy="120" rx="40" ry="70" fill="currentColor" transform="rotate(15 110 120)" />
        </svg>
      </div>
      
      <div className="container-main py-12 relative">
        <h1 className="font-display text-4xl md:text-5xl text-center text-foreground mb-8">
          Store
        </h1>
        
        <div className="max-w-lg mx-auto relative">
          <label htmlFor="product-search" className="sr-only">Search products</label>
          <Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input 
            id="product-search"
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products"
            className="w-full input-ayurveda pl-12 pr-12 py-4"
          />
          {search && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-forest"
            >
              <X aria-hidden="true" className="w-5 h-5 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
