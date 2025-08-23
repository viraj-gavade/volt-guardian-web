import Navbar from "@/components/Navbar";
import HeroSection from "@/components/DieselGeneratorHeroSection";
import Footer from "@/components/Footer";
import AboutSection2 from "@/components/ui/AboutSection2";
import OurClients from "@/components/ui/OurClients";
import TeamSection from "@/components/ui/TeamSection";
import FAQSection from "@/components/ui/FAQSection";
import ChooseUsSection from "@/components/ui/ChooseUs";
import Gallery from "@/components/ui/Gallery";
import ScrollToTopButton from "@/components/ui/ScrollToTop";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        
        {/* Placeholder for About Us content */}
        <section id="about" className="flex items-center justify-center bg-background pt-10 pb-10">
          <div className="text-center">
           
            <AboutSection2 />
            <OurClients />
            <ChooseUsSection />
            <TeamSection />
            <Gallery />
            <FAQSection />
            
          </div>
        </section>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default AboutUs;