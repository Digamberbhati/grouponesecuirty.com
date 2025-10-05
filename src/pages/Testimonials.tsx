import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  onNavigate: (page: string) => void;
}

export default function Testimonials({ onNavigate }: TestimonialsProps) {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Hotel Manager',
      company: 'Luxury Beach Resort, Goa',
      review: 'Group One Security has been exceptional in providing security services for our resort. Their guards are professional, punctual, and highly reliable. We have seen a significant improvement in guest safety and satisfaction since partnering with them.',
      rating: 5,
      image: 'RK',
    },
    {
      name: 'Priya Sharma',
      role: 'Event Organizer',
      company: 'Prime Events & Entertainment',
      review: 'Their bouncers handled our high-profile event with utmost professionalism. The team was well-coordinated, managed crowds effectively, and ensured complete safety throughout the night. Highly recommend their services for any event.',
      rating: 5,
      image: 'PS',
    },
    {
      name: 'Amit Desai',
      role: 'Business Owner',
      company: 'Tech Solutions Pvt Ltd',
      review: 'Outstanding service! The security team is well-trained and ensures complete safety of our premises. Their attention to detail and prompt response to any situation has given us complete peace of mind.',
      rating: 5,
      image: 'AD',
    },
    {
      name: 'Sunita Menon',
      role: 'Property Manager',
      company: 'Skyline Residences',
      review: 'We have been using Group One for our residential complex security and housekeeping services for over 3 years. The staff is courteous, professional, and always goes above and beyond their duties.',
      rating: 5,
      image: 'SM',
    },
    {
      name: 'Vikram Rao',
      role: 'CEO',
      company: 'Coastal Industries',
      review: 'The PSO services provided for our executives are top-notch. The officers are discreet, highly trained, and provide a sense of security that is invaluable in today\'s world. Excellent service!',
      rating: 5,
      image: 'VR',
    },
    {
      name: 'Neha Patel',
      role: 'Restaurant Owner',
      company: 'The Spice Garden',
      review: 'Their security guards have been instrumental in maintaining order and safety at our establishment. Professional, alert, and always ready to help. Couldn\'t ask for better security partners.',
      rating: 5,
      image: 'NP',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Hear what our valued clients have to say about our services
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-6">
                  <Quote className="h-10 w-10 text-amber-600 opacity-50" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-amber-200">
                  <div className="w-14 h-14 bg-amber-800 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-amber-700 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the same level of professionalism and dedication that our clients rave about
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-amber-800 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Happy Clients</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-amber-800 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Years of Excellence</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-amber-800 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-amber-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Excellence?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today and discover why we're Goa's most trusted security service provider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9145560600"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Call: 9145560600
            </a>
            <a
              href="mailto:info@grouponesecurity.com"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
