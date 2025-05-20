import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with subtle border */}
      <header className="border-b border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16v-2h2v2h-2zm1-10.75c-1.1 0-2 .9-2 2v.5h2v-.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1v2h2v-1c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2 0-1.1-.9-2-2-2z"/>
            </svg>
            <h1 className="ml-2 text-2xl font-semibold text-gray-800">CommuteGPT</h1>
          </div>
          <Link href="/chat">
            <Button className="bg-primary hover:bg-primary-dark text-white font-medium px-5 py-2.5">
              Try CommuteGPT
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-20 md:py-28 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          The smarter way to navigate <br className="hidden sm:inline" />
          the Philippines
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mb-10">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">How CommuteGPT helps you</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="text-xl font-medium mb-3 text-gray-900">Optimal Routes</h4>
              <p className="text-gray-600 leading-relaxed">Find the best route based on your preferences – fastest, cheapest, or most convenient.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium mb-3 text-gray-900">Time & Cost Estimates</h4>
              <p className="text-gray-600 leading-relaxed">Get accurate estimates of travel time and transportation costs for better planning.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium mb-3 text-gray-900">Natural Language</h4>
              <p className="text-gray-600 leading-relaxed">Just ask in plain language and get detailed, step-by-step directions instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-3xl font-bold mb-14 text-gray-900">See CommuteGPT in action</h3>
          
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className="border-b border-gray-200 bg-white p-4 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
              <div className="text-center flex-grow text-sm text-gray-500">CommuteGPT Chat</div>
            </div>
            <div className="bg-[#f7f7f8] p-6 flex flex-col gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
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
              <div className="bg-[#f7f7f8] p-5 rounded-lg">
                <div className="flex items-start gap-4">
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
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 mb-3">Here's what I found for you:</p>
                    <div className="bg-[#f7f7f8] p-4 rounded-lg border border-gray-200 mb-2">
                      <h4 className="font-medium">Cubao to Makati Route</h4>
                      <div className="mt-3 space-y-2.5">
                        <div className="flex items-start">
                          <span className="mr-3 text-lg">🚶</span>
                          <p className="text-sm text-gray-700">Walk to MRT Cubao Station (5 mins)</p>
                        </div>
                        <div className="flex items-start">
                          <span className="mr-3 text-lg">🚆</span>
                          <p className="text-sm text-gray-700">Take MRT southbound to Ayala Station (25 mins)</p>
                        </div>
                        <div className="flex items-start">
                          <span className="mr-3 text-lg">🚶</span>
                          <p className="text-sm text-gray-700">Walk to your destination (5-10 mins)</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-gray-200 text-sm text-gray-700">
                        <span>💸 Cost: ₱30 • ⏱️ ~40 mins total</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-14">
            <Link href="/chat">
              <Button className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 text-lg">
                Try it yourself
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16v-2h2v2h-2zm1-10.75c-1.1 0-2 .9-2 2v.5h2v-.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1v2h2v-1c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2 0-1.1-.9-2-2-2z"/>
              </svg>
              <span className="ml-2 text-gray-600 font-medium">CommuteGPT</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">About</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">FAQ</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} CommuteGPT. For demonstration purposes only.</p>
            <p className="mt-2">Helping Filipinos navigate their daily commutes more efficiently.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;