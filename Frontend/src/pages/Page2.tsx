
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/working-1.jpg";
import img1 from "@/assets/service1.webp";
import img2 from "@/assets/service2.webp";

const features = [
	{
		title: "Expert Repair Services",
		description:
			"We specialize in maintaining your generators with expert repair services. Our skilled technicians diagnose and resolve issues efficiently, minimizing downtime and ensuring peak performance.",
	},
	{
		title: "Genuine Spare Parts",
		description:
			"We provide authentic, high-quality spare parts compatible with all major generator models. Designed for durability and reliability, our parts ensure long-lasting performance.",
	},
	{
		title: "Quick and Reliable Service",
		description:
			"With quick turnaround times and efficient repair processes, we reduce disruptions to your operations. Every task is completed with precision and care.",
	},
	{
		title: "Customer-Centric Approach",
		description:
			"We prioritize your satisfaction by offering tailored solutions to meet your needs. Competitive pricing and a commitment to excellence make us your trusted partner.",
	},
];

const Page2 = () => (
	<div className="min-h-screen bg-background">
		<Navbar />
		<main>
			{/* Hero Section */}
			<section className="relative min-h-[350px] flex items-center justify-center bg-background">
				<div className="relative w-full rounded-none overflow-hidden shadow-lg">
					<img src={heroImage} alt="Generator Repairs Hero" className="w-full h-[350px] object-cover" />
					<div className="absolute inset-0 bg-gradient-to-r from-industrial-navy/90 via-industrial-navy/70 to-industrial-charcoal/60" />
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
						<h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
							AMC for Generator Repairs & Spare Parts
						</h3>
					</div>
				</div>
			</section>

			{/* Info Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Ensuring Peak Performance for Your Generators</h2>
						<p className="text-gray-700 text-lg mb-4">
							At Volt Guardian, we provide expert generator repair and maintenance services to keep your power systems operating at their best. Whether it's routine maintenance or emergency repairs, our team of skilled technicians ensures prompt and reliable service. We supply genuine spare parts for all types of diesel generators, guaranteeing quality and durability. Our preventive maintenance plans minimize downtime and maximize performance, ensuring uninterrupted power supply when you need it most. With a commitment to excellence, we deliver solutions tailored to your unique requirements, making us your trusted partner in generator care.
						</p>
					</div>
					<div className="md:w-1/2 flex justify-center gap-4">
						<div className="aspect-[8/16] w-1/2">
							<img src={img1} alt="Generator Repair 1" className="rounded-lg shadow-lg w-full h-full object-cover" />
						</div>
						<div className="aspect-[8/16] w-1/2">
							<img src={img2} alt="Generator Repair 2" className="rounded-lg shadow-lg w-full h-full object-cover" />
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-10">Why Choose Us for Repairs & Spare Parts?</h2>
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

export default Page2;
