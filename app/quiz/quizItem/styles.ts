import { Button } from '@/app/atoms/button';
import { Text } from '@/app/atoms/text';
import { styled } from '@/styles/stitches.config';

export const Question = styled(Text, {
  margin: '10px 0',
});

export const OptionContainer = styled('div', {
  width: '80%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  padding: '30px',
  justifyContent: 'center',
});

export const MoveNextButton = styled(Button, {
  position: 'absolute',
  bottom: '30px',
  right: '30px',
});

export const AnswerMessages = styled(Text, {
  variants: {
    isCorrect: {
      true: {
        color: '$primary',
      },
      false: {
        color: '$warning',
      },
    },
  },
});
