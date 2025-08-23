import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/working-1.jpg";
import img1 from "@/assets/ChooseUs.webp";
import img2 from "@/assets/Meet-the-Customer.webp"

const features = [
  {
    title: "Customized Electrical Panel Solutions",
    description:
      "We provide expert electrical panel services tailored to meet your specific needs. Our skilled engineers design and deliver solutions that ensure the safety and efficiency of your electrical systems.",
  },
  {
    title: "Comprehensive Services",
    description:
      "From design and installation to maintenance and repairs, we offer end-to-end services for electrical panels. Every solution complies with the highest safety and quality standards to guarantee reliable performance.",
  },
  {
    title: "Quick Response and Support",
    description:
      "We understand the importance of minimizing downtime. That’s why we prioritize quick response times and provide exceptional customer support to keep your electrical systems running smoothly.",
  },
  {
    title: "Commitment to Reliability and Quality",
    description:
      "With years of experience and a focus on quality, we deliver dependable and high-performance electrical panel solutions. Trust us to ensure the long-term safety and efficiency of your systems.",
  },
];

const Page5 = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[350px] flex items-center justify-center bg-background">
        <div className="relative w-full rounded-none overflow-hidden shadow-lg">
          <img
            src={heroImage}
            alt="Electrical Panel Services Hero"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-navy/90 via-industrial-navy/70 to-industrial-charcoal/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Electrical Panel Services
            </h3>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              Reliable, Safe, and Efficient Electrical Solutions
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              At Triratna Power Solutions Pvt. Ltd., we provide comprehensive
              electrical panel services designed to ensure the safety,
              reliability, and efficiency of your electrical systems. Our team
              of skilled engineers specializes in the design, installation,
              maintenance, and repair of electrical panels, catering to a wide
              range of commercial, industrial, and residential needs. Whether
              you require a new electrical panel for a project, need upgrades to
              an existing system, or require ongoing maintenance, we offer
              solutions that meet your specific requirements with the highest
              standards of quality and safety.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center gap-4">
            <div className="aspect-[8/16] w-1/2">
              <img
                src={img1}
                alt="Electrical Panel 1"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[8/16] w-1/2">
              <img
                src={img2}
                alt="Electrical Panel 2"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-10">
            Why Choose Our Electrical Panels?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-lg shadow-sm bg-white"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Need Help with Easier Industrial Solutions? We Are Experts!
          </h2>
          <Button className="bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 mt-4">
            Contact Us
          </Button>
        </div>
      </section>
    </main>
    <ScrollToTopButton />
    <Footer />
  </div>
);

export default Page5;
