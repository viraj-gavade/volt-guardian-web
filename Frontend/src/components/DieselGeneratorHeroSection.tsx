import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock, Handshake, HardHat, PackageOpen } from "lucide-react";
import heroImage from "@/assets/working-1.jpg";



function DieselGeneratorHeroSection(){
  return (
    <>
    <section id="home" className="relative min-h-[350px] flex items-center justify-center bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        					<img src={heroImage} alt="Generator Repairs Hero" className="w-full h-[350px] object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-industrial-navy/90 via-industrial-navy/70 to-industrial-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Diesel Generator Sales & Rentals
          </h3>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
       
    </section>
</>
  );
};

export default DieselGeneratorHeroSection;