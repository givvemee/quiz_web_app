import { Text } from '@/app/atoms/text';
import { styled } from '@/styles/stitches.config';

export const InCorrectAnswerContainer = styled('div', {
  padding: '10px 0',

  '>div': {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0 20px',
  },
});

export const WrongQuestion = styled(Text, {
  marginBottom: '10px',
});

export const Quesions = styled('span', {
  color: '$primary',
  display: 'inline-block',
});

export const Answers = styled(Text, {
  display: 'flex',
  justifyContent: 'flex-end',
  color: '$primary',
});
