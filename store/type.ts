export type initialStateType = {
  quizList: QuizListType[];
  startTime: number;
  endTime: number;
  answerList: AnswerType[];
};

export type QuizListType = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type AnswerType = 'O' | 'X';

export interface setInitialStateType {
  setQuizList: (quiz: QuizListType[]) => void;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  setAnswerList: (answer: AnswerType) => void;
}

export interface StoreType extends initialStateType, setInitialStateType {}
