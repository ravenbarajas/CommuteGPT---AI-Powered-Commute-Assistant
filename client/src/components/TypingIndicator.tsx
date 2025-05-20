import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start">
      <div className="flex-grow">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 flex-shrink-0 mt-0.5">
            <div className="h-full w-full rounded-sm bg-primary/90 flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
          <div className="py-1">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
