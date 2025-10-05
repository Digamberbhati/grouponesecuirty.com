import { Quote } from 'lucide-react';

interface TestimonialsProps {
  onNavigate: (page: string) => void;
}

export default function Testimonials({ onNavigate }: TestimonialsProps) {
  const testimonials = [
    {
      name: 'Lokesh Rajput',
      service: 'Event Security',
      security: 'Bouncers',
      review: 'The bouncers provided were professional and ensured safety throughout our event.',
    },
    {
      name: 'Digamber Bhati',
      service: 'Corporate Security',
      security: 'Personal Security Officers (PSO)',
      review: 'The PSO services for our executives were discreet and highly effective.',
    },
    {
      name: 'Rohit Kumar',
      service: 'Residential Security',
      security: 'Security Guards',
      review: 'The security guards have been reliable and keep our complex safe.',
    },
    {
      name: 'Punit Kumar',
      service: 'Commercial Security',
      security: 'Security Guards',
      review: 'Our office premises are secure thanks to their well-trained guards.',
    },
    {
      name: 'Anjali Singh',
      service: 'Event Security',
      security: 'Bouncers',
      review: 'Their team managed crowds efficiently, making our event a success.',
    },
    {
      name: 'Meera Sharma',
      service: 'Housekeeping and Security',
      security: 'Security Guards',
      review: 'Their combined security and housekeeping services have been exceptional for our property.',
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
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>

                <div className="pt-6 border-t border-amber-200">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                  <p className="text-xs text-amber-700 font-medium">{testimonial.security}</p>
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