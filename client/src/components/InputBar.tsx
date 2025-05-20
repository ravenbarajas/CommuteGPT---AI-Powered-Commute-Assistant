import React, { useState } from 'react';
import PromptSuggestions from './PromptSuggestions';

interface InputBarProps {
  onSendMessage: (message: string) => void;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handlePromptSelect = (prompt: string) => {
    setMessage(prompt);
    onSendMessage(prompt);
  };

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-3">
      <PromptSuggestions onSelectPrompt={handlePromptSelect} />
      
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Ask about commuting in the Philippines..."
          className="flex-1 border border-gray-300 rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-primary hover:bg-primary-dark text-white rounded-r-full px-4 py-2 flex items-center transition-colors"
          onClick={handleSubmit}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputBar;
