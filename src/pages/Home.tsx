import { Shield, Users, Award, Clock, ShieldCheck, UserCheck, Home as HomeIcon, Music, ArrowRight, Settings } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    { 
      icon: ShieldCheck, 
      title: 'Security Guard', 
      description: 'Professional trained guards for your premises', 
      details: 'Our security guards undergo rigorous training and background checks to ensure top-notch protection for commercial and residential properties.',
      image: '/img/10.jpg',
    },
    { 
      icon: Shield, 
      title: 'Gun Man', 
      description: 'Armed security personnel for high-risk areas', 
      details: 'Highly skilled armed professionals equipped to handle high-threat environments with precision and discretion.',
      image: '/img/11.jpg',
    },
    { 
      icon: UserCheck, 
      title: 'PSO', 
      description: 'Personal Security Officers for VIP protection', 
      details: 'Dedicated personal security officers offering close protection services for executives, dignitaries, and high-profile individuals.',
      image: '/img/9.jpg',
    },
    { 
      icon: HomeIcon, 
      title: 'House Security', 
      description: 'Comprehensive home security and maintenance services', 
      details: 'Tailored solutions including alarm systems, surveillance, and regular patrols to keep your home safe and secure.',
      image: '/img/7.jpg',
    },
    { 
      icon: Music, 
      title: 'Event Bouncers', 
      description: 'Professional security for events and gatherings', 
      details: 'Experienced bouncers trained in crowd control and conflict resolution to ensure safe and enjoyable events.',
      image: '/img/2.jpg',
    },
    { 
      icon: Settings, 
      title: 'Custom Security', 
      description: 'Tailored security solutions for unique needs', 
      details: 'Customized security plans designed to address specific risks and requirements for businesses, events, or individuals.',
      image: '/img/1.jpg',
    },
  ];

  const whyChooseUs = [
    { icon: Users, title: 'Trained Professionals', description: 'Highly skilled and certified security personnel' },
    { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock security services' },
    { icon: Award, title: 'Trusted by Many', description: 'Years of experience serving diverse clients' },
    { icon: Shield, title: 'Licensed & Insured', description: 'Fully compliant with all regulations' },
  ];

  const testimonials = [
    {
      name: 'Lokesh Rajput',
      role: 'MR.World',
      review: 'Group One Security has been exceptional. Their guards are professional, punctual, and highly reliable.',
    },
    {
      name: 'Priya Sharma',
      role: 'Event Organizer',
      review: 'Their bouncers handled our event with utmost professionalism. Highly recommend their services.',
    },
    {
      name: 'Digamber Bhati',
      role: 'Business Owner',
      review: 'Outstanding service! The security team is well-trained and ensures complete safety of our premises.',
    },
  ];

  const whyGroupOne = [
    {
      title: 'Proven Expertise',
      description: 'With over a decade of experience, we deliver reliable and effective security solutions.',
      image: '/services/1.png',
    },
    {
      title: 'Advanced Technology',
      description: 'Utilizing cutting-edge surveillance and security systems for maximum protection.',
      image: '/services/2.png',
    },
    {
      title: 'Client-Centric Approach',
      description: 'We prioritize your needs, offering personalized services to ensure satisfaction.',
      image: '/services/5.png',
    },
  ];

  const carouselImages = [
    '/img/10.jpg',
    '/img/11.jpg',
    '/img/12.jpg',
    '/img/13.jpg',
    '/img/14.jpg',
    '/img/15.jpg',
    '/img/16.jpg',
    '/img/17.jpg',
    '/img/18.jpg',
    '/img/19.jpg',
  ];

  return (
    <div className="bg-white">
      <section 
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 bg-cover bg-center"
        style={{ backgroundImage: `url(/services/6.png)` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Safety, Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional security solutions tailored to protect what matters most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('services')}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Our Services
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Work in Action</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our security services through these featured moments
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee">
              {carouselImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-80 h-48 mx-2">
                  <img
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
              {carouselImages.map((image, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 w-80 h-48 mx-2">
                  <img
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We deliver excellence through our commitment to safety and professionalism
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-amber-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to meet diverse needs with expertise and reliability
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-800 rounded-lg mb-4">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <p className="text-gray-500 text-sm mb-4">{service.details}</p>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-amber-800 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Group One</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover what sets Group One Security Services apart in delivering unparalleled protection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyGroupOne.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-amber-800 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-md border border-amber-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-amber-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Get in touch with us today for a customized security solution
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Contact Us Now
          </button>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}