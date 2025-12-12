import React from 'react';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentQuestion, 
  totalQuestions 
}) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  
  return (
    <div 
      className="w-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
      role="region"
      aria-label="Quiz progress"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-base font-semibold text-gray-700">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <span className="text-base font-semibold text-blue-600">
          {Math.round(progress)}% Complete
        </span>
      </div>
      
      <div 
        className="w-full bg-gray-200 rounded-full h-3 overflow-hidden"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Quiz progress: ${Math.round(progress)}%`}
      >
        <div 
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
