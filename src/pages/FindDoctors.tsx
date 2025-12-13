import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/products";
import { Search, Star, Clock, Video, Filter, ChevronDown } from "lucide-react";

const specialties = [
  "All Specialties",
  "Ayurvedic Medicine",
  "Panchakarma",
  "Women's Health",
  "Skin & Hair",
  "Digestive Health",
];

const FindDoctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-to-b from-sage/40 to-background py-12">
        <div className="container-main">
          <h1 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
            Find Ayurvedic Doctors
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with certified Ayurvedic practitioners for personalized consultations 
            and holistic health guidance
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full input-ayurveda pl-12 py-4"
                />
              </div>
              <Button className="bg-forest hover:bg-forest-light text-primary-foreground px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Results */}
      <div className="container-main py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="card-ayurveda p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg">Filters</h3>
                <Filter className="w-4 h-4 text-muted-foreground" />
              </div>
              
              {/* Specialty Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Specialty</h4>
                <div className="space-y-2">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty}
                      onClick={() => setSelectedSpecialty(specialty)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedSpecialty === specialty
                          ? "bg-forest text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {specialty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Experience</h4>
                <div className="space-y-2">
                  {["0-5 years", "5-10 years", "10+ years"].map((exp) => (
                    <label key={exp} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-forest" />
                      <span className="text-sm">{exp}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h4 className="text-sm font-medium mb-3">Availability</h4>
                <div className="space-y-2">
                  {["Available Today", "Available This Week", "Video Consultation"].map((avail) => (
                    <label key={avail} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-forest" />
                      <span className="text-sm">{avail}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing <span className="text-foreground font-medium">{doctors.length}</span> doctors
              </p>
              <button className="flex items-center gap-2 text-sm">
                Sort by: <span className="font-medium">Relevance</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              {[...doctors, ...doctors].map((doctor, idx) => (
                <div key={`${doctor.id}-${idx}`} className="card-ayurveda p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Doctor Image */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-32 h-32 rounded-xl object-cover"
                      />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-forest text-primary-foreground px-3 py-1 rounded-full text-xs flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        {doctor.rating}
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-display text-xl text-foreground">{doctor.name}</h3>
                          <p className="text-muted-foreground">{doctor.specialty}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-xl text-forest">₹{doctor.consultationFee}</p>
                          <p className="text-xs text-muted-foreground">per consultation</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-forest" />
                          <span>{doctor.experience} years experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Video className="w-4 h-4 text-forest" />
                          <span>Video consultation available</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {doctor.languages.map((lang) => (
                          <span key={lang} className="px-3 py-1 bg-sage text-forest text-xs rounded-full">
                            {lang}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 mt-6">
                        <Button variant="outline" className="border-forest text-forest hover:bg-forest/5">
                          View Profile
                        </Button>
                        <Button className="bg-forest hover:bg-forest-light text-primary-foreground">
                          Book Consultation
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <button className="w-full flex items-center justify-center gap-2 py-4 mt-8 text-foreground font-medium hover:text-forest transition-colors">
              Load More Doctors
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FindDoctors;
