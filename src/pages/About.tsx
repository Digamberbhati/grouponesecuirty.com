import { Target, Eye, Award, Users, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and ethical conduct in all our operations.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering superior security services that exceed expectations.',
    },
    {
      icon: Users,
      title: 'Professionalism',
      description: 'Our team embodies discipline, expertise, and unwavering dedication.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Continuously evolving our methods to provide cutting-edge security solutions.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '1000+', label: 'Security Personnel' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="bg-white">
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Group One Security</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A trusted name in security services across Goa, committed to safeguarding your peace of mind with excellence and integrity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Group One Security Services is a leading provider of comprehensive security solutions based in Goa. With over 15 years of experience, we have established ourselves as a trusted partner for businesses, individuals, and organizations seeking reliable protection.
                </p>
                <p>
                  Our team comprises highly trained professionals who are dedicated to ensuring the safety and security of our clients. From armed security personnel to housekeeping services, we offer a wide range of solutions tailored to meet diverse security needs.
                </p>
                <p>
                  Located in the heart of Panaji at Gera's Imperium Grand, we serve clients across Goa and beyond, delivering excellence through our commitment to professionalism, innovation, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border border-amber-200 text-center"
                >
                  <div className="text-4xl font-bold text-amber-800 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <Target className="h-8 w-8 text-amber-800" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide world-class security services that protect our clients' assets, people, and reputation. We strive to create safer environments through vigilance, professionalism, and unwavering commitment to excellence.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <Eye className="h-8 w-8 text-amber-800" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the most trusted and respected security service provider in India, known for our innovative solutions, exceptional service quality, and unwavering dedication to client safety and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-800 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-amber-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Growing Family</h2>
          <p className="text-xl mb-8 text-gray-200">
            Experience the difference that professional security services can make
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
