import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import corporateLawImg from "@/assets/corporate-law.jpg";
import ipProtectionImg from "@/assets/ip-protection.jpg";
import contractNegotiationImg from "@/assets/contract-negotiation.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Corporate law",
      description: "Expert guidance on corporate legal matters.",
      image: corporateLawImg,
      alt: "Corporate law documents and legal consultation"
    },
    {
      title: "Intellectual property protection",
      description: "Safeguarding your innovative ideas and creations.",
      image: ipProtectionImg,
      alt: "Intellectual property protection and patent documentation"
    },
    {
      title: "Contract negotiation",
      description: "Mastering the art of effective contract negotiation.",
      image: contractNegotiationImg,
      alt: "Contract negotiation and legal document review"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="text-accent font-medium mb-4 uppercase tracking-wide">
            EXPERT LEGAL GUIDANCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Navigating corporate law & IP protection
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 bg-card border-border"
            >
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <ChevronRight className="text-accent h-5 w-5" />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;