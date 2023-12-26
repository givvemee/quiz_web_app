'use client';

import { useStore } from '@/store';
import { ResponsivePie } from '@nivo/pie';
import { useState } from 'react';
import { Button } from '../atoms/button';
import { Text } from '../atoms/text';
import { Container } from '../start/styles';
import IncorrectAnswers from './inCorrectAnswer';
import {
  ButtonWrapper,
  ChartBox,
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

  const data = [
    { id: '정답', label: '정답', value: corrects },
    { id: '오답', label: '오답', value: incorrects },
  ];

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

            <ChartBox>
              <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={3}
                cornerRadius={0}
                colors={['#8A98F1', '#FF6961']}
                borderWidth={1.5}
                arcLinkLabelsTextColor="black"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                theme={{
                  labels: {
                    text: {
                      fontSize: 14,
                      fill: '#000000',
                    },
                  },
                  legends: {
                    text: {
                      fontSize: 12,
                      fill: '#000000',
                    },
                  },
                }}
                legends={[
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    translateX: 15,
                    translateY: 50,
                    itemsSpacing: 10,
                    itemWidth: 80,
                    itemHeight: 20,
                    symbolShape: 'circle',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: 'black',
                        },
                      },
                    ],
                  },
                ]}
              />
            </ChartBox>
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
