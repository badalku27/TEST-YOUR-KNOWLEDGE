import React from 'react';

interface OptionButtonProps {
  option: string;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}

const OptionButton: React.FC<OptionButtonProps> = ({ 
  option, 
  isSelected, 
  onSelect, 
  index 
}) => {
  return (
    <button
      onClick={onSelect}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      className={`
        w-full text-left px-6 py-4 rounded-2xl border-2 
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-4 focus:ring-blue-300
        ${isSelected 
          ? 'border-blue-500 bg-gradient-to-r from-blue-100 to-indigo-100 shadow-lg transform scale-[1.02]' 
          : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 hover:shadow-md hover:transform hover:scale-[1.01]'
        }
      `}
      aria-label={`Option ${index + 1}: ${option}`}
    >
      <div className="flex items-center gap-4">
        <div 
          className={`
            flex-shrink-0 w-6 h-6 rounded-full border-2 
            transition-all duration-300
            flex items-center justify-center
            ${isSelected 
              ? 'border-blue-600 bg-blue-600' 
              : 'border-gray-300 bg-white'
            }
          `}
          aria-hidden="true"
        >
          {isSelected && (
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          )}
        </div>
        
        <span 
          className={`
            text-lg font-medium transition-colors duration-300
            ${isSelected ? 'text-blue-900' : 'text-gray-700'}
          `}
        >
          {option}
        </span>
      </div>
    </button>
  );
};

export default OptionButton;
