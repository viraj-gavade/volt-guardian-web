
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/working-1.jpg";
import img1 from "@/assets/service3.jpeg";
import img2 from "@/assets/workerscaffold.webp";

const features = [
	{
		title: "Safe and Efficient Handling",
		description:
			"We excel in the safe and efficient handling of heavy equipment, including diesel generators. Our team ensures every loading, unloading, and shifting task is carried out with precision to protect your valuable assets.",
	},
	{
		title: "Experienced Team with Advanced Tools",
		description:
			"Our skilled professionals are equipped with advanced tools and machinery to handle even the most challenging operations. We combine expertise with technology to deliver smooth and reliable service.",
	},
	{
		title: "Focus on Safety and Timely Delivery",
		description:
			"We prioritize safety at every step by adhering to strict protocols and ensuring timely execution of tasks. This minimizes downtime and keeps your operations running seamlessly.",
	},
	{
		title: "Customized Solutions for Your Needs",
		description:
			"With solutions tailored to your specific requirements, we ensure a hassle-free experience. Trust us for professional and reliable service that guarantees the careful handling of your equipment every step of the way.",
	},
];

const Page3 = () => (
	<div className="min-h-screen bg-background">
		<Navbar />
		<main>
			{/* Hero Section */}
			<section className="relative min-h-[350px] flex items-center justify-center bg-background">
				<div className="relative w-full rounded-none overflow-hidden shadow-lg">
					<img src={heroImage} alt="Loading, Unloading and Shifting Hero" className="w-full h-[350px] object-cover" />
					<div className="absolute inset-0 bg-gradient-to-r from-industrial-navy/90 via-industrial-navy/70 to-industrial-charcoal/60" />
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
						<h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
							Loading, Unloading and Shifting
						</h3>
					</div>
				</div>
			</section>

			{/* Info Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Safe, Reliable, and Efficient Generator Handling</h2>
						<p className="text-gray-700 text-lg mb-4">
							At Volt Guardian, we understand that the safe transportation and placement of heavy machinery, such as diesel generators, is critical to the success of your operations. With our professional loading, unloading, and shifting services, we ensure the seamless handling of your equipment, minimizing risks and downtime. Our expertise in generator logistics guarantees a hassle-free experience, whether you're moving equipment to a new site, installing a new generator, or relocating an existing one.
						</p>
					</div>
					<div className="md:w-1/2 flex justify-center gap-4">
						<div className="aspect-[8/16] w-1/2">
							<img src={img1} alt="Loading and Unloading 1" className="rounded-lg shadow-lg w-full h-full object-cover" />
						</div>
						<div className="aspect-[8/16] w-1/2">
							<img src={img2} alt="Loading and Unloading 2" className="rounded-lg shadow-lg w-full h-full object-cover" />
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-10">Why Choose Us for Loading, Unloading, and Shifting?</h2>
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

export default Page3;
