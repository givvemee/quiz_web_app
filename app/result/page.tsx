// Result.tsx
'use client';

import { useStore } from '@/store';
import { useState } from 'react';
import { Button } from '../atoms/button';
import { Text } from '../atoms/text';
import { Container } from '../start/styles';
import IncorrectAnswers from './inCorrectAnswer';
import {
  ButtonWrapper,
  InfoContainer,
  ResultContainer,
  SlideContainer,
  TotalTime,
} from './styles';

const Result = () => {
  const { startTime, endTime, answerList } = useStore();
  const [wrongAnswersNoteOpen, setWrongAnswersNote] = useState(false);
  const formatTimeDifference = (start: number, end: number) => {
    const timeDiffInSeconds = Math.floor((end - start) / 1000);

    const hours = Math.floor(timeDiffInSeconds / 3600);
    const minutes = Math.floor((timeDiffInSeconds % 3600) / 60);
    const seconds = timeDiffInSeconds % 60;

    const formattedTimeArray = [
      hours > 0 ? `${hours}시` : null,
      minutes > 0 ? `${minutes}분` : null,
      seconds > 0 || (hours === 0 && minutes === 0) ? `${seconds}초` : null,
    ].filter(Boolean);

    return formattedTimeArray.join(' ');
  };

  const formattedTime = formatTimeDifference(startTime, endTime);
  const corrects = answerList.filter((answer) => answer === 'O').length;
  const incorrects = answerList.filter((answer) => answer === 'X').length;

  return (
    <>
      <Container>
        <ResultContainer>
          <InfoContainer>
            <TotalTime type={'main'} isBold={'true'}>
              총 소요 시간 : <span>{formattedTime}</span>
            </TotalTime>
            {corrects > 0 && <Text>정답을 {corrects}개 맞췄어요!</Text>}
            {incorrects > 0 && (
              <Text>
                아쉽게도 {answerList.filter((answer) => answer === 'X').length}
                개의 오답이 있어요.
              </Text>
            )}

            <ButtonWrapper>
              <Button onClick={() => setWrongAnswersNote((prev) => !prev)}>
                오답노트 보기
              </Button>
            </ButtonWrapper>
          </InfoContainer>

          {wrongAnswersNoteOpen && (
            <SlideContainer className={wrongAnswersNoteOpen ? 'slideIn' : ''}>
              <IncorrectAnswers />
            </SlideContainer>
          )}
        </ResultContainer>
      </Container>
    </>
  );
};

export default Result;
