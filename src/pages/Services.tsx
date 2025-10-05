import { ShieldCheck, Shield, UserCheck, Home, Music, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: ShieldCheck,
      title: 'Security Guard Services',
      description: 'Professional trained security guards to protect your premises 24/7. Our guards are vigilant, well-trained, and equipped to handle various security situations.',
      features: [
        'Trained and certified personnel',
        '24/7 availability',
        'Regular patrolling and monitoring',
        'Access control management',
        'Incident reporting',
        'Emergency response',
      ],
      color: 'from-amber-50 to-orange-50',
    },
    {
      icon: Shield,
      title: 'Armed Security (Gun Man)',
      description: 'Licensed armed security personnel for high-risk areas and valuable asset protection. Trained in weapon handling and tactical response.',
      features: [
        'Licensed and trained personnel',
        'High-security protection',
        'Risk assessment expertise',
        'Armed response capability',
        'Tactical security planning',
        'VIP protection',
      ],
      color: 'from-red-50 to-amber-50',
    },
    {
      icon: UserCheck,
      title: 'Personal Security Officer (PSO)',
      description: 'Dedicated personal security officers for VIP protection, executives, and high-profile individuals requiring close protection.',
      features: [
        'Close protection services',
        'Threat assessment',
        'Secure transportation',
        'Event security coordination',
        'Discreet and professional',
        'Advanced security training',
      ],
      color: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Home,
      title: 'Housekeeping Services',
      description: 'Professional cleaning and maintenance services for residential and commercial properties. Maintain a clean, safe, and welcoming environment.',
      features: [
        'Professional cleaning staff',
        'Residential and commercial services',
        'Daily or periodic cleaning',
        'Eco-friendly products',
        'Deep cleaning services',
        'Maintenance support',
      ],
      color: 'from-green-50 to-emerald-50',
    },
    {
      icon: Music,
      title: 'Bouncers for Events',
      description: 'Professional event security personnel to manage crowds, control access, and ensure safety at concerts, parties, weddings, and corporate events.',
      features: [
        'Crowd management',
        'Access control',
        'Conflict resolution',
        'Emergency handling',
        'Professional appearance',
        'Event-specific training',
      ],
      color: 'from-purple-50 to-pink-50',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive security solutions tailored to meet your specific needs. Professional, reliable, and always available.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.color} rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-800 rounded-xl mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
                    >
                      Get a Quote <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-amber-800 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Years of Experience</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-amber-800 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Satisfied Clients</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-amber-800 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-amber-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Security Solution?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today to discuss your specific requirements
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
