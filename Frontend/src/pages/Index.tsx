import Navbar from "@/components/Navbar";
import HeroSection from "@/components/DieselGeneratorHeroSection";
import Footer from "@/components/Footer";
import FeatureCards from "@/components/ui/FeatureCards";
import WorkProcesses from "@/components/ui/WorkProcesses";
import HomeAboutUs from "@/components/ui/HomeaboutUs";
import { Home } from "lucide-react";
import HomeservicesAndWhy from "@/components/ui/Homeservicesandwhy";
import OurClients from "@/components/ui/OurClients";
import TeamSection from "@/components/ui/TeamSection";
import FAQSection from "@/components/ui/FAQSection";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import BookingForm from "@/components/ui/BookingForm";

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
            <HomeAboutUs />
            <HomeservicesAndWhy />
            <OurClients />
            <TeamSection /> 
            <FAQSection />  
          </div>
        </section>
        
        {/* Booking Section */}
        <section id="booking" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Book your power solution consultation today. Our expert team is ready to help you find the perfect energy solution for your needs.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Index;
