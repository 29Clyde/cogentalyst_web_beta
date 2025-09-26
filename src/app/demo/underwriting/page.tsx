'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LoanData {
  ltv: number;
  dti: number;
  credit_score: number;
  property_type: string;
  occupancy: string;
}

interface Requirement {
  requirement: string;
  source: {
    document: string;
    section: string;
    page: number;
  };
}

interface APIResponse {
  loan_data: LoanData;
  analysis: string;
  requirements: Requirement[];
}

export default function UnderwritingDemo() {
  const [formData, setFormData] = useState({
    ltv: '',
    dti: '',
    credit_score: '',
    property_type: 'Single Family',
    occupancy: 'Primary'
  });
  const [result, setResult] = useState<APIResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setResult(null);

    try {
      const requestData = {
        ltv: parseFloat(formData.ltv),
        dti: parseFloat(formData.dti),
        credit_score: parseInt(formData.credit_score),
        property_type: formData.property_type,
        occupancy: formData.occupancy
      };

      const response = await fetch('https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod/underwrite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data: APIResponse = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to analyze loan. Please try again.');
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const presetExamples = [
    { name: 'High LTV Scenario', ltv: '95', dti: '35', credit_score: '720', property_type: 'Single Family', occupancy: 'Primary' },
    { name: 'High DTI Scenario', ltv: '80', dti: '45', credit_score: '750', property_type: 'Condo', occupancy: 'Primary' },
    { name: 'Investment Property', ltv: '75', dti: '30', credit_score: '740', property_type: 'Single Family', occupancy: 'Investment' }
  ];

  const loadExample = (example: typeof presetExamples[0]) => {
    setFormData({
      ltv: example.ltv,
      dti: example.dti,
      credit_score: example.credit_score,
      property_type: example.property_type,
      occupancy: example.occupancy
    });
    setResult(null);
    setError('');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary to-neutral-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Fannie Mae Loan Underwriting Analysis
            </h1>
            <p className="text-xl text-neutral-300">
              Analyze loan scenarios against Fannie Mae underwriting requirements. Enter loan characteristics
              to receive eligibility assessment and documentation requirements with regulatory citations.
            </p>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-primary mb-6">Enter Loan Data</h2>

                {/* Preset Examples */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-neutral-600 mb-3">Quick Examples:</h3>
                  <div className="space-y-2">
                    {presetExamples.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => loadExample(example)}
                        className="block w-full text-left p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg text-sm text-neutral-700 transition-colors"
                      >
                        <span className="font-medium">{example.name}</span>
                        <span className="text-neutral-500 ml-2">
                          (LTV: {example.ltv}%, DTI: {example.dti}%, Score: {example.credit_score})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ltv" className="block text-sm font-semibold text-primary mb-2">
                        Loan-to-Value Ratio (%) *
                      </label>
                      <input
                        type="number"
                        id="ltv"
                        name="ltv"
                        required
                        min="0"
                        max="100"
                        step="0.1"
                        value={formData.ltv}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="e.g., 85"
                      />
                    </div>

                    <div>
                      <label htmlFor="dti" className="block text-sm font-semibold text-primary mb-2">
                        Debt-to-Income Ratio (%) *
                      </label>
                      <input
                        type="number"
                        id="dti"
                        name="dti"
                        required
                        min="0"
                        max="100"
                        step="0.1"
                        value={formData.dti}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="e.g., 28"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="credit_score" className="block text-sm font-semibold text-primary mb-2">
                      Credit Score *
                    </label>
                    <input
                      type="number"
                      id="credit_score"
                      name="credit_score"
                      required
                      min="300"
                      max="850"
                      value={formData.credit_score}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="e.g., 740"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="property_type" className="block text-sm font-semibold text-primary mb-2">
                        Property Type
                      </label>
                      <select
                        id="property_type"
                        name="property_type"
                        value={formData.property_type}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="Single Family">Single Family</option>
                        <option value="Condo">Condo</option>
                        <option value="Townhome">Townhome</option>
                        <option value="2-4 Unit">2-4 Unit</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="occupancy" className="block text-sm font-semibold text-primary mb-2">
                        Occupancy Type
                      </label>
                      <select
                        id="occupancy"
                        name="occupancy"
                        value={formData.occupancy}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="Primary">Primary Residence</option>
                        <option value="Secondary">Secondary Residence</option>
                        <option value="Investment">Investment Property</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-accent hover:bg-blue-700 disabled:bg-neutral-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    {isLoading ? 'Analyzing...' : 'Analyze Loan'}
                  </button>
                </form>
              </div>

              {/* Results */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-primary mb-6">Analysis Results</h2>

                {!result && !isLoading && (
                  <div className="text-center text-neutral-500 py-12">
                    <svg className="w-16 h-16 mx-auto mb-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p>Your analysis will appear here after you submit loan data.</p>
                  </div>
                )}

                {isLoading && (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
                    <p className="text-neutral-600">Analyzing against Fannie Mae guidelines...</p>
                  </div>
                )}

                {result && (
                  <div className="space-y-6">
                    {/* Loan Summary */}
                    <div className="bg-neutral-50 rounded-lg p-4">
                      <h3 className="font-semibold text-primary mb-3">Loan Summary</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-neutral-600">LTV:</span>
                          <span className="font-medium ml-2">{result.loan_data.ltv}%</span>
                        </div>
                        <div>
                          <span className="text-neutral-600">DTI:</span>
                          <span className="font-medium ml-2">{result.loan_data.dti}%</span>
                        </div>
                        <div>
                          <span className="text-neutral-600">Credit Score:</span>
                          <span className="font-medium ml-2">{result.loan_data.credit_score}</span>
                        </div>
                        <div>
                          <span className="text-neutral-600">Property:</span>
                          <span className="font-medium ml-2">{result.loan_data.property_type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Analysis */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3">Analysis Summary</h3>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-neutral-700 whitespace-pre-wrap">{result.analysis}</p>
                      </div>
                    </div>

                    {/* Requirements */}
                    {result.requirements && result.requirements.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-primary mb-3">Requirements & Documentation</h3>
                        <div className="space-y-3">
                          {result.requirements.map((req, index) => (
                            <div key={index} className="border border-neutral-200 rounded-lg p-4">
                              <p className="text-neutral-800 mb-2">{req.requirement}</p>
                              <p className="text-sm text-neutral-600">
                                <span className="font-medium text-accent">Source:</span>{' '}
                                {req.source.document}, Section {req.source.section}, Page {req.source.page}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}