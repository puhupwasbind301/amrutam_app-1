import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-cream-dark">
      {/* App Download Section */}
      <div className="container-main section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Download Amrutam Ayurveda App Now
            </h2>
            <p className="text-muted-foreground mb-8">
              The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! 
              Apart from mimicking the website, the app has added benefits
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Access To Prescriptions",
                "Track Health Efficiently",
                "Direct Chat With Doctors",
                "In-App Reminders For Consultations"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                    <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button className="bg-foreground hover:bg-foreground/90 text-background px-6 py-6">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                GET IT ON Google Play
              </Button>
              <Button className="bg-foreground hover:bg-foreground/90 text-background px-6 py-6">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                Download on the App Store
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="bg-forest rounded-2xl p-6 text-primary-foreground">
              <p className="text-sm opacity-80">Engagement Time</p>
              <p className="text-2xl font-semibold">6m 33s</p>
            </div>
            <div className="absolute bottom-0 right-1/4 bg-card rounded-2xl p-4 shadow-elevated">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-amber"></div>
                  <div className="w-8 h-8 rounded-full bg-forest"></div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-forest">10K+</p>
                  <p className="text-xs text-muted-foreground">Downloads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-border">
        <div className="container-main py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact */}
            <div>
              <h4 className="font-display text-lg mb-4">Get in touch</h4>
              <p className="text-muted-foreground text-sm mb-2">support@amrutam.global</p>
              <p className="text-muted-foreground text-sm mb-4">
                Amrutam Pharmaceuticals Pvt Ltd.,<br />
                chitragupt ganj, Nai Sadak, Lashkar,<br />
                Gwalior - 474001
              </p>
              <p className="text-forest font-medium">+91 9713171999</p>
              
              <div className="flex gap-3 mt-6">
                {[Facebook, Instagram, Youtube, Twitter, Linkedin, MapPin].map((Icon, idx) => (
                  <button key={idx} className="w-9 h-9 rounded-full bg-forest text-primary-foreground flex items-center justify-center hover:bg-forest-light transition-colors">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Information */}
            <div>
              <h4 className="font-display text-lg mb-4">Information</h4>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Terms and Conditions",
                  "Privacy Policy",
                  "Privacy Policy for Mobile Apps",
                  "Shipping and Returns Policy",
                  "International Delivery",
                  "For Businesses, Hotels, and Resorts"
                ].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-muted-foreground text-sm hover:text-forest transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-display text-lg mb-4">Subscribe to our Newsletter and join Amrutam Family today!</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email Address"
                  className="input-ayurveda flex-1 text-sm"
                />
                <Button className="bg-forest hover:bg-forest-light text-primary-foreground px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
