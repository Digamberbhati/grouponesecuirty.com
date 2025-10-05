import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for professional security solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your security needs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:bg-green-600 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100">
                    <div className="w-12 h-12 bg-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Phone</h3>
                      <a href="tel:9145560600" className="text-gray-700 hover:text-amber-800 transition-colors block">
                        9145560600
                      </a>
                      <a href="tel:7775000240" className="text-gray-700 hover:text-amber-800 transition-colors block">
                        7775000240
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100">
                    <div className="w-12 h-12 bg-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Email</h3>
                      <a href="mailto:info@grouponesecurity.com" className="text-gray-700 hover:text-amber-800 transition-colors">
                        info@grouponesecurity.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100">
                    <div className="w-12 h-12 bg-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Address</h3>
                      <p className="text-gray-700">
                        3rd Floor, Gera's Imperium Grand, 302,<br />
                        Patto Centre, Panaji,<br />
                        Goa 403001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100">
                    <div className="w-12 h-12 bg-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Business Hours</h3>
                      <p className="text-gray-700">
                        Available 24/7 for emergencies<br />
                        Office Hours: Monday - Saturday<br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.2614733384734!2d73.82711!3d15.49414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc06f2f000001%3A0x1234567890abcdef!2sGera&#39;s%20Imperium%20Grand!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Group One Security Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is available 24/7 to respond to your security needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9145560600"
              className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Emergency: 9145560600
            </a>
            <a
              href="tel:7775000240"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Support: 7775000240
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
