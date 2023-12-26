'use client';

import { useStore } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '../atoms/Loading';
import { Text } from '../atoms/text';
import { Container } from '../start/styles';
import QuizItem from './quizItem';
import { CurrentQuestion } from './styles';

const Quiz = () => {
  const { push } = useRouter();
  const { quizList, setEndTime, setQuizList, setIsLoading, isLoading } =
    useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const currentQuestion = quizList[currentQuestionIndex];

  const moveNextPage = () => {
    if (currentQuestionIndex + 1 < quizList.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setEndTime(Date.now());
      setIsLoading(true);
      push('/result');
    }
  };

  useEffect(() => {
    const storedQuizList = localStorage.getItem('quizList');
    if (storedQuizList) {
      setQuizList(JSON.parse(storedQuizList));
    }
  }, []);

  return (
    <Container>
      {isLoading && <Loading />}
      <Text type={'main'} isBold={'true'}>
        <CurrentQuestion>{currentQuestionIndex + 1}</CurrentQuestion> /{' '}
        {quizList.length}
      </Text>
      {currentQuestion && (
        <QuizItem
          question={currentQuestion.question}
          options={[
            ...currentQuestion.incorrect_answers,
            currentQuestion.correct_answer,
          ]}
          correctAnswer={currentQuestion.correct_answer}
          moveNextPage={moveNextPage}
        />
      )}
    </Container>
  );
};

export default Quiz;
