import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ShoppingCart, Bell, User, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Find Doctors", path: "/find-doctors" },
  { name: "Lab Tests", path: "/lab-tests" },
  { name: "Shop", path: "/shop" },
  { name: "Forum", path: "/forum" },
  { name: "About Us", path: "/about" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-forest text-primary-foreground py-2.5 px-4">
        <div className="container-main flex items-center justify-center gap-4">
          <span className="text-sm">Your first 5 minutes instant call is free.</span>
          <Button 
            variant="secondary" 
            size="sm" 
            className="bg-amber hover:bg-amber-light text-foreground font-medium text-xs px-4"
          >
            <Phone className="w-3 h-3 mr-1.5" />
            Try Instant Free Call Now
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border">
        <div className="container-main py-4">
          <div className="flex items-center justify-between">
            {/* Phone */}
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91 9826352321</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link to="/" className="font-display text-2xl md:text-3xl tracking-[0.3em] text-forest font-semibold">
              AMRUTAM
            </Link>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-secondary rounded-full transition-colors hidden md:block">
                <Search className="w-5 h-5 text-foreground" />
              </button>
              <Link to="/cart" aria-label={`Shopping cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`} className="p-2 hover:bg-secondary rounded-full transition-colors relative">
                <ShoppingCart className="w-5 h-5 text-foreground" />
                {itemCount > 0 && <span aria-hidden="true" className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 bg-forest text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                  {itemCount}
                </span>}
              </Link>
              <button className="p-2 hover:bg-secondary rounded-full transition-colors hidden md:block relative">
                <Bell className="w-5 h-5 text-foreground" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-amber text-foreground text-[10px] rounded-full flex items-center justify-center">
                  1
                </span>
              </button>
              <button className="p-2 hover:bg-secondary rounded-full transition-colors">
                <User className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-forest ${
                  location.pathname === link.path 
                    ? "text-forest border-b-2 border-forest pb-1" 
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="container-main py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === link.path 
                      ? "text-forest" 
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
