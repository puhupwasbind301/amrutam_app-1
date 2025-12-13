import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle, Clock, Home, Shield, ArrowRight } from "lucide-react";

const labTests = [
  {
    id: "1",
    name: "Complete Body Checkup",
    description: "Comprehensive health screening with 80+ parameters",
    price: 1999,
    originalPrice: 3500,
    parameters: 82,
    reportTime: "24 hours",
    homeCollection: true,
  },
  {
    id: "2",
    name: "Thyroid Profile",
    description: "Complete thyroid function assessment (T3, T4, TSH)",
    price: 499,
    originalPrice: 800,
    parameters: 3,
    reportTime: "12 hours",
    homeCollection: true,
  },
  {
    id: "3",
    name: "Diabetes Screening",
    description: "Blood glucose and HbA1c for diabetes monitoring",
    price: 599,
    originalPrice: 1000,
    parameters: 5,
    reportTime: "6 hours",
    homeCollection: true,
  },
  {
    id: "4",
    name: "Vitamin D & B12 Test",
    description: "Essential vitamin deficiency screening",
    price: 899,
    originalPrice: 1500,
    parameters: 2,
    reportTime: "24 hours",
    homeCollection: true,
  },
  {
    id: "5",
    name: "Liver Function Test",
    description: "Complete liver health assessment",
    price: 449,
    originalPrice: 700,
    parameters: 12,
    reportTime: "12 hours",
    homeCollection: true,
  },
  {
    id: "6",
    name: "Kidney Function Test",
    description: "Comprehensive kidney health screening",
    price: 399,
    originalPrice: 650,
    parameters: 8,
    reportTime: "12 hours",
    homeCollection: true,
  },
];

const LabTests = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-to-b from-sage/40 to-background py-12">
        <div className="container-main">
          <h1 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
            Book Lab Tests
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Get accurate diagnostic tests from NABL accredited labs with home sample collection
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for tests, packages..."
                className="w-full input-ayurveda pl-12 py-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-8 border-b border-border">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Home, title: "Free Home Collection", desc: "Sample pickup at your doorstep" },
              { icon: Shield, title: "NABL Accredited", desc: "Certified lab partners" },
              { icon: Clock, title: "Quick Reports", desc: "Within 24-48 hours" },
              { icon: CheckCircle, title: "100% Accurate", desc: "Verified results" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Packages */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
            Popular Health Packages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labTests.map((test) => (
              <div key={test.id} className="card-ayurveda overflow-hidden">
                <div className="bg-forest/5 p-4 border-b border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-lg text-foreground">{test.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{test.description}</p>
                    </div>
                    {test.homeCollection && (
                      <span className="bg-sage text-forest text-xs px-2 py-1 rounded-full">
                        Home Collection
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-forest" />
                      <span>{test.parameters} parameters</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-forest" />
                      <span>{test.reportTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-display text-forest">₹{test.price}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ₹{test.originalPrice}
                      </span>
                      <span className="text-xs text-forest ml-2">
                        {Math.round((1 - test.price / test.originalPrice) * 100)}% off
                      </span>
                    </div>
                    <Button className="bg-forest hover:bg-forest-light text-primary-foreground">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-cream-dark">
        <div className="container-main">
          <h2 className="font-display text-2xl md:text-3xl text-foreground text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book a Test", desc: "Search and select the test you need" },
              { step: "2", title: "Sample Collection", desc: "Our phlebotomist visits your home" },
              { step: "3", title: "Lab Processing", desc: "Sample analyzed at certified labs" },
              { step: "4", title: "Get Reports", desc: "Digital reports on your email" },
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-forest text-primary-foreground flex items-center justify-center font-display text-2xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-forest/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main">
          <div className="bg-forest rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="font-display text-2xl md:text-3xl mb-4">
              Not sure which test to book?
            </h2>
            <p className="opacity-80 mb-6 max-w-xl mx-auto">
              Consult with our Ayurvedic doctors to understand your health needs 
              and get personalized test recommendations
            </p>
            <Button className="bg-amber hover:bg-amber-light text-foreground px-8">
              Talk to a Doctor
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LabTests;
