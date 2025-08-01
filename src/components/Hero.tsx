import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Beyond Prompt Engineering:<br />
            <span className="text-blue-400">Swarm Intelligence</span> for Business
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
            While others rely on expensive, inconsistent prompt engineering, we build 
            precision-tuned AI swarms that deliver reliable, cost-effective automation 
            for your business processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/our-approach" 
              className="bg-accent hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Our Approach
            </Link>
            <Link 
              href="/contact" 
              className="border border-neutral-400 hover:border-white text-neutral-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}