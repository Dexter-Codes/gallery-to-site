import { Card, CardContent } from "@/components/ui/card";
import corporateLawImg from "@/assets/corporate-law.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      initials: "TRS",
      role: "Dispute Resolution Partner",
      description: "John is a seasoned corporate law partner with a focus on strategic litigation and dispute resolution.",
      image: corporateLawImg
    },
    {
      initials: "CG",
      role: "Litigation Partner", 
      description: "C is an litigation property expert dedicated to protecting clients' innovative assets and intellectual property rights.",
      image: corporateLawImg
    },
    {
      initials: "KD",
      role: "Contract Negotiation Partner",
      description: "K is a contract negotiation specialist with extensive experience in complex commercial agreements and deal structuring.",
      image: corporateLawImg
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="text-accent font-medium mb-4 uppercase tracking-wide">
            OUR LEGAL EXPERTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Dedicated to your success
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 bg-card border-border"
            >
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={member.image}
                    alt={`${member.initials} - ${member.role}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {member.initials}
                    </h3>
                    <p className="text-accent font-medium">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
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

export default TeamSection;