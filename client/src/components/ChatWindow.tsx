import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import RouteCard from './RouteCard';
import TypingIndicator from './TypingIndicator';
import { RouteResponse } from '@/lib/mockData';

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  route?: RouteResponse;
}

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isTyping }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to the bottom when messages change or typing indicator appears/disappears
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div 
      ref={chatContainerRef}
      className="flex-1 overflow-y-auto chat-container"
    >
      {messages.map((message, index) => (
        <div key={message.id} className={`w-full py-6 ${message.isUser ? 'bg-[#f7f7f8]' : 'bg-white'}`}>
          <div className="message-container">
            <MessageBubble isUser={message.isUser} message={message.text}>
              {message.route && !message.isUser && <RouteCard route={message.route} />}
              {message.route && !message.isUser && (
                <p className="text-gray-700 mt-3">{message.route.additionalInfo}</p>
              )}
            </MessageBubble>
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="w-full py-6 bg-white">
          <div className="message-container">
            <TypingIndicator />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
