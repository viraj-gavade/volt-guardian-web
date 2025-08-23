
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/working-1.jpg";
import img1 from "@/assets/ChooseUs.webp";
import img2 from "@/assets/Meet-the-Customer.webp";

const features = [
	{
		title: "Reliable and Tailored Solutions",
		description:
			"We provide solar energy solutions customized to meet your unique energy needs. Our reliable and efficient systems are designed to deliver optimal performance and long-term value.",
	},
	{
		title: "End-to-End Services",
		description:
			"From system design and installation to maintenance and ongoing support, we offer comprehensive services to ensure a hassle-free experience. Our team handles every step of your solar project with expertise and precision.",
	},
	{
		title: "Latest Solar Technology",
		description:
			"We leverage cutting-edge solar technology to deliver high-performance and durable systems. Our focus on sustainability ensures that our solutions are eco-friendly and built for long-term energy efficiency.",
	},
	{
		title: "Commitment to a Greener Future",
		description:
			"Whether you aim to lower energy costs or contribute to a more sustainable planet, our solar projects are designed to maximize savings and environmental impact. Trust us to make your transition to solar energy seamless and impactful.",
	},
];

const Page4 = () => (
	<div className="min-h-screen bg-background">
		<Navbar />
		<main>
			{/* Hero Section */}
			<section className="relative min-h-[350px] flex items-center justify-center bg-background">
				<div className="relative w-full rounded-none overflow-hidden shadow-lg">
					<img src={heroImage} alt="Solar Projects Hero" className="w-full h-[350px] object-cover" />
					<div className="absolute inset-0 bg-gradient-to-r from-industrial-navy/90 via-industrial-navy/70 to-industrial-charcoal/60" />
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
						<h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
							Solar Projects
						</h3>
					</div>
				</div>
			</section>

			{/* Info Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Empowering Your Future with Sustainable Energy</h2>
						<p className="text-gray-700 text-lg mb-4">
							At Volt Guardian, we are dedicated to promoting a greener, more sustainable future with our end-to-end solar energy solutions. Whether you aim to reduce energy costs, enhance sustainability, or transition to renewable energy, our services are tailored to meet your needs. From solar panel installation to system maintenance and custom project design, we provide efficient, reliable solutions that maximize energy output and long-term benefits. We ensure a smooth transition to cleaner energy, delivering consistent, cost-effective results that contribute to a more eco-friendly environment.
						</p>
					</div>
					<div className="md:w-1/2 flex justify-center gap-4">
						<div className="aspect-[8/16] w-1/2">
							<img src={img1} alt="Solar Project 1" className="rounded-lg shadow-lg w-full h-full object-cover" />
						</div>
						<div className="aspect-[8/16] w-1/2">
							<img src={img2} alt="Solar Project 2" className="rounded-lg shadow-lg w-full h-full object-cover" />
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-10">Why Choose our Solar Projects?</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{features.map((feature, idx) => (
							<div key={idx} className="p-6 border rounded-lg shadow-sm bg-white">
								<h3 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h3>
								<p className="text-gray-700 text-base">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">Need Help with Easier Industrial Solutions? We Are Experts!</h2>
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

export default Page4;
