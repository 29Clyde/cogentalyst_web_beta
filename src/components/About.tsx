export default function About() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Cogentalyst</h2>
            <div className="space-y-4 text-lg text-neutral-700">
              <p>
                We specialize in building AI solutions that drive real business value in the financial services industry.
                Our expertise lies in developing sophisticated, industry-specific models that understand complex regulatory
                environments and business requirements.
              </p>
              <p>
                Unlike generic AI consultancies, we focus exclusively on financial services, bringing deep domain knowledge
                to every project. Our team combines technical expertise in machine learning and natural language processing
                with practical experience in mortgage, banking, and investment sectors.
              </p>
              <p>
                From strategy development to production deployment, we partner with organizations to implement AI solutions
                that are not just technically sound, but also compliant, scalable, and aligned with business objectives.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Our Approach</h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span><strong>Domain-First:</strong> We understand financial services before we build technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span><strong>Compliance-Ready:</strong> Built with regulatory requirements in mind from day one</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span><strong>Production-Focused:</strong> Scalable solutions designed for enterprise deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span><strong>Results-Driven:</strong> Measurable business impact through strategic AI implementation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Technical Excellence</h4>
                    <p className="text-sm text-neutral-600">Cutting-edge AI/ML technologies</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Regulatory Focus</h4>
                    <p className="text-sm text-neutral-600">Compliance-first development</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Industry Expertise</h4>
                    <p className="text-sm text-neutral-600">Deep financial services knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}