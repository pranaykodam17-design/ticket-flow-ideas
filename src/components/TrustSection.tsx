import { Shield, Award, Headphones, Lock } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your personal and payment data is protected with industry-leading encryption"
  },
  {
    icon: Award,
    title: "Trusted Partners",
    description: "We work only with certified transport operators and verified booking partners"
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated customer service team available 24/7 to assist with any concerns"
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Your data stays private and is never shared with third parties without consent"
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Travel with confidence knowing that every booking is protected by enterprise-grade security measures and backed by our commitment to safe, reliable service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Security Badges */}
        <div className="bg-secondary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Certified & Compliant
          </h3>
          <p className="text-muted-foreground mb-6">
            Our platform meets the highest industry standards for security and compliance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div>🔒 SSL Encrypted</div>
            <div>🛡️ PCI DSS Compliant</div>
            <div>✅ GDPR Compliant</div>
            <div>🏆 ISO 27001 Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;