import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { StoreType, initialStateType } from './type';

const initialState: initialStateType = {
  quizList: [],
  startTime: 0,
  endTime: 0,
  answerList: [],
};

export const useStore = create<StoreType>()(
  devtools((set, get) => ({
    ...initialState,
    setQuizList: (payload) => {
      set((state) => ({
        ...state,
        quizList: payload,
      }));
    },
    setStartTime: (payload) => {
      set((state) => ({
        ...state,
        startTime: payload,
      }));
    },
    setEndTime: (payload) => {
      set((state) => ({
        ...state,
        endTime: payload,
      }));
    },
    setAnswerList: (answer) => {
      set((state) => ({
        ...state,
        answerList: [...state.answerList, answer],
      }));
    },
  }))
);
