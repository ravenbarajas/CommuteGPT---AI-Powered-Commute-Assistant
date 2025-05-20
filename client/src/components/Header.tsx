import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-2.5 flex items-center justify-center shadow-sm">
      <div className="message-container flex items-center justify-between w-full">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16v-2h2v2h-2zm1-10.75c-1.1 0-2 .9-2 2v.5h2v-.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1v2h2v-1c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2 0-1.1-.9-2-2-2z"/>
          </svg>
          <h1 className="ml-2 text-xl font-semibold text-gray-800">CommuteGPT</h1>
        </div>
        <div className="text-sm text-gray-500 hidden sm:block">Philippines Commute Assistant</div>
      </div>
    </header>
  );
};

export default Header;
