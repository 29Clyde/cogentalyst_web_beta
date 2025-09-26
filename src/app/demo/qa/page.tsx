'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Source {
  section_id: string;
  title: string;
  page_number: number;
  document: string;
}

interface APIResponse {
  answer: string;
  sources: Source[];
}

interface Message {
  type: 'user' | 'assistant';
  content: string;
  sources?: Source[];
}

export default function QADemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setError('');
    setIsLoading(true);

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

    try {
      const response = await fetch('https://kp7udk1kac.execute-api.us-east-1.amazonaws.com/prod/question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data: APIResponse = await response.json();

      // Add assistant response
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: data.answer,
        sources: data.sources
      }]);
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const exampleQuestions = [
    "What are the DTI requirements for conventional loans?",
    "What credit score is required for Fannie Mae loans?",
    "What are the income documentation requirements?"
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary to-neutral-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Fannie Mae Q&A Assistant
            </h1>
            <p className="text-xl text-neutral-300">
              Ask questions about Fannie Mae guidelines and requirements. Our RAG model searches
              through the complete Selling Guide to provide accurate answers with source citations.
            </p>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Example Questions */}
            {messages.length === 0 && (
              <div className="mb-8 bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-4">Try asking:</h3>
                <div className="space-y-2">
                  {exampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(question)}
                      className="block w-full text-left p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg text-neutral-700 transition-colors"
                    >
                      &ldquo;{question}&rdquo;
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="space-y-6 mb-8">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-3xl ${message.type === 'user' ? 'bg-accent text-white' : 'bg-white text-neutral-800'} rounded-lg p-6 shadow-sm`}>
                    <div className="whitespace-pre-wrap">{message.content}</div>

                    {message.sources && message.sources.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-neutral-200">
                        <h4 className="font-semibold text-sm text-neutral-600 mb-2">Sources:</h4>
                        <ul className="space-y-2">
                          {message.sources.map((source, sourceIndex) => (
                            <li key={sourceIndex} className="text-sm">
                              <span className="font-medium text-accent">[{source.section_id}]</span>{' '}
                              <span className="text-neutral-700">{source.title}</span>{' '}
                              <span className="text-neutral-500">(Page {source.page_number})</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent"></div>
                      <span className="text-neutral-600">Searching Fannie Mae guidelines...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Input Form */}
            <div className="sticky bottom-0 bg-neutral-50 pt-4">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-neutral-200">
                <div className="flex items-end p-4">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question about Fannie Mae guidelines..."
                    className="flex-1 resize-none bg-transparent border-none outline-none text-neutral-800 placeholder-neutral-500"
                    rows={1}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                      }
                    }}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="ml-4 bg-accent hover:bg-blue-700 disabled:bg-neutral-300 text-white p-3 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}