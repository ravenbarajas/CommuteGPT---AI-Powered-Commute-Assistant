import React from 'react';

interface MessageBubbleProps {
  isUser: boolean;
  message: string;
  children?: React.ReactNode;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ isUser, message, children }) => {
  if (isUser) {
    return (
      <div className="flex items-start">
        <div className="flex-grow text-gray-800">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 flex-shrink-0 mt-0.5">
              <div className="h-full w-full rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed">{message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start">
      <div className="flex-grow text-gray-800">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 flex-shrink-0 mt-0.5">
            <div className="h-full w-full rounded-sm bg-primary/90 flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed">{message}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
