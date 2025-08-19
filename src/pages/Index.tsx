import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeatureCards from "@/components/ui/FeatureCards";
import WorkProcesses from "@/components/ui/WorkProcesses";
import HomeAboutUs from "@/components/ui/HomeaboutUs";
import { Home } from "lucide-react";
import HomeservicesAndWhy from "@/components/ui/Homeservicesandwhy";
import OurClients from "@/components/ui/OurClients";
import TeamSection from "@/components/ui/TeamSection";
import FAQSection from "@/components/ui/FAQSection";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        {/* Placeholder sections for future development */}
        
        <section id="about" className="flex items-center justify-center bg-background pt-20 pb-20">
          <div className="text-center">
            <h3 className="text-xl font mb-4">About Our Company</h3>
            <h1 className="text-4xl font mb-4">Create And Convert</h1>
            <FeatureCards/>
          </div>
        </section>
        <section id="services" className="flex items-center justify-center bg-background py-5">
          <div className="text-center p-12">
            <h2 className="text-4xl font-bold mb-4">Reliable & Affordable Energy!</h2>
            <h1 className="text-4xl font-bold mb-4">Our Work Process</h1>
            <WorkProcesses/>  
          </div>
        </section>
        <section id="events" className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Events</h2>
            <p className="text-xl text-muted-foreground">Coming soon - See our upcoming events</p>
            <HomeAboutUs />
            <HomeservicesAndWhy />
            <OurClients />
            <TeamSection /> 
            <FAQSection />  
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
