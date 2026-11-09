import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search, X, CheckCircle, Clock, Home, Shield, ArrowRight } from "lucide-react";

const labTests = [
  {
    id: "1",
    name: "Complete Body Checkup",
    description: "Comprehensive health screening with 80+ parameters",
    price: 1999,
    originalPrice: 3500,
    parameters: 82,
    reportHours: 24,
    homeCollection: true,
  },
  {
    id: "2",
    name: "Thyroid Profile",
    description: "Complete thyroid function assessment (T3, T4, TSH)",
    price: 499,
    originalPrice: 800,
    parameters: 3,
    reportHours: 12,
    homeCollection: true,
  },
  {
    id: "3",
    name: "Diabetes Screening",
    description: "Blood glucose and HbA1c for diabetes monitoring",
    price: 599,
    originalPrice: 1000,
    parameters: 5,
    reportHours: 6,
    homeCollection: true,
  },
  {
    id: "4",
    name: "Vitamin D & B12 Test",
    description: "Essential vitamin deficiency screening",
    price: 899,
    originalPrice: 1500,
    parameters: 2,
    reportHours: 24,
    homeCollection: true,
  },
  {
    id: "5",
    name: "Liver Function Test",
    description: "Complete liver health assessment",
    price: 449,
    originalPrice: 700,
    parameters: 12,
    reportHours: 12,
    homeCollection: true,
  },
  {
    id: "6",
    name: "Kidney Function Test",
    description: "Comprehensive kidney health screening",
    price: 399,
    originalPrice: 650,
    parameters: 8,
    reportHours: 12,
    homeCollection: true,
  },
];

const LabTests = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "";
  const sort = ["price-asc", "price-desc", "report-time"].find(value => value === searchParams.get("sort"))
    ?? "recommended";
  const searchTerms = search.trim().toLowerCase().split(/\s+/).filter(Boolean);

  const updateFilter = (key: "q" | "sort", value: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value && !(key === "sort" && value === "recommended")) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }
    setSearchParams(nextParams, { replace: key === "q" });
  };

  const clearFilters = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("q");
    nextParams.delete("sort");
    setSearchParams(nextParams);
  };

  const filteredTests = labTests.filter(test => {
    const searchableText = `${test.name} ${test.description}`.toLowerCase();
    return searchTerms.every(term => searchableText.includes(term));
  }).sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "report-time") return a.reportHours - b.reportHours;
    return 0;
  });

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
            <label htmlFor="lab-test-search" className="sr-only">Search lab tests and packages</label>
            <div className="relative">
              <Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                id="lab-test-search"
                type="text"
                value={search}
                onChange={event => updateFilter("q", event.target.value)}
                aria-controls="lab-test-results"
                placeholder="Search for tests, packages..."
                className="w-full input-ayurveda pl-12 pr-14 py-4"
              />
              {search.length > 0 && (
                <button
                  type="button"
                  aria-label="Clear lab test search"
                  onClick={() => updateFilter("q", "")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full text-muted-foreground hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                >
                  <X aria-hidden="true" className="w-5 h-5" />
                </button>
              )}
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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground">
                Health Packages
              </h2>
              <p role="status" aria-live="polite" className="text-muted-foreground mt-2">
                {filteredTests.length} {filteredTests.length === 1 ? "package" : "packages"} found
              </p>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="lab-test-sort" className="text-sm font-medium">Sort by</label>
              <select
                id="lab-test-sort"
                value={sort}
                onChange={event => updateFilter("sort", event.target.value)}
                aria-controls="lab-test-results"
                className="input-ayurveda flex-1 sm:flex-none"
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="report-time">Fastest reports</option>
              </select>
            </div>
          </div>

          <div id="lab-test-results">
          {filteredTests.length === 0 ? (
            <div className="text-center py-16 rounded-xl bg-sage/30">
              <h3 className="font-display text-xl mb-2">No lab tests found</h3>
              <p className="text-muted-foreground mb-6">Try a test name, a health concern, or clear your filters.</p>
              <Button onClick={clearFilters} className="bg-forest hover:bg-forest-light text-primary-foreground">
                Clear filters
              </Button>
            </div>
          ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
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
                      <span>{test.reportHours} hours</span>
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
          )}
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
