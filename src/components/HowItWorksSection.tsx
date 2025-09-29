import { UserPlus, Search, CreditCard } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign Up or Login",
    description: "Create your account or login to access our booking platform. Quick and simple registration process."
  },
  {
    icon: Search,
    number: "02", 
    title: "Search & Compare",
    description: "Enter your destination and travel dates. Browse and compare options across buses, trains, and flights."
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Book & Travel",
    description: "Select your preferred option, complete secure payment, and receive instant confirmation. Ready to travel!"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to your perfect journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative text-center group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border transform translate-x-6 z-0">
                    <div className="absolute right-0 top-1/2 w-3 h-3 bg-primary rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}
                
                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;