import React from 'react';

interface MessageBubbleProps {
  isUser: boolean;
  message: string;
  children?: React.ReactNode;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ isUser, message, children }) => {
  if (isUser) {
    return (
      <div className="flex items-start justify-end mb-4">
        <div className="mr-2 bg-user border border-user-border p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%]">
          <p className="text-gray-800">{message}</p>
        </div>
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start mb-4">
      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      </div>
      <div className="ml-2 bg-bot p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%]">
        <p className="text-gray-800">{message}</p>
        {children}
      </div>
    </div>
  );
};

export default MessageBubble;
