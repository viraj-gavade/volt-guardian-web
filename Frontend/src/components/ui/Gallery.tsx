import React from "react";

const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
  "/gallery/img5.jpg",
  "/gallery/img6.jpg",
  "/gallery/img7.jpg",
  "/gallery/img8.jpg",
];

const Gallery: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest">
          Gallery
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          A Glimpse into Our Work and Services
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
