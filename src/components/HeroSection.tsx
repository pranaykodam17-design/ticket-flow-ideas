import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe, LogIn, UserPlus } from "lucide-react";
import LoginModal from "./LoginModal";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Login/Signup Buttons - Top Right */}
        <div className="absolute top-6 right-6 z-20 flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsLoginModalOpen(true)}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsLoginModalOpen(true)}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Sign Up
          </Button>
        </div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern transport journey" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your Journey 
          <span className="block text-cta">Starts Here</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Book bus, train, and flight tickets seamlessly. Fast, secure, and reliable transport booking made simple.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="cta" 
            size="xl"
            className="group"
            onClick={() => setIsLoginModalOpen(true)}
          >
            Start Your Journey
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => {
              // Scroll to benefits section
              document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">100% Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium">Instant Booking</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">Worldwide Coverage</span>
          </div>
        </div>
      </div>
      
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
      </section>
      
      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default HeroSection;