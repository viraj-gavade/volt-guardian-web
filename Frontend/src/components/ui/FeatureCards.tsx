
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock, Handshake, HardHat, PackageOpen } from "lucide-react";
import heroImage from "@/assets/hero-generator.jpg";
import { useEffect, useState } from "react";
import HappyClients from "@/assets/Happy-Clients.webp";
import serviceEngineers from "@/assets/service-Engineers.webp";
import Products from "@/assets/Products.webp";
import SatisfactionGuarantee from "@/assets/Satisfaction-Guarantee.webp";


  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

const AnimatedNumber = ({ end }: { end: number }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setValue(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end]);

  return <span>{value}</span>;
};
const features = [
  {
    icon: () => <img src={HappyClients} alt="Happy Clients" className="h-16 w-16 text-accent" />,
    title: (
      <>
        <AnimatedNumber end={300} />+
      </>
    ),
    description: "Happy Clients"
  },
  {
    icon: () => <img src={serviceEngineers} alt="Experienced Engineers" className="h-16 w-16" />,
    title: (
      <>
        <AnimatedNumber end={15} />+
      </>
    ),
    description: "Experienced Engineers"
  },
  {
    icon: () => <img src={Products} alt="Products" className="h-16 w-16" />,
    title: (
      <>
        <AnimatedNumber end={100} />+
      </>
    ),
    description: "Products"
  },
  {
    icon: () => <img src={SatisfactionGuarantee} alt="Satisfaction Guarantee" className="h-16 w-16" />,
    title: (
      <>
        <AnimatedNumber end={300} />%
      </>
    ),
    description: "Satisfaction Guarantee"
  }
];

function FeatureCards(){

    return(

        <>   
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black/10 rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4">
                      <feature.icon />
                    </div> 
                    <h3 className="text-4xl font-semibold text-black">{feature.title}</h3>
                  <p className=" text-5xl-sm text-gray-800 ">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
     
        </>
    )
}


export default FeatureCards