import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Final CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who trust us with their journeys. Book your next trip today.
          </p>
          
          <Button 
            variant="cta" 
            size="xl"
            className="group"
            onClick={() => {
              // For demo purposes - replace with your actual booking URL  
              alert('Redirecting to booking page... \n\nReplace this with your actual login/signup URL in the code.');
              // window.open('YOUR_BOOKING_URL_HERE', '_blank');
            }}
          >
            Book Your Ticket Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Footer Links */}
        <div className="border-t border-border pt-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Bus Tickets</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Train Tickets</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Flight Tickets</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Group Bookings</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Customer Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Travel Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TravelBooking Platform. All rights reserved. | Making travel accessible for everyone.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;