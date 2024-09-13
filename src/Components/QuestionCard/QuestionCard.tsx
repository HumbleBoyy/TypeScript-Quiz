import React from 'react'

type Props = {
    questions: string;
    answers: string[];
    callback: any;
    userAnswer: boolean;
    questionNumber: number;
    totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({
    questions, 
    answers, 
    callback, 
    userAnswer,
    questionNumber,
    totalQuestions,
}) => {
  return (
    <>
      <div className='card'>
         <p className='questionTotal'>Question: {questionNumber}/{totalQuestions}</p>


         <p dangerouslySetInnerHTML={{__html: questions}}/>

         <div>
              {answers.map(answer => (
                <>
                  <button disabled={userAnswer} onClick={callback}>
                     <span dangerouslySetInnerHTML={{__html: answer}}/>
                  </button>
                </>
              ))}
         </div>
      </div>
    </>
  )
}

export default QuestionCard;
