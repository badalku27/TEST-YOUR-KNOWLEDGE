import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';
import { QuizState, Score } from '../types/quiz';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import NavigationButtons from './NavigationButtons';
import ResultPage from './ResultPage';

const QuizPage: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswers: {},
    isCompleted: false
  });

  const totalQuestions = questions.length;
  const currentQuestion = questions[quizState.currentQuestionIndex];
  const currentAnswer = quizState.selectedAnswers[quizState.currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [prev.currentQuestionIndex]: option
      }
    }));
  };

  const handlePrevious = () => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1)
    }));
  };

  const handleNext = () => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: Math.min(totalQuestions - 1, prev.currentQuestionIndex + 1)
    }));
  };

  // count correct answers
  const calculateScore = (): Score => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (quizState.selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    
    const percentage = Math.round((correct / totalQuestions) * 100);
    
    return {
      correct,
      total: totalQuestions,
      percentage
    };
  };

  const handleSubmit = () => {
    setQuizState(prev => ({
      ...prev,
      isCompleted: true
    }));
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswers: {},
      isCompleted: false
    });
  };

  if (quizState.isCompleted) {
    return (
      <ResultPage 
        score={calculateScore()} 
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl" style={{ minHeight: '1024px', maxWidth: '1440px' }}>
        <header className="text-center mb-10" role="banner">
          <h1 className="text-5xl font-bold text-gray-800 mb-3 tracking-tight">
            Knowledge Quiz
          </h1>
          <p className="text-xl text-gray-600">
            Test your knowledge with fun questions!
          </p>
        </header>

        <div className="mb-10">
          <ProgressBar 
            currentQuestion={quizState.currentQuestionIndex}
            totalQuestions={totalQuestions}
          />
        </div>

        {/* Question Card with Animation */}
        <div className="mb-10">
          <AnimatePresence mode="wait">
            <QuestionCard
              key={quizState.currentQuestionIndex}
              question={currentQuestion.question}
              options={currentQuestion.options}
              selectedOption={currentAnswer}
              onOptionSelect={handleOptionSelect}
              questionNumber={quizState.currentQuestionIndex + 1}
            />
          </AnimatePresence>
        </div>

        <div className="mb-8">
          <NavigationButtons
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
            canGoBack={quizState.currentQuestionIndex > 0}
            canGoNext={quizState.currentQuestionIndex < totalQuestions - 1}
            isLastQuestion={quizState.currentQuestionIndex === totalQuestions - 1}
            hasSelectedAnswer={currentAnswer !== undefined}
          />
        </div>

        <p className="text-center text-sm text-gray-500 mt-8" aria-live="polite">
          <span className="sr-only">Tip: </span>
          Use Tab to focus • Enter or Space to select • Arrow buttons to navigate
        </p>
      </div>
    </div>
  );
};

export default QuizPage;
