import { FC } from "react";
import { PlusCircle, CheckCircle } from "lucide-react";

/* ---------------------- Service Card Component ---------------------- */
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
  image: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, points, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition">
      {/* Top content */}
      <div className="p-6 flex-1">
        <div className="text-green-600 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <ul className="space-y-2 mb-4">
          {points.map((point) => (
            <li key={point} className="flex items-center text-gray-600">
              <span className="text-green-500 mr-2">•</span>
              {point}
            </li>
          ))}
        </ul>
        <button className="flex items-center text-green-600 font-semibold hover:underline">
          <PlusCircle className="w-5 h-5 mr-1" /> Read More
        </button>
      </div>
      {/* Image */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />
    </div>
  );
};

/* ---------------------- Main Page (Services + Why Choose Us) ---------------------- */
const HomeservicesAndWhy: FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Services Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 border-black">
        <div className="text-center mb-12">
          <h4 className="text-m font-semibold tracking-wide text-blue-800 uppercase">
            Our Services
          </h4>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Seamless Power Solutions for Every Need.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 16v-2m8-6h2M2 12h2m15.364 6.364l1.414-1.414M4.222 4.222l1.414 1.414m12.728 0l1.414-1.414M4.222 19.778l1.414-1.414"
                />
              </svg>
            }
            title="Diesel Generator Sales & Rentals"
            points={[
              "Wide Range of Options",
              "Flexible Solutions",
              "Top-Quality Assurance",
            ]}
            image="src/assets/service1.webp"
          />

          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-6h6v6h3v2H6v-2h3z"
                />
              </svg>
            }
            title="AMC for Generator Repairs & Spare Parts"
            points={["Expert Repairs", "Genuine Spare Parts", "Quick Turnaround"]}
            image="src/assets/service2.webp"
          />

          <ServiceCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h4a1 1 0 001-1m-6 0V10"
                />
              </svg>
            }
            title="Comprehensive Solar Energy Solutions"
            points={[
              "Sustainable Solutions",
              "Customized Installations",
              "End-to-End Service",
            ]}
            image="src/assets/service3.jpeg"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray py-16 px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div>
            <img
              src="src/assets/whychooseus.webp"
              alt="Why Choose Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className = "items-center" >
            <h4 className="text-left font-semibold tracking-wide text-blue-800 uppercase " >
              Why Choose Us
            </h4>
            <h2 className="mt-2 text-left text-5xl md:text-6xl font text-gray-900 leading-snug">
              Reliable and Sustainable Power Solutions.
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Triratna Power Solutions offers tailored, high-quality power
              solutions with 7+ years of expertise. From diesel generators to
              solar projects, our authorized ESCORT KUBOTA dealership ensures
              reliable service and sustainable, cost-effective solutions.
            </p>

            {/* Bullet Points */}
            <ul className="mt-6 space-y-3">
              {[
                "7+ Years of Expertise",
                "Authorized ESCORT KUBOTA Dealer",
                "Sustainable & Cost-Effective",
              ].map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeservicesAndWhy;
