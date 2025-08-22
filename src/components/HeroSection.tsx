import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-legal.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Expert legal guidance
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Your trusted partner in corporate law, dispute resolution
          </p>
          
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-medium"
          >
            VIEW SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;