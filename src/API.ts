import { shuffleArray } from "./utils";


export type Question = {
    category: string;
    correct_answer: string;
    difficulity: string;
    incorrect_answers:string[];
    question: string;
    type:string
}



export enum Difficulity {
    EASY = 'easy',
    MEDUIM = 'meduim',
    HARD = 'hard'
}

export type QuestionsState = Question & {answers: string[]}

export const fetchQuizQuestions = async(amount: number, difficulity: Difficulity) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulity}&type=multiple`;

    const data = await (await fetch(endPoint)).json();
    
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
      }))
}