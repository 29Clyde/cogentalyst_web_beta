export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Deconstruct',
      description: 'We map your business processes to their atomic decision nodes, identifying exactly what needs to be automated.',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Fine-Tune',
      description: 'We select and fine-tune right-sized models for each specific task, using your data to ensure accuracy.',
      icon: '⚙️'
    },
    {
      number: '03',
      title: 'Swarm',
      description: 'Multiple specialized models work in concert, creating an intelligent swarm that handles your entire workflow.',
      icon: '🚀'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our proven three-step methodology transforms your business processes 
            into efficient, reliable AI-powered workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/our-approach" 
            className="inline-flex items-center text-accent hover:text-blue-700 font-semibold text-lg transition-colors"
          >
            Learn More About Our Approach
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}