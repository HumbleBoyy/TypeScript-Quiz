import React, { useState } from 'react'
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './Components/QuestionCard/QuestionCard'
// Types
import { QuestionsState, Difficulity } from './API';


// Styled
import {Wrapper } from './App.styles';
import { PacmanLoader, RingLoader, ScaleLoader } from 'react-spinners';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer:string;
}


const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)




  const startQuiz = async () => {
        setLoading(true)
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
          TOTAL_QUESTIONS,
          Difficulity.EASY
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([])
        setNumber(0);
        setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
     
    if(!gameOver){
      //User answer
      const answer = e.currentTarget.value;
      // Check the answer against correct answer

      const correct = questions[number].correct_answer === answer;

      if(correct)setScore(prev => prev + 1)

      //Save answer in the array for users answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }

      setUserAnswers((prev)=> [...prev, answerObject])
    }
  }

  const nextQuiz = () => {
     //Move onto the next quiz if not the question
     const nextQuestion = number + 1;

     if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true)
     }else{
      setNumber(nextQuestion)
     }
  }
  return (
    <>
     
      <Wrapper className='App'>
          <h1 className='title'>Random Quiz</h1>
          {
            gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className='start' onClick={startQuiz}>Start</button>
            ) : null}
          
          {
            !gameOver ? <p className='score'>{score}</p> : null
          }
          {loading ?<ScaleLoader
                  color="#ffffff"
                  height={50}
                  margin={1}
                  radius={20}
                  width={30}
                /> : null}

          {!loading && !gameOver && (
             <>
               <QuestionCard 
                questionNumber={number + 1}         
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] :  undefined}
                callback={checkAnswer}
           />
             </>
          )}

          {
            !gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ? (
              <>
                <button className='next' onClick={nextQuiz}>Next Quiz</button>
              </>
            ): null}
          
          
      </Wrapper>
    </>
  )
}

export default App
