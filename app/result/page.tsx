'use client';

import { Button } from '../atoms/button';
import { Text } from '../atoms/text';
import { Container } from '../start/styles';
import Chart from './Chart';
import { useHandlers } from './handlers';
import IncorrectAnswers from './inCorrectAnswer';
import { useStates } from './states';
import {
  ButtonWrapper,
  InfoContainer,
  ResultContainer,
  SlideContainer,
  TotalTime,
} from './styles';

const Result = () => {
  const states = useStates();
  const {
    startTime,
    endTime,
    answerList,
    wrongAnswersNoteOpen,
    setWrongAnswersNote,
    corrects,
    incorrects,
    data,
  } = states;
  const { formatTimeDifference } = useHandlers();

  const formattedTime = formatTimeDifference(startTime, endTime);

  return (
    <>
      <Container>
        <ResultContainer className={wrongAnswersNoteOpen ? 'flex' : ''}>
          <InfoContainer className={wrongAnswersNoteOpen ? 'slideOut' : ''}>
            <TotalTime type={'main'} isBold={'true'} align={'center'}>
              총 소요 시간 : <span>{formattedTime}</span>
            </TotalTime>
            {corrects > 0 && (
              <Text align={'center'}>정답을 {corrects}개 맞췄어요!</Text>
            )}
            {incorrects > 0 && (
              <Text align={'center'}>
                아쉽게도 {answerList.filter((answer) => answer === 'X').length}
                개의 오답이 있어요.
              </Text>
            )}

            <Chart data={data} />
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
