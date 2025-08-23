import React from "react";
import genImg1 from "@/assets/gen1.webp";
import genImg2 from "@/assets/hero-generator.jpg";

const DieselGeneratorInfoSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Power You Can Rely On</h2>
        <p className="text-gray-700 text-lg mb-4">
          At Volt Guardian, we take pride in providing an extensive selection of diesel generators designed to cater to a wide spectrum of power requirements. Whether you are looking for robust industrial generators to keep your manufacturing units running, dependable commercial generators to ensure business continuity, or compact and efficient residential generators for backup power at home, we have the perfect solution for you. Our offerings go beyond just providing generators; we specialize in sales, rentals, and tailored power solutions that meet your specific needs. Whether you need a long-term purchase, a short-term rental for an event, or a customized generator setup for unique challenges, our team of experts is ready to assist.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center gap-4">
        <div className="aspect-[8/16] w-1/2">
          <img src={genImg1} alt="Diesel Generator 1" className="rounded-lg shadow-lg w-full h-full object-cover" />
        </div>
        <div className="aspect-[8/16] w-1/2">
          <img src={genImg2} alt="Diesel Generator 2" className="rounded-lg shadow-lg w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default DieselGeneratorInfoSection;
