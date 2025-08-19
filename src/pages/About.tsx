import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        {/* Placeholder for About Us content */}
        <section id="about" className="flex items-center justify-center bg-background pt-20 pb-20">
          <div className="text-center">
            <h3 className="text-xl font mb-4">About Our Company</h3>
            <h1 className="text-4xl font mb-4">Create And Convert</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are dedicated to providing reliable power solutions that keep your operations running smoothly, no matter the circumstances.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;