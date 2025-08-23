import { FC } from "react";
import ServiceCard from "./ServiceCard";    

const ServiceSection: FC = () => {
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
    </div>
  );
};

export default ServiceSection;
