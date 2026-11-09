import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MAX_CART_QUANTITY, useCart } from "@/hooks/use-cart";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Tag } from "lucide-react";

const Cart = () => {
  const { cartItems, itemCount, updateQuantity, removeItem } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container-main py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto rounded-full bg-sage flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-forest" />
            </div>
            <h1 className="font-display text-3xl text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products yet. Explore our collection 
              of authentic Ayurvedic products.
            </p>
            <Link to="/shop">
              <Button className="bg-forest hover:bg-forest-light text-primary-foreground">
                Continue Shopping
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-main py-12">
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="card-ayurveda p-4 md:p-6">
                <div className="flex gap-4">
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-sage/30 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-medium text-foreground hover:text-forest transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Size: {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="p-1 hover:bg-secondary rounded-full transition-colors"
                      >
                        <X className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          disabled={item.quantity === 1}
                          className="p-2 hover:bg-secondary transition-colors disabled:opacity-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          disabled={item.quantity === MAX_CART_QUANTITY}
                          className="p-2 hover:bg-secondary transition-colors disabled:opacity-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-display text-xl text-foreground">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coupon Code */}
            <div className="card-ayurveda p-4">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="w-full input-ayurveda pl-10"
                  />
                </div>
                <Button variant="outline" className="border-forest text-forest hover:bg-forest/5">
                  Apply
                </Button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-ayurveda p-6 sticky top-4">
              <h2 className="font-display text-xl text-foreground mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})</span>
                  <span className="text-foreground">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className={shipping === 0 ? "text-forest" : "text-foreground"}>
                    {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-forest bg-sage/50 px-3 py-2 rounded-lg">
                    ✨ You've unlocked free shipping!
                  </p>
                )}
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium text-foreground">Total</span>
                  <span className="font-display text-2xl text-forest">₹{total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Including all taxes</p>
              </div>

              <Button className="w-full bg-forest hover:bg-forest-light text-primary-foreground py-6">
                Proceed to Checkout
              </Button>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Secure checkout with SSL encryption</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Easy 7-day returns</span>
                </div>
              </div>

              <Link to="/shop" className="block text-center mt-6 text-forest hover:underline text-sm">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
