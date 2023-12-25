'use client';

import { useStore } from '@/store';
import { Button } from '../atoms/button';
import { Container } from '../start/styles';
import IncorrectAnswers from './inCorrectAnswer';

const Result = () => {
  const { startTime, endTime, answerList } = useStore();
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

  return (
    <>
      <Container>
        총 소요 시간 : {formattedTime}
        <p>
          정답을 {answerList.filter((answer) => answer === 'O').length}개
          맞췄어요!
        </p>
        <p>
          아쉽게도 {answerList.filter((answer) => answer === 'X').length}개의
          오답이 있어요.
        </p>
        <Button>오답노트 보기</Button>
        <IncorrectAnswers />
      </Container>
    </>
  );
};

export default Result;
