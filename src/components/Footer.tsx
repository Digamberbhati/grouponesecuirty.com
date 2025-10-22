import { Phone, Mail, MapPin, Facebook,  Instagram, } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo/logo.png" alt="Group One Logo" className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Group One</span>
                <span className="text-xs text-amber-600">Security Services</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional security solutions tailored to your needs. Your safety is our priority.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-amber-600 transition-colors text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-gray-400 hover:text-amber-600 transition-colors text-sm">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="text-gray-400 hover:text-amber-600 transition-colors text-sm">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-amber-600 transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <div>9145560600</div>
                  <div>7775000240</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">info@grouponesecurity.in</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  3rd Floor, Gera's Imperium Grand, 302, Patto Centre, Panaji, Goa 403001
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Twitter className="h-6 w-6" />
              </a> */}
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a> */}
            </div>
            <div className="space-y-2">
              <button onClick={() => onNavigate('policies')} className="block text-gray-400 hover:text-amber-600 transition-colors text-sm">
                Privacy Policy
              </button>
              <button onClick={() => onNavigate('policies')} className="block text-gray-400 hover:text-amber-600 transition-colors text-sm">
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Group One Security Services. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Managed and designed by{' '}
            <a
              href="https://www.greatertechhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:underline"
            >
              GreaterTechHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}