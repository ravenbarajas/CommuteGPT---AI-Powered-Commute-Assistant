import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with subtle border */}
      <header className="border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16v-2h2v2h-2zm1-10.75c-1.1 0-2 .9-2 2v.5h2v-.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1v2h2v-1c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2 0-1.1-.9-2-2-2z"/>
            </svg>
            <h1 className="ml-2 text-2xl font-semibold text-gray-800">CommuteGPT</h1>
          </div>
          <Link href="/chat">
            <Button className="bg-primary hover:bg-primary-dark text-white font-medium">
              Try CommuteGPT
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          The smarter way to navigate <br className="hidden sm:inline" />
          the Philippines
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mb-8">
          CommuteGPT is your personal commute assistant, helping you find the best routes across the Philippines with real-time information.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/chat">
            <Button className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-6 text-lg h-auto">
              Start navigating
            </Button>
          </Link>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-900">How CommuteGPT helps you</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-900">Optimal Routes</h4>
              <p className="text-gray-600">Find the best route based on your preferences – fastest, cheapest, or most convenient.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-900">Time & Cost Estimates</h4>
              <p className="text-gray-600">Get accurate estimates of travel time and transportation costs for better planning.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-900">Natural Language</h4>
              <p className="text-gray-600">Just ask in plain language and get detailed, step-by-step directions instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl font-bold mb-12 text-gray-900">See CommuteGPT in action</h3>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="border-b border-gray-200 bg-white p-4 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
              <div className="text-center flex-grow text-sm text-gray-500">CommuteGPT Chat</div>
            </div>
            <div className="bg-[#f7f7f8] p-4 flex flex-col gap-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 mb-2">How can I help you navigate today?</p>
                    <p className="text-gray-700">I can find the best commute routes in the Philippines based on your preferences.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f7f7f8] p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800">How do I get from Cubao to Makati?</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 mb-2">Here's what I found for you:</p>
                    <div className="bg-[#f7f7f8] p-3 rounded border border-gray-200 mb-2">
                      <h4 className="font-medium">Cubao to Makati Route</h4>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-start">
                          <span className="mr-2">🚶</span>
                          <p className="text-sm text-gray-700">Walk to MRT Cubao Station (5 mins)</p>
                        </div>
                        <div className="flex items-start">
                          <span className="mr-2">🚆</span>
                          <p className="text-sm text-gray-700">Take MRT southbound to Ayala Station (25 mins)</p>
                        </div>
                        <div className="flex items-start">
                          <span className="mr-2">🚶</span>
                          <p className="text-sm text-gray-700">Walk to your destination (5-10 mins)</p>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <span>💸 Cost: ₱30 • ⏱️ ~40 mins total</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <Link href="/chat">
              <Button className="bg-primary hover:bg-primary-dark text-white font-medium">
                Try it yourself
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2023 CommuteGPT. For demonstration purposes only.</p>
            <p className="mt-2">Helping Filipinos navigate their daily commutes more efficiently.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;