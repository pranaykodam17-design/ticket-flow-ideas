import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote className="w-12 h-12 mx-auto mb-8 text-cta" />
        
        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
          "I've tried many booking platforms, but this one stands out. The interface is incredibly intuitive, booking took less than a minute, and customer service was exceptional when I needed to make changes. Absolutely recommended for anyone who values their time and peace of mind."
        </blockquote>
        
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-cta fill-cta" />
          ))}
        </div>
        
        <div>
          <p className="text-lg font-semibold mb-2">Sarah Chen</p>
          <p className="text-primary-foreground/80">Frequent Business Traveler</p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-cta mb-2">50,000+</div>
            <div className="text-primary-foreground/80">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cta mb-2">1M+</div>
            <div className="text-primary-foreground/80">Tickets Booked</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cta mb-2">4.9/5</div>
            <div className="text-primary-foreground/80">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;