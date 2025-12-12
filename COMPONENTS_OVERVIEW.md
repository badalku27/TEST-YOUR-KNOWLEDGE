# Component Guide

Quick reference for all components in Test Your Knowledge.

## Types

quiz.ts has the basic interfaces:
```typescript
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
```

questions.ts holds the actual quiz data:
```typescript
import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: "Meow-Meow"
  },
  {
    id: 2,
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctAnswer: "Ice Cream"
  },
  {
    id: 3,
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctAnswer: "Yellow"
  },
  {
    id: 4,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctAnswer: "Infinite"
  }
];
```

## OptionButton

File: `src/components/OptionButton.tsx`

Props:
- option: string
- isSelected: boolean
- onSelect: () => void
- index: number

Just a clickable option button with a radio-style indicator. Turns blue when selected, scales up on hover.

## ProgressBar

File: `src/components/ProgressBar.tsx`

Props:
- currentQuestion: number
- totalQuestions: number

Shows which question you're on and a visual progress bar. Pretty straightforward.

## QuestionCard

File: `src/components/QuestionCard.tsx`

Props:
- question: string
- options: string[]
- selectedOption: string | undefined
- onOptionSelect: (option: string) => void
- questionNumber: number

Displays the question text and renders three OptionButton components. Has a fade animation when switching questions.

## NavigationButtons

File: `src/components/NavigationButtons.tsx`

Props:
- onPrevious: () => void
- onNext: () => void
- onSubmit: () => void
- canGoBack: boolean
- canGoNext: boolean
- isLastQuestion: boolean
- hasSelectedAnswer: boolean

The circular previous/next buttons at the bottom. Submit button shows up on the last question.

## ResultPage

File: `src/components/ResultPage.tsx`

Props:
- score: Score
- onRestart: () => void

Shows your final score with a circular progress ring. Message changes based on how well you did (75%+ is excellent, 50-75% is good, below 50% needs practice).

## QuizPage (Main Component)

File: `src/components/QuizPage.tsx`

This is the main component that ties everything together. Manages quiz state and handles all the logic:

```typescript
const [quizState, setQuizState] = useState<QuizState>({
  currentQuestionIndex: 0,
  selectedAnswers: {},
  isCompleted: false
});
```

Functions:
- handleOptionSelect - saves your answer
- handlePrevious - go back a question
- handleNext - move forward
- calculateScore - figures out your score
- handleSubmit - finishes the quiz
- handleRestart - starts over

## Running the App

Dev server:
```bash
npm run dev
```

Build:
```bash
npm run build
```

## How It Works

1. You see question 1 with 3 options
2. Pick an answer (required to move forward)
3. Use previous/next buttons to navigate
4. Last question shows a submit button
5. Results page shows your score
6. Can restart or "keep learning"

Correct answers:
- Q1: Meow-Meow
- Q2: Ice Cream
- Q3: Yellow
- Q4: Infinite

## Styling

Using Tailwind with these patterns:
- Rounded corners: rounded-[20px] or rounded-2xl
- Gradients: from-blue-50 via-indigo-50 to-purple-50
- Shadows: shadow-lg, shadow-xl
- Transitions: duration-300

Main container maxes out at 1440px width for desktop.

## Component Tree

```
QuizPage
├── ProgressBar
├── QuestionCard
│   └── OptionButton (×3)
├── NavigationButtons
└── ResultPage
```

Built with React, TypeScript, Tailwind, and Framer Motion
