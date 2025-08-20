import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/ui/Gallery";
import ScrollToTopButton from "@/components/ui/ScrollToTop";


function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative w-full">
      {/* Background Image with Overlay */}
      <div className="relative w-full h-72 ">
        <img
          src="src/assets/service3.jpeg" // replace with actual image path
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-700 opacity-50 "></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Get in Touch with Us
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At Triratna Power Solutions Pvt. Ltd., we’re here to answer all your
          questions and provide you with the best power solutions for your
          needs. Whether you need generator sales, rentals, repairs, or solar
          project consultations, our team is ready to assist you.
        </p>
      </div>
    </section>
    <section className="w-full py-12 bg-white flex justify-center">
      {/* Blue Box */}
      <div className="bg-[#0f4c75] text-white rounded-lg shadow-lg p-10 max-w-6xl w-full grid md:grid-cols-2 gap-10">
        
        {/* Left Side - Address */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Locations</h2>

          <h3 className="font-semibold mb-2">Address :</h3>
          <p className="mb-6">
            <span className="font-medium">Head Office :</span> <br />
            Shop no 3 Ground floor and 3 floor, PAP-R-585, T.T.C. Industrial Area,
            Opposite Gurukrupa Karishma hotel, Rabale MIDC, Navi Mumbai – 400701.
          </p>

          <p className="mb-6">
            <span className="font-medium">Branch Office :</span> <br />
            Near Varroc Polymer Company, Wasuli Phata, Bhamboli, Pune – 410501.
          </p>

          <h3 className="font-semibold mb-2">Phone:</h3>
          <p className="mb-6">86559 67355</p>

          <h3 className="font-semibold mb-2">Email:</h3>
          <p>service@triratnapower.com</p>
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Leave A Message</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded border border-gray-300 text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded border border-gray-300 text-black"
              />
            </div>

            <textarea
              placeholder="Message"
              className="w-full p-2 rounded border border-gray-300 text-black h-28"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
    <section className="w-full py-12 bg-white flex justify-center">
      <div className="max-w-6xl w-full px-6">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Locations</h2>

        {/* Maps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Navi Mumbai */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navi Mumbai</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.244!2d73.000!3d19.150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6c89b4f1b4d%3A0x1234567890abcdef!2sRabale%20MIDC!5e0!3m2!1sen!2sin!4v1694160000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
            ></iframe>
          </div>

          {/* Pune */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pune</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5419160781566!2d72.96015717477715!3d19.171518948967787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8ef22ffd4b3%3A0x75ebcaf57bf2f44e!2sPragati%20Chs.!5e0!3m2!1sen!2sin!4v1755689249280!5m2!1sen!2sin" 
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default ContactUs;
