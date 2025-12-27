import {  MapPin, Facebook, Instagram, Shield, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070a] text-white border-t border-amber-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => onNavigate('home')}>
              <Shield className="h-12 w-12 text-amber-500" strokeWidth={1.5} />
              <div>
                <h2 className="text-3xl font-black tracking-tighter uppercase italic leading-none">
                  GROUP<span className="text-amber-500">ONE</span>
                </h2>
                <p className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mt-1">Security</p>
              </div>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Professional security solutions tailored to your needs. Your safety is our absolute priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-black transition-all"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-black transition-all"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-6">Explore</h3>
            <ul className="space-y-4">
              {['about', 'services', 'gallery', 'contact'].map((item) => (
                <li key={item}>
                  <button onClick={() => onNavigate(item)} className="text-gray-400 hover:text-white text-lg capitalize flex items-center group">
                    <ChevronRight className="h-4 w-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-all" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Offices Section (Goa & Faridabad) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goa Office */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-500">
                <MapPin className="h-5 w-5" />
                <span className="font-bold uppercase tracking-tighter text-lg">Goa Office</span>
              </div>
              <p className="text-gray-400 text-base leading-snug">
                5th Floor, Imperium Star, Patto Centre, Panaji, Goa - 403001
              </p>
              <div className="flex flex-col text-lg font-bold">
                <a href="tel:+919145560600" className="hover:text-amber-500 transition">+91 91455 60600</a>
                <a href="tel:+918806744040" className="hover:text-amber-500 transition">+91 88067 44040</a>
              </div>
            </div>

            {/* Faridabad Office */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-500">
                <MapPin className="h-5 w-5" />
                <span className="font-bold uppercase tracking-tighter text-lg">Faridabad Office</span>
              </div>
              <p className="text-gray-400 text-base leading-snug">
                GF-60, Parsvnath City Mall, Sector 12, Haryana - 121007
              </p>
              <div className="flex flex-col text-lg font-bold">
                <a href="tel:+917775000216" className="hover:text-amber-500 transition">+91 77750 00216</a>
                <a href="tel:+917775000248" className="hover:text-amber-500 transition">+91 77750 00248</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm font-medium tracking-wide">
              © {currentYear} <span className="text-gray-300">GroupOne Security </span>. All rights reserved.
            </p>
            <a href="mailto:info@grouponesecurity.in" className="text-amber-500 font-bold hover:underline block mt-1 text-base">
              info@grouponesecurity.in
            </a>
          </div>
          
          <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 group">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Designed by</span>
            <a href="https://www.greatertechhub.com" target="_blank" className="text-lg font-black text-amber-500 tracking-tighter">
              GREATERTECHHUB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}