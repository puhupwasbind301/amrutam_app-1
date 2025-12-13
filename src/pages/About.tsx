import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "50+", label: "Expert Doctors" },
    { value: "100+", label: "Natural Products" },
    { value: "15+", label: "Years of Trust" },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Pure & Natural",
      description: "We source only the finest natural ingredients from organic farms across India, ensuring purity in every product.",
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Our approach addresses the root cause of health issues, promoting balance between mind, body, and spirit.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our team of certified Ayurvedic practitioners provides personalized care and guidance for your wellness journey.",
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "All our products are GMP certified and approved by AYUSH, ensuring the highest standards of quality.",
    },
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & Chief Ayurveda Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Research & Development",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop",
    },
    {
      name: "Amit Patel",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/40 to-background py-20">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-forest font-medium">Our Story</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-2 mb-6">
              Bringing Ancient Wisdom to Modern Lives
            </h1>
            <p className="text-lg text-muted-foreground">
              Amrutam was founded with a vision to make authentic Ayurvedic wellness 
              accessible to everyone. We blend 5000 years of traditional knowledge 
              with modern science to create products that truly heal.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-forest text-primary-foreground">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-4xl md:text-5xl mb-2">{stat.value}</div>
                <div className="opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-forest font-medium">Our Mission</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-6">
                Reviving the Ancient Science of Healing
              </h2>
              <p className="text-muted-foreground mb-6">
                At Amrutam, we believe that true wellness comes from within. Our mission 
                is to revive the ancient science of Ayurveda and make its benefits 
                accessible to everyone, everywhere.
              </p>
              <p className="text-muted-foreground mb-6">
                We work directly with farmers and herbal practitioners across India to 
                source the purest ingredients, ensuring that every product we create 
                carries the authentic essence of traditional Ayurvedic wisdom.
              </p>
              <p className="text-muted-foreground">
                Our team of expert Vaidyas (Ayurvedic doctors) carefully formulates each 
                product, combining time-tested recipes with modern quality standards to 
                create solutions that work for today's health challenges.
              </p>
            </div>
            <div className="relative">
              <div className="bg-sage rounded-3xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop"
                  alt="Ayurvedic ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-forest text-primary-foreground rounded-2xl p-6">
                <div className="font-display text-3xl">5000+</div>
                <p className="text-sm opacity-80">Years of Wisdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-forest font-medium">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
              What Guides Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="card-ayurveda p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-sage flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-forest" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-forest font-medium">Our Team</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
              Meet the Experts
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="card-ayurveda overflow-hidden">
                <div className="aspect-square">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-forest text-primary-foreground">
        <div className="container-main text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Start Your Wellness Journey Today
          </h2>
          <p className="opacity-80 mb-8 max-w-2xl mx-auto">
            Discover the transformative power of authentic Ayurveda. 
            Explore our products or consult with our expert doctors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button className="bg-amber hover:bg-amber-light text-foreground px-8 py-6">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/find-doctors">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6">
                Consult a Doctor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
