import { useStore } from '@/store';
import { useState } from 'react';

export const useStates = () => {
  const { quizList, setEndTime, setQuizList, setIsLoading, isLoading } =
    useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const currentQuestion = quizList[currentQuestionIndex];

  const getter = { currentQuestion, currentQuestionIndex, quizList, isLoading };
  const setter = {
    setEndTime,
    setQuizList,
    setIsLoading,
    setCurrentQuestionIndex,
  };

  return {
    ...getter,
    ...setter,
  };
};
