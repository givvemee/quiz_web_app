import { useStore } from '@/store';
import { useState } from 'react';

export const useStates = () => {
  const { startTime, endTime, answerList } = useStore();
  const [wrongAnswersNoteOpen, setWrongAnswersNote] = useState(false);
  const corrects = answerList.filter((answer) => answer === 'O').length;
  const incorrects = answerList.filter((answer) => answer === 'X').length;

  const data = [
    { id: '정답', label: '정답', value: corrects },
    { id: '오답', label: '오답', value: incorrects },
  ];

  const getter = { startTime, endTime, answerList, wrongAnswersNoteOpen, corrects, incorrects, data };
  const setter = { setWrongAnswersNote };

  return {
    ...getter,
    ...setter,
  };
};
