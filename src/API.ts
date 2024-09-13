
export type Question = {
    category: string;
    correct_answer: string;
    difficulity: string;
    incorrect_answer:string[];
    question: string;
    type:string
}

export type QuestionState = Question & {answers: string[]}
export enum Diffiqulity {
    EASY = 'easy',
    MEDUIM = 'meduim',
    HARD = 'hard'
}
export const fetchQuizQuestions = async(amount: number, diffiqulity: Diffiqulity) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&diffiqulity=${diffiqulity}&type=multiple`;
    const data = await(await fetch(endPoint)).json();
    return data.map.results
}