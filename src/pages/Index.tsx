import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <header className="h-12 flex items-center border-b bg-background sticky top-0 z-10">
            <SidebarTrigger className="ml-4" />
            <span className="ml-4 font-semibold text-primary">Legal Firm</span>
          </header>
          <div id="hero">
            <HeroSection />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="services">
            <ServicesSection />
          </div>
          <div id="team">
            <TeamSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
