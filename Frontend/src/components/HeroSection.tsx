import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock, Handshake, HardHat, PackageOpen } from "lucide-react";
import heroImage from "@/assets/hero-generator.jpg";


function HeroSection(){
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial oil-powered electricity generator"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-navy/90 via-industrial-navy/70 to-industrial-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Powering Your World — {" "}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
             Reliable Power Solutions for Every Need
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Professional-grade electricity generators designed for continuous operation. 
            When the power goes out, we keep you running.
          </p>

      

         

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
       </div>
    </section>
</>
  );
};

export default HeroSection;