import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/products";
import { Search, Star, Clock, Video, Filter } from "lucide-react";

const specialties = [
  "All Specialties",
  "Ayurvedic Medicine",
  "Panchakarma",
  "Women's Health",
  "Skin & Hair",
  "Digestive Health",
];

const experienceRanges = [
  { id: "0-4", label: "0-4 years", min: 0, max: 5 },
  { id: "5-9", label: "5-9 years", min: 5, max: 10 },
  { id: "10-plus", label: "10+ years", min: 10, max: Infinity },
];

const sortOptions = [
  { id: "recommended", label: "Recommended" },
  { id: "experience", label: "Experience: most first" },
  { id: "fee-asc", label: "Fee: low to high" },
  { id: "fee-desc", label: "Fee: high to low" },
];

const FindDoctors = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSpecialty = specialties.find(specialty => specialty === searchParams.get("specialty")) ?? "All Specialties";
  const searchQuery = searchParams.get("q") ?? "";
  const selectedExperience = (searchParams.get("experience") ?? "").split(",").filter(id => experienceRanges.some(range => range.id === id));
  const sortBy = sortOptions.find(option => option.id === searchParams.get("sort"))?.id ?? "recommended";
  const searchTerms = searchQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);

  const updateFilter = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value && value !== "All Specialties" && value !== "recommended") {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }
    setSearchParams(nextParams, { replace: key === "q" });
  };

  const clearFilters = () => {
    const nextParams = new URLSearchParams(searchParams);
    ["q", "specialty", "experience", "sort"].forEach(key => nextParams.delete(key));
    setSearchParams(nextParams);
  };

  const filteredDoctors = doctors.filter(doctor => {
    const searchableText = `${doctor.name} ${doctor.specialty} ${doctor.languages.join(" ")}`.toLowerCase();
    return searchTerms.every(term => searchableText.includes(term))
      && (selectedSpecialty === "All Specialties" || doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase()))
      && (selectedExperience.length === 0 || experienceRanges.some(range => selectedExperience.includes(range.id) && doctor.experience >= range.min && doctor.experience < range.max));
  }).sort((a, b) => {
    if (sortBy === "experience") return b.experience - a.experience;
    if (sortBy === "fee-asc") return a.consultationFee - b.consultationFee;
    if (sortBy === "fee-desc") return b.consultationFee - a.consultationFee;
    return 0;
  });

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
                <label htmlFor="doctor-search" className="sr-only">Search doctors by name, specialty, or language</label>
                <Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="doctor-search"
                  type="search"
                  placeholder="Search doctors by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => updateFilter("q", e.target.value)}
                  className="w-full input-ayurveda pl-12 py-4"
                />
              </div>
              {searchQuery && <Button onClick={() => updateFilter("q", "")} variant="outline">Clear search</Button>}
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
                      onClick={() => updateFilter("specialty", specialty)}
                      aria-pressed={selectedSpecialty === specialty}
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
                  {experienceRanges.map((range) => (
                    <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedExperience.includes(range.id)}
                        onChange={(event) => updateFilter("experience", (event.target.checked
                          ? [...selectedExperience, range.id]
                          : selectedExperience.filter(id => id !== range.id)).join(","))}
                        className="w-4 h-4 accent-forest"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button onClick={clearFilters} className="text-sm text-forest hover:underline">Clear filters</button>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p role="status" aria-live="polite" className="text-muted-foreground">
                Showing <span className="text-foreground font-medium">{filteredDoctors.length}</span> {filteredDoctors.length === 1 ? "doctor" : "doctors"}
              </p>
              <label className="flex items-center gap-2 text-sm">
                Sort by
                <select value={sortBy} onChange={(event) => updateFilter("sort", event.target.value)} className="input-ayurveda">
                  {sortOptions.map(option => <option key={option.id} value={option.id}>{option.label}</option>)}
                </select>
              </label>
            </div>

            <div className="space-y-6">
              {filteredDoctors.length === 0 && (
                <div className="card-ayurveda p-10 text-center">
                  <h2 className="font-display text-xl mb-2">No doctors found</h2>
                  <p className="text-muted-foreground mb-4">Try another search or clear your filters.</p>
                  <Button onClick={clearFilters}>Clear filters</Button>
                </div>
              )}
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="card-ayurveda p-6">
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

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FindDoctors;
