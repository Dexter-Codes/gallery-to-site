import { Button } from "@/components/ui/button";
import legalScales from "@/assets/legal-scales.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-medium mb-4 uppercase tracking-wide">
              YOUR LEGAL ALLIES
            </p>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Expertise in corporate law
            </h2>
            
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                At Trexterity (TCK) Law, we are a dedicated team of 
                three partners, committed to providing exceptional 
                legal services in corporate law, intellectual property 
                protection, and contract negotiation. Our expertise 
                ensures that your business navigates the complex legal 
                landscape with confidence.
              </p>
              
              <p>
                We understand the unique challenges you face and strive to deliver tailored 
                solutions that align with your goals. Trust us to be your 
                reliable partners in achieving success.
              </p>
            </div>
            
            <Button 
              variant="link" 
              className="text-accent hover:text-accent/80 p-0 mt-6 text-lg font-medium"
            >
              Get in touch
            </Button>
          </div>
          
          <div className="order-first lg:order-last">
            <img 
              src={legalScales} 
              alt="Legal scales and gavel representing justice and law" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;