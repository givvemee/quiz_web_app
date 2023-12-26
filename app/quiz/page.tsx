'use client';

import { useEffect } from 'react';
import Loading from '../atoms/Loading';
import { Text } from '../atoms/text';
import { Container } from '../start/styles';
import { useHandlers } from './handlers';
import QuizItem from './quizItem';
import { useStates } from './states';
import { CurrentQuestion } from './styles';

const Quiz = () => {
  const states = useStates();
  const {
    quizList,
    setQuizList,
    isLoading,
    currentQuestion,
    currentQuestionIndex,
  } = states;
  const { moveNextPage } = useHandlers(states);

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
