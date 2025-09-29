import { Clock, CreditCard, MapPin, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Lightning Fast Booking",
    description: "Find and book your perfect journey in under 60 seconds. No lengthy forms or complicated processes."
  },
  {
    icon: CreditCard,
    title: "Secure Payment Gateway",
    description: "Bank-level encryption and trusted payment partners ensure your transactions are completely safe."
  },
  {
    icon: MapPin,
    title: "Multi-Transport Options",
    description: "Compare buses, trains, and flights all in one place. Choose what works best for your schedule and budget."
  },
  {
    icon: Users,
    title: "24/7 Customer Support",
    description: "Expert travel assistance whenever you need it. Real people ready to help at any time of day."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with features designed for modern travelers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group text-center p-6 rounded-lg hover:shadow-card transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;