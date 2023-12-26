'use client';

import { useStore } from '@/store';
import { QuizListType } from '@/store/type';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '../atoms/button';
import { Text } from '../atoms/text';
import { ButtonBox, Container, TextBox, Title } from './styles';

const StartQuiz = () => {
  const { push } = useRouter();
  const { setStartTime, setQuizList } = useStore();

  const getStartTime = () => {
    setStartTime(Date.now());
    push('/quiz');
  };

  useEffect(() => {
    const fetchQuizList = async () => {
      try {
        const response = await axios.get(
          'https://opentdb.com/api.php?amount=10&type=multiple'
        );
        const decodedResults = response.data.results.map(
          (item: QuizListType) => {
            const parser = new DOMParser();
            const decodedQuestion = parser.parseFromString(
              item.question,
              'text/html'
            ).body.textContent;

            return {
              ...item,
              question: decodedQuestion,
            };
          }
        );

        setQuizList(decodedResults);
        const storedQuizList = JSON.stringify(decodedResults);
        localStorage.setItem('quizList', storedQuizList);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };
    fetchQuizList();
  }, []);

  return (
    <Container>
      <TextBox>
        <Title isBold={'true'} align={'center'}>
          퀴즈
        </Title>
        <Text>퀴즈는 총 10문항으로 구성되어 있습니다.</Text>
      </TextBox>
      <ButtonBox>
        <Button onClick={getStartTime}>문제 풀기</Button>
      </ButtonBox>
    </Container>
  );
};

export default StartQuiz;
