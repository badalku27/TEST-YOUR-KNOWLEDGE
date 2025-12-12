import React from 'react';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
  hasSelectedAnswer: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  onSubmit,
  canGoBack,
  canGoNext,
  isLastQuestion,
  hasSelectedAnswer
}) => {
  return (
    <nav 
      className="flex justify-between items-center gap-6"
      aria-label="Quiz navigation"
    >
      <button
        onClick={onPrevious}
        disabled={!canGoBack}
        className={`
          w-16 h-16 rounded-full shadow-lg
          transition-all duration-300 ease-in-out
          flex items-center justify-center text-2xl
          focus:outline-none focus:ring-4 focus:ring-blue-300
          ${canGoBack
            ? 'bg-white hover:bg-blue-50 text-gray-700 hover:shadow-xl hover:scale-110'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }
        `}
        aria-label="Previous question"
        title="Previous"
      >
        ←
      </button>

      <div className="flex-1" />

      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          disabled={!hasSelectedAnswer}
          className={`
            px-8 py-4 rounded-full shadow-lg font-bold text-lg
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-4 focus:ring-green-300
            ${hasSelectedAnswer
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl hover:scale-110'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
          aria-label="Submit quiz"
          title="Submit Quiz"
        >
          Submit ✓
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!canGoNext || !hasSelectedAnswer}
          className={`
            w-16 h-16 rounded-full shadow-lg
            transition-all duration-300 ease-in-out
            flex items-center justify-center text-2xl
            focus:outline-none focus:ring-4 focus:ring-blue-300
            ${canGoNext && hasSelectedAnswer
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-xl hover:scale-110'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
          aria-label="Next question"
          title="Next"
        >
          →
        </button>
      )}
    </nav>
  );
};

export default NavigationButtons;
