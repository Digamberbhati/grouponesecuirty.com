import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { url: '/services/1.png' },
    { url: '/services/2.png' },
    { url: '/services/3.png' },
    { url: '/services/4.png' },
    { url: '/services/5.png' },
    { url: '/services/6.png' },
    { url: '/img/1.jpg' },
    { url: '/img/2.jpg' },
    { url: '/img/3.jpg' },
    { url: '/img/4.jpg' },
    { url: '/img/5.jpg' },
    { url: '/img/6.jpg' },
    { url: '/img/7.jpg' },
    { url: '/img/8.jpg' },
    { url: 'img/9.jpg' },
    { url: '/img/10.jpg' },
    { url: '/img/12.jpg' },
    { url: '/img/14.jpg' },
    { url: '/img/13.jpg' },
    { url: '/img/15.jpg' },
    { url: '/img/16.jpg' },
    { url: '/img/17.jpg' },
    { url: '/img/18.jpg' },
    { url: '/img/19.jpg' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="bg-white">
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            See our professional team in action and explore our diverse range of security services
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.url}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
          >
            <X className="h-10 w-10" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-amber-400 transition-colors"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-amber-400 transition-colors"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="max-w-6xl w-full">
            <img
              src={galleryImages[selectedImage].url}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6 text-white">
              <p className="text-gray-400 mt-2">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Interested in Our Services?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch to learn more about how we can protect what matters most to you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9145560600"
              className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Call: 9145560600
            </a>
            <a
              href="tel:7775000240"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Call: 7775000240
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}