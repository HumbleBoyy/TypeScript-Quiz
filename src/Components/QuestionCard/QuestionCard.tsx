import React from 'react';
// Types
import { AnswerObject } from '../../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';
import '../../index.css'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers = [], 
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <Wrapper className='warpper'>
    <p className='number paragraph'>
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} className='paragraph'/>
   
      {answers.map((answer) => (
        <ButtonWrapper key={answer}
          $correct={userAnswer?.correctAnswer === answer}
          $userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback} className='question_wrapper'>
            <span dangerouslySetInnerHTML={{ __html: answer }} className='options'/>
          </button>
        </ButtonWrapper>
      ))}
    </Wrapper>
);

export default QuestionCard;
