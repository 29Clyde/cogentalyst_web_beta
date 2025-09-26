export default function Services() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We help financial services companies harness the power of AI through strategic consulting and custom model development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Strategy Consulting */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">AI Strategy Consulting</h3>
            <p className="text-neutral-700 mb-6">
              Develop a comprehensive AI roadmap tailored to your business objectives. We help you identify high-impact use cases, assess technical requirements, and create implementation strategies that align with regulatory requirements in financial services.
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Strategic AI assessment and planning
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Use case identification and prioritization
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Regulatory compliance guidance
              </li>
            </ul>
          </div>

          {/* Custom Model Development */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Custom Model Development & Deployment</h3>
            <p className="text-neutral-700 mb-6">
              Build and deploy production-ready AI models tailored to your specific needs. From data processing pipelines to model training and deployment infrastructure, we handle the complete development lifecycle.
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                End-to-end model development
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Cloud deployment and scaling
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Ongoing monitoring and optimization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}