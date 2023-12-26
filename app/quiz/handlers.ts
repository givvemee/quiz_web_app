import { useRouter } from 'next/navigation';
import { StatesType } from './type';

export const useHandlers = (states: StatesType) => {
  const { push } = useRouter();
  const {
    quizList,
    setEndTime,
    setIsLoading,
    currentQuestionIndex,
    setCurrentQuestionIndex,
  } = states;

  const moveNextPage = () => {
    if (currentQuestionIndex + 1 < quizList.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setEndTime(Date.now());
      setIsLoading(true);
      push('/result');
    }
  };

  return {
    moveNextPage,
  };
};
