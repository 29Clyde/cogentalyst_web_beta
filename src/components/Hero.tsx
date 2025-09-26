import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Strategic AI for <span className="text-blue-400">Financial Services</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
            From concept to deployment, we build AI solutions that drive business value.
            Experience our capabilities through interactive proofs-of-concept.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#model-showcase"
              className="bg-accent hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Our Models
            </Link>
            <Link
              href="/contact"
              className="border border-neutral-400 hover:border-white text-neutral-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}