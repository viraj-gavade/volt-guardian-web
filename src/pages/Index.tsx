import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        {/* Placeholder sections for future development */}
        <section id="products" className="min-h-screen flex items-center justify-center bg-muted/50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-xl text-muted-foreground">Coming soon - Explore our generator lineup</p>
          </div>
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-muted-foreground">Coming soon - Learn about our company</p>
          </div>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-muted/50">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <p className="text-xl text-muted-foreground">Coming soon - Get in touch with us</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
