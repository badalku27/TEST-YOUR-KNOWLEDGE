import React from 'react';
import { motion } from 'framer-motion';
import { Score } from '../types/quiz';

interface ResultPageProps {
  score: Score;
  onRestart: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ score, onRestart }) => {
  const { correct, total, percentage } = score;

  const getPerformanceDetails = () => {
    if (percentage >= 75) {
      return {
        message: "Excellent Work!",
        subtitle: "You're a quiz champion! 🎉",
        color: "from-green-400 to-emerald-500",
        textColor: "text-green-600",
        bgColor: "bg-green-50"
      };
    } else if (percentage >= 50) {
      return {
        message: "Good Job!",
        subtitle: "You're doing great! 🌟",
        color: "from-blue-400 to-indigo-500",
        textColor: "text-blue-600",
        bgColor: "bg-blue-50"
      };
    } else {
      return {
        message: "Keep Practicing!",
        subtitle: "You'll get better! 💪",
        color: "from-orange-400 to-red-500",
        textColor: "text-orange-600",
        bgColor: "bg-orange-50"
      };
    }
  };

  const performance = getPerformanceDetails();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-8"
    >
      <div className="w-full max-w-2xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-[20px] p-12 shadow-2xl">
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-5xl font-bold text-gray-800 mb-3"
            >
              {performance.message}
            </motion.h1>
            <p className="text-xl text-gray-600">
              {performance.subtitle}
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="relative">
              <svg className="w-56 h-56 transform -rotate-90">
                <circle
                  cx="112"
                  cy="112"
                  r="100"
                  stroke="currentColor"
                  strokeWidth="14"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="112"
                  cy="112"
                  r="100"
                  stroke="currentColor"
                  strokeWidth="14"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 100}`}
                  strokeDashoffset={`${2 * Math.PI * 100 * (1 - percentage / 100)}`}
                  className={`transition-all duration-1000 ease-out`}
                  style={{
                    stroke: percentage >= 75 ? '#10b981' : percentage >= 50 ? '#3b82f6' : '#f97316'
                  }}
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Percentage text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span 
                  className={`text-6xl font-bold ${performance.textColor}`}
                  aria-label={`${percentage} percent`}
                >
                  {percentage}%
                </span>
                <span className="text-gray-600 text-lg mt-2">
                  {correct} of {total} correct
                </span>
              </div>
            </div>
          </div>

          {/* Score Details */}
          <div className={`${performance.bgColor} rounded-2xl p-6 mb-8`}>
            <div className="text-center">
              <p className="text-lg text-gray-700">
                You answered <strong className={performance.textColor}>{correct}</strong> out of{' '}
                <strong>{total}</strong> questions correctly
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://www.example.com/learn', '_blank')}
              className={`
                px-8 py-4 rounded-full font-bold text-lg shadow-lg
                transition-all duration-300 ease-in-out
                bg-gradient-to-r ${performance.color} text-white
                hover:shadow-xl hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-blue-300
              `}
              aria-label="Keep learning - visit resources"
            >
              Keep Learning! 📚
            </button>
            
            <button
              onClick={onRestart}
              className={`
                px-8 py-4 rounded-full font-bold text-lg shadow-lg
                transition-all duration-300 ease-in-out
                bg-white text-gray-700 border-2 border-gray-300
                hover:bg-gray-50 hover:shadow-xl hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-gray-300
              `}
              aria-label="Start quiz again"
            >
              Start Again 🔄
            </button>
          </div>
        </div>

        {/* Accessibility announcement */}
        <div 
          role="status" 
          aria-live="polite" 
          className="sr-only"
        >
          Quiz completed. You scored {percentage} percent, answering {correct} out of {total} questions correctly.
        </div>
      </div>
    </motion.div>
  );
};

export default ResultPage;
