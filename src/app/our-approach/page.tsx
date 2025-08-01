import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Approach - Swarm Intelligence Methodology | Cogentalyst',
  description: 'Learn about our revolutionary Swarm Intelligence approach to AI automation: Process Deconstruction, Right-Sized Model Selection, Data-Driven Fine-Tuning, and Intelligent Swarms.',
};

export default function OurApproach() {
  const methodologySteps = [
    {
      number: '01',
      title: 'Process Deconstruction',
      description: 'We begin by thoroughly analyzing your business processes, breaking them down into their fundamental decision points and data flows. This granular mapping allows us to identify exactly which tasks require AI intervention and which can be handled by simpler automation.',
      details: [
        'Map business workflows to atomic decision nodes',
        'Identify data dependencies and flow patterns',
        'Classify tasks by complexity and automation potential',
        'Document current inefficiencies and bottlenecks'
      ]
    },
    {
      number: '02',
      title: 'Right-Sized Model Selection',
      description: 'Instead of using oversized, general-purpose models for every task, we carefully select the optimal model architecture for each specific function. This might range from simple encoders for classification tasks to specialized small language models for content generation.',
      details: [
        'Match model capacity to task complexity',
        'Consider latency, cost, and accuracy trade-offs',
        'Evaluate specialized vs. general-purpose architectures',
        'Select optimal model size for deployment constraints'
      ]
    },
    {
      number: '03',
      title: 'Data-Driven Fine-Tuning',
      description: 'We fine-tune each selected model using your specific business data and processes. This creates models that understand your domain, terminology, and requirements, delivering significantly higher accuracy than generic solutions.',
      details: [
        'Curate high-quality training datasets from your operations',
        'Implement domain-specific fine-tuning strategies',
        'Validate model performance against real business metrics',
        'Iteratively improve models based on production feedback'
      ]
    },
    {
      number: '04',
      title: 'The Intelligent Swarm',
      description: 'The fine-tuned models are orchestrated to work together as an intelligent swarm. Each model handles its specialized task while communicating seamlessly with others, creating a robust, efficient, and scalable automation system.',
      details: [
        'Design inter-model communication protocols',
        'Implement fault-tolerant orchestration systems',
        'Create feedback loops for continuous improvement',
        'Monitor and optimize swarm performance in production'
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-neutral-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Cogentalyst Method
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
                A systematic approach to building AI automation that&apos;s reliable, 
                cost-effective, and precisely tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why a Different Approach is Needed
              </h2>
              <div className="text-lg text-neutral-700 space-y-4">
                <p>
                  The current AI landscape is dominated by a &ldquo;one-size-fits-all&rdquo; mentality. 
                  Companies are trying to solve every automation challenge with massive, 
                  general-purpose language models accessed through prompt engineering.
                </p>
                <p>
                  This approach is fundamentally flawed. It&apos;s like using a supercomputer 
                  to calculate your grocery bill – technically possible, but wasteful, 
                  expensive, and unreliable.
                </p>
                <p>
                  At Cogentalyst, we believe in precision engineering. We build AI systems 
                  that are exactly as complex as they need to be, no more and no less. 
                  The result is automation that works consistently, costs less, and scales effortlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Steps */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Our Four-Step Methodology
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Each step builds upon the previous one, creating a comprehensive 
                AI automation solution tailored to your specific needs.
              </p>
            </div>

            <div className="space-y-20">
              {methodologySteps.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                          {step.number}
                        </div>
                        <h3 className="text-3xl font-bold text-primary">{step.title}</h3>
                      </div>
                      <p className="text-lg text-neutral-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-4">Key Activities:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-neutral-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Your AI Swarm?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our Swarm Intelligence methodology can transform 
              your business processes into efficient, reliable automation.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors inline-block"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}