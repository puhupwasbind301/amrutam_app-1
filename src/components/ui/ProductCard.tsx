import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  size?: string;
}

export const ProductCard = ({
  id,
  name,
  description,
  price,
  rating,
  reviews,
  image,
  size = "200 ml",
}: ProductCardProps) => {
  const { addItem } = useCart();

  const addToCart = () => {
    if (addItem(id) > 0) {
      toast.success(`${name} added to your cart`);
    } else {
      toast.info("You have reached the quantity limit for this product.");
    }
  };

  return (
    <div className="card-ayurveda overflow-hidden group">
      <Link to={`/product/${id}`}>
        <div className="aspect-square bg-sage/30 relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-foreground text-sm leading-tight mb-1 hover:text-forest transition-colors line-clamp-2">
            {name} | {description}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="text-sm text-muted-foreground">₹ {price.toFixed(2)} • {size}</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < rating ? 'fill-amber text-amber' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({reviews})</span>
            </div>
          </div>
          
          <Button 
            onClick={addToCart}
            aria-label={`Add ${name} to cart`}
            size="icon" 
            className="bg-forest hover:bg-forest-light text-primary-foreground rounded-full w-8 h-8"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
