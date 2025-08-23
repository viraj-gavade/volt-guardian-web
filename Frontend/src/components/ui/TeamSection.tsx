// src/components/TeamSection.tsx
import React from "react";

interface Member {
  name: string;
  role: string;
  image: string;
}

const members: Member[] = [
  {
    name: "MR. SANKET GHAG",
    role: "DIRECTOR",
    image: "src/assets/team/Sanketghag.png",
  },
  {
    name: "MR. AVINASH DHAYBAR",
    role: "DIRECTOR",
    image: "src/assets/team/AvinashDhaybar.png",
  },
  {
    name: "MR. CHANDRASHEKHAR SAWANT",
    role: "SERVICE MANAGER",
    image: "src/assets/team/Chandrashekhar.png",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <p className="text-blue-600 font-semibold uppercase tracking-wide">
          Meet Professionals
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Expert Members
        </h2>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={index}
              className=" bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 uppercase">
                  {member.name}
                </h3>
                <p
                  className={`mt-2 font-semibold ${
                    member.role === "SERVICE MANAGER"
                      ? "text-green-600"
                      : "text-green-700"
                  }`}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
