
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock, Handshake, HardHat, PackageOpen } from "lucide-react";
import heroImage from "@/assets/hero-generator.jpg";
import { useEffect, useState } from "react";
import meetcustomer from "@/assets/Meet-the-Customer.webp";
import understandtherequirements from "@/assets/Understand-the-Requirements.webp";
import sendqoute from "@/assets/Send-Quote-Finalize-Rates.webp";
import servicemaintenance from "@/assets/Service-Maintenance.webp";


  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

 const features = [
    {
      icon: () => <img src={meetcustomer} alt="Meet Customer" className="h-16 w-16 text-accent" />,
      title: "Meet the Customer",
      description: "We begin by understanding your needs through direct consultation to ensure personalized service."
    },
    {
      icon: () => <img src={understandtherequirements} alt="Meet Customer" className="h-16 w-16 text-accent" />,
      title: "Understand the Requirements",
      description: "Our team gathers detailed information about your power needs to design the most effective solution."
    },
    {
      icon: () => <img src={sendqoute} alt="Meet Customer" className="h-16 w-16 text-accent" />,         
      title: "Send Quote & Finalize Rates",
      description: "We provide a transparent quote tailored to your requirements, finalizing rates that ensure value for money."
    },
    {
      icon: () => <img src={servicemaintenance} alt="Meet Customer" className="h-16 w-16 text-accent" />,      
      title: "Service & Maintenance",
      description: "Our engineers provide regular monthly visits for servicing and maintenance, ensuring seamless operation and reliability."
    }
  ];

function FeatureCards(){

    return(

        <>   
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 ">
            
            {features.map((feature, index) => (
              <div
                key={index}
                className=""
              >
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 ">
                      <feature.icon  />
                    </div>
                    <h3 className="text-4xl text-black">{feature.title}</h3>
                  <p className=" text-5xl-sm text-gray-800 ">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
     
        </>
    )
}


export default FeatureCards