import { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/Bus.jpg",
    "/field.jpg",
    "/karate.jpg",
    "/chess.jpg",
    "/class.jpg",
    "/pe.jpg",
    "/out.jpg",
    "/pool.jpg",
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-[url('/fun.jpg')] bg-cover bg-top text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            School Gallery
          </h1>
          <p className="mt-4 text-lg opacity-90">
            A glimpse into the joyful moments at Meru Trailblazers Academy
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#f9fbfc]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0097d7] mb-12">
            Moments We Cherish
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold">
                  View Photo
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[80vh]">
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-xl shadow-lg object-contain max-h-[80vh] w-auto"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-md hover:bg-gray-200 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
