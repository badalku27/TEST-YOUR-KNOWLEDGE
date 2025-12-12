# Quiz App

Just a simple quiz app I made with React and TypeScript. Nothing fancy, but it works pretty well.

## What it does

It's a basic quiz with 4 questions. You pick answers, navigate through questions, and get your score at the end. Pretty straightforward.

- Shows one question at a time
- You can go back and forth between questions
- Progress bar at the top shows where you are
- At the end you see how many you got right
- Colors and animations are kinda nice I think

## Running it

```bash
npm install
npm run dev
```

That's it. Opens on localhost:3000 (or 3001 if 3000 is taken).

## The Questions

1. What sound does a cat make? (Bhau-Bhau, Meow-Meow, Oink-Oink)
2. What would you probably find in your fridge? (Shoes, Ice Cream, Books)
3. What color are bananas? (Blue, Yellow, Red)
4. How many stars are in the sky? (Two, Infinite, One Hundred)

You can change these in `src/data/questions.ts` if you want different ones.

## Changing stuff

The questions are in `src/data/questions.ts`. Just edit that file:

```typescript
{
  id: 1,
  question: "Your question?",
  options: ["Option 1", "Option 2", "Option 3"],
  correctAnswer: "Option 2"
}
```

Colors and styles are mostly Tailwind classes in the component files. The main blue gradient background is `from-blue-50 via-indigo-50 to-purple-50`.

## Components

- **QuizPage** - main container, handles all the state
- **QuestionCard** - shows the question and options
- **OptionButton** - individual answer buttons
- **ProgressBar** - the bar at the top
- **NavigationButtons** - prev/next/submit buttons
- **ResultPage** - shows your final score

They're all in `src/components/` if you need to look at them.

## Tech stuff

Built with:
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (for the smooth transitions)
- Vite (dev server)

Made it keyboard accessible too - you can tab through everything and use Enter/Space to select. Added ARIA labels for screen readers.

## Bonus

There's also a "Best of Luck!" animation component in there (`src/components/BestOfLuck.tsx`) if you want to show something cute before the quiz starts. Has a little waving paw and everything.

## That's about it

Feel free to use it however you want. It's just a quiz app.

---

Made by Badal kumar  
GitHub: [badalku27](https://github.com/badalku27)
