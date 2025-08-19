import { FC } from "react";
import { PlusCircle, CheckCircle } from "lucide-react";


interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
  image: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, points, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition">
      {/* Top content */}
      <div className="p-6 flex-1">
        <div className="text-green-600 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <ul className="space-y-2 mb-4">
          {points.map((point) => (
            <li key={point} className="flex items-center text-gray-600">
              <span className="text-green-500 mr-2">•</span>
              {point}
            </li>
          ))}
        </ul>
        <button className="flex items-center text-green-600 font-semibold hover:underline">
          <PlusCircle className="w-5 h-5 mr-1" /> Read More
        </button>
      </div>
      {/* Image */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />
    </div>
  );
};


export default ServiceCard;