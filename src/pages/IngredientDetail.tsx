import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { ingredients, products } from "@/data/products";
import { ArrowLeft, Check, Plus, ChevronDown } from "lucide-react";

const IngredientDetail = () => {
  const { id } = useParams();
  const ingredient = ingredients.find(i => i.id === id) || ingredients[0];
  const relatedProducts = products.filter(p => ingredient.products.includes(p.id));

  const benefits = [
    { title: "Lowers Blood Sugar", desc: "Helps regulate glucose levels naturally", icon: "🩸" },
    { title: "Boosts Digestion", desc: "Aids in breaking down food efficiently", icon: "🍃" },
    { title: "Reduces Anxiety", desc: "Calms the nervous system", icon: "🧘" },
    { title: "Wound Healing", desc: "Supports skin regeneration", icon: "✨" },
  ];

  const ayurvedicProperties = [
    { label: "Rasa", value: "Katu (Pungent)", desc: "Stimulates digestion" },
    { label: "Veerya", value: "Ushna (Hot)", desc: "Increases heat in the body" },
    { label: "Guna", value: "Laghu (Light), Ruksha (Dry)", desc: "Easy to digest, reduces excess" },
    { label: "Vipaka", value: "Katu (Pungent)", desc: "Drying and stimulating even after digestion" },
  ];

  return (
    <Layout>
      {/* Hero with Ingredient Image */}
      <div className="bg-gradient-to-b from-sage/40 to-background">
        <div className="container-main py-8">
          <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-forest mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <img 
                src={ingredient.image} 
                alt={ingredient.name}
                className="w-full aspect-square object-cover rounded-xl"
              />
            </div>
            
            <div>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
                {ingredient.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {ingredient.scientificName} (Sanskrit - {ingredient.sanskritName})
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                {ingredient.description}
              </p>
              
              {/* Why this Ingredient */}
              <div className="space-y-4">
                <h3 className="font-display text-xl">Why {ingredient.name}?</h3>
                {[
                  `${ingredient.name} is valued because it helps lower blood sugar, boosts digestion, and reduces anxiety.`,
                  "It also protects the skin and speeds up wound healing with its antioxidant and antimicrobial properties.",
                  "It is mainly used in Ayurvedic medicines for indigestion."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prakriti Impact */}
      <section className="py-12 border-b border-border">
        <div className="container-main">
          <h2 className="font-display text-2xl text-center mb-8">Prakriti Impact</h2>
          <div className="flex justify-center gap-8">
            {["Vata: Balanced", "Kapha: Balanced", "Pitta: Imbalanced (Prakriti Vicar)"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  idx === 2 ? "bg-amber/20" : "bg-sage"
                }`}>
                  <span className="text-lg">{idx === 2 ? "⚡" : "☯"}</span>
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="font-display text-2xl text-center mb-8">Benefits</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card-ayurveda p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-medium text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Properties */}
      <section className="py-12 bg-cream-dark">
        <div className="container-main">
          <h2 className="font-display text-2xl text-center mb-8">Ayurvedic Properties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ayurvedicProperties.map((prop, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border">
                <h4 className="text-forest font-medium mb-2">{prop.label}</h4>
                <p className="font-display text-lg text-foreground mb-1">{prop.value}</p>
                <p className="text-sm text-muted-foreground">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Formulations */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="font-display text-2xl text-center mb-8">Important Formulations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Chitrak Haritaki", "Chitrakadi Vati", "Kalyanagulam", "Chitrakadi Churna"].map((item, idx) => (
              <div key={idx} className="card-ayurveda px-6 py-4 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage flex items-center justify-center mb-2">
                  🌿
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Uses */}
      <section className="py-12 bg-sage/30">
        <div className="container-main">
          <h2 className="font-display text-2xl text-center mb-8">Therapeutic Uses</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Agnimandya", "Grahani Rog", "Arsha", "Udara Shula", "Gulma/Gola"].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-2">
                  <span className="text-2xl">🌱</span>
                </div>
                <span className="text-sm font-medium text-center">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products with this Ingredient */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl">
              Products with "{ingredient.name}" as primary ingredient
            </h2>
            <ChevronDown className="w-5 h-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IngredientDetail;
