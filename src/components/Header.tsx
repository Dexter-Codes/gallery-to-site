import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-foreground">TREXTERITY (TCK) LAW</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-accent font-medium border-b-2 border-accent pb-1"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Services
            </a>
            <a 
              href="#team" 
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Team
            </a>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              CONTACT
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;