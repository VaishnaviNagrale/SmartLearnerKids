
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { audio: 'a.mp3', correctAnswer: 'A', options: ['A', 'B', 'C', 'D'] },
    { audio: 'b.mp3', correctAnswer: 'B', options: ['A', 'B', 'C', 'D'] },
    { audio: 'c.mp3', correctAnswer: 'C', options: ['A', 'B', 'C', 'D'] },
    { audio: 'd.mp3', correctAnswer: 'D', options: ['A', 'B', 'C', 'D'] },
    { audio: 'e.mp3', correctAnswer: 'E', options: ['E', 'F', 'G', 'H']},
    { audio: 'f.mp3', correctAnswer: 'F', options: ['E', 'F', 'G', 'H']},
    { audio: 'g.mp3', correctAnswer: 'G', options: ['E', 'F', 'G', 'H']},
    { audio: 'h.mp3', correctAnswer: 'H', options: ['E', 'F', 'G', 'H']},
    { audio: 'i.mp3', correctAnswer: 'I', options: ['I', 'J', 'K', 'L']},
    { audio: 'j.mp3', correctAnswer: 'J', options: ['I', 'J', 'K', 'L']},
    { audio: 'k.mp3', correctAnswer: 'K', options: ['I', 'J', 'K', 'L']},
    { audio: 'l.mp3', correctAnswer: 'L', options: ['I', 'J', 'K', 'L']},
    { audio: 'm.mp3', correctAnswer: 'M', options: ['M', 'N', 'O', 'P']},
    { audio: 'n.mp3', correctAnswer: 'N', options: ['M', 'N', 'O', 'P']},
    { audio: 'o.mp3', correctAnswer: 'O', options: ['M', 'N', 'O', 'P']},
    { audio: 'p.mp3', correctAnswer: 'P', options: ['M', 'N', 'O', 'P']},
    { audio: 'q.mp3', correctAnswer: 'Q', options: ['Q', 'R', 'S', 'T']},
    { audio: 'r.mp3', correctAnswer: 'R', options: ['Q', 'R', 'S', 'T']},
    { audio: 's.mp3', correctAnswer: 'S', options: ['Q', 'R', 'S', 'T']},
    { audio: 't.mp3', correctAnswer: 'T', options: ['Q', 'R', 'S', 'T']},
    { audio: 'u.mp3', correctAnswer: 'U', options: ['U', 'V', 'W', 'X']},
    { audio: 'v.mp3', correctAnswer: 'V', options: ['U', 'V', 'W', 'X']},
    { audio: 'w.mp3', correctAnswer: 'W', options: ['U', 'V', 'W', 'X']},
    { audio: 'x.mp3', correctAnswer: 'X', options: ['U', 'V', 'W', 'X']},
    { audio: 'y.mp3', correctAnswer: 'Y', options: ['Y', 'Z', 'A', 'B']},
    { audio: 'z.mp3', correctAnswer: 'Z', options: ['Y', 'Z', 'A', 'B']},
    {audio: '0.mp3', correctAnswer: '0', options: ['0', '1', '2', '3']},
    {audio: '1.mp3', correctAnswer: '1', options: ['0', '1', '2', '3']},
    {audio: '2.mp3', correctAnswer: '2', options: ['0', '1', '2', '3']},
    {audio: '3.mp3', correctAnswer: '3', options: ['0', '1', '2', '3']},
    {audio: '4.mp3', correctAnswer: '4', options: ['4', '5', '6', '7']},
    {audio: '5.mp3', correctAnswer: '5', options: ['4', '5', '6', '7']},
    {audio: '6.mp3', correctAnswer: '6', options: ['4', '5', '6', '7']},
    {audio: '7.mp3', correctAnswer: '7', options: ['4', '5', '6', '7']},
    {audio: '8.mp3', correctAnswer: '8', options: ['8', '9', '10', '11']},
    {audio: '9.mp3', correctAnswer: '9', options: ['8', '9', '10', '11']},
  ];

  const selectedQuestions = [];
  const remainingQuestions = [...questions];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    selectedQuestions.push(remainingQuestions.splice(randomIndex, 1)[0]);
  }

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === selectedQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: "linear-gradient(to bottom right, #ffffff, #fa9490, #85e7f8)", animation: "gradientAnimation 30s infinite" }}>
  <div className="absolute inset-0 flex justify-center items-center">
    {showResult ? (
      <Result score={score} totalQuestions={selectedQuestions.length} restartQuiz={restartQuiz} />
    ) : (
      <Question
        audio={selectedQuestions[currentQuestion].audio}
        options={selectedQuestions[currentQuestion].options}
        correctAnswer={selectedQuestions[currentQuestion].correctAnswer}
        handleAnswer={handleAnswer}
      />
    )}
  </div>
</div>

  );
};

export default Quiz;
