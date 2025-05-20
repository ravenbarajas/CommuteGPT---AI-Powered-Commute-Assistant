import React from 'react';
import { suggestedPrompts } from '@/lib/mockData';

interface PromptSuggestionsProps {
  onSelectPrompt: (prompt: string) => void;
}

const PromptSuggestions: React.FC<PromptSuggestionsProps> = ({ onSelectPrompt }) => {
  return (
    <div className="flex overflow-x-auto pb-2 mb-1 hidden-scroll">
      {suggestedPrompts.map((prompt, index) => (
        <button
          key={index}
          className="px-3 py-1.5 bg-[#f7f7f8] text-gray-600 border border-gray-200 rounded-md text-sm mr-2 whitespace-nowrap hover:bg-gray-100 transition-colors"
          onClick={() => onSelectPrompt(prompt)}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default PromptSuggestions;
