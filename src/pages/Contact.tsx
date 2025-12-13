import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-to-b from-sage/40 to-background py-12">
        <div className="container-main text-center">
          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or need guidance on your wellness journey? 
            We're here to help.
          </p>
        </div>
      </div>

      <div className="container-main py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card-ayurveda p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">For general inquiries</p>
                  <a href="mailto:support@amrutam.global" className="text-forest hover:underline">
                    support@amrutam.global
                  </a>
                </div>
              </div>
            </div>

            <div className="card-ayurveda p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">Mon-Sat, 9am-6pm IST</p>
                  <a href="tel:+919713171999" className="text-forest hover:underline">
                    +91 9713171999
                  </a>
                </div>
              </div>
            </div>

            <div className="card-ayurveda p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">
                    Amrutam Pharmaceuticals Pvt Ltd.,<br />
                    Chitragupt Ganj, Nai Sadak,<br />
                    Lashkar, Gwalior - 474001
                  </p>
                </div>
              </div>
            </div>

            <div className="card-ayurveda p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Working Hours</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-ayurveda p-8">
              <h2 className="font-display text-2xl text-foreground mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full input-ayurveda"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full input-ayurveda"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full input-ayurveda"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full input-ayurveda"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select className="w-full input-ayurveda">
                    <option value="">Select a topic</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="consultation">Doctor Consultation</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full input-ayurveda resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <Button className="bg-forest hover:bg-forest-light text-primary-foreground px-8 py-6">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <section className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mt-2">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "What is the delivery time?",
                a: "We deliver across India within 5-7 business days. Metro cities may receive orders faster.",
              },
              {
                q: "Are your products 100% natural?",
                a: "Yes, all our products are made with pure, natural ingredients sourced from organic farms.",
              },
              {
                q: "Do you offer returns?",
                a: "We offer hassle-free returns within 7 days of delivery for unopened products.",
              },
              {
                q: "How can I track my order?",
                a: "Once shipped, you'll receive a tracking link via email and SMS to monitor your order.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="card-ayurveda p-6">
                <h3 className="font-medium text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
