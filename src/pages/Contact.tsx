import { useState } from 'react';
import { MapPin, Phone, Mail,  Send, CheckCircle, Shield } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fa5dac44-b6fd-4cf2-8f8c-a26e9f049e7a',
          ...formData,
          subject: 'New Contact Form Submission from Group One Security',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
      } else {
        setError('Failed to send message: ' + (result.message || 'Unknown error. Please try again later.'));
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('An error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-amber-950 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-8">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Available Pan-India</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter italic">CONTACT <span className="text-amber-500">US</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our command centers for elite protection services tailored to your specific requirements.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Form Section */}
            <div>
              <div className="mb-10">
                <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase italic">Send a Message</h2>
                <div className="h-1 w-20 bg-amber-600"></div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-center gap-3">
                  <div className="h-2 w-2 bg-red-600 rounded-full animate-pulse"></div>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                    <input
                      type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Requirement Details</label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none resize-none"
                    placeholder="Briefly describe your security needs..."
                  />
                </div>

                <button
                  type="submit" disabled={submitted || loading}
                  className="w-full bg-gray-900 hover:bg-black text-white px-8 py-5 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-3 disabled:bg-green-600 shadow-xl shadow-gray-200 hover:shadow-gray-300 active:scale-[0.98]"
                >
                  {submitted ? (
                    <><CheckCircle className="h-6 w-6" /> Transmission Successful</>
                  ) : loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    <><Send className="h-5 w-5" /> Dispatch Message</>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-8 lg:pl-10">
              <div className="mb-10">
                <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase italic">Regional </h2>
                <div className="h-1 w-20 bg-amber-600"></div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Goa Office */}
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-amber-500/30 transition-all">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20 group-hover:rotate-6 transition-transform">
                      <MapPin className="h-7 w-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 uppercase italic mb-3">Goa Office</h3>
                      <p className="text-gray-600 text-lg leading-snug mb-4">
                        5th Floor, Gera's Imperium Star,<br />Patto Centre, Panaji, Goa - 403001
                      </p>
                      <div className="space-y-1">
                        <a href="tel:+919145560600" className="text-xl font-bold text-gray-900 hover:text-amber-600 transition block">+91 91455 60600</a>
                        <a href="tel:+918806744040" className="text-xl font-bold text-gray-900 hover:text-amber-600 transition block">+91 88067 44040</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Faridabad Office */}
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-amber-500/30 transition-all">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-gray-900/20 group-hover:rotate-6 transition-transform">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 uppercase italic mb-3">Faridabad Office</h3>
                      <p className="text-gray-600 text-lg leading-snug mb-4">
                        GF-60, Parsvnath City Mall,<br />Sector 12, Faridabad, Haryana - 121007
                      </p>
                      <div className="space-y-1">
                        <a href="tel:+917775000216" className="text-xl font-bold text-gray-900 hover:text-amber-600 transition block">+91 77750 00216</a>
                        <a href="tel:+917775000248" className="text-xl font-bold text-gray-900 hover:text-amber-600 transition block">+91 77750 00248</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Global Contact */}
                <div className="flex items-center gap-6 p-6 border-t border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Official Inquiry</p>
                    <a href="mailto:info@grouponesecurity.in" className="text-lg font-bold text-gray-900 hover:text-amber-600 transition">info@grouponesecurity.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call-to-Action */}
      <section className="py-20 px-4 bg-gray-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter">Immediate Assistance Required?</h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Our Rapid Response Team is available 24/7. Contact our emergency dispatch line now.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:9145560600" className="px-10 py-5 bg-amber-600 hover:bg-amber-500 text-black text-xl font-black rounded-xl transition-all flex items-center justify-center gap-3">
              <Phone className="h-6 w-6 fill-current" /> GOA: 91455 60600
            </a>
            <a href="tel:7775000216" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/20 text-xl font-black rounded-xl transition-all flex items-center justify-center gap-3">
              <Phone className="h-6 w-6" /> HR: 77750 00216
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}