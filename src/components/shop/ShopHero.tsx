import { Search } from "lucide-react";

export const ShopHero = () => {
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
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input 
            type="text"
            placeholder="Search for Kuntal Care"
            className="w-full input-ayurveda pl-12 pr-12 py-4"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
