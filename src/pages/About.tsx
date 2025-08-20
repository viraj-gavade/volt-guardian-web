import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
        <section id="about" className="flex items-center justify-center bg-background pt-20 pb-20">
          <div className="text-center">
            <h3 className="text-xl font mb-4">About Our Company</h3>
            <h1 className="text-4xl font mb-4">Create And Convert</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are dedicated to providing reliable power solutions that keep your operations running smoothly, no matter the circumstances.
            </p>
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