export default function ProblemSolution() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              The Problem with Prompt Engineering
            </h2>
            <div className="space-y-4 text-lg text-neutral-700">
              <p>
                <span className="font-semibold text-red-600">Expensive:</span> Large language models 
                consume massive computational resources for simple tasks.
              </p>
              <p>
                <span className="font-semibold text-red-600">Inconsistent:</span> Prompt engineering 
                relies on trial-and-error, producing unpredictable results.
              </p>
              <p>
                <span className="font-semibold text-red-600">Fragile:</span> Small changes in prompts 
                can completely break your automation workflows.
              </p>
              <p>
                <span className="font-semibold text-red-600">Overkill:</span> Using general-purpose 
                models for specialized tasks is like using a bulldozer to plant flowers.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Swarm Intelligence Solution
            </h2>
            <div className="space-y-4 text-lg text-neutral-700">
              <p>
                <span className="font-semibold text-green-600">Cost-Effective:</span> Right-sized 
                models for specific tasks, reducing computational costs by up to 80%.
              </p>
              <p>
                <span className="font-semibold text-green-600">Reliable:</span> Fine-tuned models 
                trained on your specific data deliver consistent, predictable results.
              </p>
              <p>
                <span className="font-semibold text-green-600">Robust:</span> Multiple specialized 
                models working together create resilient automation systems.
              </p>
              <p>
                <span className="font-semibold text-green-600">Precise:</span> Each model is 
                optimized for its specific role in your business process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}