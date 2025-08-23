// src/components/ClientsSection.tsx
import React from "react";

const clients = [
  { name: "Client1", logo: "src/assets/logos/logo1.png" },
  { name: "Client2", logo: "src/assets/logos/logo2.png" },
  { name: "Client3", logo: "src/assets/logos/logo3.png" },
  { name: "Client4", logo: "src/assets/logos/logo4.png" },
  { name: "Client5", logo: "src/assets/logos/logo5.png" },
  { name: "Client6", logo: "src/assets/logos/logo6.png" },
  { name: "Client7", logo: "src/assets/logos/logo7.png" },
  { name: "Client8", logo: "src/assets/logos/logo8.png" },
  { name: "Client9", logo: "src/assets/logos/logo9.png" },
  { name: "Client10", logo: "src/assets/logos/logo10.png" },
  { name: "Client11", logo: "src/assets/logos/logo11.png" },
  { name: "Client12", logo: "src/assets/logos/logo12.png" },
  { name: "Client13", logo: "src/assets/logos/logo13.png" },
  { name: "Client14", logo: "src/assets/logos/logo14.png" },
  { name: "Client15", logo: "src/assets/logos/logo15.png" },
  { name: "Client16", logo: "src/assets/logos/logo16.png" },
  { name: "Client17", logo: "src/assets/logos/logo17.png" },
  { name: "Client18", logo: "src/assets/logos/logo18.png" },
  { name: "Client19", logo: "src/assets/logos/logo19.png" },
  { name: "Client20", logo: "src/assets/logos/logo20.png" },
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <p className="text-blue-600 font-semibold uppercase tracking-wide">
          Trusted by Industry Leaders Across Sectors
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Clients
        </h2>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-50 object-contain transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
