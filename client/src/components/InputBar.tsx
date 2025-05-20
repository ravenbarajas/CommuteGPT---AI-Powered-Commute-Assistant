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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handlePromptSelect = (prompt: string) => {
    setMessage(prompt);
    onSendMessage(prompt);
  };

  // Auto-adjust the height of the textarea based on content
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    setMessage(target.value);
    
    // Reset height to auto to properly calculate new height
    target.style.height = 'auto';
    // Set new height based on scrollHeight (with a max height)
    target.style.height = `${Math.min(target.scrollHeight, 150)}px`;
  };

  return (
    <div className="bg-white border-t border-gray-200 pb-4 pt-2 px-4 w-full">
      <div className="input-container">
        <PromptSuggestions onSelectPrompt={handlePromptSelect} />
        
        <div className="relative mt-2">
          <div className="chat-input flex items-center">
            <textarea
              placeholder="Ask about commuting in the Philippines..."
              className="flex-1 py-3 pl-4 pr-10 resize-none h-[44px] min-h-[44px] max-h-[150px] focus:outline-none rounded-lg"
              value={message}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              className={`absolute right-3 p-1 rounded-md ${message.trim() ? 'text-primary hover:bg-gray-100' : 'text-gray-300'}`}
              onClick={handleSubmit}
              disabled={!message.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.444-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">CommuteGPT provides real-time commute suggestions for the Philippines</p>
        </div>
      </div>
    </div>
  );
};

export default InputBar;
