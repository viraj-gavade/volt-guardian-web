import { FC } from "react";
import { CheckCircle, Handshake } from "lucide-react";

const AboutUs: FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="relative w-100">
          <img
            src="src/assets/team.webp" // make sure you put your image in public/images/team.webp
            alt="Our Team"
            className="rounded-lg shadow-lg w-full h-auto"
          />
          {/* Overlay Card */}
          <div className="absolute -bottom-10 -right-6 bg-blue-900 text-white p-6 rounded-xl shadow-lg w-64">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3">
            <img src="src/assets/bulbWrench.png" alt="bulb" className="w-10 h-10 text-white-400" />
              </div>
              <p className="text-lg font-semibold">
            Your Trusted Partner for Power Solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Text Content */}
        <div className = "items-center">
          <h4 className="text-left font-semibold tracking-wide text-blue-800 uppercase">
            About Us
          </h4>
          <h2 className="mt-2 text-left text-5xl md:text-6xl font text-gray-900 leading-snug">
            Empowering Your Needs with Precision<br />and Excellence.
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            With over 7 years of experience, Triratna Power Solution Pvt. Ltd.
            is a trusted name in Generator Sales, Service, and Rental. Based in
            Navi Mumbai and Pune, we are proud to be an Authorized 3S Dealer of
            ESCORT KUBOTA, specializing in diesel generators, solar projects,
            and electrical panels. Our team of expert engineers ensures
            tailored, reliable, and cost-effective power solutions for every
            need.
          </p>

          {/* Bullet points */}
          <ul className="mt-6 space-y-3 text-2xl text-gray-700">
            {[
              "Powering Progress",
              "Professional Expertise",
              "Comprehensive Services",
            ].map((item) => (
              <li key={item} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

           {/* Button */}
          <div className="mt-8 text-left">
            <a href="/Services">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition">
              Explore Our More Services 
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
