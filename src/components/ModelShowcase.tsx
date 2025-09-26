import Link from 'next/link';

export default function ModelShowcase() {
  return (
    <section id="model-showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Interactive Model Showcase</h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
            Experience our Retrieval-Augmented Generation (RAG) technology through our Fannie Mae underwriting assistant.
            This interactive proof-of-concept demonstrates how AI can process complex regulatory documents to provide
            accurate, cited answers for mortgage professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Question & Answer Demo */}
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg p-8 shadow-sm">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Question & Answer Demo</h3>
            <p className="text-neutral-700 mb-6">
              Ask freeform questions about Fannie Mae guidelines and requirements. Our RAG model searches through
              the complete Selling Guide (1,183 pages) to provide accurate answers with source citations.
            </p>
            <div className="mb-6">
              <p className="text-sm font-medium text-neutral-600 mb-2">Try asking:</p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• "What are the DTI requirements for conventional loans?"</li>
                <li>• "What credit score is required for Fannie Mae loans?"</li>
                <li>• "What are the income documentation requirements?"</li>
              </ul>
            </div>
            <Link
              href="/demo/qa"
              className="block w-full bg-accent hover:bg-blue-700 text-white text-center py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
            >
              Launch Q&A Demo
            </Link>
          </div>

          {/* Loan Underwriting Analysis Demo */}
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg p-8 shadow-sm">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Loan Underwriting Analysis</h3>
            <p className="text-neutral-700 mb-6">
              Analyze specific loan scenarios against Fannie Mae underwriting requirements. Enter loan characteristics
              to receive eligibility assessment and documentation requirements with regulatory citations.
            </p>
            <div className="mb-6">
              <p className="text-sm font-medium text-neutral-600 mb-2">Analysis includes:</p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Loan-to-Value (LTV) ratio compliance</li>
                <li>• Debt-to-Income (DTI) ratio assessment</li>
                <li>• Credit score requirements</li>
                <li>• Documentation and eligibility requirements</li>
              </ul>
            </div>
            <Link
              href="/demo/underwriting"
              className="block w-full bg-accent hover:bg-blue-700 text-white text-center py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
            >
              Launch Analysis Demo
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600">
            These demos showcase production-ready AI models processing real regulatory data.
            Ready to build similar solutions for your business?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block border border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us for a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}