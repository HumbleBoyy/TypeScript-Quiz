import React, { useState } from 'react'
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './Components/QuestionCard/QuestionCard'
// Types
import { Diffiqulity } from './API';




const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)


  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Diffiqulity.EASY))
  const startQuiz = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  const nextQuiz = () => {

  }
  return (
    <>
      <div className='App'>
          <h1>React Quiz</h1>
          <button className='start'>Start</button>
          <p className='score'>Score</p>
          <p>Loading...</p>

          {/* <QuestionCard 
           questionNumber={number + 1}         
           totalQuestions={TOTAL_QUESTIONS}
           questions={questions[number].question}
           answers={questions[number].answers}
           userAnswer={userAnswers ? userAnswers[number]: undefined}
           callback={checkAnswer}
           /> */}
          <button className='next'>Next Quiz</button>
      </div>
    </>
  )
}

export default App
