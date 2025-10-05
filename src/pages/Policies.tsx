import { Shield, FileText, HelpCircle, Phone, Mail } from 'lucide-react';

interface PoliciesProps {
  onNavigate: (page: string) => void;
}

export default function Policies({ onNavigate }: PoliciesProps) {
  return (
    <div className="bg-white">
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Policies & Support</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Our commitment to transparency and customer support
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-800 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                At Group One Security Services, we are committed to protecting your privacy and ensuring the security of your personal information.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h3>
              <p>
                We collect information that you provide to us directly when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request our security services</li>
                <li>Contact us through our website or communication channels</li>
                <li>Sign agreements or contracts with us</li>
                <li>Interact with our security personnel</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h3>
              <p>
                Your information is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and manage security services</li>
                <li>Communicate with you about our services</li>
                <li>Process payments and maintain records</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security personnel are trained in data protection and confidentiality.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h3>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information only when:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Required by law or legal processes</li>
                <li>Necessary to provide our services</li>
                <li>You have given explicit consent</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h3>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-800 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Terms & Conditions</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                By engaging our services, you agree to the following terms and conditions:
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Service Agreement</h3>
              <p>
                All security services are provided based on a mutually agreed contract that specifies the scope, duration, and terms of service. Services may be modified or terminated as per the agreement terms.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments are due as per the agreed schedule in the service contract</li>
                <li>Late payments may result in service suspension</li>
                <li>All fees are exclusive of applicable taxes unless stated otherwise</li>
                <li>Refunds are subject to the terms specified in the service agreement</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Service Standards</h3>
              <p>
                We commit to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide trained and professional security personnel</li>
                <li>Maintain appropriate licenses and insurance</li>
                <li>Respond promptly to service requests and emergencies</li>
                <li>Maintain confidentiality of client information</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Liability</h3>
              <p>
                While we take utmost care in providing security services, our liability is limited to the terms specified in the service agreement. We maintain appropriate insurance coverage for our operations.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Termination</h3>
              <p>
                Either party may terminate the service agreement by providing written notice as specified in the contract. Termination procedures and any applicable fees will be as per the agreement terms.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Dispute Resolution</h3>
              <p>
                Any disputes arising from our services will be resolved through mutual discussion. If required, disputes will be subject to the jurisdiction of courts in Goa, India.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-800 rounded-lg flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Support & Help</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                We are committed to providing excellent customer support. Our team is available to assist you with any questions or concerns.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-100">
                  <Phone className="h-8 w-8 text-amber-800 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-700 mb-3">Available 24/7 for emergencies</p>
                  <div className="space-y-1">
                    <a href="tel:9145560600" className="block text-amber-800 font-semibold hover:underline">
                      9145560600
                    </a>
                    <a href="tel:7775000240" className="block text-amber-800 font-semibold hover:underline">
                      7775000240
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-100">
                  <Mail className="h-8 w-8 text-amber-800 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-700 mb-3">We respond within 24 hours</p>
                  <a href="mailto:info@grouponesecurity.com" className="text-amber-800 font-semibold hover:underline">
                    info@grouponesecurity.com
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">What areas do you serve?</h4>
                  <p className="text-gray-700">We primarily serve clients across Goa and surrounding regions. Contact us for services in other locations.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Are your security personnel licensed?</h4>
                  <p className="text-gray-700">Yes, all our security personnel are properly licensed, trained, and background-verified.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Do you provide emergency services?</h4>
                  <p className="text-gray-700">Yes, we offer 24/7 emergency response services. Call our hotline for immediate assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is ready to help you with any inquiries
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
