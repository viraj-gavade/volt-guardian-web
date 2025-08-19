import ServiceSection from "@/components/ui/ServiceSection";
import WorkProcesses from "@/components/ui/WorkProcesses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Services() {
  return (
    <div>
      <Navbar />
      <ServiceSection />
      <div className="text-center p-12">
            <h2 className="text-2xl  mb-4">Reliable & Affordable Energy!</h2>
            <h1 className="text-6xl  mb-4">Our Work Process</h1>
            <WorkProcesses />
          </div>
        <section id="events" className="min-h-screen flex items-center justify-center bg-background">
          <div className="bg-gray-100">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
    {/* Left Image */}
    <div>
      <img
        src="src/assets/workerscaffold.webp"
        alt="Workers on scaffolding"
        className="rounded-lg shadow-lg"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Reliable and Sustainable Power Solutions.
      </h2>
      <p className="mt-4 text-gray-600">
        Triratna Power Solutions offers tailored, high-quality power solutions
        with 7+ years of expertise. From diesel generators to solar projects, 
        our authorized ESCORT KUBOTA dealership ensures reliable service and 
        sustainable, cost-effective solutions.
      </p>

      <ul className="mt-6 space-y-4">
        <li className="flex items-center space-x-2">
          <span className="text-green-600 text-xl">✔</span>
          <span className="font-semibold text-gray-900">7+ Years of Expertise</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-green-600 text-xl">✔</span>
          <span className="font-semibold text-gray-900">Authorized ESCORT KUBOTA Dealer</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-green-600 text-xl">✔</span>
          <span className="font-semibold text-gray-900">Sustainable & Cost-Effective</span>
        </li>
      </ul>
    </div>
  </div>
</div>
        </section>
      <Footer />
    </div>
  );
}
export default Services;