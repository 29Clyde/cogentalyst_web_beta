import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us - Strategic AI for Financial Services | Cogentalyst',
  description: 'Ready to transform your financial services with AI? Contact Cogentalyst to discuss your business needs and discover how our strategic AI solutions can help.',
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-neutral-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let&apos;s Build Your AI Strategy
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
                Ready to harness AI for your financial services business? Tell us about your
                challenges and let&apos;s discuss how strategic AI solutions
                can drive your business value.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Start the Conversation
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Share details about your business objectives and AI strategy needs.
                  We&apos;ll respond within 24 hours with insights on how our approach
                  can help.
                </p>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Direct Contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <a 
                        href="mailto:info@cogentalyst.com" 
                        className="text-accent hover:text-blue-700 transition-colors"
                      >
                        info@cogentalyst.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Response Time</h4>
                      <p className="text-neutral-600">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border border-neutral-200">
                  <h4 className="font-semibold text-primary mb-3">What to Expect</h4>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Initial consultation to understand your needs
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Analysis of your current business challenges
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Custom proposal for your AI strategy solution
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Timeline and budget estimation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}