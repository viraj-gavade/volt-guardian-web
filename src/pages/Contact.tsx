import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/ui/Gallery";



function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="contact" className="flex items-center justify-center bg-background pt-20 pb-20">
          <div className="text-center">
            <h3 className="text-xl font mb-4">Get In Touch</h3>
            <h1 className="text-4xl font mb-4">Contact Our Team</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are here to assist you with any inquiries or support you may need.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;
