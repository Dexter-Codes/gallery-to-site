import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              We're here to assist you!
            </h2>
            
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="name"
                  placeholder="Jane Smith"
                  className="mt-2 bg-background border-border"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email address <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="email@website.com"
                  className="mt-2 bg-background border-border"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Phone number <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="555-555-5555"
                  className="mt-2 bg-background border-border"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground font-medium">
                  Message
                </Label>
                <Textarea 
                  id="message"
                  rows={5}
                  className="mt-2 bg-background border-border resize-none"
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="consent" className="mt-1" />
                <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                  I allow this website to store my submission so 
                  they can respond to my inquiry.{" "}
                  <span className="text-red-500">*</span>
                </Label>
              </div>
              
              <Button 
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h3>
              
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="text-accent h-5 w-5" />
                <a 
                  href="mailto:xyz@trexteritylaw.com"
                  className="text-foreground hover:text-accent underline"
                >
                  xyz@trexteritylaw.com
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Location
              </h3>
              
              <div className="flex items-center space-x-3">
                <MapPin className="text-accent h-5 w-5" />
                <span className="text-foreground underline">
                  Guwahati, AS IN
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Hours
              </h3>
              
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>9:00am – 10:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span>9:00am – 10:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span>9:00am – 10:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>9:00am – 10:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>9:00am – 10:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00am – 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00am – 12:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;