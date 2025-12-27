import { Target, Eye, Award, Users, Shield, TrendingUp,  Globe } from 'lucide-react';

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
    { number: '24/7', label: 'Vigilance' },
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-32 px-4 bg-[#05070a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
               <div className="h-[2px] w-12 bg-amber-500"></div>
               <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm">Our Presence: Goa & Faridabad</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter italic leading-none">
              SECURE <span className="text-amber-500">BY DESIGN.</span>
            </h1>
            <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
              GroupOne Security is a premier defense-grade private security firm, safeguarding peace of mind across Goa and Faridabad for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE & DUAL LOCATION CONTENT */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-5xl font-black text-gray-900 mb-8 uppercase italic tracking-tighter">
                Who We <span className="text-amber-600 underline decoration-4 underline-offset-8">Are</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-light">
                <p>
                  <strong className="text-gray-900 font-bold">GroupOne Security Services</strong> is a leading provider of comprehensive security solutions with a strong operational presence in <span className="text-gray-900 font-bold">Goa</span> and <span className="text-gray-900 font-bold">Faridabad</span>.
                </p>
                <p>
                  With over 15 years of industry experience, we have established ourselves as a trusted partner for businesses and individuals seeking elite protection. Our dual-hub strategy allows us to serve the industrial heart of Haryana and the tourism capital of Goa with equal precision.
                </p>
                <div className="flex items-center gap-4 p-8 bg-gray-50 rounded-2xl border-l-8 border-amber-500 shadow-sm">
                    <Globe className="h-12 w-12 text-amber-600 shrink-0" />
                    <p className="text-xl font-bold text-gray-800 leading-tight">
                      Operating from our Command Centers in Panaji (Goa) and Sector 12 (Faridabad), we provide seamless security coverage across both regions.
                    </p>
                </div>
              </div>
            </div>

            {/* Stats Dashboard */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#0a0c10] p-10 rounded-3xl border border-white/5 group hover:border-amber-500/30 transition-all duration-500">
                  <div className="text-5xl font-black text-amber-500 mb-2 tracking-tighter group-hover:scale-110 transition-transform">{stat.number}</div>
                  <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="group bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500 rounded-2xl mb-8 rotate-3">
              <Target className="h-10 w-10 text-black" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase italic">Our Mission</h2>
            <p className="text-gray-500 text-xl leading-relaxed font-light">
              To provide world-class security services that protect our clients' assets, people, and reputation through vigilance, professionalism, and an unwavering commitment to excellence in every region we serve.
            </p>
          </div>

          <div className="group bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-900 rounded-2xl mb-8 -rotate-3">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase italic">Our Vision</h2>
            <p className="text-gray-500 text-xl leading-relaxed font-light">
              To be recognized as Indias most reliable security partner, expanding our footprint from Goa and Faridabad to become the gold standard of safety and tactical innovation nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-4 uppercase italic">Core <span className="text-amber-500">Values</span></h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto font-light">The foundational pillars of our security architecture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors">
                  <value.icon className="h-8 w-8 text-amber-600 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase italic tracking-tighter">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-[60px] bg-[#0a0c10] p-16 relative overflow-hidden text-center border border-white/5">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#f59e0b 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 uppercase italic tracking-tighter">Ready for Elite <span className="text-amber-500">Protection?</span></h2>
            <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Whether you are in Goa or Faridabad, our professional security teams are ready to deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:9145560600" className="bg-amber-500 hover:bg-amber-400 text-black px-12 py-5 rounded-2xl text-xl font-black transition-all">
                GOA: 9145560600
              </a>
              <a href="tel:7775000216" className="bg-white hover:bg-gray-200 text-black px-12 py-5 rounded-2xl text-xl font-black transition-all">
                HR: 7775000216
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}