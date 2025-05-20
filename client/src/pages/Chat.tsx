import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ChatWindow, { Message } from '@/components/ChatWindow';
import InputBar from '@/components/InputBar';
import { findMatchingResponse } from '@/lib/mockData';
import { v4 as uuidv4 } from 'uuid';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Initial welcome message
  useEffect(() => {
    setMessages([
      {
        id: uuidv4(),
        text: '👋 Hello! I\'m CommuteGPT, your Philippines commute assistant. How can I help you navigate today?',
        isUser: false,
      }
    ]);
  }, []);

  const handleSendMessage = (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      text,
      isUser: true,
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot thinking time (1-2 seconds)
    setTimeout(() => {
      setIsTyping(false);
      
      // Generate bot response based on keywords
      const response = findMatchingResponse(text);
      
      const botMessage: Message = {
        id: uuidv4(),
        text: 'Here\'s what I found for you:',
        isUser: false,
        route: response,
      };
      
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, Math.random() * 1000 + 1000); // Random delay between 1-2 seconds
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <ChatWindow messages={messages} isTyping={isTyping} />
      <InputBar onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
