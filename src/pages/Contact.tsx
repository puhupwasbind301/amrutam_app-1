import { useState, type FormEvent } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [draft, setDraft] = useState<{ href: string; subject: string; body: string } | null>(null);
  const [formError, setFormError] = useState("");

  const prepareDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const topics: Record<string, string> = {
      product: "Product Inquiry", order: "Order Status", consultation: "Doctor Consultation",
      feedback: "Feedback", other: "Other",
    };
    const topic = Object.entries(topics).find(([value]) => value === field("subject"))?.[1];
    const firstName = field("firstName");
    const lastName = field("lastName");
    const email = field("email");
    const phone = field("phone");
    const message = field("message");

    if (!firstName || !lastName || !email || !topic || !message) {
      setDraft(null);
      setFormError("Please complete your name, email, topic, and message. Spaces alone do not count.");
      return;
    }

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      ...(phone ? [`Phone: ${phone}`] : []),
      "", message,
    ].join("\n");
    setFormError("");
    setDraft({
      href: `mailto:support@amrutam.global?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(body)}`,
      subject: topic,
      body,
    });
  };

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
              <h2 className="font-display text-2xl text-foreground mb-3">Send us a Message</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Prepare a message for your email app, then review and send it there.
              </p>
              
              <form
                onSubmit={prepareDraft}
                onChange={() => { setDraft(null); setFormError(""); }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-first-name" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      id="contact-first-name"
                      name="firstName"
                      autoComplete="given-name"
                      type="text"
                      className="w-full input-ayurveda"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-last-name" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      id="contact-last-name"
                      name="lastName"
                      autoComplete="family-name"
                      type="text"
                      className="w-full input-ayurveda"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      className="w-full input-ayurveda"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      autoComplete="tel"
                      type="tel"
                      className="w-full input-ayurveda"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select id="contact-subject" name="subject" defaultValue="" required className="w-full input-ayurveda">
                    <option value="">Select a topic</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="consultation">Doctor Consultation</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className="w-full input-ayurveda resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                {formError && <p role="alert" className="text-sm text-destructive">{formError}</p>}

                <Button type="submit" className="bg-forest hover:bg-forest-light text-primary-foreground px-8 py-6">
                  <Send className="w-4 h-4 mr-2" />
                  Prepare email draft
                </Button>
              </form>

              {draft && (
                <div className="mt-8 p-6 rounded-xl bg-sage/30 space-y-4">
                  <p role="status" className="text-sm text-foreground">
                    Your draft is ready. Open your email app to review and send it to support@amrutam.global.
                  </p>
                  <Button asChild className="bg-forest hover:bg-forest-light text-primary-foreground">
                    <a href={draft.href}>Open email draft</a>
                  </Button>
                  <label htmlFor="contact-draft" className="block text-sm font-medium">
                    Or copy this message into your email app
                  </label>
                  <p className="text-sm text-muted-foreground">Subject: {draft.subject}</p>
                  <textarea id="contact-draft" value={draft.body} readOnly rows={8} className="w-full input-ayurveda" />
                </div>
              )}
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
