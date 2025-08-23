
import Navbar from "@/components/Navbar";
import DieselGeneratorInfoSection from "@/components/DieselGeneratorInfoSection";
import DieselGeneratorFeaturesSection from "@/components/DieselGeneratorFeaturesSection";
import DieselGeneratorContactSection from "@/components/DieselGeneratorContactSection";
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
import DieselGeneratorHeroSection from "@/components/DieselGeneratorHeroSection";
const Page1 = () => {
    return (
        <>
         <div className="min-h-screen bg-background p-0 m-0">
              <Navbar />
              <main>
                <DieselGeneratorHeroSection />
                <DieselGeneratorInfoSection />
                <DieselGeneratorFeaturesSection />
                <DieselGeneratorContactSection />
              </main>
              <ScrollToTopButton />
              <Footer />
            </div>
        </>
    );
}


export default Page1;
