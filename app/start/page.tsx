'use client';

import { useStore } from '@/store';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '../atoms/button';
import { Text } from '../atoms/text';
import { ButtonBox, Container, TextBox } from './styles';

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
          'https://opentdb.com/api.php?amount=10&category=24&type=multiple'
        );
        setQuizList(response.data.results);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };
    fetchQuizList();
  }, []);

  return (
    <Container>
      <TextBox>
        <Text type={'title'} isBold={'true'}>
          퀴즈
        </Text>
        <Text>퀴즈는 총 10문항으로 구성되어 있습니다.</Text>
      </TextBox>
      <ButtonBox>
        <Button onClick={getStartTime}>문제 풀기</Button>
      </ButtonBox>
    </Container>
  );
};

export default StartQuiz;
