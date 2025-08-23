import React from "react";

const features = [
  {
    title: "Tailored Power Solutions",
    description:
      "We offer high-quality diesel generators customized to meet your specific needs. Our generators combine reliability and fuel efficiency to ensure uninterrupted performance.",
  },
  {
    title: "Authorized ESCORT KUBOTA Dealer",
    description:
      "As a trusted dealer, we provide generators designed for durability and optimal performance. Our products deliver exceptional value and reliability.",
  },
  {
    title: "Inductive / Capacitive Sensors",
    description:
      "We offer new generator sales, temporary rentals, and pre-owned options. Flexible rental plans and affordable pricing ensure you find the perfect solution without compromising on quality.",
  },
  {
    title: "Conveyor Chains",
    description:
      "From seamless installation to round-the-clock support, we ensure a hassle-free experience. Trust us to keep your operations running smoothly with dependable power solutions.",
  },
];

const DieselGeneratorFeaturesSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-10">Why Choose Our Diesel Generators?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DieselGeneratorFeaturesSection;
