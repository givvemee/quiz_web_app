'use client';

import { useEffect } from 'react';
import { Button } from '../atoms/button';
import { Text } from '../atoms/text';
import { useHandlers } from './handlers';
import { ButtonBox, Container, TextBox, Title } from './styles';

const StartQuiz = () => {
  const { fetchQuizList, getStartTime } = useHandlers();

  useEffect(() => {
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
