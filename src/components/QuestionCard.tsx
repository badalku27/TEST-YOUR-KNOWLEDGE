import React from 'react';
import { motion } from 'framer-motion';
import OptionButton from './OptionButton';

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedOption: string | undefined;
  onOptionSelect: (option: string) => void;
  questionNumber: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  selectedOption,
  onOptionSelect,
  questionNumber
}) => {
  return (
    <motion.div
      key={questionNumber}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-[20px] p-8 shadow-xl"
      role="group"
      aria-labelledby={`question-${questionNumber}`}
    >
      <h2 
        id={`question-${questionNumber}`}
        className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed"
      >
        {question}
      </h2>

      <div 
        className="space-y-4"
        role="radiogroup"
        aria-labelledby={`question-${questionNumber}`}
      >
        {options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            isSelected={selectedOption === option}
            onSelect={() => onOptionSelect(option)}
            index={index}
          />
        ))}
      </div>

      {!selectedOption && (
        <p className="text-sm text-gray-600 mt-6 text-center italic">
          Please select an answer to continue
        </p>
      )}
    </motion.div>
  );
};

export default QuestionCard;
