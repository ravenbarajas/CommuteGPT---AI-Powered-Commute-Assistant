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
      className="flex-1 overflow-y-auto p-4 bg-gray-50 chat-container"
    >
      {messages.map((message) => (
        <MessageBubble key={message.id} isUser={message.isUser} message={message.text}>
          {message.route && !message.isUser && <RouteCard route={message.route} />}
          {message.route && !message.isUser && (
            <p className="text-gray-700 mt-3">{message.route.additionalInfo}</p>
          )}
        </MessageBubble>
      ))}
      
      {isTyping && <TypingIndicator />}
    </div>
  );
};

export default ChatWindow;
