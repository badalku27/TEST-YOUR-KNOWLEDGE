export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: Record<number, string>;
  isCompleted: boolean;
}

export interface Score {
  correct: number;
  total: number;
  percentage: number;
}
