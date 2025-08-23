import React, { useState } from "react";
import { X } from "lucide-react";

const images = [
  "src/assets/faqgenerator.png",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "src/assets/faqgenerator.png",
  "/gallery/img6.jpg",
  "/gallery/img7.jpg",
  "/gallery/img8.jpg",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-8 sm:py-12 px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest">
          Gallery
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          A Glimpse into Our Work and Services
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => openModal(src)}
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-40 sm:h-56 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery enlarged"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
